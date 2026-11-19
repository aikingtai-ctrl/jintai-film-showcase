window.registerProject({
  "id": "viggle-remake-h3-dual-showcase",
  "title": "Viggle Remake H3 视频重拍｜角色替换 × 环境重编双对照",
  "subtitle": "A 机 :8188 / :8189 双卡实测 · 凤梨吉祥物 swap (336.9s) & 涡轮移除 edit (314.0s) · 4 条独立样本全收录",
  "logline": "把云端 Viggle Remake 视频重拍与局部环境重编完整迁移至 A 机 8×H100 + MCP 工具链：同时交付「mode=swap 凤梨人偶全身替换」与「mode=edit 无痕清理背景风车涡轮」两套端到端实测成片与 1:1 逐帧并排对照板。",
  "date": "2026-11-09",
  "tags": [
    "H3",
    "Viggle-Remake",
    "MCP部署",
    "角色替换",
    "环境重编",
    "对照实验",
    "已生成"
  ],
  "model": "A 机 MiniMax H3 Viggle-Remake (Ports 8188 & 8189)",
  "modelShort": "Viggle-Remake + H3",
  "poster": "media/img-d9e49201b68de60d8ba2.jpg",
  "film": {
    "src": "https://github.com/aikingtai-ctrl/jintai-film-showcase/releases/download/media-v1/viggle-remake-h3-dual-showcase--6a7c4be9a19d7f29c8ab.mp4",
    "duration": 9.417,
    "width": 1664,
    "height": 480,
    "fps": "24"
  },
  "meta": {
    "shots": 4,
    "generated": 4,
    "durationSec": 9.417,
    "resolution": "1664×480",
    "fps": "24",
    "aspect": "16:9",
    "style": "运动骨架与摄影机震动零漂移继承，兼顾异形人偶物理体积替换与大规模风力涡轮背景擦除。"
  },
  "synopsis": [
    "针对重拍（swap）与重编（edit）两种迥异任务封装标准化 MCP 提交器，在 A 机 H100 :8188（耗时 336.86s，峰值显存仅增至 8.29 GiB 净驻留）与 :8189（耗时 314.04s，8.12 GiB）上双卡并发验证。",
    "四条成品视频（两张单结果 + 两张 1664×480 左右同屏对比）以及 4 张输入参考图、2 张自动抽帧 Contact Sheet 已全部接入，逐镜均可独立点播比对。"
  ],
  "concept": {
    "rules": [
      "双模态分离：swap 重塑前景人偶并对齐光照接触；edit 冻结人物本体并干净补全被抹除的大尺度风车。",
      "e2e_metrics 遥测可溯源：单卡 226 帧端到端生成约 314–337 秒，零 OOM。",
      "并排逐帧接触表验收：用 side-by-side mp4 与 contact sheet 共同防范时间滞后或局部鬼影。"
    ],
    "directorMethod": "同一 9.42s（226 帧 @ 24fps）高动态室外运动底片作为统一基线，双机同跑验证角色异形替换与场景去杂物的稳健性。"
  },
  "pipeline": [
    {
      "stage": "① 参考素材与运动源接入",
      "tool": "inputs/remake_*",
      "note": "凤梨人偶双角度参考 & 无风车参考图。"
    },
    {
      "stage": "② A 机双卡并发重拍",
      "tool": "A 机 :8188 (swap) / :8189 (edit)",
      "note": "elapsed_s = 336.86s / 314.04s，双双 226 帧成功落盘。"
    },
    {
      "stage": "③ 并排对比与接触表生成",
      "tool": "verify_viggle_remake + FFmpeg",
      "note": "产出 verification_report.json 与 2 张 contact_sheet.png。"
    }
  ],
  "characters": [
    {
      "id": "SWAP-R1",
      "name": "凤梨吉祥物参考一",
      "role": "mode=swap 角色锚点",
      "look": "亮黄色菠萝造型布偶服。",
      "image": "media/img-dabe99e1a17535f002b9.png",
      "uses": 2
    },
    {
      "id": "EDIT-R1",
      "name": "环境重编参考一",
      "role": "mode=edit 场景锚点",
      "look": "无风车洁净草坡天际线。",
      "image": "media/img-0d225c7b313fdeff6229.png",
      "uses": 2
    }
  ],
  "props": [
    {
      "id": "SHEET-SWAP",
      "name": "角色替换 Contact Sheet",
      "desc": "凤梨吉祥物逐帧接触检查板。",
      "image": "media/img-79ddd06160ff8873cde5.png"
    },
    {
      "id": "SHEET-EDIT",
      "name": "涡轮移除 Contact Sheet",
      "desc": "风车清除逐帧接触检查板。",
      "image": "media/img-c20b0f865114ec305759.png"
    }
  ],
  "shots": [
    {
      "id": "S01",
      "title": "mode=swap｜凤梨吉祥物全身重拍替换 (A 机 :8188)",
      "start": 0,
      "duration": 9.417,
      "framing": "16:9 / 并排对照 (832×480 & 1664×480)",
      "camera": "源视频运动流继承 (226 帧 · 24fps)",
      "action": "按实拍运动骨架构图重拍为凤梨吉祥物人偶，保留完整草地与步伐惯性。",
      "prompt": "Viggle Remake H3 MCP dual pipeline (S01) · 226 frames @ 24fps",
      "refs": [
        {
          "label": "接触核验表",
          "src": "media/img-79ddd06160ff8873cde5.png"
        }
      ],
      "video": "https://github.com/aikingtai-ctrl/jintai-film-showcase/releases/download/media-v1/viggle-remake-h3-dual-showcase--180f71077a6b028e5c95.mp4",
      "thumb": "assets/shots/S01.jpg",
      "model": "FeiHou MiniMax H3 Viggle-Remake MCP",
      "params": "832×480 @ 24fps · 9.417s",
      "status": "已生成"
    },
    {
      "id": "S02",
      "title": "mode=swap｜原片 vs 凤梨吉祥物替换 1:1 逐帧对照",
      "start": 0,
      "duration": 9.417,
      "framing": "16:9 / 并排对照 (832×480 & 1664×480)",
      "camera": "源视频运动流继承 (226 帧 · 24fps)",
      "action": "左右同框实时对比人体骨架、影调融合与脚部触地接触感。",
      "prompt": "Viggle Remake H3 MCP dual pipeline (S02) · 226 frames @ 24fps",
      "refs": [
        {
          "label": "接触核验表",
          "src": "media/img-79ddd06160ff8873cde5.png"
        }
      ],
      "video": "https://github.com/aikingtai-ctrl/jintai-film-showcase/releases/download/media-v1/viggle-remake-h3-dual-showcase--1f3ebdffcb877f335ee7.mp4",
      "thumb": "assets/shots/S02.jpg",
      "model": "FeiHou MiniMax H3 Viggle-Remake MCP",
      "params": "1664×480 @ 24fps · 9.417s",
      "status": "已生成"
    },
    {
      "id": "S03",
      "title": "mode=edit｜风车涡轮环境无痕擦除重编 (A 机 :8189)",
      "start": 0,
      "duration": 9.417,
      "framing": "16:9 / 并排对照 (832×480 & 1664×480)",
      "camera": "源视频运动流继承 (226 帧 · 24fps)",
      "action": "保留人物运动主体不变，时序清除背景多座大型白色风力发电机组并重绘洁净天际线。",
      "prompt": "Viggle Remake H3 MCP dual pipeline (S03) · 226 frames @ 24fps",
      "refs": [
        {
          "label": "接触核验表",
          "src": "media/img-c20b0f865114ec305759.png"
        }
      ],
      "video": "https://github.com/aikingtai-ctrl/jintai-film-showcase/releases/download/media-v1/viggle-remake-h3-dual-showcase--a97c505327b21b781c86.mp4",
      "thumb": "assets/shots/S03.jpg",
      "model": "FeiHou MiniMax H3 Viggle-Remake MCP",
      "params": "832×480 @ 24fps · 9.417s",
      "status": "已生成"
    },
    {
      "id": "S04",
      "title": "mode=edit｜原片 vs 涡轮移除环境重编 1:1 逐帧对照",
      "start": 0,
      "duration": 9.417,
      "framing": "16:9 / 并排对照 (832×480 & 1664×480)",
      "camera": "源视频运动流继承 (226 帧 · 24fps)",
      "action": "左右同步核验背景云层透视稳定性与人物边缘零涂抹。",
      "prompt": "Viggle Remake H3 MCP dual pipeline (S04) · 226 frames @ 24fps",
      "refs": [
        {
          "label": "接触核验表",
          "src": "media/img-c20b0f865114ec305759.png"
        }
      ],
      "video": "https://github.com/aikingtai-ctrl/jintai-film-showcase/releases/download/media-v1/viggle-remake-h3-dual-showcase--f2441998a5cdc6fe689e.mp4",
      "thumb": "assets/shots/S04.jpg",
      "model": "FeiHou MiniMax H3 Viggle-Remake MCP",
      "params": "1664×480 @ 24fps · 9.417s",
      "status": "已生成"
    }
  ],
  "generation": {
    "model": "A 机 FeiHou MiniMax H3 Viggle-Remake MCP",
    "params": [
      {
        "k": "Swap 遥测",
        "v": "Port 8188 · 336.86s · 226f · 4.19 MB"
      },
      {
        "k": "Edit 遥测",
        "v": "Port 8189 · 314.04s · 226f · 2.75 MB"
      },
      {
        "k": "像素精度",
        "v": "h264 High yuv420p · AAC 32kHz · 100% 解码健康"
      }
    ],
    "notes": [
      "遥测来源：samples/e2e_metrics.json 与 samples/verification_report.json。"
    ]
  },
  "deliverables": [
    {
      "name": "swap 1:1 逐帧并排对照 (1664×480).mp4",
      "src": "https://github.com/aikingtai-ctrl/jintai-film-showcase/releases/download/media-v1/viggle-remake-h3-dual-showcase--1f3ebdffcb877f335ee7.mp4",
      "note": "9.42s · 并排对照"
    },
    {
      "name": "swap 凤梨吉祥物 (832×480).mp4",
      "src": "https://github.com/aikingtai-ctrl/jintai-film-showcase/releases/download/media-v1/viggle-remake-h3-dual-showcase--180f71077a6b028e5c95.mp4",
      "note": "A 机 :8188 输出"
    },
    {
      "name": "edit 1:1 逐帧并排对照 (1664×480).mp4",
      "src": "https://github.com/aikingtai-ctrl/jintai-film-showcase/releases/download/media-v1/viggle-remake-h3-dual-showcase--f2441998a5cdc6fe689e.mp4",
      "note": "9.42s · 并排对照"
    },
    {
      "name": "edit 移除风车涡轮 (832×480).mp4",
      "src": "https://github.com/aikingtai-ctrl/jintai-film-showcase/releases/download/media-v1/viggle-remake-h3-dual-showcase--a97c505327b21b781c86.mp4",
      "note": "A 机 :8189 输出"
    }
  ]
});
