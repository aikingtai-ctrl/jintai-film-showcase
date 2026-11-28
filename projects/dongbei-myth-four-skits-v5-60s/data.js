window.registerProject({
  "id": "dongbei-myth-four-skits-v5-60s",
  "title": "东北神话四段｜图六全角色替换｜V5 高像度终版",
  "subtitle": "2026-11-27 · V5 · 已验收本地终版",
  "logline": "四段东北神话小品和隐藏彩蛋；V4 12 个动态换角镜与 7 个直通镜构成全片，V5 仅对前 3 角色的 8 镜做靶向身份精修。",
  "date": "2026-11-27",
  "tags": [
    "V5",
    "已生成",
    "终版归档",
    "16:9",
    "MiniMax H3 Viggle Remake"
  ],
  "model": "MiniMax H3 Viggle Remake + FaceFusion / LC",
  "modelShort": "MiniMax H3 Viggle Remake",
  "poster": "media/img-c3142f6cdefd0c3ae893.jpg",
  "film": {
    "src": "https://github.com/aikingtai-ctrl/jintai-film-showcase/releases/download/media-v1/dongbei-myth-four-skits-v5-60s--7a281a8cae2e67b80c1e.mp4",
    "duration": 59.833333,
    "width": 1280,
    "height": 720,
    "fps": "24/1"
  },
  "meta": {
    "shots": 19,
    "generated": 12,
    "durationSec": 59.833333,
    "resolution": "1280×720",
    "fps": "24/1",
    "aspect": "16:9",
    "style": "四段东北神话小品和隐藏彩蛋；V4 12 个动态换角镜与 7 个直通镜构成全片，V5 仅对前 3 角色的 8 镜做靶向身份精修。"
  },
  "synopsis": [
    "四段东北神话小品和隐藏彩蛋；V4 12 个动态换角镜与 7 个直通镜构成全片，V5 仅对前 3 角色的 8 镜做靶向身份精修。",
    "镜段边界来自原始 shot_plan.json；V4 生成提示词由原脚本函数重建，V5 是靶向换脸精修，并非全片重新生成。"
  ],
  "pipeline": [
    {
      "stage": "源素材与镜段计划",
      "tool": "原生产工程",
      "note": "镜段边界来自原始 shot_plan.json；V4 生成提示词由原脚本函数重建，V5 是靶向换脸精修，并非全片重新生成。"
    },
    {
      "stage": "成片与验收",
      "tool": "MiniMax H3 Viggle Remake + FaceFusion / LC",
      "note": "V5 终版；QA 图卡和本地来源账本已归档。"
    }
  ],
  "props": [
    {
      "id": "QA01",
      "name": "QA01_V5_Orig_vs_Final",
      "image": "media/img-4f92f02a87caf1805548.jpg",
      "desc": "V5 终版验收图卡；来源与哈希见本地账本。"
    },
    {
      "id": "QA02",
      "name": "QA02_V5_FaceZoom_ArcFace",
      "image": "media/img-badf4d04fbe617779480.jpg",
      "desc": "V5 终版验收图卡；来源与哈希见本地账本。"
    },
    {
      "id": "QA03",
      "name": "QA03_V5_LipSync_Check",
      "image": "media/img-b83b8d000c9606bb310f.jpg",
      "desc": "V5 终版验收图卡；来源与哈希见本地账本。"
    },
    {
      "id": "QA04",
      "name": "QA04_V5_Fig6_vs_V4_vs_V5_Compare",
      "image": "media/img-a8e045c273d685dfcc24.jpg",
      "desc": "V5 终版验收图卡；来源与哈希见本地账本。"
    }
  ],
  "shots": [
    {
      "id": "S01",
      "title": "S01 · Skit1 wide: Demon gate + Scrap collector riding tricycle",
      "start": 0,
      "end": 1.541667,
      "duration": 1.541667,
      "framing": "生成镜段/接力窗",
      "action": "S01 · Skit1 wide: Demon gate + Scrap collector riding tricycle",
      "prompt": "subject_definitions:\n- <Subject 1> (visible in <Picture 1>, <Picture 2>): A middle-aged East Asian man wearing a muted dark charcoal Ushanka fur-earflap winter hat and a faded olive-green padded cotton winter coat, hunched forward in strict left side profile.\n- <Subject 2>: The silver-horned grey-skinned demon standing upright beside the snowy village lane holding a brown gourd.\n\nsummary:\n<Subject 1> pedals a loaded cargo tricycle smoothly toward the left along a snowy rural lane in overcast winter daylight, keeping his head bowed steeply downward in strict left profile before pulling to a halt beside <Subject 2>.\n\nretention_analysis:\n- <Video 1> (appears in [Shot 1]): fully_preserved - Preserve the smooth leftward camera tracking pan, overcast grey winter daylight exposure, snowy village lane, adobe wall, wooden gate, cargo tricycle wheels, and <Subject 1>'s unbroken forward-hunched downward riding posture across all frames.\n- <Picture 1> (appears in [Shot 1]): reference - Frame 0 showing <Subject 1> hunched forward in strict left profile staring straight down at the handlebars and road.\n- <Picture 2> (appears in [Shot 1]): reference - Frame 18 showing <Subject 1> continuing smoothly leftward in strict left profile with head bowed down toward the path.\n- <Subject 1> (appears in [Shot 1]): fully_preserved - Keep strict downward-bowed left profile head orientation and serious focused demeanor through the entire clip without turning toward the camera.\n\ndetailed_description:\n- [Shot 1] {00:00.000 - 00:01.542}\n  - shot_cut_type: initial_shot\n  - camera: Smooth medium tracking shot moving leftward parallel to the adobe wall and wooden village gate.\n  - environment: Flat overcast winter daylight across a snow-dusted countryside lane, bare branches, and rural tile-roofed houses.\n  - subjects: <Subject 1> leans over the handlebars on the right pedaling leftward; <Subject 2> stands calmly on the left near the wooden gate.\n  - actions: <Subject 1> maintains a steady hunched torso and bowed head in strict left profile, eyes directed downward toward the path as his tricycle rolls smoothly to a stop beside <Subject 2> with zero sudden head snaps. <d>[unclear]</d>\n  - sound_effects: Crunching tricycle tires on snow followed by an echoing supernatural challenge.\n\noverall_soundscape:\nClear cold countryside outdoor acoustics.\n\nnon_diegetic_music:\nNone.",
      "seed": 985180,
      "sourceMode": "v4_generated_v5_targeted_refine",
      "video": null,
      "status": "终版成片内的时间段；独立片段未归档",
      "thumb": "media/img-80b07ae1b2addc3e2e66.jpg",
      "refs": [
        {
          "label": "QA01_V5_Orig_vs_Final",
          "src": "media/img-4f92f02a87caf1805548.jpg"
        }
      ]
    },
    {
      "id": "S02",
      "title": "S02 · Skit1 closeup: Scrap collector facing right + Demon back/gourd",
      "start": 1.541667,
      "end": 5.041667,
      "duration": 3.5,
      "framing": "生成镜段/接力窗",
      "action": "S02 · Skit1 closeup: Scrap collector facing right + Demon back/gourd",
      "prompt": "subject_definitions:\n- <Subject 1> (visible in <Picture 1>): The authentic middle-aged East Asian water carrier wearing a worn black rolled-brim peasant felt hat, faded black-charcoal Chinese frog-button padded jacket with grey right-shoulder patch, thin silver half-rim eyeglasses, and animated expressive brows.\n- <Subject 2>: Sun Wukong seen in left foreground wearing golden lion-shoulder armor and crimson cape beside his upright ornate golden staff.\n\nsummary:\nOn a snowy village road, <Subject 1> argues cheerfully yet earnestly with <Subject 2> while balancing a single wooden shoulder pole and water buckets, squinting and tilting his brows with vivid mid-sentence mouth motion.\n\nretention_analysis:\n- <Video 1> (appears in [Shot 1]): fully_preserved - Preserve the static snowy village street framing, cold overcast winter light, <Subject 2>'s golden armor and vertical golden staff, the single wooden shoulder pole across <Subject 1>'s shoulders, hanging ropes, and swaying water buckets with nothing extra beneath the shoulder pole.\n- <Picture 1> (appears in [Shot 1]): reference - Frame 37 capturing <Subject 1>'s animated raised-brow speaking expression looking left toward <Subject 2>.\n- <Subject 1> (appears in [Shot 1]): fully_preserved - Keep consistent middle-aged facial identity, peasant felt hat, silver half-rim eyeglasses, leftward gaze at <Subject 2>, vivid un-robotic eyebrow tension, and audio-synchronized lip articulation.\n\ndetailed_description:\n- [Shot 1] {00:00.000 - 00:03.500}\n  - shot_cut_type: initial_shot\n  - camera: Fixed over-shoulder two-shot framing <Subject 2> at left edge and <Subject 1> on the right.\n  - environment: Cold overcast snowy rural lane with mud-brick courtyard walls, cornstalk bundles, and frosty rooftops.\n  - subjects: <Subject 2> stands in foreground left; <Subject 1> stands right-center bearing two buckets on a single shoulder pole.\n  - actions: Tilting his brows earnestly while gesturing lightly toward the golden staff, <Subject 1> bargains animatedly with <Subject 2> in lively Northeast banter, squinting naturally and opening his mouth cleanly on every syllable. <d>[unclear]</d>\n  - sound_effects: Subtle creak of rope and water bucket metal handles.\n\noverall_soundscape:\nBrisk cold outdoor village atmosphere with vivid male Northeast Chinese speech.\n\nnon_diegetic_music:\nNone.",
      "seed": 985181,
      "sourceMode": "v4_generated_v5_targeted_refine",
      "video": null,
      "status": "终版成片内的时间段；独立片段未归档",
      "thumb": "media/img-2ece81165590cdee2b10.jpg",
      "refs": [
        {
          "label": "QA01_V5_Orig_vs_Final",
          "src": "media/img-4f92f02a87caf1805548.jpg"
        }
      ]
    },
    {
      "id": "S03",
      "title": "S03 · Skit1 OTS behind scrap hat onto Silver-horned Demon",
      "start": 5.041667,
      "end": 8.541667,
      "duration": 3.5,
      "framing": "源切镜",
      "action": "S03 · Skit1 OTS behind scrap hat onto Silver-horned Demon",
      "prompt": null,
      "seed": null,
      "sourceMode": "source_passthrough",
      "video": null,
      "status": "原片直通，未单独生成",
      "thumb": "media/img-9a60dfafe408af4d1633.jpg",
      "refs": [
        {
          "label": "QA01_V5_Orig_vs_Final",
          "src": "media/img-4f92f02a87caf1805548.jpg"
        }
      ]
    },
    {
      "id": "S04",
      "title": "S04 · Skit1 wide: Scrap collector behind cardboard sign + rides away",
      "start": 8.541667,
      "end": 14.208333,
      "duration": 5.666667,
      "framing": "生成镜段/接力窗",
      "action": "S04 · Skit1 wide: Scrap collector behind cardboard sign + rides away",
      "prompt": "subject_definitions:\n- <Subject 1> (visible in <Picture 1>): An authentic middle-aged East Asian man wearing a black fur-earflap Ushanka winter hat, olive-green padded coat, and thin silver half-rim rectangular eyeglasses, with a skeptical scowling face.\n- <Subject 2>: The silver-horned grey-skinned demon standing upright on the right holding a brown gourd.\n\nsummary:\nBehind the tricycle's cardboard sign reading '破烂 换钱', <Subject 1> scowls dismissively at <Subject 2> in annoyed right profile before brusquely pedaling his tricycle away up the snowy lane.\n\nretention_analysis:\n- <Video 1> (appears in [Shot 1]): fully_preserved - Preserve the static village lane framing, overcast cold daylight, cardboard sign '破烂 换钱', <Subject 2>'s idle posture on the right, and the rider's annoyed torso turn and pedaling retreat.\n- <Picture 1> (appears in [Shot 1]): reference - Frame 15 showing <Subject 1> in knit-brow disapproving right profile scoffing toward <Subject 2>.\n- <Subject 1> (appears in [Shot 1]): fully_preserved - Maintain consistent facial identity, silver half-rim glasses, Ushanka hat, grumpy unsmiling expression, and audio-synced jaw articulation while facing <Subject 2>, then turning smoothly away on the bike.\n\ndetailed_description:\n- [Shot 1] {00:00.000 - 00:05.667}\n  - shot_cut_type: initial_shot\n  - camera: Fixed medium shot down a snow-lined rural dirt road flanked by adobe walls.\n  - environment: Overcast grey winter sky and snow-dusted village road; cardboard sign '破烂 换钱' rests on the left handlebars.\n  - subjects: <Subject 1> sits on the tricycle on the left; <Subject 2> holds his gourd on the right.\n  - actions: Knitting his brows with a tight skeptical scowl, <Subject 1> delivers brisk sarcastic Northeast retorts toward <Subject 2>, then shifts his shoulders forward, turns away from <Subject 2>, and pedals the tricycle up the lane while calling out `\"破烂换钱\"`. <d>[unclear]</d>\n  - sound_effects: Rattling tricycle frame and crunching wheels moving away.\n\noverall_soundscape:\nDry cold rural winter ambience with crisp male Northeast Chinese dialogue.\n\nnon_diegetic_music:\nNone.",
      "seed": 985183,
      "sourceMode": "v4_generated_v5_targeted_refine",
      "video": null,
      "status": "终版成片内的时间段；独立片段未归档",
      "thumb": "media/img-b2010bd578abb3f8a589.jpg",
      "refs": [
        {
          "label": "QA01_V5_Orig_vs_Final",
          "src": "media/img-4f92f02a87caf1805548.jpg"
        }
      ]
    },
    {
      "id": "S05",
      "title": "S05 · Skit2 entry: Houyi solo at f0 (keep clean!), Ranger enters -> clear at +78",
      "start": 14.208333,
      "end": 18.541667,
      "duration": 4.333333,
      "framing": "生成镜段/接力窗",
      "action": "S05 · Skit2 entry: Houyi solo at f0 (keep clean!), Ranger enters -> clear at +78",
      "prompt": "subject_definitions:\n- <Subject 1> (visible in <Picture 1>): The authentic middle-aged East Asian forestry ranger wearing a dark navy peaked Ushanka winter cap with right earflap down, olive-green fur-collar winter coat, dark turtleneck, silver pocket pen, and thin silver half-rim eyeglasses.\n- <Subject 2>: The muscular bare-armed archer Houyi holding a heavy wooden bow on the right.\n\nsummary:\nInside a snowy birch forest in cold muted winter daylight, <Subject 1> sternly confronts <Subject 2> over poaching birds, speaking with animated indignant authority matching the synchronized dialogue.\n\nretention_analysis:\n- <Video 1> (appears in [Shot 1]): fully_preserved - Preserve the birch-forest depth, muted cold overcast winter lighting and contrast, <Subject 2>'s muscular stance and wooden bow, and <Subject 1>'s exact arm gestures, head angle, and eyebrow motion.\n- <Picture 1> (appears in [Shot 1]): reference - Frame 78 capturing <Subject 1>'s authentic stern scolding expression and rightward profile toward <Subject 2>.\n- <Subject 1> (appears in [Shot 1]): fully_preserved - Maintain unsmiling knit-brow seriousness, navy Ushanka cap, silver half-rim eyeglasses, and audio-synchronized lip articulation across all frames.\n\ndetailed_description:\n- [Shot 1] {00:00.000 - 00:04.333}\n  - shot_cut_type: initial_shot\n  - camera: Fixed medium confrontation two-shot in front of snowy birch trunks.\n  - environment: Subdued overcast cold winter woodland with fallen snow and slender white birch trees.\n  - subjects: <Subject 1> confronts from the left; <Subject 2> faces him from the right.\n  - actions: <Subject 1> strides in from the left raising his left hand in sharp warning, frowning sternly and shouting toward <Subject 2>. <d>[unclear]</d>\n  - sound_effects: Subtle snow footsteps and bowstring wooden creak.\n\noverall_soundscape:\nCrisp cold woodland air with assertive Northeast male dialogue.\n\nnon_diegetic_music:\nNone.",
      "seed": 985184,
      "sourceMode": "v4_generated_v5_targeted_refine",
      "video": null,
      "status": "终版成片内的时间段；独立片段未归档",
      "thumb": "media/img-e3b0ac38350688d9784c.jpg",
      "refs": [
        {
          "label": "QA01_V5_Orig_vs_Final",
          "src": "media/img-4f92f02a87caf1805548.jpg"
        }
      ]
    },
    {
      "id": "S06",
      "title": "S06 · Skit2 OTS back of navy hat onto Houyi (no face visible)",
      "start": 18.541667,
      "end": 20.083333,
      "duration": 1.541667,
      "framing": "源切镜",
      "action": "S06 · Skit2 OTS back of navy hat onto Houyi (no face visible)",
      "prompt": null,
      "seed": null,
      "sourceMode": "source_passthrough",
      "video": null,
      "status": "原片直通，未单独生成",
      "thumb": "media/img-8a9a6c0ce97627f64430.jpg",
      "refs": [
        {
          "label": "QA01_V5_Orig_vs_Final",
          "src": "media/img-4f92f02a87caf1805548.jpg"
        }
      ]
    },
    {
      "id": "S07",
      "title": "S07 · Skit2 two-shot: Ranger left grabs Houyi bow right",
      "start": 20.083333,
      "end": 24.791667,
      "duration": 4.708333,
      "framing": "生成镜段/接力窗",
      "action": "S07 · Skit2 two-shot: Ranger left grabs Houyi bow right",
      "prompt": "subject_definitions:\n- <Subject 1> (visible in <Picture 1>): The authentic middle-aged East Asian forestry ranger wearing a dark navy peaked Ushanka winter cap with right earflap down, olive-green fur-collar winter coat, dark turtleneck, silver pocket pen, and thin silver half-rim eyeglasses.\n- <Subject 2>: The muscular bare-armed archer Houyi holding a heavy wooden bow on the right.\n\nsummary:\nInside a snowy birch forest in cold muted winter daylight, <Subject 1> sternly confronts <Subject 2> over poaching birds, speaking with animated indignant authority matching the synchronized dialogue.\n\nretention_analysis:\n- <Video 1> (appears in [Shot 1]): fully_preserved - Preserve the birch-forest depth, muted cold overcast winter lighting and contrast, <Subject 2>'s muscular stance and wooden bow, and <Subject 1>'s exact arm gestures, head angle, and eyebrow motion.\n- <Picture 1> (appears in [Shot 1]): reference - Frame 28 capturing <Subject 1>'s authentic stern scolding expression and rightward profile toward <Subject 2>.\n- <Subject 1> (appears in [Shot 1]): fully_preserved - Maintain unsmiling knit-brow seriousness, navy Ushanka cap, silver half-rim eyeglasses, and audio-synchronized lip articulation across all frames.\n\ndetailed_description:\n- [Shot 1] {00:00.000 - 00:04.708}\n  - shot_cut_type: initial_shot\n  - camera: Fixed medium confrontation two-shot in front of snowy birch trunks.\n  - environment: Subdued overcast cold winter woodland with fallen snow and slender white birch trees.\n  - subjects: <Subject 1> confronts from the left; <Subject 2> faces him from the right.\n  - actions: <Subject 1> tilts his head sharply upward-right with deeply furrowed brows and wide emphatic mouth movement, barking his retort right at <Subject 2>. <d>[unclear]</d>\n  - sound_effects: Subtle snow footsteps and bowstring wooden creak.\n\noverall_soundscape:\nCrisp cold woodland air with assertive Northeast male dialogue.\n\nnon_diegetic_music:\nNone.",
      "seed": 985186,
      "sourceMode": "v4_generated_v5_targeted_refine",
      "video": null,
      "status": "终版成片内的时间段；独立片段未归档",
      "thumb": "media/img-ab6c2de50951dd7f64f6.jpg",
      "refs": [
        {
          "label": "QA01_V5_Orig_vs_Final",
          "src": "media/img-4f92f02a87caf1805548.jpg"
        }
      ]
    },
    {
      "id": "S08",
      "title": "S08 · Skit2 OTS back of navy hat onto Houyi",
      "start": 24.791667,
      "end": 27.416667,
      "duration": 2.625,
      "framing": "源切镜",
      "action": "S08 · Skit2 OTS back of navy hat onto Houyi",
      "prompt": null,
      "seed": null,
      "sourceMode": "source_passthrough",
      "video": null,
      "status": "原片直通，未单独生成",
      "thumb": "media/img-d91874486849b8bb32b6.jpg",
      "refs": [
        {
          "label": "QA01_V5_Orig_vs_Final",
          "src": "media/img-4f92f02a87caf1805548.jpg"
        }
      ]
    },
    {
      "id": "S09",
      "title": "S09 · Skit2 two-shot: Ranger left holding bow facing Houyi",
      "start": 27.416667,
      "end": 29.208333,
      "duration": 1.791667,
      "framing": "生成镜段/接力窗",
      "action": "S09 · Skit2 two-shot: Ranger left holding bow facing Houyi",
      "prompt": "subject_definitions:\n- <Subject 1> (visible in <Picture 1>): The authentic middle-aged East Asian forestry ranger wearing a dark navy peaked Ushanka winter cap with right earflap down, olive-green fur-collar winter coat, dark turtleneck, silver pocket pen, and thin silver half-rim eyeglasses.\n- <Subject 2>: The muscular bare-armed archer Houyi holding a heavy wooden bow on the right.\n\nsummary:\nInside a snowy birch forest in cold muted winter daylight, <Subject 1> sternly confronts <Subject 2> over poaching birds, speaking with animated indignant authority matching the synchronized dialogue.\n\nretention_analysis:\n- <Video 1> (appears in [Shot 1]): fully_preserved - Preserve the birch-forest depth, muted cold overcast winter lighting and contrast, <Subject 2>'s muscular stance and wooden bow, and <Subject 1>'s exact arm gestures, head angle, and eyebrow motion.\n- <Picture 1> (appears in [Shot 1]): reference - Frame 17 capturing <Subject 1>'s authentic stern scolding expression and rightward profile toward <Subject 2>.\n- <Subject 1> (appears in [Shot 1]): fully_preserved - Maintain unsmiling knit-brow seriousness, navy Ushanka cap, silver half-rim eyeglasses, and audio-synchronized lip articulation across all frames.\n\ndetailed_description:\n- [Shot 1] {00:00.000 - 00:01.792}\n  - shot_cut_type: initial_shot\n  - camera: Fixed medium confrontation two-shot in front of snowy birch trunks.\n  - environment: Subdued overcast cold winter woodland with fallen snow and slender white birch trees.\n  - subjects: <Subject 1> confronts from the left; <Subject 2> faces him from the right.\n  - actions: <Subject 1> grips the confiscated wooden bow and scowls sternly right at <Subject 2>, speaking briskly with unsmiling authority. <d>[unclear]</d>\n  - sound_effects: Subtle snow footsteps and bowstring wooden creak.\n\noverall_soundscape:\nCrisp cold woodland air with assertive Northeast male dialogue.\n\nnon_diegetic_music:\nNone.",
      "seed": 985188,
      "sourceMode": "v4_generated_v5_targeted_refine",
      "video": null,
      "status": "终版成片内的时间段；独立片段未归档",
      "thumb": "media/img-ef068f90ff3a2bc872af.jpg",
      "refs": [
        {
          "label": "QA01_V5_Orig_vs_Final",
          "src": "media/img-4f92f02a87caf1805548.jpg"
        }
      ]
    },
    {
      "id": "S10",
      "title": "S10 · Skit3 wide kang: Nezha foreground + Grandma->LC Grandpa on kang",
      "start": 29.208333,
      "end": 31.833333,
      "duration": 2.625,
      "framing": "生成镜段/接力窗",
      "action": "S10 · Skit3 wide kang: Nezha foreground + Grandma->LC Grandpa on kang",
      "prompt": "subject_definitions:\n- <Subject 1> (visible in <Picture 1>): An authentic middle-aged East Asian rural grandfather with short neatly trimmed black-with-subtle-grey hair, thin silver half-rim eyeglasses, and a dark charcoal quilted cotton Chinese frog-button jacket (bare head with zero headscarf or headwrap).\n- <Subject 2>: Young Nezha wearing red-and-gold armor and twin hair buns handling a crimson silk ribbon.\n\nsummary:\nInside a traditional Northeast Chinese heated kang bedroom, <Subject 1> talks earnestly in low male Northeast dialect while looking downward toward <Subject 2> and his bundle of dried noodles.\n\nretention_analysis:\n- <Video 1> (appears in [Shot 1]): fully_preserved - Preserve the exact indoor camera angle, window light falloff, shadow depth, child <Subject 2>'s red-gold armor and ribbon motion, wall posters, red thermos, and noodle bundle motion.\n- <Picture 1> (appears in [Shot 1]): reference - Frame 29 showing bare-headed <Subject 1> in authentic lighting looking downward toward <Subject 2>/noodles.\n- <Subject 1> (appears in [Shot 1]): fully_preserved - Keep bare neatly trimmed short hair (no headscarf), charcoal quilted jacket, downward-left gaze, unsmiling nagging expression, and audio-synced lip articulation.\n\ndetailed_description:\n- [Shot 1] {00:00.000 - 00:02.625}\n  - shot_cut_type: initial_shot\n  - camera: Steady interior medium shot at eye level beside the kang low table.\n  - environment: Warm sunlit rural kang bedroom featuring colorful traditional wall posters, red floral thermos flask, wooden low table, and dried noodles.\n  - subjects: Young <Subject 2> on the left interacts with <Subject 1> seated on the right/background.\n  - actions: <Subject 1> remains seated on the kang in the background, nodding and glancing downward-left toward <Subject 2> and the noodles with earnest furrowed nagging brow while speaking. <d>[unclear]</d>\n  - sound_effects: Soft rustle of dried noodles and fabric sleeves.\n\noverall_soundscape:\nWarm quiet indoor room tone with deep male Northeast Chinese dialogue.\n\nnon_diegetic_music:\nNone.",
      "seed": 985180,
      "sourceMode": "v4_generated_v5_targeted_refine",
      "video": null,
      "status": "终版成片内的时间段；独立片段未归档",
      "thumb": "media/img-4de57ef69da21468fd1a.jpg",
      "refs": [
        {
          "label": "QA01_V5_Orig_vs_Final",
          "src": "media/img-4f92f02a87caf1805548.jpg"
        }
      ]
    },
    {
      "id": "S11",
      "title": "S11 · Skit3 side two-shot: Nezha left hands ribbon to Grandma->LC Grandpa right",
      "start": 31.833333,
      "end": 35.041667,
      "duration": 3.208333,
      "framing": "生成镜段/接力窗",
      "action": "S11 · Skit3 side two-shot: Nezha left hands ribbon to Grandma->LC Grandpa right",
      "prompt": "subject_definitions:\n- <Subject 1> (visible in <Picture 1>): An authentic middle-aged East Asian rural grandfather with short neatly trimmed black-with-subtle-grey hair, thin silver half-rim eyeglasses, and a dark charcoal quilted cotton Chinese frog-button jacket (bare head with zero headscarf or headwrap).\n- <Subject 2>: Young Nezha wearing red-and-gold armor and twin hair buns handling a crimson silk ribbon.\n\nsummary:\nInside a traditional Northeast Chinese heated kang bedroom, <Subject 1> talks earnestly in low male Northeast dialect while looking downward toward <Subject 2> and his bundle of dried noodles.\n\nretention_analysis:\n- <Video 1> (appears in [Shot 1]): fully_preserved - Preserve the exact indoor camera angle, window light falloff, shadow depth, child <Subject 2>'s red-gold armor and ribbon motion, wall posters, red thermos, and noodle bundle motion.\n- <Picture 1> (appears in [Shot 1]): reference - Frame 36 showing bare-headed <Subject 1> in authentic lighting looking downward toward <Subject 2>/noodles.\n- <Subject 1> (appears in [Shot 1]): fully_preserved - Keep bare neatly trimmed short hair (no headscarf), charcoal quilted jacket, downward-left gaze, unsmiling nagging expression, and audio-synced lip articulation.\n\ndetailed_description:\n- [Shot 1] {00:00.000 - 00:03.208}\n  - shot_cut_type: initial_shot\n  - camera: Steady interior medium shot at eye level beside the kang low table.\n  - environment: Indoor rural kang bedroom bathed in warm golden tungsten light on the rear poster and shadowed foreground backlit silhouette against the bright window behind <Subject 1>.\n  - subjects: Young <Subject 2> on the left interacts with <Subject 1> seated on the right/background.\n  - actions: <Subject 1> leans forward from the shadowed right side looking strictly downward at the red ribbon in <Subject 2>'s small hands, maintaining dark low-key backlit cheek shading. <d>[unclear]</d>\n  - sound_effects: Soft rustle of dried noodles and fabric sleeves.\n\noverall_soundscape:\nWarm quiet indoor room tone with deep male Northeast Chinese dialogue.\n\nnon_diegetic_music:\nNone.",
      "seed": 985181,
      "sourceMode": "v4_generated_v5_targeted_refine",
      "video": null,
      "status": "终版成片内的时间段；独立片段未归档",
      "thumb": "media/img-dba6cde5014aad8382a8.jpg",
      "refs": [
        {
          "label": "QA01_V5_Orig_vs_Final",
          "src": "media/img-4f92f02a87caf1805548.jpg"
        }
      ]
    },
    {
      "id": "S12",
      "title": "S12 · Skit3 front medium: Nezha back left + Grandma->LC Grandpa bundling noodles",
      "start": 35.041667,
      "end": 42.75,
      "duration": 7.708333,
      "framing": "生成镜段/接力窗",
      "action": "S12 · Skit3 front medium: Nezha back left + Grandma->LC Grandpa bundling noodles",
      "prompt": "subject_definitions:\n- <Subject 1> (visible in <Picture 1>): An authentic middle-aged East Asian rural grandfather with short neatly trimmed black-with-subtle-grey hair, thin silver half-rim eyeglasses, and a dark charcoal quilted cotton Chinese frog-button jacket (bare head with zero headscarf or headwrap).\n- <Subject 2>: Young Nezha wearing red-and-gold armor and twin hair buns handling a crimson silk ribbon.\n\nsummary:\nInside a traditional Northeast Chinese heated kang bedroom, <Subject 1> talks earnestly in low male Northeast dialect while looking downward toward <Subject 2> and his bundle of dried noodles.\n\nretention_analysis:\n- <Video 1> (appears in [Shot 1]): fully_preserved - Preserve the exact indoor camera angle, window light falloff, shadow depth, child <Subject 2>'s red-gold armor and ribbon motion, wall posters, red thermos, and noodle bundle motion.\n- <Picture 1> (appears in [Shot 1]): reference - Frame 69 showing bare-headed <Subject 1> in authentic lighting looking downward toward <Subject 2>/noodles.\n- <Subject 1> (appears in [Shot 1]): fully_preserved - Keep bare neatly trimmed short hair (no headscarf), charcoal quilted jacket, downward-left gaze, unsmiling nagging expression, and audio-synced lip articulation.\n\ndetailed_description:\n- [Shot 1] {00:00.000 - 00:07.708}\n  - shot_cut_type: initial_shot\n  - camera: Steady interior medium shot at eye level beside the kang low table.\n  - environment: Warm sunlit rural kang bedroom featuring colorful traditional wall posters, red floral thermos flask, wooden low table, and dried noodles.\n  - subjects: Young <Subject 2> on the left interacts with <Subject 1> seated on the right/background.\n  - actions: <Subject 1> sits behind the low table tying and gathering bundles of pale dried noodles, looking down at his hands and toward <Subject 2> with furrowed brow and natural animated speaking mouth movement. <d>[unclear]</d>\n  - sound_effects: Soft rustle of dried noodles and fabric sleeves.\n\noverall_soundscape:\nWarm quiet indoor room tone with deep male Northeast Chinese dialogue.\n\nnon_diegetic_music:\nNone.",
      "seed": 985182,
      "sourceMode": "v4_generated_v5_targeted_refine",
      "video": null,
      "status": "终版成片内的时间段；独立片段未归档",
      "thumb": "media/img-8906bbc774e793c2d656.jpg",
      "refs": [
        {
          "label": "QA01_V5_Orig_vs_Final",
          "src": "media/img-4f92f02a87caf1805548.jpg"
        }
      ]
    },
    {
      "id": "S13",
      "title": "S13 · Skit3 hands closeup tying noodles on dark grey jacket lap",
      "start": 42.75,
      "end": 44.25,
      "duration": 1.5,
      "framing": "源切镜",
      "action": "S13 · Skit3 hands closeup tying noodles on dark grey jacket lap",
      "prompt": null,
      "seed": null,
      "sourceMode": "source_passthrough",
      "video": null,
      "status": "原片直通，未单独生成",
      "thumb": "media/img-2a6481a86ed0bf95b5fa.jpg",
      "refs": [
        {
          "label": "QA01_V5_Orig_vs_Final",
          "src": "media/img-4f92f02a87caf1805548.jpg"
        }
      ]
    },
    {
      "id": "S14",
      "title": "S14 · Skit4 entry: Staff solo at f0 (keep clean!), Carrier enters -> clear at +54",
      "start": 44.25,
      "end": 48.75,
      "duration": 4.5,
      "framing": "生成镜段/接力窗",
      "action": "S14 · Skit4 entry: Staff solo at f0 (keep clean!), Carrier enters -> clear at +54",
      "prompt": "subject_definitions:\n- <Subject 1> (visible in <Picture 1>): The authentic middle-aged East Asian water carrier wearing a worn black rolled-brim peasant felt hat, faded black-charcoal Chinese frog-button padded jacket with grey right-shoulder patch, thin silver half-rim eyeglasses, and animated expressive brows.\n- <Subject 2>: Sun Wukong seen in left foreground wearing golden lion-shoulder armor and crimson cape beside his upright ornate golden staff.\n\nsummary:\nOn a snowy village road, <Subject 1> argues cheerfully yet earnestly with <Subject 2> while balancing a single wooden shoulder pole and water buckets, squinting and tilting his brows with vivid mid-sentence mouth motion.\n\nretention_analysis:\n- <Video 1> (appears in [Shot 1]): fully_preserved - Preserve the static snowy village street framing, cold overcast winter light, <Subject 2>'s golden armor and vertical golden staff, the single wooden shoulder pole across <Subject 1>'s shoulders, hanging ropes, and swaying water buckets with nothing extra beneath the shoulder pole.\n- <Picture 1> (appears in [Shot 1]): reference - Frame 37 capturing <Subject 1>'s animated raised-brow speaking expression looking left toward <Subject 2>.\n- <Subject 1> (appears in [Shot 1]): fully_preserved - Keep consistent middle-aged facial identity, peasant felt hat, silver half-rim eyeglasses, leftward gaze at <Subject 2>, vivid un-robotic eyebrow tension, and audio-synchronized lip articulation.\n\ndetailed_description:\n- [Shot 1] {00:00.000 - 00:04.500}\n  - shot_cut_type: initial_shot\n  - camera: Fixed over-shoulder two-shot framing <Subject 2> at left edge and <Subject 1> on the right.\n  - environment: Cold overcast snowy rural lane with mud-brick courtyard walls, cornstalk bundles, and frosty rooftops.\n  - subjects: <Subject 2> stands in foreground left; <Subject 1> stands right-center bearing two buckets on a single shoulder pole.\n  - actions: Tilting his brows earnestly while gesturing lightly toward the golden staff, <Subject 1> bargains animatedly with <Subject 2> in lively Northeast banter, squinting naturally and opening his mouth cleanly on every syllable. <d>[unclear]</d>\n  - sound_effects: Subtle creak of rope and water bucket metal handles.\n\noverall_soundscape:\nBrisk cold outdoor village atmosphere with vivid male Northeast Chinese speech.\n\nnon_diegetic_music:\nNone.",
      "seed": 985184,
      "sourceMode": "v4_generated_v5_targeted_refine",
      "video": null,
      "status": "终版成片内的时间段；独立片段未归档",
      "thumb": "media/img-cfc53c0216e162abfd4e.jpg",
      "refs": [
        {
          "label": "QA01_V5_Orig_vs_Final",
          "src": "media/img-4f92f02a87caf1805548.jpg"
        }
      ]
    },
    {
      "id": "S15a",
      "title": "S15a · Skit4 OTS back of black hat onto Sun Wukong",
      "start": 48.75,
      "end": 50.958333,
      "duration": 2.208333,
      "framing": "源切镜",
      "action": "S15a · Skit4 OTS back of black hat onto Sun Wukong",
      "prompt": null,
      "seed": null,
      "sourceMode": "source_passthrough",
      "video": null,
      "status": "原片直通，未单独生成",
      "thumb": "media/img-9547812a1068994ed2e4.jpg",
      "refs": [
        {
          "label": "QA01_V5_Orig_vs_Final",
          "src": "media/img-4f92f02a87caf1805548.jpg"
        }
      ]
    },
    {
      "id": "S15b",
      "title": "S15b · Skit4 OTS behind Wukong left armor onto Carrier facing camera",
      "start": 50.958333,
      "end": 56.083333,
      "duration": 5.125,
      "framing": "生成镜段/接力窗",
      "action": "S15b · Skit4 OTS behind Wukong left armor onto Carrier facing camera",
      "prompt": "subject_definitions:\n- <Subject 1> (visible in <Picture 1>): The authentic middle-aged East Asian water carrier wearing a worn black rolled-brim peasant felt hat, faded black-charcoal Chinese frog-button padded jacket with grey right-shoulder patch, thin silver half-rim eyeglasses, and animated expressive brows.\n- <Subject 2>: Sun Wukong seen in left foreground wearing golden lion-shoulder armor and crimson cape beside his upright ornate golden staff.\n\nsummary:\nOn a snowy village road, <Subject 1> argues cheerfully yet earnestly with <Subject 2> while balancing a single wooden shoulder pole and water buckets, squinting and tilting his brows with vivid mid-sentence mouth motion.\n\nretention_analysis:\n- <Video 1> (appears in [Shot 1]): fully_preserved - Preserve the static snowy village street framing, cold overcast winter light, <Subject 2>'s golden armor and vertical golden staff, the single wooden shoulder pole across <Subject 1>'s shoulders, hanging ropes, and swaying water buckets with nothing extra beneath the shoulder pole.\n- <Picture 1> (appears in [Shot 1]): reference - Frame 37 capturing <Subject 1>'s animated raised-brow speaking expression looking left toward <Subject 2>.\n- <Subject 1> (appears in [Shot 1]): fully_preserved - Keep consistent middle-aged facial identity, peasant felt hat, silver half-rim eyeglasses, leftward gaze at <Subject 2>, vivid un-robotic eyebrow tension, and audio-synchronized lip articulation.\n\ndetailed_description:\n- [Shot 1] {00:00.000 - 00:05.125}\n  - shot_cut_type: initial_shot\n  - camera: Fixed over-shoulder two-shot framing <Subject 2> at left edge and <Subject 1> on the right.\n  - environment: Cold overcast snowy rural lane with mud-brick courtyard walls, cornstalk bundles, and frosty rooftops.\n  - subjects: <Subject 2> stands in foreground left; <Subject 1> stands right-center bearing two buckets on a single shoulder pole.\n  - actions: Tilting his brows earnestly while gesturing lightly toward the golden staff, <Subject 1> bargains animatedly with <Subject 2> in lively Northeast banter, squinting naturally and opening his mouth cleanly on every syllable. <d>[unclear]</d>\n  - sound_effects: Subtle creak of rope and water bucket metal handles.\n\noverall_soundscape:\nBrisk cold outdoor village atmosphere with vivid male Northeast Chinese speech.\n\nnon_diegetic_music:\nNone.",
      "seed": 985283,
      "sourceMode": "v4_generated_v5_targeted_refine",
      "video": null,
      "status": "终版成片内的时间段；独立片段未归档",
      "thumb": "media/img-efb9b6fc154ac85c91e1.jpg",
      "refs": [
        {
          "label": "QA01_V5_Orig_vs_Final",
          "src": "media/img-4f92f02a87caf1805548.jpg"
        }
      ]
    },
    {
      "id": "S16",
      "title": "S16 · Skit4 Wukong solo closeup",
      "start": 56.083333,
      "end": 59.25,
      "duration": 3.166667,
      "framing": "源切镜",
      "action": "S16 · Skit4 Wukong solo closeup",
      "prompt": null,
      "seed": null,
      "sourceMode": "source_passthrough",
      "video": null,
      "status": "原片直通，未单独生成",
      "thumb": "media/img-0a5bc23b7425e0d2ddf8.jpg",
      "refs": [
        {
          "label": "QA01_V5_Orig_vs_Final",
          "src": "media/img-4f92f02a87caf1805548.jpg"
        }
      ]
    },
    {
      "id": "S17a",
      "title": "S17a · Ending 3f transition card",
      "start": 59.25,
      "end": 59.375,
      "duration": 0.125,
      "framing": "源切镜",
      "action": "S17a · Ending 3f transition card",
      "prompt": null,
      "seed": null,
      "sourceMode": "source_passthrough",
      "video": null,
      "status": "原片直通，未单独生成",
      "thumb": "media/img-fc4b8bb0f45bdf7aef05.jpg",
      "refs": [
        {
          "label": "QA01_V5_Orig_vs_Final",
          "src": "media/img-4f92f02a87caf1805548.jpg"
        }
      ]
    },
    {
      "id": "S17b",
      "title": "S17b · Ending Easter Egg: Demon gate + Scrap collector riding tricycle",
      "start": 59.375,
      "end": 59.833333,
      "duration": 0.458333,
      "framing": "生成镜段/接力窗",
      "action": "S17b · Ending Easter Egg: Demon gate + Scrap collector riding tricycle",
      "prompt": "subject_definitions:\n- <Subject 1> (visible in <Picture 1>): The authentic middle-aged East Asian water carrier wearing a worn black rolled-brim peasant felt hat, faded black-charcoal Chinese frog-button padded jacket with grey right-shoulder patch, thin silver half-rim eyeglasses, and animated expressive brows.\n- <Subject 2>: Sun Wukong seen in left foreground wearing golden lion-shoulder armor and crimson cape beside his upright ornate golden staff.\n\nsummary:\nOn a snowy village road, <Subject 1> argues cheerfully yet earnestly with <Subject 2> while balancing a single wooden shoulder pole and water buckets, squinting and tilting his brows with vivid mid-sentence mouth motion.\n\nretention_analysis:\n- <Video 1> (appears in [Shot 1]): fully_preserved - Preserve the static snowy village street framing, cold overcast winter light, <Subject 2>'s golden armor and vertical golden staff, the single wooden shoulder pole across <Subject 1>'s shoulders, hanging ropes, and swaying water buckets with nothing extra beneath the shoulder pole.\n- <Picture 1> (appears in [Shot 1]): reference - Frame 37 capturing <Subject 1>'s animated raised-brow speaking expression looking left toward <Subject 2>.\n- <Subject 1> (appears in [Shot 1]): fully_preserved - Keep consistent middle-aged facial identity, peasant felt hat, silver half-rim eyeglasses, leftward gaze at <Subject 2>, vivid un-robotic eyebrow tension, and audio-synchronized lip articulation.\n\ndetailed_description:\n- [Shot 1] {00:00.000 - 00:00.542}\n  - shot_cut_type: initial_shot\n  - camera: Fixed over-shoulder two-shot framing <Subject 2> at left edge and <Subject 1> on the right.\n  - environment: Cold overcast snowy rural lane with mud-brick courtyard walls, cornstalk bundles, and frosty rooftops.\n  - subjects: <Subject 2> stands in foreground left; <Subject 1> stands right-center bearing two buckets on a single shoulder pole.\n  - actions: Tilting his brows earnestly while gesturing lightly toward the golden staff, <Subject 1> bargains animatedly with <Subject 2> in lively Northeast banter, squinting naturally and opening his mouth cleanly on every syllable. <d>[unclear]</d>\n  - sound_effects: Subtle creak of rope and water bucket metal handles.\n\noverall_soundscape:\nBrisk cold outdoor village atmosphere with vivid male Northeast Chinese speech.\n\nnon_diegetic_music:\nNone.",
      "seed": 985285,
      "sourceMode": "v4_generated_v5_targeted_refine",
      "video": null,
      "status": "终版成片内的时间段；独立片段未归档",
      "thumb": "media/img-f95ea2a3b7614cc81069.jpg",
      "refs": [
        {
          "label": "QA01_V5_Orig_vs_Final",
          "src": "media/img-4f92f02a87caf1805548.jpg"
        }
      ]
    }
  ],
  "generation": {
    "model": "MiniMax H3 Viggle Remake + FaceFusion / LC",
    "params": [
      {
        "k": "终版规格",
        "v": "1280×720 · 24/1 · 59.833s"
      },
      {
        "k": "版本",
        "v": "V5"
      }
    ],
    "notes": [
      "meta.generated 统计生产计划明确的生成窗/替换镜段；只在拥有独立成片文件时才给逐镜 video。",
      "逐镜文本是 V4 源函数重建结果；V5 对前 3 角色的 8 镜另做身份精修，详见私有来源脚本和 QA。",
      "四段东北神话小品和隐藏彩蛋；V4 12 个动态换角镜与 7 个直通镜构成全片，V5 仅对前 3 角色的 8 镜做靶向身份精修。"
    ]
  },
  "deliverables": [
    {
      "name": "东北神话四段_图6LC全角色替换_东北原味配音_改奶奶版_V5全角色高像度终版_720p.mp4",
      "src": "https://github.com/aikingtai-ctrl/jintai-film-showcase/releases/download/media-v1/dongbei-myth-four-skits-v5-60s--7a281a8cae2e67b80c1e.mp4",
      "note": "V5 终版 · 59.833s"
    }
  ]
});
