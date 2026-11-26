window.registerProject({
  "id": "h3-four-worlds-orbit-15s",
  "title": "四世界 360° 环绕无缝重组｜一镜到底｜15秒",
  "subtitle": "2026-11-24 · A 机 8×H100 · V2 电影质感与原生声场终版",
  "logline": "主角恒速向前行走，摄影机顺时针环绕一圈，废弃站台、洪水城市、水母深海与星云宇宙随脚步连续变形。",
  "date": "2026-11-24",
  "tags": [
    "MiniMax H3",
    "一镜到底",
    "四世界",
    "360° 环绕",
    "16:9",
    "V2终版",
    "已生成"
  ],
  "model": "MiniMax H3 FeiHou v0.7 + ref2v_turbo_8step_v1.1 + Sol-Attn + SelfLift 10 步，lowres 0.40，362 帧原生一镜",
  "modelShort": "H3 SelfLift",
  "poster": "media/img-7cfe6bee3a8a234f3a55.jpg",
  "film": {
    "src": "https://github.com/aikingtai-ctrl/jintai-film-showcase/releases/download/media-v1/h3-four-worlds-orbit-15s--6fdaffdd16c4757413c4.mp4",
    "duration": 15,
    "width": 1920,
    "height": 1080,
    "fps": "24"
  },
  "meta": {
    "shots": 1,
    "generated": 1,
    "durationSec": 15,
    "resolution": "1920×1080",
    "fps": "24",
    "aspect": "16:9",
    "style": "35mm 变形宽银幕稳定器一镜到底，冷青灰基调贯穿四境，暖琥珀实用光维持视觉统一。"
  },
  "synopsis": [
    "主角恒速向前行走，摄影机顺时针环绕一圈，废弃站台、洪水城市、水母深海与星云宇宙随脚步连续变形。",
    "QC_04：四境一镜与 360° 环绕通过；15.000 秒、1920×1080、24 fps、360 帧、AAC 48 kHz 双声道，ffmpeg -xerror rc=0。"
  ],
  "concept": {
    "rules": [
      "主角步速和方向稳定，全片仅一人。",
      "全程无切镜，摄影机完成顺时针一圈。",
      "四世界环境声随脚下材质连续变化。"
    ],
    "directorMethod": "35mm 变形宽银幕稳定器一镜到底，冷青灰基调贯穿四境，暖琥珀实用光维持视觉统一。"
  },
  "pipeline": [
    {
      "stage": "① V2 哑光定妆",
      "tool": "H3 Image / D04_v2_black_trench_walk",
      "note": "主角衣着与自然微表演锁定。"
    },
    {
      "stage": "② 单镜原生生成",
      "tool": "H3 SelfLift 10 步",
      "note": "362 帧声画同步一次生成，最终取前 360 帧。"
    },
    {
      "stage": "③ 原生声场定稿",
      "tool": "assemble_v2_4films.py",
      "note": "脚步由站台石面过渡为涉水、深海压感与星云风声。"
    },
    {
      "stage": "④ 逐帧及实耳验收",
      "tool": "QC_04 / _qc_metrics.json",
      "note": "四境转场、主体连续性与 360° 环绕通过。"
    }
  ],
  "characters": [
    {
      "id": "CHR-01",
      "name": "图 1 主角 · V2 定妆",
      "role": "全片连续性锚点",
      "look": "哑光黑色羊毛长风衣、深灰高领衫与黑靴主角。",
      "image": "media/img-99b870935b3026c3a7c5.webp",
      "uses": 1
    }
  ],
  "props": [
    {
      "id": "QC-BOARD",
      "name": "V2 逐帧验收板",
      "desc": "QC_04：四境一镜与 360° 环绕通过；15.000 秒、1920×1080、24 fps、360 帧、AAC 48 kHz 双声道，ffmpeg -xerror rc=0。",
      "image": "media/img-dec0daa4b06cbb96af98.jpg"
    }
  ],
  "shots": [
    {
      "id": "S01",
      "title": "站台→洪水城市→水母深海→星云：一镜环绕",
      "start": 0,
      "duration": 15,
      "framing": "原始生成段 1920×1080，24 fps；终版 1920×1080",
      "camera": "站台→洪水城市→水母深海→星云：一镜环绕",
      "action": "主角不停步、恒定方向前行；摄影机顺时针 360° 环绕，四种环境无切镜实时解体重组。",
      "prompt": "subject_definitions:\n<Subject 1> is the 50-year-old East Asian man preserving the exact facial structure, short black hair, natural brow, bare unobstructed eyes, and clean-shaven chin of <Picture 1>, wearing the tailored matte black wool-gabardine long trench coat, dark charcoal turtleneck, dark trousers, and black boots from <Picture 2>.\n\nsummary:\n[reference generation] In one continuous unbroken stabilizer shot with zero cuts, <Subject 1> strides steadily straight forward at constant cadence while the camera smoothly orbits 360 degrees clockwise around him as four distinct environments seamlessly disintegrate and reform around his footsteps.\n\nretention_analysis:\n<Subject 1> (appears in [Shot 1]): fully_preserved - maintain exact facial likeness of <Picture 1> and matte black long trench coat of <Picture 2>, unwavering forward walking direction, steady cadence, strictly one man.\n\ndetailed_description:\nAuthentic live-action 35mm anamorphic widescreen f/2.8 Steadicam footage at 24fps, low saturation, cool slate cyan-gray shadows unified with subtle warm amber practical illumination in every realm, clean smooth natural matte skin texture, soft diffused highlight roll-off, natural subsurface scattering, organic fine 35mm film grain.\n[Shot 1] Keeping <Subject 1> striding briskly straight forward at unwavering pace with calm resolute micro expressions — natural periodic blink, composed breathing, subtle wind movement along trench lapels, never turning his head — the stabilizer camera tracks smoothly with him while orbiting continuously clockwise across one full 360-degree revolution: from seconds 0 to 3.5 (front 0° to right side 90°), cracked concrete and rusted steel trusses of an abandoned railway platform (lit by a warm amber emergency signal light) crumble and fall away under his boots seamlessly reforming into a flooded urban street (seconds 3.5 to 7.5, 90° to rear 180°) with shallow water splashing calmly past warm amber firelight reflected down dark wet buildings; from seconds 7.5 to 11.5 (180° to left side 270°), flooded facades dissolve cleanly into a deep tranquil cyan-gray ocean abyss as huge translucent warm-amber bioluminescent jellyfish drift gracefully overhead above his shoulders; from seconds 11.5 to 15.0 (270° returning to front 360°), deep ocean water evaporates silently into drifting stardust and luminous cosmic nebula clouds illuminated by warm amber starlight behind his striding silhouette. Strictly one solitary man throughout.\n\noverall_soundscape:\nSteady crisp leather boot footsteps on concrete station tiles smoothly transitioning into gentle shallow floodwater splashes, softening into muted deep underwater ocean pressure, and dissolving cleanly into serene airy deep-space breeze.\n\nnon_diegetic_music:\nNone",
      "refs": [
        {
          "label": "V2 主角定妆图",
          "src": "media/img-99b870935b3026c3a7c5.webp"
        }
      ],
      "video": "https://github.com/aikingtai-ctrl/jintai-film-showcase/releases/download/media-v1/h3-four-worlds-orbit-15s--6fdaffdd16c4757413c4.mp4",
      "thumb": "media/img-98ce0dcff239544b1c53.jpg",
      "model": "H3 SelfLift",
      "params": "seed=20261124401 · 原始生成 362 帧 / 15.000 秒；终版使用区间见制作流程",
      "status": "V2 一镜终版"
    }
  ],
  "generation": {
    "model": "MiniMax H3 FeiHou v0.7 + ref2v_turbo_8step_v1.1 + Sol-Attn + SelfLift 10 步，lowres 0.40，362 帧原生一镜",
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
      "name": "04_360环绕四世界无缝重组_一镜到底_15秒_1080p.mp4",
      "src": "https://github.com/aikingtai-ctrl/jintai-film-showcase/releases/download/media-v1/h3-four-worlds-orbit-15s--6fdaffdd16c4757413c4.mp4",
      "note": "V2 终版 · 15.000 秒 · 含原生声场"
    }
  ]
});
