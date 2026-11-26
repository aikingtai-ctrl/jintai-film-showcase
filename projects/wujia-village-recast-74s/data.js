window.registerProject({
  "id": "wujia-village-recast-74s",
  "title": "吴家村神人篇｜三角色换角与 LC 音色｜74秒",
  "subtitle": "2026-11-13 · V2 · 已验收本地终版",
  "logline": "项目卡记载 10 段替换镜头；逐镜时间码、独立生成片与原始提示词未在本地交付包定位，因此仅建全片条目。",
  "date": "2026-11-13",
  "tags": [
    "V2",
    "已生成",
    "终版归档",
    "16:9",
    "MiniMax H3"
  ],
  "model": "MiniMax H3 + SAM 3.1 + FaceFusion + LC",
  "modelShort": "MiniMax H3",
  "poster": "media/img-2f806c47d099e87c62ef.jpg",
  "film": {
    "src": "https://github.com/aikingtai-ctrl/jintai-film-showcase/releases/download/media-v1/wujia-village-recast-74s--49f4dbba92e09f1f59ac.mp4",
    "duration": 73.816,
    "width": 1926,
    "height": 1080,
    "fps": "30/1"
  },
  "meta": {
    "shots": 1,
    "generated": 0,
    "durationSec": 73.816,
    "resolution": "1926×1080",
    "fps": "30/1",
    "aspect": "16:9",
    "style": "项目卡记载 10 段替换镜头；逐镜时间码、独立生成片与原始提示词未在本地交付包定位，因此仅建全片条目。"
  },
  "synopsis": [
    "项目卡记载 10 段替换镜头；逐镜时间码、独立生成片与原始提示词未在本地交付包定位，因此仅建全片条目。",
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
      "tool": "MiniMax H3 + SAM 3.1 + FaceFusion + LC",
      "note": "V2 终版；QA 图卡和本地来源账本已归档。"
    }
  ],
  "props": [
    {
      "id": "QA01",
      "name": "吴家村神人篇_07_全片十段替换镜头逐镜抽检总表",
      "image": "media/img-4d1a3a72cabdb3999304.jpg",
      "desc": "V2 终版验收图卡；来源与哈希见本地账本。"
    },
    {
      "id": "QA02",
      "name": "吴家村神人篇_08_原片图1图2图3_vs_成片图4图5_名场面1比1对比表",
      "image": "media/img-80dd10eeb0ab9a92c272.jpg",
      "desc": "V2 终版验收图卡；来源与哈希见本地账本。"
    },
    {
      "id": "QA03",
      "name": "吴家村神人篇_00_三角色造型设计定妆总卡",
      "image": "media/img-3a1c602e510e36d73638.png",
      "desc": "V2 终版验收图卡；来源与哈希见本地账本。"
    }
  ],
  "shots": [
    {
      "id": "FILM",
      "title": "全片交付；项目卡记载 10 段换角，逐镜边界未归档",
      "start": 0,
      "duration": 73.8,
      "framing": "生成窗 / 终版时间段",
      "action": "全片交付；项目卡记载 10 段换角，逐镜边界未归档",
      "prompt": null,
      "seed": null,
      "sourceMode": "assembled_film",
      "video": null,
      "status": "终版成片内的时间段；独立片段未归档",
      "thumb": "media/img-5f61bcaac74b1aed4dc6.jpg",
      "refs": [
        {
          "label": "吴家村神人篇_07_全片十段替换镜头逐镜抽检总表",
          "src": "media/img-4d1a3a72cabdb3999304.jpg"
        }
      ]
    }
  ],
  "generation": {
    "model": "MiniMax H3 + SAM 3.1 + FaceFusion + LC",
    "params": [
      {
        "k": "终版规格",
        "v": "1926×1080 · 30/1 · 73.816s"
      },
      {
        "k": "版本",
        "v": "V2"
      }
    ],
    "notes": [
      "meta.generated 统计生产计划明确的生成窗/替换镜段；只在拥有独立成片文件时才给逐镜 video。",
      "原始逐镜文本提示词/seed 未归档；本页只记录已证实的成片时间段和处理方式。",
      "项目卡记载 10 段替换镜头；逐镜时间码、独立生成片与原始提示词未在本地交付包定位，因此仅建全片条目。"
    ]
  },
  "deliverables": [
    {
      "name": "吴家村神人篇_图4替换图1图2_LC音色_图5替换图3_A机H3成片_1080p.mp4",
      "src": "https://github.com/aikingtai-ctrl/jintai-film-showcase/releases/download/media-v1/wujia-village-recast-74s--49f4dbba92e09f1f59ac.mp4",
      "note": "V2 终版 · 73.816s"
    }
  ]
});
