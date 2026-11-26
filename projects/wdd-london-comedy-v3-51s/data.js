window.registerProject({
  "id": "wdd-london-comedy-v3-51s",
  "title": "武丹丹｜伦敦街头喜剧｜V3 可见帧锁点",
  "subtitle": "2026-11-26 · V3 · 已验收本地终版",
  "logline": "源文件名沿用 V2，实际内容是 2026-11-26 11:48 覆写交付的 V3；以源 SHA 和报告核实。",
  "date": "2026-11-26",
  "tags": [
    "V3",
    "已生成",
    "终版归档",
    "4:3",
    "MiniMax H3 Viggle Remake V3"
  ],
  "model": "MiniMax H3 Viggle Remake V3",
  "modelShort": "MiniMax H3 Viggle Remake V3",
  "poster": "media/img-a0ff7d42654d7ae294d5.jpg",
  "film": {
    "src": "https://github.com/aikingtai-ctrl/jintai-film-showcase/releases/download/media-v1/wdd-london-comedy-v3-51s--bf4e71512198d87d473c.mp4",
    "duration": 50.581,
    "width": 1288,
    "height": 960,
    "fps": "24/1"
  },
  "meta": {
    "shots": 11,
    "generated": 11,
    "durationSec": 50.581,
    "resolution": "1288×960",
    "fps": "24/1",
    "aspect": "4:3",
    "style": "源文件名沿用 V2，实际内容是 2026-11-26 11:48 覆写交付的 V3；以源 SHA 和报告核实。"
  },
  "synopsis": [
    "源文件名沿用 V2，实际内容是 2026-11-26 11:48 覆写交付的 V3；以源 SHA 和报告核实。",
    "逐镜时间码和提示词以原生产计划及提示词构建函数为准；原片直通段明确标出。"
  ],
  "pipeline": [
    {
      "stage": "源素材与镜段计划",
      "tool": "原生产工程",
      "note": "逐镜边界、seed 和提示词按生产计划重建；未归档项在镜头卡明示。"
    },
    {
      "stage": "成片与验收",
      "tool": "MiniMax H3 Viggle Remake V3",
      "note": "V3 终版；QA 图卡和本地来源账本已归档。"
    }
  ],
  "props": [
    {
      "id": "QA01",
      "name": "QA01_V3_英伦高定全11镜16帧_原片vsV3成片_1比1对比总表",
      "image": "media/img-9f52086590c8b1ae0c9a.jpg",
      "desc": "V3 终版验收图卡；来源与哈希见本地账本。"
    },
    {
      "id": "QA02",
      "name": "QA02_V3_五官与配角防窜脸_2.5倍核验板",
      "image": "media/img-c014d870e630cfb1c2f6.jpg",
      "desc": "V3 终版验收图卡；来源与哈希见本地账本。"
    },
    {
      "id": "QA03",
      "name": "QA03_V3_全11镜连续动态抽帧77格核验板",
      "image": "media/img-805af5f50dd5229bcfc1.jpg",
      "desc": "V3 终版验收图卡；来源与哈希见本地账本。"
    },
    {
      "id": "QA04",
      "name": "00_武丹丹_伦敦街头喜剧英伦高定定妆总卡",
      "image": "media/img-9864897fd08c8c4635f9.png",
      "desc": "V3 终版验收图卡；来源与哈希见本地账本。"
    }
  ],
  "shots": [
    {
      "id": "S01",
      "title": "S01 · 伦敦街头可见帧锁点",
      "start": 0,
      "duration": 3.125,
      "framing": "生成窗 / 终版时间段",
      "action": "S01 · 伦敦街头可见帧锁点",
      "prompt": "subject_definitions:\n<Video 1> is the source 4:3 horizontal London street comedy clip.\n<Picture 1>, <Picture 2> are locked spatial reference frames at exact timestamps in the target video.\n<Subject 1> is the 40-year-old East Asian woman wearing shoulder-length soft-wavy jet-black hair and warm caramel-camel double-breasted belted long wool-cashmere coat, black knit turtleneck underneath, slim black trousers, black leather Chelsea boots (never duplicating into extra people or switching scale).\n\nsummary:\n[video editing + precise spatial replacement] Seen from behind on the RIGHT half of the wet sidewalk, <Subject 1> in her caramel-camel trench coat and dark wavy hair walks forward past the open manhole and center passersby, keeping exact right-lane position.\n\nretention_analysis:\n- <Video 1> (source video editing): fully_preserved - Strictly lock horizontal 992x736 framing, overcast grey London daylight, exact trajectory, velocity, scale, camera pan/tilt, and ALL supporting actors/pedestrians (red-coat child, painter, taxi man, passersby) untouched.\n- <Picture 1> (appears in [Shot 1]): reference - target reference key frame at 00.000s locking exact framing and spatial placement (rear_right_walk).\n- <Picture 2> (appears in [Shot 1]): reference - target reference key frame at 02.583s locking exact framing and spatial placement (rear_right_past_manhole).\n- <Subject 1> (appears across [Shot 1]): fully_preserved - Maintain single continuous protagonist tracking matching <Video 1>'s exact occlusion and entry/exit timing.\n\ndetailed_description:\nRealistic crisp overcast London street comedy film clip with natural cool ambient lighting and stable 3D tracking.\n[Shot 1] {00:00.000 - 03.750s} Seen from behind on the RIGHT half of the wet sidewalk, <Subject 1> in her caramel-camel trench coat and dark wavy hair walks forward past the open manhole and center passersby, keeping exact right-lane position.\n\noverall_soundscape:\nRhythmic London comedy street ambiance.\n\nnon_diegetic_music:\nPlayful comedic percussion score from <Video 1>.",
      "seed": 54010,
      "sourceMode": "generated_replacement",
      "video": null,
      "status": "终版成片内的时间段；独立片段未归档",
      "thumb": "media/img-316c34dcaeb506156124.jpg",
      "refs": [
        {
          "label": "QA01_V3_英伦高定全11镜16帧_原片vsV3成片_1比1对比总表",
          "src": "media/img-9f52086590c8b1ae0c9a.jpg"
        }
      ]
    },
    {
      "id": "S02",
      "title": "S02 · 伦敦街头可见帧锁点",
      "start": 3.125,
      "duration": 5,
      "framing": "生成窗 / 终版时间段",
      "action": "S02 · 伦敦街头可见帧锁点",
      "prompt": "subject_definitions:\n<Video 1> is the source 4:3 horizontal London street comedy clip.\n<Picture 1>, <Picture 2> are locked spatial reference frames at exact timestamps in the target video.\n<Subject 1> is the 40-year-old East Asian woman wearing shoulder-length soft-wavy jet-black hair and warm caramel-camel double-breasted belted long wool-cashmere coat, black knit turtleneck underneath, slim black trousers, black leather Chelsea boots (never duplicating into extra people or switching scale).\n\nsummary:\n[video editing + precise spatial replacement] Beside classic stone columns and a black London taxi, <Subject 1> stands smiling subtly holding her white coffee cup and pointing her closed black umbrella playfully as the businessman tugs his stuck tie.\n\nretention_analysis:\n- <Video 1> (source video editing): fully_preserved - Strictly lock horizontal 992x736 framing, overcast grey London daylight, exact trajectory, velocity, scale, camera pan/tilt, and ALL supporting actors/pedestrians (red-coat child, painter, taxi man, passersby) untouched.\n- <Picture 1> (appears in [Shot 1]): reference - target reference key frame at 00.000s locking exact framing and spatial placement (front_cab_stand).\n- <Picture 2> (appears in [Shot 1]): reference - target reference key frame at 02.500s locking exact framing and spatial placement (front_cab_sip).\n- <Subject 1> (appears across [Shot 1]): fully_preserved - Maintain single continuous protagonist tracking matching <Video 1>'s exact occlusion and entry/exit timing.\n\ndetailed_description:\nRealistic crisp overcast London street comedy film clip with natural cool ambient lighting and stable 3D tracking.\n[Shot 1] {00:00.000 - 05.167s} Beside classic stone columns and a black London taxi, <Subject 1> stands smiling subtly holding her white coffee cup and pointing her closed black umbrella playfully as the businessman tugs his stuck tie.\n\noverall_soundscape:\nRhythmic London comedy street ambiance.\n\nnon_diegetic_music:\nPlayful comedic percussion score from <Video 1>.",
      "seed": 54020,
      "sourceMode": "generated_replacement",
      "video": null,
      "status": "终版成片内的时间段；独立片段未归档",
      "thumb": "media/img-4d9e31a47e82fcbd7db2.jpg",
      "refs": [
        {
          "label": "QA01_V3_英伦高定全11镜16帧_原片vsV3成片_1比1对比总表",
          "src": "media/img-9f52086590c8b1ae0c9a.jpg"
        }
      ]
    },
    {
      "id": "S03",
      "title": "S03 · 伦敦街头可见帧锁点",
      "start": 8.125,
      "duration": 4.958333,
      "framing": "生成窗 / 终版时间段",
      "action": "S03 · 伦敦街头可见帧锁点",
      "prompt": "subject_definitions:\n<Video 1> is the source 4:3 horizontal London street comedy clip.\n<Picture 1>, <Picture 2> are locked spatial reference frames at exact timestamps in the target video.\n<Subject 1> is the 40-year-old East Asian woman wearing shoulder-length soft-wavy jet-black hair and warm caramel-camel double-breasted belted long wool-cashmere coat, black knit turtleneck underneath, slim black trousers, black leather Chelsea boots (never duplicating into extra people or switching scale).\n\nsummary:\n[video editing + precise spatial replacement] <Subject 1> walks down the wet brick alley toward camera as a white sheet drifts down onto the puddle, maintaining crisp three-dimensional continuity.\n\nretention_analysis:\n- <Video 1> (source video editing): fully_preserved - Strictly lock horizontal 992x736 framing, overcast grey London daylight, exact trajectory, velocity, scale, camera pan/tilt, and ALL supporting actors/pedestrians (red-coat child, painter, taxi man, passersby) untouched.\n- <Picture 1> (appears in [Shot 1]): reference - target reference key frame at 00.000s locking exact framing and spatial placement (alley_walk_far).\n- <Picture 2> (appears in [Shot 1]): reference - target reference key frame at 02.458s locking exact framing and spatial placement (alley_walk_mid).\n- <Subject 1> (appears across [Shot 1]): fully_preserved - Maintain single continuous protagonist tracking matching <Video 1>'s exact occlusion and entry/exit timing.\n\ndetailed_description:\nRealistic crisp overcast London street comedy film clip with natural cool ambient lighting and stable 3D tracking.\n[Shot 1] {00:00.000 - 05.167s} <Subject 1> walks down the wet brick alley toward camera as a white sheet drifts down onto the puddle, maintaining crisp three-dimensional continuity.\n\noverall_soundscape:\nRhythmic London comedy street ambiance.\n\nnon_diegetic_music:\nPlayful comedic percussion score from <Video 1>.",
      "seed": 54030,
      "sourceMode": "generated_replacement",
      "video": null,
      "status": "终版成片内的时间段；独立片段未归档",
      "thumb": "media/img-686b2590220441dbbc6a.jpg",
      "refs": [
        {
          "label": "QA01_V3_英伦高定全11镜16帧_原片vsV3成片_1比1对比总表",
          "src": "media/img-9f52086590c8b1ae0c9a.jpg"
        }
      ]
    },
    {
      "id": "S04",
      "title": "S04 · 伦敦街头可见帧锁点",
      "start": 13.083333,
      "duration": 5.083333,
      "framing": "生成窗 / 终版时间段",
      "action": "S04 · 伦敦街头可见帧锁点",
      "prompt": "subject_definitions:\n<Video 1> is the source 4:3 horizontal London street comedy clip.\n<Picture 1>, <Picture 2> are locked spatial reference frames at exact timestamps in the target video.\n<Subject 1> is the 40-year-old East Asian woman wearing shoulder-length soft-wavy jet-black hair and warm caramel-camel double-breasted belted long wool-cashmere coat, black knit turtleneck underneath, slim black trousers, black leather Chelsea boots (never duplicating into extra people or switching scale).\n\nsummary:\n[video editing + precise spatial replacement] Walking right-to-left past a steel trash can in dark arched brick street, <Subject 1> catches a falling pizza slice with her black umbrella tip while a rat crosses below.\n\nretention_analysis:\n- <Video 1> (source video editing): fully_preserved - Strictly lock horizontal 992x736 framing, overcast grey London daylight, exact trajectory, velocity, scale, camera pan/tilt, and ALL supporting actors/pedestrians (red-coat child, painter, taxi man, passersby) untouched.\n- <Picture 1> (appears in [Shot 1]): reference - target reference key frame at 00.000s locking exact framing and spatial placement (tunnel_side_enter).\n- <Picture 2> (appears in [Shot 1]): reference - target reference key frame at 02.167s locking exact framing and spatial placement (tunnel_pizza_umbrella).\n- <Subject 1> (appears across [Shot 1]): fully_preserved - Maintain single continuous protagonist tracking matching <Video 1>'s exact occlusion and entry/exit timing.\n\ndetailed_description:\nRealistic crisp overcast London street comedy film clip with natural cool ambient lighting and stable 3D tracking.\n[Shot 1] {00:00.000 - 05.167s} Walking right-to-left past a steel trash can in dark arched brick street, <Subject 1> catches a falling pizza slice with her black umbrella tip while a rat crosses below.\n\noverall_soundscape:\nRhythmic London comedy street ambiance.\n\nnon_diegetic_music:\nPlayful comedic percussion score from <Video 1>.",
      "seed": 54040,
      "sourceMode": "generated_replacement",
      "video": null,
      "status": "终版成片内的时间段；独立片段未归档",
      "thumb": "media/img-652c229753759be6aff4.jpg",
      "refs": [
        {
          "label": "QA01_V3_英伦高定全11镜16帧_原片vsV3成片_1比1对比总表",
          "src": "media/img-9f52086590c8b1ae0c9a.jpg"
        }
      ]
    },
    {
      "id": "S05",
      "title": "S05 · 伦敦街头可见帧锁点",
      "start": 18.166667,
      "duration": 4.958333,
      "framing": "生成窗 / 终版时间段",
      "action": "S05 · 伦敦街头可见帧锁点",
      "prompt": "subject_definitions:\n<Video 1> is the source 4:3 horizontal London street comedy clip.\n<Picture 1>, <Picture 2> are locked spatial reference frames at exact timestamps in the target video.\n<Subject 1> is the 40-year-old East Asian woman wearing shoulder-length soft-wavy jet-black hair and warm caramel-camel double-breasted belted long wool-cashmere coat, black knit turtleneck underneath, slim black trousers, black leather Chelsea boots (never duplicating into extra people or switching scale).\n\nsummary:\n[video editing + precise spatial replacement] <Subject 1> walks forward along a green playground fence, raises her closed black umbrella vertically to catch a bouncing basketball, then drinks from her coffee cup.\n\nretention_analysis:\n- <Video 1> (source video editing): fully_preserved - Strictly lock horizontal 992x736 framing, overcast grey London daylight, exact trajectory, velocity, scale, camera pan/tilt, and ALL supporting actors/pedestrians (red-coat child, painter, taxi man, passersby) untouched.\n- <Picture 1> (appears in [Shot 1]): reference - target reference key frame at 00.000s locking exact framing and spatial placement (court_walk).\n- <Picture 2> (appears in [Shot 1]): reference - target reference key frame at 02.500s locking exact framing and spatial placement (court_basketball_umbrella).\n- <Subject 1> (appears across [Shot 1]): fully_preserved - Maintain single continuous protagonist tracking matching <Video 1>'s exact occlusion and entry/exit timing.\n\ndetailed_description:\nRealistic crisp overcast London street comedy film clip with natural cool ambient lighting and stable 3D tracking.\n[Shot 1] {00:00.000 - 05.167s} <Subject 1> walks forward along a green playground fence, raises her closed black umbrella vertically to catch a bouncing basketball, then drinks from her coffee cup.\n\noverall_soundscape:\nRhythmic London comedy street ambiance.\n\nnon_diegetic_music:\nPlayful comedic percussion score from <Video 1>.",
      "seed": 54050,
      "sourceMode": "generated_replacement",
      "video": null,
      "status": "终版成片内的时间段；独立片段未归档",
      "thumb": "media/img-8162c8735e64b64e5296.jpg",
      "refs": [
        {
          "label": "QA01_V3_英伦高定全11镜16帧_原片vsV3成片_1比1对比总表",
          "src": "media/img-9f52086590c8b1ae0c9a.jpg"
        }
      ]
    },
    {
      "id": "S06",
      "title": "S06 · 伦敦街头可见帧锁点",
      "start": 23.125,
      "duration": 5.041667,
      "framing": "生成窗 / 终版时间段",
      "action": "S06 · 伦敦街头可见帧锁点",
      "prompt": "subject_definitions:\n<Video 1> is the source 4:3 horizontal London street comedy clip.\n<Picture 1>, <Picture 2> are locked spatial reference frames at exact timestamps in the target video.\n<Subject 1> is the 40-year-old East Asian woman wearing shoulder-length soft-wavy jet-black hair and warm caramel-camel double-breasted belted long wool-cashmere coat, black knit turtleneck underneath, slim black trousers, black leather Chelsea boots (never duplicating into extra people or switching scale).\n\nsummary:\n[video editing + precise spatial replacement] Camera starts tilted up on the pink London building facade then pans down to <Subject 1> walking past a pedestrian holding an open black umbrella while an elderly woman waters window flowers above; zero extra figures appear.\n\nretention_analysis:\n- <Video 1> (source video editing): fully_preserved - Strictly lock horizontal 992x736 framing, overcast grey London daylight, exact trajectory, velocity, scale, camera pan/tilt, and ALL supporting actors/pedestrians (red-coat child, painter, taxi man, passersby) untouched.\n- <Picture 1> (appears in [Shot 1]): reference - target reference key frame at 02.500s locking exact framing and spatial placement (pink_street_mid).\n- <Picture 2> (appears in [Shot 1]): reference - target reference key frame at 04.167s locking exact framing and spatial placement (pink_street_close).\n- <Subject 1> (appears across [Shot 1]): fully_preserved - Maintain single continuous protagonist tracking matching <Video 1>'s exact occlusion and entry/exit timing.\n\ndetailed_description:\nRealistic crisp overcast London street comedy film clip with natural cool ambient lighting and stable 3D tracking.\n[Shot 1] {00:00.000 - 05.167s} Camera starts tilted up on the pink London building facade then pans down to <Subject 1> walking past a pedestrian holding an open black umbrella while an elderly woman waters window flowers above; zero extra figures appear.\n\noverall_soundscape:\nRhythmic London comedy street ambiance.\n\nnon_diegetic_music:\nPlayful comedic percussion score from <Video 1>.",
      "seed": 54060,
      "sourceMode": "generated_replacement",
      "video": null,
      "status": "终版成片内的时间段；独立片段未归档",
      "thumb": "media/img-418117904618704b1e0c.jpg",
      "refs": [
        {
          "label": "QA01_V3_英伦高定全11镜16帧_原片vsV3成片_1比1对比总表",
          "src": "media/img-9f52086590c8b1ae0c9a.jpg"
        }
      ]
    },
    {
      "id": "S07",
      "title": "S07 · 伦敦街头可见帧锁点",
      "start": 28.166667,
      "duration": 5,
      "framing": "生成窗 / 终版时间段",
      "action": "S07 · 伦敦街头可见帧锁点",
      "prompt": "subject_definitions:\n<Video 1> is the source 4:3 horizontal London street comedy clip.\n<Picture 1>, <Picture 2> are locked spatial reference frames at exact timestamps in the target video.\n<Subject 1> is the 40-year-old East Asian woman wearing shoulder-length soft-wavy jet-black hair and warm caramel-camel double-breasted belted long wool-cashmere coat, black knit turtleneck underneath, slim black trousers, black leather Chelsea boots (never duplicating into extra people or switching scale).\n\nsummary:\n[video editing + precise spatial replacement] <Subject 1> walks down the left damp sidewalk as a white van's rear doors swing open spilling bright oranges onto the wet asphalt.\n\nretention_analysis:\n- <Video 1> (source video editing): fully_preserved - Strictly lock horizontal 992x736 framing, overcast grey London daylight, exact trajectory, velocity, scale, camera pan/tilt, and ALL supporting actors/pedestrians (red-coat child, painter, taxi man, passersby) untouched.\n- <Picture 1> (appears in [Shot 1]): reference - target reference key frame at 01.667s locking exact framing and spatial placement (van_oranges_left1).\n- <Picture 2> (appears in [Shot 1]): reference - target reference key frame at 03.333s locking exact framing and spatial placement (van_oranges_left2).\n- <Subject 1> (appears across [Shot 1]): fully_preserved - Maintain single continuous protagonist tracking matching <Video 1>'s exact occlusion and entry/exit timing.\n\ndetailed_description:\nRealistic crisp overcast London street comedy film clip with natural cool ambient lighting and stable 3D tracking.\n[Shot 1] {00:00.000 - 05.167s} <Subject 1> walks down the left damp sidewalk as a white van's rear doors swing open spilling bright oranges onto the wet asphalt.\n\noverall_soundscape:\nRhythmic London comedy street ambiance.\n\nnon_diegetic_music:\nPlayful comedic percussion score from <Video 1>.",
      "seed": 54070,
      "sourceMode": "generated_replacement",
      "video": null,
      "status": "终版成片内的时间段；独立片段未归档",
      "thumb": "media/img-3013f4eec23ca4555b09.jpg",
      "refs": [
        {
          "label": "QA01_V3_英伦高定全11镜16帧_原片vsV3成片_1比1对比总表",
          "src": "media/img-9f52086590c8b1ae0c9a.jpg"
        }
      ]
    },
    {
      "id": "S08",
      "title": "S08 · 伦敦街头可见帧锁点",
      "start": 33.166667,
      "duration": 6,
      "framing": "生成窗 / 终版时间段",
      "action": "S08 · 伦敦街头可见帧锁点",
      "prompt": "subject_definitions:\n<Video 1> is the source 4:3 horizontal London street comedy clip.\n<Picture 1>, <Picture 2>, <Picture 3>, <Picture 4> are locked spatial reference frames at exact timestamps in the target video.\n<Subject 1> is the 40-year-old East Asian woman wearing shoulder-length soft-wavy jet-black hair and warm caramel-camel double-breasted belted long wool-cashmere coat, black knit turtleneck underneath, slim black trousers, black leather Chelsea boots (never duplicating into extra people or switching scale).\n\nsummary:\n[video editing + precise spatial replacement] The male Tower Bridge artist paints alone at the start (<Picture 1>); <Subject 1> steps in from the LEFT side in caramel-camel coat holding a coffee cup (no open umbrella over her head), interacts cleanly (<Picture 2>, <Picture 3>), and exits left leaving the painter alone (<Picture 4>).\n\nretention_analysis:\n- <Video 1> (source video editing): fully_preserved - Strictly lock horizontal 992x736 framing, overcast grey London daylight, exact trajectory, velocity, scale, camera pan/tilt, and ALL supporting actors/pedestrians (red-coat child, painter, taxi man, passersby) untouched.\n- <Picture 1> (appears in [Shot 1]): reference - preserved original raw frame showing exact scene without protagonist at 00.000s locking exact framing and spatial placement (painter_only_raw).\n- <Picture 2> (appears in [Shot 1]): reference - target reference key frame at 02.000s locking exact framing and spatial placement (side_painter_talk).\n- <Picture 3> (appears in [Shot 1]): reference - target reference key frame at 03.667s locking exact framing and spatial placement (side_painter_sip).\n- <Picture 4> (appears in [Shot 1]): reference - preserved original raw frame showing exact scene without protagonist at 05.208s locking exact framing and spatial placement (painter_exit_raw).\n- <Subject 1> (appears across [Shot 1]): fully_preserved - Maintain single continuous protagonist tracking matching <Video 1>'s exact occlusion and entry/exit timing.\n\ndetailed_description:\nRealistic crisp overcast London street comedy film clip with natural cool ambient lighting and stable 3D tracking.\n[Shot 1] {00:00.000 - 06.583s} The male Tower Bridge artist paints alone at the start (<Picture 1>); <Subject 1> steps in from the LEFT side in caramel-camel coat holding a coffee cup (no open umbrella over her head), interacts cleanly (<Picture 2>, <Picture 3>), and exits left leaving the painter alone (<Picture 4>).\n\noverall_soundscape:\nRhythmic London comedy street ambiance.\n\nnon_diegetic_music:\nPlayful comedic percussion score from <Video 1>.",
      "seed": 54080,
      "sourceMode": "generated_replacement",
      "video": null,
      "status": "终版成片内的时间段；独立片段未归档",
      "thumb": "media/img-a47d9f1162fc6d808432.jpg",
      "refs": [
        {
          "label": "QA01_V3_英伦高定全11镜16帧_原片vsV3成片_1比1对比总表",
          "src": "media/img-9f52086590c8b1ae0c9a.jpg"
        }
      ]
    },
    {
      "id": "S09",
      "title": "S09 · 伦敦街头可见帧锁点",
      "start": 39.166667,
      "duration": 5,
      "framing": "生成窗 / 终版时间段",
      "action": "S09 · 伦敦街头可见帧锁点",
      "prompt": "subject_definitions:\n<Video 1> is the source 4:3 horizontal London street comedy clip.\n<Picture 1>, <Picture 2>, <Picture 3>, <Picture 4> are locked spatial reference frames at exact timestamps in the target video.\n<Subject 1> is the 40-year-old East Asian woman wearing shoulder-length soft-wavy jet-black hair and warm caramel-camel double-breasted belted long wool-cashmere coat, black knit turtleneck underneath, slim black trousers, black leather Chelsea boots (never duplicating into extra people or switching scale).\n\nsummary:\n[video editing + precise spatial replacement] The red-coat little girl stands centered alone at <Picture 1>; ONLY <Subject 1>'s passing caramel-camel coat torso, trousers, and lowered black umbrella walk briefly behind the child (<Picture 2>, <Picture 3>), then <Subject 1> exits completely leaving ONLY the red-coat child (<Picture 4>). Never spawn any extra standing adult.\n\nretention_analysis:\n- <Video 1> (source video editing): fully_preserved - Strictly lock horizontal 992x736 framing, overcast grey London daylight, exact trajectory, velocity, scale, camera pan/tilt, and ALL supporting actors/pedestrians (red-coat child, painter, taxi man, passersby) untouched.\n- <Picture 1> (appears in [Shot 1]): reference - preserved original raw frame showing exact scene without protagonist at 00.000s locking exact framing and spatial placement (child_only_raw).\n- <Picture 2> (appears in [Shot 1]): reference - target reference key frame at 01.000s locking exact framing and spatial placement (passing_headless_coat1).\n- <Picture 3> (appears in [Shot 1]): reference - target reference key frame at 01.500s locking exact framing and spatial placement (passing_headless_coat2).\n- <Picture 4> (appears in [Shot 1]): reference - preserved original raw frame showing exact scene without protagonist at 02.833s locking exact framing and spatial placement (child_exit_raw).\n- <Subject 1> (appears across [Shot 1]): fully_preserved - Maintain single continuous protagonist tracking matching <Video 1>'s exact occlusion and entry/exit timing.\n\ndetailed_description:\nRealistic crisp overcast London street comedy film clip with natural cool ambient lighting and stable 3D tracking.\n[Shot 1] {00:00.000 - 05.167s} The red-coat little girl stands centered alone at <Picture 1>; ONLY <Subject 1>'s passing caramel-camel coat torso, trousers, and lowered black umbrella walk briefly behind the child (<Picture 2>, <Picture 3>), then <Subject 1> exits completely leaving ONLY the red-coat child (<Picture 4>). Never spawn any extra standing adult.\n\noverall_soundscape:\nRhythmic London comedy street ambiance.\n\nnon_diegetic_music:\nPlayful comedic percussion score from <Video 1>.",
      "seed": 54090,
      "sourceMode": "generated_replacement",
      "video": null,
      "status": "终版成片内的时间段；独立片段未归档",
      "thumb": "media/img-23dfc9be44a7117b6fe4.jpg",
      "refs": [
        {
          "label": "QA01_V3_英伦高定全11镜16帧_原片vsV3成片_1比1对比总表",
          "src": "media/img-9f52086590c8b1ae0c9a.jpg"
        }
      ]
    },
    {
      "id": "S10",
      "title": "S10 · 伦敦街头可见帧锁点",
      "start": 44.166667,
      "duration": 6.041667,
      "framing": "生成窗 / 终版时间段",
      "action": "S10 · 伦敦街头可见帧锁点",
      "prompt": "subject_definitions:\n<Video 1> is the source 4:3 horizontal London street comedy clip.\n<Picture 1>, <Picture 2>, <Picture 3> are locked spatial reference frames at exact timestamps in the target video.\n<Subject 1> is the 40-year-old East Asian woman wearing shoulder-length soft-wavy jet-black hair and warm caramel-camel double-breasted belted long wool-cashmere coat, black knit turtleneck underneath, slim black trousers, black leather Chelsea boots (never duplicating into extra people or switching scale).\n\nsummary:\n[video editing + precise spatial replacement] Walking left-to-right across Parliament Square before Big Ben (<Picture 1>, <Picture 2>), <Subject 1> drops cleanly down into the open dark manhole, leaving ONLY her closed black umbrella on wet stone beside the manhole (<Picture 3>).\n\nretention_analysis:\n- <Video 1> (source video editing): fully_preserved - Strictly lock horizontal 992x736 framing, overcast grey London daylight, exact trajectory, velocity, scale, camera pan/tilt, and ALL supporting actors/pedestrians (red-coat child, painter, taxi man, passersby) untouched.\n- <Picture 1> (appears in [Shot 1]): reference - target reference key frame at 00.000s locking exact framing and spatial placement (bigben_walk).\n- <Picture 2> (appears in [Shot 1]): reference - target reference key frame at 02.000s locking exact framing and spatial placement (bigben_step_hole).\n- <Picture 3> (appears in [Shot 1]): reference - preserved original raw frame showing exact scene without protagonist at 04.458s locking exact framing and spatial placement (bigben_manhole_raw).\n- <Subject 1> (appears across [Shot 1]): fully_preserved - Maintain single continuous protagonist tracking matching <Video 1>'s exact occlusion and entry/exit timing.\n\ndetailed_description:\nRealistic crisp overcast London street comedy film clip with natural cool ambient lighting and stable 3D tracking.\n[Shot 1] {00:00.000 - 06.583s} Walking left-to-right across Parliament Square before Big Ben (<Picture 1>, <Picture 2>), <Subject 1> drops cleanly down into the open dark manhole, leaving ONLY her closed black umbrella on wet stone beside the manhole (<Picture 3>).\n\noverall_soundscape:\nRhythmic London comedy street ambiance.\n\nnon_diegetic_music:\nPlayful comedic percussion score from <Video 1>.",
      "seed": 54100,
      "sourceMode": "generated_replacement",
      "video": null,
      "status": "终版成片内的时间段；独立片段未归档",
      "thumb": "media/img-006dc49789bcfc8670ee.jpg",
      "refs": [
        {
          "label": "QA01_V3_英伦高定全11镜16帧_原片vsV3成片_1比1对比总表",
          "src": "media/img-9f52086590c8b1ae0c9a.jpg"
        }
      ]
    },
    {
      "id": "S11",
      "title": "S11 · 伦敦街头可见帧锁点",
      "start": 50.208333,
      "duration": 0.208334,
      "framing": "生成窗 / 终版时间段",
      "action": "S11 · 伦敦街头可见帧锁点",
      "prompt": "subject_definitions:\n<Video 1> is the source 4:3 horizontal London street comedy clip.\n<Picture 1> are locked spatial reference frames at exact timestamps in the target video.\n<Subject 1> is the 40-year-old East Asian woman wearing shoulder-length soft-wavy jet-black hair and warm caramel-camel double-breasted belted long wool-cashmere coat, black knit turtleneck underneath, slim black trousers, black leather Chelsea boots (never duplicating into extra people or switching scale).\n\nsummary:\n[video editing + precise spatial replacement] Seen from behind, <Subject 1> in her belted caramel-camel coat and dark wavy hair walks calmly away down the wet street.\n\nretention_analysis:\n- <Video 1> (source video editing): fully_preserved - Strictly lock horizontal 992x736 framing, overcast grey London daylight, exact trajectory, velocity, scale, camera pan/tilt, and ALL supporting actors/pedestrians (red-coat child, painter, taxi man, passersby) untouched.\n- <Picture 1> (appears in [Shot 1]): reference - target reference key frame at 00.000s locking exact framing and spatial placement (closing_rear_walk).\n- <Subject 1> (appears across [Shot 1]): fully_preserved - Maintain single continuous protagonist tracking matching <Video 1>'s exact occlusion and entry/exit timing.\n\ndetailed_description:\nRealistic crisp overcast London street comedy film clip with natural cool ambient lighting and stable 3D tracking.\n[Shot 1] {00:00.000 - 03.750s} Seen from behind, <Subject 1> in her belted caramel-camel coat and dark wavy hair walks calmly away down the wet street.\n\noverall_soundscape:\nRhythmic London comedy street ambiance.\n\nnon_diegetic_music:\nPlayful comedic percussion score from <Video 1>.",
      "seed": 54110,
      "sourceMode": "generated_replacement",
      "video": null,
      "status": "终版成片内的时间段；独立片段未归档",
      "thumb": "media/img-1370f74618189f8eece9.jpg",
      "refs": [
        {
          "label": "QA01_V3_英伦高定全11镜16帧_原片vsV3成片_1比1对比总表",
          "src": "media/img-9f52086590c8b1ae0c9a.jpg"
        }
      ]
    }
  ],
  "generation": {
    "model": "MiniMax H3 Viggle Remake V3",
    "params": [
      {
        "k": "终版规格",
        "v": "1288×960 · 24/1 · 50.581s"
      },
      {
        "k": "版本",
        "v": "V3"
      }
    ],
    "notes": [
      "meta.generated 统计生产计划明确的生成窗/替换镜段；只在拥有独立成片文件时才给逐镜 video。",
      "逐镜 prompt 为源脚本函数和源计划重建的文本，不等同于平台提交日志逐字存证。",
      "源文件名沿用 V2，实际内容是 2026-11-26 11:48 覆写交付的 V3；以源 SHA 和报告核实。",
      "封装总时长 50.581s，视频轨实际 50.417s；镜段缩略图与时间边界以视频轨为准。"
    ]
  },
  "deliverables": [
    {
      "name": "武丹丹_伦敦街头喜剧_现代英伦高定造型_全3DViggleH3_V2终版_24fps.mp4",
      "src": "https://github.com/aikingtai-ctrl/jintai-film-showcase/releases/download/media-v1/wdd-london-comedy-v3-51s--bf4e71512198d87d473c.mp4",
      "note": "V3 终版 · 50.581s"
    }
  ]
});
