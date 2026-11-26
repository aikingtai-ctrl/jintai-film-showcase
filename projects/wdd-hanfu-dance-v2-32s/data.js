window.registerProject({
  "id": "wdd-hanfu-dance-v2-32s",
  "title": "武丹丹｜历代汉服变装舞｜V2 零漂移换脸",
  "subtitle": "2026-11-25 · V2 · 已验收本地终版",
  "logline": "原片连续六朝服装变换，仅换脸并保留原音乐；这条处理链没有文本生成视频提示词。",
  "date": "2026-11-25",
  "tags": [
    "V2",
    "已生成",
    "终版归档",
    "9:16",
    "FaceFusion / InsightFace 时序稳帧"
  ],
  "model": "FaceFusion / InsightFace 时序稳帧",
  "modelShort": "FaceFusion / InsightFace 时序稳帧",
  "poster": "media/img-16e57bf6076c390cd018.jpg",
  "film": {
    "src": "https://github.com/aikingtai-ctrl/jintai-film-showcase/releases/download/media-v1/wdd-hanfu-dance-v2-32s--9079aba913877a884df6.mp4",
    "duration": 31.573,
    "width": 720,
    "height": 1288,
    "fps": "30/1"
  },
  "meta": {
    "shots": 1,
    "generated": 0,
    "durationSec": 31.573,
    "resolution": "720×1288",
    "fps": "30/1",
    "aspect": "9:16",
    "style": "原片连续六朝服装变换，仅换脸并保留原音乐；这条处理链没有文本生成视频提示词。"
  },
  "synopsis": [
    "原片连续六朝服装变换，仅换脸并保留原音乐；这条处理链没有文本生成视频提示词。",
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
      "tool": "FaceFusion / InsightFace 时序稳帧",
      "note": "V2 终版；QA 图卡和本地来源账本已归档。"
    }
  ],
  "props": [
    {
      "id": "QA01",
      "name": "QA01_V2_全片18帧_六朝汉服_原片vs成片对比总表",
      "image": "media/img-657026f5e7cec25f8ae5.jpg",
      "desc": "V2 终版验收图卡；来源与哈希见本地账本。"
    },
    {
      "id": "QA02",
      "name": "QA02_V2_六朝特写五官_广袖遮挡与零漂移核验板",
      "image": "media/img-6c35d1f4fb499db76ceb.jpg",
      "desc": "V2 终版验收图卡；来源与哈希见本地账本。"
    },
    {
      "id": "QA03",
      "name": "QA03_V2_连续动作零漂移核验条",
      "image": "media/img-032c7cf2d50295351236.jpg",
      "desc": "V2 终版验收图卡；来源与哈希见本地账本。"
    }
  ],
  "shots": [
    {
      "id": "S01",
      "title": "六朝汉服连续变装 · V2 稳脸换脸",
      "start": 0,
      "duration": 31.573,
      "framing": "生成窗 / 终版时间段",
      "action": "六朝汉服连续变装 · V2 稳脸换脸",
      "prompt": null,
      "seed": null,
      "sourceMode": "face_swap_not_text_to_video",
      "video": null,
      "status": "终版成片内的时间段；独立片段未归档",
      "thumb": "media/img-85473d9fb13e80f2ad87.jpg",
      "refs": [
        {
          "label": "QA01_V2_全片18帧_六朝汉服_原片vs成片对比总表",
          "src": "media/img-657026f5e7cec25f8ae5.jpg"
        }
      ]
    }
  ],
  "generation": {
    "model": "FaceFusion / InsightFace 时序稳帧",
    "params": [
      {
        "k": "终版规格",
        "v": "720×1288 · 30/1 · 31.573s"
      },
      {
        "k": "版本",
        "v": "V2"
      }
    ],
    "notes": [
      "meta.generated 统计生产计划明确的生成窗/替换镜段；只在拥有独立成片文件时才给逐镜 video。",
      "原始逐镜文本提示词/seed 未归档；本页只记录已证实的成片时间段和处理方式。",
      "原片连续六朝服装变换，仅换脸并保留原音乐；这条处理链没有文本生成视频提示词。"
    ]
  },
  "deliverables": [
    {
      "name": "武丹丹_历代汉服变装舞_视频换脸_V2零漂移稳定版_720x1288_30fps.mp4",
      "src": "https://github.com/aikingtai-ctrl/jintai-film-showcase/releases/download/media-v1/wdd-hanfu-dance-v2-32s--9079aba913877a884df6.mp4",
      "note": "V2 终版 · 31.573s"
    }
  ]
});
