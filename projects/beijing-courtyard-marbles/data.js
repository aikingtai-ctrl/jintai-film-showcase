window.registerProject({
  "id": "beijing-courtyard-marbles",
  "title": "那些年我们玩过的游戏 · 北京篇｜1980年代大院弹玻璃球｜Seedance 2.5",
  "subtitle": "手绘水彩连环画质感 · 3 版视频（30秒手势V2终版 / 10秒竖屏 / 10秒4:3）+ 6 组 GPT Image 2K 重绘 · 画布 319",
  "logline": "1980 年代北京单位家属大院的午后树荫下，三个十岁男孩蹲在夯土院地里玩玻璃球。通过曲指握拳、中指环抱拇指蓄力再快速抽出的地道老北京弹球指法校正，完整呈现准备、瞄准、弹射、蓝球滚入五厘米小浅坑与伙伴相视一笑的三十秒童年记忆。",
  "date": "2026-10-09",
  "tags": [
    "老北京传统游戏",
    "大院童年",
    "水彩连环画",
    "手势精控",
    "竖屏 9:16",
    "AI Video Canvas",
    "画布 319",
    "已生成"
  ],
  "model": "Seedance 2.5（jimeng_multimodal2video）+ GPT Image 2（kie_gpt_image_2_i2i 2K）",
  "modelShort": "Seedance 2.5",
  "poster": "media/img-b6f1e91c82ef695a4878.jpg",
  "film": {
    "src": "https://github.com/aikingtai-ctrl/jintai-film-showcase/releases/download/media-v1/beijing-courtyard-marbles--52feb5b0ee1701c73c51.mp4",
    "duration": 30.08,
    "width": 720,
    "height": 1280
  },
  "meta": {
    "shots": 3,
    "generated": 3,
    "durationSec": 50,
    "resolution": "720×1280 (9:16) / 960×720 (4:3)",
    "fps": "24",
    "aspect": "9:16",
    "style": "温暖克制的 1980 年代手绘水彩连环画风格，细致铅笔轮廓与轻柔水彩纸纹，5600K 午后树荫日光，写实儿童身体与五指解剖比例。"
  },
  "synopsis": [
    "《那些年我们玩过的游戏·北京篇》108 项传统儿童游戏系列开篇首作《第 01 个游戏：弹玻璃球》。画面定格在约 1980 年的北京单位家属大院：红砖墙、木格窗、停在墙根的黑色二八自行车、斑驳树荫与平整夯土地。",
    "在画布 319 上经历了从 4:3 横屏样片（10s）→ 9:16 竖屏重构与浅坑尺寸修正（10s）→ 实拍弹珠手势转绘与 30 秒五切完整叙事（手势V2终版）的三阶完整进化。"
  ],
  "concept": {
    "rules": [
      "真实弹球指法硬锁（手势V2）：彻底摒弃 AI 常见的“拇指食指从上方捏球”或“伸直食指戳球”错误，以实拍教学帧锁定「食指中指夹住 15mm 蓝球、中指弯曲环抱内扣拇指蓄力、拇指快速抽出弹射」的真实结构。",
      "真实物理尺度约束：玻璃球直径严格限制为 15 毫米（仅相当于儿童小指甲宽度）；目标浅坑直径 5 厘米、深 1 厘米（距离手前约 30 厘米），严禁画成夸张深坑。",
      "真机位换位而非裁剪：全景母图、近景握球图与树旁背侧换位图（23–30秒反应镜）均通过 GPT Image 2K 独立重绘真实三维透视，绝不靠拉长或镜像旧图充数。"
    ],
    "directorMethod": "先在画布中利用 6 个 kie_gpt_image_2_i2i 节点把「浅坑尺寸过大」和「捏球手势不地道」两个民俗细节逐一攻克，再将校正后的三张 9:16 2K 水彩母图（全景+握拳特写+背侧换位）联投给 Seedance 2.5，一次直出含 4 次精准硬切（5s/12s/18s/23s）的 30 秒完整叙事短片。"
  },
  "pipeline": [
    {
      "stage": "① 4:3 样片首轮测试",
      "tool": "Seedance 2.5 · taskId 2158 (10s, 4:3)",
      "note": "验证水彩连环画画风、三名男孩角色一致性与玻璃球地面滚动物理效果。"
    },
    {
      "stage": "② 9:16 竖屏重绘与浅坑修平",
      "tool": "GPT Image 2 (2K) × 3 + Seedance 2.5 taskId 2159",
      "note": "重绘 9:16 竖屏全景、近景与换位视角，并将地面大坑修平为 5cm×1cm 浅凹。"
    },
    {
      "stage": "③ 实拍手势V2定向转绘",
      "tool": "GPT Image 2 (2K) × 3（图像生成 #4 / #5 / #6）",
      "note": "引入实拍弹珠蓄力帧（手势参考_14秒.jpg），重绘儿童紧凑握拳夹球手势并同步回写全景与换位母图。"
    },
    {
      "stage": "④ 30秒竖屏五切终版生成",
      "tool": "Seedance 2.5 · taskId 2161 (30s, 9:16)",
      "note": "三图联投，按 0-5-12-18-23-30 秒五幕时码一次生成完整弹球回合。"
    }
  ],
  "sceneCards": [
    {
      "id": "SCN-V2-01",
      "name": "弹球 01 · 大院全景（手势V2 9:16 2K 终版）",
      "desc": "画布 319「图像生成 #4」产出：锁定红砖木窗家属房、二八自行车、树荫、三名10岁男孩蹲姿及校正后的紧凑握拳手势与5cm小浅坑。",
      "image": "media/img-54f759d4abada39f8f29.png",
      "uses": 1
    },
    {
      "id": "SCN-V2-02",
      "name": "弹球 02 · 树旁背侧换位视角（手势V2 9:16 2K 终版）",
      "desc": "画布 319「图像生成 #6」产出：摄影机绕至右侧大树旁，以三分之四背侧角度斜看三名男孩与地面浅坑，用于 23–30 秒终幕切镜锚定。",
      "image": "media/img-d03ef866904b2aa92f94.png",
      "uses": 1
    },
    {
      "id": "SCN-V2-03",
      "name": "弹球 03 · 握球蓄力近景（手势V2 9:16 2K 终版）",
      "desc": "画布 319「图像生成 #5」产出：严格依据真实弹珠教学实拍结构重绘——食指中指夹住15mm蓝球，中指弯曲环抱弯入拳内的拇指蓄力。",
      "image": "media/img-cc7f7875378f9c30b90a.png",
      "uses": 1
    }
  ],
  "props": [
    {
      "id": "REF-REAL-HAND",
      "name": "真实弹珠手势实拍参考图（14秒蓄力帧）",
      "desc": "用于「图像生成 #5」的唯一手部解剖结构依据：食指与中指夹球、中指环抱内弯拇指。",
      "image": "media/img-a79b019fbc66798f21ed.jpg",
      "uses": 1
    },
    {
      "id": "QC-30S-SHEET",
      "name": "30秒竖屏终版（手势V2）审片接触表",
      "desc": "30秒成片五幕关键帧抽帧核验表。",
      "image": "media/img-a475374ba602362e58d4.jpg",
      "uses": 1
    },
    {
      "id": "IG-V1-WIDE",
      "name": "画布 319 · 图像生成 #2（9:16 初版全景+填平大坑）",
      "desc": "kie_gpt_image_2_i2i 2K 竖屏重绘，将初稿夸张大洞修平为直径 5cm 深 1cm 的真实浅凹。",
      "image": "media/img-5bc1a2928e6e80b94d3d.png",
      "uses": 1
    },
    {
      "id": "IG-V1-SIDE",
      "name": "画布 319 · 图像生成 #3（9:16 初版换位机位）",
      "desc": "kie_gpt_image_2_i2i 2K 竖屏重绘，首次建立树旁斜向透视换位机位。",
      "image": "media/img-5674e969bfc07a285331.png",
      "uses": 1
    }
  ],
  "docs": [],
  "sequences": [
    {
      "title": "全片 · 三阶迭代（30秒终版 / 10秒竖屏 / 10秒4:3）",
      "sceneTag": "@1980北京大院",
      "shots": [
        "S01",
        "S02",
        "S03"
      ]
    }
  ],
  "shots": [
    {
      "id": "S01",
      "title": "30秒 9:16 竖屏终版 · 手势V2五切完整叙事（taskId 2161）",
      "start": 0,
      "duration": 30,
      "framing": "9:16 竖屏五切（0-5s 全景推镜 → 5-12s 手部握拳瞄准特写 → 12-18s 拇指抽出弹射近景 → 18-23s 贴地跟拍蓝球入坑 → 23-30s 背侧换位三人相视一笑）",
      "camera": "47° FOV 全景缓推 → 29° FOV 手部特写 → 29° FOV 贴地弹射近景 → 47° FOV 贴地跟移 → 47° FOV 背侧三分之四中全景",
      "lighting": "1980年代北京大院午后 5600K 柔和树荫斑驳日光，温暖克制手绘水彩纸纹质感",
      "cast": [
        "蓝灰衬衫10岁男孩（主弹手）",
        "土黄衬衫男孩",
        "灰绿衬衫男孩"
      ],
      "sceneTag": "@1980北京单位家属大院夯土院地",
      "action": "三名十岁男孩在大院树荫下弹玻璃球：0-5s 全景蹲姿准备；5-12s 特写右手食指与中指夹住15毫米蓝色玻璃球、中指弯曲环抱弯入拳内的拇指蓄力瞄准；12-18s 拇指从中指环抱中快速抽出将球向前弹出；18-23s 蓝球沿夯土地面滚动30厘米落入5厘米宽1厘米深的小浅坑；23-30s 切至树旁背侧角度，三人抬头相视微笑。",
      "picture": "严格遵循手势V2三张9:16 2K母图（全景+握拳近景+背侧换位），彻底纠正“两指外侧捏球”与“地面大深洞”错误。",
      "dialogue": [],
      "dialogueText": "无对白（树叶微风沙沙声、玻璃球滚过夯土颗粒声、孩童轻浅笑声）",
      "sound": "树叶微风声、棉布衣料摩擦声、玻璃珠滚动入坑声、纯真轻笑声",
      "notes": "画布 319「视频生成 #3」· taskId 2161 · 30秒竖屏终极交付版。",
      "firstFramePrompt": "在第1张北京大院全景水彩插图上定向修正前景蓝灰衬衫男孩的右手，完整返回9:16竖屏2K画面，目标1152×2048。三名约10岁的男孩、脸和发型、衣服、蹲姿、红砖木窗家属房、左侧自行车、右侧大树、日光、夯土地面、画风和构图均以第1张为准。唯一主要变化是玩玻璃球的右手：完全放弃第1张原来的拇指食指捏球手势，照第2张近景的握拳结构重画。食指与中指夹住15毫米小玻璃球，手指收拢成紧凑的拳，中指弯曲抱住弯入拳内的拇指并抱紧，无名指和小指收向掌心；玻璃球从食指中指夹口的前上缘露出，拇指藏在中指环抱内蓄力，还没有抽出。拳头低低靠近地面，随男孩原有前臂自然转向前方的小浅坑，袖口和手腕连续。手形忠实于第2张，按10岁儿童的纤细小手比例缩小，不要成人粗大手、不要放大球。蓝球直径15毫米，小浅坑直径5厘米深1厘米，浅坑距手约30厘米，周围地面平整。不要增加任何儿童、文字、箭头、水印、分格或多余手指。",
      "prompt": "SCENE CONTEXT\nThree ten-year-old boys play glass marbles in a Beijing work-unit family courtyard around 1980. One complete attempt unfolds over 30 seconds: prepare the grip, aim, shoot, follow the marble, and share a small reaction.\n\nACTIVE REFERENCES\nThe first uploaded image anchors the three boys, courtyard and wide composition. The second uploaded image anchors the compact right-hand grip, blue-gray cotton cuff and small blue marble. The third uploaded image anchors the rear-side angle of the same boys. Their appearance matches the references throughout.\n\nLOCATION MAP / FIRST FRAME\nThe blue-gray-shirt boy squats in the foreground. The ochre-shirt boy squats beyond him; the pale-green-shirt boy bends beside them. The red-brick house, wooden windows, bicycle at left and tree at right remain fixed. A shallow earth depression, 5 cm across and 1 cm deep, sits about 30 cm ahead of the shooting hand.\n\nFORMAT MODE / CAMERA / ACTION\n0.0s to 5.0s: 47-degree FOV wide shot, camera at child shoulder height on the shaded side of the group. A gentle 0.2 km/h push-in. Leaves stir, the two watching boys shift their weight, and the player settles his right forearm close to the earth.\n5.0s HARD CUT.\n5.0s to 12.0s: 29-degree FOV hand close-up, camera fixed on the same side of the shooting axis. Keep the entire small right hand and cuff visible. The index and middle fingers secure one 15 mm blue glass marble at their upper front opening. The middle finger curls around the bent thumb and holds it tightly; ring and little fingers curl toward the palm. The compact fist is the exact structure of the second reference. The player holds this grip, then gently rotates his wrist to aim toward the shallow depression.\n12.0s HARD CUT.\n12.0s to 18.0s: 29-degree FOV low hand-and-ground close-up. The same fist stays close to the earth. The thumb swiftly extracts from the middle finger's hold in one decisive flick, propelling the marble forward. The shooting fingers remain curled through the release, then relax naturally. The visible marble departs from the finger opening and travels along the aimed ground path. Hold the released hand briefly as the eyes follow the ball.\n18.0s HARD CUT.\n18.0s to 23.0s: 47-degree FOV ground-level shot of the marble and shallow depression, with the boys' shoes softly behind. The same small blue marble rolls forward, slows through friction on the packed earth, brushes the lip and settles inside the shallow depression. Camera follows at the ball's speed and comes to rest with it.\n23.0s HARD CUT.\n23.0s to 30.0s: 47-degree FOV rear-side medium-wide angle anchored by the third image. The player opens his right hand and looks up. The ochre-shirt boy leans forward, then gives a small grin; the pale-green-shirt boy bends a little closer. They exchange glances and a brief quiet laugh. Hold a relaxed group composition for the final two seconds.\n\nPHYSICS / PERFORMANCE\nReal-time movement with brief natural pauses. Five anatomically coherent fingers belong continuously to the child's right wrist. Marble scale, ground contact and rolling direction remain stable. The hand, marble and depression stay visibly separate. Expressions emerge through eyes, cheeks and small head turns.\n\nLIGHTING / AUDIO\nSoft afternoon sunlight from camera left, tree-filtered highlights, fixed 5600K white balance. Gentle leaf rustle, cloth movement, gritty marble roll and quiet youthful laughter form the outdoor ambience.\n\nSTYLE / OUTPUT SETTINGS\nDelicate warm watercolor animation with subtle paper texture and stable painted surfaces. Thirty-second vertical 9:16 video, 720p. Clean picture-only imagery. Specified hard cuts carry the sequence; each segment holds its stated FOV and screen direction.\n\nPOSITIVE LOCKS\nThe same three children, cotton clothes, single blue marble, small shallow depression, architecture and afternoon light persist across every shot. The grip is index-and-middle support with the middle finger holding the folded thumb; the release is the thumb swiftly extracting from that hold.",
      "refs": [
        {
          "label": "@image1 大院全景（手势V2 9:16）",
          "src": "media/img-54f759d4abada39f8f29.png"
        },
        {
          "label": "@image2 紧凑握拳蓄力近景（手势V2 9:16）",
          "src": "media/img-cc7f7875378f9c30b90a.png"
        },
        {
          "label": "@image3 树旁背侧换位视角（手势V2 9:16）",
          "src": "media/img-d03ef866904b2aa92f94.png"
        },
        {
          "label": "30秒成片审片接触表",
          "src": "media/img-a475374ba602362e58d4.jpg"
        }
      ],
      "video": "https://github.com/aikingtai-ctrl/jintai-film-showcase/releases/download/media-v1/beijing-courtyard-marbles--52feb5b0ee1701c73c51.mp4",
      "thumb": "media/img-b6f1e91c82ef695a4878.jpg",
      "model": "seedance2.5",
      "params": "30s · 9:16 · 720×1280 · taskId 2161 · jimeng_multimodal2video",
      "status": "已生成",
      "alts": [],
      "take": "视频生成 #3"
    },
    {
      "id": "S02",
      "title": "10秒 9:16 竖屏样片 · 曲指托球初版（taskId 2159）",
      "start": 30,
      "duration": 10,
      "framing": "9:16 竖屏三切（0-2s 全景 → 2-6s 手部特写 → 6-10s 滚球入浅坑）",
      "camera": "47° FOV 竖屏中全景缓推 → 低机位手与浅坑同框特写 → 对角线滚球跟拍",
      "lighting": "5600K 午后树荫柔光，水彩纸纹手绘风格",
      "cast": [
        "蓝灰衬衫10岁男孩",
        "土黄衬衫男孩",
        "灰绿衬衫男孩"
      ],
      "sceneTag": "@1980北京单位家属大院夯土院地",
      "action": "首轮 9:16 竖屏重构样片：验证竖屏构图下三名男孩全身与地面小浅坑（直径5cm、深1cm）的空间比例及 10 秒三切节奏。",
      "picture": "采用 GPT Image 2K 重绘的第一版 9:16 竖屏全景与握球近景作为参考。",
      "dialogue": [],
      "dialogueText": "无对白",
      "sound": "树叶微风声、玻璃球滚动声",
      "notes": "画布 319「视频生成 #2」· taskId 2159 · 10秒竖屏验证样片。",
      "firstFramePrompt": "根据两张参考，重画同一个北京大院弹玻璃球的场景，完整9:16竖屏，2K，单幅插图。第1张锁定三个中国男孩的面孔、发型、年龄、衣服和手绘水彩风格，以及红砖木窗家属房、黑色老式自行车、树荫和夯土院地。第2张只作为曲指握球姿势参考。重新构图而不是裁切或拉长第1张。约1980年下午，10岁蓝灰棉布衬衫、深蓝裤、黑布鞋男孩在画面中部偏左蹲下，身体完整，右臂自然伸到下方近景；土黄色衬衫、灰裤男孩蹲在稍远的中部；灰绿色衬衫、蓝裤男孩在后方右侧弯腰观看。三个孩子全部完整入画，各自脸部清楚，眼睛都看向游戏。竖屏上部是木窗、红砖墙与树荫，中部是孩子，下部是玩球的手和地面。蓝灰衣男孩右手必须是弯曲食指托住玻璃球、食指下方指关节贴地、其他三指收拢，拇指指腹在蓝球后方准备水平弹出；按第2张的曲指结构自然接到男孩小手和同一件普通棉布衬衫袖口。不要沿用第1张伸直食指向下按球的动作，不要用两指从上方捏球。只画一颗约15毫米直径的蓝色玻璃球，大小仅相当于儿童小指甲宽度。手前方约30厘米是直径5厘米、深1厘米的微小浅坑，两者均在画面中央下方安全区域，看得清楚。自然透视、儿童身体比例、五指完整合理。保持温暖克制的水彩与细致铅笔轮廓，旧棉布质感，柔和下午光，纸质轻纹理。不要现代运动鞋、手机、广告、文字、箭头、边框、水印、夸张大洞或额外的球。画面四边留少量自然余量，所有核心动作在中央80%宽度内。",
      "prompt": "A ten-second portrait watercolor animation of three boys playing glass marbles around 1980 in a Beijing work-unit residential courtyard. The first uploaded reference establishes the three boys, their cotton clothing, red-brick housing, wooden windows, parked black bicycle, tree shade and complete portrait composition. The second uploaded reference establishes the curled-finger marble grip, applied to the small right hand of the blue-gray-shirted boy with his plain woven shirt cuff. Maintain these identities and the same afternoon light throughout. Compose every shot for a native 9:16 frame.\n\n0-2 seconds: medium-wide portrait view, 47-degree field of view, showing all three boys. The blue-gray-shirted boy crouches in the foreground, the ochre-shirted boy squats behind him, and the gray-green-shirted boy leans forward nearby. They watch the playing hand. A slow forward camera movement settles before the cut.\n\n2-6 seconds: cut to a steady low portrait close-up of the small playing hand, one transparent blue glass marble and a tiny shallow target hollow, all visible in the same frame. The hand is at lower-left and the hollow is farther away at upper-right. The marble is 15 millimeters wide; the hollow is five centimeters wide and one centimeter deep, 30 centimeters ahead of the hand. The boy curls his index finger inward and rests its lower knuckle on the soil. His remaining fingers curl naturally toward his palm. The marble rests beside the bent index finger, and the bent thumb pad touches its back. His thumb extends once and clearly flicks the marble forward along the ground. Keep the supporting knuckle planted and show the exact moment the ball separates from the thumb.\n\n6-10 seconds: cut to a low portrait view following the same diagonal path from lower-left toward upper-right. The single blue marble rolls on compacted earth, gradually slows and settles inside the tiny shallow hollow. The same two watching boys lean forward and smile in the upper background. The courtyard stays fixed and the ball keeps one consistent size, color and continuous rolling path.\n\nSoft afternoon daylight, 5600 K white balance, restrained warm earth colors, delicate watercolor paper texture and stable drawn outlines. Youthful child-sized hands with five coherent fingers, gentle grounded body movements and clear thumb-to-ball contact. Light leaf rustle, quiet courtyard ambience and a faint marble rolling sound. Reserve the picture for the illustrated action. Native 9:16 portrait output, 720p, exactly ten seconds.",
      "refs": [
        {
          "label": "@image1 大院全景（9:16初版）",
          "src": "media/img-5bc1a2928e6e80b94d3d.png"
        },
        {
          "label": "@image2 曲指托球近景（9:16初版）",
          "src": "media/img-f741784f802e9c41567b.png"
        },
        {
          "label": "10秒竖屏审片接触表",
          "src": "media/img-e4fa3bf59cb24f99c115.jpg"
        }
      ],
      "video": "https://github.com/aikingtai-ctrl/jintai-film-showcase/releases/download/media-v1/beijing-courtyard-marbles--ed2fc96a2406c76b04b4.mp4",
      "thumb": "media/img-be718b56817c4057f572.jpg",
      "model": "seedance2.5",
      "params": "10s · 9:16 · 720×1280 · taskId 2159 · jimeng_multimodal2video",
      "status": "已生成",
      "alts": [],
      "take": "视频生成 #2"
    },
    {
      "id": "S03",
      "title": "10秒 4:3 横屏对照样片 · 首轮三切验证（taskId 2158）",
      "start": 40,
      "duration": 10,
      "framing": "4:3 横屏三切（0-2s 中全景 → 2-6s 贴地手部弹射近景 → 6-10s 滚球入浅坑）",
      "camera": "47° FOV 横屏推镜 → 贴地水平左向右弹射特写 → 沿球滚动轨迹低机位跟拍",
      "lighting": "5600K 午后温暖阳光，传统水彩连环画质感",
      "cast": [
        "蓝灰衬衫10岁男孩",
        "土黄衬衫男孩",
        "灰绿衬衫男孩"
      ],
      "sceneTag": "@1980北京单位家属大院夯土院地",
      "action": "4:3 连环画画幅首轮动作测试：验证三名大院男孩人物设定、红砖木窗家属房、二八黑自行车环境与玻璃球滚动物理摩擦。",
      "picture": "4:3 经典连环画画幅，温暖克制的大地色系水彩笔触。",
      "dialogue": [],
      "dialogueText": "无对白",
      "sound": "庭院环境声、玻璃球滚动声",
      "notes": "画布 319「视频生成」· taskId 2158 · 10秒 4:3 对照样片。",
      "firstFramePrompt": "将两张参考图重新绘制成一张完整的9:16竖屏插图，2K清晰度，单幅画面。主题：约1980年北京单位家属大院，10岁男孩准备弹玻璃球的右手近景。第1张只提供男孩身份、蓝灰色普通棉布衬衫及水彩连环画画风；第2张只提供曲指握球结构。把手改成真正10岁儿童的小手，普通棉布单层翻折袖口，与第1张衬衫一致。食指弯曲，食指下方指关节稳稳贴住夯土地面，其他三指自然收拢；一颗直径约15毫米的透明蓝色玻璃球托在弯曲食指旁，弯着的拇指指腹抵在球后，正要向前弹出。拇指、球、弯曲食指的接触关系清楚可见，球前方留出畅通的滚动方向。五根手指结构完整合理，手腕与前臂连续。不要用伸直食指和拇指从上方捏住球，不要把手画成成人手。摄影机在掌心一侧低位斜看手势，前臂从画面上部伸入，手位于画面中下部，球和手不被裁切。沿画面纵深，手前方约30厘米为直径5厘米、深约1厘米的小浅坑，坑不是大洞。玻璃球仅相当于儿童小指甲的宽度。近处可见细碎土粒与柔和接触阴影，远处轻虚化的红砖家属房、木窗和树荫只作背景。保持第1张温暖克制的水彩纸质、细致手绘轮廓与自然肤色，色彩不过度鲜艳，下午柔光。重新组织为竖屏画面，不拉伸旧图，不拼接，不画示意箭头、文字、字幕、边框、水印或现代物品。",
      "prompt": "A ten-second illustrated childhood memory set around 1980 in a Beijing work-unit residential courtyard. Three school-age boys play glass marbles on compacted earth.\n\n@image1 establishes the three boys' identities, clothing, courtyard and hand-painted watercolor style. @image2 establishes the curled-finger marble grip. Apply this grip to the small hand of the blue-gray-shirted boy from @image1, with his plain woven shirt cuff and youthful skin. Use the two pictures as reference sheets for newly staged moving shots.\n\nThree consecutive shots with cuts exactly at 2 and 6 seconds. The same boys, afternoon lighting, courtyard and blue shooter marble continue through all shots.\n\n0-2 seconds: a medium-wide view with a neutral 47-degree field of view. The blue-gray-shirted boy crouches at camera-left, his right hand close to the soil. The ochre-shirted boy squats farther back at camera-right and the gray-green-shirted boy leans forward beside him. They look toward the playing hand. The courtyard has red-brick housing, wooden window frames, a parked black bicycle and dappled tree shade. A gentle forward camera movement settles before the cut.\n\n2-6 seconds: cut to a steady ground-level close view with a 47-degree field of view. The playing hand is on the left of frame and a shallow target hollow is 30 centimeters to its right; both remain visible. The boy curls his fingers inward, rests the lower index knuckle on the earth, and braces one transparent blue glass marble against his bent index finger. The marble is 15 millimeters across, about the width of his little fingernail. His bent thumb pad presses against the back of the marble, then extends once, flicking it horizontally from left to right. His knuckle stays planted during release. Show the thumb-to-marble contact and the moment the marble separates clearly at natural speed.\n\n6-10 seconds: cut to a low view along the same left-to-right path. The single blue marble rolls over the soil, slows with ground friction, and settles into the shallow hollow. The hollow is five centimeters wide and one centimeter deep. Keep its trajectory and size continuous across the cut. The two watching boys lean forward slightly and smile in the softly focused background.\n\nSoft afternoon daylight, 5600 K white balance, warm earth colors, restrained watercolor texture and stable drawn outlines. Small grounded body movements, five anatomically coherent fingers per hand, one consistent blue shooter marble and a fixed courtyard layout. Gentle wind through leaves, quiet courtyard ambience and a faint marble rolling sound. The imagery carries the story on its own, with the frame reserved for the illustrated action. Output a clean 4:3, 720p animation with natural motion and a clear view of the thumb flick.",
      "refs": [
        {
          "label": "@image1 4:3大院全景母图",
          "src": "media/img-463bb0093784786adfdb.png"
        },
        {
          "label": "@image2 4:3握球近景母图",
          "src": "media/img-7af9368bb3158ab47512.png"
        }
      ],
      "video": "https://github.com/aikingtai-ctrl/jintai-film-showcase/releases/download/media-v1/beijing-courtyard-marbles--74f61d7c3992e41ad367.mp4",
      "thumb": "media/img-dd578d1e8afe7dba700f.jpg",
      "model": "seedance2.5",
      "params": "10s · 4:3 · 960×720 · taskId 2158 · jimeng_multimodal2video",
      "status": "已生成",
      "alts": [],
      "take": "视频生成"
    }
  ],
  "generation": {
    "model": "Seedance 2.5 + GPT Image 2 (2K)",
    "params": [
      {
        "k": "画布",
        "v": "AI Video Canvas #319（3 个视频节点 + 6 个 2K 图像生成节点）"
      },
      {
        "k": "终版规格",
        "v": "30 秒 · 9:16 竖屏 (720×1280) · taskId 2161"
      },
      {
        "k": "图像重绘模型",
        "v": "kie_gpt_image_2_i2i · 2K (1152×2048)"
      }
    ],
    "notes": [
      "民俗与传统游戏题材的核心痛点在于手部精细动作解剖结构，直接用实拍手部特写作为第 1 参考图、水彩原图作为第 2 风格参考图，可让 GPT Image 2 准确画出“中指抱拇指、食中指夹球”的复杂儿童手势。"
    ]
  },
  "deliverables": [
    {
      "name": "弹玻璃球 · 30秒 9:16 竖屏手势V2终版（taskId 2161）",
      "note": "最终交付主成片 · 30.08s · 720×1280",
      "src": "https://github.com/aikingtai-ctrl/jintai-film-showcase/releases/download/media-v1/beijing-courtyard-marbles--52feb5b0ee1701c73c51.mp4"
    },
    {
      "name": "弹玻璃球 · 10秒 9:16 竖屏初版样片（taskId 2159）",
      "note": "竖屏构图验证样片 · 10.05s · 720×1280",
      "src": "https://github.com/aikingtai-ctrl/jintai-film-showcase/releases/download/media-v1/beijing-courtyard-marbles--ed2fc96a2406c76b04b4.mp4"
    },
    {
      "name": "弹玻璃球 · 10秒 4:3 横屏对照样片（taskId 2158）",
      "note": "横屏首轮测试样片 · 10.05s · 960×720",
      "src": "https://github.com/aikingtai-ctrl/jintai-film-showcase/releases/download/media-v1/beijing-courtyard-marbles--74f61d7c3992e41ad367.mp4"
    },
    {
      "name": "30秒竖屏终版审片接触表",
      "note": "五切关键帧与手势核验表",
      "src": "media/img-a475374ba602362e58d4.jpg"
    },
    {
      "name": "AI Video Canvas · 画布 319",
      "note": "老北京大院弹玻璃球工程画布",
      "src": ""
    }
  ]
});
