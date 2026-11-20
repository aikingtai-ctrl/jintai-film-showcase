window.registerProject({
  "id": "demo-night-keeper",
  "demo": true,
  "title": "夜守灯塔",
  "subtitle": "60 秒悬疑短片 · 8 镜 · 16:9 · Seedance 2.5 示例",
  "logline": "风暴夜，年轻的守塔人阿澜发现灯塔的光束照出了一艘三十年前沉没的船——船上有人在向她挥手。",
  "date": "2026-09-22",
  "tags": [
    "悬疑",
    "示例数据",
    "云端 API"
  ],
  "model": "Seedance 2.5（火山方舟 API）",
  "modelShort": "Seedance 2.5",
  "poster": "media/img-86181a29e02044a88e9c.svg",
  "film": {
    "src": "",
    "duration": 62,
    "width": 1280,
    "height": 720,
    "fps": 24
  },
  "meta": {
    "shots": 8,
    "durationSec": 62,
    "resolution": "1280×720",
    "fps": 24,
    "aspect": "16:9",
    "style": "live-action thriller, stormy night, cold teal moonlight against warm amber lamp light, rain-soaked textures, restrained handheld, film grain"
  },
  "synopsis": [
    "北方海岸，一座即将退役的老灯塔。守塔人阿澜在风暴夜例行巡视，灯塔光束扫过海面时，照出一艘不该存在的旧渔船——正是三十年前她父亲失踪时的那艘。",
    "她用信号灯发出询问，船上的人影回了同一组信号。阿澜决定划小艇出海。当她靠近时，船是空的，只有舵轮上系着她童年的红围巾。",
    "回头望去，灯塔顶室里站着一个人影，正替她守着那束光。"
  ],
  "concept": {
    "rules": [
      "所有超自然现象只用灯光、雾和声音表现：不出现鬼魂特写、不做发光特效。",
      "灯塔光束每 6 秒扫过一次，是全片的节拍器，每镜的动作都要踩在光束经过的瞬间。",
      "阿澜全程不说话，情绪只靠眼神和手；唯一的台词来自无线电。",
      "红围巾是唯一暖色高饱和物件，其他一切保持冷色低饱和。"
    ],
    "directorMethod": "单人物、单空间、单夜晚的极简悬疑：用重复的光束节拍制造期待，用一件道具（红围巾）替代解释。8 镜 × 6–10 秒，适配 Seedance 2.5 单条稳定动作窗口，镜内不切镜。",
    "structure": [
      {
        "label": "第一幕 例行巡视",
        "tc": "00:00–00:18",
        "note": "建立灯塔、风暴与阿澜的日常；光束第一次扫过海面，什么都没有。"
      },
      {
        "label": "第二幕 船",
        "tc": "00:18–00:40",
        "note": "光束第二次扫过，船出现；信号灯对答；阿澜决定出海。"
      },
      {
        "label": "第三幕 围巾",
        "tc": "00:40–01:02",
        "note": "空船、红围巾、回望灯塔顶室的人影。"
      }
    ]
  },
  "pipeline": [
    {
      "stage": "① 剧情与规则",
      "tool": "执行助手 + 导演",
      "note": "一句话故事 → 三幕结构 → 四条高概念规则（写进每条提示词的风格锁）。"
    },
    {
      "stage": "② 角色 / 场景资产",
      "tool": "图像模型出角色卡、场景多视角",
      "note": "阿澜三视图 + 灯塔顶室 / 礁岸两组场景锚定图；每张都标明硬锁与禁止漂移。"
    },
    {
      "stage": "③ 分镜（一镜一页）",
      "tool": "分镜表",
      "note": "景别、运镜、灯光、动作、对白、音效、首帧图提示词，全部逐镜落字。"
    },
    {
      "stage": "④ 首帧图",
      "tool": "图像模型（参考角色卡 + 场景图）",
      "note": "每镜先出首帧静帧，人工挑选后作为图生视频的输入。"
    },
    {
      "stage": "⑤ 视频生成",
      "tool": "Seedance 2.5 · 图生视频 + 参考图",
      "note": "720p，每条 6–10 秒，每镜 2 个种子；提示词写逐秒动作。"
    },
    {
      "stage": "⑥ 质检与挑条",
      "tool": "人工看片 + 帧差脚本",
      "note": "检查闪变 / 冻结 / 身份漂移 / 光束节拍是否对上；挑条后记录 seed。"
    },
    {
      "stage": "⑦ 声音与合成",
      "tool": "音效库 + 剪辑软件",
      "note": "风暴环境声、雾笛、无线电台词；灯塔光束音效每 6 秒一次；响度统一 −16 LUFS。"
    }
  ],
  "characters": [
    {
      "id": "CHR-01",
      "name": "阿澜",
      "role": "主角 · 守塔人，二十六岁",
      "image": "media/img-0c4d07be0c73573b5502.svg",
      "look": "短发贴耳，深绿防水雨衣，旧毛衣，橡胶靴；左手腕有一条褪色红绳。",
      "voiceZh": "无台词。呼吸声与脚步声即表演。",
      "locks": [
        "雨衣颜色固定深绿，不换成黄色",
        "不化妆、不出现耳饰",
        "红绳始终在左腕",
        "禁止：年龄漂移、发型变长、出现现代手机"
      ]
    },
    {
      "id": "CHR-02",
      "name": "船上的人影",
      "role": "神秘角色 · 只以剪影出现",
      "image": "media/img-0dcfb17092d6faf5d000.svg",
      "look": "宽檐帽、长雨披，始终背光成剪影；无面部细节。",
      "voiceZh": "无线电里一句：「灯还亮着吗？」（低沉、失真）",
      "locks": [
        "永远背光，不露脸",
        "只在光束扫过的 1 秒内可见",
        "不发光、不透明"
      ]
    }
  ],
  "sceneCards": [
    {
      "id": "SCN-01",
      "name": "灯塔顶室 · 风暴夜",
      "image": "media/img-6797810386d93d9785a6.svg",
      "desc": "环形玻璃顶室，中央是黄铜灯器，外圈铁栏走道；雨水顺玻璃流下，室内只有琥珀色灯光。",
      "rules": [
        "灯器每 6 秒转一圈，光束从画左扫向画右",
        "窗外永远是暗青色海面，看不见陆地灯火",
        "禁止：现代 LED、电脑屏幕"
      ],
      "refs": [
        "media/img-9d748aae2211e7a0b197.svg",
        "media/img-240fbbcd938917ea45d0.svg",
        "media/img-e6aca5079bc2f7cb551a.svg",
        "media/img-5a1a3cdd305b72c06357.svg"
      ]
    },
    {
      "id": "SCN-02",
      "name": "礁岸与海面 · 风暴夜",
      "image": "media/img-2255fd9df56ae9b93a69.svg",
      "desc": "黑色礁石、白色碎浪、远处一片灰雾；灯塔在画面深处，光束是唯一的光源。",
      "rules": [
        "旧渔船只出现在光束扫过的位置，其他时间隐入雾中",
        "小艇从画右下角出海，方向与光束一致"
      ],
      "refs": [
        "media/img-8adfad51bc9b2a7d1fd8.svg",
        "media/img-d126d79a0536815c22c2.svg"
      ]
    }
  ],
  "look": {
    "name": "LOOK-01 冷青月光 × 琥珀灯光",
    "palette": [
      {
        "name": "暗青海面",
        "hex": "#173a44"
      },
      {
        "name": "雾灰",
        "hex": "#8a969b"
      },
      {
        "name": "炭黑礁石",
        "hex": "#101214"
      },
      {
        "name": "琥珀灯光",
        "hex": "#d8952e"
      },
      {
        "name": "旧铜",
        "hex": "#7a5a2c"
      },
      {
        "name": "围巾红",
        "hex": "#b3252b"
      }
    ],
    "items": [
      {
        "label": "对比",
        "text": "高反差、低饱和；灯光处允许轻微过曝，其余黑位保留雨衣和礁石纹理。"
      },
      {
        "label": "镜头语法",
        "text": "24mm 建立空间，50mm 跟人物，85mm 只用于围巾特写；手持轻微晃动，不做大幅运镜。"
      },
      {
        "label": "材质",
        "text": "湿橡胶、旧黄铜、流水的玻璃、粗毛线、盐渍木头。"
      },
      {
        "label": "声音",
        "text": "风暴环境、雾笛、灯器转动的机械声（每 6 秒一次，是节拍器）、无线电底噪。"
      },
      {
        "label": "禁止漂移",
        "text": "鬼魂特写、发光特效、慢动作、彩色光、字幕。"
      }
    ]
  },
  "sequences": [
    {
      "title": "第一幕 · 例行巡视",
      "sceneTag": "@灯塔顶室",
      "shots": [
        "SH01",
        "SH02",
        "SH03"
      ]
    },
    {
      "title": "第二幕 · 船",
      "sceneTag": "@礁岸与海面",
      "shots": [
        "SH04",
        "SH05",
        "SH06"
      ]
    },
    {
      "title": "第三幕 · 围巾",
      "sceneTag": "@海面 → @灯塔顶室",
      "shots": [
        "SH07",
        "SH08"
      ]
    }
  ],
  "shots": [
    {
      "id": "SH01",
      "title": "光束扫海",
      "tc": "00:00–00:08",
      "start": 0,
      "duration": 8,
      "framing": "24mm 大远景",
      "camera": "固定机位，光束从左扫到右一次",
      "lighting": "只有灯塔光束；海面暗青，雨丝在光束里成银线",
      "cast": [
        "阿澜"
      ],
      "sceneTag": "@礁岸与海面",
      "action": "风暴夜的灯塔立在礁岸尽头，光束缓缓扫过海面，什么都没有；顶室里阿澜的剪影随光束转身。",
      "dialogue": [],
      "sound": "风暴、海浪拍礁；灯器转动的机械声一次",
      "notes": "第一次光束扫过必须是空海，为 SH04 的船留悬念。失败降级：去掉顶室剪影，只保留光束。",
      "refs": [
        {
          "label": "场景 SCN-02",
          "src": "media/img-8adfad51bc9b2a7d1fd8.svg"
        }
      ],
      "thumb": "media/img-a06163675ae9e24d404a.svg",
      "video": "",
      "seed": "20260922",
      "params": "720p · 8s · 图生视频 · cfg 默认",
      "firstFramePrompt": "24mm 大远景静帧：风暴夜，黑色礁岸尽头一座老灯塔，顶室亮着琥珀色灯光，光束正指向画左海面；暗青色海面与灰雾，雨丝在光束里可见；16:9 电影构图，真实材质，胶片颗粒。",
      "prompt": "Live-action thriller, stormy night on a northern coast. A wide 24mm static shot: an old stone lighthouse stands at the end of a black rocky shore, its top room glowing warm amber, rain streaking through the beam. From 0 to 2 seconds the beam points to the far left over dark teal waves. From 2 to 7 seconds the beam sweeps slowly and evenly from left to right across the empty sea, silver rain threads lighting up inside it, mist rolling low over the water. In the top room a small silhouette of a young woman in a raincoat turns with the beam. The shot ends with the beam pointing right and the sea still empty. Cold teal moonlight against warm amber lamp light, rain-soaked textures, restrained contrast, film grain. Ambient: storm wind, waves breaking on rock, one slow mechanical rotation of the lamp gear."
    },
    {
      "id": "SH02",
      "title": "巡视",
      "tc": "00:08–00:14",
      "start": 8,
      "duration": 6,
      "framing": "50mm 中景",
      "camera": "手持跟拍，跟阿澜绕灯器走半圈",
      "lighting": "琥珀主光来自灯器，脸部一明一暗交替",
      "cast": [
        "阿澜"
      ],
      "sceneTag": "@灯塔顶室",
      "action": "阿澜提着油壶绕黄铜灯器巡视，手指擦过玻璃上的水汽，光束经过时她眯眼避光。",
      "dialogue": [],
      "sound": "脚步踩铁栏、油壶轻碰、灯器转动声",
      "notes": "建立阿澜的熟练与孤独。红绳要在左腕入画一次。",
      "refs": [
        {
          "label": "阿澜",
          "src": "media/img-4f6474ddd16dfb59c3fc.svg"
        },
        {
          "label": "场景 SCN-01",
          "src": "media/img-9d748aae2211e7a0b197.svg"
        }
      ],
      "thumb": "media/img-e4058572f77332e6f91b.svg",
      "video": "",
      "seed": "20260923",
      "params": "720p · 6s · 图生视频 + 角色参考",
      "firstFramePrompt": "50mm 中景静帧：环形玻璃顶室内，短发年轻女子穿深绿雨衣提着黄铜油壶站在灯器旁，左腕红绳可见，琥珀灯光照亮半张脸；玻璃上流着雨水；16:9 电影构图。",
      "prompt": "Live-action thriller, inside a lighthouse lamp room at night. Handheld 50mm medium shot following a young woman with short hair in a dark green raincoat as she walks a slow half circle around the brass lamp, carrying a small brass oil can. From 0 to 3 seconds she wipes condensation from the glass with two fingers, a faded red cord visible on her left wrist. From 3 to 5 seconds the rotating beam passes across her face and she narrows her eyes against it. From 5 to 6 seconds she stops and looks out at the sea. Warm amber lamp light alternating with cold teal from outside, rain running down the glass, restrained handheld movement, film grain. Ambient: boots on iron grating, a soft clink of the oil can, the lamp gear turning."
    },
    {
      "id": "SH03",
      "title": "无线电",
      "tc": "00:14–00:18",
      "start": 14,
      "duration": 4,
      "framing": "85mm 特写",
      "camera": "固定，仅一次焦点前移到无线电",
      "lighting": "琥珀侧光，无线电指示灯是画面里唯一的绿色点",
      "cast": [
        "阿澜"
      ],
      "sceneTag": "@灯塔顶室",
      "action": "桌上的老式无线电突然发出底噪，阿澜的手停在半空。",
      "dialogue": [
        {
          "who": "无线电",
          "text": "灯还亮着吗？",
          "at": [
            1.5,
            3
          ]
        }
      ],
      "sound": "无线电底噪、失真人声、雨声变小",
      "notes": "唯一的台词。人声必须失真、低沉；不出现说话者画面。",
      "refs": [
        {
          "label": "阿澜",
          "src": "media/img-4f6474ddd16dfb59c3fc.svg"
        }
      ],
      "thumb": "media/img-83790da32fddc6ebc49c.svg",
      "video": "",
      "seed": "20260924",
      "params": "720p · 4s · 图生视频",
      "firstFramePrompt": "85mm 特写静帧：木桌上一台旧式无线电，指示灯微绿，旁边是年轻女子停在半空的手，左腕红绳；琥珀侧光，背景虚化的玻璃与雨水。",
      "prompt": "Live-action thriller, close-up 85mm, static camera. An old radio set on a wooden table in the lamp room, one small green indicator light. A young woman's hand hovers just above it, a faded red cord on her left wrist. From 0 to 1.5 seconds the radio hisses with static. From 1.5 to 3 seconds a low, distorted man's voice speaks in Chinese through the static: <d>[Chinese] 灯还亮着吗？</d> The camera racks focus once from the hand to the radio dial as the voice speaks. From 3 to 4 seconds the hand stays frozen and the static fades. Warm amber side light, shallow depth of field, rain on glass out of focus behind, film grain."
    },
    {
      "id": "SH04",
      "title": "船出现",
      "tc": "00:18–00:28",
      "start": 18,
      "duration": 10,
      "framing": "24mm 大远景（同 SH01 机位）",
      "camera": "固定机位，光束从左扫到右一次",
      "lighting": "同 SH01；船只在光束经过的一秒内被照亮",
      "cast": [
        "船上的人影"
      ],
      "sceneTag": "@礁岸与海面",
      "action": "与 SH01 完全相同的机位与光束，这一次光束扫到海面中央时照出一艘旧渔船，船头站着一个背光人影，光束过去后船隐入雾中。",
      "dialogue": [],
      "sound": "同 SH01，加一声极远的雾笛",
      "notes": "关键镜头。与 SH01 的构图必须逐像素一致，观众靠「重复中的差异」发现船。人影只在光束内出现约 1 秒。",
      "refs": [
        {
          "label": "场景 SCN-02",
          "src": "media/img-8adfad51bc9b2a7d1fd8.svg"
        },
        {
          "label": "人影",
          "src": "media/img-2484db2c777540bd27b5.svg"
        }
      ],
      "thumb": "media/img-38f93851357a038405be.svg",
      "video": "",
      "seed": "20260925",
      "params": "720p · 10s · 图生视频 + SH01 首帧复用",
      "firstFramePrompt": "复用 SH01 首帧（同一张静帧），保证构图一致。",
      "prompt": "Live-action thriller, the exact same wide 24mm static framing as before: an old lighthouse at the end of a black rocky shore, its beam pointing far left over dark teal waves at the start. From 0 to 3 seconds the beam begins its slow, even sweep from left to right. From 3 to 4.5 seconds, as the beam reaches the center of the sea, it reveals an old wooden fishing boat drifting in the mist, and on its bow a single figure in a wide-brimmed hat and long rain cape stands backlit as a pure silhouette, one arm slowly raised. From 4.5 to 8 seconds the beam continues to the right and the boat sinks back into grey fog and disappears. From 8 to 10 seconds the beam rests at the right and the sea looks empty again. Cold teal moonlight, warm amber beam, rain threads inside the beam, film grain. Ambient: storm, waves, the lamp gear rotating once, one very distant foghorn."
    },
    {
      "id": "SH05",
      "title": "信号对答",
      "tc": "00:28–00:36",
      "start": 28,
      "duration": 8,
      "framing": "35mm 过肩",
      "camera": "手持，越过阿澜肩膀看海",
      "lighting": "手持信号灯的白光打在她的手和栏杆上，海面深处一个回应的光点",
      "cast": [
        "阿澜",
        "船上的人影"
      ],
      "sceneTag": "@灯塔顶室外走道",
      "action": "阿澜冲到外圈走道，用手持信号灯向海面打出三短一长；几秒后，雾里同样的三短一长回了过来。",
      "dialogue": [],
      "sound": "信号灯开关的咔哒声、风声压过一切、回应光点无声",
      "notes": "信号节奏三短一长要清晰可数。回应的光点很小，不要变成灯塔式光束。",
      "refs": [
        {
          "label": "阿澜",
          "src": "media/img-4f6474ddd16dfb59c3fc.svg"
        },
        {
          "label": "场景 SCN-01",
          "src": "media/img-240fbbcd938917ea45d0.svg"
        }
      ],
      "thumb": "media/img-ab42169e2fe12072386b.svg",
      "video": "",
      "seed": "20260926",
      "params": "720p · 8s · 图生视频 + 角色参考",
      "firstFramePrompt": "35mm 过肩静帧：深绿雨衣的年轻女子背对镜头站在灯塔外圈铁栏走道上，右手举着手持信号灯尚未点亮，前方是黑色海面与灰雾；雨水打在栏杆上。",
      "prompt": "Live-action thriller, handheld 35mm over-the-shoulder shot from behind a young woman in a dark green raincoat standing on the iron walkway outside the lighthouse lamp room, storm rain hitting the railing. From 0 to 3 seconds she raises a handheld signal lamp and flashes it toward the dark sea: three short flashes and one long, each flash lighting her wet hand and the railing in hard white light. From 3 to 5 seconds she waits, breathing visible, the sea black and foggy. From 5 to 8 seconds a tiny point of light deep in the fog answers with the same pattern, three short and one long, and her shoulders stiffen. Cold teal night, hard white lamp flashes, restrained handheld shake, film grain. Ambient: lamp switch clicks, wind overpowering everything, no sound from the distant light."
    },
    {
      "id": "SH06",
      "title": "出海",
      "tc": "00:36–00:42",
      "start": 36,
      "duration": 6,
      "framing": "50mm 侧跟",
      "camera": "沿礁岸侧向跟拍小艇",
      "lighting": "灯塔光束从背后扫来，逆光勾出雨衣轮廓",
      "cast": [
        "阿澜"
      ],
      "sceneTag": "@礁岸与海面",
      "action": "阿澜划着小艇从礁岸推入碎浪，光束从她背后扫过，前方雾里船的轮廓一闪。",
      "dialogue": [],
      "sound": "船桨入水、碎浪、雾笛更近",
      "notes": "小艇从画右下角出海，方向与光束一致（屏幕方向锁）。",
      "refs": [
        {
          "label": "阿澜",
          "src": "media/img-4f6474ddd16dfb59c3fc.svg"
        },
        {
          "label": "场景 SCN-02",
          "src": "media/img-d126d79a0536815c22c2.svg"
        }
      ],
      "thumb": "media/img-4a3cae5372703c0f228c.svg",
      "video": "",
      "seed": "20260927",
      "params": "720p · 6s · 图生视频 + 角色参考",
      "firstFramePrompt": "50mm 侧面静帧：深绿雨衣的年轻女子坐在木制小艇里，双手握桨，艇头刚离开黑色礁岸，白色碎浪拍在艇侧；灯塔在画面深处，光束尚在画左。",
      "prompt": "Live-action thriller, 50mm side tracking shot moving with a small wooden rowboat as a young woman in a dark green raincoat pushes off from black rocks into white breaking waves. From 0 to 2 seconds she pulls the oars twice, spray hitting the hull. From 2 to 4 seconds the lighthouse beam sweeps from behind her, backlighting the wet raincoat and the rain in a rim of amber. From 4 to 6 seconds, far ahead in the fog, the dark outline of an old fishing boat appears for one second and fades. Cold teal sea, amber backlight, rain-soaked textures, film grain. Ambient: oars in water, breaking waves, a foghorn closer than before."
    },
    {
      "id": "SH07",
      "title": "红围巾",
      "tc": "00:42–00:52",
      "start": 42,
      "duration": 10,
      "framing": "85mm 特写 → 缓慢拉开",
      "camera": "从围巾特写缓慢拉开到空船中景",
      "lighting": "手持信号灯白光是唯一光源，围巾红是全片唯一暖饱和色",
      "cast": [
        "阿澜"
      ],
      "sceneTag": "@旧渔船甲板",
      "action": "阿澜的信号灯照在旧渔船的舵轮上，舵轮上系着一条褪色红围巾在风里飘；镜头缓慢拉开，甲板空无一人。",
      "dialogue": [],
      "sound": "围巾布料在风里抖动、木船吱呀、海浪变轻",
      "notes": "围巾是道具替代解释的核心。拉开后甲板必须完全空，不出现人影。",
      "refs": [
        {
          "label": "阿澜",
          "src": "media/img-4f6474ddd16dfb59c3fc.svg"
        },
        {
          "label": "场景 SCN-02",
          "src": "media/img-d126d79a0536815c22c2.svg"
        }
      ],
      "thumb": "media/img-cf66f20016c98a7823bb.svg",
      "video": "",
      "seed": "20260928",
      "params": "720p · 10s · 图生视频",
      "firstFramePrompt": "85mm 特写静帧：旧渔船木制舵轮上系着一条褪色红围巾，被手持信号灯的白光照亮，背景全黑；雨水打在木头上。",
      "prompt": "Live-action thriller, night on the deck of an old wooden fishing boat. The shot opens as an 85mm close-up of a faded red wool scarf tied to the wooden ship's wheel, lit only by the hard white beam of a handheld signal lamp, rain hitting the wood. From 0 to 3 seconds the scarf flutters in the wind. From 3 to 8 seconds the camera pulls back slowly and smoothly to a medium shot: a young woman in a dark green raincoat holds the lamp, standing on the empty deck, and the whole deck is bare, no other person anywhere. From 8 to 10 seconds she reaches out and touches the scarf with her left hand, the faded red cord on her wrist beside it. Cold teal night, hard white lamp light, the scarf the only saturated warm color, film grain. Ambient: wool fluttering, old wood creaking, waves softening."
    },
    {
      "id": "SH08",
      "title": "回望",
      "tc": "00:52–01:02",
      "start": 52,
      "duration": 10,
      "framing": "24mm 大远景（从海上看灯塔）",
      "camera": "固定，光束从右扫到左一次（与 SH01 相反）",
      "lighting": "灯塔顶室琥珀光；光束里一个背光人影",
      "cast": [
        "船上的人影"
      ],
      "sceneTag": "@礁岸与海面（海上视角）",
      "action": "从海上回望灯塔，光束扫过时，顶室玻璃后站着一个宽檐帽的背光人影，正替她守着那束光；光束过去，顶室只剩灯器在转。",
      "dialogue": [],
      "sound": "雾笛长鸣一声后全部声音收掉，只剩灯器转动",
      "notes": "结尾。人影只在光束经过顶室的 1 秒内可见；反向扫光暗示「换了守塔人」。切黑。",
      "refs": [
        {
          "label": "人影",
          "src": "media/img-2484db2c777540bd27b5.svg"
        },
        {
          "label": "场景 SCN-01",
          "src": "media/img-e6aca5079bc2f7cb551a.svg"
        }
      ],
      "thumb": "media/img-3a3d45e840ec9a7cec99.svg",
      "video": "",
      "seed": "20260929",
      "params": "720p · 10s · 图生视频",
      "firstFramePrompt": "24mm 大远景静帧：从海面看向礁岸上的老灯塔，顶室琥珀灯光，光束指向画右；暗青海面，灰雾，雨；16:9 电影构图。",
      "prompt": "Live-action thriller, wide 24mm static shot from low on the water looking back at the old lighthouse on its black rocky shore, the lamp room glowing amber, the beam pointing to the right at the start. From 0 to 3 seconds the beam sweeps slowly from right to left, the reverse of its earlier direction. From 3 to 4.5 seconds, as the beam passes across the glass of the lamp room, a figure in a wide-brimmed hat and long rain cape is visible inside as a pure backlit silhouette, standing still beside the lamp. From 4.5 to 8 seconds the beam moves on and the lamp room shows only the brass lamp turning, no one there. From 8 to 10 seconds the sea goes quiet and the image holds. Cold teal moonlight, warm amber lamp, rain, film grain. Ambient: one long foghorn, then all sound drops away leaving only the lamp gear turning."
    }
  ],
  "generation": {
    "model": "Seedance 2.5 · 火山方舟 API（图生视频 + 参考图）",
    "params": [
      {
        "k": "分辨率 / 帧率",
        "v": "1280×720 · 24 fps · 16:9"
      },
      {
        "k": "单条时长",
        "v": "4–10 秒（按镜头设计，不凑整）"
      },
      {
        "k": "输入",
        "v": "首帧图（图像模型生成，人工挑选）+ 角色参考图；提示词英文正文 + 中文对白"
      },
      {
        "k": "种子策略",
        "v": "每镜 2 个种子；挑条后把选中的 seed 记回 data.js"
      },
      {
        "k": "提示词结构",
        "v": "风格锁一句 → 机位与景别 → 逐秒动作 beat → 光线材质 → 环境声"
      },
      {
        "k": "成片",
        "v": "62 秒 · H.264 + AAC · −16 LUFS（短视频平台口径）"
      }
    ],
    "notes": [
      "示例结论 1：同机位重复镜（SH01/SH04/SH08）复用同一张首帧图，构图一致性比重新生成高得多。",
      "示例结论 2：把光束扫过的时刻写成精确秒数，模型才会把「人影只在光束内出现」做对。",
      "示例结论 3：唯一的暖饱和色（红围巾）要在风格锁里点名，否则会被整体冷调吃掉。"
    ]
  },
  "deliverables": [
    {
      "name": "夜守灯塔_60s_v1.mp4",
      "note": "成片（示例项目无实际文件）"
    },
    {
      "name": "一镜一页分镜.md",
      "note": "8 镜导演执行版分镜"
    },
    {
      "name": "prompts/SH01–SH08.txt",
      "note": "Seedance 2.5 完整提示词"
    },
    {
      "name": "角色卡 ×2 · 场景锚定图 ×2 · 首帧图 ×8",
      "note": "前期资产"
    }
  ]
});
