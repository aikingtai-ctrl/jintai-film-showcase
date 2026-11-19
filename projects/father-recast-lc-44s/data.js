window.registerProject({
  "id": "father-recast-lc-44s",
  "title": "笑话别人被笑话｜图二父亲角色替换返工版｜43.5秒",
  "subtitle": "逐镜掩码跟踪合成 · Seed-VC V2 转 LC 音色（误差 ≤10ms）· 三处『妈→爸』语音字幕同步修正",
  "logline": "针对抖音 7701513755343015203 喜剧短片母亲改父亲任务：本轮返工彻底修复初版 S04 女式发髻残留与 S11 构图偏移，仅在原角色与新父亲覆盖域内局部合成以保留消防员、儿子、警察、医生原貌，6 段父亲台词经 Seed-VC V2 转 LC 音色并驱动 LatentSync 口型，儿子三声『妈』全部精准替换为『爸』。",
  "date": "2026-11-02",
  "tags": [
    "角色替换",
    "返工精修",
    "Seed-VC V2",
    "LatentSync",
    "LC音轨",
    "43.5秒",
    "竖屏 9:16",
    "待用户审片"
  ],
  "model": "A 机局部角色重绘 + Seed-VC V2 (LC 音色转换) + LatentSync 口型同步",
  "modelShort": "H3 + Seed-VC + LatentSync",
  "poster": "media/img-ce26ee29baa438bbbf9c.jpg",
  "film": {
    "src": "https://github.com/aikingtai-ctrl/jintai-film-showcase/releases/download/media-v1/father-recast-lc-44s--8ef9fb10702c8c588164.mp4",
    "duration": 43.52,
    "width": 1080,
    "height": 1920,
    "fps": "25"
  },
  "meta": {
    "shots": 11,
    "generated": 11,
    "durationSec": 43.52,
    "resolution": "1080×1920",
    "fps": "25",
    "aspect": "9:16",
    "style": "家庭情景喜剧实拍质感，非替换人物与场景零重绘损耗，混音母带 -12.33 LUFS。"
  },
  "characters": [
    {
      "id": "CHR-DAD",
      "name": "图二父亲角色造型卡",
      "role": "替换原片母亲的父亲角色",
      "look": "整洁黑色短发（彻底去除旧版发髻残留）、细金属框眼镜、深蓝立领夹克衫配浅灰内搭。",
      "image": "media/img-82967aa50a77be193381.png",
      "uses": 11
    }
  ],
  "props": [
    {
      "id": "QC-CONTACT",
      "name": "43.52秒返工终版全片接触表",
      "desc": "1088 帧完整解码通过，含 30s 切点前后连续性核验。",
      "image": "media/img-cfc5d441db6ce2add858.png"
    }
  ],
  "shots": [
    {
      "id": "S01",
      "title": "火场全景 · 消防员与父亲同框",
      "start": 0,
      "duration": 3.2,
      "framing": "竖屏家庭情景短剧正反打 (1080×1920)",
      "camera": "逐镜掩码局部跟踪合成（消防员/儿子/警察/医生及背景 100% 保真原片）",
      "action": "火场全景 · 消防员与父亲同框；仅在原母亲与新父亲并集遮罩内合成图二短发眼镜父亲，杜绝背景闪烁。",
      "prompt": "Replace only the mother character with the middle-aged Chinese father from <Picture 1> (short black hair, thin metal-frame glasses, navy casual jacket), preserving firefighter, son, police officer, doctor, room background, Seed-VC V2 LC voice conversion, and LatentSync lip-sync.",
      "refs": [
        {
          "label": "父亲角色造型卡",
          "src": "media/img-82967aa50a77be193381.png"
        }
      ],
      "video": "https://github.com/aikingtai-ctrl/jintai-film-showcase/releases/download/media-v1/father-recast-lc-44s--f57fc25fa4136e339f89.mp4",
      "thumb": "assets/shots/S01_fire_wide_compare.png",
      "model": "局部跟踪重绘 + Seed-VC V2 (LC) + LatentSync",
      "params": "3.2s · 1080×1920 · 25fps",
      "status": "已生成"
    },
    {
      "id": "S02",
      "title": "火场近景 · 父亲首句对白（LatentSync 口型）",
      "start": 3.2,
      "duration": 4,
      "framing": "竖屏家庭情景短剧正反打 (1080×1920)",
      "camera": "逐镜掩码局部跟踪合成（消防员/儿子/警察/医生及背景 100% 保真原片）",
      "action": "火场近景 · 父亲首句对白（LatentSync 口型）；仅在原母亲与新父亲并集遮罩内合成图二短发眼镜父亲，杜绝背景闪烁。",
      "prompt": "Replace only the mother character with the middle-aged Chinese father from <Picture 1> (short black hair, thin metal-frame glasses, navy casual jacket), preserving firefighter, son, police officer, doctor, room background, Seed-VC V2 LC voice conversion, and LatentSync lip-sync.",
      "refs": [
        {
          "label": "父亲角色造型卡",
          "src": "media/img-82967aa50a77be193381.png"
        }
      ],
      "video": "https://github.com/aikingtai-ctrl/jintai-film-showcase/releases/download/media-v1/father-recast-lc-44s--f57fc25fa4136e339f89.mp4",
      "thumb": "assets/shots/S02_fire_close_compare.png",
      "model": "局部跟踪重绘 + Seed-VC V2 (LC) + LatentSync",
      "params": "4.0s · 1080×1920 · 25fps",
      "status": "已生成"
    },
    {
      "id": "S03",
      "title": "火场否认近景 · 去除旧女式发髻重生成短发父亲",
      "start": 7.2,
      "duration": 4.5,
      "framing": "竖屏家庭情景短剧正反打 (1080×1920)",
      "camera": "逐镜掩码局部跟踪合成（消防员/儿子/警察/医生及背景 100% 保真原片）",
      "action": "火场否认近景 · 去除旧女式发髻重生成短发父亲；仅在原母亲与新父亲并集遮罩内合成图二短发眼镜父亲，杜绝背景闪烁。",
      "prompt": "Replace only the mother character with the middle-aged Chinese father from <Picture 1> (short black hair, thin metal-frame glasses, navy casual jacket), preserving firefighter, son, police officer, doctor, room background, Seed-VC V2 LC voice conversion, and LatentSync lip-sync.",
      "refs": [
        {
          "label": "父亲角色造型卡",
          "src": "media/img-82967aa50a77be193381.png"
        }
      ],
      "video": "https://github.com/aikingtai-ctrl/jintai-film-showcase/releases/download/media-v1/father-recast-lc-44s--f57fc25fa4136e339f89.mp4",
      "thumb": "assets/shots/S04_fire_denial_compare.png",
      "model": "局部跟踪重绘 + Seed-VC V2 (LC) + LatentSync",
      "params": "4.5s · 1080×1920 · 25fps",
      "status": "已生成"
    },
    {
      "id": "S04",
      "title": "客厅窃贼与儿子反应镜（原片保留 + 喊『爸』替换）",
      "start": 11.7,
      "duration": 4.3,
      "framing": "竖屏家庭情景短剧正反打 (1080×1920)",
      "camera": "逐镜掩码局部跟踪合成（消防员/儿子/警察/医生及背景 100% 保真原片）",
      "action": "客厅窃贼与儿子反应镜（原片保留 + 喊『爸』替换）；仅在原母亲与新父亲并集遮罩内合成图二短发眼镜父亲，杜绝背景闪烁。",
      "prompt": "Replace only the mother character with the middle-aged Chinese father from <Picture 1> (short black hair, thin metal-frame glasses, navy casual jacket), preserving firefighter, son, police officer, doctor, room background, Seed-VC V2 LC voice conversion, and LatentSync lip-sync.",
      "refs": [
        {
          "label": "父亲角色造型卡",
          "src": "media/img-82967aa50a77be193381.png"
        }
      ],
      "video": "https://github.com/aikingtai-ctrl/jintai-film-showcase/releases/download/media-v1/father-recast-lc-44s--f57fc25fa4136e339f89.mp4",
      "thumb": "assets/shots/S05_burglar_son_compare.png",
      "model": "局部跟踪重绘 + Seed-VC V2 (LC) + LatentSync",
      "params": "4.3s · 1080×1920 · 25fps",
      "status": "已生成"
    },
    {
      "id": "S05",
      "title": "警察盘问 · 父亲整洁居家服近景",
      "start": 16,
      "duration": 5,
      "framing": "竖屏家庭情景短剧正反打 (1080×1920)",
      "camera": "逐镜掩码局部跟踪合成（消防员/儿子/警察/医生及背景 100% 保真原片）",
      "action": "警察盘问 · 父亲整洁居家服近景；仅在原母亲与新父亲并集遮罩内合成图二短发眼镜父亲，杜绝背景闪烁。",
      "prompt": "Replace only the mother character with the middle-aged Chinese father from <Picture 1> (short black hair, thin metal-frame glasses, navy casual jacket), preserving firefighter, son, police officer, doctor, room background, Seed-VC V2 LC voice conversion, and LatentSync lip-sync.",
      "refs": [
        {
          "label": "父亲角色造型卡",
          "src": "media/img-82967aa50a77be193381.png"
        }
      ],
      "video": "https://github.com/aikingtai-ctrl/jintai-film-showcase/releases/download/media-v1/father-recast-lc-44s--f57fc25fa4136e339f89.mp4",
      "thumb": "assets/shots/S06_clean_police_compare.png",
      "model": "局部跟踪重绘 + Seed-VC V2 (LC) + LatentSync",
      "params": "5.0s · 1080×1920 · 25fps",
      "status": "已生成"
    },
    {
      "id": "S06",
      "title": "儿子客厅反应镜（保留原片表演）",
      "start": 21,
      "duration": 3.5,
      "framing": "竖屏家庭情景短剧正反打 (1080×1920)",
      "camera": "逐镜掩码局部跟踪合成（消防员/儿子/警察/医生及背景 100% 保真原片）",
      "action": "儿子客厅反应镜（保留原片表演）；仅在原母亲与新父亲并集遮罩内合成图二短发眼镜父亲，杜绝背景闪烁。",
      "prompt": "Replace only the mother character with the middle-aged Chinese father from <Picture 1> (short black hair, thin metal-frame glasses, navy casual jacket), preserving firefighter, son, police officer, doctor, room background, Seed-VC V2 LC voice conversion, and LatentSync lip-sync.",
      "refs": [
        {
          "label": "父亲角色造型卡",
          "src": "media/img-82967aa50a77be193381.png"
        }
      ],
      "video": "https://github.com/aikingtai-ctrl/jintai-film-showcase/releases/download/media-v1/father-recast-lc-44s--f57fc25fa4136e339f89.mp4",
      "thumb": "assets/shots/S07_son_clean_compare.png",
      "model": "局部跟踪重绘 + Seed-VC V2 (LC) + LatentSync",
      "params": "3.5s · 1080×1920 · 25fps",
      "status": "已生成"
    },
    {
      "id": "S07",
      "title": "警察面前父亲摆手否认（『家里这么乱不得让人笑话』）",
      "start": 24.5,
      "duration": 5.5,
      "framing": "竖屏家庭情景短剧正反打 (1080×1920)",
      "camera": "逐镜掩码局部跟踪合成（消防员/儿子/警察/医生及背景 100% 保真原片）",
      "action": "警察面前父亲摆手否认（『家里这么乱不得让人笑话』）；仅在原母亲与新父亲并集遮罩内合成图二短发眼镜父亲，杜绝背景闪烁。",
      "prompt": "Replace only the mother character with the middle-aged Chinese father from <Picture 1> (short black hair, thin metal-frame glasses, navy casual jacket), preserving firefighter, son, police officer, doctor, room background, Seed-VC V2 LC voice conversion, and LatentSync lip-sync.",
      "refs": [
        {
          "label": "父亲角色造型卡",
          "src": "media/img-82967aa50a77be193381.png"
        }
      ],
      "video": "https://github.com/aikingtai-ctrl/jintai-film-showcase/releases/download/media-v1/father-recast-lc-44s--f57fc25fa4136e339f89.mp4",
      "thumb": "assets/shots/S09_police_denial_compare.png",
      "model": "局部跟踪重绘 + Seed-VC V2 (LC) + LatentSync",
      "params": "5.5s · 1080×1920 · 25fps",
      "status": "已生成"
    },
    {
      "id": "S08",
      "title": "跨 30 秒切点 · 儿子捂腹喊『爸』无缝续接",
      "start": 30,
      "duration": 3.5,
      "framing": "竖屏家庭情景短剧正反打 (1080×1920)",
      "camera": "逐镜掩码局部跟踪合成（消防员/儿子/警察/医生及背景 100% 保真原片）",
      "action": "跨 30 秒切点 · 儿子捂腹喊『爸』无缝续接；仅在原母亲与新父亲并集遮罩内合成图二短发眼镜父亲，杜绝背景闪烁。",
      "prompt": "Replace only the mother character with the middle-aged Chinese father from <Picture 1> (short black hair, thin metal-frame glasses, navy casual jacket), preserving firefighter, son, police officer, doctor, room background, Seed-VC V2 LC voice conversion, and LatentSync lip-sync.",
      "refs": [
        {
          "label": "父亲角色造型卡",
          "src": "media/img-82967aa50a77be193381.png"
        }
      ],
      "video": "https://github.com/aikingtai-ctrl/jintai-film-showcase/releases/download/media-v1/father-recast-lc-44s--6e26db4bd234adcf77a9.mp4",
      "thumb": "assets/shots/S10_son_pain_compare.png",
      "model": "局部跟踪重绘 + Seed-VC V2 (LC) + LatentSync",
      "params": "3.5s · 1080×1920 · 25fps",
      "status": "已生成"
    },
    {
      "id": "S09",
      "title": "病房医生问诊 · 父亲恢复原构图重生成",
      "start": 33.5,
      "duration": 3.5,
      "framing": "竖屏家庭情景短剧正反打 (1080×1920)",
      "camera": "逐镜掩码局部跟踪合成（消防员/儿子/警察/医生及背景 100% 保真原片）",
      "action": "病房医生问诊 · 父亲恢复原构图重生成；仅在原母亲与新父亲并集遮罩内合成图二短发眼镜父亲，杜绝背景闪烁。",
      "prompt": "Replace only the mother character with the middle-aged Chinese father from <Picture 1> (short black hair, thin metal-frame glasses, navy casual jacket), preserving firefighter, son, police officer, doctor, room background, Seed-VC V2 LC voice conversion, and LatentSync lip-sync.",
      "refs": [
        {
          "label": "父亲角色造型卡",
          "src": "media/img-82967aa50a77be193381.png"
        }
      ],
      "video": "https://github.com/aikingtai-ctrl/jintai-film-showcase/releases/download/media-v1/father-recast-lc-44s--6e26db4bd234adcf77a9.mp4",
      "thumb": "assets/shots/S11_doctor_clean_compare.png",
      "model": "局部跟踪重绘 + Seed-VC V2 (LC) + LatentSync",
      "params": "3.5s · 1080×1920 · 25fps",
      "status": "已生成"
    },
    {
      "id": "S10",
      "title": "病房双人中景 · 医生与父亲同框",
      "start": 37,
      "duration": 3,
      "framing": "竖屏家庭情景短剧正反打 (1080×1920)",
      "camera": "逐镜掩码局部跟踪合成（消防员/儿子/警察/医生及背景 100% 保真原片）",
      "action": "病房双人中景 · 医生与父亲同框；仅在原母亲与新父亲并集遮罩内合成图二短发眼镜父亲，杜绝背景闪烁。",
      "prompt": "Replace only the mother character with the middle-aged Chinese father from <Picture 1> (short black hair, thin metal-frame glasses, navy casual jacket), preserving firefighter, son, police officer, doctor, room background, Seed-VC V2 LC voice conversion, and LatentSync lip-sync.",
      "refs": [
        {
          "label": "父亲角色造型卡",
          "src": "media/img-82967aa50a77be193381.png"
        }
      ],
      "video": "https://github.com/aikingtai-ctrl/jintai-film-showcase/releases/download/media-v1/father-recast-lc-44s--6e26db4bd234adcf77a9.mp4",
      "thumb": "assets/shots/S12_doctor_wide_compare.png",
      "model": "局部跟踪重绘 + Seed-VC V2 (LC) + LatentSync",
      "params": "3.0s · 1080×1920 · 25fps",
      "status": "已生成"
    },
    {
      "id": "S11",
      "title": "结尾反转近景 · 父亲末句口型与神态收束",
      "start": 40,
      "duration": 3.52,
      "framing": "竖屏家庭情景短剧正反打 (1080×1920)",
      "camera": "逐镜掩码局部跟踪合成（消防员/儿子/警察/医生及背景 100% 保真原片）",
      "action": "结尾反转近景 · 父亲末句口型与神态收束；仅在原母亲与新父亲并集遮罩内合成图二短发眼镜父亲，杜绝背景闪烁。",
      "prompt": "Replace only the mother character with the middle-aged Chinese father from <Picture 1> (short black hair, thin metal-frame glasses, navy casual jacket), preserving firefighter, son, police officer, doctor, room background, Seed-VC V2 LC voice conversion, and LatentSync lip-sync.",
      "refs": [
        {
          "label": "父亲角色造型卡",
          "src": "media/img-82967aa50a77be193381.png"
        }
      ],
      "video": "https://github.com/aikingtai-ctrl/jintai-film-showcase/releases/download/media-v1/father-recast-lc-44s--6e26db4bd234adcf77a9.mp4",
      "thumb": "assets/shots/S13_doctor_denial_compare.png",
      "model": "局部跟踪重绘 + Seed-VC V2 (LC) + LatentSync",
      "params": "3.52s · 1080×1920 · 25fps",
      "status": "已生成"
    }
  ],
  "deliverables": [
    {
      "name": "7701513755343015203_父亲替换_合成43.52秒.mp4",
      "src": "https://github.com/aikingtai-ctrl/jintai-film-showcase/releases/download/media-v1/father-recast-lc-44s--8ef9fb10702c8c588164.mp4",
      "note": "43.52s 完整合成终版 · 20.18 MB"
    },
    {
      "name": "7701513755343015203_父亲替换_前30秒.mp4",
      "src": "https://github.com/aikingtai-ctrl/jintai-film-showcase/releases/download/media-v1/father-recast-lc-44s--f57fc25fa4136e339f89.mp4",
      "note": "前段 30.00s"
    },
    {
      "name": "7701513755343015203_父亲替换_后13.52秒.mp4",
      "src": "https://github.com/aikingtai-ctrl/jintai-film-showcase/releases/download/media-v1/father-recast-lc-44s--6e26db4bd234adcf77a9.mp4",
      "note": "后段 13.52s"
    }
  ]
});
