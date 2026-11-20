window.registerProject({
  "id": "alley-pajama-duo-dance-h3-26s",
  "title": "胡同双人睡衣呲牙舞｜图二图一反差风替换｜26秒",
  "subtitle": "SAM3 擦除第 3 人 · A 机 H3 FEIHOU_SHOT 26 秒长镜分段重叠 · 9:16 竖屏",
  "logline": "基于抖音 7703862816948418170 胡同齐舞原片，先以 SAM3 + MiniMaxRemover 无痕擦除右后侧第 3 位舞者改为双人构图，再由图二银框眼镜男士穿酒红牡丹丝绵睡衣任前排 C 位主舞、图一青年男士穿藏青格纹纯棉睡衣任左后伴舞，完整跳完 26 秒 Soulja Boy 魔性舞步。",
  "date": "2026-11-05",
  "tags": [
    "H3",
    "A机8卡",
    "双人",
    "角色替换",
    "舞蹈",
    "反差睡衣风",
    "26秒",
    "竖屏 9:16",
    "待用户审片"
  ],
  "model": "A 机 SAM3 + MiniMaxRemover + FeiHou MiniMax H3 Remix HSA v0.7 (FEIHOU_SHOT)",
  "modelShort": "H3",
  "poster": "media/img-4c20e1a2c6d760cf8590.jpg",
  "film": {
    "src": "https://github.com/aikingtai-ctrl/jintai-film-showcase/releases/download/media-v1/alley-pajama-duo-dance-h3-26s--f2a43afcc5c3913c27de.mp4",
    "duration": 26.073991,
    "width": 1080,
    "height": 1920,
    "fps": "24"
  },
  "meta": {
    "shots": 3,
    "generated": 1,
    "durationSec": 26.073991,
    "resolution": "1080×1920",
    "fps": "24",
    "aspect": "9:16",
    "style": "北方水泥胡同自然日光实拍竖屏，反差感宽松长袖男士睡衣套装配居家棉拖鞋，零后期 2D 人脸蒙版。"
  },
  "synopsis": [
    "人数重编与净空底板：原片为 3 位阿姨在水泥胡同齐跳呲牙舞。按拍板口径先用 Qwen-Image-Edit-2511 造出 100% 无人水泥胡同底板，再用 SAM3_VideoTrack + MiniMaxRemover 分 5 段并发擦除右后侧绿碎花睡衣舞者，得到 625 帧干净双人动作参考流。",
    "长镜分段无缝续接：通过 FEIHOU_SHOT 在 00:08.80 与 00:17.60 设两处 22 帧潜空间重叠（overlap_frames=22, color_match=True），以 832×1440 二段式（5+5=10步）一气呵成生成 26.07 秒全片并无损对齐原片音乐。"
  ],
  "concept": {
    "rules": [
      "3 人改 2 人纯净构图：前排 C 位锁定图二银框眼镜男士（酒红暗纹白滚边丝绵睡衣），左后伴舞锁定图一青年男士（藏青墨绿格纹纯棉睡衣）。",
      "零老人残留首帧目标板：以双人 #808080 全身睡衣母图 + 无人胡同底板合成首帧锚点 @first 3。",
      "SAR 1:1 零挤压封装：832×1440 输出经 Lanczos 等比放大裁剪至精确 1080×1920，严禁非等比横向拉伸。"
    ],
    "directorMethod": "先做视频层减法（擦除第 3 人）再做身份层加法（双母图 + 首帧目标板 + FEIHOU_SHOT 22 帧重叠长镜），确保舞步踩点与胡同透视稳固。"
  },
  "pipeline": [
    {
      "stage": "① 第 3 人时序擦除",
      "tool": "SAM3_VideoTrack + Wan2.1-MiniMaxRemover-1.3B",
      "note": "5 段并发擦除右后侧人物，产出 26.04s 双人纯净动作导引流。"
    },
    {
      "stage": "② 双人睡衣定妆卡与首帧板",
      "tool": "Qwen-Image-Edit-2511 + SAM 3.1 + SeedVR2",
      "note": "生成两套睡衣造型定妆卡、#808080 母图及胡同双人首帧目标板。"
    },
    {
      "stage": "③ FEIHOU_SHOT 26秒连续生成",
      "tool": "A 机 :8195 FeiHou H3 Remix v0.7 (VarC)",
      "note": "@split 00:08.80, 00:17.60 · overlap=22 · 5+5=10步 · seed 8888。"
    },
    {
      "stage": "④ 1080×1920 母版音画封装",
      "tool": "FFmpeg Lanczos + 原片 44.1kHz AAC",
      "note": "8.7s / 17.2s 接缝平滑无跳变，全片解码 0 错误。"
    }
  ],
  "characters": [
    {
      "id": "CHR-01",
      "name": "前排 C 位主舞 · 图二眼镜男士",
      "role": "前排主舞",
      "look": "黑短发、银色细金属框眼镜；穿酒红色牡丹暗纹白滚边宽松长袖丝绵睡衣套装与酒红格子棉拖鞋。",
      "image": "media/img-58306e128b9108103db6.png",
      "ref": "media/img-0b0e576a5df71ec88521.png",
      "uses": 3
    },
    {
      "id": "CHR-02",
      "name": "左后侧伴舞 · 图一青年男士",
      "role": "左后伴舞",
      "look": "蓬松纹理黑短发、干净无须；穿藏青与墨绿大格纹白滚边长袖纯棉睡衣套装与深藏青棉拖鞋。",
      "image": "media/img-deed1c06693c902af16c.png",
      "ref": "media/img-3aeaca34f2ce20dd3c24.png",
      "uses": 3
    }
  ],
  "sceneCards": [
    {
      "id": "SCN-ALLEY",
      "name": "北方老胡同双人首帧定妆目标板",
      "desc": "基于无人胡同干净底板与双人 #808080 母图合成的零原片像素首帧锚点。",
      "image": "media/img-879f76cc6369f4e1dce9.png",
      "uses": 3
    }
  ],
  "props": [
    {
      "id": "QC-10",
      "name": "H3 成片十帧全时段抽检表",
      "desc": "覆盖 0–26 秒及两处分段接缝的双人身份与舞步核验表。",
      "image": "media/img-e755709ff5d2c0c86f8a.jpg"
    },
    {
      "id": "QC-V1V2",
      "name": "V1 贴图感修复前后光影对比表",
      "desc": "V1 贴图感瑕疵 vs V2 自然日光立体光影精修对照核验。",
      "image": "media/img-01bc2637427a4ba9a9c0.jpg"
    }
  ],
  "shots": [
    {
      "id": "S01",
      "title": "Chunk 1 · 开场叉腰摆胯与呲牙卡点（00:00–00:08.8）",
      "start": 0,
      "duration": 8.8,
      "framing": "竖屏全身双人镜",
      "camera": "固定平视机位",
      "action": "前排酒红睡衣眼镜男士与左后藏青格纹睡衣青年随 Soulja Boy 前奏同步叉腰、歪头呲牙微笑起舞。",
      "prompt": "@range 00:00.00-00:26.04 @pictures 1,2 @first 3 @split 00:08.80, 00:17.60 — Photorealistic vertical 9:16 daytime concrete alley dance video. Front-center middle-aged Chinese man with silver-rimmed glasses in burgundy piped silk-cotton pajamas (<Picture 1>) and rear-left young Chinese man in navy-green plaid piped pajamas (<Picture 2>) perform synchronized playful dance moves matching <Video 1>.",
      "refs": [
        {
          "label": "双人首帧目标板",
          "src": "media/img-879f76cc6369f4e1dce9.png"
        },
        {
          "label": "抖音原片参考",
          "src": "https://github.com/aikingtai-ctrl/jintai-film-showcase/releases/download/media-v1/alley-pajama-duo-dance-h3-26s--4c4a133bc068bae5fb22.mp4"
        }
      ],
      "video": "https://github.com/aikingtai-ctrl/jintai-film-showcase/releases/download/media-v1/alley-pajama-duo-dance-h3-26s--f2a43afcc5c3913c27de.mp4",
      "thumb": "media/img-a98e8624fc92a1a30bdd.jpg",
      "model": "FeiHou_H3_v0.7",
      "params": "832×1440 → 1080×1920 · 5+5步 · seed 8888",
      "status": "已生成"
    },
    {
      "id": "S02",
      "title": "Chunk 2 · 中段滑步摆臂齐舞（00:08.8–00:17.6）",
      "start": 8.8,
      "duration": 8.8,
      "framing": "竖屏全身双人镜",
      "camera": "固定平视机位",
      "action": "经 22 帧潜空间平滑过渡，两人同步左右垫步摆臂、耸肩律动，睡衣衣摆与棉拖鞋接地自然。",
      "prompt": "FEIHOU_SHOT Chunk 2 (00:08.80–00:17.60, overlap_frames=22, color_match=True): Maintain identical alley background, natural daylight, eyeglasses, and burgundy/plaid pajama outfits from Chunk 1 while following synchronized arm swings and side-steps.",
      "refs": [
        {
          "label": "主舞造型卡",
          "src": "media/img-58306e128b9108103db6.png"
        },
        {
          "label": "伴舞造型卡",
          "src": "media/img-deed1c06693c902af16c.png"
        }
      ],
      "video": "",
      "thumb": "media/img-a208eb03a0f8263cd448.jpg",
      "model": "FeiHou_H3_v0.7",
      "params": "overlap_frames=22 · color_match=True",
      "status": "已合入成片"
    },
    {
      "id": "S03",
      "title": "Chunk 3 · 后段高潮转身收势（00:17.6–00:26.07）",
      "start": 17.6,
      "duration": 8.47,
      "framing": "竖屏全身双人镜",
      "camera": "固定平视机位",
      "action": "两人配合副歌鼓点大幅度屈膝律动与灿烂笑容收尾，全程无第 3 人残影。",
      "prompt": "FEIHOU_SHOT Chunk 3 (00:17.60–00:26.04, overlap_frames=22, color_match=True): Energetic synchronized closing dance groove in the sunlit concrete alley, crisp facial consistency and grounded slipper footwork.",
      "refs": [
        {
          "label": "十帧抽检表",
          "src": "media/img-e755709ff5d2c0c86f8a.jpg"
        }
      ],
      "video": "",
      "thumb": "media/img-7a86950e8dda6893e805.jpg",
      "model": "FeiHou_H3_v0.7",
      "params": "625 frames total @ 24fps",
      "status": "已合入成片"
    }
  ],
  "generation": {
    "model": "FeiHou_MiniMax-H3_Remix_HSA_v0.7 + SAM3_VideoTrack + MiniMaxRemover-1.3B",
    "params": [
      {
        "k": "算力节点",
        "v": "A 机 [内部地址已移除]"
      },
      {
        "k": "二段式规格",
        "v": "540P × 1.5 = 832×1440 (5+5=10步) → Lanczos 1080×1920 @ 24fps"
      },
      {
        "k": "接缝参数",
        "v": "@split 00:08.80, 00:17.60 · overlap_frames=22 · color_match=True"
      },
      {
        "k": "成片 SHA-256",
        "v": "A22E1485FB39DBD788C1C61829FC8485BC04D9BDA4141744997310D0FA8B83B3"
      }
    ],
    "notes": [
      "技术核验通过，双人睡衣造型与舞步卡点完整，最终观感待用户审片确认。"
    ]
  },
  "deliverables": [
    {
      "name": "7703862816948418170_双人睡衣呲牙舞_A机H3角色替换成片_1080p.mp4",
      "src": "https://github.com/aikingtai-ctrl/jintai-film-showcase/releases/download/media-v1/alley-pajama-duo-dance-h3-26s--f2a43afcc5c3913c27de.mp4",
      "note": "26.07s · 1080×1920 · 43.94 MB"
    },
    {
      "name": "01_前排主舞_眼镜男士_睡衣造型定妆卡.png",
      "src": "media/img-58306e128b9108103db6.png",
      "note": "前排主舞定妆卡"
    },
    {
      "name": "02_侧后伴舞_青年男士_睡衣造型定妆卡.png",
      "src": "media/img-deed1c06693c902af16c.png",
      "note": "左后伴舞定妆卡"
    },
    {
      "name": "04_双人睡衣呲牙舞_H3成片十帧抽检表.jpg",
      "src": "media/img-e755709ff5d2c0c86f8a.jpg",
      "note": "成片十帧抽检表"
    },
    {
      "name": "05_V1贴图感修复前后光影对比表.jpg",
      "src": "media/img-01bc2637427a4ba9a9c0.jpg",
      "note": "V1/V2 光影精修对比表"
    }
  ]
});
