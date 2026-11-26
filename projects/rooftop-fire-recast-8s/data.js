window.registerProject({
  "id": "rooftop-fire-recast-8s",
  "title": "天台烈焰不回头｜图二男主替换｜8秒",
  "subtitle": "2026-11-13 · 交付版 · 已验收本地终版",
  "logline": "两段参考镜头：室内接纸屑、天台捻火引爆。原始逐镜提示词/seed 未在本地项目包定位。",
  "date": "2026-11-13",
  "tags": [
    "交付版",
    "已生成",
    "终版归档",
    "9:16",
    "MiniMax H3"
  ],
  "model": "MiniMax H3 + FaceFusion",
  "modelShort": "MiniMax H3",
  "poster": "media/img-2f6f750111a5048f5ba7.jpg",
  "film": {
    "src": "https://github.com/aikingtai-ctrl/jintai-film-showcase/releases/download/media-v1/rooftop-fire-recast-8s--12436c05854f1d3a9c0a.mp4",
    "duration": 8.1,
    "width": 1080,
    "height": 1924,
    "fps": "30/1"
  },
  "meta": {
    "shots": 2,
    "generated": 2,
    "durationSec": 8.1,
    "resolution": "1080×1924",
    "fps": "30/1",
    "aspect": "9:16",
    "style": "两段参考镜头：室内接纸屑、天台捻火引爆。原始逐镜提示词/seed 未在本地项目包定位。"
  },
  "synopsis": [
    "两段参考镜头：室内接纸屑、天台捻火引爆。原始逐镜提示词/seed 未在本地项目包定位。",
    "逐镜时间码和提示词以原生产计划及提示词构建函数为准；原片直通段明确标出。"
  ],
  "pipeline": [
    {
      "stage": "源素材与镜段计划",
      "tool": "原生产工程",
      "note": "逐镜边界、seed 和提示词按生产计划重建；未归档项在镜头卡明示。"
    },
    {
      "stage": "成片与验收",
      "tool": "MiniMax H3 + FaceFusion",
      "note": "交付版 终版；QA 图卡和本地来源账本已归档。"
    }
  ],
  "props": [
    {
      "id": "QA01",
      "name": "11月13日_04_天台烈焰大片_H3成片十二帧抽检表",
      "image": "media/img-f46fea76c00d3cf40c8b.jpg",
      "desc": "交付版 终版验收图卡；来源与哈希见本地账本。"
    },
    {
      "id": "QA02",
      "name": "11月13日_05_原片视频1vs成片图2_关键名场面1比1对比表",
      "image": "media/img-60eede9995e22650ee05.jpg",
      "desc": "交付版 终版验收图卡；来源与哈希见本地账本。"
    },
    {
      "id": "QA03",
      "name": "11月13日_00_主角暗夜烈焰硬汉造型设计定妆总卡",
      "image": "media/img-64dcaeaa74080d2f6f5a.png",
      "desc": "交付版 终版验收图卡；来源与哈希见本地账本。"
    }
  ],
  "shots": [
    {
      "id": "S01",
      "title": "室内接纸屑与举臂",
      "start": 0,
      "duration": 1.8,
      "framing": "生成窗 / 终版时间段",
      "action": "室内接纸屑与举臂",
      "prompt": null,
      "seed": null,
      "sourceMode": "generated_replacement",
      "video": null,
      "status": "终版成片内的时间段；独立片段未归档",
      "thumb": "media/img-7d0a5bcbe9d51ef8ffe7.jpg",
      "refs": [
        {
          "label": "11月13日_04_天台烈焰大片_H3成片十二帧抽检表",
          "src": "media/img-f46fea76c00d3cf40c8b.jpg"
        }
      ]
    },
    {
      "id": "S02",
      "title": "天台捻火、甩出并引爆火球",
      "start": 1.8,
      "duration": 6.3,
      "framing": "生成窗 / 终版时间段",
      "action": "天台捻火、甩出并引爆火球",
      "prompt": null,
      "seed": null,
      "sourceMode": "generated_replacement",
      "video": null,
      "status": "终版成片内的时间段；独立片段未归档",
      "thumb": "media/img-fbf11c91aac452c2a452.jpg",
      "refs": [
        {
          "label": "11月13日_04_天台烈焰大片_H3成片十二帧抽检表",
          "src": "media/img-f46fea76c00d3cf40c8b.jpg"
        }
      ]
    }
  ],
  "generation": {
    "model": "MiniMax H3 + FaceFusion",
    "params": [
      {
        "k": "终版规格",
        "v": "1080×1924 · 30/1 · 8.100s"
      },
      {
        "k": "版本",
        "v": "交付版"
      }
    ],
    "notes": [
      "meta.generated 统计生产计划明确的生成窗/替换镜段；只在拥有独立成片文件时才给逐镜 video。",
      "原始逐镜文本提示词/seed 未归档；本页只记录已证实的成片时间段和处理方式。",
      "两段参考镜头：室内接纸屑、天台捻火引爆。原始逐镜提示词/seed 未在本地项目包定位。"
    ]
  },
  "deliverables": [
    {
      "name": "11月13日_天台烈焰不回头_图2替换视频1_A机H3成片_1080p.mp4",
      "src": "https://github.com/aikingtai-ctrl/jintai-film-showcase/releases/download/media-v1/rooftop-fire-recast-8s--12436c05854f1d3a9c0a.mp4",
      "note": "交付版 终版 · 8.100s"
    }
  ]
});
