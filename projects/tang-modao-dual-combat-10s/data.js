window.registerProject({
  "id": "tang-modao-dual-combat-10s",
  "title": "盛唐陇右陌刀破盾｜真人写受力 vs 3D 国漫写招式｜10秒",
  "subtitle": "中国历史文化图库考证 × 爆老师打斗双 Skill 实战试片 × A机双卡 SelfLift 12 步武打管线",
  "logline": "严格考证中国历史文化图库 HL-TANG-CO-0004 明光铠、HL-TANG-PR-0008 两米单头长柄陌刀与汉唐烽燧遗址，在同一动作母题下双卡并行实测「真人写实·四问受力因果链」与「3D 国漫·角度轨迹定格」正反两套提示词法则。",
  "date": "2026-10-30",
  "tags": [
    "H3",
    "武打动作",
    "历史考证",
    "双Skill试片",
    "A机双卡",
    "16:9",
    "已生成"
  ],
  "model": "A 机 FeiHou H3 SelfLift 6+6=12 步 + @四只兔子 武打四件套 (speed=3.0) + 满血 DMAD",
  "modelShort": "H3",
  "poster": "media/img-3125b03181a0e98afab8.jpg",
  "film": {
    "src": "https://github.com/aikingtai-ctrl/jintai-film-showcase/releases/download/media-v1/tang-modao-dual-combat-10s--2cf60c500b729a2e29b6.mp4",
    "duration": 10.35,
    "width": 1664,
    "height": 928,
    "fps": "24"
  },
  "meta": {
    "shots": 3,
    "generated": 3,
    "durationSec": 10.35,
    "resolution": "1664×928",
    "fps": "24",
    "aspect": "16:9",
    "style": "同源母题双轨实验：B 轨写实抓重量、劈盾爆裂与犁土退步；A 轨国漫抓 45° 几何招式与 S 形披风英雄剪影。"
  },
  "synopsis": [
    "开拍前先行校验历史图库并人工拦截修正 MOSS-Image 初版“双头刀”错误为正仓院两米长单头宽刃厚背陌刀；V2 对抗精修增补首帧双方已在三步内对峙消除 0.1s 漏图，并用“紧抿双唇无声角力”灭绝 AI 自发含糊伪台词。",
    "A 机 8191 与 8193 双 H100 并发（耗时 272.7s / 264.2s），两项自动静态审计 --lint 全部 zero-issue 通过，三段独立 1080p 级的 1664×928 视频均已原生收录。"
  ],
  "concept": {
    "rules": [
      "史实图库先行：考证 HL-TANG-CO-0004 明光铠、HL-TANG-PR-0008 单头陌刀与 HL-XHAN-LS-0001 烽燧。",
      "真人写受力 vs 国漫写招式：两套词库互斥隔离（零“光弧/剑气”混入实拍，零“毛孔/退几步”混入国漫）。",
      "第一帧直接开打防漏图：开场直接描述两人三步之内近身交手位置。"
    ],
    "directorMethod": "使用 stylized-vs-photoreal-combat-prompts 与 four-questions-combat-exchange-prompts --lint 零报错预检，双卡并行投产。"
  },
  "pipeline": [
    {
      "stage": "① 中国历史文化图库考证",
      "tool": "jintai-history-image-library + MOSS-Image",
      "note": "人工拦截双头刀错画，严保两米长单头宽刃厚背陌刀形制。"
    },
    {
      "stage": "② 双 Skill 反相提示词 --lint",
      "tool": "build_combat_prompt + build_four_questions",
      "note": "issue_count=0 双双静态审计通过。"
    },
    {
      "stage": "③ A 机双 H100 并发武打生成",
      "tool": ":8191 & :8193 SelfLift 12步 + @四只兔子",
      "note": "272.81s 墙钟时间同步出片，0 音频报错。"
    }
  ],
  "characters": [
    {
      "id": "CHR-REAL-1",
      "name": "真人明光铠校尉",
      "role": "HL-TANG-CO-0004 攻方",
      "look": "铁兜鍪红缨、双圆护、兽头披膊、两米单头陌刀。",
      "image": "media/img-f6600a2616499ba3a056.png",
      "uses": 2
    },
    {
      "id": "CHR-REAL-2",
      "name": "灰甲圆盾戍卒",
      "role": "受力退三步崩防方",
      "look": "灰甲装束双手死扛包铁圆木盾。",
      "image": "media/img-a07bfdde55672221b35a.png",
      "uses": 2
    },
    {
      "id": "CHR-3D-1",
      "name": "3D 国漫银鳞明光铠武将",
      "role": "轨道 A 英雄核心",
      "look": "银白战甲搭鲜红 S 形高张力长披风。",
      "image": "media/img-3c4cbd2a34b2a027a464.png",
      "uses": 2
    }
  ],
  "props": [
    {
      "id": "QC-DUAL",
      "name": "双轨反着写与四问因果逐帧检视板",
      "desc": "逐帧检验劈盾时刻火星木屑、退三步砂砾土浪与国漫 S 形定格。",
      "image": "media/img-e640dc1d164c573152da.jpg"
    }
  ],
  "shots": [
    {
      "id": "S01",
      "title": "00 · 双轨对照总览（真人写受力 × 3D 国漫写招式）",
      "start": 0,
      "duration": 10.35,
      "framing": "1664×928 @ 24fps 串烧总览",
      "camera": "同源历史母题双轨比对",
      "action": "先放轨道 B 真人写实受力与连退三步崩防，紧接轨道 A 3D 国漫 45° 凌空俯冲斜劈与 180° 半圆弧轨迹定格。",
      "prompt": "",
      "refs": [
        {
          "label": "双轨对照逐帧检视板",
          "src": "media/img-e640dc1d164c573152da.jpg"
        }
      ],
      "video": "https://github.com/aikingtai-ctrl/jintai-film-showcase/releases/download/media-v1/tang-modao-dual-combat-10s--dba073b7eaf42f3a45f8.mp4",
      "thumb": "media/img-3f802681d5591e947095.jpg",
      "model": "SelfLift 6+6=12步 + @四只兔子 武打四件套",
      "params": "1664×928 @ 24fps · 10.35s",
      "status": "已生成"
    },
    {
      "id": "S02",
      "title": "01 · 轨道 B｜真人写实 · 四问四句因果链（陌刀劈盾退三步崩防）",
      "start": 0,
      "duration": 5.167,
      "framing": "阿莱 35mm 胶片侧面低机位手持跟拍",
      "camera": "第 1 帧双人三步对峙 · 无声闭唇角力",
      "action": "V2 精修消除 0.1s 漏参考图与伪台词：严格闭合①校尉重劈→②劈中包铁木盾炸屑火星→③戍卒连退三步犁开黄土→④仰面砸地再没站起来。",
      "prompt": "",
      "refs": [
        {
          "label": "图库考证明光铠校尉母图",
          "src": "media/img-f6600a2616499ba3a056.png"
        }
      ],
      "video": "https://github.com/aikingtai-ctrl/jintai-film-showcase/releases/download/media-v1/tang-modao-dual-combat-10s--408f193c9cdb55b9ae01.mp4",
      "thumb": "media/img-c896e460775a7d6ac212.jpg",
      "model": "SelfLift 12步 · Port 8191 (272.7s)",
      "params": "1664×928 @ 24fps · 124 帧 · 5.167s",
      "status": "已生成 (V2定稿)"
    },
    {
      "id": "S03",
      "title": "02 · 轨道 A｜3D 国漫 · 反相写招式（45°俯冲 + 180°轨迹 + 英雄定格）",
      "start": 0,
      "duration": 5.167,
      "framing": "3D 国漫 CG 高精轮廓体积光",
      "camera": "低机位广角仰拍收招对角线构图",
      "action": "银鳞明光铠与鲜红披风青年武将 45° 凌空斜劈，180° 半圆挥刀破盾与 S 形披风反展，低机位仰拍英雄定格收招。",
      "prompt": "",
      "refs": [
        {
          "label": "3D国漫银鳞明光铠武将母图",
          "src": "media/img-3c4cbd2a34b2a027a464.png"
        }
      ],
      "video": "https://github.com/aikingtai-ctrl/jintai-film-showcase/releases/download/media-v1/tang-modao-dual-combat-10s--0cd546c28a414720709b.mp4",
      "thumb": "media/img-dde8dd58235c524f43b2.jpg",
      "model": "SelfLift 12步 · Port 8193 (264.2s)",
      "params": "1664×928 @ 24fps · 124 帧 · 5.167s",
      "status": "已生成"
    }
  ],
  "generation": {
    "model": "FeiHou H3 SelfLift 12 步 + @四只兔子 武打四件套",
    "params": [
      {
        "k": "双卡耗时",
        "v": "8191 (272.7s) & 8193 (264.2s) · 总墙钟 272.81s"
      },
      {
        "k": "音频护航",
        "v": "-5 dB 防削波 · 32kHz 立体声 · 零伪台词"
      },
      {
        "k": "总览规格",
        "v": "1664×928 @ 24fps · 124 帧单条"
      }
    ],
    "notes": [
      "完整保留双 Skill 生产提示词对照文本。"
    ]
  },
  "deliverables": [
    {
      "name": "00_双轨对照总览_真人写实写受力_vs_3D国漫写招式.mp4",
      "src": "https://github.com/aikingtai-ctrl/jintai-film-showcase/releases/download/media-v1/tang-modao-dual-combat-10s--2cf60c500b729a2e29b6.mp4",
      "note": "10.35s · 14.42 MB"
    },
    {
      "name": "01_真人写实_四问因果链_陌刀劈盾退三步崩防_1080P.mp4",
      "src": "https://github.com/aikingtai-ctrl/jintai-film-showcase/releases/download/media-v1/tang-modao-dual-combat-10s--408f193c9cdb55b9ae01.mp4",
      "note": "5.17s · 轨道 B 真人写实"
    },
    {
      "name": "02_3D国漫_反相写招式_角度轨迹英雄定格_1080P.mp4",
      "src": "https://github.com/aikingtai-ctrl/jintai-film-showcase/releases/download/media-v1/tang-modao-dual-combat-10s--0cd546c28a414720709b.mp4",
      "note": "5.17s · 轨道 A 3D 国漫"
    },
    {
      "name": "03_双轨反着写与四问因果逐帧检视板.jpg",
      "src": "media/img-e640dc1d164c573152da.jpg",
      "note": "逐帧对照检视板"
    }
  ]
});
