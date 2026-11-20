window.registerProject({
  "id": "tuomashi-couture-h3-lc-123s",
  "title": "拖马仕高定大片｜图二替换图一 LC 原声语气｜123秒",
  "subtitle": "全片 19 段零漏换 × 时序倒放锁纯背影 × Breeze TTS 2 LC_DF3_STUDIO 原片韵律迁移",
  "logline": "将 122.8 秒《如何把拖鞋广告拍成奢侈品大片》中的长发男模 100% 原生替换为图二短卷发银框眼镜男士，量身打造酒红双排扣西装短裤搭橡胶人字拖与草垛墨镜高定造型，并采用 Breeze TTS 2 声纹直转实现 MFCC 0.9841、原速 1.000× 继承冷幽默气声旁白。",
  "date": "2026-11-12",
  "tags": [
    "H3",
    "角色替换",
    "高定大片",
    "LC音色",
    "Breeze-TTS",
    "时序倒放",
    "16:9",
    "已生成"
  ],
  "model": "A 机 FeiHou MiniMax H3 Remix v0.7 + Qwen-Image-2.1 + Breeze TTS 2 (/v1/audio/convert)",
  "modelShort": "H3 + LC音色",
  "poster": "media/img-4c1ff67a93010c35aef5.jpg",
  "film": {
    "src": "https://github.com/aikingtai-ctrl/jintai-film-showcase/releases/download/media-v1/tuomashi-couture-h3-lc-123s--e9ee5c4606e47326a942.mp4",
    "duration": 122.8,
    "width": 1280,
    "height": 720,
    "fps": "25"
  },
  "meta": {
    "shots": 4,
    "generated": 1,
    "durationSec": 122.8,
    "resolution": "1280×720",
    "fps": "25",
    "aspect": "16:9",
    "style": "南法庄园冷幽默奢侈品大片质感，ArcFace 母图相似度 98.60%–98.95%，零 2D 换脸接缝。"
  },
  "synopsis": [
    "全片 38 个原子镜头拆解中含 18 段（终版复核补齐至 19 段）主角出镜区间，其余 20 段空镜、白马与脚部拖鞋特写直通保留原片摄影与调色；片头跨肩大字与白马 TERMES 矢量标采用窄带 Telea 与人物窄走廊像素级回填。",
    "攻克三项硬骨头：对首帧人物尚未入画或 180° 纯背影（S08/S09/S20/S33b）采取「输入倒序→H3 替换→还原时间轴」强锚定回眸正脸；草垛墨镜镜传双锚定裸眼母图消除双层眼镜；音频端从 VoxCPM2 漂移切回 Breeze TTS 2 keep_acoustic=1 + 42% DF3 干湿混音（F0 117.0 Hz 对齐 LC 114.5 Hz，MFCC 0.9841）。"
  ],
  "concept": {
    "rules": [
      "时序倒放法（Time-Reversal）：纯背影或入画延迟镜头先倒放让末帧回眸侧脸成为第 0 帧锚点。",
      "双镜同框裸眼锚点：拉下墨镜露眼段落禁传近视眼镜照，必须搭配无框裸眼母图防止叠戴两副眼镜。",
      "气声保护分轨策略：贴耳低语乐句先经 Breeze VC 再按 42% DeepFilterNet3 干湿比温柔降噪。"
    ],
    "directorMethod": "Demucs 分离伴奏与 19 句人声谷值切片直投 Breeze VC，视觉端按 19 段主角区间分别匹配主造型、草垛墨镜/裸眼款、侧背双视角母图跑 A 机 8×H100。"
  },
  "pipeline": [
    {
      "stage": "① 高定母图定妆",
      "tool": "A 机 Qwen-Image-2.1",
      "note": "产出酒红西装短裤拖鞋款、草垛墨镜款与正侧背三视角母图，ArcFace 最高 98.95%。"
    },
    {
      "stage": "② Breeze LC 原声韵律迁移",
      "tool": "A 机 :7868 LC_DF3_STUDIO + DF3 42%",
      "note": "keep_acoustic=1 1.000× 保留原片冷幽默气声低语，MFCC 余弦 0.9841。"
    },
    {
      "stage": "③ H3 19 段零漏换与倒序锁脸",
      "tool": "FeiHou Easy H3 + A 机 8×H100",
      "note": "解决草地叠罗汉、叠化子镜 S32b 与远景回眸模糊三处视觉瑕疵。"
    },
    {
      "stage": "④ 窄走廊标题护航封装",
      "tool": "FFmpeg 1280×720 @ 25fps (3,070 帧)",
      "note": "全高字幕零裁切，DECODE_RC=0 且真耳逐句试听通过。"
    }
  ],
  "characters": [
    {
      "id": "CHR-01",
      "name": "拖马仕高定总卡",
      "role": "全片三套造型与三视角汇总统览",
      "look": "图二短卷发圆脸银框眼镜男士，酒红双排扣西装短裤搭橡胶人字拖。",
      "image": "media/img-66b3582bdb720814d615.png",
      "uses": 4
    },
    {
      "id": "CHR-02",
      "name": "造型一｜酒红西装短裤人字拖",
      "role": "庄园主造型母图",
      "look": "深酒红双排扣西装 + 焦糖棕领带 + 及膝西装短裤 + 深酒红人字拖。",
      "image": "media/img-00b2fb9433b5337be0bd.png",
      "uses": 4
    },
    {
      "id": "CHR-03",
      "name": "造型二｜草垛黑金墨镜款",
      "role": "草垛凹造型专用",
      "look": "黑金窄框墨镜搭配裸眼副锚定防止拉下墨镜叠镜。",
      "image": "media/img-9ae326463a93f563eca6.png",
      "uses": 4
    },
    {
      "id": "CHR-04",
      "name": "造型三｜侧颜与短发背影双锚",
      "role": "90°侧脸与180°后脑锁头",
      "look": "彻底清理原片长发残影。",
      "image": "media/img-1e6d4850cc4a52bd88f2.png",
      "uses": 4
    },
    {
      "id": "CHR-05",
      "name": "整头颈酒红正脸母图",
      "role": "特写肖像强锚点",
      "look": "ArcFace 正脸特写相似度 98.95%。",
      "image": "media/img-a2b65096c050b5f7ed37.png",
      "uses": 4
    }
  ],
  "props": [
    {
      "id": "REF-01",
      "name": "全片十六镜抽检总表",
      "desc": "跨全片 16 个关键时间点替换质量核验图。",
      "image": "media/img-6e1251755245461622d0.jpg"
    },
    {
      "id": "REF-02",
      "name": "原片图1 vs 成片图2 1:1 对比表",
      "desc": "逐景别造型与面部 1:1 平行对照。",
      "image": "media/img-a28cac54a852553d6add.jpg"
    },
    {
      "id": "REF-03",
      "name": "三处反馈画面精修核验表",
      "desc": "V5 针对 00:24 叠影、01:04 双眼镜、01:41 远景模糊专项精修对比。",
      "image": "media/img-5b042f63116a6b44dba9.jpg"
    },
    {
      "id": "REF-04",
      "name": "全片 19 段零遗漏核验总表",
      "desc": "全片全部 19 段主角出场镜头逐一验讫。",
      "image": "media/img-3488ba43ceda81fc01d1.jpg"
    }
  ],
  "shots": [
    {
      "id": "S01",
      "title": "Part 1 · 庄园开场跨肩标题与酒红高定定调",
      "start": 0,
      "duration": 30,
      "framing": "正面中近景 / 河谷远景",
      "camera": "窄走廊像素级回填标题",
      "action": "穿深酒红双排扣西装短裤搭橡胶人字拖冷静宣讲拖马仕美学，00:24 草地远景时序倒放零叠影。",
      "prompt": "Ref2V swap with burgundy double-breasted suit shorts and flip-flops, preserving original dry humor whisper cadence.",
      "refs": [
        {
          "label": "全片十六镜抽检总表",
          "src": "media/img-6e1251755245461622d0.jpg"
        }
      ],
      "video": "https://github.com/aikingtai-ctrl/jintai-film-showcase/releases/download/media-v1/tuomashi-couture-h3-lc-123s--e9ee5c4606e47326a942.mp4",
      "thumb": "media/img-2193c0c35935cb94ef93.jpg",
      "model": "FeiHou_MiniMax-H3_Remix_HSA_v0.7 + Breeze TTS 2 / LC",
      "params": "1280×720 @ 25fps",
      "status": "已合入成片"
    },
    {
      "id": "S02",
      "title": "Part 2 · 白马庄园 TERMES 标版与近景特写",
      "start": 30,
      "duration": 32,
      "framing": "中近景 / 骑马全景",
      "camera": "720P lora=0.38 锁短发",
      "action": "白马旁驻足凝视与 S16 暖黄胶片闪白转场衔接，100% 保真原片马车标字样。",
      "prompt": "720p H3 identity lock around TERMES carriage scene, clean short curly hair silhouette.",
      "refs": [
        {
          "label": "全片十六镜抽检总表",
          "src": "media/img-6e1251755245461622d0.jpg"
        }
      ],
      "video": "",
      "thumb": "media/img-2791c8e493d372447020.jpg",
      "model": "FeiHou_MiniMax-H3_Remix_HSA_v0.7 + Breeze TTS 2 / LC",
      "params": "1280×720 @ 25fps",
      "status": "已合入成片"
    },
    {
      "id": "S03",
      "title": "Part 3 · 草垛凹造型与拉墨镜露眼特写",
      "start": 62,
      "duration": 30,
      "framing": "草垛特写 / 近景",
      "camera": "墨镜+裸眼双槽防叠镜",
      "action": "先戴复古黑金墨镜倚靠草垛，拉下墨镜露清晰裸眼无重影眼镜框。",
      "prompt": "Dual anchor master_p2 sunglasses + master_p6_bare_eyes clean eyelid reveal without extra glasses.",
      "refs": [
        {
          "label": "全片十六镜抽检总表",
          "src": "media/img-6e1251755245461622d0.jpg"
        }
      ],
      "video": "",
      "thumb": "media/img-58b0ea531c674fd9cbe8.jpg",
      "model": "FeiHou_MiniMax-H3_Remix_HSA_v0.7 + Breeze TTS 2 / LC",
      "params": "1280×720 @ 25fps",
      "status": "已合入成片"
    },
    {
      "id": "S04",
      "title": "Part 4 · 叠化河谷 S32b 与野花草地远景回眸终章",
      "start": 92,
      "duration": 30.8,
      "framing": "俯拍草地远景 / 夕阳定格",
      "camera": "672×378 放大 + 时序倒放",
      "action": "通过实测 alpha 叠化与倒序锚定完成远景回眸锁脸，冷幽默低语收束 122.80 秒。",
      "prompt": "Time-reversed S33b meadow turnaround with side-profile anchor and seamless feather composite.",
      "refs": [
        {
          "label": "全片十六镜抽检总表",
          "src": "media/img-6e1251755245461622d0.jpg"
        }
      ],
      "video": "",
      "thumb": "media/img-11c2e6935bc9729940cc.jpg",
      "model": "FeiHou_MiniMax-H3_Remix_HSA_v0.7 + Breeze TTS 2 / LC",
      "params": "1280×720 @ 25fps",
      "status": "已合入成片"
    }
  ],
  "generation": {
    "model": "A 机 FeiHou MiniMax H3 Remix v0.7 + Qwen-Image-2.1 + Breeze TTS 2 (/v1/audio/convert)",
    "params": [
      {
        "k": "视觉管线",
        "v": "FeiHou Easy H3 + 19 段零漏换 + 时序倒放法"
      },
      {
        "k": "声纹匹配",
        "v": "Breeze LC_DF3_STUDIO · F0 117.0 Hz · MFCC 0.9841"
      },
      {
        "k": "帧数校验",
        "v": "1280×720 @ 25fps · 3,070 帧 · DECODE_RC=0"
      },
      {
        "k": "成片体积",
        "v": "50.16 MB · 122.8s"
      }
    ],
    "notes": [
      "本地文档：[本机路径已移除]"
    ]
  },
  "deliverables": [
    {
      "name": "拖马仕高定大片_图2替换图1_LC音色原声语气_A机H3成片_720p.mp4",
      "src": "https://github.com/aikingtai-ctrl/jintai-film-showcase/releases/download/media-v1/tuomashi-couture-h3-lc-123s--e9ee5c4606e47326a942.mp4",
      "note": "122.8s · 1280×720 · 50.16 MB"
    },
    {
      "name": "拖马仕高定大片_00_主角高定造型设计定妆总卡.png",
      "src": "media/img-66b3582bdb720814d615.png",
      "note": "拖马仕高定总卡"
    },
    {
      "name": "拖马仕高定大片_01_造型一_酒红双排扣西装短裤人字拖主造型_灰底.png",
      "src": "media/img-00b2fb9433b5337be0bd.png",
      "note": "造型一｜酒红西装短裤人字拖"
    },
    {
      "name": "拖马仕高定大片_02_造型二_草垛凹造型黑金窄框墨镜款_灰底.png",
      "src": "media/img-9ae326463a93f563eca6.png",
      "note": "造型二｜草垛黑金墨镜款"
    },
    {
      "name": "拖马仕高定大片_03_造型三_侧颜与利落短发背影双视角锚定款_灰底.png",
      "src": "media/img-1e6d4850cc4a52bd88f2.png",
      "note": "造型三｜侧颜与短发背影双锚"
    },
    {
      "name": "拖马仕高定大片_04_主角整头颈酒红西装领带正脸母图_灰底.png",
      "src": "media/img-a2b65096c050b5f7ed37.png",
      "note": "整头颈酒红正脸母图"
    },
    {
      "name": "拖马仕高定大片_05_全片十六镜抽检总表.jpg",
      "src": "media/img-6e1251755245461622d0.jpg",
      "note": "全片十六镜抽检总表"
    },
    {
      "name": "拖马仕高定大片_06_原片图1vs成片图2_高定造型1比1对比表.jpg",
      "src": "media/img-a28cac54a852553d6add.jpg",
      "note": "原片图1 vs 成片图2 1:1 对比表"
    },
    {
      "name": "拖马仕高定大片_07_三处反馈画面精修核验表.jpg",
      "src": "media/img-5b042f63116a6b44dba9.jpg",
      "note": "三处反馈画面精修核验表"
    },
    {
      "name": "拖马仕高定大片_07_全片19段主角镜头零遗漏替换核验总表.jpg",
      "src": "media/img-3488ba43ceda81fc01d1.jpg",
      "note": "全片 19 段零遗漏核验总表"
    }
  ]
});
