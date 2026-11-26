window.registerProject({
  "id": "h3-observatory-bullet-time-15s",
  "title": "暴雨夜废弃天文台｜360° 子弹时间定格｜15秒",
  "subtitle": "2026-11-24 · A 机 8×H100 · V2 电影质感与原生声场终版",
  "logline": "暴雨中的废弃天文台里，主角与一名忍者在匕首接触点彻底定格，低机位摄影机顺时针完成一圈 360° 环绕。",
  "date": "2026-11-24",
  "tags": [
    "MiniMax H3",
    "子弹时间",
    "360° 环绕",
    "暴雨天文台",
    "16:9",
    "V2终版",
    "已生成"
  ],
  "model": "MiniMax H3 FL2VA pruned BF16 + SelfLift 20 步，lowres 0.50；四个 90 帧正交象限",
  "modelShort": "H3 FL2VA",
  "poster": "media/img-f63e55e9d937fdbb60a7.jpg",
  "film": {
    "src": "https://github.com/aikingtai-ctrl/jintai-film-showcase/releases/download/media-v1/h3-observatory-bullet-time-15s--19a1c4842ae52a061e31.mp4",
    "duration": 15,
    "width": 1920,
    "height": 1080,
    "fps": "24"
  },
  "meta": {
    "shots": 4,
    "generated": 4,
    "durationSec": 15,
    "resolution": "1920×1080",
    "fps": "24",
    "aspect": "16:9",
    "style": "IMAX 70mm 低机位环绕、冷青灰暴雨与暖琥珀闪电，哑光肤质和悬浮雨滴的三维视差。"
  },
  "synopsis": [
    "暴雨中的废弃天文台里，主角与一名忍者在匕首接触点彻底定格，低机位摄影机顺时针完成一圈 360° 环绕。",
    "QC_01：360° 闭环与三处接缝通过；15.000 秒、1920×1080、24 fps、360 帧、AAC 48 kHz 双声道，ffmpeg -xerror rc=0。"
  ],
  "concept": {
    "rules": [
      "全片仅两名角色，四肢、武器及雨滴冻结。",
      "镜头顺时针匀速完成一圈，不逆向、不停顿。",
      "使用 V2 哑光自然肤质与原生暴雨声。"
    ],
    "directorMethod": "IMAX 70mm 低机位环绕、冷青灰暴雨与暖琥珀闪电，哑光肤质和悬浮雨滴的三维视差。"
  },
  "pipeline": [
    {
      "stage": "① 定妆与正交锚帧",
      "tool": "H3 Image / F1_v2_k000、k090、k180、k270",
      "note": "四个角度锁住双人相对位置，270° 锚帧经纠偏。"
    },
    {
      "stage": "② 四象限并行生成",
      "tool": "H3 FL2VA + SelfLift",
      "note": "四段各 90 帧，seed 见逐镜参数；不抽帧。"
    },
    {
      "stage": "③ 拼片与原生声场",
      "tool": "assemble_v2_4films.py",
      "note": "三道接缝仅做两帧微过渡，沿用 H3 原生暴雨雷声。"
    },
    {
      "stage": "④ 逐帧及实耳验收",
      "tool": "QC_01 / _qc_metrics.json",
      "note": "真顺时针闭环、仅两人、零分身；全片解码无报错。"
    }
  ],
  "characters": [
    {
      "id": "CHR-01",
      "name": "图 1 主角 · V2 定妆",
      "role": "全片连续性锚点",
      "look": "深灰色湿羊毛长风衣主角；与黑衣蒙面忍者对峙。",
      "image": "media/img-7369fc06f214c45d847e.png",
      "uses": 4
    }
  ],
  "props": [
    {
      "id": "QC-BOARD",
      "name": "V2 逐帧验收板",
      "desc": "QC_01：360° 闭环与三处接缝通过；15.000 秒、1920×1080、24 fps、360 帧、AAC 48 kHz 双声道，ffmpeg -xerror rc=0。",
      "image": "media/img-5986ae76b4ba122b1d06.jpg"
    }
  ],
  "shots": [
    {
      "id": "S01",
      "title": "0°→90°：侧面到主角左肩后",
      "start": 0,
      "duration": 3.75,
      "framing": "原始生成段 1824×1024，24 fps；终版 1920×1080",
      "camera": "0°→90°：侧面到主角左肩后",
      "action": "人物、刀刃、雨滴、碎玻璃全程定格，镜头顺时针环绕前 90°。",
      "prompt": "IMAX 70mm bullet-time cinema footage, 40mm lens f/2.8 at 60cm low height. Inside the stormy night abandoned circular observatory dome with the overhead cracked ceiling and frozen warm amber lightning rift against cool slate-blue shadows, time is completely frozen. All physical bodies, clothing folds, raised katana, white-knuckled steel dagger piercing the chest, tense facial features, suspended raindrops, splash droplets, and tiny translucent glass shards remain absolutely stationary mid-air with zero limb motion. The camera smoothly glides along a circular 1.2-meter-radius orbital track 90 degrees CLOCKWISE from the side view toward behind the protagonist's left shoulder, turning cleanly around the central blade impact point so the protagonist rotates continuously from frame-left into foreground-left while the airborne black-masked ninja rotates from frame-right toward midground-right. Strong foreground droplet parallax against distant dome arches, clean smooth natural matte skin texture, soft diffused highlight roll-off, natural subsurface scattering, organic fine 70mm film grain, strictly two combatants only, zero duplicates.",
      "refs": [
        {
          "label": "V2 主角定妆图",
          "src": "media/img-7369fc06f214c45d847e.png"
        }
      ],
      "video": "https://github.com/aikingtai-ctrl/jintai-film-showcase/releases/download/media-v1/h3-observatory-bullet-time-15s--2465210f86c83c726539.mp4",
      "thumb": "media/img-55ba44c4238c88d3cf07.jpg",
      "model": "H3 FL2VA",
      "params": "seed=2026112461 · 原始生成 90 帧 / 3.750 秒；终版使用区间见制作流程",
      "status": "V2 终版已合入"
    },
    {
      "id": "S02",
      "title": "90°→180°：贴镜横越到正面",
      "start": 3.75,
      "duration": 3.75,
      "framing": "原始生成段 1824×1024，24 fps；终版 1920×1080",
      "camera": "90°→180°：贴镜横越到正面",
      "action": "主角从近景左侧横越到右侧，忍者沿反向视差扫过背景；保持匀速无滞留。",
      "prompt": "IMAX 70mm bullet-time cinema footage, 40mm lens f/2.8 at 60cm low height. Inside the stormy night abandoned circular observatory dome with the overhead cracked ceiling and frozen warm amber lightning rift against cool slate-blue shadows, time is completely frozen. Both combatants remain strictly frozen in their exact mid-impact bullet-time poses with zero limb drift, while suspended raindrops and tiny glass shards hang motionless in three-dimensional depth. Maintain completely uniform constant clockwise angular camera speed from the very first frame through the very last frame with zero slowing down, zero linger, and zero pause: as the camera orbits clockwise from 90 degrees to 180 degrees around the central dagger piercing point, the close foreground protagonist passes large across the close foreground moving LEFT-TO-RIGHT while the background airborne black-masked ninja sweeps smoothly behind him RIGHT-TO-LEFT onto frame-left, arriving cleanly with the airborne ninja on frame-left facing right and the protagonist leaning back 15 degrees on frame-right in a clear three-quarter front-left view driving the dagger leftward into the ninja's chest. Clean smooth natural matte skin texture, soft diffused highlight roll-off, natural subsurface scattering, organic fine 70mm film grain, strictly two combatants only, zero duplicates.",
      "refs": [
        {
          "label": "V2 主角定妆图",
          "src": "media/img-7369fc06f214c45d847e.png"
        }
      ],
      "video": "https://github.com/aikingtai-ctrl/jintai-film-showcase/releases/download/media-v1/h3-observatory-bullet-time-15s--c927bafccd213c1a66a7.mp4",
      "thumb": "media/img-37b4b1858802da533ebe.jpg",
      "model": "H3 FL2VA",
      "params": "seed=2026112462 · 原始生成 90 帧 / 3.750 秒；终版使用区间见制作流程",
      "status": "V2 终版已合入"
    },
    {
      "id": "S03",
      "title": "180°→270°：掠过忍者背侧",
      "start": 7.5,
      "duration": 3.75,
      "framing": "原始生成段 1824×1024，24 fps；终版 1920×1080",
      "camera": "180°→270°：掠过忍者背侧",
      "action": "摄影机继续顺时针掠过黑衣忍者，将双人关系转到背侧视角。",
      "prompt": "IMAX 70mm bullet-time cinema footage, 40mm lens f/2.8 at 60cm low height. Inside the stormy night abandoned circular observatory dome with the overhead cracked ceiling and frozen warm amber lightning rift against cool slate-blue shadows, time is completely frozen. Both fighters, weapons, damp wool trench folds, and suspended raindrops remain locked completely still mid-air with zero arm or body motion. Maintain completely uniform constant clockwise angular camera speed from the very first frame through the very last frame with zero slowing down, zero linger, and zero pause: continuing smoothly along the exact same CLOCKWISE 1.2-meter orbital arc from 180 degrees to 270 degrees, the camera sweeps cleanly past the frame-left airborne black-masked ninja so the ninja shifts smoothly into upright mid-air foreground-left back-three-quarter view while the leaning protagonist in his damp charcoal wool coat orbits smoothly from frame-right toward midground-right facing front-left, steel dagger hilt held outer-right piercing leftward into the ninja's chest. Strong spatial parallax across frozen rain droplets, clean smooth natural matte skin texture, soft diffused highlight roll-off, natural subsurface scattering, organic fine 70mm film grain, strictly two combatants only, zero clones.",
      "refs": [
        {
          "label": "V2 主角定妆图",
          "src": "media/img-7369fc06f214c45d847e.png"
        }
      ],
      "video": "https://github.com/aikingtai-ctrl/jintai-film-showcase/releases/download/media-v1/h3-observatory-bullet-time-15s--7ad1260a2191dadc7d5a.mp4",
      "thumb": "media/img-c818fc6d135c0bff4d20.jpg",
      "model": "H3 FL2VA",
      "params": "seed=2026112463 · 原始生成 90 帧 / 3.750 秒；终版使用区间见制作流程",
      "status": "V2 终版已合入"
    },
    {
      "id": "S04",
      "title": "270°→360°：贴镜横越并回到起点",
      "start": 11.25,
      "duration": 3.75,
      "framing": "原始生成段 1824×1024，24 fps；终版 1920×1080",
      "camera": "270°→360°：贴镜横越并回到起点",
      "action": "忍者贴近镜头横越，主角回到初始相对方位，形成闭合的 360° 轨迹。",
      "prompt": "IMAX 70mm bullet-time cinema footage, 40mm lens f/2.8 at 60cm low height. Inside the stormy night abandoned circular observatory dome with the overhead cracked ceiling and frozen warm amber lightning rift against cool slate-blue shadows, time is completely frozen. Both combatants, katana, white-knuckled dagger blade, hair strands, and frozen storm droplets hold completely stationary mid-air with zero movement or pose drift. Maintain completely uniform constant clockwise angular camera speed from the very first frame through the very last frame with zero slowing down, zero linger, and zero pause: completing the final 90 degrees of the exact CLOCKWISE 360-degree circular orbit from 270 degrees smoothly back to the 0-degree side profile, the foreground-left airborne black-masked ninja passes large across the close foreground moving LEFT-TO-RIGHT closer to the lens while the leaning protagonist orbits smoothly behind him RIGHT-TO-LEFT in the midground cleanly back onto frame-left leaning 15 degrees backward driving his steel dagger horizontally rightward into the ninja's chest (never counter-clockwise reverse arc). Continuous clockwise parallax across observatory pillars and frozen water droplets, clean smooth natural matte skin texture, soft diffused highlight roll-off, natural subsurface scattering, organic fine 70mm film grain, strictly two combatants only, zero duplicates.",
      "refs": [
        {
          "label": "V2 主角定妆图",
          "src": "media/img-7369fc06f214c45d847e.png"
        }
      ],
      "video": "https://github.com/aikingtai-ctrl/jintai-film-showcase/releases/download/media-v1/h3-observatory-bullet-time-15s--169679332d11f2d2d711.mp4",
      "thumb": "media/img-8eae3e8b31938d3a99b4.jpg",
      "model": "H3 FL2VA",
      "params": "seed=2026112464 · 原始生成 90 帧 / 3.750 秒；终版使用区间见制作流程",
      "status": "V2 终版已合入"
    }
  ],
  "generation": {
    "model": "MiniMax H3 FL2VA pruned BF16 + SelfLift 20 步，lowres 0.50；四个 90 帧正交象限",
    "params": [
      {
        "k": "终版规格",
        "v": "1920×1080 · 24 fps · 360 帧 · 15.000 秒"
      },
      {
        "k": "原生声场",
        "v": "H3 audio_vae_fp32；按原始验收报告做线性防抽吸混音"
      },
      {
        "k": "排除版本",
        "v": "V1 旧版已归档，作品页只收 V2 定稿"
      }
    ],
    "notes": [
      "逐镜提示词与 seed 来自 V2 原始作业文件；终版拼片规则见制作流程与本地 extra.json 来源账本。"
    ]
  },
  "deliverables": [
    {
      "name": "01_暴雨夜废弃天文台_360度子弹时间定格_15秒_1080p.mp4",
      "src": "https://github.com/aikingtai-ctrl/jintai-film-showcase/releases/download/media-v1/h3-observatory-bullet-time-15s--19a1c4842ae52a061e31.mp4",
      "note": "V2 终版 · 15.000 秒 · 含原生声场"
    }
  ]
});
