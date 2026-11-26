window.registerProject({
  "id": "h3-desert-pupil-sandstorm-15s",
  "title": "干涸盐漠穿瞳沙暴漩涡｜黑金伦勃朗｜15秒",
  "subtitle": "2026-11-24 · A 机 8×H100 · V2 电影质感与原生声场终版",
  "logline": "古金冠黑丝绒袍的主角在盐漠中眨眼，摄影机沿 Z 轴直冲瞳孔，穿越极短暗场后揭示巨型暖琥珀沙暴墙。",
  "date": "2026-11-24",
  "tags": [
    "MiniMax H3",
    "穿瞳转场",
    "沙暴",
    "黑金影调",
    "16:9",
    "V2终版",
    "已生成"
  ],
  "model": "MiniMax H3 FeiHou v0.7 + ref2v_turbo_8step_v1.1 + Sol-Attn + SelfLift 10 步，lowres 0.40",
  "modelShort": "H3 SelfLift",
  "poster": "media/img-715225c8b2457eaef82c.jpg",
  "film": {
    "src": "https://github.com/aikingtai-ctrl/jintai-film-showcase/releases/download/media-v1/h3-desert-pupil-sandstorm-15s--611afe49c687f1c4fddf.mp4",
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
    "style": "黑金伦勃朗侧光与冷青灰荒漠阴影，35mm 宽银幕哑光胶片质感。"
  },
  "synopsis": [
    "古金冠黑丝绒袍的主角在盐漠中眨眼，摄影机沿 Z 轴直冲瞳孔，穿越极短暗场后揭示巨型暖琥珀沙暴墙。",
    "QC_03：眨眼、直线穿瞳与沙暴显现通过；15.000 秒、1920×1080、24 fps、360 帧、AAC 48 kHz 双声道，ffmpeg -xerror rc=0。"
  ],
  "concept": {
    "rules": [
      "摄影机只沿 Z 轴穿瞳，不加横摇或二次加速。",
      "暗场只占极短过渡。",
      "沙暴场景只出现一个主角。"
    ],
    "directorMethod": "黑金伦勃朗侧光与冷青灰荒漠阴影，35mm 宽银幕哑光胶片质感。"
  },
  "pipeline": [
    {
      "stage": "① V2 哑光定妆",
      "tool": "H3 Image / D03_v2_gold_crown_velvet",
      "note": "古金冠、黑丝绒袍与原人物形貌统一。"
    },
    {
      "stage": "② 两段声画生成",
      "tool": "H3 SelfLift 10 步",
      "note": "沙漠 175 帧与沙暴 209 帧分段生成。"
    },
    {
      "stage": "③ 穿瞳合成",
      "tool": "assemble_v2_4films.py",
      "note": "最终取 160 + 1 + 199 = 360 帧；独立生成段比终版使用区间稍长。"
    },
    {
      "stage": "④ 逐帧及实耳验收",
      "tool": "QC_03 / _qc_metrics.json",
      "note": "第 72 帧自然眨眼，第 160 帧极短暗穿，沙暴风声连续。"
    }
  ],
  "characters": [
    {
      "id": "CHR-01",
      "name": "图 1 主角 · V2 定妆",
      "role": "全片连续性锚点",
      "look": "旧金冠与深红领口的哑光黑丝绒长袍主角。",
      "image": "media/img-25c5b5a2c1799c41ea0a.webp",
      "uses": 2
    }
  ],
  "props": [
    {
      "id": "QC-BOARD",
      "name": "V2 逐帧验收板",
      "desc": "QC_03：眨眼、直线穿瞳与沙暴显现通过；15.000 秒、1920×1080、24 fps、360 帧、AAC 48 kHz 双声道，ffmpeg -xerror rc=0。",
      "image": "media/img-08d371cc8bffb8050273.jpg"
    }
  ],
  "shots": [
    {
      "id": "S01",
      "title": "盐漠近景：自然眨眼与瞳孔直冲",
      "start": 0,
      "duration": 6.666667,
      "framing": "原始生成段 1824×1024，24 fps；终版 1920×1080",
      "camera": "盐漠近景：自然眨眼与瞳孔直冲",
      "action": "古金冠主角在荒漠中自然眨眼，镜头零横摇沿 Z 轴直冲右眼瞳孔。",
      "prompt": "subject_definitions:\n<Subject 1> is the 50-year-old East Asian man whose exact natural facial structure, short dark hair, bare eyes without glasses, and clean-shaven jaw match <Picture 1>, wearing the tarnished antique gold crown and matte pitch-black silk-velvet embroidered robe with deep crimson collar from <Picture 2>.\n\nsummary:\n[reference generation] Standing proud and composed across an arid cracked salt desert bathed in gentle late-afternoon Rembrandt sunlight, <Subject 1> blinks calmly and constricts his pupil before the camera launches into one fierce, unbroken straight Z-axis rush straight through the center of his dark right pupil.\n\nretention_analysis:\n<Subject 1> (appears in [Shot 1]): fully_preserved - maintain authentic <Picture 1> likeness, matte natural skin texture without specular grease, tarnished gold filigree crown and matte velvet robe of <Picture 2>.\n\ndetailed_description:\nAuthentic live-action 35mm anamorphic widescreen cinema footage at 24fps, soft directional warm amber sunset key light contrasted naturally with cool slate cyan-gray desert shadows in black-gold and deep crimson tonality, clean smooth natural matte skin texture, soft diffused highlight roll-off, natural subsurface scattering, organic fine 35mm film grain.\n[Shot 1] Opening in a chest-up medium close-up of <Subject 1> centered against cracked pale-salt desert flats: during seconds zero to two point five, he stands utterly steady with proud stoic micro expressions — subtle calm chest breathing, light desert wind brushing stray hair tips, one natural unhurried blink followed by crisp sunset light catching his iris as his dark pupil subtly constricts; during seconds two point five to seven point three, the camera launches forward along one fiercely fast, completely unbroken straight Z-axis track directly toward his face (zero horizontal pan, zero secondary acceleration), gliding rapidly past gold crown filigree and fine skin light straight into the center of his dark right pupil until deep black pupil fills the ending frame. Strictly one man.\n\noverall_soundscape:\nQuiet dry salt desert wind gently blowing across cracked earth, escalating cleanly into an urgent rushing Z-axis wind whoosh as the lens closes into the eye.\n\nnon_diegetic_music:\nNone",
      "refs": [
        {
          "label": "V2 主角定妆图",
          "src": "media/img-25c5b5a2c1799c41ea0a.webp"
        }
      ],
      "video": "https://github.com/aikingtai-ctrl/jintai-film-showcase/releases/download/media-v1/h3-desert-pupil-sandstorm-15s--d34338621c46981beffa.mp4",
      "thumb": "media/img-298eeb431b836c47d855.jpg",
      "model": "H3 SelfLift",
      "params": "seed=20261124301 · 原始生成 175 帧 / 7.292 秒；终版使用区间见制作流程",
      "status": "V2 终版已合入"
    },
    {
      "id": "S02",
      "title": "瞳孔暗穿：巨型沙暴墙显现",
      "start": 6.666667,
      "duration": 8.333333,
      "framing": "原始生成段 1824×1024，24 fps；终版 1920×1080",
      "camera": "瞳孔暗穿：巨型沙暴墙显现",
      "action": "经一帧极短黑瞳暗穿，空间尺度突变：独立小人立在黑砂石台仰望旋转沙暴墙。",
      "prompt": "subject_definitions:\n<Subject 1> is the middle-aged man wearing the tarnished antique gold crown and matte pitch-black velvet robe with deep crimson collar from <Picture 2>, retaining exact likeness from <Picture 1>.\n\nsummary:\n[reference generation] Emerging swiftly straight forward out of a fleeting instant of darkness along an unbroken Z-axis path, dramatic monumental scale illusion reveals <Subject 1> minuscule atop a dark sandstone platform gazing slowly up at an endless rotating wall of towering warm-amber sandstorm.\n\nretention_analysis:\n<Subject 1> (appears in [Shot 1]): fully_preserved - maintain tarnished gold crown and matte black velvet robe silhouette of <Picture 2> at tiny monumental-scale proportions; strictly one solitary figure.\n\ndetailed_description:\nAuthentic live-action 35mm anamorphic widescreen cinema footage at 24fps, soft natural dusk chiaroscuro in deep warm amber sandlight against cool slate cyan-gray gale sky, low saturation, clean diffused tonal roll-off, organic fine 35mm film grain.\n[Shot 1] Emerging cleanly along a pure straight unbroken forward Z-axis glide out of brief darkness (zero horizontal pan, zero secondary surge), massive cinematic scale unfolds inside the eye of a titanic sandstorm: <Subject 1> appears tiny and solitary standing near center atop a flat dark basalt-sandstone platform, his velvet robe hem fluttering softly in crosswind as he gradually lifts his chin upward to behold an endless rotating cylindrical wall of towering warm-amber sand rising high overhead beneath roaring dust clouds and an otherworldly cool cyan-gray sky. Strictly one solitary man on the platform.\n\noverall_soundscape:\nBrief crisp low-frequency air burst emerging from stillness smoothly swelling into monumental deep roaring sandstorm wind sweeping around a colossal open basin.\n\nnon_diegetic_music:\nNone",
      "refs": [
        {
          "label": "V2 主角定妆图",
          "src": "media/img-25c5b5a2c1799c41ea0a.webp"
        }
      ],
      "video": "https://github.com/aikingtai-ctrl/jintai-film-showcase/releases/download/media-v1/h3-desert-pupil-sandstorm-15s--9ea675c1987687e31e65.mp4",
      "thumb": "media/img-8c2b32ede11f7a5f6d0a.jpg",
      "model": "H3 SelfLift",
      "params": "seed=20261124302 · 原始生成 209 帧 / 8.708 秒；终版使用区间见制作流程",
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
      "name": "03_干涸盐漠穿瞳沙暴漩涡_黑金伦勃朗_15秒_1080p.mp4",
      "src": "https://github.com/aikingtai-ctrl/jintai-film-showcase/releases/download/media-v1/h3-desert-pupil-sandstorm-15s--611afe49c687f1c4fddf.mp4",
      "note": "V2 终版 · 15.000 秒 · 含原生声场"
    }
  ]
});
