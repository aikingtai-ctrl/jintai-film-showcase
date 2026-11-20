/* ============ 影片生成过程展示站 · 渲染逻辑（无构建、无依赖，file:// 与 GitHub Pages 均可直接打开） ============ */
(function () {
  const P = (window.__PROJECTS = window.__PROJECTS || {});
  window.registerProject = function (d) { P[d.id] = d; };

  const $ = (s, r = document) => r.querySelector(s);
  const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const jsArg = (s) => esc(JSON.stringify(String(s ?? "")));
  const fmtDur = (s) => { s = Math.round(+s || 0); return `${String(Math.floor(s / 60)).padStart(2, "0")}:${String(s % 60).padStart(2, "0")}`; };
  const tcOf = (sh) => sh.tc || (sh.start != null ? `${fmtDur(sh.start)}–${fmtDur(sh.start + (sh.duration || 0))}` : "");

  function loadScript(src) {
    return new Promise((res, rej) => { const s = document.createElement("script"); s.src = src + "?v=20261120-1"; s.onload = res; s.onerror = () => rej(new Error("加载失败 " + src)); document.head.appendChild(s); });
  }
  async function loadAll() {
    await loadScript("projects/index.js");
    const ids = window.SHOWCASE_INDEX || [];
    await Promise.all(ids.map((id) => loadScript(`projects/${id}/data.js`).catch((e) => console.warn(e.message))));
    return ids.map((id) => P[id]).filter(Boolean);
  }
  const asset = (id, p) => (!p ? "" : /^(https?:|data:|\/)/.test(p) ? p : `projects/${id}/${p}`);
  const protectedVideo = () => false;
  const releaseVideo = (src) => String(src || "").startsWith("https://github.com/aikingtai-ctrl/jintai-film-showcase/releases/download/media-v1/");
  const localVideo = (id, sources) => sources.map((src) => asset(id, src)).find((src) => src && (!/^https?:/i.test(src) || releaseVideo(src))) || "";
  const previewVideo = (p) => localVideo(p.id, (p.shots || []).map((s) => s.video));
  const autoPreviewVideo = (p) => localVideo(p.id, [(p.film || {}).src, ...(p.shots || []).map((s) => s.video)]);
  const playTitle = (p) => protectedVideo((p.film || {}).src || ((p.shots || []).find((s) => s.video) || {}).video || "") ? "在画布播放" : p.film && p.film.src ? "播放成片" : "逐镜连播";
  function setVideo(v, src, play) {
    let help = v.parentElement.querySelector(".video-help");
    if (!help) { help = document.createElement("div"); help.className = "video-help"; v.after(help); }
    const online = protectedVideo(src);
    v.hidden = online;
    help.hidden = !online;
    const showFailure = (message) => { help.hidden = false; help.innerHTML = `<p>${esc(message)}</p><a class="btn" href="${esc(src)}" target="_blank" rel="noopener">单独打开视频</a>`; };
    v.onerror = () => showFailure("影片加载失败，可单独打开视频检查播放。");
    if (online) {
      v.removeAttribute("src"); v.load();
      help.innerHTML = `<a class="btn" href="${esc(src)}" target="_blank" rel="noopener">▶ 在画布打开影片</a><p>在线影片需要在同一浏览器登录画布。可用上一镜 / 下一镜切换，再点击此按钮播放。</p>`;
      if (play) window.open(src, "_blank", "noopener");
    } else {
      help.textContent = "";
      v.src = src;
      if (play) v.play().catch((e) => { if (e.name !== "AbortError") showFailure("播放未能开始，请点击播放器中的播放按钮，或单独打开视频。"); });
    }
  }

  /* ---------- 通用：灯箱 / toast / 复制 ---------- */
  function ensureLightbox() {
    if ($("#lb")) return;
    document.body.insertAdjacentHTML("beforeend", `<div class="lightbox" id="lb"><button class="x" aria-label="关闭">×</button><button class="btn sm fs" type="button" aria-label="进入全屏">⛶ 全屏</button><div class="inner"><div id="lb-media"></div><div class="cap" id="lb-cap"></div></div></div><div class="toast" id="toast"></div>`);
    const lb = $("#lb");
    const close = () => {
      const fullscreen = document.fullscreenElement === lb;
      lb.classList.remove("on", "selected-playlist-on");
      const media = $("#lb-media"), video = media.querySelector("video");
      if (video) { video.onerror = null; video.pause(); video.removeAttribute("src"); video.load(); }
      media.innerHTML = "";
      if (fullscreen) document.exitFullscreen().catch(() => {});
    };
    lb.addEventListener("click", (e) => { if (e.target === lb || e.target.classList.contains("x")) close(); });
    lb.querySelector(".fs").addEventListener("click", (e) => { e.stopPropagation(); requestPlaylistFullscreen(); });
    document.addEventListener("keydown", (e) => { if (e.key === "Escape") close(); });
    document.addEventListener("fullscreenchange", () => { if (!document.fullscreenElement && lb.classList.contains("selected-playlist-on")) close(); });
  }
  window.openMedia = function (src, cap, isVideo) {
    ensureLightbox();
    $("#lb-media").innerHTML = isVideo ? `<video controls playsinline></video>` : `<img src="${esc(src)}" alt="">`;
    if (isVideo) setVideo($("#lb-media video"), src, true);
    $("#lb-cap").textContent = cap || "";
    $("#lb").classList.add("on");
  };
  function toast(msg) { ensureLightbox(); const t = $("#toast"); t.textContent = msg; t.classList.add("on"); clearTimeout(t._h); t._h = setTimeout(() => t.classList.remove("on"), 1600); }
  function requestPlaylistFullscreen() {
    const lb = $("#lb");
    if (!lb?.requestFullscreen) { toast("当前浏览器不支持全屏，已在窗口内连播"); return; }
    try { lb.requestFullscreen().catch(() => toast("浏览器未进入全屏，已在窗口内连播")); }
    catch { toast("浏览器未进入全屏，已在窗口内连播"); }
  }
  window.copyText = async function (txt, label) {
    try { await navigator.clipboard.writeText(txt); toast(`已复制${label ? "：" + label : ""}`); }
    catch { const ta = document.createElement("textarea"); ta.value = txt; document.body.appendChild(ta); ta.select(); document.execCommand("copy"); ta.remove(); toast("已复制"); }
  };


  /* ---------- 逐镜连播：没有合成成片的作品也能从头播到尾 ---------- */
  window.__playlists = window.__playlists || {};
  function mountPlaylist(host, list, opts = {}) {
    if (!list.length) return null;
    let i = 0;
    const hint = opts.hint || "逐镜连播 · 未合成成片", nav = opts.nav || "镜";
    host.innerHTML = `<video playsinline ${opts.controls === false ? "" : "controls"} ${opts.muted ? "muted" : ""} preload="metadata"></video><div class="pl-cap"><span class="pl-idx"></span><span class="pl-title"></span><span class="pl-hint">${esc(hint)}</span></div>`;
    const v = host.querySelector("video"), idx = host.querySelector(".pl-idx"), ttl = host.querySelector(".pl-title");
    const load = (n, play) => {
      if (n >= list.length && opts.repeat === false) { v.pause(); host.querySelector(".pl-hint").textContent = "播放完毕"; return; }
      i = (n + list.length) % list.length;
      setVideo(v, list[i].src, play);
      idx.textContent = `${i + 1} / ${list.length}`;
      ttl.textContent = list[i].label || "";
      host.querySelector(".pl-hint").textContent = protectedVideo(list[i].src) ? "在线镜头 · 在画布播放" : hint;
    };
    v.addEventListener("ended", () => load(i + 1, true));
    host.querySelector(".pl-cap").insertAdjacentHTML("beforeend", `<span class="pl-btns"><button class="btn sm" data-d="-1">◀ 上一${esc(nav)}</button><button class="btn sm" data-d="1">下一${esc(nav)} ▶</button>${opts.repeat === false ? '<button class="btn sm" data-replay="1">↻ 重播</button>' : ""}</span>`);
    host.querySelectorAll(".pl-btns button").forEach((b) => b.addEventListener("click", (e) => { e.stopPropagation(); load(b.dataset.replay ? 0 : i + (+b.dataset.d), true); }));
    load(0, !!opts.autoplay);
    return { next: () => load(i + 1, true), video: v };
  }
  window.openPlaylist = function (pid) {
    ensureLightbox();
    const p = P[pid]; if (!p) return;
    const list = (p.shots || []).filter((s) => s.video).map((s) => ({ src: asset(pid, s.video), label: `${s.id} ${s.title || s.action || ""}`.slice(0, 60) }));
    if (p.film && p.film.src) { openMedia(asset(pid, p.film.src), p.title, true); return; }
    $("#lb-media").innerHTML = `<div class="playlist"></div>`; $("#lb-cap").textContent = p.title;
    mountPlaylist($("#lb-media .playlist"), list, { autoplay: true });
    $("#lb").classList.add("on");
  };

  /* ---------- 首页 ---------- */
  async function renderIndex() {
    ensureLightbox();
    const list = (await loadAll()).sort((a, b) => String(b.date || "").localeCompare(String(a.date || "")));
    const grid = $("#grid"), stats = $("#stats");
    const totalShots = list.reduce((n, p) => n + ((p.shots || []).length), 0);
    const totalSec = list.reduce((n, p) => n + (+((p.meta || {}).durationSec) || +((p.film || {}).duration) || 0), 0);
    stats.innerHTML = `<div class="stat"><b>${list.length}</b><span>部作品</span></div><div class="stat"><b>${totalShots}</b><span>个镜头</span></div><div class="stat"><b>${fmtDur(totalSec)}</b><span>总时长</span></div>`;
    const storageKey = "showcase-auto-preview-v1";
    let selectedIds = new Set();
    try {
      const saved = JSON.parse(localStorage.getItem(storageKey) || "[]");
      if (Array.isArray(saved)) selectedIds = new Set(saved.filter((id) => typeof id === "string"));
    } catch { /* 浏览器禁用本地存储时，本页内的选择仍可使用。 */ }
    const selectedWorks = () => [...selectedIds].map((id) => P[id]).filter((p) => p && autoPreviewVideo(p));
    const updateSelectedButton = () => {
      const n = selectedWorks().length, button = $("#play-selected");
      button.disabled = n === 0;
      button.textContent = `▶ 全屏连播已选（${n}）`;
    };
    const failedPreviews = new Set();
    const reducedMotion = window.matchMedia ? window.matchMedia("(prefers-reduced-motion: reduce)") : { matches: false };
    let hoveredCard = null, suppressedHoverCard = null, activeCard = null, activeVideo = null, activeSource = "", previewQueued = false;
    const stopPreview = () => {
      const v = activeVideo;
      activeCard = activeVideo = null;
      activeSource = "";
      if (!v) return;
      v.pause();
      v.removeAttribute("src");
      v.load();
      v.remove();
    };
    const posterVisibility = (card, src) => {
      if (!card || !card.isConnected || !src || failedPreviews.has(src)) return null;
      const r = card.querySelector(".poster").getBoundingClientRect();
      const visible = Math.max(0, Math.min(r.bottom, window.innerHeight) - Math.max(r.top, 0));
      return { ratio: visible / Math.max(r.height, 1), distance: Math.abs((r.top + r.bottom) / 2 - window.innerHeight / 2) };
    };
    const pickPreview = () => {
      if (document.hidden || $("#lb").classList.contains("on") || reducedMotion.matches) return null;
      const hoverSource = hoveredCard && (hoveredCard.dataset.autoplay === "true" ? hoveredCard.dataset.autoPreview : hoveredCard.dataset.preview || hoveredCard.dataset.autoPreview);
      const hover = posterVisibility(hoveredCard, hoverSource);
      if (hover && hover.ratio > .05) return { card: hoveredCard, src: hoverSource };
      let candidate = null, bestDistance = Infinity;
      grid.querySelectorAll(".card[data-autoplay='true']").forEach((card) => {
        const src = card.dataset.autoPreview;
        const view = posterVisibility(card, src);
        if (view && view.ratio >= .5 && view.distance < bestDistance) {
          candidate = { card, src };
          bestDistance = view.distance;
        }
      });
      return candidate;
    };
    const syncPreview = () => {
      const next = pickPreview();
      if (next?.card === activeCard && (next?.src || "") === activeSource) return;
      stopPreview();
      if (!next) return;
      const { card, src } = next;
      const v = document.createElement("video");
      v.className = "pv";
      v.muted = v.defaultMuted = true;
      v.loop = v.playsInline = true;
      v.preload = "none";
      v.setAttribute("muted", "");
      v.setAttribute("playsinline", "");
      v.addEventListener("playing", () => { if (activeVideo === v) v.classList.add("ready"); });
      v.addEventListener("error", () => {
        if (activeVideo !== v) return;
        failedPreviews.add(src);
        stopPreview();
        queuePreview();
      });
      card.querySelector(".poster").appendChild(v);
      activeCard = card;
      activeVideo = v;
      activeSource = src;
      v.src = src;
      v.play().catch((error) => {
        if (activeVideo !== v) return;
        if (error.name !== "AbortError") failedPreviews.add(src);
        stopPreview();
        queuePreview();
      });
    };
    const queuePreview = () => {
      if (previewQueued) return;
      previewQueued = true;
      requestAnimationFrame(() => { previewQueued = false; syncPreview(); });
    };
    const tags = [...new Set(list.flatMap((p) => [p.modelShort, ...(p.tags || [])]).filter(Boolean))];
    $("#tags").innerHTML = tags.map((t) => `<span class="chip click" data-t="${esc(t)}">${esc(t)}</span>`).join("");
    let q = "", tag = "";
    const draw = () => {
      stopPreview();
      hoveredCard = suppressedHoverCard = null;
      const rows = list.filter((p) => {
        const hay = [p.title, p.subtitle, p.logline, p.modelShort, ...(p.tags || [])].join(" ").toLowerCase();
        return (!q || hay.includes(q)) && (!tag || [p.modelShort, ...(p.tags || [])].includes(tag));
      });
      grid.innerHTML = rows.length ? rows.map((p) => {
        const preview = previewVideo(p), autoPreview = autoPreviewVideo(p), chosen = selectedIds.has(p.id);
        return `
        <a class="card" href="project.html?id=${encodeURIComponent(p.id)}" data-pid="${esc(p.id)}" data-preview="${esc(preview)}" data-auto-preview="${esc(autoPreview)}" data-autoplay="${chosen}">
          <div class="poster"><img src="${esc(asset(p.id, p.poster))}" alt="" loading="lazy">${(p.film && p.film.src) || (p.shots || []).some((s) => s.video) ? `<button class="play" title="${playTitle(p)}" onclick="event.preventDefault();event.stopPropagation();openPlaylist('${esc(p.id)}')">▶</button>` : ""}${autoPreview ? `<button type="button" class="auto-preview-toggle${chosen ? " on" : ""}" data-autoplay-toggle aria-pressed="${chosen}" aria-label="${esc(`${chosen ? "关闭" : "开启"}《${p.title}》自动预览`)}" title="选中后进入画面时静音自动预览">${chosen ? "✓ 已选自动预览" : "自动预览"}</button>` : ""}<div class="dur">${fmtDur((p.meta || {}).durationSec || (p.film || {}).duration)}${p.film && p.film.src ? " · 成片" : ""}</div></div>
          <div class="body">
            <h3>${esc(p.title)}${p.demo ? '<span class="demo-badge">示例</span>' : ""}</h3>
            <div class="sub">${esc(p.subtitle || "")}</div>
            <div class="log">${esc(p.logline || "")}</div>
            <div class="chips">${[p.modelShort, ...(p.tags || [])].filter(Boolean).map((t) => `<span class="chip${t === p.modelShort ? " gold" : ""}">${esc(t)}</span>`).join("")}</div>
            <div class="foot"><span>${(p.shots || []).length} 镜 · ${esc((p.meta || {}).resolution || "")}</span><span>${esc(p.date || "")}</span></div>
          </div></a>`;
      }).join("")
        : `<div class="empty">没有匹配的作品。</div>`;
      updateSelectedButton();
      queuePreview();
    };
    grid.addEventListener("mouseover", (e) => { const c = e.target.closest(".card"); if (c && c !== hoveredCard && c !== suppressedHoverCard) { hoveredCard = c; queuePreview(); } });
    grid.addEventListener("mouseout", (e) => {
      if (suppressedHoverCard && !suppressedHoverCard.contains(e.relatedTarget)) suppressedHoverCard = null;
      if (hoveredCard && !hoveredCard.contains(e.relatedTarget)) { hoveredCard = null; queuePreview(); }
    });
    grid.addEventListener("click", (e) => {
      const button = e.target.closest("[data-autoplay-toggle]");
      if (!button) return;
      e.preventDefault();
      e.stopPropagation();
      const card = button.closest(".card"), id = card.dataset.pid;
      const chosen = !selectedIds.has(id);
      if (chosen) selectedIds.add(id); else selectedIds.delete(id);
      if (!chosen) { suppressedHoverCard = card; hoveredCard = null; if (activeCard === card) stopPreview(); }
      try { localStorage.setItem(storageKey, JSON.stringify([...selectedIds])); }
      catch { toast("选择已在本页生效，浏览器未能保存设置"); }
      if (chosen && reducedMotion.matches) toast("系统已开启减少动态效果，自动预览暂时停用");
      card.dataset.autoplay = String(chosen);
      button.classList.toggle("on", chosen);
      button.setAttribute("aria-pressed", String(chosen));
      button.setAttribute("aria-label", `${chosen ? "关闭" : "开启"}《${P[id]?.title || "此作品"}》自动预览`);
      button.textContent = chosen ? "✓ 已选自动预览" : "自动预览";
      updateSelectedButton();
      queuePreview();
    });
    $("#play-selected").addEventListener("click", () => {
      const works = selectedWorks();
      const clips = works.flatMap((p) => {
        const film = localVideo(p.id, [(p.film || {}).src]);
        if (film) return [{ src: film, label: p.title }];
        return (p.shots || []).map((s) => {
          const src = localVideo(p.id, [s.video]);
          return src ? { src, label: `${p.title} · ${s.id || "镜头"} ${s.title || s.action || ""}`.slice(0, 100) } : null;
        }).filter(Boolean);
      });
      if (!clips.length) { toast("所选作品暂无可播放的本地视频"); return; }
      stopPreview();
      const lb = $("#lb");
      $("#lb-media").innerHTML = `<div class="playlist"></div>`;
      $("#lb-cap").textContent = `已选 ${works.length} 部作品，共 ${clips.length} 段 · 按点选顺序连播`;
      lb.classList.add("on", "selected-playlist-on");
      requestPlaylistFullscreen();
      mountPlaylist($("#lb-media .playlist"), clips, { autoplay: true, repeat: false, hint: "已选作品连播", nav: "段" });
    });
    $("#q").addEventListener("input", (e) => { q = e.target.value.trim().toLowerCase(); draw(); });
    $("#tags").addEventListener("click", (e) => { const c = e.target.closest(".chip"); if (!c) return; tag = tag === c.dataset.t ? "" : c.dataset.t; [...$("#tags").children].forEach((x) => x.classList.toggle("on", x.dataset.t === tag)); draw(); });
    window.addEventListener("scroll", queuePreview, { passive: true });
    window.addEventListener("resize", queuePreview);
    window.addEventListener("pagehide", stopPreview);
    document.addEventListener("visibilitychange", () => { if (document.hidden) stopPreview(); else queuePreview(); });
    if (reducedMotion.addEventListener) reducedMotion.addEventListener("change", queuePreview);
    new MutationObserver(queuePreview).observe($("#lb"), { attributes: true, attributeFilter: ["class"] });
    draw();
    if (!list.length) grid.innerHTML = `<div class="empty">还没有作品。</div>`;
  }

  /* ---------- 作品页 ---------- */
  async function renderProject() {
    ensureLightbox();
    const id = new URLSearchParams(location.search).get("id");
    const root = $("#app");
    if (!id) { root.innerHTML = `<div class="wrap empty">缺少 ?id=</div>`; return; }
    try { await loadScript(`projects/${id}/data.js`); } catch (e) { root.innerHTML = `<div class="wrap empty">找不到作品 <code>${esc(id)}</code>（projects/${esc(id)}/data.js）</div>`; return; }
    const p = P[id]; if (!p) { root.innerHTML = `<div class="wrap empty">data.js 没有调用 registerProject()</div>`; return; }
    document.title = `${p.title} · 生成过程`;
    const A = (x) => asset(id, x);
    const shots = p.shots || [];
    const byId = Object.fromEntries(shots.map((s) => [s.id, s]));
    const seqs = (p.sequences && p.sequences.length) ? p.sequences : [{ title: "全片", shots: shots.map((s) => s.id) }];
    const meta = p.meta || {};
    const film = p.film || {};

    const secs = [
      ["story", "剧情"], ["pipeline", "生成流水线"], ["characters", "角色"], ["scenes", "场景"], ["props", "道具"], ["look", "视觉与声音"],
      ["shots", "分镜与提示词"], ["docs", "剧本与备注"], ["generation", "生成参数"], ["deliverables", "交付"],
    ].filter(([k]) => ({ story: p.synopsis || p.concept, pipeline: p.pipeline, characters: p.characters, scenes: p.sceneCards || p.scenes, props: (p.props || []).length, look: p.look, shots: shots.length, docs: (p.docs || []).length, generation: p.generation, deliverables: p.deliverables }[k]));
    const num = (k) => String(secs.findIndex(([x]) => x === k) + 1).padStart(2, "0");

    const dialogueHtml = (sh) => {
      if (sh.dialogue && sh.dialogue.length) return sh.dialogue.map((d) => `<span class="who">${esc(d.who)}</span>「${esc(d.text)}」${d.at && d.at.length ? `<span class="at">${d.at[0]}–${d.at[1]}s</span>` : ""}`).join("<br>");
      return esc(sh.dialogueText || "无对白");
    };
    const isAudioRef = (s) => /\.(mp3|wav|m4a|aac|ogg)$/i.test(s || "");
    const refsHtml = (sh) => (sh.refs || []).length ? `<div class="refs">${sh.refs.map((r) => `<figure>${isAudioRef(r.src) ? `<audio controls preload="none" src="${esc(A(r.src))}" style="width:100%;height:32px;margin-top:8px"></audio>` : `<img src="${esc(A(r.src))}" alt="" loading="lazy" onclick="openMedia('${esc(A(r.src))}','${esc(r.label)}')">`}<figcaption>${esc(r.label)}</figcaption></figure>`).join("")}</div>` : "";
    const thumbEl = (sh) => sh.thumb ? `<img src="${esc(A(sh.thumb))}" alt="" loading="lazy">` : sh.video ? `<video src="${esc(A(sh.video))}#t=0.5" muted playsinline preload="metadata"></video>` : `<div class="nov">${esc(sh.status || "尚无画面")}</div>`;
    const mediaHtml = (sh, i) => `
      <div class="media" ${sh.video ? `onclick="openMedia(${jsArg(A(sh.video))},${jsArg(`${sh.id} · ${sh.action || ""}`)},true)"` : sh.thumb ? `onclick="openMedia(${jsArg(A(sh.thumb))},${jsArg(sh.id)})"` : ""}>
        ${thumbEl(sh)}
        <span class="badge">${esc(sh.id)}</span><span class="tc">${esc(tcOf(sh))}${sh.duration ? ` · ${sh.duration}s` : ""}</span>
      </div>${(sh.alts || []).length ? `<div class="alts">${sh.alts.map((a) => `<button class="btn sm" onclick="openMedia(${jsArg(A(a.src))},${jsArg(`${sh.id} ${a.label}`)},true)">▶ ${esc(a.label)}</button>`).join("")}</div>` : ""}`;
    const promptBlock = (sh, key, label, cls = "") => sh[key] ? `
      <details class="prompt ${cls}"><summary>▸ ${label}<button class="btn sm cp" onclick="event.preventDefault();copyText(this.closest('details').querySelector('pre').textContent,'${esc(sh.id)} ${label}')">复制</button></summary><pre>${esc(sh[key])}</pre></details>` : "";

    /* 卡片视图 */
    const cardView = (list) => seqs.map((q) => {
      const rows = q.shots.map((sid) => byId[sid]).filter((s) => s && list.includes(s));
      if (!rows.length) return "";
      return `<div class="seq"><div class="seq-head"><h3>${esc(q.title)}</h3><span class="tag">${esc(q.sceneTag || "")}</span><span class="cnt">${rows.length} 镜</span></div>
        ${rows.map((sh) => `<article class="shot" id="shot-${esc(sh.id)}">
          <div>${mediaHtml(sh)}${refsHtml(sh)}</div>
          <div class="info">
            <div class="head"><h4>${esc(sh.id)}${sh.title && !sh.title.startsWith(sh.id) ? " · " + esc(sh.title) : sh.title && sh.title !== sh.id ? esc(sh.title.slice(sh.id.length)) : ""}</h4>
              ${sh.framing ? `<span class="chip gold">${esc(sh.framing)}</span>` : ""}${sh.multiShot ? `<span class="chip red">镜内多切</span>` : ""}${sh.frames ? `<span class="chip">${sh.frames} 帧</span>` : ""}${sh.seed ? `<span class="chip">seed ${esc(sh.seed)}</span>` : ""}${sh.instance ? `<span class="chip">${esc(sh.instance)}</span>` : ""}${sh.model ? `<span class="chip">${esc(sh.model)}</span>` : ""}${sh.status && !sh.video ? `<span class="chip red">${esc(sh.status)}</span>` : ""}${sh.take && sh.take !== "untitled" ? `<span class="chip">画布 ${esc(sh.take)}</span>` : ""}</div>
            <div class="action">${esc(sh.action || "")}</div>
            ${sh.camera ? `<div class="row"><b>运镜</b><span>${esc(sh.camera)}${sh.cameraEn && sh.cameraEn !== sh.camera ? ` <span class="dim small">（${esc(sh.cameraEn)}）</span>` : ""}</span></div>` : ""}
            ${sh.lighting ? `<div class="row"><b>灯光</b><span>${esc(sh.lighting)}</span></div>` : ""}
            ${(sh.cast || []).length ? `<div class="row"><b>角色</b><span>${sh.cast.map(esc).join("、")}${sh.sceneTag ? ` <span class="dim">· ${esc(sh.sceneTag)}</span>` : ""}</span></div>` : ""}
            ${sh.picture ? `<div class="row"><b>画面</b><span>${esc(sh.picture)}</span></div>` : ""}
            <div class="row"><b>对白</b><span class="dlg">${dialogueHtml(sh)}</span></div>
            ${sh.sound ? `<div class="row"><b>音效</b><span>${esc(sh.sound)}</span></div>` : ""}
            ${sh.notes ? `<div class="row"><b>备注</b><span class="muted">${esc(sh.notes)}</span></div>` : ""}
            ${sh.params ? `<div class="row"><b>参数</b><span class="mono small">${esc(sh.params)}</span></div>` : ""}
            ${promptBlock(sh, "prompt", "完整生成提示词")}
            ${promptBlock(sh, "firstFramePrompt", "首帧图提示词", "ff")}
          </div></article>`).join("")}</div>`;
    }).join("");

    /* 表格视图（分镜表） */
    const tableView = (list) => `<div class="tblwrap"><table class="shots"><thead><tr><th>#</th><th>画面</th><th>时码</th><th>景别 / 焦段</th><th>运镜</th><th>角色</th><th>动作</th><th>对白</th><th>音效</th><th>提示词</th></tr></thead><tbody>
      ${list.map((sh, i) => `<tr><td class="mono">${esc(sh.id)}</td><td>${sh.thumb ? `<img src="${esc(A(sh.thumb))}" alt="" loading="lazy" onclick="openMedia('${esc(A(sh.video || sh.thumb))}','${esc(sh.id)}',${!!sh.video})">` : sh.video ? `<video src="${esc(A(sh.video))}#t=0.5" muted preload="metadata" onclick="openMedia('${esc(A(sh.video))}','${esc(sh.id)}',true)"></video>` : `<span class="dim tiny">${esc(sh.status || "")}</span>`}</td><td class="mono">${esc(tcOf(sh))}<br>${sh.duration || ""}s</td><td>${esc(sh.framing || "")}</td><td>${esc(sh.camera || "")}</td><td>${(sh.cast || []).map(esc).join("<br>")}</td><td>${esc(sh.action || "")}</td><td class="gold">${dialogueHtml(sh)}</td><td class="muted">${esc(sh.sound || "")}</td><td>${sh.prompt ? `<button class="btn sm" onclick="copyText(window.__PROJECTS['${esc(id)}'].shots.find(s=>s.id==='${esc(sh.id)}').prompt,'${esc(sh.id)}')">复制</button> <a class="btn sm" href="#shot-${esc(sh.id)}" onclick="setShotView('cards')">看</a>` : ""}</td></tr>`).join("")}
      </tbody></table></div>`;

    /* 缩略墙 */
    const wallView = (list) => `<div class="wall">${list.map((sh, i) => `<div class="cell" onclick="${sh.video ? `openMedia('${esc(A(sh.video))}','${esc(sh.id)}',true)` : `location.hash='shot-${esc(sh.id)}';setShotView('cards')`}"><div class="top"><b>${i + 1}</b><span>${esc(sh.id)} · ${esc(sh.framing || "")}</span><span>${esc(tcOf(sh))}</span></div>${sh.thumb ? `<img src="${esc(A(sh.thumb))}" alt="" loading="lazy">` : sh.video ? `<video src="${esc(A(sh.video))}#t=0.5" muted preload="metadata"></video>` : `<div class="nov" style="aspect-ratio:16/9;display:grid;place-items:center;color:#555">${esc(sh.status || "尚无画面")}</div>`}<div class="cap">${esc(sh.action || "")}${sh.sound ? `<span class="sfx">SFX: ${esc(sh.sound)}</span>` : ""}</div></div>`).join("")}</div>`;

    /* Clip 生成表（提交给视频模型的最小单元） */
    const clipView = (list) => `<p class="muted" style="margin:0 0 14px">全部 clip 使用 <b class="gold">${esc((p.generation || {}).model || p.model || "")}</b>${meta.resolution ? `，${esc(meta.resolution)}` : ""}${meta.fps ? `，${meta.fps} fps` : ""}。</p>` + list.map((sh, i) => `
      <div class="clip"><h4>Clip C${i + 1} · ${esc(sh.id)}${sh.title ? " · " + esc(sh.title) : ""} <span class="dim small mono">(${esc(tcOf(sh))})</span></h4>
        <div class="line"><b>参考资产</b><div class="assets">${(sh.refs || []).map((r) => `<span>${isAudioRef(r.src) ? "🔊 " : `<img src="${esc(A(r.src))}" alt="">`}${esc(r.label)}</span>`).join("") || '<span class="dim">无</span>'}</div></div>
        <div class="line"><b>提示词</b><div class="ptxt">${esc(sh.prompt || sh.action || "")}</div></div>
        ${sh.dialogue && sh.dialogue.length ? `<div class="line"><b>对白</b><div class="gold">${dialogueHtml(sh)}</div></div>` : ""}
        <div class="line"><b>时长</b><div>${sh.duration || "?"}s${sh.frames ? ` · ${sh.frames} 帧` : ""}${sh.seed ? ` · seed ${esc(sh.seed)}` : ""}${sh.params ? ` · ${esc(sh.params)}` : ""}</div></div>
        ${sh.prompt ? `<div class="line"><b></b><div><button class="btn sm" onclick="copyText(window.__PROJECTS['${esc(id)}'].shots.find(s=>s.id==='${esc(sh.id)}').prompt,'${esc(sh.id)}')">复制提示词</button></div></div>` : ""}
      </div>`).join("");

    root.innerHTML = `
      <div class="hero"><div class="wrap">
        <div class="player">${film.src ? `<video id="hero-film" poster="${esc(A(p.poster))}" controls playsinline preload="metadata"></video>` : shots.some((s) => s.video) ? `<div class="playlist" id="hero-playlist"></div>` : `<img src="${esc(A(p.poster))}" alt="">`}</div>
        <div class="titles"><div class="l">
          <h1>${esc(p.title)}${p.demo ? '<span class="demo-badge">示例 · 虚构</span>' : ""}</h1>
          <div class="sub">${esc(p.subtitle || "")}</div>
          <div class="log">${esc(p.logline || "")}</div>
          <div class="chips" style="margin-top:14px">${[p.modelShort, ...(p.tags || [])].filter(Boolean).map((t) => `<span class="chip${t === p.modelShort ? " gold" : ""}">${esc(t)}</span>`).join("")}</div>
        </div>
        <div class="metas">
          <div><b>时长</b><span>${fmtDur(meta.durationSec || film.duration)}</span></div>
          <div><b>镜头数</b><span>${shots.length}${meta.generated != null ? ` <span class="dim small">（已生成 ${meta.generated}）</span>` : ""}</span></div>
          <div><b>视频模型</b><span>${esc(p.model || p.modelShort || "")}</span></div>
          <div><b>分辨率</b><span>${esc(meta.resolution || (film.width ? film.width + "×" + film.height : ""))}${meta.fps || film.fps ? ` @ ${meta.fps || film.fps}` : ""}</span></div>
          <div><b>完成日期</b><span>${esc(p.date || "")}</span></div>
          <div><b>画幅</b><span>${esc(meta.aspect || "16:9")}</span></div>
        </div></div>
      </div></div>
      <nav class="secnav"><div class="wrap">${secs.map(([k, n], i) => `<a href="#${k}" data-k="${k}"><i>${String(i + 1).padStart(2, "0")}</i>${n}</a>`).join("")}</div></nav>
      <main class="wrap">
        ${p.synopsis || p.concept ? `<section class="sec" id="story"><div class="sec-head"><span class="num">${num("story")}</span><h2>剧情与高概念</h2><span class="desc">这部片讲什么，规则是什么，导演方法是什么</span></div>
          <div class="two">
            <div class="panel"><h3>剧情简介</h3>${(p.synopsis || []).map((t) => `<p>${esc(t)}</p>`).join("")}
              ${(p.concept || {}).structure ? `<h3 style="margin-top:20px">结构</h3><div class="struct">${p.concept.structure.map((s) => `<div class="item"><b>${esc(s.label)}</b><span class="tc">${esc(s.tc || "")}</span><p>${esc(s.note || "")}</p></div>`).join("")}</div>` : ""}</div>
            <div class="panel">${(p.concept || {}).rules ? `<h3>高概念规则</h3><ul class="rules">${p.concept.rules.map((r) => `<li>${esc(r)}</li>`).join("")}</ul>` : ""}
              ${(p.concept || {}).directorMethod ? `<h3 style="margin-top:20px">导演方法</h3><p>${esc(p.concept.directorMethod)}</p>` : ""}
              ${meta.style ? `<h3 style="margin-top:20px">全片风格锁（写进每条提示词）</h3><p class="mono small muted">${esc(meta.style)}</p>` : ""}</div>
          </div></section>` : ""}
        ${p.pipeline ? `<section class="sec" id="pipeline"><div class="sec-head"><span class="num">${num("pipeline")}</span><h2>生成流水线</h2><span class="desc">从立项到成片，每一步用了什么工具、产出了什么</span></div>
          <div class="pipe">${p.pipeline.map((s) => `<div class="st"><b>${esc(s.stage)}</b><div class="tool">${esc(s.tool || "")}</div><p>${esc(s.note || "")}</p></div>`).join("")}</div></section>` : ""}
        ${p.characters ? `<section class="sec" id="characters"><div class="sec-head"><span class="num">${num("characters")}</span><h2>角色</h2><span class="desc">身份参考图、外观硬锁、音色</span></div>
          <div class="cards">${p.characters.map((c) => { const img = c.image ? A(c.image) : (p.characterImages && p.characterImages[c.id]) ? A(p.characterImages[c.id]) : A(c.ref); return `<div class="pcard">${img ? `<div class="img" onclick="openMedia('${esc(img)}','${esc(c.name)}')"><img src="${esc(img)}" alt="" loading="lazy"></div>` : ""}<div class="body"><div class="id">${esc(c.id || c.key || "")}</div><h3>${esc(c.name)}</h3><div class="role">${esc(c.role || "")}</div>
            ${c.look ? `<div class="kv"><b>外观</b>${esc(c.look)}</div>` : ""}${c.voiceZh || c.voice ? `<div class="kv"><b>音色</b>${esc(c.voiceZh || c.voice)}</div>` : ""}
            ${(c.locks || []).length ? `<ul>${c.locks.map((l) => `<li>${esc(l)}</li>`).join("")}</ul>` : ""}${c.audio ? `<div class="kv" style="margin-top:10px"><b>参考音频</b><audio controls preload="none" src="${esc(A(c.audio))}" style="width:100%;height:32px"></audio></div>` : ""}${c.uses ? `<div class="kv"><b>引用</b>${c.uses} 镜</div>` : ""}
            ${c.ref && img !== A(c.ref) ? `<div class="refs-row"><img src="${esc(A(c.ref))}" alt="" onclick="openMedia('${esc(A(c.ref))}','投模参考图')"></div>` : ""}</div></div>`; }).join("")}</div></section>` : ""}
        ${(p.sceneCards || p.scenes) ? `<section class="sec" id="scenes"><div class="sec-head"><span class="num">${num("scenes")}</span><h2>场景</h2><span class="desc">场景锚定图、空间规则、投给模型的参考单图</span></div>
          <div class="cards">${(p.sceneCards || p.scenes).map((s) => { const img = s.image ? A(s.image) : A(s.ref); return `<div class="pcard">${img ? `<div class="img" onclick="openMedia('${esc(img)}','${esc(s.name || s.key)}')"><img src="${esc(img)}" alt="" loading="lazy"></div>` : ""}<div class="body"><div class="id">${esc(s.id || s.key || "")}</div><h3>${esc(s.name || s.key || "")}</h3><p class="muted">${esc(s.desc || s.look || "")}</p>
            ${(s.rules || []).length ? `<ul>${s.rules.map((l) => `<li>${esc(l)}</li>`).join("")}</ul>` : ""}${s.uses ? `<div class="kv"><b>引用</b>${s.uses} 镜</div>` : ""}
            ${(s.refs || []).length ? `<div class="refs-row">${s.refs.map((r) => `<img src="${esc(A(r))}" alt="" loading="lazy" onclick="openMedia('${esc(A(r))}','参考单图')">`).join("")}</div>` : ""}</div></div>`; }).join("")}</div></section>` : ""}
        ${(p.props || []).length ? `<section class="sec" id="props"><div class="sec-head"><span class="num">${num("props")}</span><h2>道具与其他参考</h2><span class="desc">挂在画布上、按镜连线绑定的参考图</span></div>
          <div class="cards">${p.props.map((c) => `<div class="pcard">${c.image ? `<div class="img" onclick="openMedia('${esc(A(c.image))}','${esc(c.name)}')"><img src="${esc(A(c.image))}" alt="" loading="lazy"></div>` : ""}<div class="body"><div class="id">${esc(c.id || "")}</div><h3>${esc(c.name)}</h3>${c.desc ? `<p class="muted">${esc(c.desc)}</p>` : ""}${c.uses ? `<div class="kv"><b>引用</b>${c.uses} 镜</div>` : ""}</div></div>`).join("")}</div></section>` : ""}
        ${p.look ? `<section class="sec" id="look"><div class="sec-head"><span class="num">${num("look")}</span><h2>视觉与声音风格</h2><span class="desc">${esc(p.look.name || "")}</span></div>
          <div class="panel">${(p.look.palette || []).length ? `<div class="palette">${p.look.palette.map((c) => `<div class="sw"><i style="background:${esc(c.hex)}"></i><b>${esc(c.name)}</b><span>${esc(c.hex)}</span></div>`).join("")}</div>` : ""}
          <div class="kvlist">${(p.look.items || []).map((k) => `<div class="kv"><b>${esc(k.label)}</b>${esc(k.text)}</div>`).join("")}</div></div></section>` : ""}
        ${shots.length ? `<section class="sec" id="shots"><div class="sec-head"><span class="num">${num("shots")}</span><h2>分镜与提示词</h2><span class="desc">按顺序：每一镜怎么设计、投了什么参考、用了哪条提示词、生成结果是什么</span></div>
          <div class="shot-tools"><div class="seg" id="views"><button data-v="cards" class="on">卡片</button><button data-v="table">分镜表</button><button data-v="wall">缩略墙</button><button data-v="clips">Clip 生成表</button></div>
            <input type="search" id="sq" placeholder="搜镜号 / 动作 / 台词 / 提示词…">
            <button class="btn sm" id="expand">展开全部提示词</button><button class="btn sm" id="copyall">复制全部提示词</button><span class="dim small" id="scount"></span></div>
          <div id="shotview"></div></section>` : ""}
        ${(p.docs || []).length ? `<section class="sec" id="docs"><div class="sec-head"><span class="num">${num("docs")}</span><h2>剧本与备注</h2><span class="desc">画布上的剧本、说明、备注类节点原文</span></div>
          ${p.docs.map((d) => `<details class="prompt" open><summary>▸ ${esc(d.title)} <span class="dim small">${esc(d.type)}</span><button class="btn sm cp" onclick="event.preventDefault();copyText(this.closest('details').querySelector('pre').textContent,'${esc(d.title)}')">复制</button></summary><pre>${esc(d.text)}</pre></details>`).join("")}</section>` : ""}
        ${p.generation ? `<section class="sec" id="generation"><div class="sec-head"><span class="num">${num("generation")}</span><h2>生成参数</h2><span class="desc">${esc(p.generation.model || "")}</span></div>
          <div class="panel"><div class="kvlist">${(p.generation.params || []).map((k) => `<div class="kv"><b>${esc(k.k)}</b>${esc(k.v)}</div>`).join("")}</div>
          ${(p.generation.notes || []).length ? `<h3 style="margin-top:22px">实战结论</h3><ul class="notes">${p.generation.notes.map((n) => `<li>${esc(n)}</li>`).join("")}</ul>` : ""}</div></section>` : ""}
        ${p.deliverables ? `<section class="sec" id="deliverables"><div class="sec-head"><span class="num">${num("deliverables")}</span><h2>交付物</h2></div>
          <div class="files">${p.deliverables.map((f) => `<div class="f"><div class="ic">${esc((f.name || "").split(".").pop().slice(0, 4).toUpperCase())}</div><div><b>${f.src ? `<a href="${esc(A(f.src))}" target="_blank" ${/\.(mp4|webm|mov)$/i.test(f.src) ? `onclick="event.preventDefault();openMedia('${esc(A(f.src))}','${esc(f.name)}',true)"` : ""}>${esc(f.name)}</a>` : esc(f.name)}</b><span>${esc(f.note || "")}</span>${f.src && /\.(mp3|wav|m4a|aac|ogg)$/i.test(f.src) ? `<audio controls preload="none" src="${esc(A(f.src))}" style="width:100%;height:30px;margin-top:6px"></audio>` : ""}</div></div>`).join("")}</div></section>` : ""}
      </main>
      <footer><div class="wrap">KINGTAI · 影片生成档案</div></footer>`;

    if ($("#hero-film")) setVideo($("#hero-film"), A(film.src), false);
    if ($("#hero-playlist")) mountPlaylist($("#hero-playlist"), shots.filter((s) => s.video).map((s) => ({ src: A(s.video), label: `${s.id} ${s.title || s.action || ""}`.slice(0, 60) })), { autoplay: false });
    /* 分镜视图切换 / 搜索 */
    let view = "cards", q = "";
    const filtered = () => shots.filter((s) => !q || [s.id, s.title, s.action, s.picture, s.camera, s.framing, s.prompt, s.sound, ...(s.dialogue || []).map((d) => d.text), s.dialogueText].join(" ").toLowerCase().includes(q));
    const drawShots = () => {
      const list = filtered();
      const host = $("#shotview"); if (!host) return;
      host.innerHTML = { cards: cardView, table: tableView, wall: wallView, clips: clipView }[view](list);
      $("#scount").textContent = q ? `匹配 ${list.length} / ${shots.length} 镜` : `${shots.length} 镜`;
      if (q && view === "cards") host.querySelectorAll(".action, .row span, pre").forEach((el) => { if (el.children.length) return; el.innerHTML = el.innerHTML.replace(new RegExp(q.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "gi"), (m) => `<mark class="hl">${m}</mark>`); });
    };
    window.setShotView = (v) => { view = v; $("#views").querySelectorAll("button").forEach((b) => b.classList.toggle("on", b.dataset.v === v)); drawShots(); };
    $("#views")?.addEventListener("click", (e) => { const b = e.target.closest("button"); if (b) setShotView(b.dataset.v); });
    $("#sq")?.addEventListener("input", (e) => { q = e.target.value.trim().toLowerCase(); drawShots(); });
    $("#expand")?.addEventListener("click", (e) => { const all = [...document.querySelectorAll("#shotview details")]; const open = !all.every((d) => d.open); all.forEach((d) => (d.open = open)); e.target.textContent = open ? "收起全部提示词" : "展开全部提示词"; });
    $("#copyall")?.addEventListener("click", () => copyText(filtered().filter((s) => s.prompt).map((s) => `===== ${s.id} ${tcOf(s)} =====\n${s.prompt}`).join("\n\n"), "全部提示词"));
    drawShots();

    /* 章节导航高亮 */
    const links = [...document.querySelectorAll(".secnav a")];
    const io = new IntersectionObserver((es) => { es.forEach((en) => { if (en.isIntersecting) links.forEach((a) => a.classList.toggle("on", a.dataset.k === en.target.id)); }); }, { rootMargin: "-30% 0px -60% 0px" });
    document.querySelectorAll("section.sec").forEach((s) => io.observe(s));
    if (location.hash) setTimeout(() => { const el = $(location.hash); el && el.scrollIntoView(); }, 100);
  }

  document.addEventListener("DOMContentLoaded", () => {
    if (document.body.dataset.page === "index") renderIndex();
    if (document.body.dataset.page === "project") renderProject();
  });
})();
