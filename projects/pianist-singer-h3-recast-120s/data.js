window.registerProject({
  "id": "pianist-singer-h3-recast-120s",
  "title": "钢琴弹唱｜主唱原照修正 H3 替换 v2｜120秒",
  "subtitle": "淘汰窄脸定妆图偏差 · 原照单图直投 A 机 H3 重生 11 镜 · LC 参考频谱温和混音",
  "logline": "针对金泰画布 399 Seedance 2.5 四段任务失败及初版 H3 定妆图把人物脸颊改窄的偏差，直接以原始正脸照作为唯一身份参考在 A 机 H3 逐镜重生全部 11 条主唱弹唱镜头（9/9 近景人脸相似度显著提升，首镜由 10.59% 升至 30.43%），保留末段 10.38 秒鼓手原画并合入确认版 LC 温和频谱混音。",
  "date": "2026-11-03",
  "tags": [
    "H3",
    "角色替换",
    "身份修正v2",
    "钢琴弹唱",
    "SAM遮罩",
    "LC混音",
    "120秒",
    "16:9",
    "待用户审片"
  ],
  "model": "A 机 MiniMax H3 (SAM 遮罩局部重绘 + 原照单图身份锁) + LC 参考频谱温和混音",
  "modelShort": "H3",
  "poster": "media/img-55a1ec03554f7fe19b54.jpg",
  "film": {
    "src": "https://github.com/aikingtai-ctrl/jintai-film-showcase/releases/download/media-v1/pianist-singer-h3-recast-120s--5ef5bd8068496e9a239c.mp4",
    "duration": 120,
    "width": 1280,
    "height": 720,
    "fps": "24"
  },
  "meta": {
    "shots": 11,
    "generated": 11,
    "durationSec": 120,
    "resolution": "1280×720",
    "fps": "24",
    "aspect": "16:9",
    "style": "暖金复古舞台灯光，午夜蓝丝绒西装 + 酒红开领衬衫，保留立麦前遮挡与三角钢琴演奏手部动态。"
  },
  "characters": [
    {
      "id": "CHR-SINGER",
      "name": "钢琴主唱（原照单图身份锁定）",
      "role": "舞台钢琴弹唱主唱",
      "look": "直接锚定原始正脸照脸型与五官比例（淘汰变窄舞台定妆脸），配午夜蓝丝绒外套与酒红开领衬衫。",
      "image": "media/img-9fb67579b96836c7d473.png",
      "ref": "media/img-3608d24d0c7659454dab.png",
      "uses": 11
    }
  ],
  "props": [
    {
      "id": "QC-5S",
      "name": "原照修正版 120 秒全片每 5 秒抽帧总表",
      "desc": "24 个时间节点全片连续性与第 4 段去叠影核验。",
      "image": "media/img-713480d486d0ec9085e0.png"
    }
  ],
  "shots": [
    {
      "id": "S01",
      "title": "第 1 段 A · 舞台全景（钢琴主唱+鼓手）",
      "start": 0,
      "duration": 6.67,
      "framing": "舞台全景（钢琴主唱+鼓手）",
      "camera": "沿用原舞台摇移与呼吸感机位",
      "action": "以原始正脸生活照单图直锁主唱圆润脸颊、鼻形、细金属框眼镜与黑短卷发，穿午夜蓝丝绒外套配酒红开领衬衫弹唱（SAM 局部遮罩保留钢琴、立麦与后景鼓手）。",
      "prompt": "Replace the male pianist-vocalist inside the SAM mask with the exact middle-aged Chinese man with thin metal-frame glasses and short curly black hair from <Picture 1> (original frontal photo only, preserving authentic cheek fullness and jawline), wearing a midnight-blue velvet blazer over a burgundy open-collar shirt, singing passionately into the stage microphone while playing grand piano.",
      "refs": [
        {
          "label": "首镜新旧人脸相似度对照",
          "src": "media/img-9fb67579b96836c7d473.png"
        }
      ],
      "video": "https://github.com/aikingtai-ctrl/jintai-film-showcase/releases/download/media-v1/pianist-singer-h3-recast-120s--848a3bd7484efebdc5b3.mp4",
      "alts": [
        {
          "label": "SAM 遮罩引导流",
          "src": "https://github.com/aikingtai-ctrl/jintai-film-showcase/releases/download/media-v1/pianist-singer-h3-recast-120s--8cfe0653b28128de68bd.mp4"
        }
      ],
      "thumb": "assets/shots/S01.jpg",
      "model": "A 机 MiniMax H3 (原照单图身份修正)",
      "params": "160 帧 (6.67s) · 1280×720 · 24fps",
      "status": "已生成"
    },
    {
      "id": "S02",
      "title": "第 1 段 B · 钢琴主唱近景",
      "start": 6.67,
      "duration": 11.67,
      "framing": "钢琴主唱近景",
      "camera": "沿用原舞台摇移与呼吸感机位",
      "action": "以原始正脸生活照单图直锁主唱圆润脸颊、鼻形、细金属框眼镜与黑短卷发，穿午夜蓝丝绒外套配酒红开领衬衫弹唱（SAM 局部遮罩保留钢琴、立麦与后景鼓手）。",
      "prompt": "Replace the male pianist-vocalist inside the SAM mask with the exact middle-aged Chinese man with thin metal-frame glasses and short curly black hair from <Picture 1> (original frontal photo only, preserving authentic cheek fullness and jawline), wearing a midnight-blue velvet blazer over a burgundy open-collar shirt, singing passionately into the stage microphone while playing grand piano.",
      "refs": [
        {
          "label": "首镜新旧人脸相似度对照",
          "src": "media/img-9fb67579b96836c7d473.png"
        }
      ],
      "video": "https://github.com/aikingtai-ctrl/jintai-film-showcase/releases/download/media-v1/pianist-singer-h3-recast-120s--1cbadc87fc74a2034c09.mp4",
      "alts": [
        {
          "label": "SAM 遮罩引导流",
          "src": "https://github.com/aikingtai-ctrl/jintai-film-showcase/releases/download/media-v1/pianist-singer-h3-recast-120s--1de53856fbd62bed23e3.mp4"
        }
      ],
      "thumb": "assets/shots/S02.jpg",
      "model": "A 机 MiniMax H3 (原照单图身份修正)",
      "params": "280 帧 (11.67s) · 1280×720 · 24fps",
      "status": "已生成"
    },
    {
      "id": "S03",
      "title": "第 1 段 C · 钢琴主唱近景",
      "start": 18.34,
      "duration": 11.67,
      "framing": "钢琴主唱近景",
      "camera": "沿用原舞台摇移与呼吸感机位",
      "action": "以原始正脸生活照单图直锁主唱圆润脸颊、鼻形、细金属框眼镜与黑短卷发，穿午夜蓝丝绒外套配酒红开领衬衫弹唱（SAM 局部遮罩保留钢琴、立麦与后景鼓手）。",
      "prompt": "Replace the male pianist-vocalist inside the SAM mask with the exact middle-aged Chinese man with thin metal-frame glasses and short curly black hair from <Picture 1> (original frontal photo only, preserving authentic cheek fullness and jawline), wearing a midnight-blue velvet blazer over a burgundy open-collar shirt, singing passionately into the stage microphone while playing grand piano.",
      "refs": [
        {
          "label": "首镜新旧人脸相似度对照",
          "src": "media/img-9fb67579b96836c7d473.png"
        }
      ],
      "video": "https://github.com/aikingtai-ctrl/jintai-film-showcase/releases/download/media-v1/pianist-singer-h3-recast-120s--b75bb5fb95c30140fd17.mp4",
      "alts": [
        {
          "label": "SAM 遮罩引导流",
          "src": "https://github.com/aikingtai-ctrl/jintai-film-showcase/releases/download/media-v1/pianist-singer-h3-recast-120s--33849bc525e4833e6ab2.mp4"
        }
      ],
      "thumb": "assets/shots/S03.jpg",
      "model": "A 机 MiniMax H3 (原照单图身份修正)",
      "params": "280 帧 (11.67s) · 1280×720 · 24fps",
      "status": "已生成"
    },
    {
      "id": "S04",
      "title": "第 2 段 A · 钢琴主唱近景",
      "start": 30.01,
      "duration": 12.25,
      "framing": "钢琴主唱近景",
      "camera": "沿用原舞台摇移与呼吸感机位",
      "action": "以原始正脸生活照单图直锁主唱圆润脸颊、鼻形、细金属框眼镜与黑短卷发，穿午夜蓝丝绒外套配酒红开领衬衫弹唱（SAM 局部遮罩保留钢琴、立麦与后景鼓手）。",
      "prompt": "Replace the male pianist-vocalist inside the SAM mask with the exact middle-aged Chinese man with thin metal-frame glasses and short curly black hair from <Picture 1> (original frontal photo only, preserving authentic cheek fullness and jawline), wearing a midnight-blue velvet blazer over a burgundy open-collar shirt, singing passionately into the stage microphone while playing grand piano.",
      "refs": [
        {
          "label": "首镜新旧人脸相似度对照",
          "src": "media/img-9fb67579b96836c7d473.png"
        }
      ],
      "video": "https://github.com/aikingtai-ctrl/jintai-film-showcase/releases/download/media-v1/pianist-singer-h3-recast-120s--a023e28ddc0778d9b7db.mp4",
      "alts": [
        {
          "label": "SAM 遮罩引导流",
          "src": "https://github.com/aikingtai-ctrl/jintai-film-showcase/releases/download/media-v1/pianist-singer-h3-recast-120s--88ae914ca0a8eef3b02a.mp4"
        }
      ],
      "thumb": "assets/shots/S04.jpg",
      "model": "A 机 MiniMax H3 (原照单图身份修正)",
      "params": "294 帧 (12.25s) · 1280×720 · 24fps",
      "status": "已生成"
    },
    {
      "id": "S05",
      "title": "第 2 段 B · 钢琴主唱近景",
      "start": 42.26,
      "duration": 12.25,
      "framing": "钢琴主唱近景",
      "camera": "沿用原舞台摇移与呼吸感机位",
      "action": "以原始正脸生活照单图直锁主唱圆润脸颊、鼻形、细金属框眼镜与黑短卷发，穿午夜蓝丝绒外套配酒红开领衬衫弹唱（SAM 局部遮罩保留钢琴、立麦与后景鼓手）。",
      "prompt": "Replace the male pianist-vocalist inside the SAM mask with the exact middle-aged Chinese man with thin metal-frame glasses and short curly black hair from <Picture 1> (original frontal photo only, preserving authentic cheek fullness and jawline), wearing a midnight-blue velvet blazer over a burgundy open-collar shirt, singing passionately into the stage microphone while playing grand piano.",
      "refs": [
        {
          "label": "首镜新旧人脸相似度对照",
          "src": "media/img-9fb67579b96836c7d473.png"
        }
      ],
      "video": "https://github.com/aikingtai-ctrl/jintai-film-showcase/releases/download/media-v1/pianist-singer-h3-recast-120s--286be04f4e0b15daf111.mp4",
      "alts": [
        {
          "label": "SAM 遮罩引导流",
          "src": "https://github.com/aikingtai-ctrl/jintai-film-showcase/releases/download/media-v1/pianist-singer-h3-recast-120s--98491ddf8e91a02176ab.mp4"
        }
      ],
      "thumb": "assets/shots/S05.jpg",
      "model": "A 机 MiniMax H3 (原照单图身份修正)",
      "params": "294 帧 (12.25s) · 1280×720 · 24fps",
      "status": "已生成"
    },
    {
      "id": "S06",
      "title": "第 2 段 C · 钢琴主唱近景",
      "start": 54.51,
      "duration": 5.5,
      "framing": "钢琴主唱近景",
      "camera": "沿用原舞台摇移与呼吸感机位",
      "action": "以原始正脸生活照单图直锁主唱圆润脸颊、鼻形、细金属框眼镜与黑短卷发，穿午夜蓝丝绒外套配酒红开领衬衫弹唱（SAM 局部遮罩保留钢琴、立麦与后景鼓手）。",
      "prompt": "Replace the male pianist-vocalist inside the SAM mask with the exact middle-aged Chinese man with thin metal-frame glasses and short curly black hair from <Picture 1> (original frontal photo only, preserving authentic cheek fullness and jawline), wearing a midnight-blue velvet blazer over a burgundy open-collar shirt, singing passionately into the stage microphone while playing grand piano.",
      "refs": [
        {
          "label": "首镜新旧人脸相似度对照",
          "src": "media/img-9fb67579b96836c7d473.png"
        }
      ],
      "video": "https://github.com/aikingtai-ctrl/jintai-film-showcase/releases/download/media-v1/pianist-singer-h3-recast-120s--3796d4ce99340b1c7c00.mp4",
      "alts": [
        {
          "label": "SAM 遮罩引导流",
          "src": "https://github.com/aikingtai-ctrl/jintai-film-showcase/releases/download/media-v1/pianist-singer-h3-recast-120s--ecb6485221d1e941c621.mp4"
        }
      ],
      "thumb": "assets/shots/S06.jpg",
      "model": "A 机 MiniMax H3 (原照单图身份修正)",
      "params": "132 帧 (5.5s) · 1280×720 · 24fps",
      "status": "已生成"
    },
    {
      "id": "S07",
      "title": "第 3 段 A · 钢琴主唱近景",
      "start": 60.01,
      "duration": 10,
      "framing": "钢琴主唱近景",
      "camera": "沿用原舞台摇移与呼吸感机位",
      "action": "以原始正脸生活照单图直锁主唱圆润脸颊、鼻形、细金属框眼镜与黑短卷发，穿午夜蓝丝绒外套配酒红开领衬衫弹唱（SAM 局部遮罩保留钢琴、立麦与后景鼓手）。",
      "prompt": "Replace the male pianist-vocalist inside the SAM mask with the exact middle-aged Chinese man with thin metal-frame glasses and short curly black hair from <Picture 1> (original frontal photo only, preserving authentic cheek fullness and jawline), wearing a midnight-blue velvet blazer over a burgundy open-collar shirt, singing passionately into the stage microphone while playing grand piano.",
      "refs": [
        {
          "label": "首镜新旧人脸相似度对照",
          "src": "media/img-9fb67579b96836c7d473.png"
        }
      ],
      "video": "https://github.com/aikingtai-ctrl/jintai-film-showcase/releases/download/media-v1/pianist-singer-h3-recast-120s--9c9abeffa7b552ec077e.mp4",
      "alts": [
        {
          "label": "SAM 遮罩引导流",
          "src": "https://github.com/aikingtai-ctrl/jintai-film-showcase/releases/download/media-v1/pianist-singer-h3-recast-120s--8e25330852f6996a0a22.mp4"
        }
      ],
      "thumb": "assets/shots/S07.jpg",
      "model": "A 机 MiniMax H3 (原照单图身份修正)",
      "params": "240 帧 (10.0s) · 1280×720 · 24fps",
      "status": "已生成"
    },
    {
      "id": "S08",
      "title": "第 3 段 B · 钢琴主唱近景",
      "start": 70.01,
      "duration": 10,
      "framing": "钢琴主唱近景",
      "camera": "沿用原舞台摇移与呼吸感机位",
      "action": "以原始正脸生活照单图直锁主唱圆润脸颊、鼻形、细金属框眼镜与黑短卷发，穿午夜蓝丝绒外套配酒红开领衬衫弹唱（SAM 局部遮罩保留钢琴、立麦与后景鼓手）。",
      "prompt": "Replace the male pianist-vocalist inside the SAM mask with the exact middle-aged Chinese man with thin metal-frame glasses and short curly black hair from <Picture 1> (original frontal photo only, preserving authentic cheek fullness and jawline), wearing a midnight-blue velvet blazer over a burgundy open-collar shirt, singing passionately into the stage microphone while playing grand piano.",
      "refs": [
        {
          "label": "首镜新旧人脸相似度对照",
          "src": "media/img-9fb67579b96836c7d473.png"
        }
      ],
      "video": "https://github.com/aikingtai-ctrl/jintai-film-showcase/releases/download/media-v1/pianist-singer-h3-recast-120s--d0970f175ea9acf2056e.mp4",
      "alts": [
        {
          "label": "SAM 遮罩引导流",
          "src": "https://github.com/aikingtai-ctrl/jintai-film-showcase/releases/download/media-v1/pianist-singer-h3-recast-120s--b1e8397523af5217c8c5.mp4"
        }
      ],
      "thumb": "assets/shots/S08.jpg",
      "model": "A 机 MiniMax H3 (原照单图身份修正)",
      "params": "240 帧 (10.0s) · 1280×720 · 24fps",
      "status": "已生成"
    },
    {
      "id": "S09",
      "title": "第 3 段 C · 钢琴主唱近景",
      "start": 80.01,
      "duration": 10,
      "framing": "钢琴主唱近景",
      "camera": "沿用原舞台摇移与呼吸感机位",
      "action": "以原始正脸生活照单图直锁主唱圆润脸颊、鼻形、细金属框眼镜与黑短卷发，穿午夜蓝丝绒外套配酒红开领衬衫弹唱（SAM 局部遮罩保留钢琴、立麦与后景鼓手）。",
      "prompt": "Replace the male pianist-vocalist inside the SAM mask with the exact middle-aged Chinese man with thin metal-frame glasses and short curly black hair from <Picture 1> (original frontal photo only, preserving authentic cheek fullness and jawline), wearing a midnight-blue velvet blazer over a burgundy open-collar shirt, singing passionately into the stage microphone while playing grand piano.",
      "refs": [
        {
          "label": "首镜新旧人脸相似度对照",
          "src": "media/img-9fb67579b96836c7d473.png"
        }
      ],
      "video": "https://github.com/aikingtai-ctrl/jintai-film-showcase/releases/download/media-v1/pianist-singer-h3-recast-120s--a7679b87b808d386b378.mp4",
      "alts": [
        {
          "label": "SAM 遮罩引导流",
          "src": "https://github.com/aikingtai-ctrl/jintai-film-showcase/releases/download/media-v1/pianist-singer-h3-recast-120s--e930efda7417dfeff847.mp4"
        }
      ],
      "thumb": "assets/shots/S09.jpg",
      "model": "A 机 MiniMax H3 (原照单图身份修正)",
      "params": "240 帧 (10.0s) · 1280×720 · 24fps",
      "status": "已生成"
    },
    {
      "id": "S10",
      "title": "第 4 段 A · 钢琴主唱近景",
      "start": 90.01,
      "duration": 11.08,
      "framing": "钢琴主唱近景",
      "camera": "沿用原舞台摇移与呼吸感机位",
      "action": "以原始正脸生活照单图直锁主唱圆润脸颊、鼻形、细金属框眼镜与黑短卷发，穿午夜蓝丝绒外套配酒红开领衬衫弹唱（SAM 局部遮罩保留钢琴、立麦与后景鼓手）。",
      "prompt": "Replace the male pianist-vocalist inside the SAM mask with the exact middle-aged Chinese man with thin metal-frame glasses and short curly black hair from <Picture 1> (original frontal photo only, preserving authentic cheek fullness and jawline), wearing a midnight-blue velvet blazer over a burgundy open-collar shirt, singing passionately into the stage microphone while playing grand piano.",
      "refs": [
        {
          "label": "首镜新旧人脸相似度对照",
          "src": "media/img-9fb67579b96836c7d473.png"
        }
      ],
      "video": "https://github.com/aikingtai-ctrl/jintai-film-showcase/releases/download/media-v1/pianist-singer-h3-recast-120s--f2ce23455921b554ef3f.mp4",
      "alts": [
        {
          "label": "SAM 遮罩引导流",
          "src": "https://github.com/aikingtai-ctrl/jintai-film-showcase/releases/download/media-v1/pianist-singer-h3-recast-120s--00d9a0afa0be04f528b7.mp4"
        }
      ],
      "thumb": "assets/shots/S10.jpg",
      "model": "A 机 MiniMax H3 (原照单图身份修正)",
      "params": "266 帧 (11.08s) · 1280×720 · 24fps",
      "status": "已生成"
    },
    {
      "id": "S11",
      "title": "第 4 段 B · 舞台全景（钢琴主唱+鼓手）",
      "start": 101.09,
      "duration": 8.54,
      "framing": "舞台全景（钢琴主唱+鼓手）",
      "camera": "沿用原舞台摇移与呼吸感机位",
      "action": "以原始正脸生活照单图直锁主唱圆润脸颊、鼻形、细金属框眼镜与黑短卷发，穿午夜蓝丝绒外套配酒红开领衬衫弹唱（SAM 局部遮罩保留钢琴、立麦与后景鼓手）。",
      "prompt": "Replace the male pianist-vocalist inside the SAM mask with the exact middle-aged Chinese man with thin metal-frame glasses and short curly black hair from <Picture 1> (original frontal photo only, preserving authentic cheek fullness and jawline), wearing a midnight-blue velvet blazer over a burgundy open-collar shirt, singing passionately into the stage microphone while playing grand piano.",
      "refs": [
        {
          "label": "首镜新旧人脸相似度对照",
          "src": "media/img-9fb67579b96836c7d473.png"
        }
      ],
      "video": "https://github.com/aikingtai-ctrl/jintai-film-showcase/releases/download/media-v1/pianist-singer-h3-recast-120s--539cadce4baa131337d6.mp4",
      "alts": [
        {
          "label": "SAM 遮罩引导流",
          "src": "https://github.com/aikingtai-ctrl/jintai-film-showcase/releases/download/media-v1/pianist-singer-h3-recast-120s--a45aab5c04522a466513.mp4"
        }
      ],
      "thumb": "assets/shots/S11.jpg",
      "model": "A 机 MiniMax H3 (原照单图身份修正)",
      "params": "205 帧 (8.54s) · 1280×720 · 24fps",
      "status": "已生成"
    }
  ],
  "generation": {
    "model": "A 机 MiniMax H3 + ReActorFaceSimilarity 定量核验",
    "params": [
      {
        "k": "总时长",
        "v": "120.000 秒（2880 帧 @ 24fps，含末段 10.375s 鼓手独镜原画）"
      },
      {
        "k": "音轨 SHA-256",
        "v": "d13cc947f77895c926f449ea166c2de136af0922eaeba89c2ccac443b3f19d3f（LC参考频谱温和混音，非声纹克隆）"
      },
      {
        "k": "排障说明",
        "v": "画布 399 Seedance 付费任务失败未扣产；旧窄脸版与叠影废片已隔离排除。"
      }
    ]
  }
});
