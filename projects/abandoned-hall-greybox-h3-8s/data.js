window.registerProject({
  "id": "abandoned-hall-greybox-h3-8s",
  "title": "废弃展馆战术推进｜Blender 三维白模空间锁死 × H3 实战｜8秒",
  "subtitle": "米制蓝图 191 段 0 穿模 × 攻克 180° 剪影翻转防互指 × 根治否定词 BGM 泄漏 × PiP/并排四条全收录",
  "logline": "把 Foyege「三维白模直接锁死空间与走位」搬上金泰免费本地流水线：Blender 5.2 建立 16.5×24m 废弃展馆米制白模实现 191 段 0 穿模预演，投喂 A 机 8×H100 SelfLift 生成零配乐 4 响点射真人战术一镜到底大片。",
  "date": "2026-10-30",
  "tags": [
    "Blender白模",
    "H3",
    "零穿模预演",
    "一镜到底",
    "动作",
    "16:9",
    "已生成"
  ],
  "model": "Blender 5.2 CPU Previs + A 机 MiniMaxH3ReferenceToVideo (SelfLift 6+6=12步)",
  "modelShort": "Blender + H3",
  "poster": "media/img-0a11aa65c4b1e4b9ddb7.jpg",
  "film": {
    "src": "https://github.com/aikingtai-ctrl/jintai-film-showcase/releases/download/media-v1/abandoned-hall-greybox-h3-8s--b753ac71515dd5ef3696.mp4",
    "duration": 8,
    "width": 1920,
    "height": 1080,
    "fps": "24"
  },
  "meta": {
    "shots": 4,
    "generated": 4,
    "durationSec": 8,
    "resolution": "1920×1080",
    "fps": "24",
    "aspect": "16:9",
    "style": "6500K 冷天光 + 双 6000K 战术手电体积光 + 潮湿地面积水反射，0% 配乐纯净同期声。"
  },
  "synopsis": [
    "针对 R1/R2 发现的两大工程难题完成实战突破：① 搭档站位纵深错开 +2.00m 且 Yaw 锁紧 D·F ≥ 0.94、白模背部涂深炭黑 (0.08,0.09,0.10)，彻底治好 2D 方块人 180° 正反翻转互指（Round 3 并发 4 条 4/4 100% 纯背向推进）。",
    "② 发现提示词末尾写 'no background music' 会反向触发 H3 正向词元音乐分支，删净一切否定音乐词改写纯竹竿话筒物理拟音后达成 100% 零配乐纯净同期声（4 声点射与 7.1s 扑水严格咬合）。"
  ],
  "concept": {
    "rules": [
      "三层白模去僵化词法：声明 <Video 1> 仅作不可见空间引导、强制绑定 <Picture 1..3>。",
      "正反双色材质 +2m 错位：彻底根治方块人正反剪影混淆引起的枪口倒指。",
      "绝不写否定音乐词：只写肯定态 Boom-mic 物理拟音消除 BGM 泄漏。"
    ],
    "directorMethod": "Blender 5.2 生成正交米制蓝图与 192 帧 0 穿模白模，通过 VHS_LoadVideo 版本戳文件送入 A 机 SelfLift 八卡择优出片。"
  },
  "pipeline": [
    {
      "stage": "① 三产资产母图冻结",
      "tool": "SCN_01 / CHR_01 / CHR_02",
      "note": "绑定废弃展馆、林女探员与陈男搭档。"
    },
    {
      "stage": "② 米制 Blender 0 穿模预演",
      "tool": "Blender 5.2 + ray_cast",
      "note": "191 段 0 穿模，min_clearance=0.5947m (≥0.15m)。"
    },
    {
      "stage": "③ Round 3 并发 H3 生成",
      "tool": "A 机 SelfLift 12 步 + 3层去僵词法",
      "note": "4/4 纯背向零互指、0% 音乐泄漏。"
    },
    {
      "stage": "④ PiP / 1:1 同期对照封装",
      "tool": "FFmpeg 1080p24",
      "note": "同步收录成片、PiP 画中画、SideBySide 与白模底片。"
    }
  ],
  "characters": [
    {
      "id": "CHR-01",
      "name": "CHR_01 · 左翼女探员（林）",
      "role": "近景 OTS 主导",
      "look": "齐颌短发、黑战术背心、右前臂手电与银色手枪。",
      "image": "media/img-d8a5639959919ab2a3c6.png",
      "uses": 4
    },
    {
      "id": "CHR-02",
      "name": "CHR_02 · 右翼男搭档（陈）",
      "role": "+2.0m 前哨火力",
      "look": "寸头、军绿野战夹克黑背心、哑光黑手枪。",
      "image": "media/img-a6b2fbf6027bf9909dfe.png",
      "uses": 4
    }
  ],
  "sceneCards": [
    {
      "id": "SCN-01",
      "name": "SCN_01 · 废弃潮湿工业展馆",
      "desc": "裂缝积水混凝土地面、承重柱、锈蚀玻璃隔断与钢梯。",
      "image": "media/img-b90cfce1833071bd5af4.png",
      "uses": 4
    }
  ],
  "props": [
    {
      "id": "BLUEPRINT",
      "name": "正交米制俯视空间蓝图 (m)",
      "desc": "16.5m × 24.0m 空间布局、轨迹长度 5.666m 与 0.5947m 净空标注。",
      "image": "media/img-d5f721b890915c6ee331.png"
    },
    {
      "id": "AUDIT-4V",
      "name": "Round 3 影视四联标准检视板",
      "desc": "终审版声画四联板。",
      "image": "media/img-f68e3f4df2e0a5769f24.png"
    },
    {
      "id": "R3-8PT",
      "name": "Round 3 候选 8 点位对比表",
      "desc": "4 路候选跨 8 帧位均匀一致抽检。",
      "image": "media/img-eda05cfc5551ddd0fc5c.jpg"
    }
  ],
  "shots": [
    {
      "id": "S01",
      "title": "S01 · H3 真人电影成片母带 (0% BGM 纯净同期声)",
      "start": 0,
      "duration": 8,
      "framing": "16:9 战术长镜跟拍 (1920×1080 @ 24fps)",
      "camera": "CAM_OneTake 轨迹 5.666m · 最小净空 0.5947m",
      "action": "严格继承三层白模引导，0–2.2s 擦柱过肩手电扫地 → 5.1s 四声 9mm 室内点射 → 7.1s 水洼重重扑倒水花，100% 纯背向零队友互指。",
      "prompt": "Three-layer de-stiffening H3 prompt: strip clay geometry of <Video 1>, lock <Picture 2/3> strictly rear/rear-3/4 view (+2.00m staggered formation, D·F >= 0.94), positive-only boom-mic acoustics.",
      "refs": [
        {
          "label": "Round 3 四联检视板",
          "src": "media/img-f68e3f4df2e0a5769f24.png"
        }
      ],
      "video": "https://github.com/aikingtai-ctrl/jintai-film-showcase/releases/download/media-v1/abandoned-hall-greybox-h3-8s--652c6d4decb2f8a4d2a7.mp4",
      "thumb": "assets/shots/S01.jpg",
      "model": "Blender 5.2 + A机 SelfLift 6+6=12步",
      "params": "1920×1080 @ 24fps · 192 帧 · 8.00s",
      "status": "已生成 (Round 3 4/4 PASS)"
    },
    {
      "id": "S02",
      "title": "S02 · Foyege 同款左上角白模 PiP 1:1 同步展映",
      "start": 0,
      "duration": 8,
      "framing": "16:9 战术长镜跟拍 (1920×1080 @ 24fps)",
      "camera": "CAM_OneTake 轨迹 5.666m · 最小净空 0.5947m",
      "action": "左上角叠加 Blender 白模实机运行态，直观印证镜头遮挡视差与袭击者冲刺时机毫秒级吻合。",
      "prompt": "Three-layer de-stiffening H3 prompt: strip clay geometry of <Video 1>, lock <Picture 2/3> strictly rear/rear-3/4 view (+2.00m staggered formation, D·F >= 0.94), positive-only boom-mic acoustics.",
      "refs": [
        {
          "label": "Round 3 四联检视板",
          "src": "media/img-f68e3f4df2e0a5769f24.png"
        }
      ],
      "video": "https://github.com/aikingtai-ctrl/jintai-film-showcase/releases/download/media-v1/abandoned-hall-greybox-h3-8s--96583c0fd1e11f352d3d.mp4",
      "thumb": "assets/shots/S02.jpg",
      "model": "Blender 5.2 + A机 SelfLift 6+6=12步",
      "params": "1920×1080 @ 24fps · 192 帧 · 8.00s",
      "status": "已生成 (Round 3 4/4 PASS)"
    },
    {
      "id": "S03",
      "title": "S03 · 左 Blender 白模 vs 右 H3 真人逐帧并排对照",
      "start": 0,
      "duration": 8,
      "framing": "16:9 战术长镜跟拍 (1920×1080 @ 24fps)",
      "camera": "CAM_OneTake 轨迹 5.666m · 最小净空 0.5947m",
      "action": "左白模与右真人 1:1 并排同步：左图深炭黑背板彻底压住 180° 剪影翻转歧义。",
      "prompt": "Three-layer de-stiffening H3 prompt: strip clay geometry of <Video 1>, lock <Picture 2/3> strictly rear/rear-3/4 view (+2.00m staggered formation, D·F >= 0.94), positive-only boom-mic acoustics.",
      "refs": [
        {
          "label": "Round 3 四联检视板",
          "src": "media/img-f68e3f4df2e0a5769f24.png"
        }
      ],
      "video": "https://github.com/aikingtai-ctrl/jintai-film-showcase/releases/download/media-v1/abandoned-hall-greybox-h3-8s--cdc327a4ea112d730237.mp4",
      "thumb": "assets/shots/S03.jpg",
      "model": "Blender 5.2 + A机 SelfLift 6+6=12步",
      "params": "1920×1080 @ 24fps · 192 帧 · 8.00s",
      "status": "已生成 (Round 3 4/4 PASS)"
    },
    {
      "id": "S04",
      "title": "S04 · Blender 5.2 192 帧三维白模零穿模预演底片",
      "start": 0,
      "duration": 8,
      "framing": "16:9 战术长镜跟拍 (1280×720 @ 24fps)",
      "camera": "CAM_OneTake 轨迹 5.666m · 最小净空 0.5947m",
      "action": "米制坐标 191 段 ray_cast 射线 0 穿模，最小净空 0.5947m (≥0.15m 红线)。",
      "prompt": "Three-layer de-stiffening H3 prompt: strip clay geometry of <Video 1>, lock <Picture 2/3> strictly rear/rear-3/4 view (+2.00m staggered formation, D·F >= 0.94), positive-only boom-mic acoustics.",
      "refs": [
        {
          "label": "Round 3 四联检视板",
          "src": "media/img-f68e3f4df2e0a5769f24.png"
        }
      ],
      "video": "https://github.com/aikingtai-ctrl/jintai-film-showcase/releases/download/media-v1/abandoned-hall-greybox-h3-8s--b3a2b16da98dc3b2b903.mp4",
      "thumb": "assets/shots/S04.jpg",
      "model": "Blender 5.2 + A机 SelfLift 6+6=12步",
      "params": "1280×720 @ 24fps · 192 帧 · 8.00s",
      "status": "已生成 (Round 3 4/4 PASS)"
    }
  ],
  "generation": {
    "model": "Blender 5.2 + A 机 H3 SelfLift 12 步",
    "params": [
      {
        "k": "碰撞审计",
        "v": "191 段 0 穿模 · min_clearance=0.5947m ≥ 0.15m"
      },
      {
        "k": "防互指锚定",
        "v": "D·F ≥ 0.94 · +2.00m 纵深错位 · 4/4 纯背向"
      },
      {
        "k": "音频纯度",
        "v": "0% BGM 泄漏 · 5.1s 四声点射 & 7.1s 扑水同步"
      }
    ],
    "notes": [
      "完整复盘文件：README_白模导演法实战复盘.md。"
    ]
  },
  "deliverables": [
    {
      "name": "Shot01_AbandonedHall_TacticalAdvance_1080P_Master.mp4",
      "src": "https://github.com/aikingtai-ctrl/jintai-film-showcase/releases/download/media-v1/abandoned-hall-greybox-h3-8s--b753ac71515dd5ef3696.mp4",
      "note": "8.00s · 真人成片母带 · 11.52 MB"
    },
    {
      "name": "Foyege_Style_PiP_Showcase_1080P.mp4",
      "src": "https://github.com/aikingtai-ctrl/jintai-film-showcase/releases/download/media-v1/abandoned-hall-greybox-h3-8s--96583c0fd1e11f352d3d.mp4",
      "note": "8.00s · Foyege 同款白模 PiP"
    },
    {
      "name": "SideBySide_Previs_vs_LiveAction_1080P.mp4",
      "src": "https://github.com/aikingtai-ctrl/jintai-film-showcase/releases/download/media-v1/abandoned-hall-greybox-h3-8s--cdc327a4ea112d730237.mp4",
      "note": "8.00s · 1:1 逐帧并排对比"
    },
    {
      "name": "previs_greybox_192f.mp4",
      "src": "https://github.com/aikingtai-ctrl/jintai-film-showcase/releases/download/media-v1/abandoned-hall-greybox-h3-8s--b3a2b16da98dc3b2b903.mp4",
      "note": "8.00s · Blender 192 帧白模"
    },
    {
      "name": "Orthographic_Metric_Blueprint_m.png",
      "src": "media/img-d5f721b890915c6ee331.png",
      "note": "正交米制蓝图"
    }
  ]
});
