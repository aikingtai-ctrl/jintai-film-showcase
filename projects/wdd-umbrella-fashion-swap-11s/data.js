window.registerProject({
  "id": "wdd-umbrella-fashion-swap-11s",
  "title": "武丹丹｜公交站台七套时装雨伞变装｜只换脸",
  "subtitle": "2026-11-25 · 交付版 · 已验收本地终版",
  "logline": "10.833 秒原视频，325 帧；仅替换中间主角面部，7 套时装、配角、原英文说唱音轨原样保留。报告记录 ffmpeg xerror=0 与配角零误换；逐镜边界/原始脚本未归档。",
  "date": "2026-11-25",
  "tags": [
    "交付版",
    "已生成",
    "终版归档",
    "9:16",
    "FaceFusion 3.9.2"
  ],
  "model": "FaceFusion 3.9.2",
  "modelShort": "FaceFusion 3.9.2",
  "poster": "media/img-1ae2e8b3b25bc59864a7.jpg",
  "film": {
    "src": "https://github.com/aikingtai-ctrl/jintai-film-showcase/releases/download/media-v1/wdd-umbrella-fashion-swap-11s--c5461232d95d3b5e923c.mp4",
    "duration": 10.837333,
    "width": 724,
    "height": 1266,
    "fps": "30/1"
  },
  "meta": {
    "shots": 1,
    "generated": 0,
    "durationSec": 10.837333,
    "resolution": "724×1266",
    "fps": "30/1",
    "aspect": "9:16",
    "style": "10.833 秒原视频，325 帧；仅替换中间主角面部，7 套时装、配角、原英文说唱音轨原样保留。报告记录 ffmpeg xerror=0 与配角零误换；逐镜边界/原始脚本未归档。"
  },
  "synopsis": [
    "10.833 秒原视频，325 帧；仅替换中间主角面部，7 套时装、配角、原英文说唱音轨原样保留。报告记录 ffmpeg xerror=0 与配角零误换；逐镜边界/原始脚本未归档。",
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
      "tool": "FaceFusion 3.9.2",
      "note": "交付版 终版；QA 图卡和本地来源账本已归档。"
    }
  ],
  "props": [
    {
      "id": "QA01",
      "name": "01_原片vs成片_全片7套造型20拍1比1对比质检板",
      "image": "media/img-4d8e5f16cd54b8eace95.jpg",
      "desc": "交付版 终版验收图卡；来源与哈希见本地账本。"
    },
    {
      "id": "QA02",
      "name": "02_面部特写放大_相似度与墨镜遮挡专项核验板",
      "image": "media/img-6654adaad0a7cd886e91.jpg",
      "desc": "交付版 终版验收图卡；来源与哈希见本地账本。"
    }
  ],
  "shots": [
    {
      "id": "S01",
      "title": "公交站台 7 套现代时装雨伞变装 · 仅换脸",
      "start": 0,
      "duration": 10.833333,
      "framing": "生成窗 / 终版时间段",
      "action": "公交站台 7 套现代时装雨伞变装 · 仅换脸",
      "prompt": null,
      "seed": null,
      "sourceMode": "face_swap_not_text_to_video",
      "video": null,
      "status": "终版成片内的时间段；独立片段未归档",
      "thumb": "media/img-ce446b6b463b731a10a3.jpg",
      "refs": [
        {
          "label": "01_原片vs成片_全片7套造型20拍1比1对比质检板",
          "src": "media/img-4d8e5f16cd54b8eace95.jpg"
        }
      ]
    }
  ],
  "generation": {
    "model": "FaceFusion 3.9.2",
    "params": [
      {
        "k": "终版规格",
        "v": "724×1266 · 30/1 · 10.837s"
      },
      {
        "k": "版本",
        "v": "交付版"
      }
    ],
    "notes": [
      "meta.generated 统计生产计划明确的生成窗/替换镜段；只在拥有独立成片文件时才给逐镜 video。",
      "原始逐镜文本提示词/seed 未归档；本页只记录已证实的成片时间段和处理方式。",
      "10.833 秒原视频，325 帧；仅替换中间主角面部，7 套时装、配角、原英文说唱音轨原样保留。报告记录 ffmpeg xerror=0 与配角零误换；逐镜边界/原始脚本未归档。"
    ]
  },
  "deliverables": [
    {
      "name": "屏幕录制2026-11-25_104637_武丹丹换脸_成片.mp4",
      "src": "https://github.com/aikingtai-ctrl/jintai-film-showcase/releases/download/media-v1/wdd-umbrella-fashion-swap-11s--c5461232d95d3b5e923c.mp4",
      "note": "交付版 终版 · 10.837s"
    }
  ]
});
