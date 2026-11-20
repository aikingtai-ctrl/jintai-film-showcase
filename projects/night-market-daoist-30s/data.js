window.registerProject({
  "id": "night-market-daoist-30s",
  "title": "夜市道士｜图二原脸靛蓝道袍｜30秒",
  "subtitle": "H3 锁脸换角 · Seedance 2.5 药瓶特写 · LC 音轨 · 画布 388",
  "logline": "保留夜市原片的剧情与声场，以指定道士替换角色，并在药瓶特写中采用 Seedance 生成画面。",
  "date": "2026-11-02",
  "tags": [
    "jeaess",
    "角色替换",
    "H3",
    "Seedance 2.5",
    "LC音轨",
    "30秒",
    "画布 388"
  ],
  "model": "H3 + Seedance 2.5 + LC 后期",
  "modelShort": "H3 + Seedance 2.5 + LC 后期",
  "poster": "media/img-04aff1d483c6ef6c93ae.jpg",
  "film": {
    "src": "https://github.com/aikingtai-ctrl/jintai-film-showcase/releases/download/media-v1/night-market-daoist-30s--faf9597fb7bcf75e4813.mp4",
    "duration": 30.066667
  },
  "meta": {
    "shots": 1,
    "generated": 1,
    "durationSec": 30.066667,
    "resolution": "1920×1080",
    "fps": "30",
    "aspect": "16:9",
    "style": ""
  },
  "synopsis": [],
  "concept": {},
  "pipeline": [],
  "characters": [
    {
      "id": "图二人物｜夜市道士",
      "name": "图二人物｜夜市道士",
      "kind": "人物",
      "image": "media/img-79e907300f71d0eee4b3.png",
      "uses": 1,
      "nodeId": "nvdlVZ0ef-BADbscuzKox"
    }
  ],
  "props": [],
  "docs": [],
  "sequences": [
    {
      "title": "全片",
      "sceneTag": "",
      "shots": [
        "S01"
      ]
    }
  ],
  "shots": [
    {
      "id": "S01",
      "title": "Seedance A 段初版 · 药瓶特写来源",
      "start": null,
      "duration": 14,
      "framing": "",
      "camera": "",
      "lighting": "",
      "cast": [],
      "sceneTag": "",
      "action": "参考视频A为14秒夜市短剧，严格沿用原片的机位、镜头切换、人物站位、手势、口型与时序。只将穿亮黄袍、高黑帽的男道士替换为角色参考图中的图二男子：黑短发、细金属框眼镜、自然偏壮身形、真实五官；服装按定妆图为深靛蓝交领长衫、米白内领、古铜色窄纹、深色束带、低矮黑色软道巾。面孔眼镜造型在全段一致。孕妇、灰紫衣服、药瓶、夜市灯笼、背景均保持原片。对白依原片：女人问有没有秘方保证生男孩；新道士答“吃了我这个药，保证生男孩。生女孩全额退款。要保守秘",
      "picture": "",
      "dialogue": [],
      "dialogueText": "",
      "sound": "",
      "notes": "",
      "firstFramePrompt": "",
      "prompt": "参考视频A为14秒夜市短剧，严格沿用原片的机位、镜头切换、人物站位、手势、口型与时序。只将穿亮黄袍、高黑帽的男道士替换为角色参考图中的图二男子：黑短发、细金属框眼镜、自然偏壮身形、真实五官；服装按定妆图为深靛蓝交领长衫、米白内领、古铜色窄纹、深色束带、低矮黑色软道巾。面孔眼镜造型在全段一致。孕妇、灰紫衣服、药瓶、夜市灯笼、背景均保持原片。对白依原片：女人问有没有秘方保证生男孩；新道士答“吃了我这个药，保证生男孩。生女孩全额退款。要保守秘密，一般人我不告诉他。”女人问价格；新道士答“我们说缘不说钱，一万元。”女人说“好嘞”。男道士声音参考LC音频的音色，仅参考声线，不念样本数字；女人维持原声音色。保持原对话时间点与夜市环境声，不加背景音乐。不得出现旧道士脸、黄袍、高帽、灰色Polo；不得出现字幕、文字、Logo、水印，不要新增人物。",
      "refs": [
        {
          "label": "素材 · A段参考｜00–14.167秒",
          "src": "https://github.com/aikingtai-ctrl/jintai-film-showcase/releases/download/media-v1/night-market-daoist-30s--b215a83ea0a6f4bf080a.mp4"
        },
        {
          "label": "图二人物｜夜市道士",
          "src": "media/img-79e907300f71d0eee4b3.png"
        }
      ],
      "video": "https://github.com/aikingtai-ctrl/jintai-film-showcase/releases/download/media-v1/night-market-daoist-30s--f4f4774e5105f9d42ed4.mp4",
      "thumb": "media/img-04aff1d483c6ef6c93ae.jpg",
      "model": "seedance2.5",
      "params": "14s · seedance2.5 · jimeng_multimodal2video",
      "status": "已生成",
      "alts": [],
      "take": "视频生成"
    }
  ],
  "generation": {
    "model": "H3 + Seedance 2.5 + LC 后期",
    "params": [
      {
        "k": "画布",
        "v": "AI Video Canvas #388：1 个视频节点 / 1 个参考节点 / 2 条连线"
      }
    ],
    "notes": []
  },
  "deliverables": [
    {
      "name": "30秒混合成片",
      "note": "H3 主体换角 + Seedance 药瓶特写 + LC 音轨 · 已交付技术终版，用户审片待确认",
      "src": "https://github.com/aikingtai-ctrl/jintai-film-showcase/releases/download/media-v1/night-market-daoist-30s--faf9597fb7bcf75e4813.mp4"
    },
    {
      "name": "金泰画布 388",
      "note": "Seedance A 段初版成功节点及原始参考素材",
      "src": ""
    }
  ]
});
