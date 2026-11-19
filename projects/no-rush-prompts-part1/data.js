window.registerProject({
  "id": "no-rush-prompts-part1",
  "title": "别急着写提示词（上）",
  "subtitle": "金泰工作流入门课 · 师生对话讲解片 · EP01 · 7 场 84 镜 · 16:9",
  "logline": "一个三天跑了 812 条废片的学生，被冷面老师拉着把整条前期流水线从头走到尾：十个阶段、六道人工门、三份母版、返工归因，以及它的最终目的——任何一个失败镜头，几分钟内能追溯。",
  "date": "2026-09-22",
  "tags": [
    "教学 + 喜剧",
    "师生对话",
    "AI Video Canvas",
    "画布 228"
  ],
  "model": "Seedance 2.5（即梦 multimodal2video，画布节点投放）",
  "modelShort": "Seedance 2.5",
  "poster": "media/img-c0f50a8c4c1a5325b4ea.png",
  "film": {},
  "meta": {
    "shots": 84,
    "generated": 74,
    "durationSec": 710,
    "resolution": "1280×720",
    "fps": 24,
    "aspect": "16:9",
    "style": "全片对白、字幕、画面文字一律只称「执行助手 / 自动执行」，不出现任何具体工具名。角色禁漂移：金老师=灰白鬓角+深蓝工装+红章；小跃=双肩包+贴纸电脑；小助=圆头方身+蓝光轨+胸屏≤4字。红门在无盖章动作时不得自行升起；金句字卡版式全片统一。"
  },
  "synopsis": [
    "深夜，车间大门被撞开。毛小跃抱着贴满贴纸的笔记本电脑冲进来：三天三夜，跑了八百一十二条视频。金老师头也不抬：成片呢？——零。「八百一十二比零。说说。」主角每一条长得都不一样，第 37 条换了性别，第 208 条客栈变成太空舱，还有一条他自己跟自己打起来了。「今天这堂课，就讲你这八百一十二条——是怎么死的。」",
    "车间灯次第亮起，U 形流水线全貌亮相：十个工位灯牌、六道红门。这条线走到头，一段视频都没有——它生产的是「视频生成就绪包」。执行助手「小助」一秒码出一米高文档，却在红门前急刹立正：六道门，它一道都过不去，章只能人来盖。机器做多，人做对。",
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
      "image": "media/img-e0380fbeec3a70be4774.png",
      "uses": 48,
      "role": "前期车间负责人 · 50 多岁 · 老制片人出身",
      "look": "灰白鬓角，深蓝工装外套，胸前口袋插一支红笔；右手永远拿着（或摸得到）一枚红色批准章。",
      "voiceZh": "不慌、不吼、不解释两遍。冷面捧哏，所有笑点由他一句平静的反问引爆，自己永远不笑。口头禅：「机器做多，人做对。」「先归因，再动手。」",
      "locks": [
        "批准章不离身",
        "从不亲手替执行助手干活",
        "从不在门前让步",
        "全片单套造型 CO01"
      ],
      "audio": ""
    },
    {
      "id": "CH002",
      "name": "毛小跃",
      "image": "media/img-2e4075a07776b21e3ec6.png",
      "uses": 36,
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
      "image": "media/img-415cf94e5ac60eb6b830.png",
      "uses": 10,
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
      "image": "media/img-c0f50a8c4c1a5325b4ea.png",
      "uses": 66,
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
      "image": "media/img-d42972373463c99f50af.png",
      "uses": 10,
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
      "image": "media/img-4c89aad734a7fe3e8bb7.png",
      "uses": 9
    },
    {
      "id": "PR002",
      "name": "金色就绪包箱",
      "image": "media/img-deb3d6243beea983aaf3.png",
      "uses": 5
    },
    {
      "id": "PR003",
      "name": "序幕参考（外景/贴纸电脑）",
      "image": "media/img-67fbcd2a97f0748fe292.png",
      "uses": 1
    },
    {
      "id": "PR004",
      "name": "事实卡样卡 SRC-044",
      "image": "media/img-da71dd5a20a7ae78eefa.png",
      "uses": 1
    },
    {
      "id": "PR005",
      "name": "导演阐述平板",
      "image": "media/img-2e7ebc57cc7bd40b21ab.png",
      "uses": 2
    },
    {
      "id": "PR006",
      "name": "返工归因挂图",
      "image": "media/img-0a11392d22eb5679edd6.png",
      "uses": 1
    },
    {
      "id": "PR007",
      "name": "分镜卡组",
      "image": "media/img-1b16b91214766ab9a20e.png",
      "uses": 2
    }
  ],
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
      "title": "SC01 序幕 · 812 条废片",
      "sceneTag": "LOC001 金泰前期车间 · 状态:夜",
      "shots": [
        "SC01-SH01",
        "SC01-SH02",
        "SC01-SH03",
        "SC01-SH04",
        "SC01-SH05",
        "SC01-SH06",
        "SC01-SH07"
      ],
      "note": "约 42 秒 · 7 镜 · 光源：整场夜景。唯一主光=桌面工作灯+电脑屏光,门外冷月光作反差;流水线沉在黑暗中。 · 场级禁止：本场禁止:门外出现可辨认现代街景/招牌文字;背景流水线细节不得提前清晰可见(为SC02亮灯留悬念)。"
    },
    {
      "title": "SC02 第一幕 · 终点不是成片",
      "sceneTag": "LOC001 金泰前期车间 · 状态:日",
      "shots": [
        "SC02-SH01",
        "SC02-SH02",
        "SC02-SH03",
        "SC02-SH04",
        "SC02-SH05",
        "SC02-SH06",
        "SC02-SH07",
        "SC02-SH08",
        "SC02-SH09",
        "SC02-SH10",
        "SC02-SH11",
        "SC02-SH12",
        "SC02-SH13",
        "SC02-SH14",
        "SC02-SH15"
      ],
      "note": "约 126 秒 · 15 镜 · 光源：天窗自然光渐起+工位射灯逐个点亮,全场明亮的职人工坊基调。 · 场级禁止：本场禁止:红门在无盖章动作时自行升起;灯牌文字仅“P0 立项…P9 质检”;小助胸屏每次≤4字。"
    },
    {
      "title": "SC03 第二幕 · 上排五站(P0→P4,G1–G3)",
      "sceneTag": "LOC001 金泰前期车间 · 状态:日(上排工位)",
      "shots": [
        "SC03-SH01",
        "SC03-SH02",
        "SC03-SH03",
        "SC03-SH04",
        "SC03-SH05",
        "SC03-SH06",
        "SC03-SH07",
        "SC03-SH08",
        "SC03-SH09",
        "SC03-SH10",
        "SC03-SH11",
        "SC03-SH12",
        "SC03-SH13",
        "SC03-SH14",
        "SC03-SH15",
        "SC03-SH16",
        "SC03-SH17",
        "SC03-SH18"
      ],
      "note": "约 149 秒 · 18 镜 · 光源：天窗日光+各工位射灯;过门段红门灯带亮起。 · 场级禁止：本场禁止:门升起必须晚于章落(因果不可颠倒);各工位牌面文字与登记一致;片名等只口播不出画面文字。"
    },
    {
      "title": "SC04 第三幕(上) · 母版陈列室(P5,G4)",
      "sceneTag": "LOC002 母版陈列室 · 状态:日",
      "shots": [
        "SC04-SH01",
        "SC04-SH02",
        "SC04-SH03",
        "SC04-SH04",
        "SC04-SH05",
        "SC04-SH06",
        "SC04-SH07",
        "SC04-SH08",
        "SC04-SH09",
        "SC04-SH10"
      ],
      "note": "约 85 秒 · 10 镜 · 光源：展柜射灯冷光,肃穆偏冷,与车间的热闹形成反差。 · 场级禁止：本场禁止:柜签编号与柜内资产错位;已锁柜此后任何镜头不得再开;示例资产=CH004沈三刀/LOC012落雁客栈/CH004-CO02/PR008。"
    },
    {
      "title": "SC05 第三幕(下) · 从分镜到装箱(P6→P9,G5–G6)",
      "sceneTag": "LOC001 金泰前期车间 · 状态:日(下排工位→线尾)",
      "shots": [
        "SC05-SH01",
        "SC05-SH02",
        "SC05-SH03",
        "SC05-SH04",
        "SC05-SH05",
        "SC05-SH06",
        "SC05-SH07",
        "SC05-SH08",
        "SC05-SH09",
        "SC05-SH10",
        "SC05-SH11",
        "SC05-SH12",
        "SC05-SH13",
        "SC05-SH14",
        "SC05-SH15",
        "SC05-SH16"
      ],
      "note": "约 144 秒 · 16 镜 · 光源：天窗日光+下排工位射灯;线尾质检台大屏为主光源之一。 · 场级禁止：本场禁止:屏上示例编号必须符合编号体系;便利店等笑点画面不得出现真实品牌;大字卡「零」只一个字。"
    },
    {
      "title": "SC06 第四幕 · 出事了怎么办(归因与红线)",
      "sceneTag": "LOC001 金泰前期车间 · 状态:日(质检台大屏前)",
      "shots": [
        "SC06-SH01",
        "SC06-SH02",
        "SC06-SH03",
        "SC06-SH04",
        "SC06-SH05",
        "SC06-SH06",
        "SC06-SH07",
        "SC06-SH08"
      ],
      "note": "约 78 秒 · 8 镜 · 光源：大屏光为主,坏片段落屏光闪烁;末镜红光映脸。 · 场级禁止：本场禁止:坏片崩坏做示意化处理,不引任何真实废片;挂图/清单文字与归因表、片级红线逐字一致。"
    },
    {
      "title": "SC07 尾声 · 最终目的 + 彩蛋",
      "sceneTag": "LOC001 金泰前期车间 · 状态:暮→夜(彩蛋:夜)",
      "shots": [
        "SC07-SH01",
        "SC07-SH02",
        "SC07-SH03",
        "SC07-SH04",
        "SC07-SH05",
        "SC07-SH06",
        "SC07-SH07",
        "SC07-SH08",
        "SC07-SH09",
        "SC07-SH10"
      ],
      "note": "约 86 秒 · 10 镜 · 光源：全场灯逐组熄灭,只留线尾一束顶光罩金箱;墙字点亮为第二光源;彩蛋只余小助自体光。 · 场级禁止：本场禁止:墙字一次点亮、全文不改字;彩蛋标签编号格式WASTE-XXX;胸屏收尾四字「等待批准。」。"
    }
  ],
  "shots": [
    {
      "id": "SC01-SH01",
      "title": "建立空间",
      "tc": "",
      "start": 0,
      "duration": 5,
      "framing": "大远景 · 固定",
      "camera": "",
      "lighting": "门缝暖光 × 门外冷月光,大反差",
      "cast": [
        "LOC001"
      ],
      "sceneTag": "@LOC001(夜)",
      "action": "深夜厂房外立面居中,大门紧闭,门缝漏出一线暖黄光,前景地面湿冷反光。 → 半秒静止后,大门被从外撞开,一个背双肩包的逆光人影(@CH002)冲进光缝。",
      "picture": "",
      "firstFramePrompt": "",
      "dialogue": [],
      "dialogueText": "—",
      "sound": "环境：夜虫、远处零星车声 / 效果：撞门闷响+门轴吱呀 / 音乐：—",
      "notes": "连续性：全片第一镜;人影动势向右,接SH02；门外无现代街景细节(另见场级/全片通用禁止项)\n画布上投放的是改写版提示词（全角标点、措辞润色），与分镜页略有差异；此处为画布实际投放文本。",
      "multiShot": false,
      "prompt": "景别 · 机位 · 运动\t大远景 · 固定\n引用（双@）\t@LOC001（夜）\n首帧提示词（静）\t深夜，厂房外立面居中矗立。大门紧闭，门缝间渗出一线暖黄光；前景地面湿冷，映着幽暗微光。\n动态提示词（动）\t画面静止半秒。大门骤然被人从外撞开，门缝中的暖光瞬间撕裂黑暗；一个背着双肩包的逆光人影（@CH002）冲入厂房。\n台词与声音（AU01–AU04）\t对白AU01：—\n环境AU02：夜虫低鸣，远处偶有车辆驶过\n效果AU03：沉闷的撞门声，紧接门轴刺耳吱呀\n音乐AU04：—\n光源动机\t门内暖光 × 门外冷月光，形成强烈明暗反差\n前后连续性\t全片第一镜；人影保持向右冲入的动势，衔接SH02\n禁止发生\t门外不得出现现代街景细节（另见场级／全片通用禁止项）",
      "refs": [
        {
          "label": "LOC001 金泰前期车间",
          "src": "media/img-c0f50a8c4c1a5325b4ea.png"
        },
        {
          "label": "PR003 序幕参考（外景/贴纸电脑）",
          "src": "media/img-67fbcd2a97f0748fe292.png"
        },
        {
          "label": "CH002 毛小跃",
          "src": "media/img-2e4075a07776b21e3ec6.png"
        }
      ],
      "video": "https://github.com/aikingtai-ctrl/jintai-film-showcase/releases/download/media-v1/no-rush-prompts-part1--7a8cce4a6a21d416ae43.mp4",
      "thumb": "",
      "seed": "",
      "instance": "",
      "model": "seedance2.5",
      "params": "画布节点 视频生成 #2 · 6s · seedance2.5 · jimeng_multimodal2video",
      "take": "#2",
      "status": "已生成",
      "alts": [
        {
          "label": "备选条 untitled",
          "src": "https://github.com/aikingtai-ctrl/jintai-film-showcase/releases/download/media-v1/no-rush-prompts-part1--ac2f7196c65ac86e3908.mp4"
        }
      ]
    },
    {
      "id": "SC01-SH02",
      "title": "动作",
      "tc": "",
      "start": 5,
      "duration": 6,
      "framing": "中景 · 跟拍(向右)",
      "camera": "",
      "lighting": "桌面工作灯+屏光",
      "cast": [
        "CH002",
        "LOC001",
        "PR003"
      ],
      "sceneTag": "@CH002 + @LOC001(夜) + @PR003",
      "action": "@CH002 抱着贴满贴纸的 @PR003 在昏暗车间过道奔跑,屏幕亮着密密麻麻的视频缩略图,照亮他兴奋的脸。 → 小跑至灯下长桌前急停,双手把 @PR003 举到胸前,屏幕朝向镜头。",
      "picture": "",
      "firstFramePrompt": "",
      "dialogue": [
        {
          "who": "小跃",
          "text": "老师!成了!我三天三夜,跑了八百一十二条视频!"
        }
      ],
      "dialogueText": "(小跃):「老师!成了!我三天三夜,跑了八百一十二条视频!」",
      "sound": "环境：空旷车间回声 / 效果：急停鞋底摩擦",
      "notes": "连续性：桌位与SH03老师位相对,建立轴线；缩略图内容不得清晰可辨(另见场级/全片通用禁止项)",
      "multiShot": false,
      "prompt": "景别 · 机位 · 运动\t中景 · 跟拍(向右)\n引用(双@)\t@CH002 + @LOC001(夜) + @PR003\n首帧提示词(静)\t@CH002 抱着贴满贴纸的 @PR003 在昏暗车间过道奔跑,屏幕亮着密密麻麻的视频缩略图,照亮他兴奋的脸。\n动态提示词(动)\t小跑至灯下长桌前急停,双手把 @PR003 举到胸前,屏幕朝向镜头。\n台词与声音(AU01–AU04)\t对白AU01(小跃):「老师!成了!我三天三夜,跑了八百一十二条视频!」\n环境AU02:空旷车间回声\n效果AU03:急停鞋底摩擦\n光源动机\t桌面工作灯+屏光\n前后连续性\t桌位与SH03老师位相对,建立轴线\n禁止发生\t缩略图内容不得清晰可辨(另见场级/全片通用禁止项)",
      "refs": [],
      "video": "",
      "thumb": "",
      "seed": "",
      "instance": "",
      "model": "",
      "params": "",
      "take": "",
      "status": "未生成",
      "alts": []
    },
    {
      "id": "SC01-SH03",
      "title": "反应",
      "tc": "",
      "start": 11,
      "duration": 4,
      "framing": "近景 · 固定",
      "camera": "",
      "lighting": "顶光压眉,桌灯为主",
      "cast": [
        "CH001",
        "LOC001",
        "PR001"
      ],
      "sceneTag": "@CH001 + @LOC001(夜) + @PR001",
      "action": "灯下 @CH001 低头执 @PR001 在文件上盖章,老花镜滑到鼻尖,头不抬。 → 章落纸面一顿,只抬眼皮不抬头,吐出三个字。",
      "picture": "",
      "firstFramePrompt": "",
      "dialogue": [
        {
          "who": "金老师",
          "text": "成片呢?"
        }
      ],
      "dialogueText": "(金老师):「成片呢?」",
      "sound": "效果：章底闷响",
      "notes": "连续性：轴线:小跃右/老师左,全场遵守；@PR001 不离手(另见场级/全片通用禁止项)",
      "multiShot": false,
      "prompt": "景别 · 机位 · 运动\t近景 · 固定\n引用(双@)\t@CH001 + @LOC001(夜) + @PR001\n首帧提示词(静)\t灯下 @CH001 低头执 @PR001 在文件上盖章,老花镜滑到鼻尖,头不抬。\n动态提示词(动)\t章落纸面一顿,只抬眼皮不抬头,吐出三个字。\n台词与声音(AU01–AU04)\t对白AU01(金老师):「成片呢?」\n效果AU03:章底闷响\n光源动机\t顶光压眉,桌灯为主\n前后连续性\t轴线:小跃右/老师左,全场遵守\n禁止发生\t@PR001 不离手(另见场级/全片通用禁止项)",
      "refs": [
        {
          "label": "LOC001 金泰前期车间",
          "src": "media/img-c0f50a8c4c1a5325b4ea.png"
        },
        {
          "label": "CH001 金老师",
          "src": "media/img-e0380fbeec3a70be4774.png"
        },
        {
          "label": "PR001 红色批准章 / 红门",
          "src": "media/img-4c89aad734a7fe3e8bb7.png"
        }
      ],
      "video": "https://github.com/aikingtai-ctrl/jintai-film-showcase/releases/download/media-v1/no-rush-prompts-part1--3e52111c8b619aa7fe26.mp4",
      "thumb": "",
      "seed": "",
      "instance": "",
      "model": "seedance2.5",
      "params": "画布节点 视频生成 #3 · 4s · seedance2.5 · jimeng_multimodal2video",
      "take": "#3",
      "status": "已生成",
      "alts": []
    },
    {
      "id": "SC01-SH04",
      "title": "反应",
      "tc": "",
      "start": 15,
      "duration": 4,
      "framing": "特写",
      "camera": "",
      "lighting": "屏光冷+桌灯暖,半明半暗",
      "cast": [
        "CH002",
        "LOC001"
      ],
      "sceneTag": "@CH002 + @LOC001(夜)",
      "action": "@CH002 笑容满格特写,屏光打亮半边脸。 → 笑容一秒内垮下,眼神飘向侧下方,音量骤降。",
      "picture": "",
      "firstFramePrompt": "",
      "dialogue": [
        {
          "who": "小跃",
          "text": "……零。"
        }
      ],
      "dialogueText": "(小跃):「……零。」",
      "sound": "环境：静场",
      "notes": "连续性：情绪落点直接接SH05；—(见场级/全片通用禁止项)",
      "multiShot": false,
      "prompt": "景别 · 机位 · 运动\t特写\n引用(双@)\t@CH002 + @LOC001(夜)\n首帧提示词(静)\t@CH002 笑容满格特写,屏光打亮半边脸。\n动态提示词(动)\t笑容一秒内垮下,眼神飘向侧下方,音量骤降。\n台词与声音(AU01–AU04)\t对白AU01(小跃):「……零。」\n环境AU02:静场\n光源动机\t屏光冷+桌灯暖,半明半暗\n前后连续性\t情绪落点直接接SH05\n禁止发生\t—(见场级/全片通用禁止项)",
      "refs": [
        {
          "label": "LOC001 金泰前期车间",
          "src": "media/img-c0f50a8c4c1a5325b4ea.png"
        },
        {
          "label": "CH002 毛小跃",
          "src": "media/img-2e4075a07776b21e3ec6.png"
        }
      ],
      "video": "https://github.com/aikingtai-ctrl/jintai-film-showcase/releases/download/media-v1/no-rush-prompts-part1--19a22f60fd9aa4df90d1.mp4",
      "thumb": "",
      "seed": "",
      "instance": "",
      "model": "seedance2.5",
      "params": "画布节点 视频生成 #4 · 4s · seedance2.5 · jimeng_multimodal2video",
      "take": "#4",
      "status": "已生成",
      "alts": []
    },
    {
      "id": "SC01-SH05",
      "title": "人物关系",
      "tc": "",
      "start": 19,
      "duration": 11,
      "framing": "过肩中景(越老师肩看小跃)",
      "camera": "",
      "lighting": "同SH03",
      "cast": [
        "CH001",
        "CH002",
        "LOC001"
      ],
      "sceneTag": "@CH001 + @CH002 + @LOC001(夜)",
      "action": "越过 @CH001 肩头看 @CH002,长桌上文件成摞,背景流水线沉在黑暗里。 → 老师稳坐不动;小跃越说越小声,手指头一条条数着灾情。",
      "picture": "",
      "firstFramePrompt": "",
      "dialogue": [
        {
          "who": "金老师",
          "text": "八百一十二比零。说说。"
        },
        {
          "who": "小跃",
          "text": "主角每一条长得都不一样……第37条他换了个性别,第208条客栈变成了太空舱。还有一条,他自己跟自己打起来了。"
        }
      ],
      "dialogueText": "(金老师):「八百一十二比零。说说。」(小跃):「主角每一条长得都不一样……第37条他换了个性别,第208条客栈变成了太空舱。还有一条,他自己跟自己打起来了。」",
      "sound": "",
      "notes": "连续性：背景黑暗流水线为SC02亮灯埋伏笔；背景流水线不得清晰(另见场级/全片通用禁止项)",
      "multiShot": false,
      "prompt": "景别 · 机位 · 运动\t过肩中景(越老师肩看小跃)\n引用(双@)\t@CH001 + @CH002 + @LOC001(夜)\n首帧提示词(静)\t越过 @CH001 肩头看 @CH002,长桌上文件成摞,背景流水线沉在黑暗里。\n动态提示词(动)\t老师稳坐不动;小跃越说越小声,手指头一条条数着灾情。\n台词与声音(AU01–AU04)\t对白AU01(金老师):「八百一十二比零。说说。」(小跃):「主角每一条长得都不一样……第37条他换了个性别,第208条客栈变成了太空舱。还有一条,他自己跟自己打起来了。」\n光源动机\t同SH03\n前后连续性\t背景黑暗流水线为SC02亮灯埋伏笔\n禁止发生\t背景流水线不得清晰(另见场级/全片通用禁止项)",
      "refs": [
        {
          "label": "CH002 毛小跃",
          "src": "media/img-2e4075a07776b21e3ec6.png"
        },
        {
          "label": "LOC001 金泰前期车间",
          "src": "media/img-c0f50a8c4c1a5325b4ea.png"
        },
        {
          "label": "CH001 金老师",
          "src": "media/img-e0380fbeec3a70be4774.png"
        }
      ],
      "video": "https://github.com/aikingtai-ctrl/jintai-film-showcase/releases/download/media-v1/no-rush-prompts-part1--550b982e3941b7eee472.mp4",
      "thumb": "",
      "seed": "",
      "instance": "",
      "model": "seedance2.5",
      "params": "画布节点 视频生成 #5 · 11s · seedance2.5 · jimeng_multimodal2video",
      "take": "#5",
      "status": "已生成",
      "alts": []
    },
    {
      "id": "SC01-SH06",
      "title": "转场",
      "tc": "",
      "start": 30,
      "duration": 8,
      "framing": "中景 · 缓推",
      "camera": "",
      "lighting": "人物渐入暗部,只剩轮廓光",
      "cast": [
        "CH001",
        "LOC001",
        "PR001"
      ],
      "sceneTag": "@CH001 + @LOC001(夜) + @PR001",
      "action": "@CH001 把 @PR001 轻轻搁在桌面,双手撑桌。 → 起身走向黑暗深处,镜头缓推;他在黑暗边缘停步、侧脸。",
      "picture": "",
      "firstFramePrompt": "",
      "dialogue": [
        {
          "who": "金老师",
          "text": "好。今天这堂课,就讲你这八百一十二条——是怎么死的。"
        }
      ],
      "dialogueText": "(金老师):「好。今天这堂课,就讲你这八百一十二条——是怎么死的。」",
      "sound": "效果：椅脚拖地 / 音乐：低音单音起",
      "notes": "连续性：尾帧黑暗占画面2/3,直切SH07字卡；—(见场级/全片通用禁止项)\n画布上投放的是改写版提示词（全角标点、措辞润色），与分镜页略有差异；此处为画布实际投放文本。",
      "multiShot": false,
      "prompt": "景别 · 机位 · 运动\t中景 · 缓慢推进\n引用（双@）\t@CH001 + @LOC001（夜）+ @PR001\n首帧提示词（静）\t@CH001 将 @PR001 轻轻搁在桌面，双手撑住桌沿。\n动态提示词（动）\t他起身走向黑暗深处，镜头随之缓慢推进；行至明暗交界处，他骤然停步，只露出冷峻侧脸。\n台词与声音（AU01–AU04）\t对白AU01（金老师）：「好。今天这堂课，就讲讲你这八百一十二条——究竟是怎么死的。」\n效果AU03：椅脚拖过地面，发出刺耳摩擦声\n音乐AU04：低沉单音缓缓响起\n光源动机\t人物逐渐没入暗部，最终只余一道轮廓光。\n前后连续性\t尾帧中，黑暗占据画面三分之二；直切SH07字卡。\n禁止发生\t—（见场级／全片通用禁止项）",
      "refs": [
        {
          "label": "CH001 金老师",
          "src": "media/img-e0380fbeec3a70be4774.png"
        },
        {
          "label": "LOC001 金泰前期车间",
          "src": "media/img-c0f50a8c4c1a5325b4ea.png"
        },
        {
          "label": "PR001 红色批准章 / 红门",
          "src": "media/img-4c89aad734a7fe3e8bb7.png"
        }
      ],
      "video": "https://github.com/aikingtai-ctrl/jintai-film-showcase/releases/download/media-v1/no-rush-prompts-part1--9d9b833996cb16486305.mp4",
      "thumb": "",
      "seed": "",
      "instance": "",
      "model": "seedance2.5",
      "params": "画布节点 视频生成 #6 · 8s · seedance2.5 · jimeng_multimodal2video",
      "take": "#6",
      "status": "已生成",
      "alts": []
    },
    {
      "id": "SC01-SH07",
      "title": "转场/留白",
      "tc": "",
      "start": 38,
      "duration": 4,
      "framing": "字卡(无人物)",
      "camera": "",
      "lighting": "纯字卡",
      "cast": [],
      "sceneTag": "字卡镜 · 无资产引用(版式:片头字卡模板)",
      "action": "黑底。主标题「别急着写提示词」白色大字,副题「金泰工作流入门课」小字。 → 字由暗至亮,轻微呼吸感。",
      "picture": "",
      "firstFramePrompt": "",
      "dialogue": [],
      "dialogueText": "无对白",
      "sound": "效果：章印“咚”作落版音 / 音乐：主题动机第一句",
      "notes": "连续性：出字卡后接SC02车间亮灯；纯设计字卡,无多余文字(另见场级/全片通用禁止项)\n画布上投放的是改写版提示词（全角标点、措辞润色），与分镜页略有差异；此处为画布实际投放文本。",
      "multiShot": false,
      "prompt": "景别 · 机位 · 运动\t字卡镜头 · 无人物\n无资产引用（版式：片头字卡模板）\n首帧提示词（静）\t纯黑背景。主标题「别急着写提示词」以白色大字居中呈现；副标题「金泰工作流入门课」以小号字体置于主标题下方。\n动态提示词（动）\t文字由暗渐亮，伴随克制、轻微的呼吸感。\n台词与声音（AU01–AU04）\t效果音 AU03：章印落下，以一声沉稳的“咚”完成落版。\n音乐 AU04：主题动机第一句随字卡显现。\n光源动机\t纯字卡，无实体光源。\n前后连续性\t字卡落版后，切入 SC02 车间亮灯。\n禁止发生\t保持纯设计字卡；不得出现任何多余文字（另见场级／全片通用禁止项）。",
      "refs": [],
      "video": "https://github.com/aikingtai-ctrl/jintai-film-showcase/releases/download/media-v1/no-rush-prompts-part1--d9ac836ca09be68f952b.mp4",
      "thumb": "",
      "seed": "",
      "instance": "",
      "model": "seedance2.5",
      "params": "画布节点 视频生成 #7 · seedance2.5 · jimeng_text2video",
      "take": "#7",
      "status": "已生成",
      "alts": []
    },
    {
      "id": "SC02-SH01",
      "title": "建立空间",
      "tc": "",
      "start": 42,
      "duration": 8,
      "framing": "大全景 · 缓摇/微升",
      "camera": "",
      "lighting": "由暗到满,亮灯即转日景",
      "cast": [
        "CH001",
        "CH002",
        "LOC001"
      ],
      "sceneTag": "@CH001 + @CH002 + @LOC001(日)",
      "action": "黑暗车间,师生两个小剪影立于线首。 → 天窗光起,射灯沿U形流水线逐个“啪”亮,十块工位灯牌与六道红门依次显形,收在全貌。",
      "picture": "",
      "firstFramePrompt": "",
      "dialogue": [
        {
          "who": "小跃",
          "text": "哇……这是生产线?生产视频的?"
        }
      ],
      "dialogueText": "(小跃):「哇……这是生产线?生产视频的?」",
      "sound": "效果：灯组次第开启×10 / 音乐：主题动机展开",
      "notes": "连续性：承SC01字卡;建立全片主空间地理；灯牌仅十站站名(另见场级/全片通用禁止项)",
      "multiShot": false,
      "prompt": "景别 · 机位 · 运动\t大全景 · 缓摇/微升\n引用(双@)\t@CH001 + @CH002 + @LOC001(日)\n首帧提示词(静)\t黑暗车间,师生两个小剪影立于线首。\n动态提示词(动)\t天窗光起,射灯沿U形流水线逐个“啪”亮,十块工位灯牌与六道红门依次显形,收在全貌。\n台词与声音(AU01–AU04)\t对白AU01(小跃):「哇……这是生产线?生产视频的?」\n效果AU03:灯组次第开启×10\n音乐AU04:主题动机展开\n光源动机\t由暗到满,亮灯即转日景\n前后连续性\t承SC01字卡;建立全片主空间地理\n禁止发生\t灯牌仅十站站名(另见场级/全片通用禁止项)",
      "refs": [
        {
          "label": "LOC001 金泰前期车间",
          "src": "media/img-c0f50a8c4c1a5325b4ea.png"
        },
        {
          "label": "CH001 金老师",
          "src": "media/img-e0380fbeec3a70be4774.png"
        },
        {
          "label": "CH002 毛小跃",
          "src": "media/img-2e4075a07776b21e3ec6.png"
        }
      ],
      "video": "https://github.com/aikingtai-ctrl/jintai-film-showcase/releases/download/media-v1/no-rush-prompts-part1--2ef5bac2b88d3a433477.mp4",
      "thumb": "",
      "seed": "",
      "instance": "",
      "model": "seedance2.5",
      "params": "画布节点 视频生成 #8 · 8s · seedance2.5 · jimeng_multimodal2video",
      "take": "#8",
      "status": "已生成",
      "alts": []
    },
    {
      "id": "SC02-SH02",
      "title": "反应",
      "tc": "",
      "start": 50,
      "duration": 5,
      "framing": "中近 · 固定",
      "camera": "",
      "lighting": "射灯侧光",
      "cast": [
        "CH001",
        "LOC001"
      ],
      "sceneTag": "@CH001 + @LOC001(日)",
      "action": "@CH001 负手立于线首,身后传送带纵深。 → 几乎不动,只说话,节奏笃定。",
      "picture": "",
      "firstFramePrompt": "",
      "dialogue": [
        {
          "who": "金老师",
          "text": "不。这条线走到头,一段视频都没有。"
        }
      ],
      "dialogueText": "(金老师):「不。这条线走到头,一段视频都没有。」",
      "sound": "",
      "notes": "连续性：与SH03建立正反打轴线；—(见场级/全片通用禁止项)",
      "multiShot": false,
      "prompt": "景别 · 机位 · 运动\t中近 · 固定\n引用(双@)\t@CH001 + @LOC001(日)\n首帧提示词(静)\t@CH001 负手立于线首,身后传送带纵深。\n动态提示词(动)\t几乎不动,只说话,节奏笃定。\n台词与声音(AU01–AU04)\t对白AU01(金老师):「不。这条线走到头,一段视频都没有。」\n光源动机\t射灯侧光\n前后连续性\t与SH03建立正反打轴线\n禁止发生\t—(见场级/全片通用禁止项)",
      "refs": [
        {
          "label": "CH001 金老师",
          "src": "media/img-e0380fbeec3a70be4774.png"
        },
        {
          "label": "LOC001 金泰前期车间",
          "src": "media/img-c0f50a8c4c1a5325b4ea.png"
        }
      ],
      "video": "https://github.com/aikingtai-ctrl/jintai-film-showcase/releases/download/media-v1/no-rush-prompts-part1--ccb0a2716be97325af06.mp4",
      "thumb": "",
      "seed": "",
      "instance": "",
      "model": "seedance2.5",
      "params": "画布节点 视频生成 #9 · 5s · seedance2.5 · jimeng_multimodal2video",
      "take": "#9",
      "status": "已生成",
      "alts": []
    },
    {
      "id": "SC02-SH03",
      "title": "反应",
      "tc": "",
      "start": 55,
      "duration": 3,
      "framing": "特写",
      "camera": "",
      "lighting": "同场",
      "cast": [
        "CH002",
        "LOC001"
      ],
      "sceneTag": "@CH002 + @LOC001(日)",
      "action": "@CH002 一脸懵。 → 眨眼两次,歪头。",
      "picture": "",
      "firstFramePrompt": "",
      "dialogue": [
        {
          "who": "小跃",
          "text": "啊?那它生产什么?"
        }
      ],
      "dialogueText": "(小跃):「啊?那它生产什么?」",
      "sound": "",
      "notes": "连续性：正反打；—(见场级/全片通用禁止项)",
      "multiShot": false,
      "prompt": "景别 · 机位 · 运动\t特写\n引用(双@)\t@CH002 + @LOC001(日)\n首帧提示词(静)\t@CH002 一脸懵。\n动态提示词(动)\t眨眼两次,歪头。\n台词与声音(AU01–AU04)\t对白AU01(小跃):「啊?那它生产什么?」\n光源动机\t同场\n前后连续性\t正反打\n禁止发生\t—(见场级/全片通用禁止项)",
      "refs": [
        {
          "label": "CH002 毛小跃",
          "src": "media/img-2e4075a07776b21e3ec6.png"
        },
        {
          "label": "LOC001 金泰前期车间",
          "src": "media/img-c0f50a8c4c1a5325b4ea.png"
        }
      ],
      "video": "https://github.com/aikingtai-ctrl/jintai-film-showcase/releases/download/media-v1/no-rush-prompts-part1--04aa045494951d89892a.mp4",
      "thumb": "",
      "seed": "",
      "instance": "",
      "model": "seedance2.5",
      "params": "画布节点 视频生成 #10 · 4s · seedance2.5 · jimeng_multimodal2video",
      "take": "#10",
      "status": "已生成",
      "alts": []
    },
    {
      "id": "SC02-SH04",
      "title": "动作/物证",
      "tc": "",
      "start": 58,
      "duration": 14,
      "framing": "中景 · 跟移至线尾",
      "camera": "",
      "lighting": "线尾顶灯,箱体高光",
      "cast": [
        "CH001",
        "LOC001",
        "PR002"
      ],
      "sceneTag": "@CH001 + @LOC001(日) + @PR002",
      "action": "@CH001 沿传送带走向线尾,镜头同速跟移,尽头金色箱子渐大。 → 到线尾,手掌拍在 @PR002 箱盖上;落幅在箱体铭牌「视频生成就绪包」。",
      "picture": "",
      "firstFramePrompt": "",
      "dialogue": [
        {
          "who": "金老师",
          "text": "生产这个——视频生成就绪包。镜头清单齐了,资产引用有效,关键帧批过,逐镜提示词生成,命名统一,质检通过,装箱。视频,是箱子交出去之后的事。"
        }
      ],
      "dialogueText": "(金老师):「生产这个——视频生成就绪包。镜头清单齐了,资产引用有效,关键帧批过,逐镜提示词生成,命名统一,质检通过,装箱。视频,是箱子交出去之后的事。」",
      "sound": "效果：拍箱两声",
      "notes": "连续性：@PR002 位置与SC05/SC07一致；铭牌仅七字(另见场级/全片通用禁止项)",
      "multiShot": false,
      "prompt": "景别 · 机位 · 运动\t中景 · 跟移至线尾\n引用(双@)\t@CH001 + @LOC001(日) + @PR002\n首帧提示词(静)\t@CH001 沿传送带走向线尾,镜头同速跟移,尽头金色箱子渐大。\n动态提示词(动)\t到线尾,手掌拍在 @PR002 箱盖上;落幅在箱体铭牌「视频生成就绪包」。\n台词与声音(AU01–AU04)\t对白AU01(金老师):「生产这个——视频生成就绪包。镜头清单齐了,资产引用有效,关键帧批过,逐镜提示词生成,命名统一,质检通过,装箱。视频,是箱子交出去之后的事。」\n效果AU03:拍箱两声\n光源动机\t线尾顶灯,箱体高光\n前后连续性\t@PR002 位置与SC05/SC07一致\n禁止发生\t铭牌仅七字(另见场级/全片通用禁止项)",
      "refs": [
        {
          "label": "CH001 金老师",
          "src": "media/img-e0380fbeec3a70be4774.png"
        },
        {
          "label": "PR002 金色就绪包箱",
          "src": "media/img-deb3d6243beea983aaf3.png"
        },
        {
          "label": "LOC001 金泰前期车间",
          "src": "media/img-c0f50a8c4c1a5325b4ea.png"
        }
      ],
      "video": "https://github.com/aikingtai-ctrl/jintai-film-showcase/releases/download/media-v1/no-rush-prompts-part1--545fa3e5eba6b2e3a605.mp4",
      "thumb": "",
      "seed": "",
      "instance": "",
      "model": "seedance2.5",
      "params": "画布节点 视频生成 #11 · 14s · seedance2.5 · jimeng_multimodal2video",
      "take": "#11",
      "status": "已生成",
      "alts": []
    },
    {
      "id": "SC02-SH05",
      "title": "人物关系",
      "tc": "",
      "start": 72,
      "duration": 7,
      "framing": "双人中景",
      "camera": "",
      "lighting": "同场",
      "cast": [
        "CH001",
        "CH002",
        "LOC001",
        "PR002"
      ],
      "sceneTag": "@CH001 + @CH002 + @LOC001(日) + @PR002",
      "action": "师生面对面,金箱在两人之间的背景上。 → 小跃抢话前倾,老师一句顶回,小跃僵住。",
      "picture": "",
      "firstFramePrompt": "",
      "dialogue": [
        {
          "who": "小跃",
          "text": "绕这么大一圈?我直接写提示词,不就完了吗!"
        },
        {
          "who": "金老师",
          "text": "你写了。八百一十二条。"
        }
      ],
      "dialogueText": "(小跃):「绕这么大一圈?我直接写提示词,不就完了吗!」(金老师):「你写了。八百一十二条。」",
      "sound": "",
      "notes": "连续性：承SH04位置；—(见场级/全片通用禁止项)",
      "multiShot": false,
      "prompt": "景别 · 机位 · 运动\t双人中景\n引用(双@)\t@CH001 + @CH002 + @LOC001(日) + @PR002\n首帧提示词(静)\t师生面对面,金箱在两人之间的背景上。\n动态提示词(动)\t小跃抢话前倾,老师一句顶回,小跃僵住。\n台词与声音(AU01–AU04)\t对白AU01(小跃):「绕这么大一圈?我直接写提示词,不就完了吗!」(金老师):「你写了。八百一十二条。」\n光源动机\t同场\n前后连续性\t承SH04位置\n禁止发生\t—(见场级/全片通用禁止项)",
      "refs": [
        {
          "label": "CH001 金老师",
          "src": "media/img-e0380fbeec3a70be4774.png"
        },
        {
          "label": "LOC001 金泰前期车间",
          "src": "media/img-c0f50a8c4c1a5325b4ea.png"
        },
        {
          "label": "CH002 毛小跃",
          "src": "media/img-2e4075a07776b21e3ec6.png"
        },
        {
          "label": "PR002 金色就绪包箱",
          "src": "media/img-deb3d6243beea983aaf3.png"
        }
      ],
      "video": "https://github.com/aikingtai-ctrl/jintai-film-showcase/releases/download/media-v1/no-rush-prompts-part1--fa0ae27b3fe68b76aa51.mp4",
      "thumb": "",
      "seed": "",
      "instance": "",
      "model": "seedance2.5",
      "params": "画布节点 视频生成 #12 · 7s · seedance2.5 · jimeng_multimodal2video",
      "take": "#12",
      "status": "已生成",
      "alts": []
    },
    {
      "id": "SC02-SH06",
      "title": "动作",
      "tc": "",
      "start": 79,
      "duration": 16,
      "framing": "中景缓推 + 流水线示意插入",
      "camera": "",
      "lighting": "射灯主光+灯带",
      "cast": [
        "CH001",
        "LOC001"
      ],
      "sceneTag": "@CH001 + @LOC001(日)",
      "action": "@CH001 面向镜头,身后流水线纵深虚化。 → 缓推;说到五段顺序时插入流水线五段依次亮起箭头灯带的空镜;画面下沿叠大字卡「顺序不可倒置」。",
      "picture": "",
      "firstFramePrompt": "",
      "dialogue": [
        {
          "who": "金老师",
          "text": "这条线只有一个铁律:顺序不可倒置。导演和叙事先定,工种再深化,资产再锁定,镜头再数据化,最后才轮到批量生成。先堆提示词,再反过来猜故事、猜人物——就是你那八百多条的死法。"
        }
      ],
      "dialogueText": "(金老师):「这条线只有一个铁律:顺序不可倒置。导演和叙事先定,工种再深化,资产再锁定,镜头再数据化,最后才轮到批量生成。先堆提示词,再反过来猜故事、猜人物——就是你那八百多条的死法。」",
      "sound": "音乐：低垫",
      "notes": "连续性：金句字卡版式全片统一；箭头灯带只准正向流动(另见场级/全片通用禁止项)",
      "multiShot": false,
      "prompt": "景别 · 机位 · 运动\t中景缓推 + 流水线示意插入\n引用(双@)\t@CH001 + @LOC001(日)\n首帧提示词(静)\t@CH001 面向镜头,身后流水线纵深虚化。\n动态提示词(动)\t缓推;说到五段顺序时插入流水线五段依次亮起箭头灯带的空镜;画面下沿叠大字卡「顺序不可倒置」。\n台词与声音(AU01–AU04)\t对白AU01(金老师):「这条线只有一个铁律:顺序不可倒置。导演和叙事先定,工种再深化,资产再锁定,镜头再数据化,最后才轮到批量生成。先堆提示词,再反过来猜故事、猜人物——就是你那八百多条的死法。」\n音乐AU04:低垫\n光源动机\t射灯主光+灯带\n前后连续性\t金句字卡版式全片统一\n禁止发生\t箭头灯带只准正向流动(另见场级/全片通用禁止项)",
      "refs": [
        {
          "label": "CH001 金老师",
          "src": "media/img-e0380fbeec3a70be4774.png"
        },
        {
          "label": "LOC001 金泰前期车间",
          "src": "media/img-c0f50a8c4c1a5325b4ea.png"
        }
      ],
      "video": "https://github.com/aikingtai-ctrl/jintai-film-showcase/releases/download/media-v1/no-rush-prompts-part1--7d715cd84228826dc2c5.mp4",
      "thumb": "",
      "seed": "",
      "instance": "",
      "model": "seedance2.5",
      "params": "画布节点 视频生成 #13 · 16s · seedance2.5 · jimeng_multimodal2video",
      "take": "#13",
      "status": "已生成",
      "alts": []
    },
    {
      "id": "SC02-SH07",
      "title": "反应(笑点)",
      "tc": "",
      "start": 95,
      "duration": 8,
      "framing": "双人正反打",
      "camera": "",
      "lighting": "同场",
      "cast": [
        "CH001",
        "CH002",
        "LOC001"
      ],
      "sceneTag": "@CH001 + @CH002 + @LOC001(日)",
      "action": "小跃不服前倾,老师平静。 → 小跃比划“三百字”,老师一句收梗,小跃噎住。",
      "picture": "",
      "firstFramePrompt": "",
      "dialogue": [
        {
          "who": "小跃",
          "text": "可我提示词写得很用力啊!每条三百字!"
        },
        {
          "who": "金老师",
          "text": "三百字里没有一个字有出处。那不叫提示词,叫许愿。"
        }
      ],
      "dialogueText": "(小跃):「可我提示词写得很用力啊!每条三百字!」(金老师):「三百字里没有一个字有出处。那不叫提示词,叫许愿。」",
      "sound": "效果：轻木鱼一声",
      "notes": "老师不得笑(另见场级/全片通用禁止项)",
      "multiShot": false,
      "prompt": "景别 · 机位 · 运动\t双人正反打\n引用(双@)\t@CH001 + @CH002 + @LOC001(日)\n首帧提示词(静)\t小跃不服前倾,老师平静。\n动态提示词(动)\t小跃比划“三百字”,老师一句收梗,小跃噎住。\n台词与声音(AU01–AU04)\t对白AU01(小跃):「可我提示词写得很用力啊!每条三百字!」(金老师):「三百字里没有一个字有出处。那不叫提示词,叫许愿。」\n效果AU03:轻木鱼一声\n光源动机\t同场\n前后连续性\t—\n禁止发生\t老师不得笑(另见场级/全片通用禁止项)",
      "refs": [
        {
          "label": "CH001 金老师",
          "src": "media/img-e0380fbeec3a70be4774.png"
        },
        {
          "label": "CH002 毛小跃",
          "src": "media/img-2e4075a07776b21e3ec6.png"
        },
        {
          "label": "LOC001 金泰前期车间",
          "src": "media/img-c0f50a8c4c1a5325b4ea.png"
        }
      ],
      "video": "https://github.com/aikingtai-ctrl/jintai-film-showcase/releases/download/media-v1/no-rush-prompts-part1--23acc1460b94d7da6041.mp4",
      "thumb": "",
      "seed": "",
      "instance": "",
      "model": "seedance2.5",
      "params": "画布节点 视频生成 #14 · 8s · seedance2.5 · jimeng_multimodal2video",
      "take": "#14",
      "status": "已生成",
      "alts": []
    },
    {
      "id": "SC02-SH08",
      "title": "建立/动作(小助登场)",
      "tc": "",
      "start": 103,
      "duration": 6,
      "framing": "全景 · 快速横移",
      "camera": "",
      "lighting": "蓝光轨自发光",
      "cast": [
        "CH003",
        "LOC001"
      ],
      "sceneTag": "@CH003 + @LOC001(日)",
      "action": "空长桌满画。 → 一道浅蓝光轨从画左滑入,@CH003 急停立正;桌上以残影快剪瞬间码起一米高文档;胸屏亮「已就绪。」",
      "picture": "",
      "firstFramePrompt": "",
      "dialogue": [],
      "dialogueText": "无对白",
      "sound": "效果：嗖——+纸摞“噗”+电子提示音",
      "notes": "连续性：小助首次登场,光轨=专属视觉签名；胸屏仅「已就绪。」(另见场级/全片通用禁止项)",
      "multiShot": false,
      "prompt": "景别 · 机位 · 运动\t全景 · 快速横移\n引用(双@)\t@CH003 + @LOC001(日)\n首帧提示词(静)\t空长桌满画。\n动态提示词(动)\t一道浅蓝光轨从画左滑入,@CH003 急停立正;桌上以残影快剪瞬间码起一米高文档;胸屏亮「已就绪。」\n台词与声音(AU01–AU04)\t效果AU03:嗖——+纸摞“噗”+电子提示音\n光源动机\t蓝光轨自发光\n前后连续性\t小助首次登场,光轨=专属视觉签名\n禁止发生\t胸屏仅「已就绪。」(另见场级/全片通用禁止项)",
      "refs": [
        {
          "label": "CH003 执行助手「小助」",
          "src": "media/img-415cf94e5ac60eb6b830.png"
        },
        {
          "label": "LOC001 金泰前期车间",
          "src": "media/img-c0f50a8c4c1a5325b4ea.png"
        }
      ],
      "video": "https://github.com/aikingtai-ctrl/jintai-film-showcase/releases/download/media-v1/no-rush-prompts-part1--4b647695bbef8a589628.mp4",
      "thumb": "",
      "seed": "",
      "instance": "",
      "model": "seedance2.5",
      "params": "画布节点 视频生成 #15 · 6s · seedance2.5 · jimeng_multimodal2video",
      "take": "#15",
      "status": "已生成",
      "alts": []
    },
    {
      "id": "SC02-SH09",
      "title": "反应",
      "tc": "",
      "start": 109,
      "duration": 4,
      "framing": "近景",
      "camera": "",
      "lighting": "同场",
      "cast": [
        "CH002",
        "CH003",
        "LOC001"
      ],
      "sceneTag": "@CH002 + @CH003 + @LOC001(日)",
      "action": "小跃后仰半步瞪眼,前景虚焦小助立正。 → 指着小助结巴。",
      "picture": "",
      "firstFramePrompt": "",
      "dialogue": [
        {
          "who": "小跃",
          "text": "这、这是谁?!"
        }
      ],
      "dialogueText": "(小跃):「这、这是谁?!」",
      "sound": "",
      "notes": "—(见场级/全片通用禁止项)",
      "multiShot": false,
      "prompt": "景别 · 机位 · 运动\t近景\n引用(双@)\t@CH002 + @CH003 + @LOC001(日)\n首帧提示词(静)\t小跃后仰半步瞪眼,前景虚焦小助立正。\n动态提示词(动)\t指着小助结巴。\n台词与声音(AU01–AU04)\t对白AU01(小跃):「这、这是谁?!」\n光源动机\t同场\n前后连续性\t—\n禁止发生\t—(见场级/全片通用禁止项)",
      "refs": [
        {
          "label": "CH002 毛小跃",
          "src": "media/img-2e4075a07776b21e3ec6.png"
        },
        {
          "label": "LOC001 金泰前期车间",
          "src": "media/img-c0f50a8c4c1a5325b4ea.png"
        },
        {
          "label": "CH003 执行助手「小助」",
          "src": "media/img-415cf94e5ac60eb6b830.png"
        }
      ],
      "video": "https://github.com/aikingtai-ctrl/jintai-film-showcase/releases/download/media-v1/no-rush-prompts-part1--1d0b1894f72add0d1d05.mp4",
      "thumb": "",
      "seed": "",
      "instance": "",
      "model": "seedance2.5",
      "params": "画布节点 视频生成 #16 · 4s · seedance2.5 · jimeng_multimodal2video",
      "take": "#16",
      "status": "已生成",
      "alts": []
    },
    {
      "id": "SC02-SH10",
      "title": "动作",
      "tc": "",
      "start": 113,
      "duration": 9,
      "framing": "中景",
      "camera": "",
      "lighting": "同场",
      "cast": [
        "CH001",
        "CH003",
        "LOC001"
      ],
      "sceneTag": "@CH001 + @CH003 + @LOC001(日)",
      "action": "老师走到小助旁,手搭其圆头顶。 → 介绍词间,小助胸屏配合闪「归档中。」",
      "picture": "",
      "firstFramePrompt": "",
      "dialogue": [
        {
          "who": "金老师",
          "text": "执行助手。这条线上十个阶段的文档、拆解、编号、编译、检查,全是它干。快得很,一天干你一年的活。"
        }
      ],
      "dialogueText": "(金老师):「执行助手。这条线上十个阶段的文档、拆解、编号、编译、检查,全是它干。快得很,一天干你一年的活。」",
      "sound": "",
      "notes": "全片只称“执行助手”(另见场级/全片通用禁止项)",
      "multiShot": false,
      "prompt": "景别 · 机位 · 运动\t中景\n引用(双@)\t@CH001 + @CH003 + @LOC001(日)\n首帧提示词(静)\t老师走到小助旁,手搭其圆头顶。\n动态提示词(动)\t介绍词间,小助胸屏配合闪「归档中。」\n台词与声音(AU01–AU04)\t对白AU01(金老师):「执行助手。这条线上十个阶段的文档、拆解、编号、编译、检查,全是它干。快得很,一天干你一年的活。」\n光源动机\t同场\n前后连续性\t—\n禁止发生\t全片只称“执行助手”(另见场级/全片通用禁止项)",
      "refs": [
        {
          "label": "CH003 执行助手「小助」",
          "src": "media/img-415cf94e5ac60eb6b830.png"
        },
        {
          "label": "LOC001 金泰前期车间",
          "src": "media/img-c0f50a8c4c1a5325b4ea.png"
        },
        {
          "label": "CH001 金老师",
          "src": "media/img-e0380fbeec3a70be4774.png"
        }
      ],
      "video": "https://github.com/aikingtai-ctrl/jintai-film-showcase/releases/download/media-v1/no-rush-prompts-part1--adfd8ce8d94e57ec746f.mp4",
      "thumb": "",
      "seed": "",
      "instance": "",
      "model": "seedance2.5",
      "params": "画布节点 视频生成 #17 · 9s · seedance2.5 · jimeng_multimodal2video",
      "take": "#17",
      "status": "已生成",
      "alts": []
    },
    {
      "id": "SC02-SH11",
      "title": "物证",
      "tc": "",
      "start": 122,
      "duration": 11,
      "framing": "双人中景 · 红门纵深",
      "camera": "",
      "lighting": "红门灯带微亮",
      "cast": [
        "CH001",
        "CH002",
        "LOC001",
        "PR001"
      ],
      "sceneTag": "@CH001 + @CH002 + @LOC001(日) + @PR001",
      "action": "构图把六道红门排进背景纵深,老师举起 @PR001。 → 章在指间一转,指向红门。",
      "picture": "",
      "firstFramePrompt": "",
      "dialogue": [
        {
          "who": "小跃",
          "text": "那……还要我们人干嘛?"
        },
        {
          "who": "金老师",
          "text": "干这个。六道门,它一道都过不去。它把文件举到门口——章,只能人来盖。"
        }
      ],
      "dialogueText": "(小跃):「那……还要我们人干嘛?」(金老师):「干这个。六道门,它一道都过不去。它把文件举到门口——章,只能人来盖。」",
      "sound": "",
      "notes": "连续性：六门首次点题；红门保持关闭(另见场级/全片通用禁止项)",
      "multiShot": false,
      "prompt": "景别 · 机位 · 运动\t双人中景 · 红门纵深\n引用(双@)\t@CH001 + @CH002 + @LOC001(日) + @PR001\n首帧提示词(静)\t构图把六道红门排进背景纵深,老师举起 @PR001。\n动态提示词(动)\t章在指间一转,指向红门。\n台词与声音(AU01–AU04)\t对白AU01(小跃):「那……还要我们人干嘛?」(金老师):「干这个。六道门,它一道都过不去。它把文件举到门口——章,只能人来盖。」\n光源动机\t红门灯带微亮\n前后连续性\t六门首次点题\n禁止发生\t红门保持关闭(另见场级/全片通用禁止项)",
      "refs": [
        {
          "label": "PR001 红色批准章 / 红门",
          "src": "media/img-4c89aad734a7fe3e8bb7.png"
        },
        {
          "label": "CH001 金老师",
          "src": "media/img-e0380fbeec3a70be4774.png"
        },
        {
          "label": "CH002 毛小跃",
          "src": "media/img-2e4075a07776b21e3ec6.png"
        },
        {
          "label": "LOC001 金泰前期车间",
          "src": "media/img-c0f50a8c4c1a5325b4ea.png"
        }
      ],
      "video": "https://github.com/aikingtai-ctrl/jintai-film-showcase/releases/download/media-v1/no-rush-prompts-part1--e734c6cad3945fcffdb7.mp4",
      "thumb": "",
      "seed": "",
      "instance": "",
      "model": "seedance2.5",
      "params": "画布节点 视频生成 #18 · 11s · seedance2.5 · jimeng_multimodal2video",
      "take": "#18",
      "status": "已生成",
      "alts": []
    },
    {
      "id": "SC02-SH12",
      "title": "反应(笑点:越权)",
      "tc": "",
      "start": 133,
      "duration": 7,
      "framing": "中近三人",
      "camera": "",
      "lighting": "胸屏红光点脸",
      "cast": [
        "CH001",
        "CH002",
        "CH003",
        "LOC001"
      ],
      "sceneTag": "@CH001 + @CH002 + @CH003 + @LOC001(日)",
      "action": "小跃转向小助,一脸怂恿。 → 话音落,小助胸屏瞬间变红「越权。」并自动后退半步;小跃讪讪收手。",
      "picture": "",
      "firstFramePrompt": "",
      "dialogue": [
        {
          "who": "小跃",
          "text": "为什么不让它自己盖?多快啊!"
        }
      ],
      "dialogueText": "(小跃):「为什么不让它自己盖?多快啊!」",
      "sound": "效果：警示“叮”",
      "notes": "连续性：小助守规矩人设立住；红字仅「越权。」(另见场级/全片通用禁止项)",
      "multiShot": false,
      "prompt": "景别 · 机位 · 运动\t中近三人\n引用(双@)\t@CH001 + @CH002 + @CH003 + @LOC001(日)\n首帧提示词(静)\t小跃转向小助,一脸怂恿。\n动态提示词(动)\t话音落,小助胸屏瞬间变红「越权。」并自动后退半步;小跃讪讪收手。\n台词与声音(AU01–AU04)\t对白AU01(小跃):「为什么不让它自己盖?多快啊!」\n效果AU03:警示“叮”\n光源动机\t胸屏红光点脸\n前后连续性\t小助守规矩人设立住\n禁止发生\t红字仅「越权。」(另见场级/全片通用禁止项)",
      "refs": [
        {
          "label": "CH002 毛小跃",
          "src": "media/img-2e4075a07776b21e3ec6.png"
        },
        {
          "label": "LOC001 金泰前期车间",
          "src": "media/img-c0f50a8c4c1a5325b4ea.png"
        },
        {
          "label": "CH003 执行助手「小助」",
          "src": "media/img-415cf94e5ac60eb6b830.png"
        },
        {
          "label": "CH001 金老师",
          "src": "media/img-e0380fbeec3a70be4774.png"
        }
      ],
      "video": "https://github.com/aikingtai-ctrl/jintai-film-showcase/releases/download/media-v1/no-rush-prompts-part1--b06027c31f5c215ac28e.mp4",
      "thumb": "",
      "seed": "",
      "instance": "",
      "model": "seedance2.5",
      "params": "画布节点 视频生成 #19 · 7s · seedance2.5 · jimeng_multimodal2video",
      "take": "#19",
      "status": "已生成",
      "alts": []
    },
    {
      "id": "SC02-SH13",
      "title": "主题",
      "tc": "",
      "start": 140,
      "duration": 8,
      "framing": "近景 + 大字卡",
      "camera": "",
      "lighting": "同场",
      "cast": [
        "CH001",
        "LOC001"
      ],
      "sceneTag": "@CH001 + @LOC001(日)",
      "action": "@CH001 正面近景,目光沉稳。 → 八字口播,画面下沿叠大字卡「机器做多,人做对」。",
      "picture": "",
      "firstFramePrompt": "",
      "dialogue": [
        {
          "who": "金老师",
          "text": "快是它的事,对是人的事。记住八个字——机器做多,人做对。"
        }
      ],
      "dialogueText": "(金老师):「快是它的事,对是人的事。记住八个字——机器做多,人做对。」",
      "sound": "音乐：动机重音",
      "notes": "连续性：全片题眼首次完整亮出；字卡字形与片头统一(另见场级/全片通用禁止项)",
      "multiShot": false,
      "prompt": "景别 · 机位 · 运动\t近景 + 大字卡\n引用(双@)\t@CH001 + @LOC001(日)\n首帧提示词(静)\t@CH001 正面近景,目光沉稳。\n动态提示词(动)\t八字口播,画面下沿叠大字卡「机器做多,人做对」。\n台词与声音(AU01–AU04)\t对白AU01(金老师):「快是它的事,对是人的事。记住八个字——机器做多,人做对。」\n音乐AU04:动机重音\n光源动机\t同场\n前后连续性\t全片题眼首次完整亮出\n禁止发生\t字卡字形与片头统一(另见场级/全片通用禁止项)",
      "refs": [
        {
          "label": "CH001 金老师",
          "src": "media/img-e0380fbeec3a70be4774.png"
        },
        {
          "label": "LOC001 金泰前期车间",
          "src": "media/img-c0f50a8c4c1a5325b4ea.png"
        }
      ],
      "video": "https://github.com/aikingtai-ctrl/jintai-film-showcase/releases/download/media-v1/no-rush-prompts-part1--595af7502840eb6e510d.mp4",
      "thumb": "",
      "seed": "",
      "instance": "",
      "model": "seedance2.5",
      "params": "画布节点 视频生成 #20 · 8s · seedance2.5 · jimeng_multimodal2video",
      "take": "#20",
      "status": "已生成",
      "alts": []
    },
    {
      "id": "SC02-SH14",
      "title": "物证",
      "tc": "",
      "start": 148,
      "duration": 15,
      "framing": "摇镜 + 三牌特写串切",
      "camera": "",
      "lighting": "墙面洗墙灯",
      "cast": [
        "CH001",
        "LOC001"
      ],
      "sceneTag": "@CH001(画外) + @LOC001(日)",
      "action": "墙面三块大牌满画:内容母版 / 视觉资产母版 / 镜头数据母版。 → 逐块推近,每块牌下亮出小字答语(讲什么/谁在哪穿什么拿什么/怎么拍怎么动怎么听)。",
      "picture": "",
      "firstFramePrompt": "",
      "dialogue": [
        {
          "who": "金老师,画外",
          "text": "再记三本账。第一本管“讲什么”,第二本管“谁、在哪、穿什么、拿什么”,第三本管“怎么拍、怎么动、怎么听”。三本账各记各的,谁也不准替谁记,改任何一本,都要查另外两本受不受影响。你那八百多条,三本账一本都没有。"
        }
      ],
      "dialogueText": "(金老师,画外):「再记三本账。第一本管“讲什么”,第二本管“谁、在哪、穿什么、拿什么”,第三本管“怎么拍、怎么动、怎么听”。三本账各记各的,谁也不准替谁记,改任何一本,都要查另外两本受不受影响。你那八百多条,三本账一本都没有。」",
      "sound": "",
      "notes": "连续性：三牌=LOC001固定陈设；牌面文字不得增删(另见场级/全片通用禁止项)",
      "multiShot": false,
      "prompt": "景别 · 机位 · 运动\t摇镜 + 三牌特写串切\n引用(双@)\t@CH001(画外) + @LOC001(日)\n首帧提示词(静)\t墙面三块大牌满画:内容母版 / 视觉资产母版 / 镜头数据母版。\n动态提示词(动)\t逐块推近,每块牌下亮出小字答语(讲什么/谁在哪穿什么拿什么/怎么拍怎么动怎么听)。\n台词与声音(AU01–AU04)\t对白AU01(金老师,画外):「再记三本账。第一本管“讲什么”,第二本管“谁、在哪、穿什么、拿什么”,第三本管“怎么拍、怎么动、怎么听”。三本账各记各的,谁也不准替谁记,改任何一本,都要查另外两本受不受影响。你那八百多条,三本账一本都没有。」\n光源动机\t墙面洗墙灯\n前后连续性\t三牌=LOC001固定陈设\n禁止发生\t牌面文字不得增删(另见场级/全片通用禁止项)",
      "refs": [
        {
          "label": "CH001 金老师",
          "src": "media/img-e0380fbeec3a70be4774.png"
        },
        {
          "label": "LOC001 金泰前期车间",
          "src": "media/img-c0f50a8c4c1a5325b4ea.png"
        }
      ],
      "video": "https://github.com/aikingtai-ctrl/jintai-film-showcase/releases/download/media-v1/no-rush-prompts-part1--9a06edb6607d1c083f3d.mp4",
      "thumb": "",
      "seed": "",
      "instance": "",
      "model": "seedance2.5",
      "params": "画布节点 视频生成 #21 · 15s · seedance2.5 · jimeng_multimodal2video",
      "take": "#21",
      "status": "已生成",
      "alts": []
    },
    {
      "id": "SC02-SH15",
      "title": "转场",
      "tc": "",
      "start": 163,
      "duration": 5,
      "framing": "双人背影 · 走向P0",
      "camera": "",
      "lighting": "同场",
      "cast": [
        "CH001",
        "CH002",
        "LOC001"
      ],
      "sceneTag": "@CH001 + @CH002 + @LOC001(日)",
      "action": "两人背影并肩走向P0工位,U形线延伸。 → 小跃小跑两步跟上。",
      "picture": "",
      "firstFramePrompt": "",
      "dialogue": [
        {
          "who": "小跃",
          "text": "那我现在开始记!从哪儿记起?"
        },
        {
          "who": "金老师",
          "text": "从第一站,走。"
        }
      ],
      "dialogueText": "(小跃):「那我现在开始记!从哪儿记起?」(金老师):「从第一站,走。」",
      "sound": "",
      "notes": "连续性：尾接SC03-SH01；—(见场级/全片通用禁止项)",
      "multiShot": false,
      "prompt": "景别 · 机位 · 运动\t双人背影 · 走向P0\n引用(双@)\t@CH001 + @CH002 + @LOC001(日)\n首帧提示词(静)\t两人背影并肩走向P0工位,U形线延伸。\n动态提示词(动)\t小跃小跑两步跟上。\n台词与声音(AU01–AU04)\t对白AU01(小跃):「那我现在开始记!从哪儿记起?」(金老师):「从第一站,走。」\n光源动机\t同场\n前后连续性\t尾接SC03-SH01\n禁止发生\t—(见场级/全片通用禁止项)",
      "refs": [
        {
          "label": "CH001 金老师",
          "src": "media/img-e0380fbeec3a70be4774.png"
        },
        {
          "label": "CH002 毛小跃",
          "src": "media/img-2e4075a07776b21e3ec6.png"
        },
        {
          "label": "LOC001 金泰前期车间",
          "src": "media/img-c0f50a8c4c1a5325b4ea.png"
        }
      ],
      "video": "https://github.com/aikingtai-ctrl/jintai-film-showcase/releases/download/media-v1/no-rush-prompts-part1--557c7f9432f827d04580.mp4",
      "thumb": "",
      "seed": "",
      "instance": "",
      "model": "seedance2.5",
      "params": "画布节点 视频生成 #22 · seedance2.5 · jimeng_multimodal2video",
      "take": "#22",
      "status": "已生成",
      "alts": []
    },
    {
      "id": "SC03-SH01",
      "title": "建立/物证",
      "tc": "",
      "start": 168,
      "duration": 7,
      "framing": "中景 · P0台",
      "camera": "",
      "lighting": "工位射灯",
      "cast": [
        "CH001",
        "CH002",
        "LOC001"
      ],
      "sceneTag": "@CH001 + @CH002 + @LOC001(日)",
      "action": "P0工位台面三块字段牌立定:project_code / display_title / source_title,二人入画。 → 老师逐块点牌。",
      "picture": "",
      "firstFramePrompt": "",
      "dialogue": [
        {
          "who": "金老师",
          "text": "第一站,立项。人来定边界:版权、受众、画幅、片长、集数、风格、产能。它建档。"
        }
      ],
      "dialogueText": "(金老师):「第一站,立项。人来定边界:版权、受众、画幅、片长、集数、风格、产能。它建档。」",
      "sound": "",
      "notes": "连续性：上排巡线开始；牌面仅三字段名(另见场级/全片通用禁止项)",
      "multiShot": false,
      "prompt": "景别 · 机位 · 运动\t中景 · P0台\n引用(双@)\t@CH001 + @CH002 + @LOC001(日)\n首帧提示词(静)\tP0工位台面三块字段牌立定:project_code / display_title / source_title,二人入画。\n动态提示词(动)\t老师逐块点牌。\n台词与声音(AU01–AU04)\t对白AU01(金老师):「第一站,立项。人来定边界:版权、受众、画幅、片长、集数、风格、产能。它建档。」\n光源动机\t工位射灯\n前后连续性\t上排巡线开始\n禁止发生\t牌面仅三字段名(另见场级/全片通用禁止项)",
      "refs": [
        {
          "label": "CH001 金老师",
          "src": "media/img-e0380fbeec3a70be4774.png"
        },
        {
          "label": "CH002 毛小跃",
          "src": "media/img-2e4075a07776b21e3ec6.png"
        },
        {
          "label": "LOC001 金泰前期车间",
          "src": "media/img-c0f50a8c4c1a5325b4ea.png"
        }
      ],
      "video": "https://github.com/aikingtai-ctrl/jintai-film-showcase/releases/download/media-v1/no-rush-prompts-part1--6e93b0baea9573432742.mp4",
      "thumb": "",
      "seed": "",
      "instance": "",
      "model": "seedance2.5",
      "params": "画布节点 视频生成 #23 · 7s · seedance2.5 · jimeng_multimodal2video",
      "take": "#23",
      "status": "已生成",
      "alts": []
    },
    {
      "id": "SC03-SH02",
      "title": "反应",
      "tc": "",
      "start": 175,
      "duration": 4,
      "framing": "近景",
      "camera": "",
      "lighting": "同场",
      "cast": [
        "CH002",
        "LOC001"
      ],
      "sceneTag": "@CH002 + @LOC001(日)",
      "action": "小跃撇嘴。 → 摊手。",
      "picture": "",
      "firstFramePrompt": "",
      "dialogue": [
        {
          "who": "小跃",
          "text": "这也要一站?名字随便起一个呗。"
        }
      ],
      "dialogueText": "(小跃):「这也要一站?名字随便起一个呗。」",
      "sound": "",
      "notes": "—(见场级/全片通用禁止项)",
      "multiShot": false,
      "prompt": "景别 · 机位 · 运动\t近景\n引用(双@)\t@CH002 + @LOC001(日)\n首帧提示词(静)\t小跃撇嘴。\n动态提示词(动)\t摊手。\n台词与声音(AU01–AU04)\t对白AU01(小跃):「这也要一站?名字随便起一个呗。」\n光源动机\t同场\n前后连续性\t—\n禁止发生\t—(见场级/全片通用禁止项)",
      "refs": [
        {
          "label": "LOC001 金泰前期车间",
          "src": "media/img-c0f50a8c4c1a5325b4ea.png"
        },
        {
          "label": "CH002 毛小跃",
          "src": "media/img-2e4075a07776b21e3ec6.png"
        }
      ],
      "video": "https://github.com/aikingtai-ctrl/jintai-film-showcase/releases/download/media-v1/no-rush-prompts-part1--64ce2a6249771a81c4e2.mp4",
      "thumb": "",
      "seed": "",
      "instance": "",
      "model": "seedance2.5",
      "params": "画布节点 视频生成 #24 · 4s · seedance2.5 · jimeng_multimodal2video",
      "take": "#24",
      "status": "已生成",
      "alts": []
    },
    {
      "id": "SC03-SH03",
      "title": "反应(笑点:项目名漂移)",
      "tc": "",
      "start": 179,
      "duration": 12,
      "framing": "双人正反打",
      "camera": "",
      "lighting": "同场",
      "cast": [
        "CH001",
        "CH002",
        "LOC001"
      ],
      "sceneTag": "@CH001 + @CH002 + @LOC001(日)",
      "action": "老师似笑非笑,小跃回忆状。 → 小跃掰指头报名字,越报越心虚。",
      "picture": "",
      "firstFramePrompt": "",
      "dialogue": [
        {
          "who": "金老师",
          "text": "你上个项目叫什么?"
        },
        {
          "who": "小跃",
          "text": "《大明风云》。哦不对,中途我改成《风云大明》了。后来文件夹里还有一个《明风云·终版》,一个《终版的终版》,一个《真·终版勿删》……"
        }
      ],
      "dialogueText": "(金老师):「你上个项目叫什么?」(小跃):「《大明风云》。哦不对,中途我改成《风云大明》了。后来文件夹里还有一个《明风云·终版》,一个《终版的终版》,一个《真·终版勿删》……」",
      "sound": "效果：每报一名配一声“啵”",
      "notes": "片名只口播(另见场级/全片通用禁止项)",
      "multiShot": false,
      "prompt": "景别 · 机位 · 运动\t双人正反打\n引用(双@)\t@CH001 + @CH002 + @LOC001(日)\n首帧提示词(静)\t老师似笑非笑,小跃回忆状。\n动态提示词(动)\t小跃掰指头报名字,越报越心虚。\n台词与声音(AU01–AU04)\t对白AU01(金老师):「你上个项目叫什么?」(小跃):「《大明风云》。哦不对,中途我改成《风云大明》了。后来文件夹里还有一个《明风云·终版》,一个《终版的终版》,一个《真·终版勿删》……」\n效果AU03:每报一名配一声“啵”\n光源动机\t同场\n前后连续性\t—\n禁止发生\t片名只口播(另见场级/全片通用禁止项)",
      "refs": [
        {
          "label": "LOC001 金泰前期车间",
          "src": "media/img-c0f50a8c4c1a5325b4ea.png"
        },
        {
          "label": "CH002 毛小跃",
          "src": "media/img-2e4075a07776b21e3ec6.png"
        },
        {
          "label": "CH001 金老师",
          "src": "media/img-e0380fbeec3a70be4774.png"
        }
      ],
      "video": "https://github.com/aikingtai-ctrl/jintai-film-showcase/releases/download/media-v1/no-rush-prompts-part1--f6ca37783fd2124ec0d5.mp4",
      "thumb": "",
      "seed": "",
      "instance": "",
      "model": "jimeng_multimodal2video",
      "params": "画布节点 视频生成 #25 · 12s · jimeng_multimodal2video",
      "take": "#25",
      "status": "已生成",
      "alts": []
    },
    {
      "id": "SC03-SH04",
      "title": "物证",
      "tc": "",
      "start": 191,
      "duration": 9,
      "framing": "中近 + 字段牌插入",
      "camera": "",
      "lighting": "同场",
      "cast": [
        "CH001",
        "LOC001"
      ],
      "sceneTag": "@CH001 + @LOC001(日)",
      "action": "老师侧身,背景三块字段牌清晰。 → 手刀切三下,一牌一顿。",
      "picture": "",
      "firstFramePrompt": "",
      "dialogue": [
        {
          "who": "金老师",
          "text": "所以八百多条废片,你现在都找不全。三个字段钉死:文件短码、对外片名、原著名。片名可以再吵,短码,永远不动。"
        }
      ],
      "dialogueText": "(金老师):「所以八百多条废片,你现在都找不全。三个字段钉死:文件短码、对外片名、原著名。片名可以再吵,短码,永远不动。」",
      "sound": "",
      "notes": "—(见场级/全片通用禁止项)",
      "multiShot": false,
      "prompt": "景别 · 机位 · 运动\t中近 + 字段牌插入\n引用(双@)\t@CH001 + @LOC001(日)\n首帧提示词(静)\t老师侧身,背景三块字段牌清晰。\n动态提示词(动)\t手刀切三下,一牌一顿。\n台词与声音(AU01–AU04)\t对白AU01(金老师):「所以八百多条废片,你现在都找不全。三个字段钉死:文件短码、对外片名、原著名。片名可以再吵,短码,永远不动。」\n光源动机\t同场\n前后连续性\t—\n禁止发生\t—(见场级/全片通用禁止项)",
      "refs": [
        {
          "label": "CH001 金老师",
          "src": "media/img-e0380fbeec3a70be4774.png"
        },
        {
          "label": "LOC001 金泰前期车间",
          "src": "media/img-c0f50a8c4c1a5325b4ea.png"
        }
      ],
      "video": "https://github.com/aikingtai-ctrl/jintai-film-showcase/releases/download/media-v1/no-rush-prompts-part1--0a7cf361412f918530b1.mp4",
      "thumb": "",
      "seed": "",
      "instance": "",
      "model": "seedance2.5",
      "params": "画布节点 视频生成 #26 · 9s · seedance2.5 · jimeng_multimodal2video",
      "take": "#26",
      "status": "已生成",
      "alts": []
    },
    {
      "id": "SC03-SH05",
      "title": "动作",
      "tc": "",
      "start": 200,
      "duration": 9,
      "framing": "全景 · P1台",
      "camera": "",
      "lighting": "扫描光带自发光",
      "cast": [
        "CH003",
        "LOC001"
      ],
      "sceneTag": "@CH003 + @LOC001(日)",
      "action": "@CH003 立于P1台,面前一册原著摊开。 → 扫描光带过页,事实卡瀑布式吐出,每张卡角标SRC编号与页码,自动落进卡槽。",
      "picture": "",
      "firstFramePrompt": "",
      "dialogue": [
        {
          "who": "金老师,画外",
          "text": "第二站,原著解析。每条事实带编号,回指原文页码,标好可信度。事实一栏,推断一栏,分开写。"
        }
      ],
      "dialogueText": "(金老师,画外):「第二站,原著解析。每条事实带编号,回指原文页码,标好可信度。事实一栏,推断一栏,分开写。」",
      "sound": "效果：哗啦卡片声",
      "notes": "卡面仅“SRC-XXX/页码/可信度”版式(另见场级/全片通用禁止项)",
      "multiShot": false,
      "prompt": "景别 · 机位 · 运动\t全景 · P1台\n引用(双@)\t@CH003 + @LOC001(日)\n首帧提示词(静)\t@CH003 立于P1台,面前一册原著摊开。\n动态提示词(动)\t扫描光带过页,事实卡瀑布式吐出,每张卡角标SRC编号与页码,自动落进卡槽。\n台词与声音(AU01–AU04)\t对白AU01(金老师,画外):「第二站,原著解析。每条事实带编号,回指原文页码,标好可信度。事实一栏,推断一栏,分开写。」\n效果AU03:哗啦卡片声\n光源动机\t扫描光带自发光\n前后连续性\t—\n禁止发生\t卡面仅“SRC-XXX/页码/可信度”版式(另见场级/全片通用禁止项)",
      "refs": [
        {
          "label": "LOC001 金泰前期车间",
          "src": "media/img-c0f50a8c4c1a5325b4ea.png"
        },
        {
          "label": "CH003 执行助手「小助」",
          "src": "media/img-415cf94e5ac60eb6b830.png"
        }
      ],
      "video": "https://github.com/aikingtai-ctrl/jintai-film-showcase/releases/download/media-v1/no-rush-prompts-part1--1ff9ce7b13a7a34c6175.mp4",
      "thumb": "",
      "seed": "",
      "instance": "",
      "model": "seedance2.5",
      "params": "画布节点 视频生成 #27 · 9s · seedance2.5 · jimeng_multimodal2video",
      "take": "#27",
      "status": "已生成",
      "alts": []
    },
    {
      "id": "SC03-SH06",
      "title": "反应",
      "tc": "",
      "start": 209,
      "duration": 3,
      "framing": "近景",
      "camera": "",
      "lighting": "同场",
      "cast": [
        "CH002",
        "LOC001"
      ],
      "sceneTag": "@CH002 + @LOC001(日)",
      "action": "小跃凑近卡槽。 → 伸手抽卡,被老师先一步截走。",
      "picture": "",
      "firstFramePrompt": "",
      "dialogue": [
        {
          "who": "小跃",
          "text": "事实和推断,有什么好分的?"
        }
      ],
      "dialogueText": "(小跃):「事实和推断,有什么好分的?」",
      "sound": "",
      "notes": "—(见场级/全片通用禁止项)",
      "multiShot": false,
      "prompt": "景别 · 机位 · 运动\t近景\n引用(双@)\t@CH002 + @LOC001(日)\n首帧提示词(静)\t小跃凑近卡槽。\n动态提示词(动)\t伸手抽卡,被老师先一步截走。\n台词与声音(AU01–AU04)\t对白AU01(小跃):「事实和推断,有什么好分的?」\n光源动机\t同场\n前后连续性\t—\n禁止发生\t—(见场级/全片通用禁止项)",
      "refs": [
        {
          "label": "CH002 毛小跃",
          "src": "media/img-2e4075a07776b21e3ec6.png"
        },
        {
          "label": "LOC001 金泰前期车间",
          "src": "media/img-c0f50a8c4c1a5325b4ea.png"
        }
      ],
      "video": "https://github.com/aikingtai-ctrl/jintai-film-showcase/releases/download/media-v1/no-rush-prompts-part1--2243d8e58fa0bbec27e4.mp4",
      "thumb": "",
      "seed": "",
      "instance": "",
      "model": "seedance2.5",
      "params": "画布节点 视频生成 #28 · 4s · seedance2.5 · jimeng_multimodal2video",
      "take": "#28",
      "status": "已生成",
      "alts": []
    },
    {
      "id": "SC03-SH07",
      "title": "物证",
      "tc": "",
      "start": 212,
      "duration": 9,
      "framing": "特写卡片 → 上摇中近",
      "camera": "",
      "lighting": "同场",
      "cast": [
        "CH001",
        "LOC001",
        "PR004"
      ],
      "sceneTag": "@CH001 + @LOC001(日) + @PR004",
      "action": "@PR004 样卡特写:「SRC-044|第44页|沈三刀喝了三碗酒|可信度:高」。 → 上摇至老师念卡,念第二句时挑眉。",
      "picture": "",
      "firstFramePrompt": "",
      "dialogue": [
        {
          "who": "金老师",
          "text": "『SRC-044:第44页,沈三刀喝了三碗酒。』——这是事实。『沈三刀是个酒蒙子。』——这是什么?"
        }
      ],
      "dialogueText": "(金老师):「『SRC-044:第44页,沈三刀喝了三碗酒。』——这是事实。『沈三刀是个酒蒙子。』——这是什么?」",
      "sound": "",
      "notes": "连续性：卡面版式与P1卡槽一致；—(见场级/全片通用禁止项)",
      "multiShot": false,
      "prompt": "景别 · 机位 · 运动\t特写卡片 → 上摇中近\n引用(双@)\t@CH001 + @LOC001(日) + @PR004\n首帧提示词(静)\t@PR004 样卡特写:「SRC-044|第44页|沈三刀喝了三碗酒|可信度:高」。\n动态提示词(动)\t上摇至老师念卡,念第二句时挑眉。\n台词与声音(AU01–AU04)\t对白AU01(金老师):「『SRC-044:第44页,沈三刀喝了三碗酒。』——这是事实。『沈三刀是个酒蒙子。』——这是什么?」\n光源动机\t同场\n前后连续性\t卡面版式与P1卡槽一致\n禁止发生\t—(见场级/全片通用禁止项)",
      "refs": [
        {
          "label": "PR004 事实卡样卡 SRC-044",
          "src": "media/img-da71dd5a20a7ae78eefa.png"
        },
        {
          "label": "LOC001 金泰前期车间",
          "src": "media/img-c0f50a8c4c1a5325b4ea.png"
        },
        {
          "label": "CH001 金老师",
          "src": "media/img-e0380fbeec3a70be4774.png"
        }
      ],
      "video": "https://github.com/aikingtai-ctrl/jintai-film-showcase/releases/download/media-v1/no-rush-prompts-part1--13a280963c698ee8f311.mp4",
      "thumb": "",
      "seed": "",
      "instance": "",
      "model": "seedance2.5",
      "params": "画布节点 视频生成 #29 · 9s · seedance2.5 · jimeng_multimodal2video",
      "take": "#29",
      "status": "已生成",
      "alts": []
    },
    {
      "id": "SC03-SH08",
      "title": "反应(笑点:读后感)",
      "tc": "",
      "start": 221,
      "duration": 4,
      "framing": "特写",
      "camera": "",
      "lighting": "同场",
      "cast": [
        "CH002",
        "LOC001"
      ],
      "sceneTag": "@CH002 + @LOC001(日)",
      "action": "小跃眼神躲闪。 → 小声认账,配一拍尴尬停顿。",
      "picture": "",
      "firstFramePrompt": "",
      "dialogue": [
        {
          "who": "小跃",
          "text": "……是我的读后感。"
        }
      ],
      "dialogueText": "(小跃):「……是我的读后感。」",
      "sound": "效果：静场一拍",
      "notes": "—(见场级/全片通用禁止项)",
      "multiShot": false,
      "prompt": "景别 · 机位 · 运动\t特写\n引用(双@)\t@CH002 + @LOC001(日)\n首帧提示词(静)\t小跃眼神躲闪。\n动态提示词(动)\t小声认账,配一拍尴尬停顿。\n台词与声音(AU01–AU04)\t对白AU01(小跃):「……是我的读后感。」\n效果AU03:静场一拍\n光源动机\t同场\n前后连续性\t—\n禁止发生\t—(见场级/全片通用禁止项)",
      "refs": [
        {
          "label": "CH002 毛小跃",
          "src": "media/img-2e4075a07776b21e3ec6.png"
        },
        {
          "label": "LOC001 金泰前期车间",
          "src": "media/img-c0f50a8c4c1a5325b4ea.png"
        }
      ],
      "video": "https://github.com/aikingtai-ctrl/jintai-film-showcase/releases/download/media-v1/no-rush-prompts-part1--b83e0eb9b7933ba85865.mp4",
      "thumb": "",
      "seed": "",
      "instance": "",
      "model": "seedance2.5",
      "params": "画布节点 视频生成 #30 · 4s · seedance2.5 · jimeng_multimodal2video",
      "take": "#30",
      "status": "已生成",
      "alts": []
    },
    {
      "id": "SC03-SH09",
      "title": "动作/物证",
      "tc": "",
      "start": 225,
      "duration": 12,
      "framing": "中景 · 走向G1门",
      "camera": "",
      "lighting": "红门灯带",
      "cast": [
        "CH001",
        "LOC001"
      ],
      "sceneTag": "@CH001 + @LOC001(日)",
      "action": "老师转身走向G1红门,门楣灯牌「G1 事实与边界」。 → 边走边讲,停在章印凹槽前。",
      "picture": "",
      "firstFramePrompt": "",
      "dialogue": [
        {
          "who": "金老师",
          "text": "读后感不许上生产线。第一道门:事实与边界。这道门定的是“哪些绝不能动”——版权、伦理、史实红线,连同一张禁改清单。后面九站,连带下游,全受它管。"
        }
      ],
      "dialogueText": "(金老师):「读后感不许上生产线。第一道门:事实与边界。这道门定的是“哪些绝不能动”——版权、伦理、史实红线,连同一张禁改清单。后面九站,连带下游,全受它管。」",
      "sound": "",
      "notes": "门此时保持关闭(另见场级/全片通用禁止项)",
      "multiShot": false,
      "prompt": "景别 · 机位 · 运动\t中景 · 走向G1门\n引用(双@)\t@CH001 + @LOC001(日)\n首帧提示词(静)\t老师转身走向G1红门,门楣灯牌「G1 事实与边界」。\n动态提示词(动)\t边走边讲,停在章印凹槽前。\n台词与声音(AU01–AU04)\t对白AU01(金老师):「读后感不许上生产线。第一道门:事实与边界。这道门定的是“哪些绝不能动”——版权、伦理、史实红线,连同一张禁改清单。后面九站,连带下游,全受它管。」\n光源动机\t红门灯带\n前后连续性\t—\n禁止发生\t门此时保持关闭(另见场级/全片通用禁止项)",
      "refs": [
        {
          "label": "LOC001 金泰前期车间",
          "src": "media/img-c0f50a8c4c1a5325b4ea.png"
        },
        {
          "label": "CH001 金老师",
          "src": "media/img-e0380fbeec3a70be4774.png"
        }
      ],
      "video": "https://github.com/aikingtai-ctrl/jintai-film-showcase/releases/download/media-v1/no-rush-prompts-part1--86ff59fc484349227a85.mp4",
      "thumb": "",
      "seed": "",
      "instance": "",
      "model": "seedance2.5",
      "params": "画布节点 视频生成 #31 · 12s · seedance2.5 · jimeng_multimodal2video",
      "take": "#31",
      "status": "已生成",
      "alts": []
    },
    {
      "id": "SC03-SH10",
      "title": "动作(过门仪式)",
      "tc": "",
      "start": 237,
      "duration": 6,
      "framing": "全景 · 过门",
      "camera": "",
      "lighting": "红门灯带转绿一瞬",
      "cast": [
        "CH001",
        "CH003",
        "LOC001",
        "PR001"
      ],
      "sceneTag": "@CH001 + @CH003 + @LOC001(日) + @PR001",
      "action": "章面对准凹槽特写起幅。 → 「咚」盖章,红门液压升起;@CH003 抱文件小碎步过门,姿势像过安检,过完回头鞠一下。",
      "picture": "",
      "firstFramePrompt": "",
      "dialogue": [],
      "dialogueText": "无对白",
      "sound": "效果：章“咚”+液压升门+小碎步 / 音乐：轻快两小节",
      "notes": "连续性：全片第一次“过门仪式”,后续各门复用此节奏；门升起晚于章落(另见场级/全片通用禁止项)",
      "multiShot": false,
      "prompt": "景别 · 机位 · 运动\t全景 · 过门\n引用(双@)\t@CH001 + @CH003 + @LOC001(日) + @PR001\n首帧提示词(静)\t章面对准凹槽特写起幅。\n动态提示词(动)\t「咚」盖章,红门液压升起;@CH003 抱文件小碎步过门,姿势像过安检,过完回头鞠一下。\n台词与声音(AU01–AU04)\t效果AU03:章“咚”+液压升门+小碎步\n音乐AU04:轻快两小节\n光源动机\t红门灯带转绿一瞬\n前后连续性\t全片第一次“过门仪式”,后续各门复用此节奏\n禁止发生\t门升起晚于章落(另见场级/全片通用禁止项)",
      "refs": [
        {
          "label": "CH001 金老师",
          "src": "media/img-e0380fbeec3a70be4774.png"
        },
        {
          "label": "CH003 执行助手「小助」",
          "src": "media/img-415cf94e5ac60eb6b830.png"
        },
        {
          "label": "PR001 红色批准章 / 红门",
          "src": "media/img-4c89aad734a7fe3e8bb7.png"
        },
        {
          "label": "LOC001 金泰前期车间",
          "src": "media/img-c0f50a8c4c1a5325b4ea.png"
        }
      ],
      "video": "https://github.com/aikingtai-ctrl/jintai-film-showcase/releases/download/media-v1/no-rush-prompts-part1--315b0cc4fb33dc42f4e1.mp4",
      "thumb": "",
      "seed": "",
      "instance": "",
      "model": "seedance2.5",
      "params": "画布节点 视频生成 #32 · 6s · seedance2.5 · jimeng_multimodal2video",
      "take": "#32",
      "status": "已生成",
      "alts": []
    },
    {
      "id": "SC03-SH11",
      "title": "动作",
      "tc": "",
      "start": 243,
      "duration": 10,
      "framing": "中景 · P2台",
      "camera": "",
      "lighting": "屏光",
      "cast": [
        "CH001",
        "LOC001"
      ],
      "sceneTag": "@CH001 + @LOC001(日)",
      "action": "P2台屏上「改编圣经」章节树展开。 → 老师点屏,树节点逐层亮。",
      "picture": "",
      "firstFramePrompt": "",
      "dialogue": [
        {
          "who": "金老师",
          "text": "第三站,改编设计。它起草改编圣经:主题、视角、季集结构、人物弧。每删一场戏、每并一个人物,都要附叙事理由,核对不破坏因果和动机。"
        }
      ],
      "dialogueText": "(金老师):「第三站,改编设计。它起草改编圣经:主题、视角、季集结构、人物弧。每删一场戏、每并一个人物,都要附叙事理由,核对不破坏因果和动机。」",
      "sound": "",
      "notes": "—(见场级/全片通用禁止项)",
      "multiShot": false,
      "prompt": "景别 · 机位 · 运动\t中景 · P2台\n引用(双@)\t@CH001 + @LOC001(日)\n首帧提示词(静)\tP2台屏上「改编圣经」章节树展开。\n动态提示词(动)\t老师点屏,树节点逐层亮。\n台词与声音(AU01–AU04)\t对白AU01(金老师):「第三站,改编设计。它起草改编圣经:主题、视角、季集结构、人物弧。每删一场戏、每并一个人物,都要附叙事理由,核对不破坏因果和动机。」\n光源动机\t屏光\n前后连续性\t—\n禁止发生\t—(见场级/全片通用禁止项)",
      "refs": [
        {
          "label": "CH001 金老师",
          "src": "media/img-e0380fbeec3a70be4774.png"
        },
        {
          "label": "LOC001 金泰前期车间",
          "src": "media/img-c0f50a8c4c1a5325b4ea.png"
        }
      ],
      "video": "https://github.com/aikingtai-ctrl/jintai-film-showcase/releases/download/media-v1/no-rush-prompts-part1--d8a2ee0fe986615b71fc.mp4",
      "thumb": "",
      "seed": "",
      "instance": "",
      "model": "seedance2.5",
      "params": "画布节点 视频生成 #33 · 10s · seedance2.5 · jimeng_multimodal2video",
      "take": "#33",
      "status": "已生成",
      "alts": []
    },
    {
      "id": "SC03-SH12",
      "title": "反应",
      "tc": "",
      "start": 253,
      "duration": 8,
      "framing": "双人正反打",
      "camera": "",
      "lighting": "同场",
      "cast": [
        "CH001",
        "CH002",
        "LOC001"
      ],
      "sceneTag": "@CH001 + @CH002 + @LOC001(日)",
      "action": "正反打。 → 老师“讨债”二字轻敲台面。",
      "picture": "",
      "firstFramePrompt": "",
      "dialogue": [
        {
          "who": "小跃",
          "text": "删戏还要写理由?我删戏全凭手感。"
        },
        {
          "who": "金老师",
          "text": "手感删掉的因果,后面每一站都会回来找你讨债。"
        }
      ],
      "dialogueText": "(小跃):「删戏还要写理由?我删戏全凭手感。」(金老师):「手感删掉的因果,后面每一站都会回来找你讨债。」",
      "sound": "",
      "notes": "—(见场级/全片通用禁止项)",
      "multiShot": false,
      "prompt": "景别 · 机位 · 运动\t双人正反打\n引用(双@)\t@CH001 + @CH002 + @LOC001(日)\n首帧提示词(静)\t正反打。\n动态提示词(动)\t老师“讨债”二字轻敲台面。\n台词与声音(AU01–AU04)\t对白AU01(小跃):「删戏还要写理由?我删戏全凭手感。」(金老师):「手感删掉的因果,后面每一站都会回来找你讨债。」\n光源动机\t同场\n前后连续性\t—\n禁止发生\t—(见场级/全片通用禁止项)",
      "refs": [
        {
          "label": "LOC001 金泰前期车间",
          "src": "media/img-c0f50a8c4c1a5325b4ea.png"
        },
        {
          "label": "CH001 金老师",
          "src": "media/img-e0380fbeec3a70be4774.png"
        },
        {
          "label": "CH002 毛小跃",
          "src": "media/img-2e4075a07776b21e3ec6.png"
        }
      ],
      "video": "https://github.com/aikingtai-ctrl/jintai-film-showcase/releases/download/media-v1/no-rush-prompts-part1--ff084a9f57942a576f1d.mp4",
      "thumb": "",
      "seed": "",
      "instance": "",
      "model": "seedance2.5",
      "params": "画布节点 视频生成 #34 · 8s · seedance2.5 · jimeng_multimodal2video",
      "take": "#34",
      "status": "已生成",
      "alts": []
    },
    {
      "id": "SC03-SH13",
      "title": "物证",
      "tc": "",
      "start": 261,
      "duration": 9,
      "framing": "中景 · P3台六问牌",
      "camera": "",
      "lighting": "同场",
      "cast": [
        "CH001",
        "CH002",
        "LOC001"
      ],
      "sceneTag": "@CH001 + @CH002 + @LOC001(日)",
      "action": "六问牌满画:观众已知 / 谁想要 / 阻力 / 转折 / 离场新知 / 下一场为何必然。 → 拉开成双人,老师发起提问。",
      "picture": "",
      "firstFramePrompt": "",
      "dialogue": [
        {
          "who": "金老师",
          "text": "第四站,剧本。梗概、节拍表、完整剧本,三级推进,每场戏过六问。来,挑一场你自己的戏,我问你。"
        },
        {
          "who": "小跃",
          "text": "来!"
        }
      ],
      "dialogueText": "(金老师):「第四站,剧本。梗概、节拍表、完整剧本,三级推进,每场戏过六问。来,挑一场你自己的戏,我问你。」(小跃):「来!」",
      "sound": "",
      "notes": "六问牌文字如上(另见场级/全片通用禁止项)",
      "multiShot": false,
      "prompt": "景别 · 机位 · 运动\t中景 · P3台六问牌\n引用(双@)\t@CH001 + @CH002 + @LOC001(日)\n首帧提示词(静)\t六问牌满画:观众已知 / 谁想要 / 阻力 / 转折 / 离场新知 / 下一场为何必然。\n动态提示词(动)\t拉开成双人,老师发起提问。\n台词与声音(AU01–AU04)\t对白AU01(金老师):「第四站,剧本。梗概、节拍表、完整剧本,三级推进,每场戏过六问。来,挑一场你自己的戏,我问你。」(小跃):「来!」\n光源动机\t同场\n前后连续性\t—\n禁止发生\t六问牌文字如上(另见场级/全片通用禁止项)",
      "refs": [
        {
          "label": "CH001 金老师",
          "src": "media/img-e0380fbeec3a70be4774.png"
        },
        {
          "label": "LOC001 金泰前期车间",
          "src": "media/img-c0f50a8c4c1a5325b4ea.png"
        },
        {
          "label": "CH002 毛小跃",
          "src": "media/img-2e4075a07776b21e3ec6.png"
        }
      ],
      "video": "https://github.com/aikingtai-ctrl/jintai-film-showcase/releases/download/media-v1/no-rush-prompts-part1--c66142cf7405065149a4.mp4",
      "thumb": "",
      "seed": "",
      "instance": "",
      "model": "seedance2.5",
      "params": "画布节点 视频生成 #35 · 9s · seedance2.5 · jimeng_multimodal2video",
      "take": "#35",
      "status": "已生成",
      "alts": []
    },
    {
      "id": "SC03-SH14",
      "title": "反应(笑点:画面很贵)",
      "tc": "",
      "start": 270,
      "duration": 7,
      "framing": "双人正反打",
      "camera": "",
      "lighting": "同场",
      "cast": [
        "CH001",
        "CH002",
        "LOC001"
      ],
      "sceneTag": "@CH001 + @CH002 + @LOC001(日)",
      "action": "老师提问,小跃苦想。 → 小跃答完,静场半拍;景深处小助掉落一张纸。",
      "picture": "",
      "firstFramePrompt": "",
      "dialogue": [
        {
          "who": "金老师",
          "text": "这场戏演完,观众比进场时多知道了什么?"
        },
        {
          "who": "小跃",
          "text": "多知道了……我们的画面很贵。"
        }
      ],
      "dialogueText": "(金老师):「这场戏演完,观众比进场时多知道了什么?」(小跃):「多知道了……我们的画面很贵。」",
      "sound": "效果：静场+落纸",
      "notes": "连续性：小助在景深处不抢戏；—(见场级/全片通用禁止项)",
      "multiShot": false,
      "prompt": "景别 · 机位 · 运动\t双人正反打\n引用(双@)\t@CH001 + @CH002 + @LOC001(日)\n首帧提示词(静)\t老师提问,小跃苦想。\n动态提示词(动)\t小跃答完,静场半拍;景深处小助掉落一张纸。\n台词与声音(AU01–AU04)\t对白AU01(金老师):「这场戏演完,观众比进场时多知道了什么?」(小跃):「多知道了……我们的画面很贵。」\n效果AU03:静场+落纸\n光源动机\t同场\n前后连续性\t小助在景深处不抢戏\n禁止发生\t—(见场级/全片通用禁止项)",
      "refs": [
        {
          "label": "LOC001 金泰前期车间",
          "src": "media/img-c0f50a8c4c1a5325b4ea.png"
        },
        {
          "label": "CH002 毛小跃",
          "src": "media/img-2e4075a07776b21e3ec6.png"
        },
        {
          "label": "CH001 金老师",
          "src": "media/img-e0380fbeec3a70be4774.png"
        }
      ],
      "video": "https://github.com/aikingtai-ctrl/jintai-film-showcase/releases/download/media-v1/no-rush-prompts-part1--17e1c325c8c0647d28a0.mp4",
      "thumb": "",
      "seed": "",
      "instance": "",
      "model": "seedance2.5",
      "params": "画布节点 视频生成 #36 · 7s · seedance2.5 · jimeng_multimodal2video",
      "take": "#36",
      "status": "已生成",
      "alts": []
    },
    {
      "id": "SC03-SH15",
      "title": "动作/物证",
      "tc": "",
      "start": 277,
      "duration": 14,
      "framing": "中景 + G2门(过门仪式·加速)",
      "camera": "",
      "lighting": "红门灯带",
      "cast": [
        "CH001",
        "LOC001",
        "PR001"
      ],
      "sceneTag": "@CH001 + @LOC001(日) + @PR001",
      "action": "老师走向G2门,门楣「G2 剧本锁定」。 → 讲完盖章过门,仪式节奏比G1更快。",
      "picture": "",
      "firstFramePrompt": "",
      "dialogue": [
        {
          "who": "金老师",
          "text": "答不出六问的场,先改剧本。别指望镜头拍得美来救——观众只会问:他俩到底在干嘛?第二道门:剧本锁定。过了这道门,剧本就是锁定版。再改,走版本变更,评估下游影响。不是不能改,是不能“顺手改”。"
        }
      ],
      "dialogueText": "(金老师):「答不出六问的场,先改剧本。别指望镜头拍得美来救——观众只会问:他俩到底在干嘛?第二道门:剧本锁定。过了这道门,剧本就是锁定版。再改,走版本变更,评估下游影响。不是不能改,是不能“顺手改”。」",
      "sound": "效果：章“咚”+升门",
      "notes": "连续性：过门仪式第2次；—(见场级/全片通用禁止项)",
      "multiShot": false,
      "prompt": "景别 · 机位 · 运动\t中景 + G2门(过门仪式·加速)\n引用(双@)\t@CH001 + @LOC001(日) + @PR001\n首帧提示词(静)\t老师走向G2门,门楣「G2 剧本锁定」。\n动态提示词(动)\t讲完盖章过门,仪式节奏比G1更快。\n台词与声音(AU01–AU04)\t对白AU01(金老师):「答不出六问的场,先改剧本。别指望镜头拍得美来救——观众只会问:他俩到底在干嘛?第二道门:剧本锁定。过了这道门,剧本就是锁定版。再改,走版本变更,评估下游影响。不是不能改,是不能“顺手改”。」\n效果AU03:章“咚”+升门\n光源动机\t红门灯带\n前后连续性\t过门仪式第2次\n禁止发生\t—(见场级/全片通用禁止项)",
      "refs": [
        {
          "label": "LOC001 金泰前期车间",
          "src": "media/img-c0f50a8c4c1a5325b4ea.png"
        },
        {
          "label": "PR001 红色批准章 / 红门",
          "src": "media/img-4c89aad734a7fe3e8bb7.png"
        },
        {
          "label": "CH001 金老师",
          "src": "media/img-e0380fbeec3a70be4774.png"
        }
      ],
      "video": "https://github.com/aikingtai-ctrl/jintai-film-showcase/releases/download/media-v1/no-rush-prompts-part1--d300e02cbc4f2ac8ab9c.mp4",
      "thumb": "",
      "seed": "",
      "instance": "",
      "model": "seedance2.5",
      "params": "画布节点 视频生成 #37 · 14s · seedance2.5 · jimeng_multimodal2video",
      "take": "#37",
      "status": "已生成",
      "alts": []
    },
    {
      "id": "SC03-SH16",
      "title": "动作",
      "tc": "",
      "start": 291,
      "duration": 6,
      "framing": "中景 · P4台",
      "camera": "",
      "lighting": "同场",
      "cast": [
        "CH002",
        "LOC001",
        "PR005"
      ],
      "sceneTag": "@CH002 + @LOC001(日) + @PR005",
      "action": "小跃抢过 @PR005 平板,跃跃欲试。 → 大笔一挥写三个词,写一个念一个。",
      "picture": "",
      "firstFramePrompt": "",
      "dialogue": [
        {
          "who": "小跃",
          "text": "这个我擅长!视觉风格——高级感!电影感!氛围感!"
        }
      ],
      "dialogueText": "(小跃):「这个我擅长!视觉风格——高级感!电影感!氛围感!」",
      "sound": "",
      "notes": "平板上只出现这三个词(另见场级/全片通用禁止项)",
      "multiShot": false,
      "prompt": "景别 · 机位 · 运动\t中景 · P4台\n引用(双@)\t@CH002 + @LOC001(日) + @PR005\n首帧提示词(静)\t小跃抢过 @PR005 平板,跃跃欲试。\n动态提示词(动)\t大笔一挥写三个词,写一个念一个。\n台词与声音(AU01–AU04)\t对白AU01(小跃):「这个我擅长!视觉风格——高级感!电影感!氛围感!」\n光源动机\t同场\n前后连续性\t—\n禁止发生\t平板上只出现这三个词(另见场级/全片通用禁止项)",
      "refs": [
        {
          "label": "PR005 导演阐述平板",
          "src": "media/img-2e7ebc57cc7bd40b21ab.png"
        },
        {
          "label": "CH002 毛小跃",
          "src": "media/img-2e4075a07776b21e3ec6.png"
        },
        {
          "label": "LOC001 金泰前期车间",
          "src": "media/img-c0f50a8c4c1a5325b4ea.png"
        }
      ],
      "video": "https://github.com/aikingtai-ctrl/jintai-film-showcase/releases/download/media-v1/no-rush-prompts-part1--af46a6b5279f7aea3704.mp4",
      "thumb": "",
      "seed": "",
      "instance": "",
      "model": "seedance2.5",
      "params": "画布节点 视频生成 #38 · 6s · seedance2.5 · jimeng_multimodal2video",
      "take": "#38",
      "status": "已生成",
      "alts": []
    },
    {
      "id": "SC03-SH17",
      "title": "反应(笑点:形容词堆积)",
      "tc": "",
      "start": 297,
      "duration": 6,
      "framing": "特写 · 小助胸屏",
      "camera": "",
      "lighting": "胸屏红光",
      "cast": [
        "CH003",
        "LOC001",
        "PR005"
      ],
      "sceneTag": "@CH003 + @LOC001(日) + @PR005",
      "action": "@CH003 接过平板扫描,胸屏特写。 → 屏变红弹「无法执行。」,一秒后追加小字「形容词堆积。」;小跃在虚焦处石化。",
      "picture": "",
      "firstFramePrompt": "",
      "dialogue": [],
      "dialogueText": "无对白",
      "sound": "效果：错误提示音两声",
      "notes": "胸屏主行四字+副行小字(另见场级/全片通用禁止项)",
      "multiShot": false,
      "prompt": "景别 · 机位 · 运动\t特写 · 小助胸屏\n引用(双@)\t@CH003 + @LOC001(日) + @PR005\n首帧提示词(静)\t@CH003 接过平板扫描,胸屏特写。\n动态提示词(动)\t屏变红弹「无法执行。」,一秒后追加小字「形容词堆积。」;小跃在虚焦处石化。\n台词与声音(AU01–AU04)\t效果AU03:错误提示音两声\n光源动机\t胸屏红光\n前后连续性\t—\n禁止发生\t胸屏主行四字+副行小字(另见场级/全片通用禁止项)",
      "refs": [
        {
          "label": "PR005 导演阐述平板",
          "src": "media/img-2e7ebc57cc7bd40b21ab.png"
        },
        {
          "label": "CH003 执行助手「小助」",
          "src": "media/img-415cf94e5ac60eb6b830.png"
        },
        {
          "label": "LOC001 金泰前期车间",
          "src": "media/img-c0f50a8c4c1a5325b4ea.png"
        }
      ],
      "video": "https://github.com/aikingtai-ctrl/jintai-film-showcase/releases/download/media-v1/no-rush-prompts-part1--7247d9885d04cc107e32.mp4",
      "thumb": "",
      "seed": "",
      "instance": "",
      "model": "seedance2.5",
      "params": "画布节点 视频生成 #39 · 6s · seedance2.5 · jimeng_multimodal2video",
      "take": "#39",
      "status": "已生成",
      "alts": []
    },
    {
      "id": "SC03-SH18",
      "title": "动作/物证",
      "tc": "",
      "start": 303,
      "duration": 14,
      "framing": "中景 + G3门(过门仪式)",
      "camera": "",
      "lighting": "红门灯带",
      "cast": [
        "CH001",
        "LOC001",
        "PR001"
      ],
      "sceneTag": "@CH001 + @LOC001(日) + @PR001",
      "action": "老师取回平板,走向G3门「G3 导演阐述」。 → 讲规则可检查,盖章过门。",
      "picture": "",
      "firstFramePrompt": "",
      "dialogue": [
        {
          "who": "金老师",
          "text": "这三个词写进文档,等于没写。规则要能检查:什么光源、什么理由、什么情况下禁止什么。表演、审美、节奏,这些必须由人判断——所以这里有第三道门:导演阐述。人批了,它才成为下游所有阶段的依据。"
        }
      ],
      "dialogueText": "(金老师):「这三个词写进文档,等于没写。规则要能检查:什么光源、什么理由、什么情况下禁止什么。表演、审美、节奏,这些必须由人判断——所以这里有第三道门:导演阐述。人批了,它才成为下游所有阶段的依据。」",
      "sound": "效果：章“咚”+升门",
      "notes": "连续性：过门仪式第3次;尾接SC04转场；—(见场级/全片通用禁止项)",
      "multiShot": false,
      "prompt": "景别 · 机位 · 运动\t中景 + G3门(过门仪式)\n引用(双@)\t@CH001 + @LOC001(日) + @PR001\n首帧提示词(静)\t老师取回平板,走向G3门「G3 导演阐述」。\n动态提示词(动)\t讲规则可检查,盖章过门。\n台词与声音(AU01–AU04)\t对白AU01(金老师):「这三个词写进文档,等于没写。规则要能检查:什么光源、什么理由、什么情况下禁止什么。表演、审美、节奏,这些必须由人判断——所以这里有第三道门:导演阐述。人批了,它才成为下游所有阶段的依据。」\n效果AU03:章“咚”+升门\n光源动机\t红门灯带\n前后连续性\t过门仪式第3次;尾接SC04转场\n禁止发生\t—(见场级/全片通用禁止项)",
      "refs": [
        {
          "label": "CH001 金老师",
          "src": "media/img-e0380fbeec3a70be4774.png"
        },
        {
          "label": "LOC001 金泰前期车间",
          "src": "media/img-c0f50a8c4c1a5325b4ea.png"
        },
        {
          "label": "PR001 红色批准章 / 红门",
          "src": "media/img-4c89aad734a7fe3e8bb7.png"
        }
      ],
      "video": "https://github.com/aikingtai-ctrl/jintai-film-showcase/releases/download/media-v1/no-rush-prompts-part1--4eade487d22b8ec394f3.mp4",
      "thumb": "",
      "seed": "",
      "instance": "",
      "model": "seedance2.5",
      "params": "画布节点 视频生成 #40 · 14s · seedance2.5 · jimeng_multimodal2video",
      "take": "#40",
      "status": "已生成",
      "alts": []
    },
    {
      "id": "SC04-SH01",
      "title": "建立空间",
      "tc": "",
      "start": 317,
      "duration": 6,
      "framing": "全景 · 横移",
      "camera": "",
      "lighting": "展柜射灯",
      "cast": [
        "CH001",
        "CH002",
        "LOC002"
      ],
      "sceneTag": "@CH001 + @CH002 + @LOC002",
      "action": "陈列室门口望进去,一排玻璃展柜在射灯下发亮。 → 横移逐柜掠过:CH004多角度立像 / LOC012客栈模型 / CH004-CO02行装 / PR008断柄短刀;二人入画。",
      "picture": "",
      "firstFramePrompt": "",
      "dialogue": [
        {
          "who": "小跃",
          "text": "哇,这里像博物馆。"
        }
      ],
      "dialogueText": "(小跃):「哇,这里像博物馆。」",
      "sound": "环境：低回声,肃穆",
      "notes": "连续性：承SC03过G3门转场；柜签与内容一一对应(另见场级/全片通用禁止项)",
      "multiShot": false,
      "prompt": "景别 · 机位 · 运动\t全景 · 横移\n引用(双@)\t@CH001 + @CH002 + @LOC002\n首帧提示词(静)\t陈列室门口望进去,一排玻璃展柜在射灯下发亮。\n动态提示词(动)\t横移逐柜掠过:CH004多角度立像 / LOC012客栈模型 / CH004-CO02行装 / PR008断柄短刀;二人入画。\n台词与声音(AU01–AU04)\t对白AU01(小跃):「哇,这里像博物馆。」\n环境AU02:低回声,肃穆\n光源动机\t展柜射灯\n前后连续性\t承SC03过G3门转场\n禁止发生\t柜签与内容一一对应(另见场级/全片通用禁止项)",
      "refs": [
        {
          "label": "CH002 毛小跃",
          "src": "media/img-2e4075a07776b21e3ec6.png"
        },
        {
          "label": "LOC002 母版陈列室",
          "src": "media/img-d42972373463c99f50af.png"
        },
        {
          "label": "CH001 金老师",
          "src": "media/img-e0380fbeec3a70be4774.png"
        }
      ],
      "video": "https://github.com/aikingtai-ctrl/jintai-film-showcase/releases/download/media-v1/no-rush-prompts-part1--8abc6fa38eb6ac4c2eca.mp4",
      "thumb": "",
      "seed": "",
      "instance": "",
      "model": "seedance2.5",
      "params": "画布节点 视频生成 #41 · 6s · seedance2.5 · jimeng_multimodal2video",
      "take": "#41",
      "status": "已生成",
      "alts": []
    },
    {
      "id": "SC04-SH02",
      "title": "物证",
      "tc": "",
      "start": 323,
      "duration": 14,
      "framing": "中景 + 柜内标签特写插入",
      "camera": "",
      "lighting": "同场",
      "cast": [
        "CH001",
        "LOC002"
      ],
      "sceneTag": "@CH001 + @LOC002",
      "action": "老师立于CH004柜前。 → 讲解词间插入柜内标签特写:固定项 / 可变项 / 禁止漂移项三栏。",
      "picture": "",
      "firstFramePrompt": "",
      "dialogue": [
        {
          "who": "金老师",
          "text": "第五站,资产设定。人物、场景、服装、道具,每个一个唯一编号,逐项写清:固定项、可变项、禁止漂移项。规矩是角色先行,剧情后行——先批角色母版,再去生产复杂剧情图。"
        }
      ],
      "dialogueText": "(金老师):「第五站,资产设定。人物、场景、服装、道具,每个一个唯一编号,逐项写清:固定项、可变项、禁止漂移项。规矩是角色先行,剧情后行——先批角色母版,再去生产复杂剧情图。」",
      "sound": "",
      "notes": "标签三栏版式统一(另见场级/全片通用禁止项)",
      "multiShot": false,
      "prompt": "景别 · 机位 · 运动\t中景 + 柜内标签特写插入\n引用(双@)\t@CH001 + @LOC002\n首帧提示词(静)\t老师立于CH004柜前。\n动态提示词(动)\t讲解词间插入柜内标签特写:固定项 / 可变项 / 禁止漂移项三栏。\n台词与声音(AU01–AU04)\t对白AU01(金老师):「第五站,资产设定。人物、场景、服装、道具,每个一个唯一编号,逐项写清:固定项、可变项、禁止漂移项。规矩是角色先行,剧情后行——先批角色母版,再去生产复杂剧情图。」\n光源动机\t同场\n前后连续性\t—\n禁止发生\t标签三栏版式统一(另见场级/全片通用禁止项)",
      "refs": [
        {
          "label": "LOC002 母版陈列室",
          "src": "media/img-d42972373463c99f50af.png"
        },
        {
          "label": "CH001 金老师",
          "src": "media/img-e0380fbeec3a70be4774.png"
        }
      ],
      "video": "https://github.com/aikingtai-ctrl/jintai-film-showcase/releases/download/media-v1/no-rush-prompts-part1--ad69a260c59390265781.mp4",
      "thumb": "",
      "seed": "",
      "instance": "",
      "model": "seedance2.5",
      "params": "画布节点 视频生成 #42 · 14s · seedance2.5 · jimeng_multimodal2video",
      "take": "#42",
      "status": "已生成",
      "alts": []
    },
    {
      "id": "SC04-SH03",
      "title": "反应",
      "tc": "",
      "start": 337,
      "duration": 5,
      "framing": "近景",
      "camera": "",
      "lighting": "同场",
      "cast": [
        "CH002",
        "LOC002"
      ],
      "sceneTag": "@CH002 + @LOC002",
      "action": "小跃恍然大悟状。 → 越说越得意。",
      "picture": "",
      "firstFramePrompt": "",
      "dialogue": [
        {
          "who": "小跃",
          "text": "我懂了!主角换了件衣服,我就新建一个“主角冬装版”!"
        }
      ],
      "dialogueText": "(小跃):「我懂了!主角换了件衣服,我就新建一个“主角冬装版”!」",
      "sound": "",
      "notes": "—(见场级/全片通用禁止项)",
      "multiShot": false,
      "prompt": "景别 · 机位 · 运动\t近景\n引用(双@)\t@CH002 + @LOC002\n首帧提示词(静)\t小跃恍然大悟状。\n动态提示词(动)\t越说越得意。\n台词与声音(AU01–AU04)\t对白AU01(小跃):「我懂了!主角换了件衣服,我就新建一个“主角冬装版”!」\n光源动机\t同场\n前后连续性\t—\n禁止发生\t—(见场级/全片通用禁止项)",
      "refs": [
        {
          "label": "CH002 毛小跃",
          "src": "media/img-2e4075a07776b21e3ec6.png"
        },
        {
          "label": "LOC002 母版陈列室",
          "src": "media/img-d42972373463c99f50af.png"
        }
      ],
      "video": "https://github.com/aikingtai-ctrl/jintai-film-showcase/releases/download/media-v1/no-rush-prompts-part1--4995b5ea239f34911823.mp4",
      "thumb": "",
      "seed": "",
      "instance": "",
      "model": "seedance2.5",
      "params": "画布节点 视频生成 #43 · seedance2.5 · jimeng_multimodal2video",
      "take": "#43",
      "status": "已生成",
      "alts": []
    },
    {
      "id": "SC04-SH04",
      "title": "反应(笑点:八分身)",
      "tc": "",
      "start": 342,
      "duration": 8,
      "framing": "双人正反打",
      "camera": "",
      "lighting": "同场",
      "cast": [
        "CH001",
        "CH002",
        "LOC002"
      ],
      "sceneTag": "@CH001 + @CH002 + @LOC002",
      "action": "老师平静发问,小跃回忆。 → 小跃比“八”,手指停在半空。",
      "picture": "",
      "firstFramePrompt": "",
      "dialogue": [
        {
          "who": "金老师",
          "text": "你那八百多条里,同一个主角,建了几个?"
        },
        {
          "who": "小跃",
          "text": "……八个。有一回八个版本出现在同一个画面里,像开家族会议。"
        }
      ],
      "dialogueText": "(金老师):「你那八百多条里,同一个主角,建了几个?」(小跃):「……八个。有一回八个版本出现在同一个画面里,像开家族会议。」",
      "sound": "",
      "notes": "—(见场级/全片通用禁止项)",
      "multiShot": false,
      "prompt": "景别 · 机位 · 运动\t双人正反打\n引用(双@)\t@CH001 + @CH002 + @LOC002\n首帧提示词(静)\t老师平静发问,小跃回忆。\n动态提示词(动)\t小跃比“八”,手指停在半空。\n台词与声音(AU01–AU04)\t对白AU01(金老师):「你那八百多条里,同一个主角,建了几个?」(小跃):「……八个。有一回八个版本出现在同一个画面里,像开家族会议。」\n光源动机\t同场\n前后连续性\t—\n禁止发生\t—(见场级/全片通用禁止项)",
      "refs": [
        {
          "label": "LOC002 母版陈列室",
          "src": "media/img-d42972373463c99f50af.png"
        },
        {
          "label": "CH001 金老师",
          "src": "media/img-e0380fbeec3a70be4774.png"
        },
        {
          "label": "CH002 毛小跃",
          "src": "media/img-2e4075a07776b21e3ec6.png"
        }
      ],
      "video": "https://github.com/aikingtai-ctrl/jintai-film-showcase/releases/download/media-v1/no-rush-prompts-part1--857264ebd24dd736ae68.mp4",
      "thumb": "",
      "seed": "",
      "instance": "",
      "model": "seedance2.5",
      "params": "画布节点 视频生成 #44 · 8s · seedance2.5 · jimeng_multimodal2video",
      "take": "#44",
      "status": "已生成",
      "alts": []
    },
    {
      "id": "SC04-SH05",
      "title": "物证(视觉笑点)",
      "tc": "",
      "start": 350,
      "duration": 4,
      "framing": "特写 · 横移“耻辱墙”",
      "camera": "",
      "lighting": "墙面射灯",
      "cast": [
        "LOC002"
      ],
      "sceneTag": "@LOC002",
      "action": "墙上八张“同一主角”画像并排。 → 匀速横移,每过一张配一声“啵”;画像一张比一张离谱,第8张最夸张。",
      "picture": "",
      "firstFramePrompt": "",
      "dialogue": [],
      "dialogueText": "无对白",
      "sound": "效果：“啵”×8",
      "notes": "漂移程度渐进,不得一步到位(另见场级/全片通用禁止项)",
      "multiShot": false,
      "prompt": "景别 · 机位 · 运动\t特写 · 横移“耻辱墙”\n引用(双@)\t@LOC002\n首帧提示词(静)\t墙上八张“同一主角”画像并排。\n动态提示词(动)\t匀速横移,每过一张配一声“啵”;画像一张比一张离谱,第8张最夸张。\n台词与声音(AU01–AU04)\t效果AU03:“啵”×8\n光源动机\t墙面射灯\n前后连续性\t—\n禁止发生\t漂移程度渐进,不得一步到位(另见场级/全片通用禁止项)",
      "refs": [
        {
          "label": "LOC002 母版陈列室",
          "src": "media/img-d42972373463c99f50af.png"
        }
      ],
      "video": "https://github.com/aikingtai-ctrl/jintai-film-showcase/releases/download/media-v1/no-rush-prompts-part1--36e4d21a4a7054db0a1f.mp4",
      "thumb": "",
      "seed": "",
      "instance": "",
      "model": "seedance2.5",
      "params": "画布节点 视频生成 #45 · 4s · seedance2.5 · jimeng_multimodal2video",
      "take": "#45",
      "status": "已生成",
      "alts": []
    },
    {
      "id": "SC04-SH06",
      "title": "动作",
      "tc": "",
      "start": 354,
      "duration": 13,
      "framing": "中景 · 双柜之间",
      "camera": "",
      "lighting": "同场",
      "cast": [
        "CH001",
        "LOC002"
      ],
      "sceneTag": "@CH001 + @LOC002",
      "action": "老师移步CO02服装柜与LOC012模型柜之间。 → 两手各指一柜。",
      "picture": "",
      "firstFramePrompt": "",
      "dialogue": [
        {
          "who": "金老师",
          "text": "换装只改状态,不新建人物——CH004-CO02,衣服挂在人的编号底下,注明剧情阶段。白天的客栈和晚上的客栈,也不是两家店:昼夜是场景的状态,不新建地点。"
        }
      ],
      "dialogueText": "(金老师):「换装只改状态,不新建人物——CH004-CO02,衣服挂在人的编号底下,注明剧情阶段。白天的客栈和晚上的客栈,也不是两家店:昼夜是场景的状态,不新建地点。」",
      "sound": "",
      "notes": "—(见场级/全片通用禁止项)",
      "multiShot": false,
      "prompt": "景别 · 机位 · 运动\t中景 · 双柜之间\n引用(双@)\t@CH001 + @LOC002\n首帧提示词(静)\t老师移步CO02服装柜与LOC012模型柜之间。\n动态提示词(动)\t两手各指一柜。\n台词与声音(AU01–AU04)\t对白AU01(金老师):「换装只改状态,不新建人物——CH004-CO02,衣服挂在人的编号底下,注明剧情阶段。白天的客栈和晚上的客栈,也不是两家店:昼夜是场景的状态,不新建地点。」\n光源动机\t同场\n前后连续性\t—\n禁止发生\t—(见场级/全片通用禁止项)",
      "refs": [
        {
          "label": "CH001 金老师",
          "src": "media/img-e0380fbeec3a70be4774.png"
        },
        {
          "label": "LOC002 母版陈列室",
          "src": "media/img-d42972373463c99f50af.png"
        }
      ],
      "video": "https://github.com/aikingtai-ctrl/jintai-film-showcase/releases/download/media-v1/no-rush-prompts-part1--58c8e8ac4bc252b1645e.mp4",
      "thumb": "",
      "seed": "",
      "instance": "",
      "model": "seedance2.5",
      "params": "画布节点 视频生成 #46 · 13s · seedance2.5 · jimeng_multimodal2video",
      "take": "#46",
      "status": "已生成",
      "alts": []
    },
    {
      "id": "SC04-SH07",
      "title": "反应",
      "tc": "",
      "start": 367,
      "duration": 4,
      "framing": "近景",
      "camera": "",
      "lighting": "同场",
      "cast": [
        "CH002",
        "LOC002"
      ],
      "sceneTag": "@CH002 + @LOC002",
      "action": "小跃盯着立像。 → 回头问。",
      "picture": "",
      "firstFramePrompt": "",
      "dialogue": [
        {
          "who": "小跃",
          "text": "那怎么保证他每条都长一样?靠脸吗?"
        }
      ],
      "dialogueText": "(小跃):「那怎么保证他每条都长一样?靠脸吗?」",
      "sound": "",
      "notes": "—(见场级/全片通用禁止项)",
      "multiShot": false,
      "prompt": "景别 · 机位 · 运动\t近景\n引用(双@)\t@CH002 + @LOC002\n首帧提示词(静)\t小跃盯着立像。\n动态提示词(动)\t回头问。\n台词与声音(AU01–AU04)\t对白AU01(小跃):「那怎么保证他每条都长一样?靠脸吗?」\n光源动机\t同场\n前后连续性\t—\n禁止发生\t—(见场级/全片通用禁止项)",
      "refs": [
        {
          "label": "CH002 毛小跃",
          "src": "media/img-2e4075a07776b21e3ec6.png"
        },
        {
          "label": "LOC002 母版陈列室",
          "src": "media/img-d42972373463c99f50af.png"
        }
      ],
      "video": "https://github.com/aikingtai-ctrl/jintai-film-showcase/releases/download/media-v1/no-rush-prompts-part1--1a40b1dc0ac7b3323c65.mp4",
      "thumb": "",
      "seed": "",
      "instance": "",
      "model": "seedance2.5",
      "params": "画布节点 视频生成 #47 · 4s · seedance2.5 · jimeng_multimodal2video",
      "take": "#47",
      "status": "已生成",
      "alts": []
    },
    {
      "id": "SC04-SH08",
      "title": "物证(G4=锁柜)",
      "tc": "",
      "start": 371,
      "duration": 12,
      "framing": "特写短刀柜 → 上摇中景",
      "camera": "",
      "lighting": "同场",
      "cast": [
        "CH001",
        "LOC002",
        "PR001"
      ],
      "sceneTag": "@CH001 + @LOC002 + @PR001",
      "action": "PR008断柄短刀柜特写起幅。 → 上摇至老师;末句章落在柜锁凹槽,「咔哒」上锁——本片设定:资产门的章盖在柜锁上。",
      "picture": "",
      "firstFramePrompt": "",
      "dialogue": [
        {
          "who": "金老师",
          "text": "脸会漂。靠骨相、体态、劳动痕迹、专属物件——刀疤不会漂,断柄短刀不会漂。第四道门:资产母版。确认“这就是这个角色、这就是这个世界”,然后——锁柜。"
        }
      ],
      "dialogueText": "(金老师):「脸会漂。靠骨相、体态、劳动痕迹、专属物件——刀疤不会漂,断柄短刀不会漂。第四道门:资产母版。确认“这就是这个角色、这就是这个世界”,然后——锁柜。」",
      "sound": "效果：章“咚”+锁“咔哒”",
      "notes": "连续性：G4过门仪式变体:盖章=锁柜；已锁柜不得再开(另见场级/全片通用禁止项)",
      "multiShot": false,
      "prompt": "景别 · 机位 · 运动\t特写短刀柜 → 上摇中景\n引用(双@)\t@CH001 + @LOC002 + @PR001\n首帧提示词(静)\tPR008断柄短刀柜特写起幅。\n动态提示词(动)\t上摇至老师;末句章落在柜锁凹槽,「咔哒」上锁——本片设定:资产门的章盖在柜锁上。\n台词与声音(AU01–AU04)\t对白AU01(金老师):「脸会漂。靠骨相、体态、劳动痕迹、专属物件——刀疤不会漂,断柄短刀不会漂。第四道门:资产母版。确认“这就是这个角色、这就是这个世界”,然后——锁柜。」\n效果AU03:章“咚”+锁“咔哒”\n光源动机\t同场\n前后连续性\tG4过门仪式变体:盖章=锁柜\n禁止发生\t已锁柜不得再开(另见场级/全片通用禁止项)",
      "refs": [
        {
          "label": "PR001 红色批准章 / 红门",
          "src": "media/img-4c89aad734a7fe3e8bb7.png"
        },
        {
          "label": "CH001 金老师",
          "src": "media/img-e0380fbeec3a70be4774.png"
        },
        {
          "label": "LOC002 母版陈列室",
          "src": "media/img-d42972373463c99f50af.png"
        }
      ],
      "video": "https://github.com/aikingtai-ctrl/jintai-film-showcase/releases/download/media-v1/no-rush-prompts-part1--c302a0dc11c49c68be10.mp4",
      "thumb": "",
      "seed": "",
      "instance": "",
      "model": "seedance2.5",
      "params": "画布节点 视频生成 #48 · 12s · seedance2.5 · jimeng_multimodal2video",
      "take": "#48",
      "status": "已生成",
      "alts": []
    },
    {
      "id": "SC04-SH09",
      "title": "反应(笑点:v2弹柜)",
      "tc": "",
      "start": 383,
      "duration": 6,
      "framing": "中景",
      "camera": "",
      "lighting": "同场",
      "cast": [
        "CH002",
        "LOC002"
      ],
      "sceneTag": "@CH002 + @LOC002",
      "action": "小跃盯着已锁柜,手痒。 → 指尖刚碰玻璃,旁侧「哐」弹出一模一样新柜,标签「v2」;小跃踉跄缩手。",
      "picture": "",
      "firstFramePrompt": "",
      "dialogue": [],
      "dialogueText": "无对白",
      "sound": "效果：弹簧“哐”+小跃短促惊叫",
      "notes": "原柜纹丝不动,只弹新柜(另见场级/全片通用禁止项)",
      "multiShot": false,
      "prompt": "景别 · 机位 · 运动\t中景\n引用(双@)\t@CH002 + @LOC002\n首帧提示词(静)\t小跃盯着已锁柜,手痒。\n动态提示词(动)\t指尖刚碰玻璃,旁侧「哐」弹出一模一样新柜,标签「v2」;小跃踉跄缩手。\n台词与声音(AU01–AU04)\t效果AU03:弹簧“哐”+小跃短促惊叫\n光源动机\t同场\n前后连续性\t—\n禁止发生\t原柜纹丝不动,只弹新柜(另见场级/全片通用禁止项)",
      "refs": [
        {
          "label": "CH002 毛小跃",
          "src": "media/img-2e4075a07776b21e3ec6.png"
        },
        {
          "label": "LOC002 母版陈列室",
          "src": "media/img-d42972373463c99f50af.png"
        }
      ],
      "video": "https://github.com/aikingtai-ctrl/jintai-film-showcase/releases/download/media-v1/no-rush-prompts-part1--ee822944cbdbb85c0b95.mp4",
      "thumb": "",
      "seed": "",
      "instance": "",
      "model": "seedance2.5",
      "params": "画布节点 视频生成 #49 · 6s · seedance2.5 · jimeng_multimodal2video",
      "take": "#49",
      "status": "已生成",
      "alts": []
    },
    {
      "id": "SC04-SH10",
      "title": "物证",
      "tc": "",
      "start": 389,
      "duration": 13,
      "framing": "俯拍三色带 → 收中景",
      "camera": "",
      "lighting": "色带自发光",
      "cast": [
        "CH001",
        "LOC002"
      ],
      "sceneTag": "@CH001 + @LOC002",
      "action": "俯拍柜前地面三条色带:working → review → approved,一辆资产小车停在review带上。 → 小车沿带驶入approved,收老师中景。",
      "picture": "",
      "firstFramePrompt": "",
      "dialogue": [
        {
          "who": "金老师",
          "text": "母版一经批准,不覆盖。任何变化,产生新版本。柜前三条色带看见没有——working、review、approved。验收只认approved这一条道,工作稿、返修图、测试图,不许和母版混放。"
        }
      ],
      "dialogueText": "(金老师):「母版一经批准,不覆盖。任何变化,产生新版本。柜前三条色带看见没有——working、review、approved。验收只认approved这一条道,工作稿、返修图、测试图,不许和母版混放。」",
      "sound": "",
      "notes": "连续性：尾接SC05回流水线；小车不得跨带斜穿(另见场级/全片通用禁止项)",
      "multiShot": false,
      "prompt": "景别 · 机位 · 运动\t俯拍三色带 → 收中景\n引用(双@)\t@CH001 + @LOC002\n首帧提示词(静)\t俯拍柜前地面三条色带:working → review → approved,一辆资产小车停在review带上。\n动态提示词(动)\t小车沿带驶入approved,收老师中景。\n台词与声音(AU01–AU04)\t对白AU01(金老师):「母版一经批准,不覆盖。任何变化,产生新版本。柜前三条色带看见没有——working、review、approved。验收只认approved这一条道,工作稿、返修图、测试图,不许和母版混放。」\n光源动机\t色带自发光\n前后连续性\t尾接SC05回流水线\n禁止发生\t小车不得跨带斜穿(另见场级/全片通用禁止项)",
      "refs": [
        {
          "label": "LOC002 母版陈列室",
          "src": "media/img-d42972373463c99f50af.png"
        },
        {
          "label": "CH001 金老师",
          "src": "media/img-e0380fbeec3a70be4774.png"
        }
      ],
      "video": "https://github.com/aikingtai-ctrl/jintai-film-showcase/releases/download/media-v1/no-rush-prompts-part1--a8e7944d417a4c2b6390.mp4",
      "thumb": "",
      "seed": "",
      "instance": "",
      "model": "seedance2.5",
      "params": "画布节点 视频生成 #50 · 13s · seedance2.5 · jimeng_multimodal2video",
      "take": "#50",
      "status": "已生成",
      "alts": []
    },
    {
      "id": "SC05-SH01",
      "title": "动作",
      "tc": "",
      "start": 402,
      "duration": 12,
      "framing": "中景 · P6台沿带走",
      "camera": "",
      "lighting": "同场",
      "cast": [
        "CH001",
        "LOC001",
        "PR007"
      ],
      "sceneTag": "@CH001 + @LOC001(日) + @PR007",
      "action": "P6台,@PR007 分镜卡组在传送带一字排开。 → 老师沿带走,逐卡点数八种叙事功能;说到“一种都不沾”时悬停。",
      "picture": "",
      "firstFramePrompt": "",
      "dialogue": [
        {
          "who": "金老师",
          "text": "第六站,分镜工程。先拆场,再拆镜。每个镜头必须回答一个问题:你在叙事里干什么活?建立空间、人物关系、动作、反应、物证、转场、留白、声音先行——八种活,一种都不沾的镜头——"
        }
      ],
      "dialogueText": "(金老师):「第六站,分镜工程。先拆场,再拆镜。每个镜头必须回答一个问题:你在叙事里干什么活?建立空间、人物关系、动作、反应、物证、转场、留白、声音先行——八种活,一种都不沾的镜头——」",
      "sound": "",
      "notes": "卡面版式统一(另见场级/全片通用禁止项)",
      "multiShot": false,
      "prompt": "景别 · 机位 · 运动\t中景 · P6台沿带走\n引用(双@)\t@CH001 + @LOC001(日) + @PR007\n首帧提示词(静)\tP6台,@PR007 分镜卡组在传送带一字排开。\n动态提示词(动)\t老师沿带走,逐卡点数八种叙事功能;说到“一种都不沾”时悬停。\n台词与声音(AU01–AU04)\t对白AU01(金老师):「第六站,分镜工程。先拆场,再拆镜。每个镜头必须回答一个问题:你在叙事里干什么活?建立空间、人物关系、动作、反应、物证、转场、留白、声音先行——八种活,一种都不沾的镜头——」\n光源动机\t同场\n前后连续性\t—\n禁止发生\t卡面版式统一(另见场级/全片通用禁止项)",
      "refs": [
        {
          "label": "CH001 金老师",
          "src": "media/img-e0380fbeec3a70be4774.png"
        },
        {
          "label": "PR007 分镜卡组",
          "src": "media/img-1b16b91214766ab9a20e.png"
        },
        {
          "label": "LOC001 金泰前期车间",
          "src": "media/img-c0f50a8c4c1a5325b4ea.png"
        }
      ],
      "video": "https://github.com/aikingtai-ctrl/jintai-film-showcase/releases/download/media-v1/no-rush-prompts-part1--0785a81e2319e26d275b.mp4",
      "thumb": "",
      "seed": "",
      "instance": "",
      "model": "seedance2.5",
      "params": "画布节点 视频生成 #51 · 12s · seedance2.5 · jimeng_multimodal2video",
      "take": "#51",
      "status": "已生成",
      "alts": []
    },
    {
      "id": "SC05-SH02",
      "title": "反应",
      "tc": "",
      "start": 414,
      "duration": 6,
      "framing": "近景",
      "camera": "",
      "lighting": "同场",
      "cast": [
        "CH002",
        "LOC001"
      ],
      "sceneTag": "@CH002 + @LOC001(日)",
      "action": "小跃急举手打断。 → 说到“帅”字自己先陶醉,手比划无人机绕圈。",
      "picture": "",
      "firstFramePrompt": "",
      "dialogue": [
        {
          "who": "小跃",
          "text": "等等!我有个镜头,无人机绕主角转三圈,它就是……帅。"
        }
      ],
      "dialogueText": "(小跃):「等等!我有个镜头,无人机绕主角转三圈,它就是……帅。」",
      "sound": "",
      "notes": "连续性：手势保持到SH03；—(见场级/全片通用禁止项)",
      "multiShot": false,
      "prompt": "景别 · 机位 · 运动\t近景\n引用(双@)\t@CH002 + @LOC001(日)\n首帧提示词(静)\t小跃急举手打断。\n动态提示词(动)\t说到“帅”字自己先陶醉,手比划无人机绕圈。\n台词与声音(AU01–AU04)\t对白AU01(小跃):「等等!我有个镜头,无人机绕主角转三圈,它就是……帅。」\n光源动机\t同场\n前后连续性\t手势保持到SH03\n禁止发生\t—(见场级/全片通用禁止项)",
      "refs": [
        {
          "label": "LOC001 金泰前期车间",
          "src": "media/img-c0f50a8c4c1a5325b4ea.png"
        },
        {
          "label": "CH002 毛小跃",
          "src": "media/img-2e4075a07776b21e3ec6.png"
        }
      ],
      "video": "https://github.com/aikingtai-ctrl/jintai-film-showcase/releases/download/media-v1/no-rush-prompts-part1--640ac2b1c54c6d6110a5.mp4",
      "thumb": "",
      "seed": "",
      "instance": "",
      "model": "seedance2.5",
      "params": "画布节点 视频生成 #52 · 6s · seedance2.5 · jimeng_multimodal2video",
      "take": "#52",
      "status": "已生成",
      "alts": []
    },
    {
      "id": "SC05-SH03",
      "title": "动作(笑点:滑梯)",
      "tc": "",
      "start": 420,
      "duration": 5,
      "framing": "全景",
      "camera": "",
      "lighting": "同场",
      "cast": [
        "LOC001",
        "PR007"
      ],
      "sceneTag": "@LOC001(日) + @PR007",
      "action": "那张分镜卡孤零零躺在带上;前景小跃保持比划姿势。 → 传送带「哐」弹起卡片,卡划出弧线精准落入99_archive滑梯口,「哧溜」滑走;小跃目送。",
      "picture": "",
      "firstFramePrompt": "",
      "dialogue": [],
      "dialogueText": "无对白",
      "sound": "效果：弹射“哐”+滑梯“哧溜”+落底闷响",
      "notes": "连续性：滑梯口位置=SC07彩蛋同位；卡片轨迹一次成型不反弹(另见场级/全片通用禁止项)",
      "multiShot": false,
      "prompt": "景别 · 机位 · 运动\t全景\n引用(双@)\t@LOC001(日) + @PR007\n首帧提示词(静)\t那张分镜卡孤零零躺在带上;前景小跃保持比划姿势。\n动态提示词(动)\t传送带「哐」弹起卡片,卡划出弧线精准落入99_archive滑梯口,「哧溜」滑走;小跃目送。\n台词与声音(AU01–AU04)\t效果AU03:弹射“哐”+滑梯“哧溜”+落底闷响\n光源动机\t同场\n前后连续性\t滑梯口位置=SC07彩蛋同位\n禁止发生\t卡片轨迹一次成型不反弹(另见场级/全片通用禁止项)",
      "refs": [
        {
          "label": "LOC001 金泰前期车间",
          "src": "media/img-c0f50a8c4c1a5325b4ea.png"
        },
        {
          "label": "PR007 分镜卡组",
          "src": "media/img-1b16b91214766ab9a20e.png"
        }
      ],
      "video": "https://github.com/aikingtai-ctrl/jintai-film-showcase/releases/download/media-v1/no-rush-prompts-part1--7a283d57f9c8f113e83d.mp4",
      "thumb": "",
      "seed": "",
      "instance": "",
      "model": "seedance2.5",
      "params": "画布节点 视频生成 #53 · seedance2.5 · jimeng_multimodal2video",
      "take": "#53",
      "status": "已生成",
      "alts": []
    },
    {
      "id": "SC05-SH04",
      "title": "物证",
      "tc": "",
      "start": 425,
      "duration": 12,
      "framing": "中景 + 一镜一页表样特写",
      "camera": "",
      "lighting": "同场",
      "cast": [
        "CH001",
        "LOC001"
      ],
      "sceneTag": "@CH001 + @LOC001(日)",
      "action": "老师拿起一页「一镜一页」表样。 → 表样特写逐行亮:时长/景别/机位/运动/引用/走位/光源/台词与三类声音/连续性。",
      "picture": "",
      "firstFramePrompt": "",
      "dialogue": [
        {
          "who": "金老师",
          "text": "帅,不是叙事功能。留下来的每一镜,填齐十几个字段:时长、景别、机位、运动、引用、走位、光源动机、台词和三类声音、前后连续性——音频编号挂在完整镜头号底下,画和音,永远机械对齐。"
        }
      ],
      "dialogueText": "(金老师):「帅,不是叙事功能。留下来的每一镜,填齐十几个字段:时长、景别、机位、运动、引用、走位、光源动机、台词和三类声音、前后连续性——音频编号挂在完整镜头号底下,画和音,永远机械对齐。」",
      "sound": "",
      "notes": "表样字段与本片一镜一页一致(另见场级/全片通用禁止项)",
      "multiShot": false,
      "prompt": "景别 · 机位 · 运动\t中景 + 一镜一页表样特写\n引用(双@)\t@CH001 + @LOC001(日)\n首帧提示词(静)\t老师拿起一页「一镜一页」表样。\n动态提示词(动)\t表样特写逐行亮:时长/景别/机位/运动/引用/走位/光源/台词与三类声音/连续性。\n台词与声音(AU01–AU04)\t对白AU01(金老师):「帅,不是叙事功能。留下来的每一镜,填齐十几个字段:时长、景别、机位、运动、引用、走位、光源动机、台词和三类声音、前后连续性——音频编号挂在完整镜头号底下,画和音,永远机械对齐。」\n光源动机\t同场\n前后连续性\t—\n禁止发生\t表样字段与本片一镜一页一致(另见场级/全片通用禁止项)",
      "refs": [
        {
          "label": "LOC001 金泰前期车间",
          "src": "media/img-c0f50a8c4c1a5325b4ea.png"
        },
        {
          "label": "CH001 金老师",
          "src": "media/img-e0380fbeec3a70be4774.png"
        }
      ],
      "video": "https://github.com/aikingtai-ctrl/jintai-film-showcase/releases/download/media-v1/no-rush-prompts-part1--9ce09dd926412d167c2a.mp4",
      "thumb": "",
      "seed": "",
      "instance": "",
      "model": "seedance2.5",
      "params": "画布节点 视频生成 #54 · 12s · seedance2.5 · jimeng_multimodal2video",
      "take": "#54",
      "status": "已生成",
      "alts": []
    },
    {
      "id": "SC05-SH05",
      "title": "物证",
      "tc": "",
      "start": 437,
      "duration": 10,
      "framing": "分屏示意插入",
      "camera": "",
      "lighting": "图形化示意",
      "cast": [
        "CH001",
        "LOC001"
      ],
      "sceneTag": "@CH001(画外) + @LOC001(日)",
      "action": "分屏:左半「首帧(静)」一张定格构图纸,右半「动态(动)」一张箭头运动纸。 → 两纸先被合成一张(叠成乱码,警示红),再分开(恢复清晰,确认绿)。",
      "picture": "",
      "firstFramePrompt": "",
      "dialogue": [
        {
          "who": "金老师,画外",
          "text": "还有一条背下来:首帧静态和动态变化,分开写。一张纸说清“第一格长什么样”,另一张纸说清“接下来动什么”。混在一起写,生成的时候两头都不听你的。"
        }
      ],
      "dialogueText": "(金老师,画外):「还有一条背下来:首帧静态和动态变化,分开写。一张纸说清“第一格长什么样”,另一张纸说清“接下来动什么”。混在一起写,生成的时候两头都不听你的。」",
      "sound": "",
      "notes": "示意用图形不用真实生成画面(另见场级/全片通用禁止项)",
      "multiShot": false,
      "prompt": "景别 · 机位 · 运动\t分屏示意插入\n引用(双@)\t@CH001(画外) + @LOC001(日)\n首帧提示词(静)\t分屏:左半「首帧(静)」一张定格构图纸,右半「动态(动)」一张箭头运动纸。\n动态提示词(动)\t两纸先被合成一张(叠成乱码,警示红),再分开(恢复清晰,确认绿)。\n台词与声音(AU01–AU04)\t对白AU01(金老师,画外):「还有一条背下来:首帧静态和动态变化,分开写。一张纸说清“第一格长什么样”,另一张纸说清“接下来动什么”。混在一起写,生成的时候两头都不听你的。」\n光源动机\t图形化示意\n前后连续性\t—\n禁止发生\t示意用图形不用真实生成画面(另见场级/全片通用禁止项)",
      "refs": [
        {
          "label": "LOC001 金泰前期车间",
          "src": "media/img-c0f50a8c4c1a5325b4ea.png"
        },
        {
          "label": "CH001 金老师",
          "src": "media/img-e0380fbeec3a70be4774.png"
        }
      ],
      "video": "https://github.com/aikingtai-ctrl/jintai-film-showcase/releases/download/media-v1/no-rush-prompts-part1--d1fc07be02a85adab71b.mp4",
      "thumb": "",
      "seed": "",
      "instance": "",
      "model": "seedance2.5",
      "params": "画布节点 视频生成 #55 · 10s · seedance2.5 · jimeng_multimodal2video",
      "take": "#55",
      "status": "已生成",
      "alts": []
    },
    {
      "id": "SC05-SH06",
      "title": "建立/物证",
      "tc": "",
      "start": 447,
      "duration": 8,
      "framing": "中景 · P7大屏",
      "camera": "",
      "lighting": "屏光",
      "cast": [
        "CH003",
        "LOC001"
      ],
      "sceneTag": "@CH003 + @LOC001(日)",
      "action": "P7大屏,关键帧成排生成,每帧下一行引用「@CH004 + @LOC012 + @CH004-CO02」;@CH003 在屏侧递帧。 → 镜头缓推向引用行。",
      "picture": "",
      "firstFramePrompt": "",
      "dialogue": [
        {
          "who": "金老师,画外",
          "text": "第七站,关键帧。首帧、必要的尾帧、主视觉、空镜。注意这行字——双引用:人物和场景,同时引用。"
        }
      ],
      "dialogueText": "(金老师,画外):「第七站,关键帧。首帧、必要的尾帧、主视觉、空镜。注意这行字——双引用:人物和场景,同时引用。」",
      "sound": "",
      "notes": "屏上引用行格式统一(另见场级/全片通用禁止项)",
      "multiShot": false,
      "prompt": "景别 · 机位 · 运动\t中景 · P7大屏\n引用(双@)\t@CH003 + @LOC001(日)\n首帧提示词(静)\tP7大屏,关键帧成排生成,每帧下一行引用「@CH004 + @LOC012 + @CH004-CO02」;@CH003 在屏侧递帧。\n动态提示词(动)\t镜头缓推向引用行。\n台词与声音(AU01–AU04)\t对白AU01(金老师,画外):「第七站,关键帧。首帧、必要的尾帧、主视觉、空镜。注意这行字——双引用:人物和场景,同时引用。」\n光源动机\t屏光\n前后连续性\t—\n禁止发生\t屏上引用行格式统一(另见场级/全片通用禁止项)",
      "refs": [
        {
          "label": "LOC001 金泰前期车间",
          "src": "media/img-c0f50a8c4c1a5325b4ea.png"
        },
        {
          "label": "CH003 执行助手「小助」",
          "src": "media/img-415cf94e5ac60eb6b830.png"
        }
      ],
      "video": "https://github.com/aikingtai-ctrl/jintai-film-showcase/releases/download/media-v1/no-rush-prompts-part1--fc144aaaa2ccd443a2f3.mp4",
      "thumb": "",
      "seed": "",
      "instance": "",
      "model": "veo3.1 quality（kie）",
      "params": "画布节点 视频生成 #56 · veo3.1 quality（kie） · kie_kling_v3turbo_i2v",
      "take": "#56",
      "status": "已生成",
      "alts": []
    },
    {
      "id": "SC05-SH07",
      "title": "反应",
      "tc": "",
      "start": 455,
      "duration": 3,
      "framing": "近景",
      "camera": "",
      "lighting": "同场",
      "cast": [
        "CH002",
        "LOC001"
      ],
      "sceneTag": "@CH002 + @LOC001(日)",
      "action": "小跃盯屏。 → 回头问。",
      "picture": "",
      "firstFramePrompt": "",
      "dialogue": [
        {
          "who": "小跃",
          "text": "只引用人物,会怎么样?"
        }
      ],
      "dialogueText": "(小跃):「只引用人物,会怎么样?」",
      "sound": "",
      "notes": "—(见场级/全片通用禁止项)",
      "multiShot": false,
      "prompt": "景别 · 机位 · 运动\t近景\n引用(双@)\t@CH002 + @LOC001(日)\n首帧提示词(静)\t小跃盯屏。\n动态提示词(动)\t回头问。\n台词与声音(AU01–AU04)\t对白AU01(小跃):「只引用人物,会怎么样?」\n光源动机\t同场\n前后连续性\t—\n禁止发生\t—(见场级/全片通用禁止项)",
      "refs": [
        {
          "label": "CH002 毛小跃",
          "src": "media/img-2e4075a07776b21e3ec6.png"
        },
        {
          "label": "LOC001 金泰前期车间",
          "src": "media/img-c0f50a8c4c1a5325b4ea.png"
        }
      ],
      "video": "https://github.com/aikingtai-ctrl/jintai-film-showcase/releases/download/media-v1/no-rush-prompts-part1--cf0e35bbe96fa284eeb0.mp4",
      "thumb": "",
      "seed": "",
      "instance": "",
      "model": "seedance2.5",
      "params": "画布节点 视频生成 #57 · 4s · seedance2.5 · jimeng_multimodal2video",
      "take": "#57",
      "status": "已生成",
      "alts": []
    },
    {
      "id": "SC05-SH08",
      "title": "物证(笑点:便利店)",
      "tc": "",
      "start": 458,
      "duration": 8,
      "framing": "屏幕特写 · 对比图",
      "camera": "",
      "lighting": "屏光",
      "cast": [
        "LOC001"
      ],
      "sceneTag": "@LOC001(日)",
      "action": "对比图左:人对景对(落雁客栈);右:人对,背景是灯火通明的便利店。 → 右图缓慢放大到便利店货架细节。",
      "picture": "",
      "firstFramePrompt": "",
      "dialogue": [
        {
          "who": "金老师,画外",
          "text": "人是对的。背景的落雁客栈,变成了便利店。"
        }
      ],
      "dialogueText": "(金老师,画外):「人是对的。背景的落雁客栈,变成了便利店。」",
      "sound": "效果：便利店门铃“叮咚”",
      "notes": "便利店无真实品牌标识(另见场级/全片通用禁止项)",
      "multiShot": false,
      "prompt": "景别 · 机位 · 运动\t屏幕特写 · 对比图\n引用(双@)\t@LOC001(日)\n首帧提示词(静)\t对比图左:人对景对(落雁客栈);右:人对,背景是灯火通明的便利店。\n动态提示词(动)\t右图缓慢放大到便利店货架细节。\n台词与声音(AU01–AU04)\t对白AU01(金老师,画外):「人是对的。背景的落雁客栈,变成了便利店。」\n效果AU03:便利店门铃“叮咚”\n光源动机\t屏光\n前后连续性\t—\n禁止发生\t便利店无真实品牌标识(另见场级/全片通用禁止项)",
      "refs": [
        {
          "label": "LOC001 金泰前期车间",
          "src": "media/img-c0f50a8c4c1a5325b4ea.png"
        }
      ],
      "video": "https://github.com/aikingtai-ctrl/jintai-film-showcase/releases/download/media-v1/no-rush-prompts-part1--9d5294286fd480b44d78.mp4",
      "thumb": "",
      "seed": "",
      "instance": "",
      "model": "seedance2.5",
      "params": "画布节点 视频生成 #58 · 8s · seedance2.5 · jimeng_multimodal2video",
      "take": "#58",
      "status": "已生成",
      "alts": []
    },
    {
      "id": "SC05-SH09",
      "title": "动作/物证",
      "tc": "",
      "start": 466,
      "duration": 15,
      "framing": "中景 + G5门(过门仪式)",
      "camera": "",
      "lighting": "红门灯带",
      "cast": [
        "CH001",
        "LOC001",
        "PR001"
      ],
      "sceneTag": "@CH001 + @LOC001(日) + @PR001",
      "action": "老师立于G5门「G5 镜头意图」前。 → 讲双引用与目录字段双向核对,盖章过门。",
      "picture": "",
      "firstFramePrompt": "",
      "dialogue": [
        {
          "who": "金老师",
          "text": "人对景错,景对人漂——双引用,就是治这个的。第五道门:镜头意图。每个镜头,一眼能读懂它想干什么,才放行。批准的关键帧进approved目录,镜头表里的批准字段同步置位——目录和字段必须一致,机器两边核对,对不上,就报错。"
        }
      ],
      "dialogueText": "(金老师):「人对景错,景对人漂——双引用,就是治这个的。第五道门:镜头意图。每个镜头,一眼能读懂它想干什么,才放行。批准的关键帧进approved目录,镜头表里的批准字段同步置位——目录和字段必须一致,机器两边核对,对不上,就报错。」",
      "sound": "效果：章“咚”+升门",
      "notes": "连续性：过门仪式第5次；—(见场级/全片通用禁止项)",
      "multiShot": false,
      "prompt": "景别 · 机位 · 运动\t中景 + G5门(过门仪式)\n引用(双@)\t@CH001 + @LOC001(日) + @PR001\n首帧提示词(静)\t老师立于G5门「G5 镜头意图」前。\n动态提示词(动)\t讲双引用与目录字段双向核对,盖章过门。\n台词与声音(AU01–AU04)\t对白AU01(金老师):「人对景错,景对人漂——双引用,就是治这个的。第五道门:镜头意图。每个镜头,一眼能读懂它想干什么,才放行。批准的关键帧进approved目录,镜头表里的批准字段同步置位——目录和字段必须一致,机器两边核对,对不上,就报错。」\n效果AU03:章“咚”+升门\n光源动机\t红门灯带\n前后连续性\t过门仪式第5次\n禁止发生\t—(见场级/全片通用禁止项)",
      "refs": [
        {
          "label": "LOC001 金泰前期车间",
          "src": "media/img-c0f50a8c4c1a5325b4ea.png"
        },
        {
          "label": "CH001 金老师",
          "src": "media/img-e0380fbeec3a70be4774.png"
        },
        {
          "label": "PR001 红色批准章 / 红门",
          "src": "media/img-4c89aad734a7fe3e8bb7.png"
        }
      ],
      "video": "https://github.com/aikingtai-ctrl/jintai-film-showcase/releases/download/media-v1/no-rush-prompts-part1--ededff9572dc9a33ce18.mp4",
      "thumb": "",
      "seed": "",
      "instance": "",
      "model": "kling v3 turbo i2v（kie）",
      "params": "画布节点 视频生成 #59 · kling v3 turbo i2v（kie） · kie_kling_v3turbo_i2v",
      "take": "#59",
      "status": "已生成",
      "alts": []
    },
    {
      "id": "SC05-SH10",
      "title": "动作(视觉:蓝雾)",
      "tc": "",
      "start": 481,
      "duration": 10,
      "framing": "全景 · P8",
      "camera": "",
      "lighting": "蓝光残影",
      "cast": [
        "CH003",
        "LOC001"
      ],
      "sceneTag": "@CH003 + @LOC001(日)",
      "action": "P8大屏滚动四张表:首帧提示词表 / 动态提示词表 / 引用清单 / 批次任务清单(JOB-EP01-0001…)。 → @CH003 高速穿梭编表,残影连成一片蓝雾。",
      "picture": "",
      "firstFramePrompt": "",
      "dialogue": [
        {
          "who": "金老师,画外",
          "text": "第八站,生成包整理,全自动。硬规则两条:每个任务只引用approved里的已批准母版;提示词里不粘贴整段人物描述,只用稳定引用。"
        }
      ],
      "dialogueText": "(金老师,画外):「第八站,生成包整理,全自动。硬规则两条:每个任务只引用approved里的已批准母版;提示词里不粘贴整段人物描述,只用稳定引用。」",
      "sound": "效果：键入声浪",
      "notes": "表内示例编号合规(另见场级/全片通用禁止项)",
      "multiShot": false,
      "prompt": "景别 · 机位 · 运动\t全景 · P8\n引用(双@)\t@CH003 + @LOC001(日)\n首帧提示词(静)\tP8大屏滚动四张表:首帧提示词表 / 动态提示词表 / 引用清单 / 批次任务清单(JOB-EP01-0001…)。\n动态提示词(动)\t@CH003 高速穿梭编表,残影连成一片蓝雾。\n台词与声音(AU01–AU04)\t对白AU01(金老师,画外):「第八站,生成包整理,全自动。硬规则两条:每个任务只引用approved里的已批准母版;提示词里不粘贴整段人物描述,只用稳定引用。」\n效果AU03:键入声浪\n光源动机\t蓝光残影\n前后连续性\t—\n禁止发生\t表内示例编号合规(另见场级/全片通用禁止项)",
      "refs": [
        {
          "label": "CH003 执行助手「小助」",
          "src": "media/img-415cf94e5ac60eb6b830.png"
        },
        {
          "label": "LOC001 金泰前期车间",
          "src": "media/img-c0f50a8c4c1a5325b4ea.png"
        }
      ],
      "video": "https://github.com/aikingtai-ctrl/jintai-film-showcase/releases/download/media-v1/no-rush-prompts-part1--e8a0ac535f39d325def3.mp4",
      "thumb": "",
      "seed": "",
      "instance": "",
      "model": "seedance2.5",
      "params": "画布节点 视频生成 #60 · 10s · seedance2.5 · jimeng_multimodal2video",
      "take": "#60",
      "status": "已生成",
      "alts": []
    },
    {
      "id": "SC05-SH11",
      "title": "反应",
      "tc": "",
      "start": 491,
      "duration": 8,
      "framing": "双人正反打",
      "camera": "",
      "lighting": "同场",
      "cast": [
        "CH001",
        "CH002",
        "LOC001"
      ],
      "sceneTag": "@CH001 + @CH002 + @LOC001(日)",
      "action": "正反打。 → 小跃语速由快到停。",
      "picture": "",
      "firstFramePrompt": "",
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
      "dialogueText": "(小跃):「为什么不能粘贴?我以前都是整段人设复制进去的,三百字!」(金老师):「你粘的是第几版人设?」(小跃):「……记不清了。」",
      "sound": "",
      "notes": "—(见场级/全片通用禁止项)",
      "multiShot": false,
      "prompt": "景别 · 机位 · 运动\t双人正反打\n引用(双@)\t@CH001 + @CH002 + @LOC001(日)\n首帧提示词(静)\t正反打。\n动态提示词(动)\t小跃语速由快到停。\n台词与声音(AU01–AU04)\t对白AU01(小跃):「为什么不能粘贴?我以前都是整段人设复制进去的,三百字!」(金老师):「你粘的是第几版人设?」(小跃):「……记不清了。」\n光源动机\t同场\n前后连续性\t—\n禁止发生\t—(见场级/全片通用禁止项)",
      "refs": [
        {
          "label": "CH002 毛小跃",
          "src": "media/img-2e4075a07776b21e3ec6.png"
        },
        {
          "label": "LOC001 金泰前期车间",
          "src": "media/img-c0f50a8c4c1a5325b4ea.png"
        },
        {
          "label": "CH001 金老师",
          "src": "media/img-e0380fbeec3a70be4774.png"
        }
      ],
      "video": "https://github.com/aikingtai-ctrl/jintai-film-showcase/releases/download/media-v1/no-rush-prompts-part1--cfeda2209e1e0f1766c7.mp4",
      "thumb": "",
      "seed": "",
      "instance": "",
      "model": "seedance2.5",
      "params": "画布节点 视频生成 #61 · 8s · seedance2.5 · jimeng_multimodal2video",
      "take": "#61",
      "status": "已生成",
      "alts": []
    },
    {
      "id": "SC05-SH12",
      "title": "主题",
      "tc": "",
      "start": 499,
      "duration": 9,
      "framing": "近景",
      "camera": "",
      "lighting": "同场",
      "cast": [
        "CH001",
        "LOC001"
      ],
      "sceneTag": "@CH001 + @LOC001(日)",
      "action": "老师正面近景。 → 一字一顿。",
      "picture": "",
      "firstFramePrompt": "",
      "dialogue": [
        {
          "who": "金老师",
          "text": "这就是为什么。母版一更新,引用跟着走;你粘贴的那段字,永远停在你复制它的那一刻。"
        }
      ],
      "dialogueText": "(金老师):「这就是为什么。母版一更新,引用跟着走;你粘贴的那段字,永远停在你复制它的那一刻。」",
      "sound": "音乐：低垫起",
      "notes": "—(见场级/全片通用禁止项)",
      "multiShot": false,
      "prompt": "景别 · 机位 · 运动\t近景\n引用(双@)\t@CH001 + @LOC001(日)\n首帧提示词(静)\t老师正面近景。\n动态提示词(动)\t一字一顿。\n台词与声音(AU01–AU04)\t对白AU01(金老师):「这就是为什么。母版一更新,引用跟着走;你粘贴的那段字,永远停在你复制它的那一刻。」\n音乐AU04:低垫起\n光源动机\t同场\n前后连续性\t—\n禁止发生\t—(见场级/全片通用禁止项)",
      "refs": [
        {
          "label": "LOC001 金泰前期车间",
          "src": "media/img-c0f50a8c4c1a5325b4ea.png"
        },
        {
          "label": "CH001 金老师",
          "src": "media/img-e0380fbeec3a70be4774.png"
        }
      ],
      "video": "https://github.com/aikingtai-ctrl/jintai-film-showcase/releases/download/media-v1/no-rush-prompts-part1--d49d64127ff889b6c4bc.mp4",
      "thumb": "",
      "seed": "",
      "instance": "",
      "model": "seedance2.5",
      "params": "画布节点 视频生成 #62 · 9s · seedance2.5 · jimeng_multimodal2video",
      "take": "#62",
      "status": "已生成",
      "alts": []
    },
    {
      "id": "SC05-SH13",
      "title": "建立/物证",
      "tc": "",
      "start": 508,
      "duration": 11,
      "framing": "全景 · 质检台",
      "camera": "",
      "lighting": "屏光",
      "cast": [
        "CH003",
        "LOC001"
      ],
      "sceneTag": "@CH003 + @LOC001(日)",
      "action": "线尾质检台,大屏六项自检:文件 / 数据 / 图像 / 连续性 / 覆盖率 / 交付。 → 六项逐个翻绿;@CH003 立于屏侧机械小幅点头。",
      "picture": "",
      "firstFramePrompt": "",
      "dialogue": [
        {
          "who": "金老师,画外",
          "text": "第九站,就绪包质检。自动查缺:缺失、重复、引用失效、时间线空洞、命名版本错位……人工抽审:提示词和关键帧,还忠不忠于镜头意图,有没有绕过门的临时改动。"
        }
      ],
      "dialogueText": "(金老师,画外):「第九站,就绪包质检。自动查缺:缺失、重复、引用失效、时间线空洞、命名版本错位……人工抽审:提示词和关键帧,还忠不忠于镜头意图,有没有绕过门的临时改动。」",
      "sound": "效果：翻绿“叮”×6",
      "notes": "六项名称如上(另见场级/全片通用禁止项)",
      "multiShot": false,
      "prompt": "景别 · 机位 · 运动\t全景 · 质检台\n引用(双@)\t@CH003 + @LOC001(日)\n首帧提示词(静)\t线尾质检台,大屏六项自检:文件 / 数据 / 图像 / 连续性 / 覆盖率 / 交付。\n动态提示词(动)\t六项逐个翻绿;@CH003 立于屏侧机械小幅点头。\n台词与声音(AU01–AU04)\t对白AU01(金老师,画外):「第九站,就绪包质检。自动查缺:缺失、重复、引用失效、时间线空洞、命名版本错位……人工抽审:提示词和关键帧,还忠不忠于镜头意图,有没有绕过门的临时改动。」\n效果AU03:翻绿“叮”×6\n光源动机\t屏光\n前后连续性\t—\n禁止发生\t六项名称如上(另见场级/全片通用禁止项)",
      "refs": [
        {
          "label": "CH003 执行助手「小助」",
          "src": "media/img-415cf94e5ac60eb6b830.png"
        },
        {
          "label": "LOC001 金泰前期车间",
          "src": "media/img-c0f50a8c4c1a5325b4ea.png"
        }
      ],
      "video": "https://github.com/aikingtai-ctrl/jintai-film-showcase/releases/download/media-v1/no-rush-prompts-part1--521e49b62e8193fd2678.mp4",
      "thumb": "",
      "seed": "",
      "instance": "",
      "model": "seedance2.5",
      "params": "画布节点 视频生成 #63 · 11s · seedance2.5 · jimeng_multimodal2video",
      "take": "#63",
      "status": "已生成",
      "alts": []
    },
    {
      "id": "SC05-SH14",
      "title": "反应",
      "tc": "",
      "start": 519,
      "duration": 5,
      "framing": "近景",
      "camera": "",
      "lighting": "同场",
      "cast": [
        "CH002",
        "LOC001"
      ],
      "sceneTag": "@CH002 + @LOC001(日)",
      "action": "小跃盯着全绿的屏。 → 试探地问。",
      "picture": "",
      "firstFramePrompt": "",
      "dialogue": [
        {
          "who": "小跃",
          "text": "那红线控制在几条以内,算过关?"
        }
      ],
      "dialogueText": "(小跃):「那红线控制在几条以内,算过关?」",
      "sound": "",
      "notes": "—(见场级/全片通用禁止项)",
      "multiShot": false,
      "prompt": "景别 · 机位 · 运动\t近景\n引用(双@)\t@CH002 + @LOC001(日)\n首帧提示词(静)\t小跃盯着全绿的屏。\n动态提示词(动)\t试探地问。\n台词与声音(AU01–AU04)\t对白AU01(小跃):「那红线控制在几条以内,算过关?」\n光源动机\t同场\n前后连续性\t—\n禁止发生\t—(见场级/全片通用禁止项)",
      "refs": [
        {
          "label": "LOC001 金泰前期车间",
          "src": "media/img-c0f50a8c4c1a5325b4ea.png"
        },
        {
          "label": "CH002 毛小跃",
          "src": "media/img-2e4075a07776b21e3ec6.png"
        }
      ],
      "video": "https://github.com/aikingtai-ctrl/jintai-film-showcase/releases/download/media-v1/no-rush-prompts-part1--86afd2ca58b5a3e2fd3b.mp4",
      "thumb": "",
      "seed": "",
      "instance": "",
      "model": "seedance2.5",
      "params": "画布节点 视频生成 #64 · seedance2.5 · jimeng_multimodal2video",
      "take": "#64",
      "status": "已生成",
      "alts": []
    },
    {
      "id": "SC05-SH15",
      "title": "动作/物证(主题)",
      "tc": "",
      "start": 524,
      "duration": 15,
      "framing": "中景 + G6门 + 金箱",
      "camera": "",
      "lighting": "红门灯带+箱体高光",
      "cast": [
        "CH001",
        "LOC001",
        "PR001",
        "PR002"
      ],
      "sceneTag": "@CH001 + @LOC001(日) + @PR001 + @PR002",
      "action": "老师立于G6门「G6 交付」前,金箱在门后。 → 「零」字停顿一拍,叠大字卡「零」;盖章,门升,逐项念六硬标准,尾音落在“装箱”。",
      "picture": "",
      "firstFramePrompt": "",
      "dialogue": [
        {
          "who": "金老师",
          "text": "零。不是“少”,是“无”。第六道门:交付。六项硬标准全满足——镜头覆盖率百分之百,引用有效率百分之百,已批准关键帧覆盖率百分之百,每个任务四要素齐全,包级红线为零,六道门批准记录齐全——装箱。"
        }
      ],
      "dialogueText": "(金老师):「零。不是“少”,是“无”。第六道门:交付。六项硬标准全满足——镜头覆盖率百分之百,引用有效率百分之百,已批准关键帧覆盖率百分之百,每个任务四要素齐全,包级红线为零,六道门批准记录齐全——装箱。」",
      "sound": "效果：章“咚”+升门 / 音乐：推向小高潮",
      "notes": "连续性：过门仪式第6次(最隆重)；大字卡只一个“零”字(另见场级/全片通用禁止项)",
      "multiShot": false,
      "prompt": "景别 · 机位 · 运动\t中景 + G6门 + 金箱\n引用(双@)\t@CH001 + @LOC001(日) + @PR001 + @PR002\n首帧提示词(静)\t老师立于G6门「G6 交付」前,金箱在门后。\n动态提示词(动)\t「零」字停顿一拍,叠大字卡「零」;盖章,门升,逐项念六硬标准,尾音落在“装箱”。\n台词与声音(AU01–AU04)\t对白AU01(金老师):「零。不是“少”,是“无”。第六道门:交付。六项硬标准全满足——镜头覆盖率百分之百,引用有效率百分之百,已批准关键帧覆盖率百分之百,每个任务四要素齐全,包级红线为零,六道门批准记录齐全——装箱。」\n效果AU03:章“咚”+升门\n音乐AU04:推向小高潮\n光源动机\t红门灯带+箱体高光\n前后连续性\t过门仪式第6次(最隆重)\n禁止发生\t大字卡只一个“零”字(另见场级/全片通用禁止项)",
      "refs": [
        {
          "label": "CH001 金老师",
          "src": "media/img-e0380fbeec3a70be4774.png"
        },
        {
          "label": "LOC001 金泰前期车间",
          "src": "media/img-c0f50a8c4c1a5325b4ea.png"
        },
        {
          "label": "PR001 红色批准章 / 红门",
          "src": "media/img-4c89aad734a7fe3e8bb7.png"
        },
        {
          "label": "PR002 金色就绪包箱",
          "src": "media/img-deb3d6243beea983aaf3.png"
        }
      ],
      "video": "https://github.com/aikingtai-ctrl/jintai-film-showcase/releases/download/media-v1/no-rush-prompts-part1--c83a7e0eea802ef8d0c4.mp4",
      "thumb": "",
      "seed": "",
      "instance": "",
      "model": "seedance2.5",
      "params": "画布节点 视频生成 #65 · 15s · seedance2.5 · jimeng_multimodal2video",
      "take": "#65",
      "status": "已生成",
      "alts": []
    },
    {
      "id": "SC05-SH16",
      "title": "转场",
      "tc": "",
      "start": 539,
      "duration": 7,
      "framing": "特写金箱合盖 → 拉开双人",
      "camera": "",
      "lighting": "同场",
      "cast": [
        "CH001",
        "CH002",
        "LOC001",
        "PR002"
      ],
      "sceneTag": "@CH001 + @CH002 + @LOC001(日) + @PR002",
      "action": "金箱盖缓缓合上特写,锁扣「咔」。 → 拉开双人,小跃抬手要鼓掌,老师抬手止住;音乐骤停。",
      "picture": "",
      "firstFramePrompt": "",
      "dialogue": [
        {
          "who": "金老师",
          "text": "别急着感动。还没讲你最关心的事——出了问题,怎么办。"
        }
      ],
      "dialogueText": "(金老师):「别急着感动。还没讲你最关心的事——出了问题,怎么办。」",
      "sound": "效果：锁扣“咔” / 音乐：骤停",
      "notes": "连续性：音乐骤停制造悬念接SC06；—(见场级/全片通用禁止项)",
      "multiShot": false,
      "prompt": "景别 · 机位 · 运动\t特写金箱合盖 → 拉开双人\n引用(双@)\t@CH001 + @CH002 + @LOC001(日) + @PR002\n首帧提示词(静)\t金箱盖缓缓合上特写,锁扣「咔」。\n动态提示词(动)\t拉开双人,小跃抬手要鼓掌,老师抬手止住;音乐骤停。\n台词与声音(AU01–AU04)\t对白AU01(金老师):「别急着感动。还没讲你最关心的事——出了问题,怎么办。」\n效果AU03:锁扣“咔”\n音乐AU04:骤停\n光源动机\t同场\n前后连续性\t音乐骤停制造悬念接SC06\n禁止发生\t—(见场级/全片通用禁止项)",
      "refs": [
        {
          "label": "CH001 金老师",
          "src": "media/img-e0380fbeec3a70be4774.png"
        },
        {
          "label": "PR002 金色就绪包箱",
          "src": "media/img-deb3d6243beea983aaf3.png"
        },
        {
          "label": "LOC001 金泰前期车间",
          "src": "media/img-c0f50a8c4c1a5325b4ea.png"
        },
        {
          "label": "CH002 毛小跃",
          "src": "media/img-2e4075a07776b21e3ec6.png"
        }
      ],
      "video": "https://github.com/aikingtai-ctrl/jintai-film-showcase/releases/download/media-v1/no-rush-prompts-part1--b59f5d9c8483ad35aeb9.mp4",
      "thumb": "",
      "seed": "",
      "instance": "",
      "model": "seedance2.5",
      "params": "画布节点 视频生成 #66 · 7s · seedance2.5 · jimeng_multimodal2video",
      "take": "#66",
      "status": "已生成",
      "alts": []
    },
    {
      "id": "SC06-SH01",
      "title": "物证",
      "tc": "",
      "start": 546,
      "duration": 5,
      "framing": "屏幕特写",
      "camera": "",
      "lighting": "屏光闪烁",
      "cast": [
        "LOC001"
      ],
      "sceneTag": "@LOC001(日)",
      "action": "大屏播放一条坏片:武侠人物中景,画面正常。 → 第3秒人物面部明显崩坏、扭曲一拍,画面卡顿。",
      "picture": "",
      "firstFramePrompt": "",
      "dialogue": [],
      "dialogueText": "无对白",
      "sound": "环境：静 / 效果：视频卡顿电流声",
      "notes": "崩坏示意化(另见场级/全片通用禁止项)",
      "multiShot": false,
      "prompt": "景别 · 机位 · 运动\t屏幕特写\n引用(双@)\t@LOC001(日)\n首帧提示词(静)\t大屏播放一条坏片:武侠人物中景,画面正常。\n动态提示词(动)\t第3秒人物面部明显崩坏、扭曲一拍,画面卡顿。\n台词与声音(AU01–AU04)\t效果AU03:视频卡顿电流声\n环境AU02:静\n光源动机\t屏光闪烁\n前后连续性\t—\n禁止发生\t崩坏示意化(另见场级/全片通用禁止项)",
      "refs": [
        {
          "label": "LOC001 金泰前期车间",
          "src": "media/img-c0f50a8c4c1a5325b4ea.png"
        }
      ],
      "video": "https://github.com/aikingtai-ctrl/jintai-film-showcase/releases/download/media-v1/no-rush-prompts-part1--785540884795963ffe11.mp4",
      "thumb": "",
      "seed": "",
      "instance": "",
      "model": "seedance2.5",
      "params": "画布节点 视频生成 #67 · seedance2.5 · jimeng_multimodal2video",
      "take": "#67",
      "status": "已生成",
      "alts": []
    },
    {
      "id": "SC06-SH02",
      "title": "反应",
      "tc": "",
      "start": 551,
      "duration": 5,
      "framing": "近景",
      "camera": "",
      "lighting": "同场",
      "cast": [
        "CH002",
        "LOC001"
      ],
      "sceneTag": "@CH002 + @LOC001(日)",
      "action": "小跃条件反射抢答。 → 手已比在半空。",
      "picture": "",
      "firstFramePrompt": "",
      "dialogue": [
        {
          "who": "小跃",
          "text": "重跑!换个种子再跑!跑十条,总有一条对!"
        }
      ],
      "dialogueText": "(小跃):「重跑!换个种子再跑!跑十条,总有一条对!」",
      "sound": "",
      "notes": "—(见场级/全片通用禁止项)",
      "multiShot": false,
      "prompt": "景别 · 机位 · 运动\t近景\n引用(双@)\t@CH002 + @LOC001(日)\n首帧提示词(静)\t小跃条件反射抢答。\n动态提示词(动)\t手已比在半空。\n台词与声音(AU01–AU04)\t对白AU01(小跃):「重跑!换个种子再跑!跑十条,总有一条对!」\n光源动机\t同场\n前后连续性\t—\n禁止发生\t—(见场级/全片通用禁止项)",
      "refs": [
        {
          "label": "LOC001 金泰前期车间",
          "src": "media/img-c0f50a8c4c1a5325b4ea.png"
        },
        {
          "label": "CH002 毛小跃",
          "src": "media/img-2e4075a07776b21e3ec6.png"
        }
      ],
      "video": "https://github.com/aikingtai-ctrl/jintai-film-showcase/releases/download/media-v1/no-rush-prompts-part1--0618e4004b2f29bddd9f.mp4",
      "thumb": "",
      "seed": "",
      "instance": "",
      "model": "seedance2.5",
      "params": "画布节点 视频生成 #68 · seedance2.5 · jimeng_multimodal2video",
      "take": "#68",
      "status": "已生成",
      "alts": []
    },
    {
      "id": "SC06-SH03",
      "title": "反应(笑点:814)",
      "tc": "",
      "start": 556,
      "duration": 9,
      "framing": "双人正反打",
      "camera": "",
      "lighting": "同场",
      "cast": [
        "CH001",
        "CH002",
        "LOC001"
      ],
      "sceneTag": "@CH001 + @CH002 + @LOC001(日)",
      "action": "老师眼神不动。 → 小跃越说越小声。",
      "picture": "",
      "firstFramePrompt": "",
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
      "dialogueText": "(金老师):「你那八百一十二条,就是这么攒出来的吧。」(小跃):「……八百一十四了。刚才来的路上,我又跑了两条。」",
      "sound": "效果：静场一拍",
      "notes": "连续性：812→814,数字梗第二次递进；—(见场级/全片通用禁止项)",
      "multiShot": false,
      "prompt": "景别 · 机位 · 运动\t双人正反打\n引用(双@)\t@CH001 + @CH002 + @LOC001(日)\n首帧提示词(静)\t老师眼神不动。\n动态提示词(动)\t小跃越说越小声。\n台词与声音(AU01–AU04)\t对白AU01(金老师):「你那八百一十二条,就是这么攒出来的吧。」(小跃):「……八百一十四了。刚才来的路上,我又跑了两条。」\n效果AU03:静场一拍\n光源动机\t同场\n前后连续性\t812→814,数字梗第二次递进\n禁止发生\t—(见场级/全片通用禁止项)",
      "refs": [
        {
          "label": "CH002 毛小跃",
          "src": "media/img-2e4075a07776b21e3ec6.png"
        },
        {
          "label": "CH001 金老师",
          "src": "media/img-e0380fbeec3a70be4774.png"
        },
        {
          "label": "LOC001 金泰前期车间",
          "src": "media/img-c0f50a8c4c1a5325b4ea.png"
        }
      ],
      "video": "https://github.com/aikingtai-ctrl/jintai-film-showcase/releases/download/media-v1/no-rush-prompts-part1--3c42477b377549e9e30f.mp4",
      "thumb": "",
      "seed": "",
      "instance": "",
      "model": "seedance2.5",
      "params": "画布节点 视频生成 #69 · 9s · seedance2.5 · jimeng_multimodal2video",
      "take": "#69",
      "status": "已生成",
      "alts": []
    },
    {
      "id": "SC06-SH04",
      "title": "物证",
      "tc": "",
      "start": 565,
      "duration": 16,
      "framing": "中景 + 挂图",
      "camera": "",
      "lighting": "同场",
      "cast": [
        "CH001",
        "LOC001",
        "PR006"
      ],
      "sceneTag": "@CH001 + @LOC001(日) + @PR006",
      "action": "老师「唰」拉下 @PR006 返工归因挂图:四行归因+一行技术坏片。 → 教鞭逐行点。",
      "picture": "",
      "firstFramePrompt": "",
      "dialogue": [
        {
          "who": "金老师",
          "text": "先归因,再动手。内容错了,回剧本;人物漂了,回母版;构图动作不清,回分镜;执行偏离意图,回生成包。只有一种情况允许直接重跑——黑屏、冻结这种纯技术坏片。而且,输入一个字都不许动。"
        }
      ],
      "dialogueText": "(金老师):「先归因,再动手。内容错了,回剧本;人物漂了,回母版;构图动作不清,回分镜;执行偏离意图,回生成包。只有一种情况允许直接重跑——黑屏、冻结这种纯技术坏片。而且,输入一个字都不许动。」",
      "sound": "效果：拉图“唰”+点图笃笃",
      "notes": "挂图五行与归因表一致(另见场级/全片通用禁止项)",
      "multiShot": false,
      "prompt": "景别 · 机位 · 运动\t中景 + 挂图\n引用(双@)\t@CH001 + @LOC001(日) + @PR006\n首帧提示词(静)\t老师「唰」拉下 @PR006 返工归因挂图:四行归因+一行技术坏片。\n动态提示词(动)\t教鞭逐行点。\n台词与声音(AU01–AU04)\t对白AU01(金老师):「先归因,再动手。内容错了,回剧本;人物漂了,回母版;构图动作不清,回分镜;执行偏离意图,回生成包。只有一种情况允许直接重跑——黑屏、冻结这种纯技术坏片。而且,输入一个字都不许动。」\n效果AU03:拉图“唰”+点图笃笃\n光源动机\t同场\n前后连续性\t—\n禁止发生\t挂图五行与归因表一致(另见场级/全片通用禁止项)",
      "refs": [
        {
          "label": "LOC001 金泰前期车间",
          "src": "media/img-c0f50a8c4c1a5325b4ea.png"
        },
        {
          "label": "PR006 返工归因挂图",
          "src": "media/img-0a11392d22eb5679edd6.png"
        },
        {
          "label": "CH001 金老师",
          "src": "media/img-e0380fbeec3a70be4774.png"
        }
      ],
      "video": "https://github.com/aikingtai-ctrl/jintai-film-showcase/releases/download/media-v1/no-rush-prompts-part1--e0a453020941b3c73e15.mp4",
      "thumb": "",
      "seed": "",
      "instance": "",
      "model": "seedance2.5",
      "params": "画布节点 视频生成 #70 · 16s · seedance2.5 · jimeng_multimodal2video",
      "take": "#70",
      "status": "已生成",
      "alts": []
    },
    {
      "id": "SC06-SH05",
      "title": "反应",
      "tc": "",
      "start": 581,
      "duration": 6,
      "framing": "近景",
      "camera": "",
      "lighting": "同场",
      "cast": [
        "CH002",
        "LOC001"
      ],
      "sceneTag": "@CH002 + @LOC001(日)",
      "action": "小跃不解。 → 追问。",
      "picture": "",
      "firstFramePrompt": "",
      "dialogue": [
        {
          "who": "小跃",
          "text": "为什么一个字都不许动?顺手改改提示词不行吗?"
        }
      ],
      "dialogueText": "(小跃):「为什么一个字都不许动?顺手改改提示词不行吗?」",
      "sound": "",
      "notes": "—(见场级/全片通用禁止项)",
      "multiShot": false,
      "prompt": "景别 · 机位 · 运动\t近景\n引用(双@)\t@CH002 + @LOC001(日)\n首帧提示词(静)\t小跃不解。\n动态提示词(动)\t追问。\n台词与声音(AU01–AU04)\t对白AU01(小跃):「为什么一个字都不许动?顺手改改提示词不行吗?」\n光源动机\t同场\n前后连续性\t—\n禁止发生\t—(见场级/全片通用禁止项)",
      "refs": [
        {
          "label": "LOC001 金泰前期车间",
          "src": "media/img-c0f50a8c4c1a5325b4ea.png"
        },
        {
          "label": "CH002 毛小跃",
          "src": "media/img-2e4075a07776b21e3ec6.png"
        }
      ],
      "video": "https://github.com/aikingtai-ctrl/jintai-film-showcase/releases/download/media-v1/no-rush-prompts-part1--c06e7b68f4ecf9dbaa4b.mp4",
      "thumb": "",
      "seed": "",
      "instance": "",
      "model": "seedance2.5",
      "params": "画布节点 视频生成 #71 · 6s · seedance2.5 · jimeng_multimodal2video",
      "take": "#71",
      "status": "已生成",
      "alts": []
    },
    {
      "id": "SC06-SH06",
      "title": "主题",
      "tc": "",
      "start": 587,
      "duration": 12,
      "framing": "近景",
      "camera": "",
      "lighting": "同场",
      "cast": [
        "CH001",
        "LOC001"
      ],
      "sceneTag": "@CH001 + @LOC001(日)",
      "action": "老师正面近景。 → 语速放缓,一句一顿。",
      "picture": "",
      "firstFramePrompt": "",
      "dialogue": [
        {
          "who": "金老师",
          "text": "输入不变,重跑失败,证明是技术问题;你顺手改了一个词,这回跑成了——你永远不知道刚才到底错在哪。重跑二十遍,主角不会自己长对脸。"
        }
      ],
      "dialogueText": "(金老师):「输入不变,重跑失败,证明是技术问题;你顺手改了一个词,这回跑成了——你永远不知道刚才到底错在哪。重跑二十遍,主角不会自己长对脸。」",
      "sound": "",
      "notes": "—(见场级/全片通用禁止项)",
      "multiShot": false,
      "prompt": "景别 · 机位 · 运动\t近景\n引用(双@)\t@CH001 + @LOC001(日)\n首帧提示词(静)\t老师正面近景。\n动态提示词(动)\t语速放缓,一句一顿。\n台词与声音(AU01–AU04)\t对白AU01(金老师):「输入不变,重跑失败,证明是技术问题;你顺手改了一个词,这回跑成了——你永远不知道刚才到底错在哪。重跑二十遍,主角不会自己长对脸。」\n光源动机\t同场\n前后连续性\t—\n禁止发生\t—(见场级/全片通用禁止项)",
      "refs": [
        {
          "label": "LOC001 金泰前期车间",
          "src": "media/img-c0f50a8c4c1a5325b4ea.png"
        },
        {
          "label": "CH001 金老师",
          "src": "media/img-e0380fbeec3a70be4774.png"
        }
      ],
      "video": "https://github.com/aikingtai-ctrl/jintai-film-showcase/releases/download/media-v1/no-rush-prompts-part1--2c8827e9fc5da6d4351f.mp4",
      "thumb": "",
      "seed": "",
      "instance": "",
      "model": "seedance2.5",
      "params": "画布节点 视频生成 #72 · 12s · seedance2.5 · jimeng_multimodal2video",
      "take": "#72",
      "status": "已生成",
      "alts": []
    },
    {
      "id": "SC06-SH07",
      "title": "物证",
      "tc": "",
      "start": 599,
      "duration": 19,
      "framing": "中景 + 红线清单插入",
      "camera": "",
      "lighting": "屏光渐红",
      "cast": [
        "CH001",
        "LOC001"
      ],
      "sceneTag": "@CH001 + @LOC001(日)",
      "action": "老师侧立,屏上滚出片级红线六条清单。 → 每念一条,屏上一条变红。",
      "picture": "",
      "firstFramePrompt": "",
      "dialogue": [
        {
          "who": "金老师",
          "text": "还有两站,不归前期管,但你要知道:生成执行,按批次表消化任务,逐条记录版本和结果;片质检,机器先拦黑屏噪点冻结,人再十分制逐镜审片。片级红线,一票否决——人物换脸、时代穿帮、关键物证错误、动作因果颠倒、伦理越界、引用失效。平均分再高,一条红线,整镜作废。"
        }
      ],
      "dialogueText": "(金老师):「还有两站,不归前期管,但你要知道:生成执行,按批次表消化任务,逐条记录版本和结果;片质检,机器先拦黑屏噪点冻结,人再十分制逐镜审片。片级红线,一票否决——人物换脸、时代穿帮、关键物证错误、动作因果颠倒、伦理越界、引用失效。平均分再高,一条红线,整镜作废。」",
      "sound": "效果：变红“嗒”×6",
      "notes": "清单仅六条,顺序如上(另见场级/全片通用禁止项)\n画布上投放的是改写版提示词（全角标点、措辞润色），与分镜页略有差异；此处为画布实际投放文本。",
      "multiShot": false,
      "prompt": "景别 · 机位 · 运动\t中景＋红线清单插入\n引用（双@）\t@CH001＋@LOC001（日）\n首帧提示词（静）\t老师侧身立于屏幕旁，屏上滚动显示六条片级红线。\n动态提示词（动）\t老师每念出一条，对应条目即刻变红。\n台词与声音（AU01–AU04）\t对白AU01（金老师）：「还有两站，不归前期管，但你必须知道。生成执行，要按批次表消化任务，逐条记录版本与结果；成片质检，先由机器拦截黑屏、噪点和画面冻结，再由人工按十分制逐镜审片。片级红线，一票否决——人物换脸、时代穿帮、关键物证错误、动作因果颠倒、伦理越界、引用失效……」（画布上为改写版，后半段略）",
      "refs": [
        {
          "label": "LOC001 金泰前期车间",
          "src": "media/img-c0f50a8c4c1a5325b4ea.png"
        },
        {
          "label": "CH001 金老师",
          "src": "media/img-e0380fbeec3a70be4774.png"
        }
      ],
      "video": "https://github.com/aikingtai-ctrl/jintai-film-showcase/releases/download/media-v1/no-rush-prompts-part1--daa25f42a735ceed2198.mp4",
      "thumb": "",
      "seed": "",
      "instance": "",
      "model": "veo3.1 quality（kie）",
      "params": "画布节点 视频生成 #73 · veo3.1 quality（kie） · kie_kling30",
      "take": "#73",
      "status": "已生成",
      "alts": []
    },
    {
      "id": "SC06-SH08",
      "title": "主题",
      "tc": "",
      "start": 618,
      "duration": 6,
      "framing": "双人剪影",
      "camera": "",
      "lighting": "红光",
      "cast": [
        "CH001",
        "CH002",
        "LOC001"
      ],
      "sceneTag": "@CH001 + @CH002 + @LOC001(日)",
      "action": "二人静立,大屏红光映脸。 → 字卡叠出「严的不是人,是账」。",
      "picture": "",
      "firstFramePrompt": "",
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
      "dialogueText": "(小跃):「好严啊……」(金老师):「严的不是人,是账。」",
      "sound": "音乐：低垫再起",
      "notes": "连续性：尾接SC07灯光渐暗；—(见场级/全片通用禁止项)",
      "multiShot": false,
      "prompt": "景别 · 机位 · 运动\t双人剪影\n引用(双@)\t@CH001 + @CH002 + @LOC001(日)\n首帧提示词(静)\t二人静立,大屏红光映脸。\n动态提示词(动)\t字卡叠出「严的不是人,是账」。\n台词与声音(AU01–AU04)\t对白AU01(小跃):「好严啊……」(金老师):「严的不是人,是账。」\n音乐AU04:低垫再起\n光源动机\t红光\n前后连续性\t尾接SC07灯光渐暗\n禁止发生\t—(见场级/全片通用禁止项)",
      "refs": [
        {
          "label": "CH001 金老师",
          "src": "media/img-e0380fbeec3a70be4774.png"
        },
        {
          "label": "CH002 毛小跃",
          "src": "media/img-2e4075a07776b21e3ec6.png"
        },
        {
          "label": "LOC001 金泰前期车间",
          "src": "media/img-c0f50a8c4c1a5325b4ea.png"
        }
      ],
      "video": "https://github.com/aikingtai-ctrl/jintai-film-showcase/releases/download/media-v1/no-rush-prompts-part1--cd97afdfa6c458883e58.mp4",
      "thumb": "",
      "seed": "",
      "instance": "",
      "model": "seedance2.5",
      "params": "画布节点 视频生成 #74 · 6s · seedance2.5 · jimeng_multimodal2video",
      "take": "#74",
      "status": "已生成",
      "alts": []
    },
    {
      "id": "SC07-SH01",
      "title": "建立/留白",
      "tc": "",
      "start": 624,
      "duration": 8,
      "framing": "大全景",
      "camera": "",
      "lighting": "顶光单源",
      "cast": [
        "CH001",
        "CH002",
        "LOC001",
        "PR002"
      ],
      "sceneTag": "@CH001 + @CH002 + @LOC001(暮) + @PR002",
      "action": "车间灯逐组熄灭,只剩线尾一束顶光罩住金箱;师生剪影并肩。 → 最后一组灯熄,静两拍。",
      "picture": "",
      "firstFramePrompt": "",
      "dialogue": [],
      "dialogueText": "无对白",
      "sound": "环境：空调低鸣渐止 / 音乐：留白",
      "notes": "连续性：承SC06;光区=终局舞台；—(见场级/全片通用禁止项)",
      "multiShot": false,
      "prompt": "景别 · 机位 · 运动\t大全景\n引用(双@)\t@CH001 + @CH002 + @LOC001(暮) + @PR002\n首帧提示词(静)\t车间灯逐组熄灭,只剩线尾一束顶光罩住金箱;师生剪影并肩。\n动态提示词(动)\t最后一组灯熄,静两拍。\n台词与声音(AU01–AU04)\t环境AU02:空调低鸣渐止\n音乐AU04:留白\n光源动机\t顶光单源\n前后连续性\t承SC06;光区=终局舞台\n禁止发生\t—(见场级/全片通用禁止项)",
      "refs": [
        {
          "label": "CH002 毛小跃",
          "src": "media/img-2e4075a07776b21e3ec6.png"
        },
        {
          "label": "LOC001 金泰前期车间",
          "src": "media/img-c0f50a8c4c1a5325b4ea.png"
        },
        {
          "label": "PR002 金色就绪包箱",
          "src": "media/img-deb3d6243beea983aaf3.png"
        },
        {
          "label": "CH001 金老师",
          "src": "media/img-e0380fbeec3a70be4774.png"
        }
      ],
      "video": "https://github.com/aikingtai-ctrl/jintai-film-showcase/releases/download/media-v1/no-rush-prompts-part1--fa015ec0a5fa6e7851e8.mp4",
      "thumb": "",
      "seed": "",
      "instance": "",
      "model": "seedance2.5",
      "params": "画布节点 视频生成 #75 · 8s · seedance2.5 · jimeng_multimodal2video",
      "take": "#75",
      "status": "已生成",
      "alts": []
    },
    {
      "id": "SC07-SH02",
      "title": "人物关系",
      "tc": "",
      "start": 632,
      "duration": 10,
      "framing": "双人中景",
      "camera": "",
      "lighting": "顶光",
      "cast": [
        "CH001",
        "CH002",
        "LOC001"
      ],
      "sceneTag": "@CH001 + @CH002 + @LOC001(暮)",
      "action": "顶光下师生对望。 → 一问三答,节奏干脆。",
      "picture": "",
      "firstFramePrompt": "",
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
      "dialogueText": "(金老师):「最后一个问题。这整条线,最终目的是什么?」(小跃):「出片快?」(金老师):「不是。」(小跃):「出片好?」(金老师):「也不是。是这一句——」",
      "sound": "",
      "notes": "—(见场级/全片通用禁止项)",
      "multiShot": false,
      "prompt": "景别 · 机位 · 运动\t双人中景\n引用(双@)\t@CH001 + @CH002 + @LOC001(暮)\n首帧提示词(静)\t顶光下师生对望。\n动态提示词(动)\t一问三答,节奏干脆。\n台词与声音(AU01–AU04)\t对白AU01(金老师):「最后一个问题。这整条线,最终目的是什么?」(小跃):「出片快?」(金老师):「不是。」(小跃):「出片好?」(金老师):「也不是。是这一句——」\n光源动机\t顶光\n前后连续性\t—\n禁止发生\t—(见场级/全片通用禁止项)",
      "refs": [
        {
          "label": "CH001 金老师",
          "src": "media/img-e0380fbeec3a70be4774.png"
        },
        {
          "label": "CH002 毛小跃",
          "src": "media/img-2e4075a07776b21e3ec6.png"
        },
        {
          "label": "LOC001 金泰前期车间",
          "src": "media/img-c0f50a8c4c1a5325b4ea.png"
        }
      ],
      "video": "",
      "thumb": "",
      "seed": "",
      "instance": "",
      "model": "kling 3.0（kie）",
      "params": "画布节点 视频生成 #76 · kling 3.0（kie） · kie_kling30",
      "take": "#76",
      "status": "排队/未出片",
      "alts": []
    },
    {
      "id": "SC07-SH03",
      "title": "物证(主题)",
      "tc": "",
      "start": 642,
      "duration": 8,
      "framing": "摇 + 推墙面",
      "camera": "",
      "lighting": "墙字自发光",
      "cast": [
        "LOC001"
      ],
      "sceneTag": "@LOC001(暮)",
      "action": "墙面暗字区,近乎全黑。 → 暗字缓缓点亮成一行:「任何一个失败镜头,几分钟内能追溯到:它用了哪版剧本、哪张母版、哪条提示词、哪个任务、为什么被批准。」;音乐起。",
      "picture": "",
      "firstFramePrompt": "",
      "dialogue": [],
      "dialogueText": "无对白",
      "sound": "效果：字亮微嗡 / 音乐：主题完整陈述",
      "notes": "连续性：全片题旨落版；全文如上不改字(另见场级/全片通用禁止项)",
      "multiShot": false,
      "prompt": "景别 · 机位 · 运动\t摇 + 推墙面\n引用(双@)\t@LOC001(暮)\n首帧提示词(静)\t墙面暗字区,近乎全黑。\n动态提示词(动)\t暗字缓缓点亮成一行:「任何一个失败镜头,几分钟内能追溯到:它用了哪版剧本、哪张母版、哪条提示词、哪个任务、为什么被批准。」;音乐起。\n台词与声音(AU01–AU04)\t音乐AU04:主题完整陈述\n效果AU03:字亮微嗡\n光源动机\t墙字自发光\n前后连续性\t全片题旨落版\n禁止发生\t全文如上不改字(另见场级/全片通用禁止项)",
      "refs": [
        {
          "label": "LOC001 金泰前期车间",
          "src": "media/img-c0f50a8c4c1a5325b4ea.png"
        }
      ],
      "video": "",
      "thumb": "",
      "seed": "",
      "instance": "",
      "model": "MiniMax H3",
      "params": "画布节点 视频生成 #77 · MiniMax H3 · minimax_h3",
      "take": "#77",
      "status": "排队/未出片",
      "alts": []
    },
    {
      "id": "SC07-SH04",
      "title": "主题",
      "tc": "",
      "start": 650,
      "duration": 11,
      "framing": "双人正反打",
      "camera": "",
      "lighting": "墙字光",
      "cast": [
        "CH001",
        "CH002",
        "LOC001"
      ],
      "sceneTag": "@CH001 + @CH002 + @LOC001(暮)",
      "action": "墙字光映在两人脸上。 → 老师三个“查得到”层层递进。",
      "picture": "",
      "firstFramePrompt": "",
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
      "dialogueText": "(小跃):「就为了……查得到?」(金老师):「查得到,才敢批量;查得到,才敢返工;查得到,失败才是资产,不是垃圾。你那八百一十二条,查得到吗?」",
      "sound": "",
      "notes": "—(见场级/全片通用禁止项)",
      "multiShot": false,
      "prompt": "景别 · 机位 · 运动\t双人正反打\n引用(双@)\t@CH001 + @CH002 + @LOC001(暮)\n首帧提示词(静)\t墙字光映在两人脸上。\n动态提示词(动)\t老师三个“查得到”层层递进。\n台词与声音(AU01–AU04)\t对白AU01(小跃):「就为了……查得到?」(金老师):「查得到,才敢批量;查得到,才敢返工;查得到,失败才是资产,不是垃圾。你那八百一十二条,查得到吗?」\n光源动机\t墙字光\n前后连续性\t—\n禁止发生\t—(见场级/全片通用禁止项)",
      "refs": [],
      "video": "",
      "thumb": "",
      "seed": "",
      "instance": "",
      "model": "",
      "params": "",
      "take": "",
      "status": "未生成",
      "alts": []
    },
    {
      "id": "SC07-SH05",
      "title": "反应",
      "tc": "",
      "start": 661,
      "duration": 7,
      "framing": "近景 · 小跃",
      "camera": "",
      "lighting": "墙字光",
      "cast": [
        "CH002",
        "LOC001"
      ],
      "sceneTag": "@CH002 + @LOC001(暮)",
      "action": "小跃望着墙字。 → 低头,声音低下去。",
      "picture": "",
      "firstFramePrompt": "",
      "dialogue": [
        {
          "who": "小跃",
          "text": "八百一十四。……查不到。"
        }
      ],
      "dialogueText": "(小跃):「八百一十四。……查不到。」",
      "sound": "",
      "notes": "连续性：数字梗第三次(还愿)；—(见场级/全片通用禁止项)",
      "multiShot": false,
      "prompt": "景别 · 机位 · 运动\t近景 · 小跃\n引用(双@)\t@CH002 + @LOC001(暮)\n首帧提示词(静)\t小跃望着墙字。\n动态提示词(动)\t低头,声音低下去。\n台词与声音(AU01–AU04)\t对白AU01(小跃):「八百一十四。……查不到。」\n光源动机\t墙字光\n前后连续性\t数字梗第三次(还愿)\n禁止发生\t—(见场级/全片通用禁止项)",
      "refs": [],
      "video": "",
      "thumb": "",
      "seed": "",
      "instance": "",
      "model": "",
      "params": "",
      "take": "",
      "status": "未生成",
      "alts": []
    },
    {
      "id": "SC07-SH06",
      "title": "主题(笑点:明明白白)",
      "tc": "",
      "start": 668,
      "duration": 9,
      "framing": "近景 · 老师",
      "camera": "",
      "lighting": "墙字光",
      "cast": [
        "CH001",
        "LOC001"
      ],
      "sceneTag": "@CH001 + @LOC001(暮)",
      "action": "老师看着小跃。 → 语气第一次带一点温度。",
      "picture": "",
      "firstFramePrompt": "",
      "dialogue": [
        {
          "who": "金老师",
          "text": "所以它们死了,还死得不明不白。从明天起——让每一条都死得明明白白。"
        }
      ],
      "dialogueText": "(金老师):「所以它们死了,还死得不明不白。从明天起——让每一条都死得明明白白。」",
      "sound": "",
      "notes": "—(见场级/全片通用禁止项)",
      "multiShot": false,
      "prompt": "景别 · 机位 · 运动\t近景 · 老师\n引用(双@)\t@CH001 + @LOC001(暮)\n首帧提示词(静)\t老师看着小跃。\n动态提示词(动)\t语气第一次带一点温度。\n台词与声音(AU01–AU04)\t对白AU01(金老师):「所以它们死了,还死得不明不白。从明天起——让每一条都死得明明白白。」\n光源动机\t墙字光\n前后连续性\t—\n禁止发生\t—(见场级/全片通用禁止项)",
      "refs": [],
      "video": "",
      "thumb": "",
      "seed": "",
      "instance": "",
      "model": "",
      "params": "",
      "take": "",
      "status": "未生成",
      "alts": []
    },
    {
      "id": "SC07-SH07",
      "title": "反应(笑点:废片编号)",
      "tc": "",
      "start": 677,
      "duration": 10,
      "framing": "双人中景",
      "camera": "",
      "lighting": "顶光",
      "cast": [
        "CH001",
        "CH002",
        "LOC001",
        "PR001"
      ],
      "sceneTag": "@CH001 + @CH002 + @LOC001(暮) + @PR001",
      "action": "小跃认真发问。 → 老师戴上老花镜,重新拿起 @PR001。",
      "picture": "",
      "firstFramePrompt": "",
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
      "dialogueText": "(小跃):「老师,那我那八百一十四条,现在怎么办?删了吗?」(金老师):「进99_archive。废片,也要有编号。」",
      "sound": "",
      "notes": "连续性：呼应99_archive滑梯；—(见场级/全片通用禁止项)",
      "multiShot": false,
      "prompt": "景别 · 机位 · 运动\t双人中景\n引用(双@)\t@CH001 + @CH002 + @LOC001(暮) + @PR001\n首帧提示词(静)\t小跃认真发问。\n动态提示词(动)\t老师戴上老花镜,重新拿起 @PR001。\n台词与声音(AU01–AU04)\t对白AU01(小跃):「老师,那我那八百一十四条,现在怎么办?删了吗?」(金老师):「进99_archive。废片,也要有编号。」\n光源动机\t顶光\n前后连续性\t呼应99_archive滑梯\n禁止发生\t—(见场级/全片通用禁止项)",
      "refs": [],
      "video": "",
      "thumb": "",
      "seed": "",
      "instance": "",
      "model": "",
      "params": "",
      "take": "",
      "status": "未生成",
      "alts": []
    },
    {
      "id": "SC07-SH08",
      "title": "主题",
      "tc": "",
      "start": 687,
      "duration": 6,
      "framing": "近景小跃 → 流水线空镜",
      "camera": "",
      "lighting": "暮光",
      "cast": [
        "CH002",
        "LOC001"
      ],
      "sceneTag": "@CH002 + @LOC001(暮)",
      "action": "小跃望向流水线。 → 轻声一句;落幅切流水线纵深空镜。",
      "picture": "",
      "firstFramePrompt": "",
      "dialogue": [
        {
          "who": "小跃,轻",
          "text": "先过门。"
        }
      ],
      "dialogueText": "(小跃,轻):「先过门。」",
      "sound": "音乐：收束",
      "notes": "连续性：口头禅完成翻转,人物弧闭合；—(见场级/全片通用禁止项)",
      "multiShot": false,
      "prompt": "景别 · 机位 · 运动\t近景小跃 → 流水线空镜\n引用(双@)\t@CH002 + @LOC001(暮)\n首帧提示词(静)\t小跃望向流水线。\n动态提示词(动)\t轻声一句;落幅切流水线纵深空镜。\n台词与声音(AU01–AU04)\t对白AU01(小跃,轻):「先过门。」\n音乐AU04:收束\n光源动机\t暮光\n前后连续性\t口头禅完成翻转,人物弧闭合\n禁止发生\t—(见场级/全片通用禁止项)",
      "refs": [],
      "video": "",
      "thumb": "",
      "seed": "",
      "instance": "",
      "model": "",
      "params": "",
      "take": "",
      "status": "未生成",
      "alts": []
    },
    {
      "id": "SC07-SH09",
      "title": "留白",
      "tc": "",
      "start": 693,
      "duration": 5,
      "framing": "字卡",
      "camera": "",
      "lighting": "纯字卡",
      "cast": [],
      "sceneTag": "字卡镜 · 无资产引用(版式:片头字卡模板)",
      "action": "黑底字卡「机器做多,人做对。」 → 字亮,保持,渐隐。",
      "picture": "",
      "firstFramePrompt": "",
      "dialogue": [],
      "dialogueText": "无对白",
      "sound": "效果：章印“咚”落版 / 音乐：终止式",
      "notes": "连续性：与片头字卡同款版式；—(见场级/全片通用禁止项)",
      "multiShot": false,
      "prompt": "景别 · 机位 · 运动\t字卡\n引用(双@)\t字卡镜 · 无资产引用(版式:片头字卡模板)\n首帧提示词(静)\t黑底字卡「机器做多,人做对。」\n动态提示词(动)\t字亮,保持,渐隐。\n台词与声音(AU01–AU04)\t音乐AU04:终止式\n效果AU03:章印“咚”落版\n光源动机\t纯字卡\n前后连续性\t与片头字卡同款版式\n禁止发生\t—(见场级/全片通用禁止项)",
      "refs": [],
      "video": "",
      "thumb": "",
      "seed": "",
      "instance": "",
      "model": "",
      "params": "",
      "take": "",
      "status": "未生成",
      "alts": []
    },
    {
      "id": "SC07-SH10",
      "title": "物证(彩蛋 · 笑点:等待批准)",
      "tc": "",
      "start": 698,
      "duration": 12,
      "framing": "全景 → 胸屏特写",
      "camera": "",
      "lighting": "小助自体光",
      "cast": [
        "CH003",
        "LOC001"
      ],
      "sceneTag": "@CH003 + @LOC001(夜)",
      "action": "片尾字幕后。深夜空车间,只有 @CH003 亮着,面前一摞废片档案。 → 逐条打标签:WASTE-001、WASTE-002……快进到WASTE-814,顿一秒,胸屏弹出「等待批准。」;黑场。",
      "picture": "",
      "firstFramePrompt": "",
      "dialogue": [],
      "dialogueText": "无对白",
      "sound": "环境：夜 / 效果：打标机械声连击+终了一声“叮”",
      "notes": "连续性：呼应六道门制,全片最后一笑；编号格式WASTE-XXX(另见场级/全片通用禁止项)\n覆盖自检\n镜头总数:84 镜;时长合计:710 秒(约 11 分 50 秒)。时间线逐镜相接,无空洞、无重叠。\n每镜至少一种叙事功能:84/84(功能标注见各页页眉行)。\n含人物镜头「人物+场景」双引用覆盖率:100%;纯字卡镜 2 个(SC01-SH07 / SC07-SH09)已按规注明「字卡镜·无资产引用」。\n台词全部有画面归属;声音四轨(AU01–AU04)逐镜列出,编号挂完整镜头号。\n下一步(P7 关键帧):Hero 镜头候选=SC02-SH01(车间全亮)/ SC05-SH15(「零」+G6 开门)/ SC07-SH03(墙字点亮);空镜清单=流水线纵深、99_archive 滑梯、母版展柜、金箱特写。经 G5 批准后进入 07_keyframes/approved/。",
      "multiShot": false,
      "prompt": "景别 · 机位 · 运动\t全景 → 胸屏特写\n引用(双@)\t@CH003 + @LOC001(夜)\n首帧提示词(静)\t片尾字幕后。深夜空车间,只有 @CH003 亮着,面前一摞废片档案。\n动态提示词(动)\t逐条打标签:WASTE-001、WASTE-002……快进到WASTE-814,顿一秒,胸屏弹出「等待批准。」;黑场。\n台词与声音(AU01–AU04)\t效果AU03:打标机械声连击+终了一声“叮”\n环境AU02:夜\n光源动机\t小助自体光\n前后连续性\t呼应六道门制,全片最后一笑\n禁止发生\t编号格式WASTE-XXX(另见场级/全片通用禁止项)\n覆盖自检\n镜头总数:84 镜;时长合计:710 秒(约 11 分 50 秒)。时间线逐镜相接,无空洞、无重叠。\n每镜至少一种叙事功能:84/84(功能标注见各页页眉行)。\n含人物镜头「人物+场景」双引用覆盖率:100%;纯字卡镜 2 个(SC01-SH07 / SC07-SH09)已按规注明「字卡镜·无资产引用」。\n台词全部有画面归属;声音四轨(AU01–AU04)逐镜列出,编号挂完整镜头号。\n下一步(P7 关键帧):Hero 镜头候选=SC02-SH01(车间全亮)/ SC05-SH15(「零」+G6 开门)/ SC07-SH03(墙字点亮);空镜清单=流水线纵深、99_archive 滑梯、母版展柜、金箱特写。经 G5 批准后进入 07_keyframes/approved/。",
      "refs": [],
      "video": "",
      "thumb": "",
      "seed": "",
      "instance": "",
      "model": "",
      "params": "",
      "take": "",
      "status": "未生成",
      "alts": []
    }
  ],
  "generation": {
    "model": "Seedance 2.5 · 即梦 multimodal2video（AI Video Canvas 画布节点投放）",
    "params": [
      {
        "k": "分辨率",
        "v": "1280 × 720 · 16:9"
      },
      {
        "k": "单条时长",
        "v": "按分镜时长 3–19 s 逐镜设置（duration 参数）"
      },
      {
        "k": "提示词",
        "v": "分镜页八字段原样贴入（景别机位运动 / 引用 / 首帧(静) / 动态(动) / 台词与声音 / 光源 / 连续性 / 禁止），4 镜为改写润色版"
      },
      {
        "k": "参考图绑定",
        "v": "画布把连线的角色节点按序写成「[角色1：…][角色2：…][角色3：…]」+「第 N 张参考图 = 角色 …」附在提示词末尾"
      },
      {
        "k": "参考节点",
        "v": "12 个：CH001 金老师（含参考音频）/ CH002 毛小跃 / CH003 小助 / LOC001 车间（66 镜引用）/ LOC002 陈列室（10 镜）/ 7 个道具"
      },
      {
        "k": "对比投放",
        "v": "SC05-SH06、SC06-SH07 用 Veo 3.1 quality；SC05-SH09 用 Kling v3 turbo i2v；SC07-SH02 Kling 3.0、SC07-SH03 MiniMax H3 已建节点未出片"
      },
      {
        "k": "进度",
        "v": "84 镜中 73 镜已出画面，1 镜（SC01-SH01）有两条备选，10 镜待生成"
      }
    ],
    "notes": [
      "画布提示词与分镜 docx 逐字一致的镜头占 73 / 77，说明「一镜一页 → 画布节点」这条链路可以原样搬运，不需要二次改写。",
      "同一场景参考图（LOC001 车间）被 66 个节点引用，是全片空间一致性的锚；场景图当「角色节点」挂进画布是这套画布的惯用法。",
      "金老师节点挂了参考音频，其余角色没有；下集配音阶段可统一到角色库锁音色。",
      "少数镜头只有标题没有 duration（画布默认时长），装配时以分镜秒数为准复核。"
    ]
  },
  "deliverables": [
    {
      "name": "AI Video Canvas · 画布 228",
      "note": "77 个视频节点 + 12 个参考节点 + 191 条连线（需登录，内网）",
      "src": ""
    },
    {
      "name": "金泰工作流_讲解片_一镜一页_分镜提示词_修复版.docx",
      "note": "EP01 全片 7 场 84 镜 710 秒，分镜文本来源"
    },
    {
      "name": "金泰工作流_师生对话讲解片_剧本设定稿.html",
      "note": "影片定位 / 角色卡 / 场景 / 剧情结构 / 完整台词本"
    },
    {
      "name": "金泰工作流_讲解片_角色设定提示词.md",
      "note": "P5 角色母版出图提示词（底座 + 每角色 5 条）"
    }
  ]
});
