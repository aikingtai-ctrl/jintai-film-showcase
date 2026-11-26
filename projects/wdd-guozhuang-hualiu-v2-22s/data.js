window.registerProject({
  "id": "wdd-guozhuang-hualiu-v2-22s",
  "title": "武丹丹｜古装华流｜V2 稳脸换脸换声",
  "subtitle": "2026-11-25 · V2 · 已验收本地终版",
  "logline": "22.10 秒古装华流原片，保留古装、发冠、字幕和原台词语气，仅换脸及 WuDandan 音色。V2 修复 V1 漏换与闪回；20 镜精确边界/原始脚本未归档。",
  "date": "2026-11-25",
  "tags": [
    "V2",
    "已生成",
    "终版归档",
    "9:16",
    "FaceFusion 3.9.2"
  ],
  "model": "FaceFusion 3.9.2 + Seed-VC Singing",
  "modelShort": "FaceFusion 3.9.2",
  "poster": "media/img-493102c9ad53b2ea5663.jpg",
  "film": {
    "src": "https://github.com/aikingtai-ctrl/jintai-film-showcase/releases/download/media-v1/wdd-guozhuang-hualiu-v2-22s--be3e182cec99228764a7.mp4",
    "duration": 22.1,
    "width": 722,
    "height": 1286,
    "fps": "30/1"
  },
  "meta": {
    "shots": 1,
    "generated": 0,
    "durationSec": 22.1,
    "resolution": "722×1286",
    "fps": "30/1",
    "aspect": "9:16",
    "style": "22.10 秒古装华流原片，保留古装、发冠、字幕和原台词语气，仅换脸及 WuDandan 音色。V2 修复 V1 漏换与闪回；20 镜精确边界/原始脚本未归档。"
  },
  "synopsis": [
    "22.10 秒古装华流原片，保留古装、发冠、字幕和原台词语气，仅换脸及 WuDandan 音色。V2 修复 V1 漏换与闪回；20 镜精确边界/原始脚本未归档。",
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
      "tool": "FaceFusion 3.9.2 + Seed-VC Singing",
      "note": "V2 终版；QA 图卡和本地来源账本已归档。"
    }
  ],
  "props": [
    {
      "id": "QA01",
      "name": "qa_v2_compare",
      "image": "media/img-d1bfae4e11da4a0e581e.jpg",
      "desc": "V2 终版验收图卡；来源与哈希见本地账本。"
    }
  ],
  "shots": [
    {
      "id": "S01",
      "title": "古装华流 20 个原切镜 · 武丹丹 V2 稳脸换脸换声",
      "start": 0,
      "duration": 22.1,
      "framing": "生成窗 / 终版时间段",
      "action": "古装华流 20 个原切镜 · 武丹丹 V2 稳脸换脸换声",
      "prompt": null,
      "seed": null,
      "sourceMode": "face_swap_not_text_to_video",
      "video": null,
      "status": "终版成片内的时间段；独立片段未归档",
      "thumb": "media/img-3da02ae2b1275227864b.jpg",
      "refs": [
        {
          "label": "qa_v2_compare",
          "src": "media/img-d1bfae4e11da4a0e581e.jpg"
        }
      ]
    }
  ],
  "generation": {
    "model": "FaceFusion 3.9.2 + Seed-VC Singing",
    "params": [
      {
        "k": "终版规格",
        "v": "722×1286 · 30/1 · 22.100s"
      },
      {
        "k": "版本",
        "v": "V2"
      }
    ],
    "notes": [
      "meta.generated 统计生产计划明确的生成窗/替换镜段；只在拥有独立成片文件时才给逐镜 video。",
      "原始逐镜文本提示词/seed 未归档；本页只记录已证实的成片时间段和处理方式。",
      "22.10 秒古装华流原片，保留古装、发冠、字幕和原台词语气，仅换脸及 WuDandan 音色。V2 修复 V1 漏换与闪回；20 镜精确边界/原始脚本未归档。"
    ]
  },
  "deliverables": [
    {
      "name": "武丹丹_古装华流换脸换声_V2稳脸精修版.mp4",
      "src": "https://github.com/aikingtai-ctrl/jintai-film-showcase/releases/download/media-v1/wdd-guozhuang-hualiu-v2-22s--be3e182cec99228764a7.mp4",
      "note": "V2 终版 · 22.100s"
    }
  ]
});
