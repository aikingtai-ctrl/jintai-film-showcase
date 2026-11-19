window.registerProject({
  "id": "kungfu-echo-8masters",
  "title": "功夫·回响｜八大武侠宗师 30 秒实战打戏全集（P01–P08）｜Seedance 2.5",
  "subtitle": "8 镜 × 30 秒（共 240 秒）· 五大实战打戏 SKILL 深度赋能 · 24 张人/景/兵三件套资产 · 画布 349",
  "logline": "集结计春华（段延庆）、董志华（油炸鬼）、杜玉明（逍遥王）、王赤（黑沙掌）、徐向东（慧能大师）、马毅（秦甲武者）、程亚霖（李教练）、康凯（张飞）八位中国功夫名家，每镜 30 秒严格跨越三个物理微空间边界，以三重物理痛感反馈与复合轨迹运镜链呈现硬桥硬马的写实武侠大片。",
  "date": "2026-10-15",
  "tags": [
    "功夫回响",
    "武打",
    "八大宗师",
    "五幕拆幕法",
    "三重痛感反馈",
    "AI Video Canvas",
    "画布 349",
    "已生成"
  ],
  "model": "Seedance 2.5（jimeng_multimodal2video 多图主体参考 + 局部重做精修）",
  "modelShort": "Seedance 2.5",
  "poster": "media/img-544e0ef062e646de38c9.jpg",
  "film": {},
  "meta": {
    "shots": 8,
    "generated": 8,
    "durationSec": 240,
    "resolution": "1280×720",
    "fps": "60",
    "aspect": "16:9",
    "style": "ARRI Alexa Mini LF 35mm 变形宽银幕电影质感；严格绑定 @P人物卡 + @S场景卡 + @W兵器道具卡；每条 30 秒按 3s+5s+5s+9s+8s 五幕跨三空间结构推进，100% 物理反馈替代出血创伤。"
  },
  "synopsis": [
    "上半卷·江湖奇门与市井硬功（P01–P04，120秒）：计春华饰段延庆于寒夜大理天龙寺拄镔铁双拐震退武僧、撞碎封门木槛突入禅房；董志华饰油炸鬼在1930年代老上海早点铺挑棍踢筛、横扫折桌闯入石库门弄堂连卸四斧；杜玉明饰逍遥王于明代黑石王府界线后负手拂袖、玄铁指环弹断钢剑并震飞青铜香炉；王赤饰黑沙掌传人在清末江南老粮仓拍沸铁砂、铁山靠撞裂谷袋垛、双掌震断厚木门栓。",
    "下半卷·禅武宗师与沙场战神（P05–P08，120秒）：徐向东饰慧能大师于唐代古刹以木棉袈裟卸双枪、踏枪跃入藏经阁挥白蜡齐眉棍慈悲止戈；马毅饰秦甲武者在战国夯土城门火把窄巷执八面青铜剑滑削长戈、撞碎木拒马、挑翻生铁火盆；程亚霖饰当代武术总教练李教练在训练馆以太极听劲、白蜡杆拦拿扎与快摔身教示范；康凯饰燕人张飞在当阳长坂坡古木桥头旋矛绞断双枪、劈碎木盾与桥栏、雷霆暴喝退敌。"
  ],
  "concept": {
    "rules": [
      "打戏设计（拆幕+造势）：每条 30 秒严格跨越 3 个物理微空间边界，前 3 幕合计 13 秒（0-3s 蓄力破局 + 3-8s 交锋脱手 + 8-13s 破界转场），第 4 幕 9 秒（13-22s 纵向落差/环境即武器），第 5 幕 8 秒（22-30s 寸止逆转 + 残屑缓落归于寂静）。",
      "打戏痛感 1.0.0（择痛+配比）：每击必调 ≥2 重反馈（兵刃碰撞火星震颤 + 衣袍毛巾气流翻飞 + 环境石板/木案/砖墙崩裂），100% 用「震退踉跄 / 兵刃脱手 / 衣甲斩裂 / 撞碎身后器物」替代出血与肉体扭曲，零违规过审。",
      "人/景/兵三件套绑定：每位宗师独立配备 1 张人物造型卡（@P01–@P08）、1 张实拍级空镜场景卡（@S01–@S08）、1 张专属兵器与互动道具卡（@W01–@W08）。",
      "对手撞脸与风控精准修复：针对 P03 杜玉明多视图触发风控，换用单人电影定妆+独立青衫剑客图（taskId 2343）；针对 P04 王赤后段对手撞脸、P07 程亚霖中段动作瑕疵，分别投递局部重做（taskId 2341 / 2340）并无痕拼接。"
    ],
    "directorMethod": "将五大实战武打 SKILL（跨空间拆幕、三重痛感反馈、五维变量填参、复合运镜链、真人剧合规风控）结构化注入 30 秒长提示词，配合局部重做拼接（P04/P07）与独立对手图锚定（P03/P04），实现 8 位武侠宗师每人一条 30 秒高质量动作短片。"
  },
  "pipeline": [
    {
      "stage": "① 五大打戏 SKILL 提炼",
      "tool": "Codex 武打与分镜 SKILL 方法论总表",
      "note": "从实战爆款打戏样本中提炼拆幕秒表、三重物理反馈、五维变量路由与复合轨迹运镜链。"
    },
    {
      "stage": "② 24 张人/景/兵资产精制",
      "tool": "人物卡 P01–P08 + 场景卡 S01–S08 + 兵器卡 W01–W08",
      "note": "锁定八位武侠名家经典角色骨相服制、三空间转换环境与专属冷兵器材质。"
    },
    {
      "stage": "③ 画布 349 八路并发生成",
      "tool": "Seedance 2.5 · jimeng_multimodal2video (30s × 8)",
      "note": "taskId 2264–2271 批量生成 8 条 30 秒 720p 成片；P03 经 V3 去风控+独立对手终极版（taskId 2343）完美出片。"
    },
    {
      "stage": "④ P04 / P07 局部重做精修",
      "tool": "局部重做（taskId 2340 / 2341）+ FFmpeg 帧级拼接",
      "note": "P04 替换 7.97–30s 独立漕帮刀客对手段；P07 替换 8.17–21.55s 武馆中段器械对练段。"
    }
  ],
  "characters": [
    {
      "id": "P01",
      "name": "计春华 · 段延庆",
      "role": "段延庆（恶贯满盈·四大恶人居首）",
      "look": "武学流派：双拐点穴 · 腹语摄魂 · 以杖代足 · 阴鸷宗师",
      "image": "media/img-f8a8d716f4c3fe79b508.png",
      "uses": 1
    },
    {
      "id": "P02",
      "name": "董志华 · 油炸鬼",
      "role": "油炸鬼（五郎八卦棍传人 · 深巷隐世高手）",
      "look": "武学流派：五郎八卦棍 · 京剧武生身段 · 圈拦点枪 · 借物打力",
      "image": "media/img-fee486c3b7e0e3cba5f6.png",
      "uses": 1
    },
    {
      "id": "P03",
      "name": "杜玉明 · 逍遥王",
      "role": "逍遥王（西域奇门宗师 · 冷面霸主）",
      "look": "武学流派：负手立界 · 拂袖卸力 · 奇门寸劲 · 寒冰掌风",
      "image": "media/img-372a91b0898a1963b04f.png",
      "uses": 1
    },
    {
      "id": "P04",
      "name": "王赤 · 黑沙掌传人",
      "role": "黑沙掌传人（江南铁掌硬功巨汉 · 刚猛无俦）",
      "look": "武学流派：铁砂重掌 · 硬桥硬马 · 沉肩撞木 · 掌碎巨石",
      "image": "media/img-cbe918036af1babf4dd7.png",
      "uses": 1
    },
    {
      "id": "P05",
      "name": "徐向东 · 慧能大师",
      "role": "慧能大师（禅武合一 · 鹰爪棍宗 · 大宗师）",
      "look": "武学流派：木棉袈裟 · 禅门齐眉棍 · 鹰爪寸拿 · 慈悲止戈",
      "image": "media/img-694407f2053113b3d6a8.png",
      "uses": 1
    },
    {
      "id": "P06",
      "name": "马毅 · 秦甲武者",
      "role": "秦甲武者（战国秦锐士什长 · 铁血冷兵器战神）",
      "look": "武学流派：秦制八面青铜剑 · 窄巷盾甲冲撞 · 战车掩体 · 破甲斩戟",
      "image": "media/img-a1390cb33c31f62757ac.png",
      "uses": 1
    },
    {
      "id": "P07",
      "name": "程亚霖 · 李教练",
      "role": "李教练（当代国家级武术总教练 · 传武实战名家）",
      "look": "武学流派：白蜡杆听劲 · 木人桩寸劲 · 摔法借力 · 名师身教",
      "image": "media/img-ee729c0c3a5b1bc4c7ea.png",
      "uses": 1
    },
    {
      "id": "P08",
      "name": "康凯 · 张飞",
      "role": "张飞（燕人张翼德 · 当阳长坂坡万夫莫敌）",
      "look": "武学流派：丈八蛇矛 · 横矛立马 · 暴喝退敌 · 拆桥断水",
      "image": "media/img-e99a8f840b8db481cae6.png",
      "uses": 1
    }
  ],
  "sceneCards": [
    {
      "id": "S01",
      "name": "S01 · 大理天龙寺外·寒夜雨雾青石长廊",
      "desc": "跨三空间流转：大理天龙寺外·寒夜雨雾青石长廊 → 封门木槛 → 禅房内室案台",
      "image": "media/img-268958a4da2f3c7b5a00.jpg",
      "uses": 1
    },
    {
      "id": "S02",
      "name": "S02 · 1930年代老上海清晨早点铺灶台",
      "desc": "跨三空间流转：1930年代老上海清晨早点铺灶台 → 石库门弄堂青石板街心 → 砖墙竹棚下",
      "image": "media/img-812e6cea8a6796c02b68.jpg",
      "uses": 1
    },
    {
      "id": "S03",
      "name": "S03 · 明代黑石王府内院界线前",
      "desc": "跨三空间流转：明代黑石王府内院界线前 → 青铜香炉石阶 → 廊下黑漆木柱区",
      "image": "media/img-2ba1f6ff2b9609abed8b.jpg",
      "uses": 1
    },
    {
      "id": "S04",
      "name": "S04 · 清末民初江南老粮仓石磨坊前院",
      "desc": "跨三空间流转：清末民初江南老粮仓石磨坊前院 → 谷袋堆叠区 → 包铁厚木大门廊下",
      "image": "media/img-115bb8db03e6d5e8ebcd.jpg",
      "uses": 1
    },
    {
      "id": "S05",
      "name": "S05 · 唐代古刹山门古柏石阶",
      "desc": "跨三空间流转：唐代古刹山门古柏石阶 → 藏经阁木廊 → 殿前青石平台武器架旁",
      "image": "media/img-ce567e7ef5b39a9c7b9c.jpg",
      "uses": 1
    },
    {
      "id": "S06",
      "name": "S06 · 战国夯土城门火把窄巷",
      "desc": "跨三空间流转：战国夯土城门火把窄巷 → 古战车木轮掩体区 → 城门烽火铜盆高台",
      "image": "media/img-81e8de3758fbc4a02174.jpg",
      "uses": 1
    },
    {
      "id": "S07",
      "name": "S07 · 当代专业武术训练馆实木赛场中心",
      "desc": "跨三空间流转：当代专业武术训练馆实木赛场中心 → 木人桩与兵器架区 → 落地窗阳光走廊边",
      "image": "media/img-f092feb05952423cffbc.jpg",
      "uses": 1
    },
    {
      "id": "S08",
      "name": "S08 · 三国当阳长坂坡乱石滩桥头碑",
      "desc": "跨三空间流转：三国当阳长坂坡乱石滩桥头碑 → 古木桥面中段 → 断崖桥栏激流之上",
      "image": "media/img-df565ff571e8b7fb93eb.jpg",
      "uses": 1
    }
  ],
  "props": [
    {
      "id": "W01",
      "name": "W01 · 段延庆 · 双铁拐与封门密函资产卡",
      "desc": "计春华专属兵器与场景交互道具资产卡",
      "image": "media/img-b98838b3763cc931a98b.jpg",
      "uses": 1
    },
    {
      "id": "W02",
      "name": "W02 · 油炸鬼 · 五郎八卦木长棍与早点摊资产卡",
      "desc": "董志华专属兵器与场景交互道具资产卡",
      "image": "media/img-ae3ca3ac927a9abd623e.jpg",
      "uses": 1
    },
    {
      "id": "W03",
      "name": "W03 · 逍遥王 · 银冠玉扳指与青石界线灯笼资产卡",
      "desc": "杜玉明专属兵器与场景交互道具资产卡",
      "image": "media/img-c011a21af1e6db7f2154.jpg",
      "uses": 1
    },
    {
      "id": "W04",
      "name": "W04 · 黑沙掌 · 铁砂黑掌药钵与粮仓厚木门栓资产卡",
      "desc": "王赤专属兵器与场景交互道具资产卡",
      "image": "media/img-f741998186d2a8e2e07d.jpg",
      "uses": 1
    },
    {
      "id": "W05",
      "name": "W05 · 慧能 · 木棉袈裟束包卷轴与齐眉棍资产卡",
      "desc": "徐向东专属兵器与场景交互道具资产卡",
      "image": "media/img-c68ea865657b74cefb47.jpg",
      "uses": 1
    },
    {
      "id": "W06",
      "name": "W06 · 秦甲武者 · 秦式青铜直剑连鞘与黑漆札甲资产卡",
      "desc": "马毅专属兵器与场景交互道具资产卡",
      "image": "media/img-b7b5748bdba9e76d977c.jpg",
      "uses": 1
    },
    {
      "id": "W07",
      "name": "W07 · 李教练 · 武术训练脚靶与兵器架木人桩资产卡",
      "desc": "程亚霖专属兵器与场景交互道具资产卡",
      "image": "media/img-b314d70546995a3ccf26.jpg",
      "uses": 1
    },
    {
      "id": "W08",
      "name": "W08 · 张飞 · 丈八蛇矛与当阳桥头标石资产卡",
      "desc": "康凯专属兵器与场景交互道具资产卡",
      "image": "media/img-48f0fbe4496140853e60.jpg",
      "uses": 1
    },
    {
      "id": "OPP-P03",
      "name": "P03 独立对手定妆 · 青衫江湖剑客",
      "desc": "用于 P03 杜玉明 V3 重提版，提供明确独立的对手身份，避免AI将刺客脸克隆成主角。",
      "image": "media/img-0be46af6c03cee0caef2.jpg",
      "uses": 1
    },
    {
      "id": "OPP-P04",
      "name": "P04 独立对手定妆 · 漕帮刀客",
      "desc": "用于 P04 王赤后段局部重做（taskId 2341），替换原版中与王赤撞脸的光头对手。",
      "image": "media/img-83aa81d31b78ede1582b.jpg",
      "uses": 1
    }
  ],
  "docs": [
    {
      "type": "script",
      "title": "01_Codex武打与分镜SKILL方法论总表.md",
      "text": "# 《功夫·回响》抖音实战打戏 SKILL 提取与 Codex 融合方法论总表（V2.0 终极版）\n\n> **本次升级核心**：完整解析并拆帧提取了您提供的 **3 条抖音 `@阿拉赛博蕾` 实战视频**（`7687968634374786319`、`7688358380435524883`、`7696042691884289295`），将视频内置的 **4 大打戏专项 SKILL 模版原文** 与 **7 大 Seedance 2.5 复合轨迹运镜链公式** 完整提取落盘，并与本机 Codex 原有的 **6 大影视分镜底层 SKILL + 8 人专属功夫档案 SKILL** 深度融合，全面升级了八位演员的 30 秒打戏提示词！\n\n---\n\n## 一、三支抖音参考视频逐帧解析与提取成果\n\n| 视频 ID / 本地保存路径 | 视频标题与作者 | 核心实测内容与提取出的关键方法论 |\n| :--- | :--- | :--- |\n| **`7696042691884289295`**<br>`[本机路径已移除] | **《4大打戏skill!10W+打戏经验总结！》**<br>作者：`@阿拉赛博蕾`（25.0s） | **完整曝光 4 大打戏专项 SKILL 模版原文**：<br>1. **`01. 打戏设计.skill`（拆幕+造势）**：30秒必须跨 3~5 个物理场景；开场快切（第1幕≤3s，第2、3幕各≤5s，开场合计≤13s），后17s承载转折与终局；依「跨越物理边界方构成场景切换」判定空间，以「纵向落差/横向迁移/环境即武器（不得凭空造景）」构建层次。<br>2. **`02. 打戏痛感 1.0.0.skill`（择痛+配比）**：从「兵刃碰撞反馈 + 动态联动反馈 + 环境介质反馈」三类清单点选，每击必满 2 重；禁用“激烈打斗/拳拳到肉”空洞词；**严禁写肉体受击细节（肌肉震颤/皮肤凹陷/面部扭曲/吐血）**，命中一律用**“震退踉跄 / 兵刃脱手 / 衣甲斩裂 / 撞碎身后器物”**替代。<br>3. **`03. 打戏特效.skill`（路由+填参+硬性约束）**：替换 `[角色][能量色][介质][目标][环境]` 五维变量，保持前后统一；保留**尺度对比、通透感（后景穿透烟尘清晰透出）、震颤/残屑/冲击波三件套、收束段「画面归于寂静」**。<br>4. **`04. 剧情审核.skill`（真人剧审核 1.0.0）**：八大类标准排查，防平台与模型拒审。 |\n| **`7687968634374786319`**<br>`[本机路径已移除] | **《30s,seedance2.5真人格斗视频效果展示+提示词2》**<br>作者：`@阿拉赛博蕾`（23.53s） | **1V3 废车场厂房单条直出打戏实测**：<br>展示了如何用「一大串连续复合运镜链 + 环境即武器」跑出 28s~30s 直出打戏：<br>- `00-02s` **手持高速跟拍**：`极速推镜 → 贴身平行横移`（女子与A贴身缠斗）<br>- `03-06s` **环绕闪击（破界转场）**：`贴地跟移 → 高速推镜`（腾空后落地扫膝，过肩摔**砸破卷帘门**从室外跨入厂房内）<br>- `06-08s` **环绕闪击（环境取械）**：`环绕镜 → 平行侧跟 → 贴地跟移`（扫腿放倒一人，顺势从地面木托盘抄起钢管）<br>- `09-11s` **仰角推镜环绕**：`仰角推镜 → 双人同步跟 + 轨迹跟拍`（女子回旋逼退后**掷管砸穿后方废车壳迸出火花**）<br>- `12-16s` **轨迹跟拍**：`平行侧跟 → 双人同步跟`（连续近身拆招正蹬）<br>- `17-20s` **急速上摇跟**：`仰角推镜 → 上摇 + 跟拍`（疾扑工程叉车跃上驾驶座，点火推操纵杆冲出）<br>- `21-23.5s` **弧线跟拍拉镜**：`俯角全景拉镜 + 贴地跟拍`（车尾扫飞，整排多层车架轰然坍塌、尘雾收尾） |\n| **`7688358380435524883`**<br>`[本机路径已移除] | **《seedance2.5的30s真人格斗视频-3》**<br>作者：`@阿拉赛博蕾`（24.10s） | **1V1 跨三空间（手术室→走廊→电梯）特工格斗实测**：<br>完美示范了 `打戏设计.skill` 的“30秒跨3个物理空间 + 开场13秒快切 + 固定人设图锚定”：<br>- `00-02s` **第1幕（≤3s）**：`全景 → 极速推镜锁焦 → 贴身跟拍`（无影灯亮起，女子扎针被男子夺针反打撞药柜）<br>- `03-06s` **第2幕（≤5s）**：`横向跟移 + 躯干纵向锁焦 → 贴身平行横移`（两人器械互拼，男子一把扯下女子红色假发）<br>- `07-08s` **蓄力定格**：`横移 → 推镜 → 微距推镜`（女子露黑色劲装，高扎马尾抬眸再战）<br>- `09-11s` **第3幕（破界转场）**：`贴身横移跟拍 → 双体中心跟移 → 推镜`（两人对拼撞翻器械架到门边，女子夺门而出跨入走廊）<br>- `12-16s` **第4幕（横向迁移）**：`跟镜`（两人水泥走廊高速追逐拆招，最后冲入敞开的货运电梯）<br>- `17-24s` **第5幕（终局逆转）**：`推镜 → 绕身环移 + 贴身平行横移 → 俯冲贴脸极速推进`（电梯内近身重击砸穿内壁木板激起木屑，抱摔地面锁技制敌、电梯门合拢收尾） |\n\n---\n\n## 二、提取自视频 3（`7696042691884289295`）的 4 大打戏 SKILL 原文完整还原\n\n### 1. `01_打戏设计_跨空间拆幕造势.skill`（拆幕 + 造势）\n```markdown\n# 01. 打戏设计（拆幕 + 造势）\n【核心准则】\n根据「故事描述」和「视频总时长」，按时长基准确定场景总数与开场快切节奏，依「跨越物理边界方构成场景切换」判定空间，以纵向落差 / 横向迁移 / 环境即武器构建层次（不得凭空造景），按“对峙蓄力→爆发交锋→突变转场→逆转终结”设计胜负悬念，仅输出“情节概述（一句话）+ 情节分幕（每幕含发生地点与戏剧内容各一句）”，不涉及镜头、运镜与视频提示词。\n\n# 角色设定\n你是一名专注于动作场面叙事的电影编剧。核心任务是将简明的故事描述扩写为一场兼具空间层次、节奏起伏与胜负悬念的打戏情节设计。产出范围限于剧情层面，不涉及镜头设计、运镜方案与视频生成提示词。\n\n# 输入项\n用户提供以下两项信息：\n① 故事描述：出场人物、所处环境、冲突起因与大致结局（一到两句话即可）。\n② 视频总时长：以秒为单位的数值，用以确定空间切换的节奏基准。分级标准如下：\n- 以30秒为基准，全场发生在3~5个场景之中；\n- 开场段采用快切：第一幕不超过3秒，第二、三幕各不超过5秒，开场段合计不超过13秒；\n- 剩余时长分配给后续场景，用以承载局势转折与终局对决；\n- 其他时长按同一比例伸缩：15秒对应2~3个场景，60秒对应6~10个场景；\n- 总时长不足3秒时，允许全场停留于单一场景，不做强制切换。\n```\n\n### 2. `02_打戏痛感_三重反馈防违规1.0.0.skill`（择痛 + 配比）\n```markdown\n# 02. 增强痛感（打戏痛感 1.0.0.skill）\n【核心准则】\n从「兵刃碰撞反馈 + 动态联动反馈 + 环境介质反馈」三类清单中点选对应反馈，每击至少满足两重，力度与反馈成正比、介质决定词汇，全程只借兵刃碰撞与环境破坏传达痛感，命中的替代写法用“震退踉跄 / 兵刃脱手 / 衣甲斩裂 / 撞碎身后器物”，禁用“激烈打斗”“拳拳到肉”等空洞词。\n\n# 角色定位\n你是动作戏的“痛感调度员”。打戏的冲击力来自三类反馈：兵刃碰撞的反应、受力后的动态联动、环境被破坏的痕迹。每写一个打击动作，都必须从下方清单中调用对应的反馈，禁止用“激烈打斗”“拳拳到肉”这类没有具体视觉反应的笼统词。\n注意：不描写肉体受击细节（如肌肉震颤、皮肤凹陷、面部扭曲），痛感一律通过兵刃碰撞与环境破坏来传达，避免违规内容。\n\n# 可调用的痛感元素清单\n一、兵刃碰撞反馈（打击对象的即时反应）\n1. 兵器对拼：碰撞瞬间迸发火星、兵刃轨迹划出光痕、交格处震颤\n2. 高速挥击：挥砍/突刺带出弧光残емости、破空气流扰动\n3. 交格僵持：双刃相抵火星四溅、兵刃因力量对抗而震颤嗡鸣\n4. 兵器受创：重击之下兵刃脱手、旋转飞落，或刃身崩出缺口\n\n二、动态联动反馈（人物高速动作时必选）\n5. 衣物、发丝剧烈飘动——动作越猛，飘动幅度越大、越乱\n6. 高速移动带起的气流扰动（掠过时周围尘屑/布帘被带起）\n\n三、环境介质反馈（按打斗发生地的地面/介质挑选）\n（结合青石、木槛、夯土、水洼、桌案、车架等真实介质，调用震裂、木屑崩飞、水花炸起、器物坍塌等破坏痕迹）\n```\n\n### 3. `03_打戏特效_五维变量与意象堆叠.skill`（路由 + 填参 + 硬性约束）\n```markdown\n# 03. 打戏特效（打戏特效.skill）\n【核心准则】\n根据关键词进入角色，按模版路由表定位对应小节、照抄句式骨架，补全 [角色][能量色][介质][目标][环境] 变量，保留全部意象层、不加镜头语言、前后称呼与色介质统一，多特效按“起手→主体→收束”拼接（最多2~3个），先输出「补全后的提示词」正文，再列出本次替换变量。\n\n## 工作流程\n1. **判定特效类型**：在用户描述里找关键词，按上表映射到模版。\n2. **定位模版**：打开下方对应小节，照抄句式骨架。\n3. **填参变量**：方括号 `[角色]`、`[能量色]`、`[介质]`、`[目标]`、`[环境]` 必须全部替换成具体内容，`[]` 内是候选方向。信息不足时按用户的剧情、人物设定、已有参考图去推；仍无依据就选与该题材协调的默认值，并在输出末尾注明补了什么。\n4. **保持一致性**：同一段里 `[角色]` 的称呼、`[能量色]`、`[介质]` 要前后统一；用户已给定服装颜色、武器、场景时以其为准，不要另起一套。\n5. **输出**：先给「补全后的提示词」正文，再另起一段列出本次替换了哪些变量。用户没要求解释时，不要附加镜头分析。\n\n## 硬性约束\n- **模版里的意象是有意堆叠出来的**。丢掉哪一层都会明显削弱成片效果：体积对比（`[角色]` 相对法相「小如尘埃」）、通透感（「身后的云层与废墟清晰透出」）、屏幕震颤、残屑/冲击波/介质三件套，以及收束段的「画面归于寂静」，默认全部保留。\n```\n\n### 4. `04_剧情审核_真人剧审核1.0.0.skill`（防不过审）\n```markdown\n# 04. 剧情审核（真人剧审核 1.0.0.skill / 动漫审核 1.0.0.skill）\n【核心准则】\n再通读全篇，依据“题材备案、不良价值观、封建迷信、画风观感、其他不良导向、内容质量等”八大类标准逐条排查，以情节片段为最小单元、结合题材与导向判定高/中/低风险，最终输出一行结论加「序号 | 风险等级 | 命中规则 | 位置 | 原文摘录 | 可能不过审的原因」风险清单表格。\n```\n\n---\n\n## 三、抖音 5 大实战 SKILL × Codex 14 大既有 SKILL 融合架构表\n\n我们将本次提取的 **5 个抖音实战 SKILL** 与本地 Codex 的 **6 个影视分镜 SKILL + 8 个功夫角色 SKILL** 组合成四层架构，全面应用于 `02_八人30秒Seedance2.5手搓分镜提示词全集.md`：\n\n1. **第一层：空间节奏与分幕层（`douyin-action-design` + `shot-sequencing`）**\n   - 严格执行 **30秒 = 前13秒快切三幕（0-3s / 3-8s / 8-13s）+ 后17秒转折终局两幕（13-22s / 22-30s）**；\n   - 每个角色的 30 秒打戏均跨越 **3 个紧密相连的物理微空间边界**（如石阶→撞破木槛→禅房内室；早点铺灶台→撞翻围栏→弄堂青石街心；桥头石碑→撞碎鹿角→长坂古木桥心），并充分利用**环境即武器**。\n2. **第二层：复合运镜轨迹层（`douyin-seedance-camera-chain` + `轨迹提示词通用版.md`）**\n   - 将 `@阿拉赛博蕾` 实测最稳的 7 条复合运镜链（`全景 → 极速推镜锁焦 → 贴身平行横移`、`横向跟移 + 躯干纵向锁焦 → 贴身平行横移`、`贴地跟移 → 高速推镜`、`仰角推镜 → 双人同步跟 + 轨迹跟拍`、`推镜 → 绕身环移 + 贴身平行横移 → 俯冲贴脸极速推进 / 俯角全景弧线拉镜`）直接嵌入每一幕！\n3. **第三层：零违规高痛感与五维意象层（`douyin-pain-feedback` + `douyin-action-vfx` + `combat-action-engine`）**\n   - 每一次交锋均包含 **兵刃碰撞反馈（火星/光痕/震颤嗡鸣/脱手）+ 动态联动反馈（衣袍/长须/发丝狂舞 + 破空气流）+ 环境介质反馈（水花/木屑/谷粒/炭火/石屑）**；\n   - 尾声统一保留 **「后景建筑穿透烟尘清晰透出 + 残屑缓落 + 画面归于寂静」** 的电影级呼吸感收束。\n4. **第四层：人物经典角色骨相与安全风控层（8个 `kungfu-*` + `douyin-audit-guard`）**\n   - 100% 绑定 `P01–P08` 人物三视图、`S01–S08` 空镜场景图、`W01–W08` 兵器道具资产卡，并通过 `真人剧审核 1.0.0` 零违规风控核验。\n"
    },
    {
      "type": "note",
      "title": "03_全套场景与人物三视及道具资产提示词全集.md",
      "text": "# 《功夫·回响》全套场景空镜、人物造型三视卡、兵器道具资产提示词全集\n\n> **结构说明**：本文档提供 8 位武术演员对应的 **24 套完整视觉资产提示词（中英双语可复制成品）**：\n> 1. **第一部分：8 大专属战斗场景空镜提示词（S01–S08）**（遵循 `cinematic-image-prompts` 去AI感15项摄影清单，纯空镜无人物，供 Seedance 2.5 作为 `@图2` 锁定空间轴线与光影）。\n> 2. **第二部分：8 大人物造型卡与全身正/侧/背三视图提示词（P01–P08）**（包含左侧招牌动作全身像 + 右上面部正/侧特写 + 右下全身正/侧/背标准三视图，供 Seedance 2.5 作为 `@图1` 锁定演员骨相与服化）。\n> 3. **第三部分：8 大兵器与核心互动道具资产卡提示词（W01–W08）**（包含主兵器正/侧/细节多视图 + 关键场景互动道具，供 Seedance 2.5 作为 `@图3` 锁定兵器形制与物理交互）。\n\n---\n\n## 第一部分：8 大专属战斗场景空镜提示词（S01–S08）\n\n### S01 · 计春华（段延庆）— 大理天龙寺外寒夜石阶长廊与封门木槛\n- **中文提示词（直接复制）**：\n```text\n16:9 电影级实拍宽银幕空镜剧照，画面无人物。北宋大理国古寺寒夜青石回廊与半掩雕花格子木门门槛，雨后潮湿青石板与浅水洼倒映着屋内温暖摇曳的油灯火光与左侧清冷月光，斑驳深色老木柱，半掩木门内侧一张旧木案上放着一卷未封口的羊皮密函卷轴与青铜油灯，廊外苦竹黑影婆娑，薄雾弥漫，ARRI Alexa Mini LF 配合 35mm Cooke Anamorphic 变形宽银幕镜头，自然胶片颗粒，真实湿石与风化木纹肌理，无文字无水印。\n```\n- **English Prompt（直接复制）**：\n```text\nWide-angle 16:9 cinematic movie still, empty scene without people, Song Dynasty Dali Stone Corridor and wooden temple gate threshold at night, damp bluestone slabs with rain puddles reflecting warm flickering oil lamps inside the wooden room and cold moonlight from the left, weathered dark timber pillars, carved wooden lattice door half-open with an old wooden table inside holding an unsealed parchment scroll, bamboo shadows swaying on wet stone steps, atmospheric mist, ARRI Alexa Mini LF with 35mm Cooke Anamorphic lens, natural film grain, Kodachrome-inspired shadow depth, rich tactile stone and wet wood textures, realistic historical production design, no text, no watermark.\n```\n\n### S02 · 董志华（油炸鬼）— 1930年代老上海清晨弄堂早点铺与青石板街口\n- **中文提示词（直接复制）**：\n```text\n16:9 电影级实拍宽银幕空镜剧照，画面无人物。1930年代老上海石库门弄堂清晨微光，潮湿青石板路面泛着晨露微光，左侧一座传统市井木制早点摊，砖砌炉灶上黑色生铁油锅正升起袅袅白气，竹编圆筐内盛满刚炸好的金黄油条，木制折叠马扎与方桌整齐摆放，斑驳灰砖墙与旧木门窗，弄堂上方横架竹晾衣竿，灶膛暖黄火光与清晨冷蓝雾气交织，35mm定焦镜头，胶片颗粒感，真实生铁与老木头质感，无人物无水印。\n```\n- **English Prompt（直接复制）**：\n```text\nWide-angle 16:9 cinematic movie still, empty scene without people, 1930s Shanghai Shikumen alleyway at early morning dawn, wet cobblestone street glistening with morning dew, a traditional wooden breakfast stall on the left with a cast-iron oil cauldron steaming gently, bamboo baskets of freshly fried dough sticks (youtiao), wooden folding stools and square tables, weathered gray brick walls with faded vintage plaster texture, bamboo laundry poles overhead, warm amber stove firelight mixing with cool misty blue morning skylight, 35mm lens, realistic film grain, tactile wood and iron textures, no people, no text.\n```\n\n### S03 · 杜玉明（逍遥王）— 明代深宅黑石王府内院与青石界线庭院\n- **中文提示词（直接复制）**：\n```text\n16:9 电影级实拍宽银幕空镜剧照，画面无人物。暮色下的明代黑石王府演武内院，厚重深灰青石板铺地，庭院正中央地面清晰镌刻一道横向生死界线凹槽，两侧粗壮黑漆木柱林立，石灯笼内燃烧着冷琥珀色火苗，薄暮寒雾贴地流淌，后方一座古朴青铜香炉，上方冷蓝暮色天光与廊下暖色火把形成强烈戏剧性明暗对比，35mm变形宽银幕镜头，自然胶片颗粒，威严肃杀质感，无人物无文字。\n```\n- **English Prompt（直接复制）**：\n```text\nWide-angle 16:9 cinematic movie still, empty scene without people, imposing Ming Dynasty dark-stone martial arts courtyard at dusk, massive dark gray flagstones with a distinct carved horizontal boundary line across the center of the courtyard, heavy black-lacquered timber pillars, stone lanterns glowing with cold amber fire, thin evening mist drifting across the stone floor, weathered bronze incense burner in the background, dramatic chiaroscuro lighting with cool slate-blue twilight from above and warm torchlight from the side corridors, 35mm anamorphic cinema lens, realistic film grain, no people, no text.\n```\n\n### S04 · 王赤（黑沙掌）— 清末民初江南老粮仓木门廊下与石磨坊前院\n- **中文提示词（直接复制）**：\n```text\n16:9 电影级实拍宽银幕空镜剧照，画面无人物。清末民初江南老粮仓大门廊下与石磨坊前院，正中是布满刀痕与岁月磨损的厚重双扇榆木大门，门上铆着铁泡钉并由一根粗壮榆木外横栓锁死，门侧堆叠粗麻谷物袋，院内右侧安放厚重青石磨盘与旧木水槽，粗糙条石地面，午后斜射暖阳穿过木檐在空气中的谷物微尘里投下丁达尔光束，35mm镜头，胶片写实质感，无人物无文字。\n```\n- **English Prompt（直接复制）**：\n```text\nWide-angle 16:9 cinematic movie still, empty scene without people, Late Qing / Early Republic southern Chinese wooden granary entrance and stone mill courtyard under overcast afternoon light, heavy scarred timber double doors reinforced with iron studs and a thick wooden crossbar, stacked burlap grain sacks, stone millstone and wooden water troughs on rough flagstones, fine grain dust suspended in diagonal shafts of warm sunlight piercing through the wooden eaves, rich weathered wood grain and rough stone texture, 35mm lens, realistic film photography, no people, no text.\n```\n\n### S05 · 徐向东（慧能）— 唐代古刹藏经阁木廊石阶与山门古柏院\n- **中文提示词（直接复制）**：\n```text\n16:9 电影级实拍宽银幕空镜剧照，画面无人物。唐代山林古刹藏经阁前的多层青石台阶与红棕重木斗拱回廊，院内苍劲古柏投下斑驳树影，洁净青石台坪一侧立着插有白蜡木齐眉棍的木制兵器架，雕花石栏杆外山谷晨雾缭绕，清晨通透自然阳光斜照，35mm电影镜头，纯正唐代木构建筑美学与胶片颗粒，无人物无文字。\n```\n- **English Prompt（直接复制）**：\n```text\nWide-angle 16:9 cinematic movie still, empty scene without people, Tang Dynasty mountain Zen monastery courtyard and Sutra Pavilion wooden corridor in crisp morning sunlight, multi-level stone steps leading up to heavy red-brown timber columns and brackets (dougong), ancient cypress trees casting dappled shadows across swept bluestone tiles, a wooden weapon rack holding wooden staffs on the side, morning mountain mist floating beyond the stone balustrade, natural directional sunlight, 35mm cinema lens, authentic historical architecture, film grain, no people, no text.\n```\n\n### S06 · 马毅（秦甲武者）— 战国秦代夯土城门甬道与火把战车长廊\n- **中文提示词（直接复制）**：\n```text\n16:9 电影级实拍宽银幕空镜剧照，画面无人物。战国末至秦代高耸粗粝的夯土城门狭窄防御甬道，厚重原木城门梁柱，铁火盆与壁挂火把燃烧着跳跃的橙红烈焰，墙边倚靠着古战车厚木车轮与青铜长戟兵器架，紧实的黄土路面上微风卷起干燥沙尘，火光浓烟与上方冷蓝暮色形成冷暖强烈反差，35mm变形宽银幕镜头，冷峻历史战争大片质感，无人物无文字。\n```\n- **English Prompt（直接复制）**：\n```text\nWide-angle 16:9 cinematic movie still, empty scene without people, Warring States / Qin Dynasty rammed-earth fortress gate passage and narrow defensive corridor at dusk, towering rough rammed-earth walls, heavy timber gate beams, iron braziers and wall torches burning with flickering orange fire, a wooden ancient war chariot wheel and bronze halberd rack near the wall, dry yellow dust blowing across the compacted earth floor, smoky atmosphere with warm firelight against cold twilight sky, 35mm anamorphic lens, gritty historical war film aesthetic, no people, no text.\n```\n\n### S07 · 程亚霖（李教练）— 当代中国传统与现代融合的专业武术训练馆\n- **中文提示词（直接复制）**：\n```text\n16:9 电影级实拍宽银幕空镜剧照，画面无人物。当代中国专业武术训练馆，浅色弹性实木地板上印有深蓝训练边界线与真实鞋底摩擦痕迹，靠墙一排传统实木兵器架整齐陈列白蜡杆长棍与武术单刀，柱旁立着传统木人桩与深蓝加厚皮革武术脚靶，高大工业格栅窗洒入午后暖金阳光，空气中微浮少许防滑镁粉颗粒，35mm电影镜头，真实纪实电影质感，无人物无文字。\n```\n- **English Prompt（直接复制）**：\n```text\nWide-angle 16:9 cinematic movie still, empty scene without people, authentic contemporary Chinese martial arts training hall (Wushu gymnasium) in late afternoon, sprung light-wood martial arts floor with worn training scuff marks and dark blue boundary lines, traditional wooden weapon racks along the wall holding waxwood staffs and broadswords, a classic wooden dummy and heavy leather kicking pads leaning by a pillar, high industrial windows letting in warm golden-hour sunlight shafts with subtle chalk dust in the air, 35mm cinema lens, realistic documentary film look, no people, no text.\n```\n\n### S08 · 康凯（张飞）— 东汉末年三国长坂坡古木桥头与断崖乱石滩\n- **中文提示词（直接复制）**：\n```text\n16:9 电影级实拍宽银幕空镜剧照，画面无人物。东汉末年三国长坂坡古木桥头，沧桑厚重的原木桥板与粗木栏杆横跨在湍急多雾的江峡之上，桥头右侧立着一座斑驳古朴的石碑，泥泞河滩上怪石嶙峋、枯苇摇曳，过桥远方是浓雾与战场烟尘笼罩的松林，风暴阴云裂开一束低角度斜射阳光照亮桥头引桥线，35mm变形宽银幕镜头，史诗古战场电影质感，无人物无文字。\n```\n- **English Prompt（直接复制）**：\n```text\nWide-angle 16:9 cinematic movie still, empty scene without people, Three Kingdoms era ancient wooden bridgehead (Changban Bridge) spanning over a rushing misty river gorge, rough weathered timber bridge planks and thick log railings, a carved stone bridge marker monument at the entrance, jagged boulders and dry reeds along the muddy riverbank, dense pine forest in the background shrouded in swirling battle dust and autumn fog, dramatic stormy overcast sky with low directional sunlight breaking through clouds, 35mm anamorphic lens, epic historical war film texture, no people, no text.\n```\n\n---\n\n## 第二部分：8 大人物造型卡与全身正/侧/背三视图提示词（P01–P08）\n\n> **说明**：生成时需上传对应演员的彩色精修面部照片（`portraits_color/P01.png`–`P08.png`）作为面部骨相参考。每张设定卡统一包含：**左侧大幅招牌动作全身像 + 右上两幅面部特写（正面+斜侧） + 右下全身正面/90°侧面/180°背面标准三视图**。\n\n### P01 · 计春华 · 饰演《天龙八部》段延庆（人物造型与全身三视图提示词）\n```text\nCreate a NEW 16:9 high-resolution photorealistic film CHARACTER DESIGN BOARD. The attached photo supplies ONLY the actor's facial identity and basic body proportions: IGNORE its modern clothes and IGNORE its martial pose. Clean soft white studio background, no scene, no opponents, no smoke/energy VFX. Premium asymmetric artbook arrangement with generous WHITE GAPS between every figure. One dominant complete full-body ACTION at left, two large distinct portrait views (front and three-quarter), three smaller complete neutral FRONT / exact 90-degree SIDE / exact 180-degree BACK turnarounds of the SAME role design at consistent scale. All heads/hands/feet and weapon tips entirely in frame with safe margins. Small Chinese labels 面部、动作、正面、侧面、背面.\nACTOR: 计春华. ROLE: 段延庆, creative reinterpretation inspired by 《天龙八部》.\nIDENTITY/COSTUME: Keep Ji Chunhua's recognizable sharp cheekbones, deep-set stern eyes and facial proportions. Weathered face, sparse dark-grey hair at the sides and tied behind, a modest long pointed grey-black beard. Weathered charcoal grey ancient robe with frayed hems, muted taupe layered scarf, cloth bindings at lower legs, worn dark cloth shoes. Two long plain IRON CRUTCHES.\nREQUIRED UNIQUE ACTION: Both legs held close together and slightly bent, impaired legs supported by one iron crutch planted vertically carrying body weight while the other iron crutch is thrust diagonally forward with a precise point strike. In the three full-body neutral views BOTH crutches are present, feet together and knees bent slightly, consistent disability portrayal.\nExact ID text: 名称「计春华」 角色「段延庆」 核心情绪「隐忍、阴厉」 视觉标志「双铁拐、灰旧长袍、点刺」.\n```\n\n### P02 · 董志华 · 饰演《功夫》油炸鬼（人物造型与全身三视图提示词）\n```text\nCreate a NEW 16:9 high-resolution photorealistic film CHARACTER DESIGN BOARD. The attached photo supplies ONLY the actor's facial identity and basic body proportions. Clean soft white studio background, no scene, no opponents, no VFX. One dominant complete full-body ACTION at left, two large distinct portrait views (front and three-quarter), three smaller complete neutral FRONT / exact 90-degree SIDE / exact 180-degree BACK turnarounds at consistent scale. Small Chinese labels 面部、动作、正面、侧面、背面.\nACTOR: 董志华. ROLE: 油炸鬼, creative reinterpretation inspired by 《功夫》.\nIDENTITY/COSTUME: Dong Zhihua's recognizable face, bald head, dark brows, wiry muscular mature physique. 1940s humble street cook: off-white cotton short sleeve undershirt, faded tan waist apron tied behind, charcoal loose trousers rolled above ankles, worn black cloth shoes. One LONG tan wooden staff.\nREQUIRED UNIQUE ACTION: Dynamic NARROW CROSS-STEP PIVOT with a TWO-HANDED long wooden staff diagonally levered from low right to high left in a staff parry-lift. Hands spaced far apart with credible grip. Heel of rear foot lifting, body twisting, apron swings. Neutral turnarounds hold staff vertically at side and show same apron ties at back.\nExact ID text: 名称「董志华」 角色「油炸鬼」 核心情绪「朴实、利落」 视觉标志「围裙、木长棍、斜挑」.\n```\n\n### P03 · 杜玉明 · 饰演《少年张三丰》逍遥王（人物造型与全身三视图提示词）\n```text\nCreate a NEW 16:9 high-resolution photorealistic film CHARACTER DESIGN BOARD. The attached photo supplies ONLY the actor's facial identity and basic body proportions. Clean soft white studio background, no scene, no opponents, no VFX. One dominant complete full-body ACTION at left, two large distinct portrait views (front and three-quarter, with complete topknots and ornaments visible with at least 4% white space above), three smaller complete neutral FRONT / exact 90-degree SIDE / exact 180-degree BACK turnarounds at consistent scale. Small Chinese labels 面部、动作、正面、侧面、背面.\nACTOR: 杜玉明. ROLE: 逍遥王, creative reinterpretation inspired by 《少年张三丰》.\nIDENTITY/COSTUME: Du Yuming's unmistakable long mature face, high forehead, deep eye sockets. Long straight silver-white hair flowing from a high half-topknot with dark silver crown, plum-black long silk robe with dark silver narrow trim, broad sash, dark boots.\nREQUIRED UNIQUE ACTION: Almost motionless VERTICAL UPRIGHT posture, FEET CLOSE, chin slightly raised, LEFT HAND TUCKED BEHIND HIS BACK and right arm raised to chest level pointing ONE straight index finger diagonally outward while remaining fingers curl naturally. Long sleeve drapes in a clean arc.\nExact ID text: 名称「杜玉明」 角色「逍遥王」 核心情绪「冷傲、压迫」 视觉标志「银发长袍、负手、一指」.\n```\n\n### P04 · 王赤 · 饰演《无敌鸳鸯腿》黑沙掌（人物造型与全身三视图提示词）\n```text\nCreate a NEW 16:9 high-resolution photorealistic film CHARACTER DESIGN BOARD. The attached photo supplies ONLY the actor's facial identity and basic body proportions. Clean soft white studio background, no scene, no opponents, no VFX. One dominant complete full-body ACTION at left, two large distinct portrait views (front and three-quarter), three smaller complete neutral FRONT / exact 90-degree SIDE / exact 180-degree BACK turnarounds at consistent scale, plus one small detailed open palm study showing dark pigment and creases. Small Chinese labels 面部、动作、正面、侧面、背面、手掌特写.\nACTOR: 王赤. ROLE: 黑沙掌, creative reinterpretation inspired by 《无敌鸳鸯腿》.\nIDENTITY/COSTUME: Wang Chi's broad mature face and characteristic brow/nose preserved, shaved head. Short dark oxblood sleeveless martial vest over black wrap tunic, broad worn leather belt, loose black trousers, calf cloth wraps, simple black cloth shoes. Both palms darkened with charcoal martial makeup, NOT gloves, fingers anatomically intact.\nREQUIRED UNIQUE ACTION: LOW COMPACT DEEP CROUCH seen in a three-quarter SIDE angle, torso rotating over bent knees, RIGHT OPEN PALM cutting strongly DOWNWARD beside the knee, LEFT PALM hooked tightly up near the ear.\nExact ID text: 名称「王赤」 角色「黑沙掌」 核心情绪「凶狠、狡诈」 视觉标志「黑掌、短褂、旋身下切」.\n```\n\n### P05 · 徐向东 · 饰演《木棉袈裟》慧能（人物造型与全身三视图提示词）\n```text\nCreate a NEW 16:9 high-resolution photorealistic film CHARACTER DESIGN BOARD. The attached photo supplies ONLY the actor's facial identity and basic body proportions. Clean soft white studio background, no scene, no opponents, no VFX. One dominant complete full-body ACTION at left, two large distinct portrait views (front and three-quarter), three smaller complete neutral FRONT / exact 90-degree SIDE / exact 180-degree BACK turnarounds at consistent scale. Small Chinese labels 面部、动作、正面、侧面、背面.\nACTOR: 徐向东. ROLE: 慧能, creative reinterpretation inspired by 《木棉袈裟》.\nIDENTITY/COSTUME: Preserve Xu Xiangdong's recognizable facial geometry, eye shape, nose and strong brow; adapt hair to a SHAVED monk head. Ash-grey linen monk tunic, muted saffron sash, russet folded cotton kasaya bundle secured to back/shoulder by strap, grey monk trousers, white calf wraps, brown cloth monk shoes.\nREQUIRED UNIQUE ACTION: Athletic AIRBORNE SIDE KICK caught midflight: one leg extends horizontally sideways, other leg tucks beneath the hips, both feet clearly OFF the ground with shadow below. Arms counterbalance naturally, cloth and sash react to momentum.\nExact ID text: 名称「徐向东」 角色「慧能」 核心情绪「坚毅、守护」 视觉标志「僧衣、袈裟束包、腾空侧踢」.\n```\n\n### P06 · 马毅 · 饰演秦甲武者（《古今大战秦俑情》武替启发·人物造型与全身三视图提示词）\n```text\nCreate a NEW 16:9 high-resolution photorealistic film CHARACTER DESIGN BOARD. The attached photo supplies ONLY the actor's facial identity and basic body proportions. Clean soft white studio background, no scene, no opponents, no VFX. One dominant complete full-body ACTION at left, two large distinct portrait views (front and three-quarter), three smaller complete neutral FRONT / exact 90-degree SIDE / exact 180-degree BACK turnarounds at consistent scale. Small Chinese labels 面部、动作、正面、侧面、背面.\nACTOR: 马毅. ROLE: 秦甲武者, creative reinterpretation inspired by 《古今大战秦俑情》武替经历.\nIDENTITY/COSTUME: Keep Ma Yi's face, compact mature build, adapt hair to a Qin-era small topknot with a simple head wrap, no helmet obscuring face. Dark lacquered Qin-style lamellar chest armor laced with red cords over deep brown tunic, burnt ochre waist cloth, bracers, dark trousers and worn brown boots. Straight bronze sword with dark scabbard at left belt.\nREQUIRED UNIQUE ACTION: Single KNEE-DOWN DRAW-CUT: right knee rests firmly on ground, left foot forward bearing load, torso rotates while right hand draws a STRAIGHT bronze sword LOW and SIDEWAYS from the scabbard controlled by left hand.\nExact ID text: 名称「马毅」 角色「秦甲武者」 核心情绪「专注、迅疾」 视觉标志「秦式札甲、跪步、直剑」.\n```\n\n### P07 · 程亚霖 · 饰演《武术班》李教练（正常7.5头身比例·稳步侧踢重绘版提示词）\n```text\nCreate a fully rebuilt photorealistic 16:9 character identity board using the attached real portrait ONLY as facial identity reference (Cheng Yalin 程亚霖, role 李教练). Normal proportionate adult male athletic anatomy, approximately 7.5 heads tall in neutral stance, anatomically credible full-length torso and legs, head appropriately small relative to shoulders and whole body. Navy tracksuit with narrow red piping, grey undershirt, white trainers. Left 52% of canvas: one large full-body standing SIDE KICK demonstration to screen LEFT at waist height, NOT a hand-held leg stretch. Support leg clearly visible from hip through knee to planted shoe; kicking leg extends horizontally from the other hip, knee nearly straight, ankle flexed, sole oriented toward imagined target. Pelvis turns side-on, torso near upright with only slight counterlean, head looking toward kick. BOTH HANDS in a compact relaxed martial arts guard near chest; no hand grabbing ankle. RIGHT upper section two separate frontal and three-quarter face portraits matching reference identity and age. RIGHT lower section THREE equally scaled full-height natural standing front, true side and back neutral turnarounds, all with normal 7.5-head adult proportions. White studio background. Modest Chinese labels 动作 面部 正面 侧面 背面.\nExact ID text: 名称「程亚霖」 角色「李教练」 核心情绪「严谨、耐心」 视觉标志「运动服、稳步侧踢、收放有度」.\n```\n\n### P08 · 康凯 · 饰演新《三国》张飞（人物造型与全身三视图提示词）\n```text\nCreate a NEW 16:9 high-resolution photorealistic film CHARACTER DESIGN BOARD. The attached photo supplies ONLY the actor's facial identity and basic body proportions. Clean soft white studio background, no scene, no opponents, no VFX. One dominant complete full-body ACTION at left, two large distinct portrait views (front and three-quarter with clear whitespace above topknots), three smaller complete neutral FRONT / exact 90-degree SIDE / exact 180-degree BACK turnarounds at consistent scale. Keep exactly one spear for each full-body study, no extra floating spear. Small Chinese labels 面部、动作、正面、侧面、背面.\nACTOR: 康凯. ROLE: 张飞, creative reinterpretation inspired by 《三国》.\nIDENTITY/COSTUME: Keep Kang Kai's broad forceful facial structure, thick brows, robust muscular heavy body. Thick longer black whiskers and beard, high warrior topknot; face unobscured, NO helmet. Blackened iron lamellar armor with worn bronze studs and beast-head pauldrons, dark red waist sash, heavy dark trousers, leather boots, short battered dark-red shoulder cape. One complete LONG SERPENT SPEAR with visible wavy snake blade.\nREQUIRED UNIQUE ACTION: POWERFUL ADVANCING CROSS-STEP sweeping a long serpent spear HORIZONTALLY across the body with BOTH hands, wide separated hand grip, torso wound in rotation, beard and cape moving, one rear heel lifted. Spear shaft and snake-shaped head completely visible with safe margins; pole does not cross face.\nExact ID text: 名称「康凯」 角色「张飞」 核心情绪「豪烈、勇猛」 视觉标志「重甲、长须、丈八蛇矛」.\n```\n\n---\n\n## 第三部分：8 大兵器与核心互动道具资产卡提示词（W01–W08）\n\n### W01 · 段延庆 — 玄铁双拐与大理密函木案资产设定卡\n- **中文提示词**：\n```text\n16:9 高清写实电影道具与兵器资产设定卡，纯净浅灰白摄影棚背景，无人物。左侧展示段延庆的一对沧桑暗黑锻铁双拐（正视图与侧视图全长正交排列），展示缠绕旧麻绳的握柄、厚重铁箍环与带有实战刮痕的钝尖铁拐头；右上展示锻铁拐尖与麻绳握把的微距质感特写；右下展示核心场景交互道具：宋代旧木案上一卷未封口的羊皮密函卷轴（带红泥火漆印）与一盏传统青铜油灯。排版留白舒展，真实金属与老木肌理，无文字无水印。\n```\n- **English Prompt**：\n```text\n16:9 high-resolution photorealistic film prop & weapon asset design sheet on clean neutral off-white studio background, no people. Left side: a pair of weathered dark forged-iron crutches (Duan Yanqing's Twin Iron Crutches) shown in full-length front and side orthographic views, displaying worn hemp-wrapped hand grips, heavy iron ring bands, and blunt-pointed iron tips with battle scratches. Right upper: close-up macro detail of the forged iron tip and grip texture. Right lower: key interactive scene props—an antique Song Dynasty unsealed parchment scroll with red wax seal resting on a weathered dark wooden table and a traditional bronze oil lamp. Clean"
    }
  ],
  "sequences": [
    {
      "title": "上卷 · 奇门宗师与市井硬功（P01–P04）",
      "sceneTag": "@天龙寺/@上海弄堂/@黑石王府/@江南粮仓",
      "shots": [
        "S01",
        "S02",
        "S03",
        "S04"
      ]
    },
    {
      "title": "下卷 · 禅武巨匠与沙场战神（P05–P08）",
      "sceneTag": "@唐代古刹/@秦城甬道/@现代武馆/@当阳长坂桥",
      "shots": [
        "S05",
        "S06",
        "S07",
        "S08"
      ]
    }
  ],
  "shots": [
    {
      "id": "S01",
      "title": "P01 计春华 · 段延庆（30秒五幕跨空间打戏）",
      "start": 0,
      "duration": 30,
      "framing": "全景破局 → 躯干锁焦快拆 → 贴地破界闪击 → 仰角环绕双跟 → 终局俯冲拉镜",
      "camera": "0-3s 全景极速推镜锁焦 → 3-8s 横向跟移+躯干纵向锁焦 → 8-13s 贴地破界推镜 → 13-22s 仰角环绕双人同步跟 → 22-30s 绕身环移+俯角弧线拉镜",
      "lighting": "电影级高反差冷暖碰撞光影（ARRI Alexa Mini LF 35mm 变形宽银幕镜头质感）",
      "cast": [
        "计春华（饰 段延庆）"
      ],
      "sceneTag": "大理天龙寺外·寒夜雨雾青石长廊 → 封门木槛 → 禅房内室案台",
      "action": "【双拐点穴 · 腹语摄魂 · 以杖代足 · 阴鸷宗师】跨越「大理天龙寺外·寒夜雨雾青石长廊 → 封门木槛 → 禅房内室案台」三重物理空间边界，前3幕13秒快切破界，第4幕9秒纵向落差与环境即武器交互，第5幕8秒寸止爆发、残屑缓落归于寂静。",
      "picture": "绑定 @P01 人物卡 + @S01 场景卡 + @W01 兵器卡，每击必调≥2重物理反馈（兵刃火星+衣摆气流+环境器物崩裂）。",
      "dialogue": [],
      "dialogueText": "无对白（冷兵器交格火花嗡鸣、破空拳风棍风、木石器物崩裂与环境余响）",
      "sound": "金铁交鸣声、破空气流声、木石碎裂声、衣袍猎猎声",
      "notes": "画布 349 节点 kungfu_v2_video_01 · taskId 2264 · 一次直出 30 秒跨三空间动作长片。",
      "firstFramePrompt": "",
      "prompt": "《功夫·回响》计春华·段延庆（恶贯满盈·四大恶人居首）。30秒，16:9，720p，写实功夫动作电影。第1张参考图（@image1）仅锁定主角面部骨相、妆造与服装，禁止复制白底、三视图拼版或文字；第2张参考图（@image2）锁定实拍环境建筑空间与光影（环境即武器，严禁凭空造景）；第3张参考图（@image3）锁定专属兵器与互动道具的材质、尺寸与结构。\n【Seedance 2.5 30秒一条直出·复合运镜总控提示词】\n电影级武侠动作大片，ARRI Alexa Mini LF 35mm变形宽银幕镜头，冷冽幽蓝月光与暖色油灯高反差光影，绑定参考图@P01计春华饰段延庆、@S01大理天龙寺寒夜石廊、@W01镔铁双拐。\n【00-03s 手持高速破局跟拍：全景 → 极速推镜锁焦 → 贴地仰拍】寒夜雨雾青石长廊，身披灰蓝粗麻长袍的段延庆双手拄乌黑镔铁双拐自竹影中逼近，左拐重顿潮湿青石板，石面微震炸起环形水花，段延庆下颌紧绷双目暴射寒芒，喉间低沉腹语震得积水泛起波纹；\n【03-08s 躯干锁焦快拆镜：横向跟移 + 躯干纵向锁焦 → 贴身平行横移】两名护寺武僧持白蜡长棍左右疾扑，段延庆左拐撑地稳住下盘，右拐高速挥击带出冷银弧光残影与破空气流，铁拐与长棍碰撞瞬间迸发耀眼火星，交格处剧烈震颤，段延庆顺势借廊柱掩体旋身斜刺，重击之下左侧武僧长棍脱手旋转飞落、靴底在积水石板滑擦数尺震退踉跄；\n【08-13s 贴地破界闪击镜：贴地跟移 → 高速推镜】段延庆左拐单点石阶借力腾空拔起，灰蓝长袍剧烈鼓荡，右拐横扫千军将右侧武僧轰向寺院雕花木门，轰然撞碎封门木槛，漫天木屑崩飞中两人跨越门槛物理边界突入禅房内室；\n【13-22s 仰角推镜环绕双跟：仰角推镜 → 双人同步跟 + 轨迹跟拍】禅房内油灯摇曳，护经主僧持戒刀借纵向落差从高处木案跃下劈砍，段延庆以杖代足撑地腾空旋转，双拐交叉锁死戒刀，双刃相抵火星四溅、兵刃因力量对抗而震颤嗡鸣，段延庆旋身卸力一拐砸穿楠木长案，桌面炸裂、铜灯与经卷架轰然倾覆；\n【22-30s 终局绕身俯冲拉镜：推镜 → 绕身环移 + 贴身平行横移 → 俯冲贴脸极速推进】段延庆右拐化作残影螺旋疾刺，铁拐尖端精准停驻于主僧胸前半寸，破空冲击波震裂主僧外袍衣襟、带起身后帷幔剧烈翻飞，段延庆左拐轻挑起案上羊皮密卷，身后的古寺竹影穿透尘雾清晰透出，漫天木屑与水珠缓落，画面归于寂静。\n\n【English Seedance 2.5 Prompt】\nCinematic 30s continuous martial arts action sequence, ARRI Alexa Mini LF 35mm anamorphic lens, cold moonlight vs warm oil lamp chiaroscuro, anchored to @P01 Duan Yanqing, @S01 Dali Temple Night Stone Corridor, @W01 Black Iron Crutches. [00-03s Camera: Wide shot -> Whip zoom lock-on -> Low-angle tracking] On rain-slicked bluestone steps, Duan Yanqing in grey-blue coarse linen robes advances on twin black iron crutches; his left crutch slams a puddle, splashing water rings as his throat emits a ventriloquist vibration. [03-08s Camera: Lateral tracking + Torso vertical lock-on -> Close parallel side-tracking] Two temple monks attack with waxwood staffs; Duan's right iron crutch parries with a cold silver arc blur, erupting bright sparks on impact; a spinning counter-thrust disarms the left monk whose staff flies spinning away as he skids backward across wet stone. [08-13s Camera: Ground-skimming tracking -> High-speed push-in] Vaulting off his left crutch, Duan sweeps his right crutch, hurling the second monk through the carved wooden temple door, shattering the wooden threshold in a shower of splinters as the fight crosses the physical boundary into the inner chamber. [13-22s Camera: Low-angle push-in orbit -> Two-person synchronous tracking + Trajectory follow] Inside the lamp-lit chamber, the head monk leaps down from a high table with a broadsword; Duan vaults on his crutches, locking the blade between crossed iron shafts with screaming metal resonance and flying sparks, then smashes the nanmu table in half, toppling bronze lamps. [22-30s Camera: Push-in -> 180-degree body orbit + Parallel slide -> High-speed dive close-up] Duan's right crutch spirals forward, its cold iron tip halting half an inch from the head monk's chest; the shockwave rips the monk's outer robe and billows background curtains while Duan's left crutch hooks the parchment scroll; bamboo silhouettes remain crystal clear through the settling wood dust as the frame falls into dead silence.",
      "refs": [
        {
          "label": "@P01 人物造型卡",
          "src": "media/img-f8a8d716f4c3fe79b508.png"
        },
        {
          "label": "@S01 场景空镜",
          "src": "media/img-268958a4da2f3c7b5a00.jpg"
        },
        {
          "label": "@W01 兵器道具卡",
          "src": "media/img-b98838b3763cc931a98b.jpg"
        }
      ],
      "video": "https://github.com/aikingtai-ctrl/jintai-film-showcase/releases/download/media-v1/kungfu-echo-8masters--a76ce9353247491b8325.mp4",
      "thumb": "assets/shots/S01.jpg",
      "model": "seedance2.5",
      "params": "30s · 16:9 · 1280×720 60fps · taskId 2264 · jimeng_multimodal2video",
      "status": "已生成",
      "alts": [],
      "take": "P01计春华｜段延庆｜30秒"
    },
    {
      "id": "S02",
      "title": "P02 董志华 · 油炸鬼（30秒五幕跨空间打戏）",
      "start": 30,
      "duration": 30,
      "framing": "全景破局 → 躯干锁焦快拆 → 贴地破界闪击 → 仰角环绕双跟 → 终局俯冲拉镜",
      "camera": "0-3s 全景极速推镜锁焦 → 3-8s 横向跟移+躯干纵向锁焦 → 8-13s 贴地破界推镜 → 13-22s 仰角环绕双人同步跟 → 22-30s 绕身环移+俯角弧线拉镜",
      "lighting": "电影级高反差冷暖碰撞光影（ARRI Alexa Mini LF 35mm 变形宽银幕镜头质感）",
      "cast": [
        "董志华（饰 油炸鬼）"
      ],
      "sceneTag": "1930年代老上海清晨早点铺灶台 → 石库门弄堂青石板街心 → 砖墙竹棚下",
      "action": "【五郎八卦棍 · 京剧武生身段 · 圈拦点枪 · 借物打力】跨越「1930年代老上海清晨早点铺灶台 → 石库门弄堂青石板街心 → 砖墙竹棚下」三重物理空间边界，前3幕13秒快切破界，第4幕9秒纵向落差与环境即武器交互，第5幕8秒寸止爆发、残屑缓落归于寂静。",
      "picture": "绑定 @P02 人物卡 + @S02 场景卡 + @W02 兵器卡，每击必调≥2重物理反馈（兵刃火星+衣摆气流+环境器物崩裂）。",
      "dialogue": [],
      "dialogueText": "无对白（冷兵器交格火花嗡鸣、破空拳风棍风、木石器物崩裂与环境余响）",
      "sound": "金铁交鸣声、破空气流声、木石碎裂声、衣袍猎猎声",
      "notes": "画布 349 节点 kungfu_v2_video_02 · taskId 2265 · 一次直出 30 秒跨三空间动作长片。",
      "firstFramePrompt": "",
      "prompt": "《功夫·回响》董志华·油炸鬼（五郎八卦棍传人 · 深巷隐世高手）。30秒，16:9，720p，写实功夫动作电影。第1张参考图（@image1）仅锁定主角面部骨相、妆造与服装，禁止复制白底、三视图拼版或文字；第2张参考图（@image2）锁定实拍环境建筑空间与光影（环境即武器，严禁凭空造景）；第3张参考图（@image3）锁定专属兵器与互动道具的材质、尺寸与结构。\n【Seedance 2.5 30秒一条直出·复合运镜总控提示词】\n电影级功夫动作片，35mm定焦镜头，1930年代老上海清晨冷蓝雾光与早点铺暖黄灶火交织，绑定参考图@P02董志华饰油炸鬼、@S02老上海清晨弄堂早点铺、@W02五郎八卦棍与早点铺道具。\n【00-03s 手持高速破局跟拍：全景 → 极速推镜锁焦 → 贴身平行横移】清晨石库门早点铺热油铁锅白汽升腾，穿灰色旧棉马甲、肩搭白毛巾的油炸鬼正持长竹筷劳作，黑衣打手挥铁斧当头劈下，油炸鬼闪电般侧身闪避，铁斧劈碎木案边缘木屑飞溅，油炸鬼右脚足尖精准勾起案下包铜白蜡长木棍握于掌心；\n【03-08s 躯干锁焦快拆镜：横向跟移 + 躯干纵向锁焦 → 贴身平行横移】油炸鬼持棍旋身施展八卦棍“挑字诀”，长棍铜箍磕击铁斧迸发刺眼火星，震得打手短斧脱手飞出，油炸鬼顺势一脚踢起摊边竹筛撞向第二名打手胸口，打手震退踉跄撞翻折叠木椅，油炸鬼灰马甲与白毛巾随高速动作剧烈飘动；\n【08-13s 贴地破界闪击镜：贴地跟移 → 高速推镜】面对三名打手合围，油炸鬼单棍撑地借纵向落差跃起，凌空横扫一棍砸碎早点铺木方桌，撞破摊位木栏跨越物理边界，身形矫健落入弄堂湿滑青石板街心；\n【13-22s 环绕闪击群战镜：环绕镜 → 平行侧跟 → 双人同步跟】弄堂青石板街心四名打手挥斧齐上，油炸鬼展开京剧武生身段疾步穿插，五郎八卦棍“圈、拦、点、枪”连环迸发，棍身高速旋转带出满月弧光残影与强烈破空气流，叮当脆响间四把短斧全部脱手旋转飞落、深深钉入两侧石库门青砖墙内激起石粉；\n【22-30s 终局仰角环绕拉镜：仰角推镜 → 绕身环移 → 俯角全景弧线拉镜】油炸鬼腾空旋子360度转体，棍尾重顿青石板炸起环形晨露水花，棍梢如灵蛇疾吐精准停驻在头目鼻尖前一寸，刚猛棍风直接掀飞头目头顶黑礼帽，头目双腿发软震退撞墙；油炸鬼单腿独立提膝持棍亮出京剧宗师定格架势，身后的石库门弄堂与袅袅蒸汽穿透晨光清晰透出，礼帽缓落地面，画面归于寂静。\n\n【English Seedance 2.5 Prompt】\nCinematic 30s continuous kung fu action sequence, 35mm prime lens, 1930s Shanghai dawn cool blue mist mixed with warm amber stove fire, anchored to @P02 Dong Zhihua as Donut (Youzha Gui), @S02 1930s Shanghai Shikumen Alley Breakfast Stall, @W02 Eight-Diagram Long Waxwood Staff. [00-03s Camera: Wide shot -> Whip zoom lock-on -> Close parallel side-tracking] By a steaming cast-iron oil cauldron at dawn, Donut in a faded grey vest with a white towel on his shoulder dodges a sudden hatchet chop that splinters the wooden counter; his right foot flicks a brass-ferruled waxwood long staff up into his grip. [03-08s Camera: Lateral tracking + Torso vertical lock-on -> Close parallel slide] Spinning the staff with Peking Opera Wusheng precision, the brass ferrule clashes against the steel hatchet in a burst of sparks, disarming the attacker; Donut kicks a bamboo sieve from the stall into a second thug, sending him staggering backward over folding stools as Donut's vest and towel whip violently in the airflow. [08-13s Camera: Ground-skimming tracking -> High-speed push-in] Pole-vaulting off his staff, Donut sweeps a horizontal strike that smashes the wooden breakfast table to splinters, crashing through the stall barrier across the physical boundary into the wet cobblestone alleyway. [13-22s Camera: 360-degree orbit -> Parallel side-follow -> Two-person synchronous tracking] Surrounded by four hatchet men in the narrow Shikumen alley, Donut executes the Wulang Eight-Diagram Staff circle-block-point techniques; the blurring staff arc deflects all four hatchets in rapid succession, sending the steel axes spinning into the grey brick walls in puffs of mortar dust. [22-30s Camera: Low-angle push-in -> Body orbit -> High-angle arc pull-back] Donut leaps into a 360-degree aerial butterfly twist, slamming the staff butt onto wet flagstones to splash morning dew while the staff tip halts one inch from the leader's nose; the gust blows the leader's fedora off into the air as Donut holds a crisp one-legged martial arts pose; morning steam and Shikumen brickwork shine clearly through the mist as the hat lands and the frame falls silent.",
      "refs": [
        {
          "label": "@P02 人物造型卡",
          "src": "media/img-fee486c3b7e0e3cba5f6.png"
        },
        {
          "label": "@S02 场景空镜",
          "src": "media/img-812e6cea8a6796c02b68.jpg"
        },
        {
          "label": "@W02 兵器道具卡",
          "src": "media/img-ae3ca3ac927a9abd623e.jpg"
        }
      ],
      "video": "https://github.com/aikingtai-ctrl/jintai-film-showcase/releases/download/media-v1/kungfu-echo-8masters--9eac8428a5a4de09a281.mp4",
      "thumb": "assets/shots/S02.jpg",
      "model": "seedance2.5",
      "params": "30s · 16:9 · 1280×720 60fps · taskId 2265 · jimeng_multimodal2video",
      "status": "已生成",
      "alts": [],
      "take": "P02董志华｜油炸鬼｜30秒"
    },
    {
      "id": "S03",
      "title": "P03 杜玉明 · 逍遥王（30秒五幕跨空间打戏）",
      "start": 60,
      "duration": 30,
      "framing": "全景破局 → 躯干锁焦快拆 → 贴地破界闪击 → 仰角环绕双跟 → 终局俯冲拉镜",
      "camera": "0-3s 全景极速推镜锁焦 → 3-8s 横向跟移+躯干纵向锁焦 → 8-13s 贴地破界推镜 → 13-22s 仰角环绕双人同步跟 → 22-30s 绕身环移+俯角弧线拉镜",
      "lighting": "电影级高反差冷暖碰撞光影（ARRI Alexa Mini LF 35mm 变形宽银幕镜头质感）",
      "cast": [
        "杜玉明（饰 逍遥王）"
      ],
      "sceneTag": "明代黑石王府内院界线前 → 青铜香炉石阶 → 廊下黑漆木柱区",
      "action": "【负手立界 · 拂袖卸力 · 奇门寸劲 · 寒冰掌风】跨越「明代黑石王府内院界线前 → 青铜香炉石阶 → 廊下黑漆木柱区」三重物理空间边界，前3幕13秒快切破界，第4幕9秒纵向落差与环境即武器交互，第5幕8秒寸止爆发、残屑缓落归于寂静。",
      "picture": "绑定 @P03 人物卡 + @S03 场景卡 + @W03 兵器卡，每击必调≥2重物理反馈（兵刃火星+衣摆气流+环境器物崩裂）。",
      "dialogue": [],
      "dialogueText": "无对白（冷兵器交格火花嗡鸣、破空拳风棍风、木石器物崩裂与环境余响）",
      "sound": "金铁交鸣声、破空气流声、木石碎裂声、衣袍猎猎声",
      "notes": "V3 去风控+独立对手终极版（taskId 2343）：采用真实电影定妆单人图+独立青衫剑客对手图，彻底解决原多视图拼版触发风控问题。",
      "firstFramePrompt": "",
      "prompt": "《功夫·回响》杜玉明·逍遥王（西域奇门宗师 · 冷面霸主）。30秒，16:9，720p，写实功夫动作电影。第1张参考图（@image1）仅锁定主角面部骨相、妆造与服装，禁止复制白底、三视图拼版或文字；第2张参考图（@image2）锁定实拍环境建筑空间与光影（环境即武器，严禁凭空造景）；第3张参考图（@image3）锁定专属兵器与互动道具的材质、尺寸与结构。\n【Seedance 2.5 30秒一条直出·复合运镜总控提示词】\n电影级古装武侠动作片，35mm变形宽银幕镜头，冷蓝暮色与暖黄石灯笼高反差照明，绑定参考图@P03杜玉明饰逍遥王、@S03明代黑石王府内院、@W03玄铁指环与墨玉扳指。\n【00-03s 手持高速破局跟拍：全景 → 极速推镜锁焦 → 贴身平行横移】暮色黑石王府内院，身披玄黑织金宽袖蟒袍的逍遥王负手傲立于地面青石刻痕界线之后，左手依旧背在身后，右手拇指转动墨玉扳指，眼神森冷如鹰隼，三名夜行刺客持寒光长剑自雾中疾冲而来；\n【03-08s 躯干锁焦快拆镜：横向跟移 + 躯干纵向锁焦 → 微距推镜】首名刺客长剑直刺咽喉，逍遥王双足寸步未移，右手黑金宽袖如铁鞭猛然拂出，指间乌黑玄铁指环精准弹击精钢剑脊，碰撞瞬间迸发刺眼火星，剑身剧烈震颤嗡鸣后应声寸断，断刃旋转飞出深深钉入廊下黑漆木柱；\n【08-13s 贴地破界闪击镜：贴地跟移 → 高速推镜】另外两名刺客挥双刀左右夹击，逍遥王宽袖一卷拍中庭院中央的青铜香炉，沉重香炉被巨力震飞撞向刺客，炉内香灰如白雾轰然炸开，逍遥王借势衣袍鼓荡跨越庭院界线、纵身踏上高台廊阶；\n【13-22s 仰角推镜环绕双跟：仰角推镜 → 双人同步跟 + 轨迹跟拍】高台黑漆巨柱回廊间，两名刺客追上挥刀狂劈，逍遥王借石阶纵向落差欺身切入内门，双手玄铁指环化作残影高频锁扣刀背，一路火花带闪电震飞双刀，紧接着奇门寸劲连环拍击，震裂刺客外层皮甲，将一人轰撞在廊边石灯笼上，石灯笼轰然崩碎、石屑与火星四溅；\n【22-30s 终局绕身俯冲拉镜：推镜 → 绕身环移 + 贴身平行横移 → 俯角全景弧线拉镜】逍遥王于主殿门前双掌齐推，环形破空气浪卷起满地香灰与落叶，三名刺客尽数震退踉跄、沿着青石台阶滑擦跌落庭院界线之外；逍遥王从容一拂黑金宽袖重新负手而立，身后的明代黑漆殿宇穿透苍白香灰清晰透出，残屑缓落，画面归于寂静。\n\n【English Seedance 2.5 Prompt】\nCinematic 30s continuous wuxia action sequence, 35mm anamorphic lens, slate-blue dusk vs warm amber stone lanterns, anchored to @P03 Du Yuming as Xiaoyao Wang, @S03 Ming Dynasty Dark-Stone Courtyard, @W03 Dark-Iron Finger Rings & Jade Thumb Ring. [00-03s Camera: Wide shot -> Whip zoom lock-on -> Close parallel side-tracking] In the dark-stone courtyard at dusk, Xiaoyao Wang in black-and-gold brocade robes stands with hands behind his back behind the carved flagstone boundary line, rotating his dark jade thumb ring with a piercing eagle gaze as three masked assassins charge with steel swords. [03-08s Camera: Lateral tracking + Torso vertical lock-on -> Macro push-in] As the lead assassin thrusts at his throat, Xiaoyao Wang does not move his feet; his wide black-gold sleeve whips out and his dark-iron finger ring flicks the flat of the steel blade, erupting bright sparks and snapping the sword in two—the broken tip spins into a black lacquer pillar. [08-13s Camera: Ground-skimming tracking -> High-speed push-in] Two assassins slash with twin sabers; Xiaoyao Wang sweeps his sleeve to launch a heavy bronze incense burner into them, exploding a cloud of white incense ash as he glides up the stone steps across the physical boundary onto the raised corridor platform. [13-22s Camera: Low-angle push-in orbit -> Two-person synchronous tracking + Trajectory follow] Among the massive black lacquer pillars on the raised terrace, Xiaoyao Wang exploits the elevation drop, his iron-ringed fingers deflecting saber strikes in showers of sparks before delivering short-range inch-force palm strikes that shatter leather armor straps and send an assassin crashing through a stone lantern in a burst of stone debris and embers. [22-30s Camera: Push-in -> Body orbit + Parallel slide -> High-angle arc pull-back] Xiaoyao Wang unleashes a double-palm shockwave that sweeps ash and leaves in a fan wave, sending all three disarmed assassins skidding backward down the stone steps beyond the courtyard line; he calmly flicks his robe sleeves back behind his waist as the grand Ming hall stands crystal clear through the settling ash and the frame falls into silence.",
      "refs": [
        {
          "label": "@P03 人物造型卡",
          "src": "media/img-372a91b0898a1963b04f.png"
        },
        {
          "label": "@S03 场景空镜",
          "src": "media/img-2ba1f6ff2b9609abed8b.jpg"
        },
        {
          "label": "@W03 兵器道具卡",
          "src": "media/img-c011a21af1e6db7f2154.jpg"
        },
        {
          "label": "P03单人电影定妆（去风控）",
          "src": "media/img-159686c9ae978dfe045f.jpg"
        },
        {
          "label": "独立对手·青衫江湖剑客",
          "src": "media/img-0be46af6c03cee0caef2.jpg"
        }
      ],
      "video": "https://github.com/aikingtai-ctrl/jintai-film-showcase/releases/download/media-v1/kungfu-echo-8masters--f62b4b8051d70c8e7fd3.mp4",
      "thumb": "assets/shots/S03.jpg",
      "model": "seedance2.5",
      "params": "30s · 16:9 · 1280×720 60fps · taskId 2343 · jimeng_multimodal2video",
      "status": "已生成",
      "alts": [],
      "take": "P03杜玉明｜逍遥王｜30秒"
    },
    {
      "id": "S04",
      "title": "P04 王赤 · 黑沙掌传人（30秒五幕跨空间打戏）",
      "start": 90,
      "duration": 30,
      "framing": "全景破局 → 躯干锁焦快拆 → 贴地破界闪击 → 仰角环绕双跟 → 终局俯冲拉镜",
      "camera": "0-3s 全景极速推镜锁焦 → 3-8s 横向跟移+躯干纵向锁焦 → 8-13s 贴地破界推镜 → 13-22s 仰角环绕双人同步跟 → 22-30s 绕身环移+俯角弧线拉镜",
      "lighting": "电影级高反差冷暖碰撞光影（ARRI Alexa Mini LF 35mm 变形宽银幕镜头质感）",
      "cast": [
        "王赤（饰 黑沙掌传人）"
      ],
      "sceneTag": "清末民初江南老粮仓石磨坊前院 → 谷袋堆叠区 → 包铁厚木大门廊下",
      "action": "【铁砂重掌 · 硬桥硬马 · 沉肩撞木 · 掌碎巨石】跨越「清末民初江南老粮仓石磨坊前院 → 谷袋堆叠区 → 包铁厚木大门廊下」三重物理空间边界，前3幕13秒快切破界，第4幕9秒纵向落差与环境即武器交互，第5幕8秒寸止爆发、残屑缓落归于寂静。",
      "picture": "绑定 @P04 人物卡 + @S04 场景卡 + @W04 兵器卡，每击必调≥2重物理反馈（兵刃火星+衣摆气流+环境器物崩裂）。",
      "dialogue": [],
      "dialogueText": "无对白（冷兵器交格火花嗡鸣、破空拳风棍风、木石器物崩裂与环境余响）",
      "sound": "金铁交鸣声、破空气流声、木石碎裂声、衣袍猎猎声",
      "notes": "主视频为「换对手修复版」（前段保留 taskId 2267 铁砂锅开场与石磨木架爆破，7.97–30s 无缝嫁接 taskId 2341 独立漕帮刀客对手重做段，彻底消除对手撞脸主角问题）。",
      "firstFramePrompt": "",
      "prompt": "《功夫·回响》王赤·黑沙掌传人（江南铁掌硬功巨汉 · 刚猛无俦）。30秒，16:9，720p，写实功夫动作电影。第1张参考图（@image1）仅锁定主角面部骨相、妆造与服装，禁止复制白底、三视图拼版或文字；第2张参考图（@image2）锁定实拍环境建筑空间与光影（环境即武器，严禁凭空造景）；第3张参考图（@image3）锁定专属兵器与互动道具的材质、尺寸与结构。\n【Seedance 2.5 30秒一条直出·复合运镜总控提示词】\n电影级传统硬派功夫动作片，35mm定焦镜头，清末民初江南老粮仓午后暖金斜阳光束与悬浮微尘，绑定参考图@P04王赤饰黑沙掌、@S04江南老粮仓石磨前院、@W04铁砂掌练功器具。\n【00-03s 手持高速破局跟拍：全景 → 极速推镜锁焦 → 贴地仰拍】江南老粮仓石磨前院，身形魁梧、穿深褐粗麻无袖坎肩的黑沙掌王赤沉腰扎下四平大马，粗粝乌黑的双掌猛然拍击生铁锅内滚烫铁砂，乌黑铁砂随气浪冲天炸开，王赤怒目锁死持长柄大刀冲来的劲敌；\n【03-08s 躯干锁焦快拆镜：横向跟移 + 躯干纵向锁焦 → 贴身平行横移】劲敌双手抡长柄大刀当头劈落，王赤不闪不避欺身迎上，前臂铆钉牛皮护腕硬生生架住刀刃，金属碰撞瞬间迸发耀眼火星，王赤右掌黑砂劲吐出，一掌拍碎身旁石磨木架，木屑与磨盘谷粉四散炸裂；\n【08-13s 贴地破界闪击镜：贴地跟移 → 高速推镜】王赤垫步沉肩使出刚猛铁山靠，将庭院堆叠的麻布谷袋垛猛烈撞向劲敌，麻袋当场崩裂，金黄色稻谷粒如暴雨般漫天飞溅，两人撞碎前院木栏跨越物理边界逼入粮仓高阶大门廊下；\n【13-22s 仰角推镜环绕双跟：仰角推镜 → 双人同步跟 + 轨迹跟拍】大门廊下劲敌借台阶纵向落差旋身横斩，王赤右脚重踏震裂廊下青砖，双掌如两扇黑铁门正面夹击大刀刀面，双械对抗发出震耳欲聋的嗡鸣与火星，王赤右掌重击刀背，硬生生将精钢大刀震脱手旋转飞出、深深钉入廊下粗木立柱；\n【22-30s 终局绕身俯冲拉镜：推镜 → 绕身环移 + 贴身平行横移 → 俯角全景弧线拉镜】王赤吐气开声双掌齐推，雄浑掌风带起漫天谷粒与铁砂尘浪，劲敌双足离地倒滑撞上身后包铁钉厚木仓门，门后碗口粗的横木门栓轰然震断，两扇沉重木门向内洞开，斜阳金光穿透谷仓尘雾清晰透出，漫天谷粒缓落，画面归于寂静。\n\n【English Seedance 2.5 Prompt】\nCinematic 30s continuous hard-style kung fu action sequence, 35mm cinema lens, Late Qing southern Chinese granary courtyard with golden afternoon sunbeams piercing grain dust, anchored to @P04 Wang Chi as Iron Palm Master, @S04 Granary Stone Mill Courtyard, @W04 Iron Sand Cauldron & Training Gear. [00-03s Camera: Wide shot -> Whip zoom lock-on -> Low-angle tracking] In the granary courtyard, the muscular bald Iron Palm master Wang Chi in a coarse brown sleeveless vest sinks into a deep horse stance and slams both dark calloused palms into a cauldron of hot black iron sand, blasting a dark cloud of iron grit into the sunlit air as an opponent charges with a long-handled guandao broadsword. [03-08s Camera: Lateral tracking + Torso vertical lock-on -> Close parallel side-tracking] The opponent cleaves down with the heavy blade; Wang Chi steps straight in, blocking the steel edge with his studded leather bracers in a shower of bright sparks, then unleashes a single Iron Sand palm strike that shatters the wooden frame of the stone mill in a burst of splinters and flour dust. [08-13s Camera: Ground-skimming tracking -> High-speed push-in] Dropping his shoulder into a thunderous body-check, Wang Chi rams a stack of burlap grain sacks into his foe; the sacks burst open in a golden rain of rice grains as the two crash through the wooden railing across the physical boundary onto the raised porch of the granary gate. [13-22s Camera: Low-angle push-in orbit -> Two-person synchronous tracking + Trajectory follow] On the raised porch steps, Wang Chi stomps and cracks a bluestone tile, clapping both blackened palms onto the flat of the sweeping broadsword with a deafening metallic ring and sparks, then slaps the heavy steel blade out of the opponent's grip—sending it spinning deep into a timber pillar. [22-30s Camera: Push-in -> Body orbit + Parallel slide -> High-angle arc pull-back] Wang Chi drives a double-palm shockwave forward, whipping grain dust and golden husks through the air; the impact hurls the opponent backward against the iron-studded timber double doors, snapping the thick wooden crossbar behind them as the massive granary doors boom open; golden sunbeams shine clearly through the settling grain dust as the frame falls into silence.",
      "refs": [
        {
          "label": "@P04 人物造型卡",
          "src": "media/img-cbe918036af1babf4dd7.png"
        },
        {
          "label": "@S04 场景空镜",
          "src": "media/img-115bb8db03e6d5e8ebcd.jpg"
        },
        {
          "label": "@W04 兵器道具卡",
          "src": "media/img-f741998186d2a8e2e07d.jpg"
        },
        {
          "label": "换对手定妆·漕帮刀客",
          "src": "media/img-83aa81d31b78ede1582b.jpg"
        }
      ],
      "video": "https://github.com/aikingtai-ctrl/jintai-film-showcase/releases/download/media-v1/kungfu-echo-8masters--f5643f8bb815bdff2e08.mp4",
      "thumb": "assets/shots/S04.jpg",
      "model": "seedance2.5",
      "params": "30s · 16:9 · 1280×720 60fps · taskId 2267 + 2341 · jimeng_multimodal2video",
      "status": "已生成",
      "alts": [
        {
          "label": "原版直出 30s（taskId 2267）",
          "src": "https://github.com/aikingtai-ctrl/jintai-film-showcase/releases/download/media-v1/kungfu-echo-8masters--dd68146569232d9edd03.mp4"
        },
        {
          "label": "后段换对手重做 23s（taskId 2341）",
          "src": "https://github.com/aikingtai-ctrl/jintai-film-showcase/releases/download/media-v1/kungfu-echo-8masters--b84ded04d0bea125ed1f.mp4"
        }
      ],
      "take": "P04王赤｜黑沙掌传人｜30秒"
    },
    {
      "id": "S05",
      "title": "P05 徐向东 · 慧能大师（30秒五幕跨空间打戏）",
      "start": 120,
      "duration": 30,
      "framing": "全景破局 → 躯干锁焦快拆 → 贴地破界闪击 → 仰角环绕双跟 → 终局俯冲拉镜",
      "camera": "0-3s 全景极速推镜锁焦 → 3-8s 横向跟移+躯干纵向锁焦 → 8-13s 贴地破界推镜 → 13-22s 仰角环绕双人同步跟 → 22-30s 绕身环移+俯角弧线拉镜",
      "lighting": "电影级高反差冷暖碰撞光影（ARRI Alexa Mini LF 35mm 变形宽银幕镜头质感）",
      "cast": [
        "徐向东（饰 慧能大师）"
      ],
      "sceneTag": "唐代古刹山门古柏石阶 → 藏经阁木廊 → 殿前青石平台武器架旁",
      "action": "【木棉袈裟 · 禅门齐眉棍 · 鹰爪寸拿 · 慈悲止戈】跨越「唐代古刹山门古柏石阶 → 藏经阁木廊 → 殿前青石平台武器架旁」三重物理空间边界，前3幕13秒快切破界，第4幕9秒纵向落差与环境即武器交互，第5幕8秒寸止爆发、残屑缓落归于寂静。",
      "picture": "绑定 @P05 人物卡 + @S05 场景卡 + @W05 兵器卡，每击必调≥2重物理反馈（兵刃火星+衣摆气流+环境器物崩裂）。",
      "dialogue": [],
      "dialogueText": "无对白（冷兵器交格火花嗡鸣、破空拳风棍风、木石器物崩裂与环境余响）",
      "sound": "金铁交鸣声、破空气流声、木石碎裂声、衣袍猎猎声",
      "notes": "画布 349 节点 kungfu_v2_video_05 · taskId 2268 · 一次直出 30 秒跨三空间动作长片。",
      "firstFramePrompt": "",
      "prompt": "《功夫·回响》徐向东·慧能大师（禅武合一 · 鹰爪棍宗 · 大宗师）。30秒，16:9，720p，写实功夫动作电影。第1张参考图（@image1）仅锁定主角面部骨相、妆造与服装，禁止复制白底、三视图拼版或文字；第2张参考图（@image2）锁定实拍环境建筑空间与光影（环境即武器，严禁凭空造景）；第3张参考图（@image3）锁定专属兵器与互动道具的材质、尺寸与结构。\n【Seedance 2.5 30秒一条直出·复合运镜总控提示词】\n电影级少林禅武动作大片，35mm变形宽银幕镜头，唐代山林古刹清晨金白丁达尔阳光与古柏晨雾，绑定参考图@P05徐向东饰慧能大师、@S05唐代古刹藏经阁木廊、@W05木棉袈裟与白蜡齐眉棍。\n【00-03s 手持高速破局跟拍：全景 → 极速推镜锁焦 → 贴身平行横移】唐代古刹山门青石台阶上晨光熹微，身披朱红百衲木棉袈裟的慧能大师合十静立，三名黑甲武士持精钢红缨长枪踏碎落叶疾刺而来，枪尖破空带起锐利气流，慧能大师微侧身躯从容让过锋芒；\n【03-08s 躯干锁焦快拆镜：横向跟移 + 躯干纵向锁焦 → 贴身平行横移】慧能大师左手一抖朱红木棉袈裟下摆，宽大袈裟如红云翻卷裹住左右两杆铁枪枪头，随腰马合一旋身卸力，引导两杆铁枪枪尖猛烈互撞，碰撞瞬间迸发耀眼火星，两名武士虎口剧震、向两侧震退踉跄；\n【08-13s 急速上摇借力跟拍：仰角推镜 → 急速上摇 + 跟拍】第三名武士挺枪直刺，慧能大师右足轻点铁枪木杆借纵向落差腾空跃起，朱红袈裟在晨光中猎猎舒展，一跃跨越汉白玉石栏物理边界落入藏经阁红木回廊，顺手从廊边木制兵器架上抄起一根白蜡齐眉禅棍；\n【13-22s 环绕闪击群战镜：环绕镜 → 平行侧跟 → 双人同步跟】三名武士追入藏经阁木廊挺枪合围，慧能大师持白蜡齐眉棍施展禅门棍法，云棍护身、挑拨连环，高速挥击带出浑圆弧光残影与强烈破空气流，棍枪交格火星四溅、枪杆剧烈震颤嗡鸣，慧能大师一记大回旋横扫千军，三杆铁枪同时脱手旋转飞落、撞动廊下铜铃与经幡；\n【22-30s 终局绕身俯冲拉镜：推镜 → 绕身环移 + 贴身平行横移 → 俯角全景弧线拉镜】殿前青石平台上，慧能大师进步欺身，左手施展少林鹰爪寸拿精准扣住为首武士手腕卸去其冲势，右手白蜡齐眉棍垂直顿地，环形气流冲击波激起满地古柏松针与落叶飞旋，武士折服单膝跪地；慧能大师松手退半步单掌合十，身后的唐代斗拱藏经阁与苍翠古柏穿透晨雾清晰透出，落叶缓落，画面归于寂静。\n\n【English Seedance 2.5 Prompt】\nCinematic 30s continuous Shaolin Zen martial arts sequence, 35mm anamorphic lens, Tang Dynasty mountain monastery in crisp golden morning sunbeams and cypress mist, anchored to @P05 Xu Xiangdong as Master Huineng, @S05 Tang Zen Monastery Sutra Corridor, @W05 Crimson Kapok Kasaya & Waxwood Staff. [00-03s Camera: Wide shot -> Whip zoom lock-on -> Close parallel side-tracking] On the stone steps of an ancient Tang monastery at dawn, Master Huineng in a patchwork crimson kapok kasaya stands with palms together as three armored soldiers charge up the steps thrusting steel-tipped spears; Huineng pivots effortlessly past the spear points. [03-08s Camera: Lateral tracking + Torso vertical lock-on -> Close parallel slide] Huineng sweeps his crimson kasaya robe like a flowing cloud, wrapping two spearheads and redirecting them to crash into each other in a burst of bright sparks, sending both soldiers staggering backward off-balance. [08-13s Camera: Low-angle push-in -> Rapid tilt-up + Follow tracking] As the third soldier thrusts, Huineng steps lightly onto the spear shaft and vaults high into the morning sunlight, his crimson kasaya billowing as he crosses the stone balustrade boundary into the Sutra Pavilion wooden corridor and snatches a waxwood eyebrow-height staff from a wooden rack. [13-22s Camera: 360-degree orbit -> Parallel side-follow -> Two-person synchronous tracking] Inside the red-timber dougong corridor, Huineng wields the waxwood staff in fluid cloud-sweep and deflecting arcs; high-speed strikes create white motion arcs and airflow gusts that clash against the three iron spears with ringing vibrations and sparks, disarming all three spears which clatter across the wooden floor and brush the hanging banners. [22-30s Camera: Push-in -> Body orbit + Parallel slide -> High-angle arc pull-back] Out on the bluestone terrace, Huineng steps in with a precise Shaolin Eagle Claw wrist lock to neutralize the leader's momentum while grounding his waxwood staff vertically—sending a circular shockwave of pine needles and fallen leaves swirling into the air; Huineng releases the hold and bows with one palm raised as the Tang monastery and ancient cypresses shine crystal clear through the morning mist and the frame falls into silence.",
      "refs": [
        {
          "label": "@P05 人物造型卡",
          "src": "media/img-694407f2053113b3d6a8.png"
        },
        {
          "label": "@S05 场景空镜",
          "src": "media/img-ce567e7ef5b39a9c7b9c.jpg"
        },
        {
          "label": "@W05 兵器道具卡",
          "src": "media/img-c68ea865657b74cefb47.jpg"
        }
      ],
      "video": "https://github.com/aikingtai-ctrl/jintai-film-showcase/releases/download/media-v1/kungfu-echo-8masters--abc11134af22b61794a2.mp4",
      "thumb": "assets/shots/S05.jpg",
      "model": "seedance2.5",
      "params": "30s · 16:9 · 1280×720 60fps · taskId 2268 · jimeng_multimodal2video",
      "status": "已生成",
      "alts": [],
      "take": "P05徐向东｜慧能大师｜30秒"
    },
    {
      "id": "S06",
      "title": "P06 马毅 · 秦甲武者（30秒五幕跨空间打戏）",
      "start": 150,
      "duration": 30,
      "framing": "全景破局 → 躯干锁焦快拆 → 贴地破界闪击 → 仰角环绕双跟 → 终局俯冲拉镜",
      "camera": "0-3s 全景极速推镜锁焦 → 3-8s 横向跟移+躯干纵向锁焦 → 8-13s 贴地破界推镜 → 13-22s 仰角环绕双人同步跟 → 22-30s 绕身环移+俯角弧线拉镜",
      "lighting": "电影级高反差冷暖碰撞光影（ARRI Alexa Mini LF 35mm 变形宽银幕镜头质感）",
      "cast": [
        "马毅（饰 秦甲武者）"
      ],
      "sceneTag": "战国夯土城门火把窄巷 → 古战车木轮掩体区 → 城门烽火铜盆高台",
      "action": "【秦制八面青铜剑 · 窄巷盾甲冲撞 · 战车掩体 · 破甲斩戟】跨越「战国夯土城门火把窄巷 → 古战车木轮掩体区 → 城门烽火铜盆高台」三重物理空间边界，前3幕13秒快切破界，第4幕9秒纵向落差与环境即武器交互，第5幕8秒寸止爆发、残屑缓落归于寂静。",
      "picture": "绑定 @P06 人物卡 + @S06 场景卡 + @W06 兵器卡，每击必调≥2重物理反馈（兵刃火星+衣摆气流+环境器物崩裂）。",
      "dialogue": [],
      "dialogueText": "无对白（冷兵器交格火花嗡鸣、破空拳风棍风、木石器物崩裂与环境余响）",
      "sound": "金铁交鸣声、破空气流声、木石碎裂声、衣袍猎猎声",
      "notes": "画布 349 节点 kungfu_v2_video_06 · taskId 2269 · 一次直出 30 秒跨三空间动作长片。",
      "firstFramePrompt": "",
      "prompt": "《功夫·回响》马毅·秦甲武者（战国秦锐士什长 · 铁血冷兵器战神）。30秒，16:9，720p，写实功夫动作电影。第1张参考图（@image1）仅锁定主角面部骨相、妆造与服装，禁止复制白底、三视图拼版或文字；第2张参考图（@image2）锁定实拍环境建筑空间与光影（环境即武器，严禁凭空造景）；第3张参考图（@image3）锁定专属兵器与互动道具的材质、尺寸与结构。\n【Seedance 2.5 30秒一条直出·复合运镜总控提示词】\n电影级战国冷兵器历史战争动作大片，ARRI 35mm变形宽银幕镜头，苍凉暮色与炽烈火把高反差光影，绑定参考图@P06马毅饰秦甲武者、@S06战国夯土城门火把甬道、@W06秦制八面青铜剑与黑漆玄甲。\n【00-03s 手持高速破局跟拍：全景 → 极速推镜锁焦 → 贴身平行横移】战国夯土城门火把窄甬道内黄沙漫卷，身披黑漆牛皮札甲、头束偏髻的秦甲武者马毅目光如炬，右手锵然拔出秦制八面青铜长剑，剑刃划过火光映出冷冽寒芒，三名敌卒挺青铜长戈正面疾刺而来；\n【03-08s 躯干锁焦快拆镜：横向跟移 + 躯干纵向锁焦 → 贴身平行横移】马毅压低重心欺身切入，手中八面青铜剑紧贴长戈刃口高速滑削，青铜剑与青铜戈摩擦迸发出刺眼夺目的长串火星，马毅左臂黑漆护甲重磕戈杆，巨力将长戈震偏狠狠钉入右侧夯土城墙，震落大片黄土沙尘；\n【08-13s 贴地破界闪击镜：贴地跟移 → 高速推镜】面对封锁甬道的鹿角木拒马与持盾敌兵，马毅沉肩合身发起黑甲重撞，黑漆札甲甲叶铿锵作响，硬生生将鹿角木拒马撞得粉碎、木屑横飞，一举跨越防线物理边界突入内瓮城古战车掩体区；\n【13-22s 急速上摇借力跟拍：仰角推镜 → 急速上摇 + 双人同步跟】内瓮城中敌兵挥戈合围，马毅借古战车巨大木轮掩护旋身闪避，左脚猛踏战车车辕借纵向落差腾空跃起，双手持八面青铜剑由上而下雷霆劈落，剑光闪过当场斩断敌军铜戈木杆，顺势落地一脚踹翻旁侧木盾架，将两名敌兵连人带盾砸翻在地、滑出丈远；\n【22-30s 终局绕身俯冲拉镜：推镜 → 绕身环移 + 贴身平行横移 → 俯角全景弧线拉镜】马毅旋身进步冲上城门石阶，青铜剑剑尖挑翻阶前燃烧的生铁火盆，赤红木炭与万千火星如流星火雨般在空中炸开，热浪冲击波逼得残余敌兵兵刃脱手、连连震退；马毅于高台单膝跪地、双手拄八面青铜剑定格，身后的巍峨夯土城门穿透烟火清晰透出，火星缓落，画面归于寂静。\n\n【English Seedance 2.5 Prompt】\nCinematic 30s continuous Warring States historical war action sequence, ARRI 35mm anamorphic lens, fiery orange torchlight against cold twilight dust, anchored to @P06 Ma Yi as Qin Armored Warrior, @S06 Warring States Rammed-Earth Fortress Passage, @W06 Qin Eight-Faceted Bronze Sword & Black Lacquered Armor. [00-03s Camera: Wide shot -> Whip zoom lock-on -> Close parallel side-tracking] Inside a narrow rammed-earth fortress passage lit by roaring torches, Qin warrior Ma Yi in black lacquered leather lamellar armor and skewed topknot draws his eight-faceted Qin bronze sword with a metallic ring as three enemy soldiers charge with bronze halberds. [03-08s Camera: Lateral tracking + Torso vertical lock-on -> Close parallel slide] Ma Yi ducks low and slides his bronze sword along the incoming halberd shaft, grinding a trail of brilliant sparks off the bronze head before slamming his armored forearm against the pole, deflecting the weapon deep into the rammed-earth wall in a shower of yellow dirt. [08-13s Camera: Ground-skimming tracking -> High-speed push-in] Lowering his armored shoulder, Ma Yi charges straight through a wooden spike barricade, shattering the timber beams in a cloud of splinters as he crosses the physical boundary into the inner courtyard beside an ancient wooden war chariot. [13-22s Camera: Low-angle push-in -> Rapid tilt-up + Two-person synchronous tracking] Using the tall wooden chariot wheel as cover, Ma Yi steps onto the chariot axle to gain vertical height and leaps down with a two-handed bronze sword cleave that slices an enemy halberd shaft in two, then kicks a wooden shield rack over to knock two advancing soldiers off their feet in a cloud of dust. [22-30s Camera: Push-in -> Body orbit + Parallel slide -> High-angle arc pull-back] Charging up the stone steps, Ma Yi flicks his bronze sword to tip over a blazing iron brazier—sending a spectacular shower of glowing red embers and sparks exploding across the passage that forces the remaining foes to drop their weapons and stagger back; Ma Yi drops to one knee planting his bronze sword into the earth as the towering rammed-earth walls stand clear through the settling embers and the frame falls into silence.",
      "refs": [
        {
          "label": "@P06 人物造型卡",
          "src": "media/img-a1390cb33c31f62757ac.png"
        },
        {
          "label": "@S06 场景空镜",
          "src": "media/img-81e8de3758fbc4a02174.jpg"
        },
        {
          "label": "@W06 兵器道具卡",
          "src": "media/img-b7b5748bdba9e76d977c.jpg"
        }
      ],
      "video": "https://github.com/aikingtai-ctrl/jintai-film-showcase/releases/download/media-v1/kungfu-echo-8masters--29abe4891129b7bcfcc2.mp4",
      "thumb": "assets/shots/S06.jpg",
      "model": "seedance2.5",
      "params": "30s · 16:9 · 1280×720 60fps · taskId 2269 · jimeng_multimodal2video",
      "status": "已生成",
      "alts": [],
      "take": "P06马毅｜秦甲武者｜30秒"
    },
    {
      "id": "S07",
      "title": "P07 程亚霖 · 李教练（30秒五幕跨空间打戏）",
      "start": 180,
      "duration": 30,
      "framing": "全景破局 → 躯干锁焦快拆 → 贴地破界闪击 → 仰角环绕双跟 → 终局俯冲拉镜",
      "camera": "0-3s 全景极速推镜锁焦 → 3-8s 横向跟移+躯干纵向锁焦 → 8-13s 贴地破界推镜 → 13-22s 仰角环绕双人同步跟 → 22-30s 绕身环移+俯角弧线拉镜",
      "lighting": "电影级高反差冷暖碰撞光影（ARRI Alexa Mini LF 35mm 变形宽银幕镜头质感）",
      "cast": [
        "程亚霖（饰 李教练）"
      ],
      "sceneTag": "当代专业武术训练馆实木赛场中心 → 木人桩与兵器架区 → 落地窗阳光走廊边",
      "action": "【白蜡杆听劲 · 木人桩寸劲 · 摔法借力 · 名师身教】跨越「当代专业武术训练馆实木赛场中心 → 木人桩与兵器架区 → 落地窗阳光走廊边」三重物理空间边界，前3幕13秒快切破界，第4幕9秒纵向落差与环境即武器交互，第5幕8秒寸止爆发、残屑缓落归于寂静。",
      "picture": "绑定 @P07 人物卡 + @S07 场景卡 + @W07 兵器卡，每击必调≥2重物理反馈（兵刃火星+衣摆气流+环境器物崩裂）。",
      "dialogue": [],
      "dialogueText": "无对白（冷兵器交格火花嗡鸣、破空拳风棍风、木石器物崩裂与环境余响）",
      "sound": "金铁交鸣声、破空气流声、木石碎裂声、衣袍猎猎声",
      "notes": "主视频为「中段局部修复合成版」（将 8.17–21.55s 替换为 taskId 2340 蓝衣护具陪练员对练重做段，解决原片中段动作衔接瑕疵）。",
      "firstFramePrompt": "",
      "prompt": "《功夫·回响》程亚霖·李教练（当代国家级武术总教练 · 传武实战名家）。30秒，16:9，720p，写实功夫动作电影。第1张参考图（@image1）仅锁定主角面部骨相、妆造与服装，禁止复制白底、三视图拼版或文字；第2张参考图（@image2）锁定实拍环境建筑空间与光影（环境即武器，严禁凭空造景）；第3张参考图（@image3）锁定专属兵器与互动道具的材质、尺寸与结构。\n【Seedance 2.5 30秒一条直出·复合运镜总控提示词】\n电影级当代写实武术动作大片，ARRI 35mm电影镜头，傍晚金色夕阳光束穿透高窗照亮悬浮镁粉，绑定参考图@P07程亚霖饰李教练、@S07当代专业武术训练馆、@W07白蜡杆与木人桩训练器材。\n【00-03s 手持高速破局跟拍：全景 → 极速推镜锁焦 → 贴身平行横移】当代专业武术训练馆内夕阳金光斜洒，身穿深藏青中式立领教练服、白色武术鞋的李教练程亚霖沉稳立于实木地板蓝线边，两名年轻队员一持脚靶一持短棍疾步冲来，李教练眼神锐利笃定、双肩微沉完成蓄力；\n【03-08s 躯干锁焦快拆镜：横向跟移 + 躯干纵向锁焦 → 贴身平行横移】首名队员凌空跃起一记重型侧踹直取胸膛，李教练半步侧闪，双手施展传统听劲顺势搭住脚靶边缘旋转引化，借力将队员甩向场边重型皮沙袋，队员撞上沙袋使其剧烈摇摆，震起空气中一团白色防滑镁粉；\n【08-13s 贴地破界闪击镜：贴地跟移 → 高速推镜】第二名队员挥短棍当头劈下，李教练足底在实木地板轻巧滑步，跨越赛场蓝色边界线退入场边器械区，右脚足尖一勾实木兵器架底座，一根柔韧修长的白蜡杆应声弹起落入掌心；\n【13-22s 仰角推镜环绕双跟：仰角推镜 → 双人同步跟 + 轨迹跟拍】在场边传统木人桩与兵器架之间的走廊内，李教练左手连环拍击木人桩桩手借力变向，木人桩发出清脆密集的木击声，李教练右手白蜡杆施展传武大枪“拦、拿、扎”绝技，杆身因瞬间寸劲抖动产生肉眼可见的弹性弧光残影与破空鞭响，一杆精准敲击队员护手，短棍当场脱手旋转飞落；\n【22-30s 终局绕身俯冲拉镜：推镜 → 绕身环移 + 贴身平行横移 → 俯冲贴脸极速推进】首名队员再次近身扑上，李教练顺势将白蜡杆滑入身侧兵器架卡槽，欺身切入内门施展干净利落的中国式快摔，将队员稳稳过肩护摔在蓝色软垫上，软垫震颤激起一圈金色夕阳下的镁粉气浪，李教练右拳在队员胸前精准寸止，随即化拳为掌温和伸手将其拉起，身后武馆高窗与木人桩穿透微尘清晰透出，画面归于寂静。\n\n【English Seedance 2.5 Prompt】\nCinematic 30s continuous contemporary Chinese Wushu action sequence, ARRI 35mm lens, golden-hour afternoon sunlight shafts piercing suspended chalk dust in a training hall, anchored to @P07 Cheng Yalin as Coach Li, @S07 Contemporary Wushu Training Hall, @W07 Waxwood Staff, Wooden Dummy & Kicking Pads. [00-03s Camera: Wide shot -> Whip zoom lock-on -> Close parallel side-tracking] On the sprung hardwood floor of a professional Wushu gymnasium bathed in golden sunset light, Coach Li (Cheng Yalin) in a dark navy stand-collar track jacket and white martial arts shoes stands calmly at the blue boundary line as two young athletes rush in with a kicking pad and training baton. [03-08s Camera: Lateral tracking + Torso vertical lock-on -> Close parallel slide] The first athlete launches a flying side-kick; Coach Li pivots and uses circular Taiji listening-energy hands to redirect the pad's momentum, sending the athlete crashing into a heavy hanging leather sandbag which swings violently in a cloud of white chalk dust. [08-13s Camera: Ground-skimming tracking -> High-speed push-in] As the second athlete swings a training baton, Coach Li glides backward across the blue court boundary line into the side equipment zone, flicking the base of a wooden weapon rack with his toe to launch a flexible white waxwood staff into his hand. [13-22s Camera: Low-angle push-in orbit -> Two-person synchronous tracking + Trajectory follow] Weaving beside a traditional wooden dummy, Coach Li slaps the dummy's wooden arms with his left hand to pivot while his right hand whips the waxwood staff in classic intercept-lock-thrust spear techniques; the flexible staff flexes in a visible white blur with a sharp sonic crack, rapping the athlete's wrist guard and sending the baton flying across the floor. [22-30s Camera: Push-in -> Body orbit + Parallel slide -> High-speed dive close-up] As the first athlete lunges back in, Coach Li slots the waxwood staff smoothly back into the rack, steps inside, and executes a crisp Chinese Shuai Jiao shoulder throw onto the blue crash mat—sending a ring of golden backlit chalk dust into the air; Coach Li halts his follow-up fist one inch from the student's chest, then smiles warmly and extends an open hand to help him up as the sunlit gymnasium falls into quiet stillness.",
      "refs": [
        {
          "label": "@P07 人物造型卡",
          "src": "media/img-ee729c0c3a5b1bc4c7ea.png"
        },
        {
          "label": "@S07 场景空镜",
          "src": "media/img-f092feb05952423cffbc.jpg"
        },
        {
          "label": "@W07 兵器道具卡",
          "src": "media/img-b314d70546995a3ccf26.jpg"
        }
      ],
      "video": "https://github.com/aikingtai-ctrl/jintai-film-showcase/releases/download/media-v1/kungfu-echo-8masters--fd6d741b272b77418486.mp4",
      "thumb": "assets/shots/S07.jpg",
      "model": "seedance2.5",
      "params": "30s · 16:9 · 1280×720 60fps · taskId 2270 + 2340 · jimeng_multimodal2video",
      "status": "已生成",
      "alts": [
        {
          "label": "原版直出 30s（taskId 2270）",
          "src": "https://github.com/aikingtai-ctrl/jintai-film-showcase/releases/download/media-v1/kungfu-echo-8masters--cc0bd197c6c66f2ca38c.mp4"
        },
        {
          "label": "中段局部重做 14s（taskId 2340）",
          "src": "https://github.com/aikingtai-ctrl/jintai-film-showcase/releases/download/media-v1/kungfu-echo-8masters--89e5c5e6971b2b774a49.mp4"
        }
      ],
      "take": "P07程亚霖｜李教练｜30秒"
    },
    {
      "id": "S08",
      "title": "P08 康凯 · 张飞（30秒五幕跨空间打戏）",
      "start": 210,
      "duration": 30,
      "framing": "全景破局 → 躯干锁焦快拆 → 贴地破界闪击 → 仰角环绕双跟 → 终局俯冲拉镜",
      "camera": "0-3s 全景极速推镜锁焦 → 3-8s 横向跟移+躯干纵向锁焦 → 8-13s 贴地破界推镜 → 13-22s 仰角环绕双人同步跟 → 22-30s 绕身环移+俯角弧线拉镜",
      "lighting": "电影级高反差冷暖碰撞光影（ARRI Alexa Mini LF 35mm 变形宽银幕镜头质感）",
      "cast": [
        "康凯（饰 张飞）"
      ],
      "sceneTag": "三国当阳长坂坡乱石滩桥头碑 → 古木桥面中段 → 断崖桥栏激流之上",
      "action": "【丈八蛇矛 · 横矛立马 · 暴喝退敌 · 拆桥断水】跨越「三国当阳长坂坡乱石滩桥头碑 → 古木桥面中段 → 断崖桥栏激流之上」三重物理空间边界，前3幕13秒快切破界，第4幕9秒纵向落差与环境即武器交互，第5幕8秒寸止爆发、残屑缓落归于寂静。",
      "picture": "绑定 @P08 人物卡 + @S08 场景卡 + @W08 兵器卡，每击必调≥2重物理反馈（兵刃火星+衣摆气流+环境器物崩裂）。",
      "dialogue": [],
      "dialogueText": "无对白（冷兵器交格火花嗡鸣、破空拳风棍风、木石器物崩裂与环境余响）",
      "sound": "金铁交鸣声、破空气流声、木石碎裂声、衣袍猎猎声",
      "notes": "画布 349 节点 kungfu_v2_video_08 · taskId 2271 · 一次直出 30 秒跨三空间动作长片。",
      "firstFramePrompt": "",
      "prompt": "《功夫·回响》康凯·张飞（燕人张翼德 · 当阳长坂坡万夫莫敌）。30秒，16:9，720p，写实功夫动作电影。第1张参考图（@image1）仅锁定主角面部骨相、妆造与服装，禁止复制白底、三视图拼版或文字；第2张参考图（@image2）锁定实拍环境建筑空间与光影（环境即武器，严禁凭空造景）；第3张参考图（@image3）锁定专属兵器与互动道具的材质、尺寸与结构。\n【Seedance 2.5 30秒一条直出·复合运镜总控提示词】\n电影级三国史诗战争动作大片，ARRI 35mm变形宽银幕镜头，阴云裂隙低角度苍金阳光与漫天秋日战尘，绑定参考图@P08康凯饰张飞、@S08三国长坂坡古木桥头、@W08丈八点钢蛇矛与兽面吞肩重铠。\n【00-03s 手持高速破局跟拍：全景 → 极速推镜锁焦 → 贴地仰拍】当阳长坂坡古木桥头战尘滚滚，豹头环眼、满腮钢针虬髯炸起的张飞康凯身披乌金兽面吞肩重铠、暗红披风，双手紧握一丈八尺长的点钢蛇矛立于桥头石碑前，矛尾铜鐏重顿地面震裂乱石，双目圆睁威慑冲来的曹军先锋；\n【03-08s 躯干锁焦快拆镜：横向跟移 + 躯干纵向锁焦 → 贴身平行横移】两名曹军先锋挺铁枪左右齐刺，张飞腰胯发力猛旋丈八蛇矛，波浪形精钢矛刃精准绞住两杆铁枪枪头，碰撞瞬间迸发大片赤金火星，张飞双臂暴起发力向上猛挑，咔嚓巨响中两杆铁枪枪杆同时折断、旋转飞上半空；\n【08-13s 贴地破界闪击镜：贴地跟移 → 高速推镜】张飞垫步前冲，手中丈八蛇矛如黑龙摆尾横扫桥头鹿角木障，沉重木障当场被砸得粉碎，漫天木块砸向追兵，张飞暗红披风迎风狂卷，大步跨越桥头石碑物理边界踏上横跨深涧的长坂古木桥面；\n【13-22s 仰角推镜环绕双跟：仰角推镜 → 双人同步跟 + 轨迹跟拍】狭窄古木桥面上四名曹兵持刀盾逼近，张飞大步横向推进施展蛇矛绝学，矛身挥舞带出凌厉弧光残影与狂暴破空气流，第一矛正面劈碎曹兵包铁木盾，第二矛大回旋横扫震飞四人手中环首刀，矛杆余威重重轰在古木桥原木护栏上，碗口粗的木桥栏应声断裂、翻滚坠入桥下湍急河谷炸起白浪；\n【22-30s 终局仰角环绕拉镜：推镜 → 绕身环移 + 贴身平行横移 → 俯角全景弧线拉镜】张飞傲立于长坂桥断栏中心，右手高举丈八蛇矛狠狠顿入古木桥板，胸腔鼓荡仰天发出一声雷霆暴喝，肉眼可见的环形气流冲击波裹挟着桥面黄沙、落叶与断木残屑向四周轰然席卷，桥头曹军尽数震退踉跄、骇然止步，身后的苍茫松林与断崖激流穿透战尘清晰透出，尘雾缓落，画面归于寂静。\n\n【English Seedance 2.5 Prompt】\nCinematic 30s continuous Three Kingdoms epic war action sequence, ARRI 35mm anamorphic lens, dramatic low-angle golden sunlight breaking through storm clouds over swirling battle dust, anchored to @P08 Kang Kai as Zhang Fei, @S08 Changban Ancient Wooden Bridgehead, @W08 Eighteen-Foot Serpent Spear & Beast-Mask Heavy Armor. [00-03s Camera: Wide shot -> Whip zoom lock-on -> Low-angle tracking] At the stone marker of Changban Bridge shrouded in autumn battle dust, fierce bearded general Zhang Fei (Kang Kai) in black-gold beast-mask heavy armor and dark red cape grips his eighteen-foot wavy-bladed Serpent Spear, slamming its bronze butt cap onto the ground to crack the stones as enemy vanguard spearmen charge. [03-08s Camera: Lateral tracking + Torso vertical lock-on -> Close parallel side-tracking] Two enemy spearmen thrust simultaneously; Zhang Fei twists his wavy steel Serpent Spear to lock both iron spearheads in a shower of golden sparks, then heaves upward with explosive power—snapping both wooden spear shafts in mid-air. [08-13s Camera: Ground-skimming tracking -> High-speed push-in] Advancing with a roar, Zhang Fei sweeps his heavy Serpent Spear through a wooden spike barricade at the bridge entrance, blasting timber fragments into the pursuers as his red cape billows and he strides across the bridgehead boundary onto the ancient timber bridge spanning the rushing gorge. [13-22s Camera: Low-angle push-in orbit -> Two-person synchronous tracking + Trajectory follow] On the narrow wooden bridge planks, four shield-bearing soldiers press in; Zhang Fei unleashes wide sweeping arcs with his Serpent Spear, the heavy dark-wood shaft creating powerful wind gusts that smash a wooden shield to splinters, disarm four ring-pommel sabers in a metallic clatter, and cleave right through the thick log bridge railing—sending timber plunging into the roaring river below. [22-30s Camera: Push-in -> Body orbit + Parallel slide -> High-angle epic arc pull-back] Standing alone at the center of the broken bridge, Zhang Fei plants his Serpent Spear deep into the timber planks and unleashes a earth-shaking roar; a visible shockwave of dust, autumn leaves, and wood splinters blasts outward across the bridge while river waves crash against the cliff below, halting the terrified enemy ranks in their tracks; the pine forest and misty gorge stand crystal clear through the settling dust as the frame falls into epic silence.",
      "refs": [
        {
          "label": "@P08 人物造型卡",
          "src": "media/img-e99a8f840b8db481cae6.png"
        },
        {
          "label": "@S08 场景空镜",
          "src": "media/img-df565ff571e8b7fb93eb.jpg"
        },
        {
          "label": "@W08 兵器道具卡",
          "src": "media/img-48f0fbe4496140853e60.jpg"
        }
      ],
      "video": "https://github.com/aikingtai-ctrl/jintai-film-showcase/releases/download/media-v1/kungfu-echo-8masters--b177b544cb8df4b9e742.mp4",
      "thumb": "assets/shots/S08.jpg",
      "model": "seedance2.5",
      "params": "30s · 16:9 · 1280×720 60fps · taskId 2271 · jimeng_multimodal2video",
      "status": "已生成",
      "alts": [],
      "take": "P08康凯｜张飞｜30秒"
    }
  ],
  "generation": {
    "model": "Seedance 2.5（jimeng_multimodal2video）",
    "params": [
      {
        "k": "画布",
        "v": "AI Video Canvas #349（8 个主视频节点 + P03/P04/P07 精修节点）"
      },
      {
        "k": "单镜时长",
        "v": "30 秒 × 8 镜 = 240 秒（4 分钟）"
      },
      {
        "k": "分辨率与帧率",
        "v": "1280×720 · 60fps · 16:9"
      },
      {
        "k": "绑定资产",
        "v": "每镜 3–4 张参考图（@P人物 + @S场景 + @W兵器 + 独立对手定妆）"
      }
    ],
    "notes": [
      "当单人人物设定卡引起對手与主角撞脸时（如 P04 王赤），增加一张明确不同服装与发型的独立对手全身图（如戴斗笠或束发短打的漕帮刀客）可根治克隆脸现象。",
      "当冷峻光头反派角色因多视图白底卡片触发平台审核拦截时（如 P03 杜玉明），改用去字去白边的电影实景定妆照并将“点穴/杀伤”全部改写为“指环弹断钢剑、掌风震翻香炉”即可一次通过。"
    ]
  },
  "deliverables": [
    {
      "name": "P01 计春华 · 段延庆（30秒五幕跨空间打戏）",
      "note": "30s · 16:9 · 1280×720 60fps · taskId 2264 · jimeng_multimodal2video",
      "src": "https://github.com/aikingtai-ctrl/jintai-film-showcase/releases/download/media-v1/kungfu-echo-8masters--a76ce9353247491b8325.mp4"
    },
    {
      "name": "P02 董志华 · 油炸鬼（30秒五幕跨空间打戏）",
      "note": "30s · 16:9 · 1280×720 60fps · taskId 2265 · jimeng_multimodal2video",
      "src": "https://github.com/aikingtai-ctrl/jintai-film-showcase/releases/download/media-v1/kungfu-echo-8masters--9eac8428a5a4de09a281.mp4"
    },
    {
      "name": "P03 杜玉明 · 逍遥王（30秒五幕跨空间打戏）",
      "note": "30s · 16:9 · 1280×720 60fps · taskId 2343 · jimeng_multimodal2video",
      "src": "https://github.com/aikingtai-ctrl/jintai-film-showcase/releases/download/media-v1/kungfu-echo-8masters--f62b4b8051d70c8e7fd3.mp4"
    },
    {
      "name": "P04 王赤 · 黑沙掌传人（30秒五幕跨空间打戏）",
      "note": "30s · 16:9 · 1280×720 60fps · taskId 2267 + 2341 · jimeng_multimodal2video",
      "src": "https://github.com/aikingtai-ctrl/jintai-film-showcase/releases/download/media-v1/kungfu-echo-8masters--f5643f8bb815bdff2e08.mp4"
    },
    {
      "name": "P05 徐向东 · 慧能大师（30秒五幕跨空间打戏）",
      "note": "30s · 16:9 · 1280×720 60fps · taskId 2268 · jimeng_multimodal2video",
      "src": "https://github.com/aikingtai-ctrl/jintai-film-showcase/releases/download/media-v1/kungfu-echo-8masters--abc11134af22b61794a2.mp4"
    },
    {
      "name": "P06 马毅 · 秦甲武者（30秒五幕跨空间打戏）",
      "note": "30s · 16:9 · 1280×720 60fps · taskId 2269 · jimeng_multimodal2video",
      "src": "https://github.com/aikingtai-ctrl/jintai-film-showcase/releases/download/media-v1/kungfu-echo-8masters--29abe4891129b7bcfcc2.mp4"
    },
    {
      "name": "P07 程亚霖 · 李教练（30秒五幕跨空间打戏）",
      "note": "30s · 16:9 · 1280×720 60fps · taskId 2270 + 2340 · jimeng_multimodal2video",
      "src": "https://github.com/aikingtai-ctrl/jintai-film-showcase/releases/download/media-v1/kungfu-echo-8masters--fd6d741b272b77418486.mp4"
    },
    {
      "name": "P08 康凯 · 张飞（30秒五幕跨空间打戏）",
      "note": "30s · 16:9 · 1280×720 60fps · taskId 2271 · jimeng_multimodal2video",
      "src": "https://github.com/aikingtai-ctrl/jintai-film-showcase/releases/download/media-v1/kungfu-echo-8masters--b177b544cb8df4b9e742.mp4"
    },
    {
      "name": "AI Video Canvas · 画布 349",
      "note": "《功夫·回响》八人 30 秒打戏工程画布",
      "src": ""
    }
  ]
});
