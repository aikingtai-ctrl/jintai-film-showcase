window.registerProject({
  "id": "sanbengzi-luxury-h3-lc-136s",
  "title": "三蹦子豪车大片｜图一替换图二 LC 原片语气｜136秒",
  "subtitle": "22 段主角零漏换 × 红岩峡谷黑皮衣正背连续性闭环 × VoxCPM2 零混响统一音色 (F0 std 6.8Hz)",
  "logline": "将 135.96 秒《如何把三蹦子广告拍成豪华汽车》全 57 镜中的 22 段主角镜头替换为圆脸短卷发银框眼镜男士，匹配摩卡棕、炭黑戗驳领、总裁休闲及 V3 补齐的红岩峡谷黑皮衣正背四套造型，并锁定 LC 零混响零底噪统一商业旁白。",
  "date": "2026-11-12",
  "tags": [
    "H3",
    "角色替换",
    "高定大片",
    "LC音色",
    "零混响",
    "16:9",
    "已生成"
  ],
  "model": "A 机 FeiHou MiniMax H3 + Qwen-Image-2.1 + VoxCPM2 (LC_DF3_Anchor)",
  "modelShort": "H3 + LC音色",
  "poster": "media/img-e7cdf70bd0845eb39a5c.jpg",
  "film": {
    "src": "https://github.com/aikingtai-ctrl/jintai-film-showcase/releases/download/media-v1/sanbengzi-luxury-h3-lc-136s--a9b89fa5e55adcea920b.mp4",
    "duration": 135.958,
    "width": 1280,
    "height": 720,
    "fps": "24"
  },
  "meta": {
    "shots": 4,
    "generated": 1,
    "durationSec": 135.958,
    "resolution": "1280×720",
    "fps": "24",
    "aspect": "16:9",
    "style": "百万级超跑广告反差幽默美学，全片 32 句旁白 F0 标准差仅 6.8 Hz，峡谷步态与服装严格连续。"
  },
  "synopsis": [
    "针对 135.96 秒 57 个切镜执行 5 点位 + 切点边界逐帧排查，锁定 22 段主角出场区间（含星空公路、山路护栏、荒原急推及峡谷双车穿行）；对纯正后方背影与红岩峡谷走远镜（01:18–01:22）彻底杜绝传入正面图，专制高光黑羊皮夹克+卡其裤纯背影与正脸双锚定母图并联动重渲 01:35 走近镜头。",
    "声音方面通过 DeepFilterNet3 净除 LC 参考样本 + 单一 6.5s 黄金锚点锁死全片 32 句音色，改用无相位涂抹 FFmpeg WSOLA 调速与 Demucs other 280–3600Hz 带阻消鬼影，彻底根除金属混响拖尾。"
  ],
  "concept": {
    "rules": [
      "纯背影远行品类双锁：01:18 峡谷背影仅喂 180° 黑皮衣纯背影母图（0 张正脸图），严防“倒着走+皮衣变西服”。",
      "5 点位全片防漏查：每个切镜按 2%/25%/50%/75%/96% 核查 22 段无一漏网。",
      "全片单锚点音色闭环：32 句旁白 F0 标准差压至 6.8 Hz，零混响、零句间音色漂移。"
    ],
    "directorMethod": "先完成 57 镜排查与三套西装 + 一套峡谷黑皮衣母图制作，分批调度 A 机 8×H100 对 41 帧保护切片进行 H3 替换与无缝音画混音。"
  },
  "pipeline": [
    {
      "stage": "① 四套高定与峡谷皮衣定妆",
      "tool": "Qwen-Image-2.1",
      "note": "摩卡棕双排扣、曜境炭黑戗驳领、全景总裁款、红岩峡谷黑皮衣正背双锚。"
    },
    {
      "stage": "② 零混响 LC 统一配音",
      "tool": "DeepFilterNet3 + VoxCPM2 + WSOLA",
      "note": "全片 32 句统一黄金锚点 + 280–3600Hz 伴奏消鬼影。"
    },
    {
      "stage": "③ 22 段零漏换与 V3 峡谷修复",
      "tool": "FeiHou Easy H3 (h3_character_swap_v1.5=0.45)",
      "note": "修复 01:18 倒着走与造型跳变，联动重渲 01:35 走近镜头。"
    },
    {
      "stage": "④ 720p24 3,263 帧无损封装",
      "tool": "FFmpeg 1280×720 @ 24fps",
      "note": "decode_rc=0，全片音画同步验讫。"
    }
  ],
  "characters": [
    {
      "id": "CHR-01",
      "name": "三套高定造型设计总卡",
      "role": "主角高定总览",
      "look": "圆脸短卷发银框眼镜男士三套豪车高定造型。",
      "image": "media/img-c7878588146e1441dec5.png",
      "uses": 4
    },
    {
      "id": "CHR-02",
      "name": "造型一｜海崖摩卡棕双排扣",
      "role": "海崖公路主体造型",
      "look": "摩卡棕双排扣高定西装套装。",
      "image": "media/img-909ae77aa86da270d89d.png",
      "uses": 4
    },
    {
      "id": "CHR-03",
      "name": "造型二｜曜境炭黑戗驳领西装",
      "role": "正式讲解造型",
      "look": "旗舰炭黑戗驳领西装配领带。",
      "image": "media/img-67d227f2e843341e24e8.png",
      "uses": 4
    },
    {
      "id": "CHR-04",
      "name": "造型三｜全景天幕总裁款",
      "role": "松弛驾驶造型",
      "look": "全景天幕商务舱松弛高定穿搭。",
      "image": "media/img-9c7ede74cdb1659fe5aa.png",
      "uses": 4
    },
    {
      "id": "CHR-05",
      "name": "正脸与90°右侧脸真骨相双锚",
      "role": "骨相防漂移母图",
      "look": "锁定颧骨、下颌线与半框眼镜框形。",
      "image": "media/img-d0438a76ac7ca4514aac.png",
      "uses": 4
    },
    {
      "id": "CHR-06",
      "name": "V3 新增｜红岩峡谷黑皮衣双锚",
      "role": "01:18/01:35 峡谷连续性修复",
      "look": "高光黑羊皮夹克 + 浅卡其长裤正背双锚母图。",
      "image": "media/img-51b35f838d9887649ab6.png",
      "uses": 4
    }
  ],
  "props": [
    {
      "id": "REF-01",
      "name": "全片十六镜抽检总表",
      "desc": "覆盖 16 个核心时间轴替换抽检。",
      "image": "media/img-f09dc42783b075e7306e.jpg"
    },
    {
      "id": "REF-02",
      "name": "原片图1 vs 成片图2 三套造型对照表",
      "desc": "1:1 造型与面部结构对照。",
      "image": "media/img-235fe3fc3f7be45d24fd.jpg"
    },
    {
      "id": "REF-03",
      "name": "全片 22 段主角零遗漏核验表",
      "desc": "全片 57 镜排查筛选出的 22 段全替换清单。",
      "image": "media/img-f7946ca903dd2762ce6e.jpg"
    }
  ],
  "shots": [
    {
      "id": "S01",
      "title": "Part 1 · 海崖摩卡棕西装与片头大字光晕保护",
      "start": 0,
      "duration": 34,
      "framing": "海崖跟拍 / 正面近景",
      "camera": "f=70..74 金色耀斑护字",
      "action": "保留片头金色耀斑扫字，换角为图二男士驾驶三蹦子优雅入画。",
      "prompt": "Mocha double-breasted suit driver on coastal cliff road, flare text preserved.",
      "refs": [
        {
          "label": "全片十六镜抽检总表",
          "src": "media/img-f09dc42783b075e7306e.jpg"
        }
      ],
      "video": "https://github.com/aikingtai-ctrl/jintai-film-showcase/releases/download/media-v1/sanbengzi-luxury-h3-lc-136s--a9b89fa5e55adcea920b.mp4",
      "thumb": "media/img-28c40a6a05be89763e83.jpg",
      "model": "FeiHou_MiniMax-H3_Remix_HSA_v0.7 + Breeze TTS 2 / LC",
      "params": "1280×720 @ 24fps",
      "status": "已合入成片"
    },
    {
      "id": "S02",
      "title": "Part 2 · 曜境旗舰炭黑西装与山路护栏追拍",
      "start": 34,
      "duration": 38,
      "framing": "斜侧跟拍 / 车内近景",
      "camera": "41 帧保护切片",
      "action": "纯正后方追拍仅喂后脑背影母图避免驾驶员莫名回头。",
      "prompt": "Back-of-head locked chase shot + charcoal peak-lapel suit close-up.",
      "refs": [
        {
          "label": "全片十六镜抽检总表",
          "src": "media/img-f09dc42783b075e7306e.jpg"
        }
      ],
      "video": "",
      "thumb": "media/img-608b9589b2b9e793e69b.jpg",
      "model": "FeiHou_MiniMax-H3_Remix_HSA_v0.7 + Breeze TTS 2 / LC",
      "params": "1280×720 @ 24fps",
      "status": "已合入成片"
    },
    {
      "id": "S03",
      "title": "Part 3 · 红岩峡谷黑皮衣远行与正面连续性",
      "start": 72,
      "duration": 34,
      "framing": "峡谷纵深远景 / 正面急推",
      "camera": "V3 黑皮衣纯背影 0 正脸",
      "action": "V3 彻底治好 01:18 倒走穿帮，并与 01:35 峡谷走近黑皮衣严丝合缝。",
      "prompt": "Shiny black leather jacket + khaki trousers rear silhouette matching S45 and S51.",
      "refs": [
        {
          "label": "全片十六镜抽检总表",
          "src": "media/img-f09dc42783b075e7306e.jpg"
        }
      ],
      "video": "",
      "thumb": "media/img-70e57d80820ffe63cde7.jpg",
      "model": "FeiHou_MiniMax-H3_Remix_HSA_v0.7 + Breeze TTS 2 / LC",
      "params": "1280×720 @ 24fps",
      "status": "已合入成片"
    },
    {
      "id": "S04",
      "title": "Part 4 · 全景天幕总裁款与星空公路终章",
      "start": 106,
      "duration": 29.96,
      "framing": "天幕俯仰 / 标版定格",
      "camera": "VoxCPM2 低噪声商配",
      "action": "F0 std 6.8Hz 沉稳总结收尾，3,263 帧全流零报错。",
      "prompt": "Sunroof executive suit finale with zero-reverb LC commercial narration.",
      "refs": [
        {
          "label": "全片十六镜抽检总表",
          "src": "media/img-f09dc42783b075e7306e.jpg"
        }
      ],
      "video": "",
      "thumb": "media/img-5f32c33795ef89b121e8.jpg",
      "model": "FeiHou_MiniMax-H3_Remix_HSA_v0.7 + Breeze TTS 2 / LC",
      "params": "1280×720 @ 24fps",
      "status": "已合入成片"
    }
  ],
  "generation": {
    "model": "A 机 FeiHou MiniMax H3 + Qwen-Image-2.1 + VoxCPM2 (LC_DF3_Anchor)",
    "params": [
      {
        "k": "替换区间",
        "v": "57 镜全面排查 · 22 段主角镜头零漏换"
      },
      {
        "k": "音色一致",
        "v": "VoxCPM2 单锚点 32 句 · F0 std = 6.8 Hz"
      },
      {
        "k": "成片规格",
        "v": "1280×720 @ 24fps · 3,263 帧 · decode_rc=0"
      },
      {
        "k": "成片体积",
        "v": "52.18 MB · 135.958s"
      }
    ],
    "notes": [
      "本地文档：[本机路径已移除]"
    ]
  },
  "deliverables": [
    {
      "name": "三蹦子豪车大片_图1替换图2_LC原片语气_A机H3成片_720p.mp4",
      "src": "https://github.com/aikingtai-ctrl/jintai-film-showcase/releases/download/media-v1/sanbengzi-luxury-h3-lc-136s--a9b89fa5e55adcea920b.mp4",
      "note": "135.958s · 1280×720 · 52.18 MB"
    },
    {
      "name": "三蹦子豪车大片_00_主角三套高定造型设计定妆总卡.png",
      "src": "media/img-c7878588146e1441dec5.png",
      "note": "三套高定造型设计总卡"
    },
    {
      "name": "三蹦子豪车大片_01_造型一_海崖摩卡棕双排扣高定西装款_灰底.png",
      "src": "media/img-909ae77aa86da270d89d.png",
      "note": "造型一｜海崖摩卡棕双排扣"
    },
    {
      "name": "三蹦子豪车大片_02_造型二_曜境旗舰炭黑戗驳领西装领带款_灰底.png",
      "src": "media/img-67d227f2e843341e24e8.png",
      "note": "造型二｜曜境炭黑戗驳领西装"
    },
    {
      "name": "三蹦子豪车大片_03_造型三_全景天幕商务舱松弛总裁款_灰底.png",
      "src": "media/img-9c7ede74cdb1659fe5aa.png",
      "note": "造型三｜全景天幕总裁款"
    },
    {
      "name": "三蹦子豪车大片_04_主角正脸与90度右侧脸原生真骨相双锚母图_灰底.png",
      "src": "media/img-d0438a76ac7ca4514aac.png",
      "note": "正脸与90°右侧脸真骨相双锚"
    },
    {
      "name": "三蹦子豪车大片_08_红岩峡谷高定黑皮衣正背双锚定妆母图_灰底.png",
      "src": "media/img-51b35f838d9887649ab6.png",
      "note": "V3 新增｜红岩峡谷黑皮衣双锚"
    },
    {
      "name": "三蹦子豪车大片_05_全片十六镜抽检总表.jpg",
      "src": "media/img-f09dc42783b075e7306e.jpg",
      "note": "全片十六镜抽检总表"
    },
    {
      "name": "三蹦子豪车大片_06_原片图1vs成片图2_三套造型1比1对比表.jpg",
      "src": "media/img-235fe3fc3f7be45d24fd.jpg",
      "note": "原片图1 vs 成片图2 三套造型对照表"
    },
    {
      "name": "三蹦子豪车大片_07_全片22段主角镜头零遗漏替换核验总表.jpg",
      "src": "media/img-f7946ca903dd2762ce6e.jpg",
      "note": "全片 22 段主角零遗漏核验表"
    }
  ]
});
