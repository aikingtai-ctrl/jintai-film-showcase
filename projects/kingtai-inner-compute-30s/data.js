window.registerProject({
  "id": "kingtai-inner-compute-30s",
  "title": "金泰 AI 品牌宣传片｜源自内心 · 源自算力｜30秒",
  "subtitle": "代码级 60fps 无损逐帧渲染 × 0–25ms 声画同步 × 06 (9.28) × 07 (9.60) 双盲放行",
  "logline": "摒弃冷紫蓝科技陈词滥调，以暖宣纸白 #FAF5EB、电影暗房黑 #0B0907 与赤金朱砂红重塑金泰品牌美学：1,800 帧无损 PNG 逐帧抓取搭配 Python 纯 CPU 合成 120 BPM 配乐与 33 个精准帧同步音效点，斩获双盲审计 9.28 + 9.60 分。",
  "date": "2026-11-03",
  "tags": [
    "品牌宣传片",
    "动态图形",
    "60fps",
    "金泰AI",
    "双盲审计PASS",
    "16:9",
    "已生成"
  ],
  "model": "HTML5 Canvas 60fps State Machine + NumPy/SciPy 120 BPM Procedural Audio",
  "modelShort": "HTML5 Canvas 60fps",
  "poster": "media/img-84f31b46229bde5840e3.jpg",
  "film": {
    "src": "https://github.com/aikingtai-ctrl/jintai-film-showcase/releases/download/media-v1/kingtai-inner-compute-30s--134d2c7e80628dbd2201.mp4",
    "duration": 30,
    "width": 1920,
    "height": 1080,
    "fps": "60"
  },
  "meta": {
    "shots": 3,
    "generated": 1,
    "durationSec": 30,
    "resolution": "1920×1080",
    "fps": "60",
    "aspect": "16:9",
    "style": "金泰专属东方金墨平面动效系统（暖宣纸白/暗房黑/赤金/朱砂红），0% CUDA 本地占用。"
  },
  "synopsis": [
    "v1 初审因 10 项细节（Logo 撞车、打字脉冲漂移 >80ms、小字及合规角标隐患等）遭 06 (7.60) 与 07 双拒，v2 逐项重构后将 33 个音画事件同步误差锁死在 0–25ms、最短字幕停留拉足 21 帧 (0.35s)。",
    "技术成片严格达到 High@L5.0 60fps（1,800 帧、-14.2 LUFS、True Peak -2.2 dBFS、0 bytes 解码错误），仅保留唯一终版 30s 成片（严禁列入 v1_REJECT 废弃稿）。"
  ],
  "concept": {
    "rules": [
      "东方暖金去同质化色板：用宣纸白与暗房黑彻底区分于冷紫蓝 SaaS 模板片。",
      "33 点位 0–25ms 音画咬合：所有文字打字与卡片弹入均对齐 120 BPM 毫秒表。",
      "零幻觉与广告合规：严禁未注册 ® 标并标注流程演示说明。"
    ],
    "directorMethod": "代码化 SVG/Canvas 状态机驱动确定性逐帧绘图，搭配音频检视 json 与四段 1:1 放大接触表双向验片。"
  },
  "pipeline": [
    {
      "stage": "① 金泰视觉色板与 Slogan 定型",
      "tool": "index.html v2 状态机",
      "note": "Part I 内心 → Part II 算力 → Part III 同频三段起承转合。"
    },
    {
      "stage": "② 33 点位纯 CPU 节拍配乐",
      "tool": "score.py + audio_verify.json",
      "note": "同步误差 0–25ms，-14.2 LUFS。"
    },
    {
      "stage": "③ 1,800 帧 1080p60 无损渲染",
      "tool": "render.js + FFmpeg crf14",
      "note": "Zero GPU 占用的高精 MG 输出。"
    },
    {
      "stage": "④ 双盲审计逆转放行",
      "tool": "06 (9.28 PASS) × 07 (9.60 PASS)",
      "note": "v1 10 项硬伤 100% 清零。"
    }
  ],
  "props": [
    {
      "id": "QA-BOARD",
      "name": "v2 影视四联标准检视板 (9.28 PASS)",
      "desc": "终审全片四联板，含色卡与全指标。",
      "image": "media/img-81ed479d523a42751209.jpg"
    },
    {
      "id": "QA-Z1",
      "name": "局部放大 1 · 暗房高光检视",
      "desc": "4.8s–5.9s 暗调过渡可读性 1:1 放大核验。",
      "image": "media/img-1fdba5b2ae23a128447b.jpg"
    },
    {
      "id": "QA-Z2",
      "name": "局部放大 2 · 四步卡片停顿检视",
      "desc": "7.8s–10.1s 卡片排版边界核验。",
      "image": "media/img-b217f63f42e56cb5628d.jpg"
    },
    {
      "id": "QA-Z4",
      "name": "局部放大 4 · 片尾落版核验",
      "desc": "27.4s–30.0s 金标与核心 Slogan 收尾核验。",
      "image": "media/img-5599d02aa08ee032636f.jpg"
    }
  ],
  "shots": [
    {
      "id": "S01",
      "title": "Part I · 源自内心（宣纸白 × 创作者心象起笔）",
      "start": 0,
      "duration": 13.4,
      "framing": "16:9 高对比代码级动态图形 (1920×1080 @ 60fps)",
      "camera": "60fps Headless Edge 逐帧无损 PNG 确定性状态机",
      "action": "由暖宣纸白 #FAF5EB 与朱砂金脉启幕，打字节奏严格落拍 120 BPM 并与 33 个声音脉冲零漂移同步。",
      "prompt": "HTML5/SVG/Canvas deterministic 60fps MG film · Part I · 源自内心（宣纸白 × 创作者心象起笔） · warm xuan-paper white & cinnabar gold palette.",
      "refs": [
        {
          "label": "v2 影视四联检视板 (9.28 PASS)",
          "src": "media/img-81ed479d523a42751209.jpg"
        }
      ],
      "video": "https://github.com/aikingtai-ctrl/jintai-film-showcase/releases/download/media-v1/kingtai-inner-compute-30s--134d2c7e80628dbd2201.mp4",
      "thumb": "media/img-a6ad0ab227ebb7e9fe0a.jpg",
      "model": "HTML5/SVG/Canvas Deterministic 60fps + SciPy 120 BPM",
      "params": "1920×1080 @ 60fps · 13.4s",
      "status": "已合入成片 (9.28/9.60 PASS)"
    },
    {
      "id": "S02",
      "title": "Part II · 源自算力（暗房黑 × 8 卡脉冲跃迁）",
      "start": 13.4,
      "duration": 9.8,
      "framing": "16:9 高对比代码级动态图形 (1920×1080 @ 60fps)",
      "camera": "60fps Headless Edge 逐帧无损 PNG 确定性状态机",
      "action": "视觉转入电影暗房黑 #0B0907 与赤金 GPU 算力矩阵，四步创作卡片卡紧正拍且每张停留均 ≥ 21 帧保底可读。",
      "prompt": "HTML5/SVG/Canvas deterministic 60fps MG film · Part II · 源自算力（暗房黑 × 8 卡脉冲跃迁） · warm xuan-paper white & cinnabar gold palette.",
      "refs": [
        {
          "label": "v2 影视四联检视板 (9.28 PASS)",
          "src": "media/img-81ed479d523a42751209.jpg"
        }
      ],
      "video": "",
      "thumb": "media/img-e7feeeac8d4078833cf5.jpg",
      "model": "HTML5/SVG/Canvas Deterministic 60fps + SciPy 120 BPM",
      "params": "1920×1080 @ 60fps · 9.8s",
      "status": "已合入成片 (9.28/9.60 PASS)"
    },
    {
      "id": "S03",
      "title": "Part III · 内心 × 算力同频收束 · 金泰落版",
      "start": 23.2,
      "duration": 6.8,
      "framing": "16:9 高对比代码级动态图形 (1920×1080 @ 60fps)",
      "camera": "60fps Headless Edge 逐帧无损 PNG 确定性状态机",
      "action": "黄金转场横扫全屏后凝结金色透明通道 Logo 与「源自内心 · 源自算力」大字落版，零未注册商标违规符。",
      "prompt": "HTML5/SVG/Canvas deterministic 60fps MG film · Part III · 内心 × 算力同频收束 · 金泰落版 · warm xuan-paper white & cinnabar gold palette.",
      "refs": [
        {
          "label": "v2 影视四联检视板 (9.28 PASS)",
          "src": "media/img-81ed479d523a42751209.jpg"
        }
      ],
      "video": "",
      "thumb": "media/img-263a21b17367d7ad5684.jpg",
      "model": "HTML5/SVG/Canvas Deterministic 60fps + SciPy 120 BPM",
      "params": "1920×1080 @ 60fps · 6.8s",
      "status": "已合入成片 (9.28/9.60 PASS)"
    }
  ],
  "generation": {
    "model": "HTML5 Canvas 60fps State Machine",
    "params": [
      {
        "k": "帧率帧数",
        "v": "1920×1080 @ 60fps · 1,800 帧 · High@L5.0"
      },
      {
        "k": "双盲分数",
        "v": "06 视觉 9.28 / 10.0 · 07 交叉 9.60 / 10.0 PASS"
      },
      {
        "k": "响度合规",
        "v": "-14.2 LUFS · TP -2.2 dBFS · decode_err=0"
      }
    ],
    "notes": [
      "已遵从排除规范剔除 v1_REJECT 版本，仅展示终审放行成片。"
    ]
  },
  "deliverables": [
    {
      "name": "金泰AI_源自内心源自算力_30秒_1080p60.mp4",
      "src": "https://github.com/aikingtai-ctrl/jintai-film-showcase/releases/download/media-v1/kingtai-inner-compute-30s--134d2c7e80628dbd2201.mp4",
      "note": "30.0s · 1080p60 · 17.31 MB"
    },
    {
      "name": "review/board_v2.jpg",
      "src": "media/img-81ed479d523a42751209.jpg",
      "note": "v2 四联检视板"
    }
  ]
});
