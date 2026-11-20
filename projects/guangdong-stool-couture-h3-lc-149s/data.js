window.registerProject({
  "id": "guangdong-stool-couture-h3-lc-149s",
  "title": "广东省凳高定大片｜图一替换图二 LC 韵律配音｜149秒",
  "subtitle": "26 段主角零漏换 × GDSD 意式老钱撞色高定 × H3-FaceRefine 远景 43px 小脸拉升至 76.2%",
  "logline": "将 148.64 秒《如何把广东省凳拍成买不起的样子》全部 26 镜长发男模替换为图二圆脸短卷发银框眼镜男士，融合橄榄棕灰麂皮短夹克×绛红丝衬衫老钱高定、768×768 H3-FaceRefine 远景小脸精修与 Breeze TTS 2 冷幽默韵律直转。",
  "date": "2026-11-12",
  "tags": [
    "H3",
    "角色替换",
    "高定大片",
    "FaceRefine",
    "LC音色",
    "Breeze-TTS",
    "16:9",
    "已生成"
  ],
  "model": "A 机 FeiHou H3 + ComfyUI-H3-FaceRefine + Qwen-Image-2.1 + Breeze TTS 2",
  "modelShort": "H3 + LC音色",
  "poster": "media/img-cb3a3921a5f1bb1ebea6.jpg",
  "film": {
    "src": "https://github.com/aikingtai-ctrl/jintai-film-showcase/releases/download/media-v1/guangdong-stool-couture-h3-lc-149s--61da6f5407bb6c60d9dc.mp4",
    "duration": 148.64,
    "width": 1280,
    "height": 720,
    "fps": "25"
  },
  "meta": {
    "shots": 4,
    "generated": 1,
    "durationSec": 148.64,
    "resolution": "1280×720",
    "fps": "25",
    "aspect": "16:9",
    "style": "意式石柱长廊老钱撞色美学，远景小脸 ArcFace 从 13% 跃升至 54.9%–76.2%。"
  },
  "synopsis": [
    "全片 59 个镜头共 148.64 秒（3,716 帧）：将 26 段主角镜头拆分为 18 个同景别替换段（共 1,613 帧），保留 33 个绛红塑料凳微距、老匠人手作及 GDSD 标版镜头；片头 S01 空墙大字采用人物活动框余弦羽化回贴保持 100% 像素锐利。",
    "攻克两大难点：一是 25fps 转 24fps 精确重定时且对跨景别远景小脸（S35 44px、S01 43px）拆开先二采出全身乐福皮鞋底片，再接入 H3-FaceRefine manual 768×768 局部放大 5.8×–7.1× 重绘使小脸相似度最高升至 76.2%；二是 27 句冷幽默直转 keep_acoustic=1 + 4 句预告片低音演绎。"
  ],
  "concept": {
    "rules": [
      "跨景别严禁混批 480P：全景小脸（S35）与特写（S36）必须独立切分并二采保鞋履细节。",
      "H3-FaceRefine 768×768 放大律：43–52px 小脸放大 6 倍重绘并设 identity_track=False 防漏检。",
      "片头空墙字原貌护航：静态柱廊背景仅在人物活动框回贴，大号字标零模糊。"
    ],
    "directorMethod": "先完成 ArcFace 95.83%–97.28% 三视角 + 整头颈母图生成，再针对全身远景跑二采 + H3-FaceRefine 双重加固与 31 句 Breeze LC 韵律迁移。"
  },
  "pipeline": [
    {
      "stage": "① GDSD 老钱撞色定妆",
      "tool": "A 机 Qwen-Image-2.1",
      "note": "橄榄棕灰麂皮夹克+绛红系带真丝衬衫+暖驼百慕大短裤+黑乐福鞋。"
    },
    {
      "stage": "② Breeze LC 31 句韵律直转",
      "tool": "A 机 :7868 LC_clean",
      "note": "27 句冷幽默 keep_acoustic=1 + 4 句稳态预告片低音金句。"
    },
    {
      "stage": "③ 18 段同景别替换 + FaceRefine",
      "tool": "FeiHou H3 + ComfyUI-H3-FaceRefine",
      "note": "S01 小脸升至 76.2%、S35 升至 54.9%、S38 升至 50.1%。"
    },
    {
      "stage": "④ 720p25 3,716 帧终版封装",
      "tool": "FFmpeg Top-Hat 锐化字幕",
      "note": "DECODE_RC=0 零报错，全片逐段实耳听审通过。"
    }
  ],
  "characters": [
    {
      "id": "CHR-01",
      "name": "GDSD 高定造型设计总卡",
      "role": "四视图老钱高定总表",
      "look": "橄榄棕灰麂皮短夹克搭绛艳红丝衬衫与暖驼短裤。",
      "image": "media/img-cb6251ac89c5012fd008.png",
      "uses": 4
    },
    {
      "id": "CHR-02",
      "name": "正面全身老钱高定母图",
      "role": "全身全景锚点 (95.83%)",
      "look": "完整保留哑光黑乐福皮鞋与灰红横条中筒袜。",
      "image": "media/img-9e55eeb8c38e099af12c.png",
      "uses": 4
    },
    {
      "id": "CHR-03",
      "name": "侧身柱廊松弛姿态母图",
      "role": "3/4 侧身锚点 (92.78%)",
      "look": "匹配石柱长廊侧步动态。",
      "image": "media/img-8f4bda6494c199c333f7.png",
      "uses": 4
    },
    {
      "id": "CHR-04",
      "name": "背侧利落短发廓形母图",
      "role": "背侧防长发残影 (77.18%)",
      "look": "利落黑短发后脑轮廓。",
      "image": "media/img-da8cf503b73b9fd08974.png",
      "uses": 4
    },
    {
      "id": "CHR-05",
      "name": "整头颈零裁切正脸特写",
      "role": "特写与 FaceRefine 源图 (97.28%)",
      "look": "1024×1024 零裁切头颈肖像。",
      "image": "media/img-54bfaf747d9ccfa96e18.png",
      "uses": 4
    }
  ],
  "props": [
    {
      "id": "REF-01",
      "name": "全片十六镜抽检总表",
      "desc": "全片 16 帧替换质感与服装细节检视。",
      "image": "media/img-5603c6ddb265ef18a51a.jpg"
    },
    {
      "id": "REF-02",
      "name": "六大名场面 1:1 对比表",
      "desc": "原片图1 vs 成片图2 六大高光场景逐帧对照。",
      "image": "media/img-b3308cf44f641e2bf291.jpg"
    }
  ],
  "shots": [
    {
      "id": "S01",
      "title": "Part 1 · 意式石柱长廊开场与静态空墙大字保护",
      "start": 0,
      "duration": 36,
      "framing": "石柱长廊全景 / 中景",
      "camera": "空墙活动框羽化 + FaceRefine",
      "action": "43px 小脸精修至 76.2%，保留原片 62px 粗笔画标题 100% 锐度。",
      "prompt": "Italian colonnade luxury walk in olive suede jacket and crimson silk shirt, 768x768 face refine.",
      "refs": [
        {
          "label": "全片十六镜抽检总表",
          "src": "media/img-5603c6ddb265ef18a51a.jpg"
        }
      ],
      "video": "https://github.com/aikingtai-ctrl/jintai-film-showcase/releases/download/media-v1/guangdong-stool-couture-h3-lc-149s--61da6f5407bb6c60d9dc.mp4",
      "thumb": "media/img-42183dd42bfd65ea790e.jpg",
      "model": "FeiHou_MiniMax-H3_Remix_HSA_v0.7 + Breeze TTS 2 / LC",
      "params": "1280×720 @ 25fps",
      "status": "已合入成片"
    },
    {
      "id": "S02",
      "title": "Part 2 · 绛红塑料凳哲思演讲与脚踝特写衔接",
      "start": 36,
      "duration": 42,
      "framing": "中近景 / 微距直通",
      "camera": "1024 正脸肖像母图锁近景",
      "action": "75.2%–79.3% 高相似度正面特写与原片乐福鞋特写严丝合缝。",
      "prompt": "Close-up luxury monologue preserving crimson plastic stool product shots.",
      "refs": [
        {
          "label": "全片十六镜抽检总表",
          "src": "media/img-5603c6ddb265ef18a51a.jpg"
        }
      ],
      "video": "",
      "thumb": "media/img-6f7787a520d9dc060817.jpg",
      "model": "FeiHou_MiniMax-H3_Remix_HSA_v0.7 + Breeze TTS 2 / LC",
      "params": "1280×720 @ 25fps",
      "status": "已合入成片"
    },
    {
      "id": "S03",
      "title": "Part 3 · S35 全身跨景别解耦二采与皮鞋还原",
      "start": 78,
      "duration": 40,
      "framing": "柱廊全身大远景",
      "camera": "H3SampleEnhancer2nd + FaceRefine",
      "action": "先二采稳住黑色乐福皮鞋，再局部放大 7 倍精修五官与银框眼镜。",
      "prompt": "Full-body 720p upscaled colonnade stride preserving matte black loafers.",
      "refs": [
        {
          "label": "全片十六镜抽检总表",
          "src": "media/img-5603c6ddb265ef18a51a.jpg"
        }
      ],
      "video": "",
      "thumb": "media/img-2e29c191c4fccc77a347.jpg",
      "model": "FeiHou_MiniMax-H3_Remix_HSA_v0.7 + Breeze TTS 2 / LC",
      "params": "1280×720 @ 25fps",
      "status": "已合入成片"
    },
    {
      "id": "S04",
      "title": "Part 4 · 低音炮金句与 GDSD 品牌标版终章",
      "start": 118,
      "duration": 30.64,
      "framing": "正脸庄严特写 / 标版",
      "camera": "4 句稳态预告片低音",
      "action": "片尾降八度幽默金句自然稳态收敛，3,716 帧零报错收官。",
      "prompt": "Deadpan bassline punchline finale fading cleanly into GDSD slate.",
      "refs": [
        {
          "label": "全片十六镜抽检总表",
          "src": "media/img-5603c6ddb265ef18a51a.jpg"
        }
      ],
      "video": "",
      "thumb": "media/img-c9a5e4354a61a7daad51.jpg",
      "model": "FeiHou_MiniMax-H3_Remix_HSA_v0.7 + Breeze TTS 2 / LC",
      "params": "1280×720 @ 25fps",
      "status": "已合入成片"
    }
  ],
  "generation": {
    "model": "A 机 FeiHou H3 + ComfyUI-H3-FaceRefine + Qwen-Image-2.1 + Breeze TTS 2",
    "params": [
      {
        "k": "远景精修",
        "v": "ComfyUI-H3-FaceRefine (768×768) · S01 达 76.2%"
      },
      {
        "k": "帧数校验",
        "v": "1280×720 @ 25fps · 3,716 帧 · 148.64s · DECODE_RC=0"
      },
      {
        "k": "配音直转",
        "v": "Breeze TTS 2 LC_clean · 27 句韵律直转 + 4 句低音金句"
      },
      {
        "k": "成片体积",
        "v": "56.79 MB · 148.64s"
      }
    ],
    "notes": [
      "本地文档：[本机路径已移除]"
    ]
  },
  "deliverables": [
    {
      "name": "广东省凳高定大片_图1替换图2_LC音色_A机H3成片_720p.mp4",
      "src": "https://github.com/aikingtai-ctrl/jintai-film-showcase/releases/download/media-v1/guangdong-stool-couture-h3-lc-149s--61da6f5407bb6c60d9dc.mp4",
      "note": "148.64s · 1280×720 · 56.79 MB"
    },
    {
      "name": "广东省凳高定大片_00_图2主角GDSD高定造型设计定妆总卡.png",
      "src": "media/img-cb6251ac89c5012fd008.png",
      "note": "GDSD 高定造型设计总卡"
    },
    {
      "name": "广东省凳高定大片_01_图2正面全身_GDSD意式老钱高定母图_灰底.png",
      "src": "media/img-9e55eeb8c38e099af12c.png",
      "note": "正面全身老钱高定母图"
    },
    {
      "name": "广东省凳高定大片_02_图2侧身柱廊松弛姿态_高定母图_灰底.png",
      "src": "media/img-8f4bda6494c199c333f7.png",
      "note": "侧身柱廊松弛姿态母图"
    },
    {
      "name": "广东省凳高定大片_03_图2背侧利落短发廓形_高定母图_灰底.png",
      "src": "media/img-da8cf503b73b9fd08974.png",
      "note": "背侧利落短发廓形母图"
    },
    {
      "name": "广东省凳高定大片_04_图2整头颈零裁切正脸特写母图_灰底.png",
      "src": "media/img-54bfaf747d9ccfa96e18.png",
      "note": "整头颈零裁切正脸特写"
    },
    {
      "name": "广东省凳高定大片_05_全片十六镜抽检总表.jpg",
      "src": "media/img-5603c6ddb265ef18a51a.jpg",
      "note": "全片十六镜抽检总表"
    },
    {
      "name": "广东省凳高定大片_06_原片图1vs成片图2_六大名场面1比1对比表.jpg",
      "src": "media/img-b3308cf44f641e2bf291.jpg",
      "note": "六大名场面 1:1 对比表"
    }
  ]
});
