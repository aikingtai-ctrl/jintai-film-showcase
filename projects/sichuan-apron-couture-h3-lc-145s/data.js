window.registerProject({
  "id": "sichuan-apron-couture-h3-lc-145s",
  "title": "四川省服高定大片｜图一替换图二 LC 音色｜145秒",
  "subtitle": "34 段主角镜头全替换 × SHENEL/BASUCIAGA 围裙高定三件套 × Demucs + LC 全片混音",
  "logline": "将 144.71 秒《如何把四川省服围裙拍成买不起的样子》全 34 个主角镜头中长发男模替换为圆脸短卷发银框眼镜男士，定制荒野黑 T、省耐儿 SHENEL 白领结黑西装叠红黑格围裙与巴蜀世家长袖反穿风衣三套造型，配齐 35 句 LC 旁白。",
  "date": "2026-11-11",
  "tags": [
    "H3",
    "角色替换",
    "高定大片",
    "LC音色",
    "Breeze-TTS",
    "16:9",
    "已生成"
  ],
  "model": "A 机 FeiHou MiniMax H3 + Qwen-Image-2.1 + Breeze TTS 2 (LC)",
  "modelShort": "H3 + LC音色",
  "poster": "media/img-249a357a9bd61efc8106.jpg",
  "film": {
    "src": "https://github.com/aikingtai-ctrl/jintai-film-showcase/releases/download/media-v1/sichuan-apron-couture-h3-lc-145s--1f676e5e744c78c6e90e.mp4",
    "duration": 144.708,
    "width": 1280,
    "height": 720,
    "fps": "24"
  },
  "meta": {
    "shots": 4,
    "generated": 1,
    "durationSec": 144.708,
    "resolution": "1280×720",
    "fps": "24",
    "aspect": "16:9",
    "style": "川渝红黑格纹围裙与高定解构混搭，ArcFace 母图 97.14%–97.53%、视频均值 68.73%。"
  },
  "synopsis": [
    "全片 144.71 秒（3,473 帧）共覆盖 34 个主角镜头（合并为 21 段连续片段、共计 2,250 帧），保留 17 个空镜、老裁缝及面料微距镜头；关闭 FeiHouMotionSegment 的 frame_window 强制填充并改按精确帧区间单通 6 步并发，将单段耗时由 421s 压低至 88–220s。",
    "音色方面把 8.22s LC 参考干声注册至 Breeze TTS 2 (:7868)，用 Demucs 分离保留原片四轨伴奏音效，按 Whisper 逐句时间轴生成 35 句 LC 旁白并加入 60ms 辅音保护垫与二阶 Top-Hat 锐利字幕还原本片 SHENEL / BASUCIAGA 大字。"
  ],
  "concept": {
    "rules": [
      "关闭 frame_window=False 杜绝短镜强制补 226 帧算力浪费。",
      "三套高定余弦羽化嫁接原始完整头颈（含下颌与耳廓），ArcFace 锁定 97.14%–97.53%。",
      "60ms 辅音保护垫 + 实耳逐句试听确保 35 句 LC 解说零叠音、零吞字。"
    ],
    "directorMethod": "先完成三套川渝围裙高定母图定妆，再在 8188–8195 八卡分三波并发跑通 21 段连续替换片段，最后混入 Demucs 原片配乐音效与锐利品牌大字。"
  },
  "pipeline": [
    {
      "stage": "① 川渝高定三件套母图",
      "tool": "Qwen-Image-2.1",
      "note": "荒野黑T极简、省耐儿SHENEL白领结叠红黑围裙、巴蜀世家反穿风衣。"
    },
    {
      "stage": "② Breeze LC 35 句配音",
      "tool": "A 机 :7868 + Faster-Whisper + Demucs",
      "note": "保留原片快门与环境音效，60ms 防吞字保护。"
    },
    {
      "stage": "③ 21 段八卡并发角色替换",
      "tool": "FeiHou Easy H3 (frame_window=False)",
      "note": "覆盖全部 34 镜 2,250 帧，ArcFace 峰值 71.05%。"
    },
    {
      "stage": "④ Top-Hat 品牌字还原封装",
      "tool": "FFmpeg 1280×720 @ 24fps",
      "note": "完美保留 SHENEL / BASUCIAGA 大字与 3,473 帧 DECODE_RC=0。"
    }
  ],
  "characters": [
    {
      "id": "CHR-01",
      "name": "四川省服三套高定总卡",
      "role": "川渝围裙高定汇总",
      "look": "三套红黑格纹围裙解构高定全览。",
      "image": "media/img-5a91fb5df22ad3fbdf11.png",
      "uses": 4
    },
    {
      "id": "CHR-02",
      "name": "造型一｜荒野黑T极简高定款",
      "role": "荒野极简风母图",
      "look": "修身黑短袖配机能短裤与马丁靴。",
      "image": "media/img-0ebc45de04108823ac14.png",
      "uses": 4
    },
    {
      "id": "CHR-03",
      "name": "造型二｜省耐儿 SHENEL 西装款",
      "role": "白领结礼服叠红黑围裙",
      "look": "黑色戗驳领礼服内搭四川红黑格纹围裙。",
      "image": "media/img-2f1a4cea5733529610b9.png",
      "uses": 4
    },
    {
      "id": "CHR-04",
      "name": "造型三｜巴蜀世家反穿风衣款",
      "role": "长袖罩衣围裙反穿风衣",
      "look": "敞开红黑长袖罩衣营造高定风衣廓形。",
      "image": "media/img-d9828787340fc4086851.png",
      "uses": 4
    },
    {
      "id": "CHR-05",
      "name": "整头颈零裁切正脸特写母图",
      "role": "面部强锁锚点 (97.53%)",
      "look": "圆润脸庞、短卷发与银色半框眼镜全头颈锁定。",
      "image": "media/img-309bda8b056c200cf50b.png",
      "uses": 4
    }
  ],
  "props": [
    {
      "id": "REF-01",
      "name": "全片十六镜抽检总表",
      "desc": "覆盖全片 16 个关键时段抽检。",
      "image": "media/img-b8e527cb226bf652b7b7.jpg"
    },
    {
      "id": "REF-02",
      "name": "三套造型 1:1 对比表",
      "desc": "原片图2 vs 成片图1 高定造型还原对比。",
      "image": "media/img-82dc977a8071db89620d.jpg"
    }
  ],
  "shots": [
    {
      "id": "S01",
      "title": "Part 1 · 荒野黑T 极简入场与格纹哲思开篇",
      "start": 0,
      "duration": 36,
      "framing": "荒野中全景 / 近景",
      "camera": "frame_window=False 单通 6 步",
      "action": "荒野行走切换图一男士，保持自然呼吸与原片日光质感。",
      "prompt": "Minimalist black tee and utility shorts in wilderness, identity locked to Figure 1.",
      "refs": [
        {
          "label": "全片十六镜抽检总表",
          "src": "media/img-b8e527cb226bf652b7b7.jpg"
        }
      ],
      "video": "https://github.com/aikingtai-ctrl/jintai-film-showcase/releases/download/media-v1/sichuan-apron-couture-h3-lc-145s--1f676e5e744c78c6e90e.mp4",
      "thumb": "assets/shots/S01.jpg",
      "model": "FeiHou_MiniMax-H3_Remix_HSA_v0.7 + Breeze TTS 2 / LC",
      "params": "1280×720 @ 24fps",
      "status": "已合入成片"
    },
    {
      "id": "S02",
      "title": "Part 2 · 省耐儿 SHENEL 西装白领结叠穿红黑围裙",
      "start": 36,
      "duration": 40,
      "framing": "高定秀场特写 / 半身",
      "camera": "Top-Hat 品牌字还原",
      "action": "白领结礼服西装严肃解说围裙美学，品牌浮标字零重影。",
      "prompt": "SHENEL black tuxedo with white bowtie over red-black checkered Sichuan apron.",
      "refs": [
        {
          "label": "全片十六镜抽检总表",
          "src": "media/img-b8e527cb226bf652b7b7.jpg"
        }
      ],
      "video": "",
      "thumb": "assets/shots/S02.jpg",
      "model": "FeiHou_MiniMax-H3_Remix_HSA_v0.7 + Breeze TTS 2 / LC",
      "params": "1280×720 @ 24fps",
      "status": "已合入成片"
    },
    {
      "id": "S03",
      "title": "Part 3 · 巴蜀世家 BASUCIAGA 反穿长袖围裙风衣",
      "start": 76,
      "duration": 40,
      "framing": "长廊阔步 / 侧身转场",
      "camera": "8 卡分三波并发 2,250 帧",
      "action": "长袖罩衣围裙反穿走出高定风衣摆动气场。",
      "prompt": "BASUCIAGA long-sleeve plaid apron worn backwards as an avant-garde trench coat.",
      "refs": [
        {
          "label": "全片十六镜抽检总表",
          "src": "media/img-b8e527cb226bf652b7b7.jpg"
        }
      ],
      "video": "",
      "thumb": "assets/shots/S03.jpg",
      "model": "FeiHou_MiniMax-H3_Remix_HSA_v0.7 + Breeze TTS 2 / LC",
      "params": "1280×720 @ 24fps",
      "status": "已合入成片"
    },
    {
      "id": "S04",
      "title": "Part 4 · 老裁缝匠心穿插与品牌终章",
      "start": 116,
      "duration": 28.71,
      "framing": "原片空镜与终景定格",
      "camera": "LC 35 句 60ms 保护收尾",
      "action": "17 个老裁缝及面料特写直通衔接主角落版，3,473 帧完整收官。",
      "prompt": "Tailor craftsmanship inserts seamlessly matching closing luxury fashion poses.",
      "refs": [
        {
          "label": "全片十六镜抽检总表",
          "src": "media/img-b8e527cb226bf652b7b7.jpg"
        }
      ],
      "video": "",
      "thumb": "assets/shots/S04.jpg",
      "model": "FeiHou_MiniMax-H3_Remix_HSA_v0.7 + Breeze TTS 2 / LC",
      "params": "1280×720 @ 24fps",
      "status": "已合入成片"
    }
  ],
  "generation": {
    "model": "A 机 FeiHou MiniMax H3 + Qwen-Image-2.1 + Breeze TTS 2 (LC)",
    "params": [
      {
        "k": "并发覆盖",
        "v": "21 段并发覆盖 34 镜 · 2,250 帧替换"
      },
      {
        "k": "母图锁脸",
        "v": "ArcFace 97.14%–97.53% · 视频均值 68.73% / 峰值 71.05%"
      },
      {
        "k": "帧数校验",
        "v": "1280×720 @ 24fps · 3,473 帧 · 144.71s"
      },
      {
        "k": "成片体积",
        "v": "56.11 MB · 144.708s"
      }
    ],
    "notes": [
      "本地文档：[本机路径已移除]"
    ]
  },
  "deliverables": [
    {
      "name": "四川省服高定大片_图1替换图2_LC音色_A机H3成片_720p.mp4",
      "src": "https://github.com/aikingtai-ctrl/jintai-film-showcase/releases/download/media-v1/sichuan-apron-couture-h3-lc-145s--1f676e5e744c78c6e90e.mp4",
      "note": "144.708s · 1280×720 · 56.11 MB"
    },
    {
      "name": "四川省服高定大片_00_主角三套高定造型设计定妆总卡.png",
      "src": "media/img-5a91fb5df22ad3fbdf11.png",
      "note": "四川省服三套高定总卡"
    },
    {
      "name": "四川省服高定大片_01_造型一_荒野黑T极简高定款_灰底.png",
      "src": "media/img-0ebc45de04108823ac14.png",
      "note": "造型一｜荒野黑T极简高定款"
    },
    {
      "name": "四川省服高定大片_02_造型二_省耐儿SHENEL黑西装白领结叠穿红黑格纹围裙款_灰底.png",
      "src": "media/img-2f1a4cea5733529610b9.png",
      "note": "造型二｜省耐儿 SHENEL 西装款"
    },
    {
      "name": "四川省服高定大片_03_造型三_巴蜀世家BASUCIAGA红黑格纹长袖围裙反穿风衣款_灰底.png",
      "src": "media/img-d9828787340fc4086851.png",
      "note": "造型三｜巴蜀世家反穿风衣款"
    },
    {
      "name": "四川省服高定大片_04_主角整头颈零裁切正脸特写母图_灰底.png",
      "src": "media/img-309bda8b056c200cf50b.png",
      "note": "整头颈零裁切正脸特写母图"
    },
    {
      "name": "四川省服高定大片_05_全片十六镜抽检总表.jpg",
      "src": "media/img-b8e527cb226bf652b7b7.jpg",
      "note": "全片十六镜抽检总表"
    },
    {
      "name": "四川省服高定大片_06_原片图2vs成片图1_三套造型1比1对比表.jpg",
      "src": "media/img-82dc977a8071db89620d.jpg",
      "note": "三套造型 1:1 对比表"
    }
  ]
});
