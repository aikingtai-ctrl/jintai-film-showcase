window.registerProject({
  "id": "pegasus-comedy-recap-100s",
  "title": "《飞驰人生》爆笑喜剧 AI 解说成片｜100秒",
  "subtitle": "真片实拍 B 机 5090 超分净版 + 12 张高清剧照 · A 机 Breeze-TTS-2 脱口秀解说 · 整轨摇滚管弦配乐",
  "logline": "用喜剧脱口秀口吻拆解韩寒赛车电影《飞驰人生》张弛复出、拉赞助闹剧与巴音布鲁克魔鬼赛道的燃泪全过程：A 机 H100 Breeze-TTS-2 一气呵成喜剧旁白 + MiniMax Music 3 整轨摇滚管弦闪避混音 + B 机 RTX 5090 超分无台标 1080p 蒙太奇精剪。",
  "date": "2026-11-13",
  "tags": [
    "AI解说",
    "喜剧配音",
    "Breeze-TTS",
    "Music 3",
    "B机5090超分",
    "16:9",
    "已生成"
  ],
  "model": "A 机 Breeze-TTS-2 + MiniMax Music 3 + B 机 RTX 5090 2× 超分",
  "modelShort": "Breeze-TTS + 实拍超分",
  "poster": "media/img-06561f2c16135285e8e7.jpg",
  "film": {
    "src": "https://github.com/aikingtai-ctrl/jintai-film-showcase/releases/download/media-v1/pegasus-comedy-recap-100s--d51b106ff3371922483c.mp4",
    "duration": 99.565,
    "width": 1920,
    "height": 1080,
    "fps": "30"
  },
  "meta": {
    "shots": 12,
    "generated": 1,
    "durationSec": 99.565,
    "resolution": "1920×1080",
    "fps": "30",
    "aspect": "16:9",
    "style": "影院级喜剧影视解说：1080p 宽银幕无台标实拍蒙太奇 × 情绪节奏卡点配音 × 侧链闪避摇滚交响 BGM。"
  },
  "synopsis": [
    "全片 12 个故事章节（99.57s，31 段实拍卡点蒙太奇）：从夜市颠勺卖炒饭的过气五连冠车神、科目二把教练车漂到吐，到 KTV 陪煤老板热舞拉赞助却因纯爱崩盘、领航员赛前摔断腿后孤身凭记忆死磕巴音布鲁克 1,462 个弯道，喜剧反差与燃泪高潮在百秒内完整闭合。",
    "音画端到端配合：对原片真片素材经 B 机 RTX 5090 2× 超分去噪消除台标，A 机 Breeze-TTS-2 注入 [轻笑] 等副语言表演事件，再用 MiniMax Music 3 一次性合成 100 秒整轨摇滚管弦 BGM 并执行人声侧链闪避（成片响度 -13.8 LUFS）。"
  ],
  "concept": {
    "rules": [
      "喜剧节奏三拍法：每 6–10 秒设置一次反转笑点或燃点卡拍，零冷场水词。",
      "整轨一次生成配乐 + 侧链闪避：绝不拼接分段 BGM 片段，旁白进声自动避让。",
      "无台标宽银幕净版：原片实拍片段经 B 机 RTX 5090 超分并清理四角水印干扰。"
    ],
    "directorMethod": "以解说台本时间轴为骨架锁定 12 节起承转合，先定 Breeze-TTS-2 脱口秀干声节奏，再由 Music 3 生成摇滚管弦整轨并卡点裁剪 31 段真片与剧照素材。"
  },
  "pipeline": [
    {
      "stage": "① 原片素材净版超分",
      "tool": "金泰 B 机 4×RTX 5090 + 12 张高清剧照",
      "note": "清理台标并 2× 超分统一至 1920×1080 @ 30fps。"
    },
    {
      "stage": "② 脱口秀旁白配音",
      "tool": "A 机 Breeze-TTS-2 (:7868)",
      "note": "带副语言停顿与轻笑反应生成 12 节高动态解说干声。"
    },
    {
      "stage": "③ 整轨配乐与闪避混音",
      "tool": "MiniMax Music 3 + FFmpeg EBU R128",
      "note": "一次性生成全轨摇滚管弦乐并自动闪避，母带响度 -13.8 LUFS。"
    },
    {
      "stage": "④ 31 段卡点成片封装",
      "tool": "FFmpeg 1080p30 + 十二镜抽检",
      "note": "输出成片 MP4 与 12 镜抽帧检视板。"
    }
  ],
  "props": [
    {
      "id": "QC-12",
      "name": "十二镜真片成片抽帧检视板",
      "desc": "覆盖 S01–S12 全流程的实拍成片抽帧核验图。",
      "image": "media/img-2fc46dded79f15e47c03.jpg"
    }
  ],
  "shots": [
    {
      "id": "S01",
      "title": "01 · 车神卖炒饭",
      "start": 0,
      "duration": 6.73,
      "framing": "16:9 宽银幕真片蒙太奇 + 高清原片剧照互切",
      "camera": "B 机 RTX 5090 2× 超分去台标净版实拍镜头",
      "action": "见过五连冠拉力赛车神，去夜市颠大勺卖炒饭吗？张弛禁赛五年，硬是把方向盘盘成了铁锅铲。",
      "dialogue": [
        {
          "who": "脱口秀解说 (Breeze-TTS-2)",
          "text": "见过五连冠拉力赛车神，去夜市颠大勺卖炒饭吗？张弛禁赛五年，硬是把方向盘盘成了铁锅铲。"
        }
      ],
      "dialogueText": "见过五连冠拉力赛车神，去夜市颠大勺卖炒饭吗？张弛禁赛五年，硬是把方向盘盘成了铁锅铲。",
      "sound": "MiniMax Music 3 摇滚管弦配乐侧链闪避 (-13.8 LUFS)",
      "refs": [
        {
          "label": "原片高清剧照",
          "src": "media/img-1ed59c9acbeef0bcd440.jpg"
        }
      ],
      "video": "https://github.com/aikingtai-ctrl/jintai-film-showcase/releases/download/media-v1/pegasus-comedy-recap-100s--d51b106ff3371922483c.mp4",
      "thumb": "assets/shots/S01.jpg",
      "model": "B机 RTX 5090 Topaz 2× + A机 Breeze-TTS-2 + Music 3",
      "params": "00.00s–06.73s · 1920×1080 @ 30fps",
      "status": "已合入成片"
    },
    {
      "id": "S02",
      "title": "02 · 科目二漂移",
      "start": 6.73,
      "duration": 6.16,
      "framing": "16:9 宽银幕真片蒙太奇 + 高清原片剧照互切",
      "camera": "B 机 RTX 5090 2× 超分去台标净版实拍镜头",
      "action": "好不容易解禁复出，第一关先重考驾照！他把桑塔纳教练车开成极限漂移，把教练晃得当场狂吐。",
      "dialogue": [
        {
          "who": "脱口秀解说 (Breeze-TTS-2)",
          "text": "好不容易解禁复出，第一关先重考驾照！他把桑塔纳教练车开成极限漂移，把教练晃得当场狂吐。"
        }
      ],
      "dialogueText": "好不容易解禁复出，第一关先重考驾照！他把桑塔纳教练车开成极限漂移，把教练晃得当场狂吐。",
      "sound": "MiniMax Music 3 摇滚管弦配乐侧链闪避 (-13.8 LUFS)",
      "refs": [
        {
          "label": "原片高清剧照",
          "src": "media/img-685eecbdcfc7686c0fe4.jpg"
        }
      ],
      "video": "",
      "thumb": "assets/shots/S02.jpg",
      "model": "B机 RTX 5090 Topaz 2× + A机 Breeze-TTS-2 + Music 3",
      "params": "06.73s–12.89s · 1920×1080 @ 30fps",
      "status": "已合入成片"
    },
    {
      "id": "S03",
      "title": "03 · 穷剩铁架子",
      "start": 12.89,
      "duration": 7.7,
      "framing": "16:9 宽银幕真片蒙太奇 + 高清原片剧照互切",
      "camera": "B 机 RTX 5090 2× 超分去台标净版实拍镜头",
      "action": "驾照到手，打开仓库一看，好家伙，赛车只剩个光秃秃的空铁架！修车要一百万，兜里比脸还干净。",
      "dialogue": [
        {
          "who": "脱口秀解说 (Breeze-TTS-2)",
          "text": "驾照到手，打开仓库一看，好家伙，赛车只剩个光秃秃的空铁架！修车要一百万，兜里比脸还干净。"
        }
      ],
      "dialogueText": "驾照到手，打开仓库一看，好家伙，赛车只剩个光秃秃的空铁架！修车要一百万，兜里比脸还干净。",
      "sound": "MiniMax Music 3 摇滚管弦配乐侧链闪避 (-13.8 LUFS)",
      "refs": [
        {
          "label": "原片高清剧照",
          "src": "media/img-2ba8f02e521952f63157.jpg"
        }
      ],
      "video": "",
      "thumb": "assets/shots/S03.jpg",
      "model": "B机 RTX 5090 Topaz 2× + A机 Breeze-TTS-2 + Music 3",
      "params": "12.89s–20.59s · 1920×1080 @ 30fps",
      "status": "已合入成片"
    },
    {
      "id": "S04",
      "title": "04 · 为赞助热舞",
      "start": 20.59,
      "duration": 6.38,
      "framing": "16:9 宽银幕真片蒙太奇 + 高清原片剧照互切",
      "camera": "B 机 RTX 5090 2× 超分去台标净版实拍镜头",
      "action": "为了拉赞助，老车神彻底豁出去了！陪着煤老板大哥在包厢里卖力热舞，大哥感动得一拍大腿，钱我出。",
      "dialogue": [
        {
          "who": "脱口秀解说 (Breeze-TTS-2)",
          "text": "为了拉赞助，老车神彻底豁出去了！陪着煤老板大哥在包厢里卖力热舞，大哥感动得一拍大腿，钱我出。"
        }
      ],
      "dialogueText": "为了拉赞助，老车神彻底豁出去了！陪着煤老板大哥在包厢里卖力热舞，大哥感动得一拍大腿，钱我出。",
      "sound": "MiniMax Music 3 摇滚管弦配乐侧链闪避 (-13.8 LUFS)",
      "refs": [
        {
          "label": "原片高清剧照",
          "src": "media/img-3a7ddd1ad86645b64e4d.jpg"
        }
      ],
      "video": "",
      "thumb": "assets/shots/S04.jpg",
      "model": "B机 RTX 5090 Topaz 2× + A机 Breeze-TTS-2 + Music 3",
      "params": "20.59s–26.97s · 1920×1080 @ 30fps",
      "status": "已合入成片"
    },
    {
      "id": "S05",
      "title": "05 · 纯爱变泡汤",
      "start": 26.97,
      "duration": 9.08,
      "framing": "16:9 宽银幕真片蒙太奇 + 高清原片剧照互切",
      "camera": "B 机 RTX 5090 2× 超分去台标净版实拍镜头",
      "action": "条件是把大哥暗恋女神的名字绣满胸口！[轻笑] 合着大哥是玩纯爱呀，结果女神跟人跑了，赞助当场泡汤。",
      "dialogue": [
        {
          "who": "脱口秀解说 (Breeze-TTS-2)",
          "text": "条件是把大哥暗恋女神的名字绣满胸口！[轻笑] 合着大哥是玩纯爱呀，结果女神跟人跑了，赞助当场泡汤。"
        }
      ],
      "dialogueText": "条件是把大哥暗恋女神的名字绣满胸口！[轻笑] 合着大哥是玩纯爱呀，结果女神跟人跑了，赞助当场泡汤。",
      "sound": "MiniMax Music 3 摇滚管弦配乐侧链闪避 (-13.8 LUFS)",
      "refs": [
        {
          "label": "原片高清剧照",
          "src": "media/img-392410e08e38870f2585.jpg"
        }
      ],
      "video": "",
      "thumb": "assets/shots/S05.jpg",
      "model": "B机 RTX 5090 Topaz 2× + A机 Breeze-TTS-2 + Music 3",
      "params": "26.97s–36.05s · 1920×1080 @ 30fps",
      "status": "已合入成片"
    },
    {
      "id": "S06",
      "title": "06 · 钞能力对手",
      "start": 36.05,
      "duration": 9.97,
      "framing": "16:9 宽银幕真片蒙太奇 + 高清原片剧照互切",
      "camera": "B 机 RTX 5090 2× 超分去台标净版实拍镜头",
      "action": "更扎心的是新任车王林臻东，年轻帅气家里真有矿！百万级顶配风洞赛车，偏偏人还特仗义，连槽点都挑不出。",
      "dialogue": [
        {
          "who": "脱口秀解说 (Breeze-TTS-2)",
          "text": "更扎心的是新任车王林臻东，年轻帅气家里真有矿！百万级顶配风洞赛车，偏偏人还特仗义，连槽点都挑不出。"
        }
      ],
      "dialogueText": "更扎心的是新任车王林臻东，年轻帅气家里真有矿！百万级顶配风洞赛车，偏偏人还特仗义，连槽点都挑不出。",
      "sound": "MiniMax Music 3 摇滚管弦配乐侧链闪避 (-13.8 LUFS)",
      "refs": [
        {
          "label": "原片高清剧照",
          "src": "media/img-79682a073debe3891a6c.jpg"
        }
      ],
      "video": "",
      "thumb": "assets/shots/S06.jpg",
      "model": "B机 RTX 5090 Topaz 2× + A机 Breeze-TTS-2 + Music 3",
      "params": "36.05s–46.02s · 1920×1080 @ 30fps",
      "status": "已合入成片"
    },
    {
      "id": "S07",
      "title": "07 · 孤身赴赛场",
      "start": 46.02,
      "duration": 9.46,
      "framing": "16:9 宽银幕真片蒙太奇 + 高清原片剧照互切",
      "camera": "B 机 RTX 5090 2× 超分去台标净版实拍镜头",
      "action": "好不容易凑齐破车拉去新疆，发车前领航员又摔断了腿！没有路书报弯道，上了悬崖赛道等于蒙眼狂飙。",
      "dialogue": [
        {
          "who": "脱口秀解说 (Breeze-TTS-2)",
          "text": "好不容易凑齐破车拉去新疆，发车前领航员又摔断了腿！没有路书报弯道，上了悬崖赛道等于蒙眼狂飙。"
        }
      ],
      "dialogueText": "好不容易凑齐破车拉去新疆，发车前领航员又摔断了腿！没有路书报弯道，上了悬崖赛道等于蒙眼狂飙。",
      "sound": "MiniMax Music 3 摇滚管弦配乐侧链闪避 (-13.8 LUFS)",
      "refs": [
        {
          "label": "原片高清剧照",
          "src": "media/img-26139925612cd8ed031f.jpg"
        }
      ],
      "video": "",
      "thumb": "assets/shots/S07.jpg",
      "model": "B机 RTX 5090 Topaz 2× + A机 Breeze-TTS-2 + Music 3",
      "params": "46.02s–55.48s · 1920×1080 @ 30fps",
      "status": "已合入成片"
    },
    {
      "id": "S08",
      "title": "08 · 魔鬼巴音布鲁克",
      "start": 55.48,
      "duration": 9.23,
      "framing": "16:9 宽银幕真片蒙太奇 + 高清原片剧照互切",
      "camera": "B 机 RTX 5090 2× 超分去台标净版实拍镜头",
      "action": "但张弛偏不认命！海拔四千米巴音布鲁克，一千四百六十二个魔鬼弯道，他全刻进脑子里，一个人油门踩到底。",
      "dialogue": [
        {
          "who": "脱口秀解说 (Breeze-TTS-2)",
          "text": "但张弛偏不认命！海拔四千米巴音布鲁克，一千四百六十二个魔鬼弯道，他全刻进脑子里，一个人油门踩到底。"
        }
      ],
      "dialogueText": "但张弛偏不认命！海拔四千米巴音布鲁克，一千四百六十二个魔鬼弯道，他全刻进脑子里，一个人油门踩到底。",
      "sound": "MiniMax Music 3 摇滚管弦配乐侧链闪避 (-13.8 LUFS)",
      "refs": [
        {
          "label": "原片高清剧照",
          "src": "media/img-a47782341af5d1170ad4.jpg"
        }
      ],
      "video": "",
      "thumb": "assets/shots/S08.jpg",
      "model": "B机 RTX 5090 Topaz 2× + A机 Breeze-TTS-2 + Music 3",
      "params": "55.48s–64.71s · 1920×1080 @ 30fps",
      "status": "已合入成片"
    },
    {
      "id": "S09",
      "title": "09 · 贴崖不踩刹",
      "start": 64.71,
      "duration": 10.04,
      "framing": "16:9 宽银幕真片蒙太奇 + 高清原片剧照互切",
      "camera": "B 机 RTX 5090 2× 超分去台标净版实拍镜头",
      "action": "没有领航员，他就拿命去切弯！外侧就是百米深渊，后轮半悬空贴着悬崖碎石横飞过去，全程连刹车都不带踩。",
      "dialogue": [
        {
          "who": "脱口秀解说 (Breeze-TTS-2)",
          "text": "没有领航员，他就拿命去切弯！外侧就是百米深渊，后轮半悬空贴着悬崖碎石横飞过去，全程连刹车都不带踩。"
        }
      ],
      "dialogueText": "没有领航员，他就拿命去切弯！外侧就是百米深渊，后轮半悬空贴着悬崖碎石横飞过去，全程连刹车都不带踩。",
      "sound": "MiniMax Music 3 摇滚管弦配乐侧链闪避 (-13.8 LUFS)",
      "refs": [
        {
          "label": "原片高清剧照",
          "src": "media/img-8282f2b0e427f2939928.jpg"
        }
      ],
      "video": "",
      "thumb": "assets/shots/S09.jpg",
      "model": "B机 RTX 5090 Topaz 2× + A机 Breeze-TTS-2 + Music 3",
      "params": "64.71s–74.75s · 1920×1080 @ 30fps",
      "status": "已合入成片"
    },
    {
      "id": "S10",
      "title": "10 · 破车碎纪录",
      "start": 74.75,
      "duration": 8.2,
      "framing": "16:9 宽银幕真片蒙太奇 + 高清原片剧照互切",
      "camera": "B 机 RTX 5090 2× 超分去台标净版实拍镜头",
      "action": "排气管炸裂，尾翼飞脱，转速表红线爆表！他就靠这辆草台班子破车，硬把顶级纪录干碎了零点几秒。",
      "dialogue": [
        {
          "who": "脱口秀解说 (Breeze-TTS-2)",
          "text": "排气管炸裂，尾翼飞脱，转速表红线爆表！他就靠这辆草台班子破车，硬把顶级纪录干碎了零点几秒。"
        }
      ],
      "dialogueText": "排气管炸裂，尾翼飞脱，转速表红线爆表！他就靠这辆草台班子破车，硬把顶级纪录干碎了零点几秒。",
      "sound": "MiniMax Music 3 摇滚管弦配乐侧链闪避 (-13.8 LUFS)",
      "refs": [
        {
          "label": "原片高清剧照",
          "src": "media/img-65b7d9b3823b5726965f.jpg"
        }
      ],
      "video": "",
      "thumb": "assets/shots/S10.jpg",
      "model": "B机 RTX 5090 Topaz 2× + A机 Breeze-TTS-2 + Music 3",
      "params": "74.75s–82.95s · 1920×1080 @ 30fps",
      "status": "已合入成片"
    },
    {
      "id": "S11",
      "title": "11 · 飞向晚霞",
      "start": 82.95,
      "duration": 7.88,
      "framing": "16:9 宽银幕真片蒙太奇 + 高清原片剧照互切",
      "camera": "B 机 RTX 5090 2× 超分去台标净版实拍镜头",
      "action": "可帅不过三秒，刹车彻底烧没了！赛车冲出悬崖飞向漫天晚霞，脚下踩着的，是他拼尽半生守住的尊严。",
      "dialogue": [
        {
          "who": "脱口秀解说 (Breeze-TTS-2)",
          "text": "可帅不过三秒，刹车彻底烧没了！赛车冲出悬崖飞向漫天晚霞，脚下踩着的，是他拼尽半生守住的尊严。"
        }
      ],
      "dialogueText": "可帅不过三秒，刹车彻底烧没了！赛车冲出悬崖飞向漫天晚霞，脚下踩着的，是他拼尽半生守住的尊严。",
      "sound": "MiniMax Music 3 摇滚管弦配乐侧链闪避 (-13.8 LUFS)",
      "refs": [
        {
          "label": "原片高清剧照",
          "src": "media/img-ff3497c500d99e234c75.jpg"
        }
      ],
      "video": "",
      "thumb": "assets/shots/S11.jpg",
      "model": "B机 RTX 5090 Topaz 2× + A机 Breeze-TTS-2 + Music 3",
      "params": "82.95s–90.83s · 1920×1080 @ 30fps",
      "status": "已合入成片"
    },
    {
      "id": "S12",
      "title": "12 · 飞驰人生",
      "start": 90.83,
      "duration": 8.73,
      "framing": "16:9 宽银幕真片蒙太奇 + 高清原片剧照互切",
      "camera": "B 机 RTX 5090 2× 超分去台标净版实拍镜头",
      "action": "你不是征服了这片土地，你只是战胜了对手！献给所有跌进泥里还在死磕的成年人，引擎一响，飞驰人生。",
      "dialogue": [
        {
          "who": "脱口秀解说 (Breeze-TTS-2)",
          "text": "你不是征服了这片土地，你只是战胜了对手！献给所有跌进泥里还在死磕的成年人，引擎一响，飞驰人生。"
        }
      ],
      "dialogueText": "你不是征服了这片土地，你只是战胜了对手！献给所有跌进泥里还在死磕的成年人，引擎一响，飞驰人生。",
      "sound": "MiniMax Music 3 摇滚管弦配乐侧链闪避 (-13.8 LUFS)",
      "refs": [
        {
          "label": "原片高清剧照",
          "src": "media/img-441336573c2c18811b8b.jpg"
        }
      ],
      "video": "",
      "thumb": "assets/shots/S12.jpg",
      "model": "B机 RTX 5090 Topaz 2× + A机 Breeze-TTS-2 + Music 3",
      "params": "90.83s–99.64s · 1920×1080 @ 30fps",
      "status": "已合入成片"
    }
  ],
  "generation": {
    "model": "A 机 Breeze-TTS-2 + MiniMax Music 3 + B 机 RTX 5090 超分",
    "params": [
      {
        "k": "视频规格",
        "v": "1920×1080 @ 30fps · H.264 + AAC"
      },
      {
        "k": "母带响度",
        "v": "-13.8 LUFS · 31 段实拍蒙太奇卡点"
      },
      {
        "k": "成片体积",
        "v": "66.12 MB · 99.565s"
      }
    ],
    "notes": [
      "已收录台本 03_飞驰人生_解说词与时间轴台本.md 全 12 节对应镜头与 12 张原片剧照。"
    ]
  },
  "deliverables": [
    {
      "name": "01_飞驰人生_爆笑喜剧解说成片_真片实拍1080P.mp4",
      "src": "https://github.com/aikingtai-ctrl/jintai-film-showcase/releases/download/media-v1/pegasus-comedy-recap-100s--d51b106ff3371922483c.mp4",
      "note": "99.565s · 1080p30 · 66.12 MB"
    },
    {
      "name": "04_十二镜真片成片抽帧检视板.jpg",
      "src": "media/img-2fc46dded79f15e47c03.jpg",
      "note": "十二镜真片成片抽帧检视板"
    }
  ]
});
