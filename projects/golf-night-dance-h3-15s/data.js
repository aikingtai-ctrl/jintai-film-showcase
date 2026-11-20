window.registerProject({
  "id": "golf-night-dance-h3-15s",
  "title": "夜色高尔夫跳步抖肩舞｜A机 H3 角色替换｜15秒",
  "subtitle": "9:16 竖屏 1080×1920 · 全身/半身双灰底母图 × V1僵笑 vs V2自然神态面部精修",
  "logline": "将夜间高尔夫球场 15 秒 jumpstyle 抖肩舞实拍视频 100% 替换为银框眼镜男士，匹配定制高尔夫运动装束与夜间泛光灯色温，并经 V2 面部神态专项精修消除 V1 露齿僵笑，呈现松弛自信的律动表演。",
  "date": "2026-11-06",
  "tags": [
    "H3",
    "角色替换",
    "舞蹈",
    "9:16竖屏",
    "面部精修",
    "1080p",
    "已生成"
  ],
  "model": "A 机 FeiHou MiniMax H3 + Qwen-Image-2.1 (V2 神态精修)",
  "modelShort": "H3",
  "poster": "media/img-de6403cb1e23540efabf.jpg",
  "film": {
    "src": "https://github.com/aikingtai-ctrl/jintai-film-showcase/releases/download/media-v1/golf-night-dance-h3-15s--b8e2c5430796f3ea826a.mp4",
    "duration": 15.125,
    "width": 1080,
    "height": 1920,
    "fps": "24"
  },
  "meta": {
    "shots": 1,
    "generated": 1,
    "durationSec": 15.125,
    "resolution": "1080×1920",
    "fps": "24",
    "aspect": "9:16",
    "style": "夜间绿茵泛光照明写实质感，全身摆臂步频与面部微表情自然协调。"
  },
  "synopsis": [
    "先针对原片夜间照明与运动衣着构建全身+半身两套 #808080 灰底母图及首帧目标板，锁死图一男士银框眼镜与发型轮廓。",
    "首版运行存在短暂露齿僵笑瑕疵，V2 通过面部神态靶向精修与十二帧全时段核验输出自然流畅的终版 1080p 成片。"
  ],
  "concept": {
    "rules": [
      "夜间强顶灯色温对齐：在灰底母图与首帧目标板上提前校对夜灯环境反光。",
      "V1 僵笑靶向清零：对照 1:1 面部放大比对表彻底修正嘴角生硬拉扯。"
    ],
    "directorMethod": "双尺度母图（全身保步伐比例 + 半身特写保五官眼镜）绑定首帧目标板直投 A 机 H3，再落盘 V2 面部神态精修对比归档。"
  },
  "pipeline": [
    {
      "stage": "① 高尔夫运动造型定妆",
      "tool": "Qwen-Image-2.1",
      "note": "产出设计总卡、全身/半身灰底母图及首帧热舞目标板。"
    },
    {
      "stage": "② A 机 H3 全身舞蹈替换",
      "tool": "FeiHou MiniMax H3",
      "note": "1080×1920 @ 24fps，稳健继承高尔夫草坪跃动步伐与抖肩节奏。"
    },
    {
      "stage": "③ V2 面部神态对比精修",
      "tool": "1:1 精修对照 + 12 帧抽检",
      "note": "消除 V1 僵笑并落盘成片与对比检视板。"
    }
  ],
  "characters": [
    {
      "id": "CHR-GOLF",
      "name": "高尔夫运动造型总卡",
      "role": "主角总卡",
      "look": "银框细金属眼镜配高尔夫休闲运动服饰。",
      "image": "media/img-1b8b0952306949a3d86a.png",
      "ref": "media/img-b388357e246aec7d1e16.png",
      "uses": 1
    },
    {
      "id": "CHR-GOLF-HALF",
      "name": "高尔夫半身特写灰底母图",
      "role": "面部细锁锚点",
      "look": "短卷发与鼻梁眼镜细节对齐。",
      "image": "media/img-1ae8deee9d30ea7e886e.png",
      "uses": 1
    }
  ],
  "sceneCards": [
    {
      "id": "SCN-GOLF",
      "name": "夜间高尔夫首帧与热舞目标板",
      "desc": "锁死夜灯照明光路与人物站位比例。",
      "image": "media/img-8e0bfe9876b0b3bb7d48.png",
      "uses": 1
    }
  ],
  "props": [
    {
      "id": "QC-12",
      "name": "成片十二帧跨时段抽检表",
      "desc": "覆盖 0–15s 跳跃摆臂与眼镜稳定性的 12 帧网格核验。",
      "image": "media/img-b7f595f6b2c0b13c96d7.jpg"
    },
    {
      "id": "QC-V1V2",
      "name": "V1 僵笑 vs V2 自然神态 1:1 对比表",
      "desc": "V1 与 V2 五官肌肉自然度放大对比。",
      "image": "media/img-3683a83c5075a2cdd997.jpg"
    }
  ],
  "shots": [
    {
      "id": "S01",
      "title": "夜间高尔夫球场 · 跳步抖肩热舞全片 1080p",
      "start": 0,
      "duration": 15.125,
      "framing": "竖屏 9:16 全身动态跟拍 (1080×1920)",
      "camera": "夜间草坪强顶灯 + 自然节奏跃动",
      "action": "图一银框眼镜男士身着专业高尔夫运动polo衫与休闲长裤，于夜间照明草坪上紧贴《兰亭序》jumpstyle 节拍完成跳步、摆手与抖肩舞姿，经 V2 自然神态精修根除 V1 僵笑。",
      "prompt": "Night-lit golf course photorealistic 9:16 swap of jumpstyle dancer with East Asian middle-aged man wearing thin silver metal-frame glasses and golf polo attire, relaxed organic facial expression (V2 anti-frozen-smile refinement).",
      "refs": [
        {
          "label": "夜间高尔夫首帧与热舞目标板",
          "src": "media/img-8e0bfe9876b0b3bb7d48.png"
        },
        {
          "label": "V1僵笑 vs V2自然神态对比表",
          "src": "media/img-3683a83c5075a2cdd997.jpg"
        }
      ],
      "video": "https://github.com/aikingtai-ctrl/jintai-film-showcase/releases/download/media-v1/golf-night-dance-h3-15s--b8e2c5430796f3ea826a.mp4",
      "thumb": "media/img-d7fc2a27c5018fb94d32.jpg",
      "model": "FeiHou MiniMax H3 + FaceRefine V2",
      "params": "1080×1920 @ 24fps · 15.125s",
      "status": "已生成 (V2精修)"
    }
  ],
  "generation": {
    "model": "FeiHou MiniMax H3 + V2 神态精修",
    "params": [
      {
        "k": "视频规格",
        "v": "1080×1920 @ 24fps · 15.125s"
      },
      {
        "k": "成片体积",
        "v": "19.59 MB"
      },
      {
        "k": "原参考源",
        "v": "抖音 7703565034052519923（夜色高尔夫 Jumpstyle）"
      }
    ],
    "notes": [
      "已收录全套定妆卡、全身/半身母图、十二帧抽检表与 V1/V2 面部精修比对表。"
    ]
  },
  "deliverables": [
    {
      "name": "7703565034052519923_高尔夫跳步抖肩舞_A机H3角色替换成片_1080p.mp4",
      "src": "https://github.com/aikingtai-ctrl/jintai-film-showcase/releases/download/media-v1/golf-night-dance-h3-15s--b8e2c5430796f3ea826a.mp4",
      "note": "15.125s · 1080×1920 · 19.59 MB"
    },
    {
      "name": "7703565034052519923_01_主角高尔夫运动造型设计定妆总卡.png",
      "src": "media/img-1b8b0952306949a3d86a.png",
      "note": "造型总卡"
    },
    {
      "name": "7703565034052519923_03_高尔夫热舞_H3成片十二帧抽检表.jpg",
      "src": "media/img-b7f595f6b2c0b13c96d7.jpg",
      "note": "十二帧抽检表"
    },
    {
      "name": "7703565034052519923_04_V1僵笑vsV2自然神态_面部1比1精修对比表.jpg",
      "src": "media/img-3683a83c5075a2cdd997.jpg",
      "note": "V1/V2 精修对比"
    }
  ]
});
