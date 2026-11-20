window.registerProject({
  "id": "no-rush-prompts-part2",
  "title": "别急着写提示词（下）",
  "subtitle": "金泰工作流入门课 · 师生对话讲解片 · EP01 下集（SC05–SC07 补齐镜）",
  "logline": "一个三天跑了 812 条废片的学生，被冷面老师拉着把整条前期流水线从头走到尾：十个阶段、六道人工门、三份母版、返工归因，以及它的最终目的——任何一个失败镜头，几分钟内能追溯。",
  "date": "2026-09-07",
  "tags": [
    "教学 + 喜剧",
    "师生对话",
    "AI Video Canvas",
    "画布 239"
  ],
  "model": "Seedance 2.5（即梦 multimodal2video，画布节点投放）",
  "modelShort": "Seedance 2.5",
  "poster": "media/img-72961e3e05a348d00c0a.jpg",
  "film": {},
  "meta": {
    "shots": 30,
    "generated": 30,
    "durationSec": 254,
    "resolution": "1280×720",
    "fps": 24,
    "aspect": "16:9",
    "style": "全片对白、字幕、画面文字一律只称「执行助手 / 自动执行」，不出现任何具体工具名。角色禁漂移：金老师=灰白鬓角+深蓝工装+红章；小跃=双肩包+贴纸电脑；小助=圆头方身+蓝光轨+胸屏≤4字。红门在无盖章动作时不得自行升起；金句字卡版式全片统一。"
  },
  "synopsis": [
    "上排五站（P0 立项→P4 导演设计）：项目名从《大明风云》改到《真·终版勿删》；「沈三刀是个酒蒙子」是读后感不是事实；删戏全凭手感会被后面每一站讨债；「高级感 / 电影感 / 氛围感」被系统弹回「形容词堆积」。母版陈列室里，八个长得各不相同的「同一主角」贴在耻辱墙上。",
    "下排五站（P5 资产→P9 质检）：帅镜头滑进 99_archive，一镜一页十几个字段，双引用治「人对景错、景对人漂」，落雁客栈变便利店。第六道门：六项硬标准全满足，装箱。出了问题怎么办？先归因，再动手；技术坏片重跑，输入一个字都不许动。「八百一十四了，刚才来的路上我又跑了两条。」"
  ],
  "concept": {
    "rules": [
      "把抽象流程翻译成看得见的空间：阶段是工位，门是真门，母版是玻璃柜，归档是滑梯。",
      "全片只称「执行助手 / 自动执行」，零工具名、零模型名、零供应商名（用户硬约束）。",
      "12 个笑点每个都挂知识点，无闲笔；每场末尾一块「本幕知识点」绿框。",
      "喜剧靠人物和情境，不靠贬低任何一方；金老师永远不笑，小助永远不发表意见。"
    ],
    "directorMethod": "师生一问一答 + 车间实景走线：观众跟着「812 条废片侠」把整条线走一遍。双引用分镜（每镜 @角色 + @场景，道具按需），静动分写（首帧提示词只描述第一格，动态提示词只描述随后发生的动作），四轨声音（对白 / 环境 / 效果 / 音乐）挂完整镜号。上集覆盖 SC01–SC06 及 SC07 的前几镜。",
    "structure": [
      {
        "label": "SC01 序幕 · 812 条废片",
        "tc": "7 镜 / 42 s",
        "note": "痛点钩子：没有流程的下场。"
      },
      {
        "label": "SC02 第一幕 · 终点不是成片",
        "tc": "15 镜 / 126 s",
        "note": "一句话定义 / 顺序不可倒置 / 三母版 / 机器做多人做对 / 小助登场。"
      },
      {
        "label": "SC03 第二幕 · 上排五站",
        "tc": "18 镜 / 149 s",
        "note": "P0 三字段 / P1 事实卡+G1 / P2 改编理由 / P3 六问+G2 / P4 规则非形容词+G3。"
      },
      {
        "label": "SC04 第三幕(上) · 母版陈列室",
        "tc": "10 镜 / 85 s",
        "note": "P5 母版+编号+G4；八个分身开家族会议。"
      },
      {
        "label": "SC05 第三幕(下) · 从分镜到装箱",
        "tc": "16 镜 / 144 s",
        "note": "P6 叙事功能+静动分写 / P7 双引用+G5 / P8 生成包 / P9 质检+G6。"
      },
      {
        "label": "SC06 第四幕 · 出事了怎么办",
        "tc": "8 镜 / 78 s",
        "note": "返工归因表 / 技术坏片输入不变 / P10–P11 与片级红线。"
      },
      {
        "label": "SC07 尾声 · 最终目的 + 彩蛋",
        "tc": "10 镜 / 86 s",
        "note": "唯一衡量标准：分钟级追溯。上集只生成了前 3 镜。"
      }
    ]
  },
  "pipeline": [
    {
      "stage": "① 剧本设定稿 v1.0",
      "tool": "执行助手 · 剧本工坊",
      "note": "由《金泰工作流·全流程详解 v1.1》改编成师生对话讲解片：影片定位 / 三张角色卡 / 两个场景 / 剧情结构 / 完整台词本。"
    },
    {
      "stage": "② 一镜一页分镜（P6 + P8 雏形）",
      "tool": "docx 分镜表（84 镜）",
      "note": "每镜：叙事功能 / 景别机位运动 / 双@引用 / 首帧提示词(静) / 动态提示词(动) / 四轨声音 / 光源动机 / 连续性 / 禁止项。"
    },
    {
      "stage": "③ 角色与场景参考图",
      "tool": "图像模型 + 画布角色节点",
      "note": "画布上 12 个参考节点：3 个人物、2 个场景、7 个道具（章、金箱、事实卡、平板、挂图、分镜卡组等），按镜连线绑定。"
    },
    {
      "stage": "④ 画布逐镜建节点",
      "tool": "AI Video Canvas · 画布 228",
      "note": "77 个「视频生成」节点，提示词原样贴入分镜页文本，参考图槽位按 @引用 绑定（角色1/2/3 = 参考图1/2/3）。"
    },
    {
      "stage": "⑤ 视频生成",
      "tool": "Seedance 2.5（即梦 multimodal2video）为主",
      "note": "1280×720，每条 3–19 s 按分镜时长；个别镜头试投 Kling v3 turbo / Veo 3.1 / MiniMax H3 做对比。"
    },
    {
      "stage": "⑥ 复盘与下集",
      "tool": "二次创作工作台",
      "note": "上集已出 73 镜画面；SC01-SH02、SC06-SH07 之外、SC07 后 7 镜待下集补齐后按镜头表装配成片。"
    }
  ],
  "characters": [
    {
      "id": "CH001",
      "name": "金老师",
      "kind": "人物",
      "image": "media/img-835d7841e330c07041bb.png",
      "uses": 16,
      "nodeId": "6PdiUnwnRBVGB48Ry7B-v",
      "audio": "",
      "role": "前期车间负责人 · 50 多岁 · 老制片人出身",
      "look": "灰白鬓角，深蓝工装外套，胸前口袋插一支红笔；右手永远拿着（或摸得到）一枚红色批准章。",
      "voiceZh": "不慌、不吼、不解释两遍。冷面捧哏，所有笑点由他一句平静的反问引爆，自己永远不笑。口头禅：「机器做多，人做对。」「先归因，再动手。」",
      "locks": [
        "批准章不离身",
        "从不亲手替执行助手干活",
        "从不在门前让步",
        "全片单套造型 CO01"
      ]
    },
    {
      "id": "CH002",
      "name": "毛小跃",
      "kind": "人物",
      "image": "media/img-cc3ce59b7fc64dd405fa.png",
      "uses": 14,
      "nodeId": "rYpUVGoYt3WqMOBIusjTC",
      "role": "学生 · 20 出头 · AI 短片爱好者",
      "look": "双肩包 + 贴满贴纸的笔记本电脑，袖子永远挽着；走路带小跑，说话比脑子快半拍。暖橘卫衣。",
      "voiceZh": "热情、手快、想跳步。每个错误示范都由他真诚地犯一遍。口头禅（前期）「直接跑不就完了吗！」→（片尾）「先过门。」",
      "locks": [
        "812 条废片是全片的悬念与还愿",
        "成长弧必须完成翻转：从废片侠到主动说出「先过门」",
        "缩略图不得清晰可辨"
      ]
    },
    {
      "id": "CH003",
      "name": "执行助手「小助」",
      "kind": "人物",
      "image": "media/img-166cd3d72f9ffc01e319.png",
      "uses": 4,
      "nodeId": "uYLTLC1bSnZV_2NcBBuVL",
      "role": "车间自动化系统的拟人形象 · 悬浮机器人",
      "look": "圆头方身，胸口一块小屏只显示状态短句；移动时拖一道浅蓝光轨；手速快到出残影。",
      "voiceZh": "话极少，只说四个字以内的状态句（「已就绪。」「等待批准。」「检测异常。」）。",
      "locks": [
        "永远不过未批准的门",
        "永远不发表意见",
        "胸口屏文字永远 ≤ 4 个字",
        "被怂恿绕门时弹红色警告或原地关机装死"
      ]
    }
  ],
  "sceneCards": [
    {
      "id": "LOC001",
      "name": "金泰前期车间",
      "kind": "场景",
      "image": "media/img-72ee66ce6d51657a311d.png",
      "uses": 29,
      "nodeId": "zwTON8QrEyC5u5g7Jq3eF",
      "desc": "改造过的厂房教室，中央一条发光传送带呈 U 形：上排 P0→P4，下排 P5→P9，线尾是交付口。沿线十个工位岛台各挂灯牌；六道红色闸门横跨传送带，每道门正中一个章印凹槽。侧墙目录货架墙 00_project…10_delivery，尽头金属滑梯挂牌 99_archive。线尾红绿灯柱 + 质检大屏 + 金色箱子。",
      "rules": [
        "白天顶部天窗自然光 + 工位射灯；尾声只留线尾一束顶光打在金箱上",
        "墙面三块大牌：内容母版 / 视觉资产母版 / 镜头数据母版",
        "状态：日 / 暮 / 夜，不新建场景",
        "禁止：门外可辨认现代街景、招牌文字、可读工具名"
      ]
    },
    {
      "id": "LOC002",
      "name": "母版陈列室",
      "kind": "场景",
      "image": "media/img-74b0ad288248e7521ec0.png",
      "uses": 0,
      "nodeId": "i0mIR0sqKuVudrbG7WGfJ",
      "desc": "博物馆式侧厅，一排玻璃展柜：CH004 沈三刀多角度立像、LOC012 落雁客栈模型、CH004-CO02 风雪夜行装、PR008 断柄短刀。柜门带锁，一旦盖章上锁永不再开；资产要改，旁边自动滑出 v2 新柜。柜前地面三条色带 working → review → approved。",
      "rules": [
        "展柜射灯，肃穆偏冷，与车间的热闹形成反差",
        "耻辱墙贴着 8 张长得各不相同的「同一个主角」",
        "柜签与内容一一对应"
      ]
    }
  ],
  "props": [
    {
      "id": "PR001",
      "name": "红色批准章 / 红门",
      "kind": "道具",
      "image": "media/img-f05bff96875599829654.png",
      "uses": 3,
      "nodeId": "ePzFfe5HLzbcFJySpjOKI"
    },
    {
      "id": "PR002",
      "name": "金色就绪包箱",
      "kind": "道具",
      "image": "media/img-55434ec1351087c4e66a.png",
      "uses": 3,
      "nodeId": "jXizX7_PmGd7dDgTsbrO2"
    },
    {
      "id": "PR003",
      "name": "序幕参考（外景/贴纸电脑）",
      "kind": "道具",
      "image": "media/img-9f0c452abcb2ce0f8516.png",
      "uses": 0,
      "nodeId": "37pGZk49Tfxe0pbkyEgkD"
    },
    {
      "id": "PR004",
      "name": "事实卡样卡 SRC-044",
      "kind": "道具",
      "image": "media/img-b6c293af74a5fe938f59.png",
      "uses": 0,
      "nodeId": "zC7ZhmdxXyjCoNYXStSgY"
    },
    {
      "id": "PR005",
      "name": "导演阐述平板",
      "kind": "道具",
      "image": "media/img-536a0d8d7c4c2957a7cf.png",
      "uses": 0,
      "nodeId": "yzkbV5d5w59T9Qgh4vvkx"
    },
    {
      "id": "PR007",
      "name": "分镜卡组",
      "kind": "道具",
      "image": "media/img-22c2c1092fc5455762a0.png",
      "uses": 0,
      "nodeId": "FM3XalfdxgUJwJQbgTrG3"
    }
  ],
  "docs": [],
  "look": {
    "name": "LOOK · 车间纪实 × 冷面喜剧",
    "palette": [
      {
        "name": "车间深蓝",
        "hex": "#1e3350"
      },
      {
        "name": "工装蓝",
        "hex": "#2b4a7a"
      },
      {
        "name": "批准章红",
        "hex": "#c8262b"
      },
      {
        "name": "暖橘卫衣",
        "hex": "#e5842f"
      },
      {
        "name": "小助浅蓝光轨",
        "hex": "#6fc3ff"
      },
      {
        "name": "就绪包金",
        "hex": "#c9a44c"
      }
    ],
    "items": [
      {
        "label": "镜头语法",
        "text": "以中景 / 正反打 / 近景为主，工位镜配特写插入（字段牌、事实卡、六问牌、挂图）；过门仪式六次复用同一节奏：章「咚」→ 红门液压升起 → 小助小碎步过门。"
      },
      {
        "label": "光源动机",
        "text": "序幕夜景只有桌面工作灯 + 屏光；SC02 起天窗光 + 工位射灯；红门灯带过门一瞬转绿；尾声顶光单源罩金箱。"
      },
      {
        "label": "字卡",
        "text": "金句上大字卡，版式全片统一：「顺序不可倒置」「机器做多，人做对」「严的不是人，是账」「零」。"
      },
      {
        "label": "声音",
        "text": "四轨：对白 AU01 / 环境 AU02 / 效果 AU03 / 音乐 AU04；效果音做喜剧节拍（「啵」×8、木鱼一声、静场一拍）。"
      },
      {
        "label": "禁止漂移",
        "text": "画面不得出现任何具体工具名 / 模型名 / 供应商名文字；角色三人造型固定；红门无盖章不升。"
      }
    ]
  },
  "sequences": [
    {
      "title": "第 1–10 镜",
      "sceneTag": "",
      "shots": [
        "S01",
        "S02",
        "S03",
        "S04",
        "S05",
        "S06",
        "S07",
        "S08",
        "S09",
        "S10"
      ]
    },
    {
      "title": "第 11–20 镜",
      "sceneTag": "",
      "shots": [
        "S11",
        "S12",
        "S13",
        "S14",
        "S15",
        "S16",
        "S17",
        "S18",
        "S19",
        "S20"
      ]
    },
    {
      "title": "第 21–30 镜",
      "sceneTag": "",
      "shots": [
        "S21",
        "S22",
        "S23",
        "S24",
        "S25",
        "S26",
        "S27",
        "S28",
        "S29",
        "S30"
      ]
    }
  ],
  "shots": [
    {
      "id": "S01",
      "title": "视频生成 #55",
      "start": 0,
      "duration": 10,
      "framing": "分屏示意插入",
      "camera": "",
      "lighting": "图形化示意",
      "cast": [
        "CH001(画外)",
        "LOC001(日)"
      ],
      "sceneTag": "@CH001(画外) + @LOC001(日)",
      "action": "分屏:左半「首帧(静)」一张定格构图纸,右半「动态(动)」一张箭头运动纸。 → 两纸先被合成一张(叠成乱码,警示红),再分开(恢复清晰,确认绿)。",
      "picture": "",
      "dialogue": [
        {
          "who": "金老师,画外",
          "text": "还有一条背下来:首帧静态和动态变化,分开写。一张纸说清“第一格长什么样"
        }
      ],
      "dialogueText": "对白AU01(金老师,画外):「还有一条背下来:首帧静态和动态变化,分开写。一张纸说清“第一格长什么样”,另一张纸说清“接下来动什么”。混在一起写,生成的时候两头都不听你的。」",
      "sound": "",
      "notes": "示意用图形不用真实生成画面(另见场级/全片通用禁止项)",
      "firstFramePrompt": "",
      "prompt": "景别 · 机位 · 运动\t分屏示意插入\n引用(双@)\t@CH001(画外) + @LOC001(日)\n首帧提示词(静)\t分屏:左半「首帧(静)」一张定格构图纸,右半「动态(动)」一张箭头运动纸。\n动态提示词(动)\t两纸先被合成一张(叠成乱码,警示红),再分开(恢复清晰,确认绿)。\n台词与声音(AU01–AU04)\t对白AU01(金老师,画外):「还有一条背下来:首帧静态和动态变化,分开写。一张纸说清“第一格长什么样”,另一张纸说清“接下来动什么”。混在一起写,生成的时候两头都不听你的。」\n光源动机\t图形化示意\n前后连续性\t—\n禁止发生\t示意用图形不用真实生成画面(另见场级/全片通用禁止项)\n",
      "refs": [
        {
          "label": "LOC001 金泰前期车间",
          "src": "media/img-72ee66ce6d51657a311d.png"
        },
        {
          "label": "CH001 金老师",
          "src": "media/img-835d7841e330c07041bb.png"
        }
      ],
      "video": "https://github.com/aikingtai-ctrl/jintai-film-showcase/releases/download/media-v1/no-rush-prompts-part2--29a6192765d632cff41d.mp4",
      "thumb": "media/img-72961e3e05a348d00c0a.jpg",
      "model": "seedance2.5",
      "params": "10s · seedance2.5 · jimeng_multimodal2video",
      "status": "已生成",
      "alts": [],
      "take": "视频生成 #55"
    },
    {
      "id": "S02",
      "title": "视频生成 #56",
      "start": 10,
      "duration": 8,
      "framing": "中景 · P7大屏",
      "camera": "",
      "lighting": "屏光",
      "cast": [
        "CH003",
        "LOC001(日)"
      ],
      "sceneTag": "@CH003 + @LOC001(日)",
      "action": "P7大屏,关键帧成排生成,每帧下一行引用「@CH004 + @LOC012 + @CH004-CO02」;@CH003 在屏侧递帧。 → 镜头缓推向引用行。",
      "picture": "",
      "dialogue": [
        {
          "who": "金老师,画外",
          "text": "第七站,关键帧。首帧、必要的尾帧、主视觉、空镜。注意这行字——双引用:人物和场景,同时引用。"
        }
      ],
      "dialogueText": "对白AU01(金老师,画外):「第七站,关键帧。首帧、必要的尾帧、主视觉、空镜。注意这行字——双引用:人物和场景,同时引用。」",
      "sound": "",
      "notes": "屏上引用行格式统一(另见场级/全片通用禁止项)",
      "firstFramePrompt": "",
      "prompt": "景别 · 机位 · 运动\t中景 · P7大屏\n引用(双@)\t@CH003 + @LOC001(日)\n首帧提示词(静)\tP7大屏,关键帧成排生成,每帧下一行引用「@CH004 + @LOC012 + @CH004-CO02」;@CH003 在屏侧递帧。\n动态提示词(动)\t镜头缓推向引用行。\n台词与声音(AU01–AU04)\t对白AU01(金老师,画外):「第七站,关键帧。首帧、必要的尾帧、主视觉、空镜。注意这行字——双引用:人物和场景,同时引用。」\n光源动机\t屏光\n前后连续性\t—\n禁止发生\t屏上引用行格式统一(另见场级/全片通用禁止项)\n",
      "refs": [
        {
          "label": "CH003 执行助手「小助」",
          "src": "media/img-166cd3d72f9ffc01e319.png"
        },
        {
          "label": "LOC001 金泰前期车间",
          "src": "media/img-72ee66ce6d51657a311d.png"
        }
      ],
      "video": "https://github.com/aikingtai-ctrl/jintai-film-showcase/releases/download/media-v1/no-rush-prompts-part2--00a0d984451e291dc4c0.mp4",
      "thumb": "media/img-d953b5a3827ad77f34fb.jpg",
      "model": "seedance2.0fast_vip",
      "params": "8s · seedance2.0fast_vip · jimeng_multimodal2video",
      "status": "已生成",
      "alts": [],
      "take": "视频生成 #56"
    },
    {
      "id": "S03",
      "title": "视频生成 #57",
      "start": 18,
      "duration": 4,
      "framing": "近景",
      "camera": "",
      "lighting": "同场",
      "cast": [
        "CH002",
        "LOC001(日)"
      ],
      "sceneTag": "@CH002 + @LOC001(日)",
      "action": "小跃盯屏。 → 回头问@。",
      "picture": "",
      "dialogue": [
        {
          "who": "小跃",
          "text": "只引用人物,会怎么样?"
        }
      ],
      "dialogueText": "对白AU01(小跃):「只引用人物,会怎么样?」",
      "sound": "",
      "notes": "—(见场   级/全片通用禁止项)",
      "firstFramePrompt": "",
      "prompt": "景别 · 机位 · 运动\t近景\n引用(双@)\t@CH002 + @LOC001(日)\n首帧提示词(静)\t小跃盯屏。\n动态提示词(动)\t回头问@。\n台词与声音(AU01–AU04)\t对白AU01(小跃):「只引用人物,会怎么样?」\n光源动机\t同场\n前后连续性\t—\n禁止发生\t—(见场   级/全片通用禁止项)\n",
      "refs": [
        {
          "label": "CH002 毛小跃",
          "src": "media/img-cc3ce59b7fc64dd405fa.png"
        },
        {
          "label": "LOC001 金泰前期车间",
          "src": "media/img-72ee66ce6d51657a311d.png"
        }
      ],
      "video": "https://github.com/aikingtai-ctrl/jintai-film-showcase/releases/download/media-v1/no-rush-prompts-part2--7688b61d094347e183d0.mp4",
      "thumb": "media/img-49471a334062ca756c9d.jpg",
      "model": "seedance2.5",
      "params": "4s · seedance2.5 · jimeng_multimodal2video",
      "status": "已生成",
      "alts": [],
      "take": "视频生成 #57"
    },
    {
      "id": "S04",
      "title": "视频生成 #58",
      "start": 22,
      "duration": 8,
      "framing": "屏幕特写 · 对比图",
      "camera": "",
      "lighting": "屏光",
      "cast": [
        "LOC001(日)"
      ],
      "sceneTag": "@LOC001(日)",
      "action": "对比图左:人对景对(图左为落雁客栈);右:人对,背景是灯火通明的便利店。 → 右图缓慢放大到便利店货架细节。",
      "picture": "",
      "dialogue": [
        {
          "who": "金老师,画外",
          "text": "人是对的。背景的落雁客栈,变成了便利店。"
        }
      ],
      "dialogueText": "对白AU01(金老师,画外):「人是对的。背景的落雁客栈,变成了便利店。」",
      "sound": "效果AU03:便利店门铃“叮咚”",
      "notes": "便利店无真实品牌标识(另见场级/全片通用禁止项)",
      "firstFramePrompt": "",
      "prompt": "景别 · 机位 · 运动\t屏幕特写 · 对比图\n引用(双@)\t@LOC001(日)\n首帧提示词(静)\t对比图左:人对景对(图左为落雁客栈);右:人对,背景是灯火通明的便利店。\n动态提示词(动)\t右图缓慢放大到便利店货架细节。\n台词与声音(AU01–AU04)\t对白AU01(金老师,画外):「人是对的。背景的落雁客栈,变成了便利店。」\n效果AU03:便利店门铃“叮咚”\n光源动机\t屏光\n前后连续性\t—\n禁止发生\t便利店无真实品牌标识(另见场级/全片通用禁止项)\n",
      "refs": [
        {
          "label": "LOC001 金泰前期车间",
          "src": "media/img-72ee66ce6d51657a311d.png"
        }
      ],
      "video": "https://github.com/aikingtai-ctrl/jintai-film-showcase/releases/download/media-v1/no-rush-prompts-part2--545e1b82dd30b95687f1.mp4",
      "thumb": "media/img-e0079a00c6d38a8a96c5.jpg",
      "model": "seedance2.5",
      "params": "8s · seedance2.5 · 480p · jimeng_multimodal2video",
      "status": "已生成",
      "alts": [],
      "take": "视频生成 #58"
    },
    {
      "id": "S05",
      "title": "视频生成 #60",
      "start": 30,
      "duration": 10,
      "framing": "全景 · P8",
      "camera": "",
      "lighting": "蓝光残影",
      "cast": [
        "CH003",
        "LOC001(日)"
      ],
      "sceneTag": "@CH003 + @LOC001(日)",
      "action": "P8大屏滚动四张表:首帧提示词表 / 动态提示词表 / 引用清单 / 批次任务清单(JOB-EP01-0001…)。 → @CH003 高速穿梭编表,残影连成一片蓝雾。",
      "picture": "",
      "dialogue": [
        {
          "who": "金老师,画外",
          "text": "第八站,生成包整理,全自动。硬规则两条:每个任务只引用approved里的已批准母版;提示词里不粘贴整段人物描述,只用稳定引用。"
        }
      ],
      "dialogueText": "对白AU01(金老师,画外):「第八站,生成包整理,全自动。硬规则两条:每个任务只引用approved里的已批准母版;提示词里不粘贴整段人物描述,只用稳定引用。」",
      "sound": "效果AU03:键入声浪",
      "notes": "表内示例编号合规(另见场级/全片通用禁止项)",
      "firstFramePrompt": "",
      "prompt": "景别 · 机位 · 运动\t全景 · P8\n引用(双@)\t@CH003 + @LOC001(日)\n首帧提示词(静)\tP8大屏滚动四张表:首帧提示词表 / 动态提示词表 / 引用清单 / 批次任务清单(JOB-EP01-0001…)。\n动态提示词(动)\t@CH003 高速穿梭编表,残影连成一片蓝雾。\n台词与声音(AU01–AU04)\t对白AU01(金老师,画外):「第八站,生成包整理,全自动。硬规则两条:每个任务只引用approved里的已批准母版;提示词里不粘贴整段人物描述,只用稳定引用。」\n效果AU03:键入声浪\n光源动机\t蓝光残影\n前后连续性\t—\n禁止发生\t表内示例编号合规(另见场级/全片通用禁止项)\n",
      "refs": [
        {
          "label": "LOC001 金泰前期车间",
          "src": "media/img-72ee66ce6d51657a311d.png"
        },
        {
          "label": "CH003 执行助手「小助」",
          "src": "media/img-166cd3d72f9ffc01e319.png"
        }
      ],
      "video": "https://github.com/aikingtai-ctrl/jintai-film-showcase/releases/download/media-v1/no-rush-prompts-part2--78436f10c6fc695ea700.mp4",
      "thumb": "media/img-01c669c9b023661933e2.jpg",
      "model": "seedance2.5",
      "params": "10s · seedance2.5 · jimeng_multimodal2video",
      "status": "已生成",
      "alts": [],
      "take": "视频生成 #60"
    },
    {
      "id": "S06",
      "title": "视频生成 #61",
      "start": 40,
      "duration": 8,
      "framing": "双人正反打",
      "camera": "",
      "lighting": "同场",
      "cast": [
        "CH001",
        "CH002",
        "LOC001(日)"
      ],
      "sceneTag": "@CH001 + @CH002 + @LOC001(日)",
      "action": "正反打。 → 小跃语速由快到停。",
      "picture": "",
      "dialogue": [
        {
          "who": "小跃",
          "text": "为什么不能粘贴?我以前都是整段人设复制进去的,三百字!"
        },
        {
          "who": "金老师",
          "text": "你粘的是第几版人设?"
        },
        {
          "who": "小跃",
          "text": "……记不清了。"
        }
      ],
      "dialogueText": "对白AU01(小跃):「为什么不能粘贴?我以前都是整段人设复制进去的,三百字!」(金老师):「你粘的是第几版人设?」(小跃):「……记不清了。」",
      "sound": "",
      "notes": "—(见场级/全片通用禁止项)",
      "firstFramePrompt": "",
      "prompt": "景别 · 机位 · 运动\t双人正反打\n引用(双@)\t@CH001 + @CH002 + @LOC001(日)\n首帧提示词(静)\t正反打。\n动态提示词(动)\t小跃语速由快到停。\n台词与声音(AU01–AU04)\t对白AU01(小跃):「为什么不能粘贴?我以前都是整段人设复制进去的,三百字!」(金老师):「你粘的是第几版人设?」(小跃):「……记不清了。」\n光源动机\t同场\n前后连续性\t—\n禁止发生\t—(见场级/全片通用禁止项)\n",
      "refs": [
        {
          "label": "LOC001 金泰前期车间",
          "src": "media/img-72ee66ce6d51657a311d.png"
        },
        {
          "label": "CH001 金老师",
          "src": "media/img-835d7841e330c07041bb.png"
        },
        {
          "label": "CH002 毛小跃",
          "src": "media/img-cc3ce59b7fc64dd405fa.png"
        }
      ],
      "video": "https://github.com/aikingtai-ctrl/jintai-film-showcase/releases/download/media-v1/no-rush-prompts-part2--7fd98bf9f660374a52b0.mp4",
      "thumb": "media/img-3e1c103e5f1bd0ec2a70.jpg",
      "model": "seedance2.5",
      "params": "8s · seedance2.5 · jimeng_multimodal2video",
      "status": "已生成",
      "alts": [],
      "take": "视频生成 #61"
    },
    {
      "id": "S07",
      "title": "视频生成 #62",
      "start": 48,
      "duration": 9,
      "framing": "近景",
      "camera": "",
      "lighting": "同场",
      "cast": [
        "CH001",
        "LOC001(日)"
      ],
      "sceneTag": "@CH001 + @LOC001(日)",
      "action": "老师正面近景。 → 一字一顿。",
      "picture": "",
      "dialogue": [
        {
          "who": "金老师",
          "text": "这就是为什么。母版一更新,引用跟着走;你粘贴的那段字,永远停在你复制它的那一刻。"
        }
      ],
      "dialogueText": "对白AU01(金老师):「这就是为什么。母版一更新,引用跟着走;你粘贴的那段字,永远停在你复制它的那一刻。」",
      "sound": "音乐AU04:低垫起",
      "notes": "—(见场级/全片通用禁止项)",
      "firstFramePrompt": "",
      "prompt": "景别 · 机位 · 运动\t近景\n引用(双@)\t@CH001 + @LOC001(日)\n首帧提示词(静)\t老师正面近景。\n动态提示词(动)\t一字一顿。\n台词与声音(AU01–AU04)\t对白AU01(金老师):「这就是为什么。母版一更新,引用跟着走;你粘贴的那段字,永远停在你复制它的那一刻。」\n音乐AU04:低垫起\n光源动机\t同场\n前后连续性\t—\n禁止发生\t—(见场级/全片通用禁止项)\n",
      "refs": [
        {
          "label": "CH001 金老师",
          "src": "media/img-835d7841e330c07041bb.png"
        },
        {
          "label": "LOC001 金泰前期车间",
          "src": "media/img-72ee66ce6d51657a311d.png"
        }
      ],
      "video": "https://github.com/aikingtai-ctrl/jintai-film-showcase/releases/download/media-v1/no-rush-prompts-part2--e376a270fc78b4b626d2.mp4",
      "thumb": "media/img-d0106d8a83aaf5a61be8.jpg",
      "model": "seedance2.5",
      "params": "9s · seedance2.5 · jimeng_multimodal2video",
      "status": "已生成",
      "alts": [],
      "take": "视频生成 #62"
    },
    {
      "id": "S08",
      "title": "视频生成 #63",
      "start": 57,
      "duration": 11,
      "framing": "全景 · 质检台",
      "camera": "",
      "lighting": "屏光",
      "cast": [
        "CH003",
        "LOC001(日)"
      ],
      "sceneTag": "@CH003 + @LOC001(日)",
      "action": "线尾质检台,大屏六项自检:文件 / 数据 / 图像 / 连续性 / 覆盖率 / 交付。 → 六项逐个翻绿;@CH003 立于屏侧机械小幅点头。",
      "picture": "",
      "dialogue": [
        {
          "who": "金老师,画外",
          "text": "第九站,就绪包质检。自动查缺:缺失、重复、引用失效、时间线空洞、命名版本错位……人工抽审:提示词和关键帧,还忠不忠于镜头意图,有没有绕过门的临时改动。"
        }
      ],
      "dialogueText": "对白AU01(金老师,画外):「第九站,就绪包质检。自动查缺:缺失、重复、引用失效、时间线空洞、命名版本错位……人工抽审:提示词和关键帧,还忠不忠于镜头意图,有没有绕过门的临时改动。」",
      "sound": "效果AU03:翻绿“叮”×6",
      "notes": "六项名称如上(另见场级/全片通用禁止项)",
      "firstFramePrompt": "",
      "prompt": "景别 · 机位 · 运动\t全景 · 质检台\n引用(双@)\t@CH003 + @LOC001(日)\n首帧提示词(静)\t线尾质检台,大屏六项自检:文件 / 数据 / 图像 / 连续性 / 覆盖率 / 交付。\n动态提示词(动)\t六项逐个翻绿;@CH003 立于屏侧机械小幅点头。\n台词与声音(AU01–AU04)\t对白AU01(金老师,画外):「第九站,就绪包质检。自动查缺:缺失、重复、引用失效、时间线空洞、命名版本错位……人工抽审:提示词和关键帧,还忠不忠于镜头意图,有没有绕过门的临时改动。」\n效果AU03:翻绿“叮”×6\n光源动机\t屏光\n前后连续性\t—\n禁止发生\t六项名称如上(另见场级/全片通用禁止项)\n",
      "refs": [
        {
          "label": "CH003 执行助手「小助」",
          "src": "media/img-166cd3d72f9ffc01e319.png"
        },
        {
          "label": "LOC001 金泰前期车间",
          "src": "media/img-72ee66ce6d51657a311d.png"
        }
      ],
      "video": "https://github.com/aikingtai-ctrl/jintai-film-showcase/releases/download/media-v1/no-rush-prompts-part2--0a13d1caafab297b7db4.mp4",
      "thumb": "media/img-9a7f5daa7505af317bbf.jpg",
      "model": "seedance2.5",
      "params": "11s · seedance2.5 · jimeng_multimodal2video",
      "status": "已生成",
      "alts": [],
      "take": "视频生成 #63"
    },
    {
      "id": "S09",
      "title": "视频生成 #64",
      "start": 68,
      "duration": 0,
      "framing": "近景",
      "camera": "",
      "lighting": "同场",
      "cast": [
        "CH002",
        "LOC001(日)"
      ],
      "sceneTag": "@CH002 + @LOC001(日)",
      "action": "小跃盯着全绿的屏。 → 试探地问。",
      "picture": "",
      "dialogue": [
        {
          "who": "小跃",
          "text": "那红线控制在几条以内,算过关?"
        }
      ],
      "dialogueText": "对白AU01(小跃):「那红线控制在几条以内,算过关?」",
      "sound": "",
      "notes": "—(见场级/全片通用禁止项)",
      "firstFramePrompt": "",
      "prompt": "景别 · 机位 · 运动\t近景\n引用(双@)\t@CH002 + @LOC001(日)\n首帧提示词(静)\t小跃盯着全绿的屏。\n动态提示词(动)\t试探地问。\n台词与声音(AU01–AU04)\t对白AU01(小跃):「那红线控制在几条以内,算过关?」\n光源动机\t同场\n前后连续性\t—\n禁止发生\t—(见场级/全片通用禁止项)\n",
      "refs": [
        {
          "label": "CH002 毛小跃",
          "src": "media/img-cc3ce59b7fc64dd405fa.png"
        },
        {
          "label": "LOC001 金泰前期车间",
          "src": "media/img-72ee66ce6d51657a311d.png"
        }
      ],
      "video": "https://github.com/aikingtai-ctrl/jintai-film-showcase/releases/download/media-v1/no-rush-prompts-part2--e72f2e3c61ec85d0b1e1.mp4",
      "thumb": "media/img-d02743e561dbbb253835.jpg",
      "model": "seedance2.5",
      "params": "seedance2.5 · jimeng_multimodal2video",
      "status": "已生成",
      "alts": [],
      "take": "视频生成 #64"
    },
    {
      "id": "S10",
      "title": "视频生成 #65",
      "start": 68,
      "duration": 15,
      "framing": "中景 + G6门 + 金箱",
      "camera": "",
      "lighting": "红门灯带+箱体高光",
      "cast": [
        "CH001",
        "LOC001(日)",
        "PR001",
        "PR002"
      ],
      "sceneTag": "@CH001 + @LOC001(日) + @PR001 + @PR002",
      "action": "老师立于G6门「G6 交付」前,金箱在门后。 → 「零」字停顿一拍,叠大字卡「零」;盖章,门升,逐项念六硬标准,尾音落在“装箱”。",
      "picture": "",
      "dialogue": [
        {
          "who": "金老师",
          "text": "零。不是“少"
        }
      ],
      "dialogueText": "对白AU01(金老师):「零。不是“少”,是“无”。第六道门:交付。六项硬标准全满足——镜头覆盖率百分之百,引用有效率百分之百,已批准关键帧覆盖率百分之百,每个任务四要素齐全,包级红线为零,六道门批准记录齐全——装箱。」",
      "sound": "效果AU03:章“咚”+升门 / 音乐AU04:推向小高潮",
      "notes": "连续性：过门仪式第6次(最隆重) 大字卡只一个“零”字(另见场级/全片通用禁止项)",
      "firstFramePrompt": "",
      "prompt": "景别 · 机位 · 运动\t中景 + G6门 + 金箱\n引用(双@)\t@CH001 + @LOC001(日) + @PR001 + @PR002\n首帧提示词(静)\t老师立于G6门「G6 交付」前,金箱在门后。\n动态提示词(动)\t「零」字停顿一拍,叠大字卡「零」;盖章,门升,逐项念六硬标准,尾音落在“装箱”。\n台词与声音(AU01–AU04)\t对白AU01(金老师):「零。不是“少”,是“无”。第六道门:交付。六项硬标准全满足——镜头覆盖率百分之百,引用有效率百分之百,已批准关键帧覆盖率百分之百,每个任务四要素齐全,包级红线为零,六道门批准记录齐全——装箱。」\n效果AU03:章“咚”+升门\n音乐AU04:推向小高潮\n光源动机\t红门灯带+箱体高光\n前后连续性\t过门仪式第6次(最隆重)\n禁止发生\t大字卡只一个“零”字(另见场级/全片通用禁止项)\n",
      "refs": [
        {
          "label": "PR002 金色就绪包箱",
          "src": "media/img-55434ec1351087c4e66a.png"
        },
        {
          "label": "CH001 金老师",
          "src": "media/img-835d7841e330c07041bb.png"
        },
        {
          "label": "PR001 红色批准章 / 红门",
          "src": "media/img-f05bff96875599829654.png"
        },
        {
          "label": "LOC001 金泰前期车间",
          "src": "media/img-72ee66ce6d51657a311d.png"
        }
      ],
      "video": "https://github.com/aikingtai-ctrl/jintai-film-showcase/releases/download/media-v1/no-rush-prompts-part2--84e9bf08137d2b39edfe.mp4",
      "thumb": "media/img-6dfe392b87ff86bbdf1c.jpg",
      "model": "seedance2.5",
      "params": "15s · seedance2.5 · jimeng_multimodal2video",
      "status": "已生成",
      "alts": [],
      "take": "视频生成 #65"
    },
    {
      "id": "S11",
      "title": "视频生成 #66",
      "start": 83,
      "duration": 7,
      "framing": "特写金箱合盖 → 拉开双人",
      "camera": "",
      "lighting": "同场",
      "cast": [
        "CH001",
        "CH002",
        "LOC001(日)",
        "PR002"
      ],
      "sceneTag": "@CH001 + @CH002 + @LOC001(日) + @PR002",
      "action": "金箱盖缓缓合上特写,锁扣「咔」。 → 拉开双人,小跃抬手要鼓掌,老师抬手止住;音乐骤停。",
      "picture": "",
      "dialogue": [
        {
          "who": "金老师",
          "text": "别急着感动。还没讲你最关心的事——出了问题,怎么办。"
        }
      ],
      "dialogueText": "对白AU01(金老师):「别急着感动。还没讲你最关心的事——出了问题,怎么办。」",
      "sound": "效果AU03:锁扣“咔” / 音乐AU04:骤停",
      "notes": "连续性：音乐骤停制造悬念接SC06 —(见场级/全片通用禁止项)",
      "firstFramePrompt": "",
      "prompt": "景别 · 机位 · 运动\t特写金箱合盖 → 拉开双人\n引用(双@)\t@CH001 + @CH002 + @LOC001(日) + @PR002\n首帧提示词(静)\t金箱盖缓缓合上特写,锁扣「咔」。\n动态提示词(动)\t拉开双人,小跃抬手要鼓掌,老师抬手止住;音乐骤停。\n台词与声音(AU01–AU04)\t对白AU01(金老师):「别急着感动。还没讲你最关心的事——出了问题,怎么办。」\n效果AU03:锁扣“咔”\n音乐AU04:骤停\n光源动机\t同场\n前后连续性\t音乐骤停制造悬念接SC06\n禁止发生\t—(见场级/全片通用禁止项)\n",
      "refs": [
        {
          "label": "CH002 毛小跃",
          "src": "media/img-cc3ce59b7fc64dd405fa.png"
        },
        {
          "label": "LOC001 金泰前期车间",
          "src": "media/img-72ee66ce6d51657a311d.png"
        },
        {
          "label": "PR002 金色就绪包箱",
          "src": "media/img-55434ec1351087c4e66a.png"
        },
        {
          "label": "CH001 金老师",
          "src": "media/img-835d7841e330c07041bb.png"
        }
      ],
      "video": "https://github.com/aikingtai-ctrl/jintai-film-showcase/releases/download/media-v1/no-rush-prompts-part2--b05183431b50a1c88a30.mp4",
      "thumb": "media/img-7c05c46426c22b16570e.jpg",
      "model": "seedance2.5",
      "params": "7s · seedance2.5 · jimeng_multimodal2video",
      "status": "已生成",
      "alts": [],
      "take": "视频生成 #66"
    },
    {
      "id": "S12",
      "title": "视频生成 #67",
      "start": 90,
      "duration": 0,
      "framing": "屏幕特写",
      "camera": "",
      "lighting": "屏光闪烁",
      "cast": [
        "LOC001(日)"
      ],
      "sceneTag": "@LOC001(日)",
      "action": "大屏播放一条坏片:武侠人物中景,画面正常。 → 第3秒人物面部明显崩坏、扭曲一拍,画面卡顿。",
      "picture": "",
      "dialogue": [],
      "dialogueText": "效果AU03:视频卡顿电流声",
      "sound": "环境AU02:静",
      "notes": "崩坏示意化(另见场级/全片通用禁止项)",
      "firstFramePrompt": "",
      "prompt": "景别 · 机位 · 运动\t屏幕特写\n引用(双@)\t@LOC001(日)\n首帧提示词(静)\t大屏播放一条坏片:武侠人物中景,画面正常。\n动态提示词(动)\t第3秒人物面部明显崩坏、扭曲一拍,画面卡顿。\n台词与声音(AU01–AU04)\t效果AU03:视频卡顿电流声\n环境AU02:静\n光源动机\t屏光闪烁\n前后连续性\t—\n禁止发生\t崩坏示意化(另见场级/全片通用禁止项)\n",
      "refs": [
        {
          "label": "LOC001 金泰前期车间",
          "src": "media/img-72ee66ce6d51657a311d.png"
        }
      ],
      "video": "https://github.com/aikingtai-ctrl/jintai-film-showcase/releases/download/media-v1/no-rush-prompts-part2--aa738fb30098e150979f.mp4",
      "thumb": "media/img-5a7c54010660bbcd9b54.jpg",
      "model": "seedance2.5",
      "params": "seedance2.5 · jimeng_multimodal2video",
      "status": "已生成",
      "alts": [],
      "take": "视频生成 #67"
    },
    {
      "id": "S13",
      "title": "视频生成 #68",
      "start": 90,
      "duration": 0,
      "framing": "近景",
      "camera": "",
      "lighting": "同场",
      "cast": [
        "CH002",
        "LOC001(日)"
      ],
      "sceneTag": "@CH002 + @LOC001(日)",
      "action": "小跃条件反射抢答。 → 手已比在半空。",
      "picture": "",
      "dialogue": [
        {
          "who": "小跃",
          "text": "重跑!换个种子再跑!跑十条,总有一条对!"
        }
      ],
      "dialogueText": "对白AU01(小跃):「重跑!换个种子再跑!跑十条,总有一条对!」",
      "sound": "",
      "notes": "—(见场级/全片通用禁止项)",
      "firstFramePrompt": "",
      "prompt": "景别 · 机位 · 运动\t近景\n引用(双@)\t@CH002 + @LOC001(日)\n首帧提示词(静)\t小跃条件反射抢答。\n动态提示词(动)\t手已比在半空。\n台词与声音(AU01–AU04)\t对白AU01(小跃):「重跑!换个种子再跑!跑十条,总有一条对!」\n光源动机\t同场\n前后连续性\t—\n禁止发生\t—(见场级/全片通用禁止项)\n",
      "refs": [
        {
          "label": "LOC001 金泰前期车间",
          "src": "media/img-72ee66ce6d51657a311d.png"
        },
        {
          "label": "CH002 毛小跃",
          "src": "media/img-cc3ce59b7fc64dd405fa.png"
        }
      ],
      "video": "https://github.com/aikingtai-ctrl/jintai-film-showcase/releases/download/media-v1/no-rush-prompts-part2--ed70a59f6775785b7177.mp4",
      "thumb": "media/img-b142f5cda0560de7d9f9.jpg",
      "model": "seedance2.5",
      "params": "seedance2.5 · jimeng_multimodal2video",
      "status": "已生成",
      "alts": [],
      "take": "视频生成 #68"
    },
    {
      "id": "S14",
      "title": "视频生成 #69",
      "start": 90,
      "duration": 9,
      "framing": "双人正反打",
      "camera": "",
      "lighting": "同场",
      "cast": [
        "CH001",
        "CH002",
        "LOC001(日)"
      ],
      "sceneTag": "@CH001 + @CH002 + @LOC001(日)",
      "action": "老师眼神不动。 → 小跃越说越小声。",
      "picture": "",
      "dialogue": [
        {
          "who": "金老师",
          "text": "你那八百一十二条,就是这么攒出来的吧。"
        },
        {
          "who": "小跃",
          "text": "……八百一十四了。刚才来的路上,我又跑了两条。"
        }
      ],
      "dialogueText": "对白AU01(金老师):「你那八百一十二条,就是这么攒出来的吧。」(小跃):「……八百一十四了。刚才来的路上,我又跑了两条。」",
      "sound": "效果AU03:静场一拍",
      "notes": "连续性：812→814,数字梗第二次递进 —(见场级/全片通用禁止项)",
      "firstFramePrompt": "",
      "prompt": "景别 · 机位 · 运动\t双人正反打\n引用(双@)\t@CH001 + @CH002 + @LOC001(日)\n首帧提示词(静)\t老师眼神不动。\n动态提示词(动)\t小跃越说越小声。\n台词与声音(AU01–AU04)\t对白AU01(金老师):「你那八百一十二条,就是这么攒出来的吧。」(小跃):「……八百一十四了。刚才来的路上,我又跑了两条。」\n效果AU03:静场一拍\n光源动机\t同场\n前后连续性\t812→814,数字梗第二次递进\n禁止发生\t—(见场级/全片通用禁止项)\n",
      "refs": [
        {
          "label": "CH001 金老师",
          "src": "media/img-835d7841e330c07041bb.png"
        },
        {
          "label": "CH002 毛小跃",
          "src": "media/img-cc3ce59b7fc64dd405fa.png"
        },
        {
          "label": "LOC001 金泰前期车间",
          "src": "media/img-72ee66ce6d51657a311d.png"
        }
      ],
      "video": "https://github.com/aikingtai-ctrl/jintai-film-showcase/releases/download/media-v1/no-rush-prompts-part2--fe343ac68cdb697c6bf6.mp4",
      "thumb": "media/img-8ea232b747545c2c6930.jpg",
      "model": "seedance2.5",
      "params": "9s · seedance2.5 · jimeng_multimodal2video",
      "status": "已生成",
      "alts": [],
      "take": "视频生成 #69"
    },
    {
      "id": "S15",
      "title": "视频生成 #70",
      "start": 99,
      "duration": 16,
      "framing": "中景 + 挂图",
      "camera": "",
      "lighting": "同场",
      "cast": [
        "CH001",
        "LOC001(日)",
        "PR006"
      ],
      "sceneTag": "@CH001 + @LOC001(日) + @PR006",
      "action": "老师「唰」拉下 @PR006 返工归因挂图:四行归因+一行技术坏片。 → 教鞭逐行点。",
      "picture": "",
      "dialogue": [
        {
          "who": "金老师",
          "text": "先归因,再动手。内容错了,回剧本;人物漂了,回母版;构图动作不清,回分镜;执行偏离意图,回生成包。只有一种情况允许直接重跑——黑屏、冻结这种纯技术坏片。而且,输入一个字都不许动。"
        }
      ],
      "dialogueText": "对白AU01(金老师):「先归因,再动手。内容错了,回剧本;人物漂了,回母版;构图动作不清,回分镜;执行偏离意图,回生成包。只有一种情况允许直接重跑——黑屏、冻结这种纯技术坏片。而且,输入一个字都不许动。」",
      "sound": "效果AU03:拉图“唰”+点图笃笃",
      "notes": "挂图五行与归因表一致(另见场级/全片通用禁止项)",
      "firstFramePrompt": "",
      "prompt": "景别 · 机位 · 运动\t中景 + 挂图\n引用(双@)\t@CH001 + @LOC001(日) + @PR006\n首帧提示词(静)\t老师「唰」拉下 @PR006 返工归因挂图:四行归因+一行技术坏片。\n动态提示词(动)\t教鞭逐行点。\n台词与声音(AU01–AU04)\t对白AU01(金老师):「先归因,再动手。内容错了,回剧本;人物漂了,回母版;构图动作不清,回分镜;执行偏离意图,回生成包。只有一种情况允许直接重跑——黑屏、冻结这种纯技术坏片。而且,输入一个字都不许动。」\n效果AU03:拉图“唰”+点图笃笃\n光源动机\t同场\n前后连续性\t—\n禁止发生\t挂图五行与归因表一致(另见场级/全片通用禁止项)\n",
      "refs": [
        {
          "label": "CH001 金老师",
          "src": "media/img-835d7841e330c07041bb.png"
        },
        {
          "label": "LOC001 金泰前期车间",
          "src": "media/img-72ee66ce6d51657a311d.png"
        }
      ],
      "video": "https://github.com/aikingtai-ctrl/jintai-film-showcase/releases/download/media-v1/no-rush-prompts-part2--60fdd3647158144ac149.mp4",
      "thumb": "media/img-02f030f5ee7dad1c0ea6.jpg",
      "model": "seedance2.5",
      "params": "16s · seedance2.5 · 480p · jimeng_multimodal2video",
      "status": "已生成",
      "alts": [],
      "take": "视频生成 #70"
    },
    {
      "id": "S16",
      "title": "视频生成 #71",
      "start": 115,
      "duration": 6,
      "framing": "近景",
      "camera": "",
      "lighting": "同场",
      "cast": [
        "CH002",
        "LOC001(日)"
      ],
      "sceneTag": "@CH002 + @LOC001(日)",
      "action": "小跃不解。 → 追问。",
      "picture": "",
      "dialogue": [
        {
          "who": "小跃",
          "text": "为什么一个字都不许动?顺手改改提示词不行吗?"
        }
      ],
      "dialogueText": "对白AU01(小跃):「为什么一个字都不许动?顺手改改提示词不行吗?」",
      "sound": "",
      "notes": "—(见场级/全片通用禁止项)",
      "firstFramePrompt": "",
      "prompt": "景别 · 机位 · 运动\t近景\n引用(双@)\t@CH002 + @LOC001(日)\n首帧提示词(静)\t小跃不解。\n动态提示词(动)\t追问。\n台词与声音(AU01–AU04)\t对白AU01(小跃):「为什么一个字都不许动?顺手改改提示词不行吗?」\n光源动机\t同场\n前后连续性\t—\n禁止发生\t—(见场级/全片通用禁止项)\n",
      "refs": [
        {
          "label": "CH002 毛小跃",
          "src": "media/img-cc3ce59b7fc64dd405fa.png"
        },
        {
          "label": "LOC001 金泰前期车间",
          "src": "media/img-72ee66ce6d51657a311d.png"
        }
      ],
      "video": "https://github.com/aikingtai-ctrl/jintai-film-showcase/releases/download/media-v1/no-rush-prompts-part2--7f9d0463b3c5f8b1d5cf.mp4",
      "thumb": "media/img-a80ee4e7820954ecedbf.jpg",
      "model": "seedance2.5",
      "params": "6s · seedance2.5 · jimeng_multimodal2video",
      "status": "已生成",
      "alts": [],
      "take": "视频生成 #71"
    },
    {
      "id": "S17",
      "title": "视频生成 #72",
      "start": 121,
      "duration": 12,
      "framing": "近景",
      "camera": "",
      "lighting": "同场",
      "cast": [
        "CH001",
        "LOC001(日)"
      ],
      "sceneTag": "@CH001 + @LOC001(日)",
      "action": "老师正面近景。 → 语速放缓,一句一顿。",
      "picture": "",
      "dialogue": [
        {
          "who": "金老师",
          "text": "输入不变,重跑失败,证明是技术问题;你顺手改了一个词,这回跑成了——你永远不知道刚才到底错在哪。重跑二十遍,主角不会自己长对脸。"
        }
      ],
      "dialogueText": "对白AU01(金老师):「输入不变,重跑失败,证明是技术问题;你顺手改了一个词,这回跑成了——你永远不知道刚才到底错在哪。重跑二十遍,主角不会自己长对脸。」",
      "sound": "",
      "notes": "—(见场级/全片通用禁止项)",
      "firstFramePrompt": "",
      "prompt": "景别 · 机位 · 运动\t近景\n引用(双@)\t@CH001 + @LOC001(日)\n首帧提示词(静)\t老师正面近景。\n动态提示词(动)\t语速放缓,一句一顿。\n台词与声音(AU01–AU04)\t对白AU01(金老师):「输入不变,重跑失败,证明是技术问题;你顺手改了一个词,这回跑成了——你永远不知道刚才到底错在哪。重跑二十遍,主角不会自己长对脸。」\n光源动机\t同场\n前后连续性\t—\n禁止发生\t—(见场级/全片通用禁止项)\n",
      "refs": [
        {
          "label": "CH001 金老师",
          "src": "media/img-835d7841e330c07041bb.png"
        },
        {
          "label": "LOC001 金泰前期车间",
          "src": "media/img-72ee66ce6d51657a311d.png"
        }
      ],
      "video": "https://github.com/aikingtai-ctrl/jintai-film-showcase/releases/download/media-v1/no-rush-prompts-part2--871fc499dd69e583b25a.mp4",
      "thumb": "media/img-93c623f611cf2ecba2b5.jpg",
      "model": "seedance2.5",
      "params": "12s · seedance2.5 · jimeng_multimodal2video",
      "status": "已生成",
      "alts": [],
      "take": "视频生成 #72"
    },
    {
      "id": "S18",
      "title": "视频生成 #73",
      "start": 133,
      "duration": 19,
      "framing": "中景＋红线清单插入",
      "camera": "",
      "lighting": "屏幕光随条目逐条变红",
      "cast": [
        "CH001＋",
        "LOC001（日）"
      ],
      "sceneTag": "@CH001＋@LOC001（日）",
      "action": "老师侧身立于屏幕旁，屏上滚动显示六条片级红线。 → 老师每念出一条，对应条目即刻变红。",
      "picture": "",
      "dialogue": [
        {
          "who": "金老师",
          "text": "还有两站，不归前期管，但你必须知道。生成执行，要按批次表消化任务，逐条记录版本与结果；成片质检，先由机器拦截黑屏、噪点和画面冻结，再由人工按十分制逐镜审片。片级红线，一票否决——人物换脸、时代穿帮、关键物证错误、动作因果颠倒、伦理越界、引用失效。平均分再高，只要触碰一条红线，整镜作废。"
        }
      ],
      "dialogueText": "对白AU01（金老师）：「还有两站，不归前期管，但你必须知道。生成执行，要按批次表消化任务，逐条记录版本与结果；成片质检，先由机器拦截黑屏、噪点和画面冻结，再由人工按十分制逐镜审片。片级红线，一票否决——人物换脸、时代穿帮、关键物证错误、动作因果颠倒、伦理越界、引用失效。平均分再高，只要触碰一条红线，整镜作废。」",
      "sound": "效果AU03：条目变红提示音“嗒”×6",
      "notes": "清单仅限六条，顺序须与上述一致（另见场级／全片通用禁止项）",
      "firstFramePrompt": "",
      "prompt": "景别 · 机位 · 运动\t中景＋红线清单插入\n引用（双@）\t@CH001＋@LOC001（日）\n首帧提示词（静）\t老师侧身立于屏幕旁，屏上滚动显示六条片级红线。\n动态提示词（动）\t老师每念出一条，对应条目即刻变红。\n台词与声音（AU01–AU04）\t对白AU01（金老师）：「还有两站，不归前期管，但你必须知道。生成执行，要按批次表消化任务，逐条记录版本与结果；成片质检，先由机器拦截黑屏、噪点和画面冻结，再由人工按十分制逐镜审片。片级红线，一票否决——人物换脸、时代穿帮、关键物证错误、动作因果颠倒、伦理越界、引用失效。平均分再高，只要触碰一条红线，整镜作废。」\n效果AU03：条目变红提示音“嗒”×6\n光源动机\t屏幕光随条目逐条变红\n前后连续性\t—\n禁止发生\t清单仅限六条，顺序须与上述一致（另见场级／全片通用禁止项）",
      "refs": [
        {
          "label": "CH001 金老师",
          "src": "media/img-835d7841e330c07041bb.png"
        },
        {
          "label": "LOC001 金泰前期车间",
          "src": "media/img-72ee66ce6d51657a311d.png"
        }
      ],
      "video": "https://github.com/aikingtai-ctrl/jintai-film-showcase/releases/download/media-v1/no-rush-prompts-part2--46cc1d2a30a5470aee31.mp4",
      "thumb": "media/img-a4d321fe02d6864d3652.jpg",
      "model": "seedance2.5",
      "params": "19s · seedance2.5 · 480p · jimeng_multimodal2video",
      "status": "已生成",
      "alts": [],
      "take": "视频生成 #73"
    },
    {
      "id": "S19",
      "title": "视频生成 #74",
      "start": 152,
      "duration": 6,
      "framing": "双人剪影",
      "camera": "",
      "lighting": "红光",
      "cast": [
        "CH001",
        "CH002",
        "LOC001(日)"
      ],
      "sceneTag": "@CH001 + @CH002 + @LOC001(日)",
      "action": "二人静立,大屏红光映脸。 → 字卡叠出「严的不是人,是账」。",
      "picture": "",
      "dialogue": [
        {
          "who": "小跃",
          "text": "好严啊……"
        },
        {
          "who": "金老师",
          "text": "严的不是人,是账。"
        }
      ],
      "dialogueText": "对白AU01(小跃):「好严啊……」(金老师):「严的不是人,是账。」",
      "sound": "音乐AU04:低垫再起",
      "notes": "连续性：尾接SC07灯光渐暗 —(见场级/全片通用禁止项)",
      "firstFramePrompt": "",
      "prompt": "景别 · 机位 · 运动\t双人剪影\n引用(双@)\t@CH001 + @CH002 + @LOC001(日)\n首帧提示词(静)\t二人静立,大屏红光映脸。\n动态提示词(动)\t字卡叠出「严的不是人,是账」。\n台词与声音(AU01–AU04)\t对白AU01(小跃):「好严啊……」(金老师):「严的不是人,是账。」\n音乐AU04:低垫再起\n光源动机\t红光\n前后连续性\t尾接SC07灯光渐暗\n禁止发生\t—(见场级/全片通用禁止项)\n",
      "refs": [
        {
          "label": "LOC001 金泰前期车间",
          "src": "media/img-72ee66ce6d51657a311d.png"
        },
        {
          "label": "CH002 毛小跃",
          "src": "media/img-cc3ce59b7fc64dd405fa.png"
        },
        {
          "label": "CH001 金老师",
          "src": "media/img-835d7841e330c07041bb.png"
        }
      ],
      "video": "https://github.com/aikingtai-ctrl/jintai-film-showcase/releases/download/media-v1/no-rush-prompts-part2--59bce2ad962caee33af5.mp4",
      "thumb": "media/img-1d417f3904b65a3e9316.jpg",
      "model": "seedance2.5",
      "params": "6s · seedance2.5 · jimeng_multimodal2video",
      "status": "已生成",
      "alts": [],
      "take": "视频生成 #74"
    },
    {
      "id": "S20",
      "title": "视频生成 #75",
      "start": 158,
      "duration": 8,
      "framing": "大全景",
      "camera": "",
      "lighting": "顶光单源",
      "cast": [
        "CH001",
        "CH002",
        "LOC001(暮)",
        "PR002"
      ],
      "sceneTag": "@CH001 + @CH002 + @LOC001(暮) + @PR002",
      "action": "车间灯逐组熄灭,只剩线尾一束顶光罩住金箱;师生剪影并肩。 → 最后一组灯熄,静两拍。",
      "picture": "",
      "dialogue": [],
      "dialogueText": "环境AU02:空调低鸣渐止",
      "sound": "音乐AU04:留白",
      "notes": "连续性：承SC06;光区=终局舞台 —(见场级/全片通用禁止项)",
      "firstFramePrompt": "",
      "prompt": "景别 · 机位 · 运动\t大全景\n引用(双@)\t@CH001 + @CH002 + @LOC001(暮) + @PR002\n首帧提示词(静)\t车间灯逐组熄灭,只剩线尾一束顶光罩住金箱;师生剪影并肩。\n动态提示词(动)\t最后一组灯熄,静两拍。\n台词与声音(AU01–AU04)\t环境AU02:空调低鸣渐止\n音乐AU04:留白\n光源动机\t顶光单源\n前后连续性\t承SC06;光区=终局舞台\n禁止发生\t—(见场级/全片通用禁止项)\n",
      "refs": [
        {
          "label": "CH002 毛小跃",
          "src": "media/img-cc3ce59b7fc64dd405fa.png"
        },
        {
          "label": "CH001 金老师",
          "src": "media/img-835d7841e330c07041bb.png"
        },
        {
          "label": "PR002 金色就绪包箱",
          "src": "media/img-55434ec1351087c4e66a.png"
        },
        {
          "label": "LOC001 金泰前期车间",
          "src": "media/img-72ee66ce6d51657a311d.png"
        }
      ],
      "video": "https://github.com/aikingtai-ctrl/jintai-film-showcase/releases/download/media-v1/no-rush-prompts-part2--09def3aa034fdef62700.mp4",
      "thumb": "media/img-2326061181927263e36a.jpg",
      "model": "seedance2.5",
      "params": "8s · seedance2.5 · jimeng_multimodal2video",
      "status": "已生成",
      "alts": [],
      "take": "视频生成 #75"
    },
    {
      "id": "S21",
      "title": "视频生成 #76",
      "start": 166,
      "duration": 10,
      "framing": "双人中景",
      "camera": "",
      "lighting": "顶光",
      "cast": [
        "CH001",
        "CH002",
        "LOC001(暮)"
      ],
      "sceneTag": "@CH001 + @CH002 + @LOC001(暮)",
      "action": "顶光下师生对望。 → 一问三答,节奏干脆。",
      "picture": "",
      "dialogue": [
        {
          "who": "金老师",
          "text": "最后一个问题。这整条线,最终目的是什么?"
        },
        {
          "who": "小跃",
          "text": "出片快?"
        },
        {
          "who": "金老师",
          "text": "不是。"
        },
        {
          "who": "小跃",
          "text": "出片好?"
        },
        {
          "who": "金老师",
          "text": "也不是。是这一句——"
        }
      ],
      "dialogueText": "对白AU01(金老师):「最后一个问题。这整条线,最终目的是什么?」(小跃):「出片快?」(金老师):「不是。」(小跃):「出片好?」(金老师):「也不是。是这一句——」",
      "sound": "",
      "notes": "—(见场级/全片通用禁止项)",
      "firstFramePrompt": "",
      "prompt": "景别 · 机位 · 运动\t双人中景\n引用(双@)\t@CH001 + @CH002 + @LOC001(暮)\n首帧提示词(静)\t顶光下师生对望。\n动态提示词(动)\t一问三答,节奏干脆。\n台词与声音(AU01–AU04)\t对白AU01(金老师):「最后一个问题。这整条线,最终目的是什么?」(小跃):「出片快?」(金老师):「不是。」(小跃):「出片好?」(金老师):「也不是。是这一句——」\n光源动机\t顶光\n前后连续性\t—\n禁止发生\t—(见场级/全片通用禁止项)\n",
      "refs": [
        {
          "label": "CH001 金老师",
          "src": "media/img-835d7841e330c07041bb.png"
        },
        {
          "label": "CH002 毛小跃",
          "src": "media/img-cc3ce59b7fc64dd405fa.png"
        },
        {
          "label": "LOC001 金泰前期车间",
          "src": "media/img-72ee66ce6d51657a311d.png"
        }
      ],
      "video": "https://github.com/aikingtai-ctrl/jintai-film-showcase/releases/download/media-v1/no-rush-prompts-part2--fa50aaaa9dad0ed9ca96.mp4",
      "thumb": "media/img-b25b7cedd877cca80ad0.jpg",
      "model": "seedance2.5",
      "params": "10s · seedance2.5 · 480p · jimeng_multimodal2video",
      "status": "已生成",
      "alts": [],
      "take": "视频生成 #76"
    },
    {
      "id": "S22",
      "title": "视频生成 #77",
      "start": 176,
      "duration": 8,
      "framing": "摇 + 推墙面",
      "camera": "",
      "lighting": "墙字自发光",
      "cast": [
        "LOC001(暮)"
      ],
      "sceneTag": "@LOC001(暮)",
      "action": "墙面暗字区,近乎全黑。 → 暗字缓缓点亮成一行:「任何一个失败镜头,几分钟内能追溯到:它用了哪版剧本、哪张母版、哪条提示词、哪个任务、为什么被批准。」;音乐起。",
      "picture": "",
      "dialogue": [],
      "dialogueText": "音乐AU04:主题完整陈述",
      "sound": "效果AU03:字亮微嗡",
      "notes": "连续性：全片题旨落版 全文如上不改字(另见场级/全片通用禁止项)",
      "firstFramePrompt": "",
      "prompt": "景别 · 机位 · 运动\t摇 + 推墙面\n引用(双@)\t@LOC001(暮)\n首帧提示词(静)\t墙面暗字区,近乎全黑。\n动态提示词(动)\t暗字缓缓点亮成一行:「任何一个失败镜头,几分钟内能追溯到:它用了哪版剧本、哪张母版、哪条提示词、哪个任务、为什么被批准。」;音乐起。\n台词与声音(AU01–AU04)\t音乐AU04:主题完整陈述\n效果AU03:字亮微嗡\n光源动机\t墙字自发光\n前后连续性\t全片题旨落版\n禁止发生\t全文如上不改字(另见场级/全片通用禁止项)\n",
      "refs": [
        {
          "label": "LOC001 金泰前期车间",
          "src": "media/img-72ee66ce6d51657a311d.png"
        }
      ],
      "video": "https://github.com/aikingtai-ctrl/jintai-film-showcase/releases/download/media-v1/no-rush-prompts-part2--4c668c843c4f9c937991.mp4",
      "thumb": "media/img-2f0a51779d3856fdfc73.jpg",
      "model": "seedance2.5",
      "params": "8s · seedance2.5 · 480p · jimeng_multimodal2video",
      "status": "已生成",
      "alts": [],
      "take": "视频生成 #77"
    },
    {
      "id": "S23",
      "title": "视频生成 #78",
      "start": 184,
      "duration": 11,
      "framing": "双人正反打",
      "camera": "",
      "lighting": "墙字光",
      "cast": [
        "CH001",
        "CH002",
        "LOC001(暮)"
      ],
      "sceneTag": "@CH001 + @CH002 + @LOC001(暮)",
      "action": "墙字光映在两人脸上。 → 老师三个“查得到”层层递进。",
      "picture": "",
      "dialogue": [
        {
          "who": "小跃",
          "text": "就为了……查得到?"
        },
        {
          "who": "金老师",
          "text": "查得到,才敢批量;查得到,才敢返工;查得到,失败才是资产,不是垃圾。你那八百一十二条,查得到吗?"
        }
      ],
      "dialogueText": "对白AU01(小跃):「就为了……查得到?」(金老师):「查得到,才敢批量;查得到,才敢返工;查得到,失败才是资产,不是垃圾。你那八百一十二条,查得到吗?」",
      "sound": "",
      "notes": "—(见场级/全片通用禁止项)",
      "firstFramePrompt": "",
      "prompt": "景别 · 机位 · 运动\t双人正反打\n引用(双@)\t@CH001 + @CH002 + @LOC001(暮)\n首帧提示词(静)\t墙字光映在两人脸上。\n动态提示词(动)\t老师三个“查得到”层层递进。\n台词与声音(AU01–AU04)\t对白AU01(小跃):「就为了……查得到?」(金老师):「查得到,才敢批量;查得到,才敢返工;查得到,失败才是资产,不是垃圾。你那八百一十二条,查得到吗?」\n光源动机\t墙字光\n前后连续性\t—\n禁止发生\t—(见场级/全片通用禁止项)\n",
      "refs": [
        {
          "label": "CH001 金老师",
          "src": "media/img-835d7841e330c07041bb.png"
        },
        {
          "label": "LOC001 金泰前期车间",
          "src": "media/img-72ee66ce6d51657a311d.png"
        },
        {
          "label": "CH002 毛小跃",
          "src": "media/img-cc3ce59b7fc64dd405fa.png"
        }
      ],
      "video": "https://github.com/aikingtai-ctrl/jintai-film-showcase/releases/download/media-v1/no-rush-prompts-part2--469db9ff71cc14363277.mp4",
      "thumb": "media/img-91ee52fcb8599fdbc57e.jpg",
      "model": "seedance2.5",
      "params": "11s · seedance2.5 · 480p · jimeng_multimodal2video",
      "status": "已生成",
      "alts": [],
      "take": "视频生成 #78"
    },
    {
      "id": "S24",
      "title": "视频生成 #79",
      "start": 195,
      "duration": 7,
      "framing": "近景 · 小跃",
      "camera": "",
      "lighting": "墙字光",
      "cast": [
        "CH002",
        "LOC001(暮)"
      ],
      "sceneTag": "@CH002 + @LOC001(暮)",
      "action": "小跃望着墙字。 → 低头,声音低下去。",
      "picture": "",
      "dialogue": [
        {
          "who": "小跃",
          "text": "八百一十四。……查不到。"
        }
      ],
      "dialogueText": "对白AU01(小跃):「八百一十四。……查不到。」",
      "sound": "",
      "notes": "连续性：数字梗第三次(还愿) —(见场级/全片通用禁止项)",
      "firstFramePrompt": "",
      "prompt": "景别 · 机位 · 运动\t近景 · 小跃\n引用(双@)\t@CH002 + @LOC001(暮)\n首帧提示词(静)\t小跃望着墙字。\n动态提示词(动)\t低头,声音低下去。\n台词与声音(AU01–AU04)\t对白AU01(小跃):「八百一十四。……查不到。」\n光源动机\t墙字光\n前后连续性\t数字梗第三次(还愿)\n禁止发生\t—(见场级/全片通用禁止项)\n",
      "refs": [
        {
          "label": "LOC001 金泰前期车间",
          "src": "media/img-72ee66ce6d51657a311d.png"
        },
        {
          "label": "CH002 毛小跃",
          "src": "media/img-cc3ce59b7fc64dd405fa.png"
        }
      ],
      "video": "https://github.com/aikingtai-ctrl/jintai-film-showcase/releases/download/media-v1/no-rush-prompts-part2--05ee00ebe9b2b5be85ce.mp4",
      "thumb": "media/img-8227f8d1aecbf5f3bbee.jpg",
      "model": "seedance2.5",
      "params": "7s · seedance2.5 · 480p · jimeng_multimodal2video",
      "status": "已生成",
      "alts": [],
      "take": "视频生成 #79"
    },
    {
      "id": "S25",
      "title": "视频生成 #80",
      "start": 202,
      "duration": 9,
      "framing": "近景 · 老师",
      "camera": "",
      "lighting": "墙字光",
      "cast": [
        "CH001",
        "LOC001(暮)"
      ],
      "sceneTag": "@CH001 + @LOC001(暮)",
      "action": "老师看着小跃。 → 语气第一次带一点温度。",
      "picture": "",
      "dialogue": [
        {
          "who": "金老师",
          "text": "所以它们死了,还死得不明不白。从明天起——让每一条都死得明明白白。"
        }
      ],
      "dialogueText": "对白AU01(金老师):「所以它们死了,还死得不明不白。从明天起——让每一条都死得明明白白。」",
      "sound": "",
      "notes": "—(见场级/全片通用禁止项)",
      "firstFramePrompt": "",
      "prompt": "景别 · 机位 · 运动\t近景 · 老师\n引用(双@)\t@CH001 + @LOC001(暮)\n首帧提示词(静)\t老师看着小跃。\n动态提示词(动)\t语气第一次带一点温度。\n台词与声音(AU01–AU04)\t对白AU01(金老师):「所以它们死了,还死得不明不白。从明天起——让每一条都死得明明白白。」\n光源动机\t墙字光\n前后连续性\t—\n禁止发生\t—(见场级/全片通用禁止项)\n",
      "refs": [
        {
          "label": "CH001 金老师",
          "src": "media/img-835d7841e330c07041bb.png"
        },
        {
          "label": "LOC001 金泰前期车间",
          "src": "media/img-72ee66ce6d51657a311d.png"
        }
      ],
      "video": "https://github.com/aikingtai-ctrl/jintai-film-showcase/releases/download/media-v1/no-rush-prompts-part2--4e55ca4d91beb4ab22a5.mp4",
      "thumb": "media/img-f2e960c2e793c4cbbbf1.jpg",
      "model": "seedance2.5",
      "params": "9s · seedance2.5 · 480p · jimeng_multimodal2video",
      "status": "已生成",
      "alts": [],
      "take": "视频生成 #80"
    },
    {
      "id": "S26",
      "title": "视频生成 #81",
      "start": 211,
      "duration": 10,
      "framing": "双人中景",
      "camera": "",
      "lighting": "顶光",
      "cast": [
        "CH001",
        "CH002",
        "LOC001(暮)",
        "PR001"
      ],
      "sceneTag": "@CH001 + @CH002 + @LOC001(暮) + @PR001",
      "action": "小跃认真发问。 → 老师戴上老花镜,重新拿起 @PR001。",
      "picture": "",
      "dialogue": [
        {
          "who": "小跃",
          "text": "老师,那我那八百一十四条,现在怎么办?删了吗?"
        },
        {
          "who": "金老师",
          "text": "进99_archive。废片,也要有编号。"
        }
      ],
      "dialogueText": "对白AU01(小跃):「老师,那我那八百一十四条,现在怎么办?删了吗?」(金老师):「进99_archive。废片,也要有编号。」",
      "sound": "",
      "notes": "连续性：呼应99_archive滑梯 —(见场级/全片通用禁止项)",
      "firstFramePrompt": "",
      "prompt": "景别 · 机位 · 运动\t双人中景\n引用(双@)\t@CH001 + @CH002 + @LOC001(暮) + @PR001\n首帧提示词(静)\t小跃认真发问。\n动态提示词(动)\t老师戴上老花镜,重新拿起 @PR001。\n台词与声音(AU01–AU04)\t对白AU01(小跃):「老师,那我那八百一十四条,现在怎么办?删了吗?」(金老师):「进99_archive。废片,也要有编号。」\n光源动机\t顶光\n前后连续性\t呼应99_archive滑梯\n禁止发生\t—(见场级/全片通用禁止项)\n",
      "refs": [
        {
          "label": "LOC001 金泰前期车间",
          "src": "media/img-72ee66ce6d51657a311d.png"
        },
        {
          "label": "CH002 毛小跃",
          "src": "media/img-cc3ce59b7fc64dd405fa.png"
        },
        {
          "label": "CH001 金老师",
          "src": "media/img-835d7841e330c07041bb.png"
        },
        {
          "label": "PR001 红色批准章 / 红门",
          "src": "media/img-f05bff96875599829654.png"
        }
      ],
      "video": "https://github.com/aikingtai-ctrl/jintai-film-showcase/releases/download/media-v1/no-rush-prompts-part2--d86148efdfc2b0206425.mp4",
      "thumb": "media/img-713fb58b9b02d4e0bcaf.jpg",
      "model": "seedance2.5",
      "params": "10s · seedance2.5 · 480p · jimeng_multimodal2video",
      "status": "已生成",
      "alts": [],
      "take": "视频生成 #81"
    },
    {
      "id": "S27",
      "title": "视频生成 #82",
      "start": 221,
      "duration": 6,
      "framing": "近景小跃 → 流水线空镜",
      "camera": "",
      "lighting": "暮光",
      "cast": [
        "CH002",
        "LOC001(暮)"
      ],
      "sceneTag": "@CH002 + @LOC001(暮)",
      "action": "小跃望向流水线。 → 轻声一句;落幅切流水线纵深空镜。",
      "picture": "",
      "dialogue": [
        {
          "who": "小跃,轻",
          "text": "先过门。"
        }
      ],
      "dialogueText": "对白AU01(小跃,轻):「先过门。」",
      "sound": "音乐AU04:收束",
      "notes": "连续性：口头禅完成翻转,人物弧闭合 —(见场级/全片通用禁止项)",
      "firstFramePrompt": "",
      "prompt": "景别 · 机位 · 运动\t近景小跃 → 流水线空镜\n引用(双@)\t@CH002 + @LOC001(暮)\n首帧提示词(静)\t小跃望向流水线。\n动态提示词(动)\t轻声一句;落幅切流水线纵深空镜。\n台词与声音(AU01–AU04)\t对白AU01(小跃,轻):「先过门。」\n音乐AU04:收束\n光源动机\t暮光\n前后连续性\t口头禅完成翻转,人物弧闭合\n禁止发生\t—(见场级/全片通用禁止项)\n",
      "refs": [
        {
          "label": "CH002 毛小跃",
          "src": "media/img-cc3ce59b7fc64dd405fa.png"
        },
        {
          "label": "LOC001 金泰前期车间",
          "src": "media/img-72ee66ce6d51657a311d.png"
        }
      ],
      "video": "https://github.com/aikingtai-ctrl/jintai-film-showcase/releases/download/media-v1/no-rush-prompts-part2--97acd1ab4ce22221e386.mp4",
      "thumb": "media/img-408d842361193708d551.jpg",
      "model": "seedance2.5",
      "params": "6s · seedance2.5 · jimeng_multimodal2video",
      "status": "已生成",
      "alts": [],
      "take": "视频生成 #82"
    },
    {
      "id": "S28",
      "title": "视频生成 #83",
      "start": 227,
      "duration": 0,
      "framing": "字卡",
      "camera": "",
      "lighting": "纯字卡",
      "cast": [],
      "sceneTag": "字卡镜 · 无资产引用(版式:片头字卡模板)",
      "action": "黑底字卡「机器做多,人做对。」 → 字亮,保持,渐隐。",
      "picture": "",
      "dialogue": [],
      "dialogueText": "音乐AU04:终止式",
      "sound": "效果AU03:章印“咚”落版",
      "notes": "连续性：与片头字卡同款版式 —(见场级/全片通用禁止项)",
      "firstFramePrompt": "",
      "prompt": "景别 · 机位 · 运动\t字卡\n引用(双@)\t字卡镜 · 无资产引用(版式:片头字卡模板)\n首帧提示词(静)\t黑底字卡「机器做多,人做对。」\n动态提示词(动)\t字亮,保持,渐隐。\n台词与声音(AU01–AU04)\t音乐AU04:终止式\n效果AU03:章印“咚”落版\n光源动机\t纯字卡\n前后连续性\t与片头字卡同款版式\n禁止发生\t—(见场级/全片通用禁止项)\n",
      "refs": [],
      "video": "https://github.com/aikingtai-ctrl/jintai-film-showcase/releases/download/media-v1/no-rush-prompts-part2--8c9fb4a66d9e2d3af374.mp4",
      "thumb": "media/img-47db3a34b16e472c6ce2.jpg",
      "model": "seedance2.5",
      "params": "seedance2.5 · 480p · jimeng_text2video",
      "status": "已生成",
      "alts": [],
      "take": "视频生成 #83"
    },
    {
      "id": "S29",
      "title": "视频生成 #84",
      "start": 227,
      "duration": 12,
      "framing": "全景 → 胸屏特写",
      "camera": "",
      "lighting": "小助自体光",
      "cast": [
        "CH003",
        "LOC001(夜)"
      ],
      "sceneTag": "@CH003 + @LOC001(夜)",
      "action": "片尾字幕后。深夜空车间,只有 @CH003 亮着,面前一摞废片档案。 → 逐条打标签:WASTE-001、WASTE-002……快进到WASTE-814,顿一秒,胸屏弹出「等待批准。」;黑场。",
      "picture": "",
      "dialogue": [],
      "dialogueText": "效果AU03:打标机械声连击+终了一声“叮”",
      "sound": "环境AU02:夜",
      "notes": "连续性：呼应六道门制,全片最后一笑 编号格式WASTE-XXX(另见场级/全片通用禁止项)",
      "firstFramePrompt": "",
      "prompt": "景别 · 机位 · 运动\t全景 → 胸屏特写\n引用(双@)\t@CH003 + @LOC001(夜)\n首帧提示词(静)\t片尾字幕后。深夜空车间,只有 @CH003 亮着,面前一摞废片档案。\n动态提示词(动)\t逐条打标签:WASTE-001、WASTE-002……快进到WASTE-814,顿一秒,胸屏弹出「等待批准。」;黑场。\n台词与声音(AU01–AU04)\t效果AU03:打标机械声连击+终了一声“叮”\n环境AU02:夜\n光源动机\t小助自体光\n前后连续性\t呼应六道门制,全片最后一笑\n禁止发生\t编号格式WASTE-XXX(另见场级/全片通用禁止项)\n",
      "refs": [
        {
          "label": "CH003 执行助手「小助」",
          "src": "media/img-166cd3d72f9ffc01e319.png"
        },
        {
          "label": "LOC001 金泰前期车间",
          "src": "media/img-72ee66ce6d51657a311d.png"
        }
      ],
      "video": "https://github.com/aikingtai-ctrl/jintai-film-showcase/releases/download/media-v1/no-rush-prompts-part2--a318b64c6a4ea2f15f07.mp4",
      "thumb": "media/img-4f8910c2ff0d8d546c61.jpg",
      "model": "seedance2.5",
      "params": "12s · seedance2.5 · jimeng_multimodal2video",
      "status": "已生成",
      "alts": [],
      "take": "视频生成 #84"
    },
    {
      "id": "S30",
      "title": "视频生成 #85",
      "start": 239,
      "duration": 15,
      "framing": "中景 + G5门（过门仪式）",
      "camera": "",
      "lighting": "红色门框灯带",
      "cast": [
        "CH001",
        "LOC001（日）",
        "PR001"
      ],
      "sceneTag": "@CH001 + @LOC001（日）+ @PR001",
      "action": "老师立于G5门前，门上标示「G5 镜头意图」。 → 讲解双引用及目录与字段的双向核对；核验无误后盖章，升门放行。",
      "picture": "",
      "dialogue": [
        {
          "who": "金老师",
          "text": "人对景错，景对人漂——双引用，治的就是这个。第五道门：镜头意图。每个镜头，都要让人一眼看懂它想干什么，才能放行。批准的关键帧进入 approved 目录，镜头表中的批准字段同步置位。记住：目录和字段必须一致。机器会双向核对，对不上，立即报错。"
        }
      ],
      "dialogueText": "对白AU01（金老师）：「人对景错，景对人漂——双引用，治的就是这个。第五道门：镜头意图。每个镜头，都要让人一眼看懂它想干什么，才能放行。批准的关键帧进入 approved 目录，镜头表中的批准字段同步置位。记住：目录和字段必须一致。机器会双向核对，对不上，立即报错。」",
      "sound": "效果AU03：印章“咚”地落下，门随即升起。",
      "notes": "连续性：第5次过门仪式，延续此前节奏与动作逻辑 —（见场级／全片通用禁止项）",
      "firstFramePrompt": "",
      "prompt": "景别 · 机位 · 运动\t中景 + G5门（过门仪式）\n引用（双@）\t@CH001 + @LOC001（日）+ @PR001\n首帧提示词（静）\t老师立于G5门前，门上标示「G5 镜头意图」。\n\n动态提示词（动）\t讲解双引用及目录与字段的双向核对；核验无误后盖章，升门放行。\n台词与声音（AU01–AU04）\t对白AU01（金老师）：「人对景错，景对人漂——双引用，治的就是这个。第五道门：镜头意图。每个镜头，都要让人一眼看懂它想干什么，才能放行。批准的关键帧进入 approved 目录，镜头表中的批准字段同步置位。记住：目录和字段必须一致。机器会双向核对，对不上，立即报错。」\n效果AU03：印章“咚”地落下，门随即升起。\n\n光源动机\t红色门框灯带\n前后连续性\t第5次过门仪式，延续此前节奏与动作逻辑\n禁止发生\t—（见场级／全片通用禁止项）",
      "refs": [
        {
          "label": "CH001 金老师",
          "src": "media/img-835d7841e330c07041bb.png"
        },
        {
          "label": "PR001 红色批准章 / 红门",
          "src": "media/img-f05bff96875599829654.png"
        },
        {
          "label": "LOC001 金泰前期车间",
          "src": "media/img-72ee66ce6d51657a311d.png"
        }
      ],
      "video": "https://github.com/aikingtai-ctrl/jintai-film-showcase/releases/download/media-v1/no-rush-prompts-part2--feb1a6a82964cb5c8291.mp4",
      "thumb": "media/img-50ba1460fda56b95a1e9.jpg",
      "model": "seedance2.5",
      "params": "15s · seedance2.5 · 480p · jimeng_multimodal2video",
      "status": "已生成",
      "alts": [],
      "take": "视频生成 #85"
    }
  ],
  "generation": {
    "model": "Seedance 2.5",
    "params": [
      {
        "k": "画布",
        "v": "AI Video Canvas #239：30 个视频节点 / 11 个参考节点 / 70 条连线"
      }
    ],
    "notes": []
  },
  "deliverables": [
    {
      "name": "LC",
      "note": "音频 · 音频",
      "src": ""
    },
    {
      "name": "AI Video Canvas · 画布 239",
      "note": "别急着写提示词 下",
      "src": ""
    }
  ]
});
