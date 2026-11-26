window.registerProject({
  "id": "h3-subway-saltlake-whippan-15s",
  "title": "深夜地铁三帧甩镜盐湖｜35mm 复古胶片｜15秒",
  "subtitle": "2026-11-24 · A 机 8×H100 · V2 电影质感与原生声场终版",
  "logline": "深夜空车厢中，主角眼神先行、自然转头，三帧水平甩镜把空间切换为暮色盐湖。",
  "date": "2026-11-24",
  "tags": [
    "MiniMax H3",
    "甩镜转场",
    "地铁",
    "盐湖",
    "16:9",
    "V2终版",
    "已生成"
  ],
  "model": "MiniMax H3 FeiHou v0.7 + ref2v_turbo_8step_v1.1 + Sol-Attn + SelfLift 10 步，lowres 0.40",
  "modelShort": "H3 SelfLift",
  "poster": "media/img-4b8f691a450d98af78c9.jpg",
  "film": {
    "src": "https://github.com/aikingtai-ctrl/jintai-film-showcase/releases/download/media-v1/h3-subway-saltlake-whippan-15s--6faf4a46e025915a33d2.mp4",
    "duration": 15,
    "width": 1920,
    "height": 1080,
    "fps": "24"
  },
  "meta": {
    "shots": 2,
    "generated": 2,
    "durationSec": 15,
    "resolution": "1920×1080",
    "fps": "24",
    "aspect": "16:9",
    "style": "35mm Kodak Vision3 胶片质感，青灰车厢与暖琥珀夕照对照，安静盐湖保留自然风声。"
  },
  "synopsis": [
    "深夜空车厢中，主角眼神先行、自然转头，三帧水平甩镜把空间切换为暮色盐湖。",
    "QC_02：三帧甩镜及盐湖急停通过；15.000 秒、1920×1080、24 fps、360 帧、AAC 48 kHz 双声道，ffmpeg -xerror rc=0。"
  ],
  "concept": {
    "rules": [
      "人物先眼神后转头。",
      "甩镜严格占三帧，第 138 帧恢复清晰。",
      "不使用 V1 合成粉噪。"
    ],
    "directorMethod": "35mm Kodak Vision3 胶片质感，青灰车厢与暖琥珀夕照对照，安静盐湖保留自然风声。"
  },
  "pipeline": [
    {
      "stage": "① V2 自然定妆",
      "tool": "H3 Image / D02_v2_charcoal_overcoat",
      "note": "消除 V1 油光与僵硬站姿。"
    },
    {
      "stage": "② 两段原生声画生成",
      "tool": "H3 SelfLift 10 步",
      "note": "地铁 158 帧与盐湖 226 帧分段生成，原生车厢/湖风声保留。"
    },
    {
      "stage": "③ 三帧甩镜合成",
      "tool": "assemble_v2_4films.py",
      "note": "最终取 135 + 3 + 222 = 360 帧；独立生成段比终版使用区间稍长。"
    },
    {
      "stage": "④ 逐帧及实耳验收",
      "tool": "QC_02 / _qc_metrics.json",
      "note": "#135–137 三帧甩镜、第 138 帧急停；无底噪抽吸。"
    }
  ],
  "characters": [
    {
      "id": "CHR-01",
      "name": "图 1 主角 · V2 定妆",
      "role": "全片连续性锚点",
      "look": "浅蓝衬衫与深炭灰复古羊毛大衣主角。",
      "image": "media/img-17ac7cbdc1091767dfd2.png",
      "uses": 2
    }
  ],
  "props": [
    {
      "id": "QC-BOARD",
      "name": "V2 逐帧验收板",
      "desc": "QC_02：三帧甩镜及盐湖急停通过；15.000 秒、1920×1080、24 fps、360 帧、AAC 48 kHz 双声道，ffmpeg -xerror rc=0。",
      "image": "media/img-8bd7e2fccd0bcf6bc6c2.jpg"
    }
  ],
  "shots": [
    {
      "id": "S01",
      "title": "空车厢：视线先动并引出甩镜",
      "start": 0,
      "duration": 5.625,
      "framing": "原始生成段 1824×1024，24 fps；终版 1920×1080",
      "camera": "空车厢：视线先动并引出甩镜",
      "action": "主角在空地铁车厢中先以眼神向右，再带动头部；片尾甩镜横向启动。",
      "prompt": "subject_definitions:\n<Subject 1> is the 50-year-old East Asian man whose exact facial bone structure, short cropped straight black hair, natural brow, bare eyes without eyewear, and clean-shaven jaw match <Picture 1>, wearing the unbuttoned light sky-blue collared dress shirt beneath the open dark charcoal vintage wool overcoat from <Picture 2>.\n\nsummary:\n[reference generation] Inside an empty late-night subway car, <Subject 1> stands in profile facing left, displays living micro-expressions as his gaze leads a gentle natural rightward head turn, and camera whips rapidly horizontally right at the tail.\n\nretention_analysis:\n<Subject 1> (appears in [Shot 1]): fully_preserved - maintain exact natural face of <Picture 1> and unbuttoned light blue shirt plus dark charcoal wool overcoat of <Picture 2>; strictly one man.\n\ndetailed_description:\nAuthentic live-action 35mm Kodak Vision3 500T cinema footage at 24fps, soft cool cyan-gray stainless steel handrails and empty bench seats softly balanced with diffused overhead warm amber ceiling strip lights, clean smooth natural matte skin texture, soft diffused highlight roll-off, natural subsurface scattering, organic fine 35mm film grain.\n[Shot 1] Opening in medium close-up inside the empty late-night subway train car, <Subject 1> stands relaxed facing frame left with quiet contemplative micro expressions: during seconds zero to two, he blinks organically once, takes one subtle gentle breath, and softens his jaw; during seconds two to five point three, his dark eyes glance rightward first before his neck and shoulders gently guide a smooth natural head turn toward a front-three-quarter angle as warm amber ceiling light softly illuminates his face; during seconds five point three to six point six, carrying his rightward head turn seamlessly, the camera whips violently right in a crisp horizontal whip pan smearing the subway carriage into horizontal linear motion blur. Strictly one man.\n\noverall_soundscape:\nRealistic late-night empty subway carriage ambience: subtle deep electric rail hum, quiet carriage sway click, light wool coat rustle as he turns, followed by a crisp rushing air whoosh during the rapid rightward whip pan.\n\nnon_diegetic_music:\nNone",
      "refs": [
        {
          "label": "V2 主角定妆图",
          "src": "media/img-17ac7cbdc1091767dfd2.png"
        }
      ],
      "video": "https://github.com/aikingtai-ctrl/jintai-film-showcase/releases/download/media-v1/h3-subway-saltlake-whippan-15s--16172344b48a37caf638.mp4",
      "thumb": "media/img-cf81cd56efc59c4607df.jpg",
      "model": "H3 SelfLift",
      "params": "seed=20261124201 · 原始生成 158 帧 / 6.583 秒；终版使用区间见制作流程",
      "status": "V2 终版已合入"
    },
    {
      "id": "S02",
      "title": "暮色盐湖：急停后自然转头",
      "start": 5.625,
      "duration": 9.375,
      "framing": "原始生成段 1824×1024，24 fps；终版 1920×1080",
      "camera": "暮色盐湖：急停后自然转头",
      "action": "第 135–137 帧完成三帧线状甩镜，第 138 帧即刻清晰；盐湖中大衣下摆持续向右摆动。",
      "prompt": "subject_definitions:\n<Subject 1> is the 50-year-old East Asian man whose exact facial bone structure, short straight black hair, natural brow, bare eyes without glasses, and clean-shaven jaw match <Picture 1>, wearing the unbuttoned light sky-blue shirt beneath the open floor-length dark charcoal vintage wool overcoat from <Picture 2>.\n\nsummary:\n[reference generation] Locked abruptly dead-steady on a boundless mirror-like salt lake at twilight, <Subject 1> stands alone lake-center finishing a gentle natural rightward head turn with warm human micro-expressions while his long charcoal wool overcoat hems billow continuously to the right in coastal breeze.\n\nretention_analysis:\n<Subject 1> (appears in [Shot 1]): fully_preserved - maintain exact natural facial identity of <Picture 1> and unbuttoned light blue shirt + dark charcoal long wool overcoat of <Picture 2>; strictly one man on the salt flat.\n\ndetailed_description:\nAuthentic live-action 35mm Kodak Vision3 cinema footage at 24fps, crisp contrast with warm amber sunset resting low on the far horizon beneath a deep cool cyan-gray twilight sky mirrored across glassy shallow salt water, clean smooth natural matte skin texture, soft diffused highlight roll-off, natural subsurface scattering, organic fine 35mm film grain.\n[Shot 1] Camera locks rock-steady at wide-medium distance facing <Subject 1> centered on the vast reflective mirror salt lake. From frame zero smoothly across nine seconds, continuing the organic momentum of his gaze and rightward turn, he blinks calmly once, relaxes his shoulders and lips with quiet thoughtful micro expressions, completes his smooth gentle rightward glance while natural salt-lake breeze softly lifts short hair strands and sends the long hems of his open dark charcoal wool overcoat billowing continuously toward frame right above crystal sky reflections on the thin water. Strictly one man only.\n\noverall_soundscape:\nQuiet expansive twilight salt lake ambience: soft steady coastal evening wind whispering gently across shallow still water and fluttering heavy wool coat fabric softly.\n\nnon_diegetic_music:\nNone",
      "refs": [
        {
          "label": "V2 主角定妆图",
          "src": "media/img-17ac7cbdc1091767dfd2.png"
        }
      ],
      "video": "https://github.com/aikingtai-ctrl/jintai-film-showcase/releases/download/media-v1/h3-subway-saltlake-whippan-15s--950198f5da1d480b2c3c.mp4",
      "thumb": "media/img-0be7b45bd1d0724e17f0.jpg",
      "model": "H3 SelfLift",
      "params": "seed=20261124202 · 原始生成 226 帧 / 9.417 秒；终版使用区间见制作流程",
      "status": "V2 终版已合入"
    }
  ],
  "generation": {
    "model": "MiniMax H3 FeiHou v0.7 + ref2v_turbo_8step_v1.1 + Sol-Attn + SelfLift 10 步，lowres 0.40",
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
      "name": "02_深夜地铁3帧甩镜盐湖_35mm复古胶片_15秒_1080p.mp4",
      "src": "https://github.com/aikingtai-ctrl/jintai-film-showcase/releases/download/media-v1/h3-subway-saltlake-whippan-15s--6faf4a46e025915a33d2.mp4",
      "note": "V2 终版 · 15.000 秒 · 含原生声场"
    }
  ]
});
