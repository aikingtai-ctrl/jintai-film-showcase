window.registerProject({
  "id": "pixel-quest-arcade-30s",
  "title": "PIXEL QUEST · 像素冒险｜金泰AI 五幕街机动画｜30秒",
  "subtitle": "384×216 原生点阵 5× 整数放大 · 150 BPM 帧级音画同源 · 06(9.34)/07(9.51) 双签 PASS",
  "logline": "致敬黄金年代 16-Bit 横版动作街机的金泰 AI 创意动画短片：主角小金从晨光草原一路闯入八卡智算机房，召唤浮游算力阵列击败巨型混乱 BUG 魔王，开启传奇宝箱点亮星夜山巅『让想象一键通关』。",
  "date": "2026-11-04",
  "tags": [
    "MG动态设计",
    "像素动画",
    "金泰AI",
    "宣传片",
    "Chiptune",
    "双盲审计PASS",
    "30秒",
    "16:9",
    "已生成"
  ],
  "model": "确定性 16-Bit 像素渲染引擎 (cue.js 帧级同源) + Python FM/PSG 芯片音乐合成器",
  "modelShort": "Pixel Engine",
  "poster": "media/img-f88c3930bd43c9ecb0ea.png",
  "film": {
    "src": "https://github.com/aikingtai-ctrl/jintai-film-showcase/releases/download/media-v1/pixel-quest-arcade-30s--3cc6672812d08ca2cfbe.mp4",
    "duration": 30,
    "width": 1920,
    "height": 1080,
    "fps": "30"
  },
  "meta": {
    "shots": 5,
    "generated": 5,
    "durationSec": 30,
    "resolution": "1920×1080",
    "fps": "30",
    "aspect": "16:9",
    "style": "严禁亚像素模糊与线性插值缩放：原生 384×216 逐像素绘制后 5× 整数倍放大至 1920×1080，配 Fusion Pixel 正版开源点阵中文字体。"
  },
  "props": [
    {
      "id": "BOARD-A",
      "name": "四联标准检视板 A · 全五幕关键帧",
      "desc": "06 视觉审计官 9.34 分 / 07 交叉审计官 9.51 分双签 PASS。",
      "image": "media/img-8187e3cb921512668f8c.png"
    },
    {
      "id": "BOARD-B",
      "name": "四联标准检视板 B · BOSS 战爆发细节",
      "desc": "核验像素边缘零抗锯齿污染与顿帧打击感。",
      "image": "media/img-4f7121798446aaa74b08.png"
    },
    {
      "id": "BOARD-D",
      "name": "声画帧级对齐频谱检视板 D",
      "desc": "cue.js 单一事实源驱动跳跃、金币、激光、爆炸音效零帧偏差。",
      "image": "media/img-4f4f5a55cdd596e40233.png"
    }
  ],
  "shots": [
    {
      "id": "S01",
      "title": "Act I · 晨光草原起跑与灵感金币（00:00–00:06.4）",
      "start": 0,
      "duration": 6.4,
      "framing": "16-Bit 横版街机像素卷轴 (384×216 → 5× Nearest 1920×1080)",
      "camera": "整数像素对齐横向跟移 + 击中顿帧 (Hit-stop) + 屏幕震动",
      "action": "384×216 原生低分辨率画布 5× 整数放大至 1920×1080：小金佩戴金泰徽章在视差卷轴草原起跑，顶开问号砖拾取灵感芯片并踩扁两只废片史莱姆。",
      "prompt": "[Deterministic 16-Bit Pixel Art Engine · 150 BPM cue.js locked] 384×216 原生低分辨率画布 5× 整数放大至 1920×1080：小金佩戴金泰徽章在视差卷轴草原起跑，顶开问号砖拾取灵感芯片并踩扁两只废片史莱姆。 Strict nearest-neighbor integer scaling (imageSmoothingEnabled=false), Fusion Pixel 12px/8px bitmap CJK typography, YM2612 FM + PSG 8-bit chiptune audio sync.",
      "refs": [
        {
          "label": "四联检视板 A",
          "src": "media/img-8187e3cb921512668f8c.png"
        },
        {
          "label": "高潮检视板 B",
          "src": "media/img-4f7121798446aaa74b08.png"
        }
      ],
      "video": "https://github.com/aikingtai-ctrl/jintai-film-showcase/releases/download/media-v1/pixel-quest-arcade-30s--3cc6672812d08ca2cfbe.mp4",
      "alts": [
        {
          "label": "10秒高密度导演版",
          "src": "https://github.com/aikingtai-ctrl/jintai-film-showcase/releases/download/media-v1/pixel-quest-arcade-30s--e308e662e855b8b69cd5.mp4"
        }
      ],
      "thumb": "assets/shots/t_2.80.png",
      "model": "金泰 Pixel-Art Canvas2D 确定性逐帧引擎 + Python Chiptune 合成器",
      "params": "384×216×5 = 1920×1080 · 30fps · 150 BPM",
      "status": "已生成"
    },
    {
      "id": "S02",
      "title": "Act II · 算力机房：启动八卡无人机（00:06.4–00:13.6）",
      "start": 6.4,
      "duration": 7.2,
      "framing": "16-Bit 横版街机像素卷轴 (384×216 → 5× Nearest 1920×1080)",
      "camera": "整数像素对齐横向跟移 + 击中顿帧 (Hit-stop) + 屏幕震动",
      "action": "钻入传送管切入赛博算力机房，RPG 对话框逐字蹦出『前方混乱BUG王！启动八卡算力！』，8 台 H100 浮游无人机编队激光齐射轰碎乱码方块。",
      "prompt": "[Deterministic 16-Bit Pixel Art Engine · 150 BPM cue.js locked] 钻入传送管切入赛博算力机房，RPG 对话框逐字蹦出『前方混乱BUG王！启动八卡算力！』，8 台 H100 浮游无人机编队激光齐射轰碎乱码方块。 Strict nearest-neighbor integer scaling (imageSmoothingEnabled=false), Fusion Pixel 12px/8px bitmap CJK typography, YM2612 FM + PSG 8-bit chiptune audio sync.",
      "refs": [
        {
          "label": "四联检视板 A",
          "src": "media/img-8187e3cb921512668f8c.png"
        },
        {
          "label": "高潮检视板 B",
          "src": "media/img-4f7121798446aaa74b08.png"
        }
      ],
      "video": "https://github.com/aikingtai-ctrl/jintai-film-showcase/releases/download/media-v1/pixel-quest-arcade-30s--3cc6672812d08ca2cfbe.mp4",
      "alts": [],
      "thumb": "assets/shots/t_8.50.png",
      "model": "金泰 Pixel-Art Canvas2D 确定性逐帧引擎 + Python Chiptune 合成器",
      "params": "384×216×5 = 1920×1080 · 30fps · 150 BPM",
      "status": "已生成"
    },
    {
      "id": "S03",
      "title": "Act III · 巨型混乱 BUG 魔王决战（00:13.6–00:21.6）",
      "start": 13.6,
      "duration": 8,
      "framing": "16-Bit 横版街机像素卷轴 (384×216 → 5× Nearest 1920×1080)",
      "camera": "整数像素对齐横向跟移 + 击中顿帧 (Hit-stop) + 屏幕震动",
      "action": "WARNING 警报拉响，巨型红紫故障 BUG 魔王砸地登场；小金借助弹簧跳板腾空跃起，携八卡金光剑气一击斩爆魔王（6 连环像素爆炸帧 + 屏幕震动）。",
      "prompt": "[Deterministic 16-Bit Pixel Art Engine · 150 BPM cue.js locked] WARNING 警报拉响，巨型红紫故障 BUG 魔王砸地登场；小金借助弹簧跳板腾空跃起，携八卡金光剑气一击斩爆魔王（6 连环像素爆炸帧 + 屏幕震动）。 Strict nearest-neighbor integer scaling (imageSmoothingEnabled=false), Fusion Pixel 12px/8px bitmap CJK typography, YM2612 FM + PSG 8-bit chiptune audio sync.",
      "refs": [
        {
          "label": "四联检视板 A",
          "src": "media/img-8187e3cb921512668f8c.png"
        },
        {
          "label": "高潮检视板 B",
          "src": "media/img-4f7121798446aaa74b08.png"
        }
      ],
      "video": "https://github.com/aikingtai-ctrl/jintai-film-showcase/releases/download/media-v1/pixel-quest-arcade-30s--3cc6672812d08ca2cfbe.mp4",
      "alts": [],
      "thumb": "assets/shots/t_17.70.png",
      "model": "金泰 Pixel-Art Canvas2D 确定性逐帧引擎 + Python Chiptune 合成器",
      "params": "384×216×5 = 1920×1080 · 30fps · 150 BPM",
      "status": "已生成"
    },
    {
      "id": "S04",
      "title": "Act IV · 黄金宝箱开出水晶场记板（00:21.6–00:24.8）",
      "start": 21.6,
      "duration": 3.2,
      "framing": "16-Bit 横版街机像素卷轴 (384×216 → 5× Nearest 1920×1080)",
      "camera": "整数像素对齐横向跟移 + 击中顿帧 (Hit-stop) + 屏幕震动",
      "action": "击败魔王掉落传奇宝箱，全屏像素斜切特写 Cut-in，开启宝箱升起闪耀的『金泰 AI 水晶场记板』。",
      "prompt": "[Deterministic 16-Bit Pixel Art Engine · 150 BPM cue.js locked] 击败魔王掉落传奇宝箱，全屏像素斜切特写 Cut-in，开启宝箱升起闪耀的『金泰 AI 水晶场记板』。 Strict nearest-neighbor integer scaling (imageSmoothingEnabled=false), Fusion Pixel 12px/8px bitmap CJK typography, YM2612 FM + PSG 8-bit chiptune audio sync.",
      "refs": [
        {
          "label": "四联检视板 A",
          "src": "media/img-8187e3cb921512668f8c.png"
        },
        {
          "label": "高潮检视板 B",
          "src": "media/img-4f7121798446aaa74b08.png"
        }
      ],
      "video": "https://github.com/aikingtai-ctrl/jintai-film-showcase/releases/download/media-v1/pixel-quest-arcade-30s--3cc6672812d08ca2cfbe.mp4",
      "alts": [],
      "thumb": "assets/shots/t_22.80.png",
      "model": "金泰 Pixel-Art Canvas2D 确定性逐帧引擎 + Python Chiptune 合成器",
      "params": "384×216×5 = 1920×1080 · 30fps · 150 BPM",
      "status": "已生成"
    },
    {
      "id": "S05",
      "title": "Act V · 0.1秒静音蓄力与星夜山巅品牌终章（00:24.8–00:30.0）",
      "start": 24.8,
      "duration": 5.2,
      "framing": "16-Bit 横版街机像素卷轴 (384×216 → 5× Nearest 1920×1080)",
      "camera": "整数像素对齐横向跟移 + 击中顿帧 (Hit-stop) + 屏幕震动",
      "action": "第 754–756 帧执行 0.1 秒战前静音蓄力，重拍砸下金泰 K 字像素徽章与『金泰 AI · 让想象一键通关』星夜山巅落版。",
      "prompt": "[Deterministic 16-Bit Pixel Art Engine · 150 BPM cue.js locked] 第 754–756 帧执行 0.1 秒战前静音蓄力，重拍砸下金泰 K 字像素徽章与『金泰 AI · 让想象一键通关』星夜山巅落版。 Strict nearest-neighbor integer scaling (imageSmoothingEnabled=false), Fusion Pixel 12px/8px bitmap CJK typography, YM2612 FM + PSG 8-bit chiptune audio sync.",
      "refs": [
        {
          "label": "四联检视板 A",
          "src": "media/img-8187e3cb921512668f8c.png"
        },
        {
          "label": "高潮检视板 B",
          "src": "media/img-4f7121798446aaa74b08.png"
        }
      ],
      "video": "https://github.com/aikingtai-ctrl/jintai-film-showcase/releases/download/media-v1/pixel-quest-arcade-30s--3cc6672812d08ca2cfbe.mp4",
      "alts": [],
      "thumb": "assets/shots/t_28.50.png",
      "model": "金泰 Pixel-Art Canvas2D 确定性逐帧引擎 + Python Chiptune 合成器",
      "params": "384×216×5 = 1920×1080 · 30fps · 150 BPM",
      "status": "已生成"
    }
  ],
  "deliverables": [
    {
      "name": "金泰AI_像素冒险_PIXEL_QUEST_30秒_1080p30.mp4",
      "src": "https://github.com/aikingtai-ctrl/jintai-film-showcase/releases/download/media-v1/pixel-quest-arcade-30s--3cc6672812d08ca2cfbe.mp4",
      "note": "30.00s 正式完整版 · 21.67 MB"
    },
    {
      "name": "金泰AI_像素冒险_PIXEL_QUEST_10秒_1080p30.mp4",
      "src": "https://github.com/aikingtai-ctrl/jintai-film-showcase/releases/download/media-v1/pixel-quest-arcade-30s--e308e662e855b8b69cd5.mp4",
      "note": "10.00s 高能浓缩导演版 · 10.06 MB"
    }
  ]
});
