window.registerProject({
  "id": "zheergen-couture-v2-141s",
  "title": "折耳根高定大片｜马龙白兰度造型与 LC 音色｜V2",
  "subtitle": "2026-11-24 · V2 · 已验收本地终版",
  "logline": "V2 16 个生成窗；原片空镜/微距和品牌字幕依计划直通。",
  "date": "2026-11-24",
  "tags": [
    "V2",
    "已生成",
    "终版归档",
    "16:9",
    "MiniMax H3 Viggle Remake"
  ],
  "model": "MiniMax H3 Viggle Remake + LC_DF3_STUDIO",
  "modelShort": "MiniMax H3 Viggle Remake",
  "poster": "media/img-3560e326d9d4b30b3a63.jpg",
  "film": {
    "src": "https://github.com/aikingtai-ctrl/jintai-film-showcase/releases/download/media-v1/zheergen-couture-v2-141s--2300ecc6700f012bc391.mp4",
    "duration": 141.333333,
    "width": 1920,
    "height": 1080,
    "fps": "30/1"
  },
  "meta": {
    "shots": 18,
    "generated": 16,
    "durationSec": 141.333333,
    "resolution": "1920×1080",
    "fps": "30/1",
    "aspect": "16:9",
    "style": "V2 16 个生成窗；原片空镜/微距和品牌字幕依计划直通。"
  },
  "synopsis": [
    "V2 16 个生成窗；原片空镜/微距和品牌字幕依计划直通。",
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
      "tool": "MiniMax H3 Viggle Remake + LC_DF3_STUDIO",
      "note": "V2 终版；QA 图卡和本地来源账本已归档。"
    }
  ],
  "props": [
    {
      "id": "QA01",
      "name": "折耳根高定大片_05_全片涉人镜头原片vs成片1比1质检总表",
      "image": "media/img-78110cc2c8b0c59a899d.jpg",
      "desc": "V2 终版验收图卡；来源与哈希见本地账本。"
    },
    {
      "id": "QA02",
      "name": "折耳根高定大片_06_改词改字幕与隐蔽四镜专项核验板",
      "image": "media/img-89a1f69b0d9d302b8137.jpg",
      "desc": "V2 终版验收图卡；来源与哈希见本地账本。"
    },
    {
      "id": "QA03",
      "name": "折耳根高定大片_07_时序连贯与人物1比1尺度核验板",
      "image": "media/img-d39171a17858476f6444.jpg",
      "desc": "V2 终版验收图卡；来源与哈希见本地账本。"
    }
  ],
  "shots": [
    {
      "id": "S01",
      "title": "贵州绿山石碑全景+开场大标题",
      "start": 0,
      "duration": 4.266667,
      "framing": "生成窗 / 终版时间段",
      "action": "贵州绿山石碑全景+开场大标题",
      "prompt": "[S01_W0]\nsubject_definitions:\n<Video 1> is the source video clip for the editing task.\n<Picture 1> is reference frame of the target video, from [Shot 1].\n<Subject 1> is the bareheaded gentleman in <Picture 1>: a bareheaded mature East Asian gentleman with vintage slicked-back dark wavy hair, zero wide-brimmed hat, thin silver half-rim rectangular glasses, bespoke black silk satin peak-lapel Godfather tuxedo with a crimson rosebud on the left lapel, crisp white wing-collar dress shirt, crisp white French cuffs with silver cufflinks, hand-tied black silk bow tie, and black tailored wool trousers. He replaces the woman in <Video 1>.\n\nsummary:\n[video editing + character replacement] In natural overcast daylight on a misty green Guizhou mountainside, <Subject 1> stands calmly beside the grey stone pedestal wearing his black Godfather tuxedo. The single continuous shot with no cuts, exact camera framing and movement, figure scale, background environment, lighting, and smooth natural motion timing of <Video 1> are strictly preserved.\n\nretention_analysis:\n- <Video 1> (source video editing): fully_preserved - from 00:00.000 to 04.458s with zero cuts, exact camera trajectory, exact figure scale and bounding box, background geometry, lighting, motion velocity, and timing are copied frame for frame.\n- <Picture 1> (appears in [Shot 1]): reference - a frame of the target video at 02.000s showing exact target scale, framing, lighting, and character look.\n- <Subject 1> (appears in [Shot 1]): fully_preserved - keep bareheaded vintage slicked-back dark hair, thin silver glasses where face is visible, Godfather tuxedo, crimson lapel rose, zero hat, zero pearls, and constant scale matched to <Video 1> in every single frame.\n\ndetailed_description:\nA crisp realistic cinema film scene matching the exact visual style and grading of <Picture 1>.\n[Shot 1] {00:00.000 - 04.458s}\n- shot_cut_type: continuous_single_shot\n- camera: Fixed wide outdoor shot matching the exact focal length, compact standing figure height (~14% hair-top to bottom edge), and misty hillside of <Video 1>.\n- environment: Rolling dark-green misty mountain slopes and foreground dark grey rectangular stone monolith with two tiny plated dishes on top.\n- subjects: <Subject 1> is the bareheaded gentleman in <Picture 1>: a bareheaded mature East Asian gentleman with vintage slicked-back dark wavy hair, zero wide-brimmed hat, thin silver half-rim rectangular glasses, bespoke black silk satin peak-lapel Godfather tuxedo with a crimson rosebud on the left lapel, crisp white wing-collar dress shirt, crisp white French cuffs with silver cufflinks, hand-tied black silk bow tie, and black tailored wool trousers. He replaces the woman in <Video 1>.\n- actions: Throughout 00:00.000 to 00:04.250, <Subject 1> stands composed beside the stone pedestal with a subtle calm breathing posture before the frame fades smoothly to black at 00:04.100. In every single frame from 00:00.000 to 04.458s, keep continuous fluid motion matching <Video 1> with zero sudden scale pops, zero slideshow freezing, and zero mid-shot hard cuts.\n\noverall_soundscape:\nGentle outdoor mountain wind over serene luxury orchestral music.\n\nnon_diegetic_music:\nMatching source score from <Video 1>.",
      "seed": 3101,
      "sourceMode": "generated_replacement",
      "video": null,
      "status": "终版成片内的时间段；独立片段未归档",
      "thumb": "media/img-d6f0d80e28b895cd4281.jpg",
      "refs": [
        {
          "label": "折耳根高定大片_05_全片涉人镜头原片vs成片1比1质检总表",
          "src": "media/img-78110cc2c8b0c59a899d.jpg"
        }
      ]
    },
    {
      "id": "P01",
      "title": "摆盘拉酱汁/根茎竹林云海露珠/片尾赤金闪切",
      "start": 4.266667,
      "duration": 50.1,
      "framing": "原片切镜",
      "action": "摆盘拉酱汁/根茎竹林云海露珠/片尾赤金闪切",
      "prompt": null,
      "seed": null,
      "sourceMode": "source_passthrough",
      "video": null,
      "status": "原片直通，未单独生成",
      "thumb": "media/img-1a759d216fef1a14d438.jpg",
      "refs": [
        {
          "label": "折耳根高定大片_05_全片涉人镜头原片vs成片1比1质检总表",
          "src": "media/img-78110cc2c8b0c59a899d.jpg"
        }
      ]
    },
    {
      "id": "S02",
      "title": "清水混凝土柱廊扶墙走出",
      "start": 54.366667,
      "duration": 3.7,
      "framing": "生成窗 / 终版时间段",
      "action": "清水混凝土柱廊扶墙走出",
      "prompt": "[S02_W0]\nsubject_definitions:\n<Video 1> is the source video clip for the editing task.\n<Picture 1> is reference frame of the target video, from [Shot 1].\n<Subject 1> is the bareheaded gentleman in <Picture 1>: a bareheaded mature East Asian gentleman with vintage slicked-back dark wavy hair, zero wide-brimmed hat, thin silver half-rim rectangular glasses, bespoke black silk satin peak-lapel Godfather tuxedo with a crimson rosebud on the left lapel, crisp white wing-collar dress shirt, crisp white French cuffs with silver cufflinks, hand-tied black silk bow tie, and black tailored wool trousers. He replaces the woman in <Video 1>.\n\nsummary:\n[video editing + character replacement] <Subject 1> steps smoothly forward out of the raw concrete archway while lightly trailing his right hand along the stone wall. The single continuous shot with no cuts, exact camera framing and movement, figure scale, background environment, lighting, and smooth natural motion timing of <Video 1> are strictly preserved.\n\nretention_analysis:\n- <Video 1> (source video editing): fully_preserved - from 00:00.000 to 03.750s with zero cuts, exact camera trajectory, exact figure scale and bounding box, background geometry, lighting, motion velocity, and timing are copied frame for frame.\n- <Picture 1> (appears in [Shot 1]): reference - a frame of the target video at 01.833s showing exact target scale, framing, lighting, and character look.\n- <Subject 1> (appears in [Shot 1]): fully_preserved - keep bareheaded vintage slicked-back dark hair, thin silver glasses where face is visible, Godfather tuxedo, crimson lapel rose, zero hat, zero pearls, and constant scale matched to <Video 1> in every single frame.\n\ndetailed_description:\nA crisp realistic cinema film scene matching the exact visual style and grading of <Picture 1>.\n[Shot 1] {00:00.000 - 03.750s}\n- shot_cut_type: continuous_single_shot\n- camera: Continuous subtle smooth dolly push matching the exact tall medium-full framing and compact slender body scale of <Video 1> with zero focal zoom-in.\n- environment: Minimalist grey raw concrete architectural corridor bathed in soft directional side light.\n- subjects: <Subject 1> is the bareheaded gentleman in <Picture 1>: a bareheaded mature East Asian gentleman with vintage slicked-back dark wavy hair, zero wide-brimmed hat, thin silver half-rim rectangular glasses, bespoke black silk satin peak-lapel Godfather tuxedo with a crimson rosebud on the left lapel, crisp white wing-collar dress shirt, crisp white French cuffs with silver cufflinks, hand-tied black silk bow tie, and black tailored wool trousers. He replaces the woman in <Video 1>.\n- actions: Throughout 00:00.000 to 00:03.708, <Subject 1> takes calm slow steps forward out of the archway with his right arm extended lightly touching the left concrete wall, keeping his exact compact figure scale and trajectory from <Video 1>. In every single frame from 00:00.000 to 03.750s, keep continuous fluid motion matching <Video 1> with zero sudden scale pops, zero slideshow freezing, and zero mid-shot hard cuts.\n\noverall_soundscape:\nQuiet architectural chamber room tone and subtle footsteps.\n\nnon_diegetic_music:\nMatching source score from <Video 1>.",
      "seed": 3102,
      "sourceMode": "generated_replacement",
      "video": null,
      "status": "终版成片内的时间段；独立片段未归档",
      "thumb": "media/img-680a1f361a8285e487ea.jpg",
      "refs": [
        {
          "label": "折耳根高定大片_05_全片涉人镜头原片vs成片1比1质检总表",
          "src": "media/img-78110cc2c8b0c59a899d.jpg"
        }
      ]
    },
    {
      "id": "S03",
      "title": "石室近景侧脸回眸",
      "start": 58.066667,
      "duration": 2.566667,
      "framing": "生成窗 / 终版时间段",
      "action": "石室近景侧脸回眸",
      "prompt": "[S03_W0]\nsubject_definitions:\n<Video 1> is the source video clip for the editing task.\n<Picture 1> is reference frame of the target video, from [Shot 1].\n<Subject 1> is the bareheaded gentleman in <Picture 1>: a bareheaded mature East Asian gentleman with vintage slicked-back dark wavy hair, zero wide-brimmed hat, thin silver half-rim rectangular glasses, bespoke black silk satin peak-lapel Godfather tuxedo with a crimson rosebud on the left lapel, crisp white wing-collar dress shirt, crisp white French cuffs with silver cufflinks, hand-tied black silk bow tie, and black tailored wool trousers. He replaces the woman in <Video 1>.\n\nsummary:\n[video editing + character replacement] In a continuous close medium shot inside the shadowed stone room, <Subject 1> turns his head steadily from left three-quarter profile toward the lens. The single continuous shot with no cuts, exact camera framing and movement, figure scale, background environment, lighting, and smooth natural motion timing of <Video 1> are strictly preserved.\n\nretention_analysis:\n- <Video 1> (source video editing): fully_preserved - from 00:00.000 to 03.750s with zero cuts, exact camera trajectory, exact figure scale and bounding box, background geometry, lighting, motion velocity, and timing are copied frame for frame.\n- <Picture 1> (appears in [Shot 1]): reference - a frame of the target video at 01.250s showing exact target scale, framing, lighting, and character look.\n- <Subject 1> (appears in [Shot 1]): fully_preserved - keep bareheaded vintage slicked-back dark hair, thin silver glasses where face is visible, Godfather tuxedo, crimson lapel rose, zero hat, zero pearls, and constant scale matched to <Video 1> in every single frame.\n\ndetailed_description:\nA crisp realistic cinema film scene matching the exact visual style and grading of <Picture 1>.\n[Shot 1] {00:00.000 - 03.750s}\n- shot_cut_type: continuous_single_shot\n- camera: Smooth intimate close medium shot locked to the exact head size, vertical framing, and gentle motion cadence of <Video 1>.\n- environment: Deep atmospheric dark rock cave background with soft golden side rim illumination.\n- subjects: <Subject 1> is the bareheaded gentleman in <Picture 1>: a bareheaded mature East Asian gentleman with vintage slicked-back dark wavy hair, zero wide-brimmed hat, thin silver half-rim rectangular glasses, bespoke black silk satin peak-lapel Godfather tuxedo with a crimson rosebud on the left lapel, crisp white wing-collar dress shirt, crisp white French cuffs with silver cufflinks, hand-tied black silk bow tie, and black tailored wool trousers. He replaces the woman in <Video 1>.\n- actions: From 00:00.000 to 00:02.583, <Subject 1> turns his bareheaded head smoothly toward the camera with poised authoritative Godfather composure, keeping his thin silver glasses crisp and continuous with zero static freeze. In every single frame from 00:00.000 to 03.750s, keep continuous fluid motion matching <Video 1> with zero sudden scale pops, zero slideshow freezing, and zero mid-shot hard cuts.\n\noverall_soundscape:\nCalm intimate cave room ambience.\n\nnon_diegetic_music:\nMatching source score from <Video 1>.",
      "seed": 3103,
      "sourceMode": "generated_replacement",
      "video": null,
      "status": "终版成片内的时间段；独立片段未归档",
      "thumb": "media/img-b9f8ca6de5f20be8f2ce.jpg",
      "refs": [
        {
          "label": "折耳根高定大片_05_全片涉人镜头原片vs成片1比1质检总表",
          "src": "media/img-78110cc2c8b0c59a899d.jpg"
        }
      ]
    },
    {
      "id": "S04",
      "title": "洞穴石室正坐巨型石桌",
      "start": 60.633333,
      "duration": 3.133333,
      "framing": "生成窗 / 终版时间段",
      "action": "洞穴石室正坐巨型石桌",
      "prompt": "[S04_W0]\nsubject_definitions:\n<Video 1> is the source video clip for the editing task.\n<Picture 1> is reference frame of the target video, from [Shot 1].\n<Subject 1> is the bareheaded gentleman in <Picture 1>: a bareheaded mature East Asian gentleman with vintage slicked-back dark wavy hair, zero wide-brimmed hat, thin silver half-rim rectangular glasses, bespoke black silk satin peak-lapel Godfather tuxedo with a crimson rosebud on the left lapel, crisp white wing-collar dress shirt, crisp white French cuffs with silver cufflinks, hand-tied black silk bow tie, and black tailored wool trousers. He replaces the woman in <Video 1>.\n\nsummary:\n[video editing + character replacement] Seen in wide architectural framing across the cavernous hall, <Subject 1> sits upright behind the huge dark marble table. The single continuous shot with no cuts, exact camera framing and movement, figure scale, background environment, lighting, and smooth natural motion timing of <Video 1> are strictly preserved.\n\nretention_analysis:\n- <Video 1> (source video editing): fully_preserved - from 00:00.000 to 03.750s with zero cuts, exact camera trajectory, exact figure scale and bounding box, background geometry, lighting, motion velocity, and timing are copied frame for frame.\n- <Picture 1> (appears in [Shot 1]): reference - a frame of the target video at 01.500s showing exact target scale, framing, lighting, and character look.\n- <Subject 1> (appears in [Shot 1]): fully_preserved - keep bareheaded vintage slicked-back dark hair, thin silver glasses where face is visible, Godfather tuxedo, crimson lapel rose, zero hat, zero pearls, and constant scale matched to <Video 1> in every single frame.\n\ndetailed_description:\nA crisp realistic cinema film scene matching the exact visual style and grading of <Picture 1>.\n[Shot 1] {00:00.000 - 03.750s}\n- shot_cut_type: continuous_single_shot\n- camera: Fixed wide symmetrical shot keeping the exact small distant torso/head scale (head ~9% of height) and empty room volume of <Video 1>.\n- environment: Cavernous grey stone dining hall with rough rock alcoves behind and a massive dark mottled marble slab table in foreground bearing one tiny black slate dish.\n- subjects: <Subject 1> is the bareheaded gentleman in <Picture 1>: a bareheaded mature East Asian gentleman with vintage slicked-back dark wavy hair, zero wide-brimmed hat, thin silver half-rim rectangular glasses, bespoke black silk satin peak-lapel Godfather tuxedo with a crimson rosebud on the left lapel, crisp white wing-collar dress shirt, crisp white French cuffs with silver cufflinks, hand-tied black silk bow tie, and black tailored wool trousers. He replaces the woman in <Video 1>.\n- actions: Throughout 00:00.000 to 00:03.125, <Subject 1> sits composed behind the vast dark marble table with tiny natural head and breathing motion matching <Video 1>. In every single frame from 00:00.000 to 03.750s, keep continuous fluid motion matching <Video 1> with zero sudden scale pops, zero slideshow freezing, and zero mid-shot hard cuts.\n\noverall_soundscape:\nQuiet stone hall resonance.\n\nnon_diegetic_music:\nMatching source score from <Video 1>.",
      "seed": 3104,
      "sourceMode": "generated_replacement",
      "video": null,
      "status": "终版成片内的时间段；独立片段未归档",
      "thumb": "media/img-442c544b639888997175.jpg",
      "refs": [
        {
          "label": "折耳根高定大片_05_全片涉人镜头原片vs成片1比1质检总表",
          "src": "media/img-78110cc2c8b0c59a899d.jpg"
        }
      ]
    },
    {
      "id": "S05",
      "title": "3/4侧坐抬手轻取小块折耳根",
      "start": 63.766667,
      "duration": 5.466667,
      "framing": "生成窗 / 终版时间段",
      "action": "3/4侧坐抬手轻取小块折耳根",
      "prompt": "[S05_W0]\nsubject_definitions:\n<Video 1> is the source video clip for the editing task.\n<Picture 1> is reference frame of the target video, from [Shot 1].\n<Subject 1> is the bareheaded gentleman in <Picture 1>: a bareheaded mature East Asian gentleman with vintage slicked-back dark wavy hair, zero wide-brimmed hat, thin silver half-rim rectangular glasses, bespoke black silk satin peak-lapel Godfather tuxedo with a crimson rosebud on the left lapel, crisp white wing-collar dress shirt, crisp white French cuffs with silver cufflinks, hand-tied black silk bow tie, and black tailored wool trousers. He replaces the woman in <Video 1>.\n\nsummary:\n[video editing + character replacement] In one continuous medium three-quarter shot, <Subject 1> leans forward slightly and extends his right hand gracefully to pick up a small pale piece of zhergen from the slate plate. The single continuous shot with no cuts, exact camera framing and movement, figure scale, background environment, lighting, and smooth natural motion timing of <Video 1> are strictly preserved.\n\nretention_analysis:\n- <Video 1> (source video editing): fully_preserved - from 00:00.000 to 05.875s with zero cuts, exact camera trajectory, exact figure scale and bounding box, background geometry, lighting, motion velocity, and timing are copied frame for frame.\n- <Picture 1> (appears in [Shot 1]): reference - a frame of the target video at 02.708s showing exact target scale, framing, lighting, and character look.\n- <Subject 1> (appears in [Shot 1]): fully_preserved - keep bareheaded vintage slicked-back dark hair, thin silver glasses where face is visible, Godfather tuxedo, crimson lapel rose, zero hat, zero pearls, and constant scale matched to <Video 1> in every single frame.\n\ndetailed_description:\nA crisp realistic cinema film scene matching the exact visual style and grading of <Picture 1>.\n[Shot 1] {00:00.000 - 05.875s}\n- shot_cut_type: continuous_single_shot\n- camera: Continuous subtle slow push-in matching the exact compact three-quarter torso scale, head position, and camera height of <Video 1>.\n- environment: Shadowed stone cave dining room with dark mottled table surface, black slate dishes, and a small beige piece of zhergen.\n- subjects: <Subject 1> is the bareheaded gentleman in <Picture 1>: a bareheaded mature East Asian gentleman with vintage slicked-back dark wavy hair, zero wide-brimmed hat, thin silver half-rim rectangular glasses, bespoke black silk satin peak-lapel Godfather tuxedo with a crimson rosebud on the left lapel, crisp white wing-collar dress shirt, crisp white French cuffs with silver cufflinks, hand-tied black silk bow tie, and black tailored wool trousers. He replaces the woman in <Video 1>.\n- actions: From 00:00.000 to 00:05.458, <Subject 1> bends slightly forward in his chair, reaches his right hand in a crisp white French cuff smoothly over the dark slate plate, and gently picks up one tiny pale cylinder of zhergen between thumb and forefinger. In every single frame from 00:00.000 to 05.875s, keep continuous fluid motion matching <Video 1> with zero sudden scale pops, zero slideshow freezing, and zero mid-shot hard cuts.\n\noverall_soundscape:\nQuiet stone room ambience and narration.\n\nnon_diegetic_music:\nMatching source score from <Video 1>.",
      "seed": 3105,
      "sourceMode": "generated_replacement",
      "video": null,
      "status": "终版成片内的时间段；独立片段未归档",
      "thumb": "media/img-f19f348b3753890f561a.jpg",
      "refs": [
        {
          "label": "折耳根高定大片_05_全片涉人镜头原片vs成片1比1质检总表",
          "src": "media/img-78110cc2c8b0c59a899d.jpg"
        }
      ]
    },
    {
      "id": "S06",
      "title": "隐蔽#1 虎口放置折耳根手部特写",
      "start": 69.233333,
      "duration": 2.233333,
      "framing": "生成窗 / 终版时间段",
      "action": "隐蔽#1 虎口放置折耳根手部特写",
      "prompt": "[S06_W0]\nsubject_definitions:\n<Video 1> is the source video clip for the editing task.\n<Picture 1> is reference frame of the target video, from [Shot 1].\n<Subject 1> is the gentleman's mature male hands in <Picture 1> wearing tailored black tuxedo sleeves, crisp white French dress shirt cuffs, and silver cufflinks, over a blurred black silk bow tie and pleated white shirt torso (zero pearls, zero bracelets).\n\nsummary:\n[video editing + character replacement] In continuous tight macro framing, <Subject 1>'s right hand lowers smoothly to settle a small cylindrical piece of zhergen onto his left thumb web (hukou). The single continuous shot with no cuts, exact camera framing and movement, figure scale, background environment, lighting, and smooth natural motion timing of <Video 1> are strictly preserved.\n\nretention_analysis:\n- <Video 1> (source video editing): fully_preserved - from 00:00.000 to 03.750s with zero cuts, exact camera trajectory, exact figure scale and bounding box, background geometry, lighting, motion velocity, and timing are copied frame for frame.\n- <Picture 1> (appears in [Shot 1]): reference - a frame of the target video at 01.083s showing exact target scale, framing, lighting, and character look.\n- <Subject 1> (appears in [Shot 1]): fully_preserved - keep bareheaded vintage slicked-back dark hair, thin silver glasses where face is visible, Godfather tuxedo, crimson lapel rose, zero hat, zero pearls, and constant scale matched to <Video 1> in every single frame.\n\ndetailed_description:\nA crisp realistic cinema film scene matching the exact visual style and grading of <Picture 1>.\n[Shot 1] {00:00.000 - 03.750s}\n- shot_cut_type: continuous_single_shot\n- camera: Continuous steady macro close-up locked to the exact framing and gentle breathing drift of <Video 1>.\n- environment: Warm soft directional light against the dark blurred tuxedo torso background.\n- subjects: <Subject 1> is the gentleman's mature male hands in <Picture 1> wearing tailored black tuxedo sleeves, crisp white French dress shirt cuffs, and silver cufflinks, over a blurred black silk bow tie and pleated white shirt torso (zero pearls, zero bracelets).\n- actions: Throughout 00:00.000 to 00:02.250, <Subject 1>'s right fingers glide smoothly down to place and settle the tiny beige zhergen root piece neatly onto his left thumb web in unbroken fluid motion. In every single frame from 00:00.000 to 03.750s, keep continuous fluid motion matching <Video 1> with zero sudden scale pops, zero slideshow freezing, and zero mid-shot hard cuts.\n\noverall_soundscape:\nSoft quiet intimate ambience.\n\nnon_diegetic_music:\nMatching source score from <Video 1>.",
      "seed": 3106,
      "sourceMode": "generated_replacement",
      "video": null,
      "status": "终版成片内的时间段；独立片段未归档",
      "thumb": "media/img-b4b5fafbfb045fd55714.jpg",
      "refs": [
        {
          "label": "折耳根高定大片_05_全片涉人镜头原片vs成片1比1质检总表",
          "src": "media/img-78110cc2c8b0c59a899d.jpg"
        }
      ]
    },
    {
      "id": "S07",
      "title": "侧面中近景举虎口轻嗅",
      "start": 71.466667,
      "duration": 4.2,
      "framing": "生成窗 / 终版时间段",
      "action": "侧面中近景举虎口轻嗅",
      "prompt": "[S07_W0]\nsubject_definitions:\n<Video 1> is the source video clip for the editing task.\n<Picture 1> is reference frame of the target video, from [Shot 1].\n<Subject 1> is the bareheaded gentleman in <Picture 1>: a bareheaded mature East Asian gentleman with vintage slicked-back dark wavy hair, zero wide-brimmed hat, thin silver half-rim rectangular glasses, bespoke black silk satin peak-lapel Godfather tuxedo with a crimson rosebud on the left lapel, crisp white wing-collar dress shirt, crisp white French cuffs with silver cufflinks, hand-tied black silk bow tie, and black tailored wool trousers. He replaces the woman in <Video 1>.\n\nsummary:\n[video editing + character replacement] Seen in clean left-facing medium close-up profile against a smooth uncluttered charcoal studio wall, <Subject 1> raises his hand slowly toward his nose to inhale the aroma. The single continuous shot with no cuts, exact camera framing and movement, figure scale, background environment, lighting, and smooth natural motion timing of <Video 1> are strictly preserved.\n\nretention_analysis:\n- <Video 1> (source video editing): fully_preserved - from 00:00.000 to 04.458s with zero cuts, exact camera trajectory, exact figure scale and bounding box, background geometry, lighting, motion velocity, and timing are copied frame for frame.\n- <Picture 1> (appears in [Shot 1]): reference - a frame of the target video at 02.000s showing exact target scale, framing, lighting, and character look.\n- <Subject 1> (appears in [Shot 1]): fully_preserved - keep bareheaded vintage slicked-back dark hair, thin silver glasses where face is visible, Godfather tuxedo, crimson lapel rose, zero hat, zero pearls, and constant scale matched to <Video 1> in every single frame.\n\ndetailed_description:\nA crisp realistic cinema film scene matching the exact visual style and grading of <Picture 1>.\n[Shot 1] {00:00.000 - 04.458s}\n- shot_cut_type: continuous_single_shot\n- camera: Continuous steady medium close-up locked 1:1 to the head scale and gentle vertical pan of <Video 1>.\n- environment: Smooth uncluttered dark charcoal matte wall background with soft warm key light on his face and zero pillars or columns.\n- subjects: <Subject 1> is the bareheaded gentleman in <Picture 1>: a bareheaded mature East Asian gentleman with vintage slicked-back dark wavy hair, zero wide-brimmed hat, thin silver half-rim rectangular glasses, bespoke black silk satin peak-lapel Godfather tuxedo with a crimson rosebud on the left lapel, crisp white wing-collar dress shirt, crisp white French cuffs with silver cufflinks, hand-tied black silk bow tie, and black tailored wool trousers. He replaces the woman in <Video 1>.\n- actions: From 00:00.000 to 00:04.208, <Subject 1> holds calm profile gaze as his left hand in a crisp white French cuff slowly lifts the zhergen piece on his thumb web closer toward his nose and upper lip in smooth unbroken motion. In every single frame from 00:00.000 to 04.458s, keep continuous fluid motion matching <Video 1> with zero sudden scale pops, zero slideshow freezing, and zero mid-shot hard cuts.\n\noverall_soundscape:\nSoft quiet room tone and calm breathing.\n\nnon_diegetic_music:\nMatching source score from <Video 1>.",
      "seed": 3107,
      "sourceMode": "generated_replacement",
      "video": null,
      "status": "终版成片内的时间段；独立片段未归档",
      "thumb": "media/img-04118abd391dbcfa84ab.jpg",
      "refs": [
        {
          "label": "折耳根高定大片_05_全片涉人镜头原片vs成片1比1质检总表",
          "src": "media/img-78110cc2c8b0c59a899d.jpg"
        }
      ]
    },
    {
      "id": "S08",
      "title": "侧脸大特写虎口送入口中细品",
      "start": 75.666667,
      "duration": 5.566667,
      "framing": "生成窗 / 终版时间段",
      "action": "侧脸大特写虎口送入口中细品",
      "prompt": "[S08_W0]\nsubject_definitions:\n<Video 1> is the source video clip for the editing task.\n<Picture 1> is reference frame of the target video, from [Shot 1].\n<Subject 1> is the bareheaded gentleman in extreme tight close-up left profile in <Picture 1>: vintage slicked-back dark wavy hair touching the top frame edge, thin silver half-rim rectangular glasses, natural unlipsticked male lips with subtle stubble, crisp white wing collar, black silk bow tie, and white French cuff.\n\nsummary:\n[video editing + character replacement] In one continuous extreme close-up profile, <Subject 1> slowly raises his thumb web to his mouth and delicately tastes the tiny piece of zhergen. The single continuous shot with no cuts, exact camera framing and movement, figure scale, background environment, lighting, and smooth natural motion timing of <Video 1> are strictly preserved.\n\nretention_analysis:\n- <Video 1> (source video editing): fully_preserved - from 00:00.000 to 05.875s with zero cuts, exact camera trajectory, exact figure scale and bounding box, background geometry, lighting, motion velocity, and timing are copied frame for frame.\n- <Picture 1> (appears in [Shot 1]): reference - a frame of the target video at 02.708s showing exact target scale, framing, lighting, and character look.\n- <Subject 1> (appears in [Shot 1]): fully_preserved - keep bareheaded vintage slicked-back dark hair, thin silver glasses where face is visible, Godfather tuxedo, crimson lapel rose, zero hat, zero pearls, and constant scale matched to <Video 1> in every single frame.\n\ndetailed_description:\nA crisp realistic cinema film scene matching the exact visual style and grading of <Picture 1>.\n[Shot 1] {00:00.000 - 05.875s}\n- shot_cut_type: continuous_single_shot\n- camera: Locked extreme close-up framing matching <Video 1> 1:1 where hair reaches the top frame edge and eyes/lips fill the center-right with zero zoom-out.\n- environment: Smooth soft dark background behind the cheek and collar.\n- subjects: <Subject 1> is the bareheaded gentleman in extreme tight close-up left profile in <Picture 1>: vintage slicked-back dark wavy hair touching the top frame edge, thin silver half-rim rectangular glasses, natural unlipsticked male lips with subtle stubble, crisp white wing collar, black silk bow tie, and white French cuff.\n- actions: Throughout 00:00.000 to 00:05.583, <Subject 1> turns his head slightly downward as his fist in a crisp white French cuff smoothly lifts the tiny pale zhergen piece against his natural unlipsticked lips and gently takes a taste in continuous unbroken motion. In every single frame from 00:00.000 to 05.875s, keep continuous fluid motion matching <Video 1> with zero sudden scale pops, zero slideshow freezing, and zero mid-shot hard cuts.\n\noverall_soundscape:\nIntimate quiet room ambience.\n\nnon_diegetic_music:\nMatching source score from <Video 1>.",
      "seed": 3108,
      "sourceMode": "generated_replacement",
      "video": null,
      "status": "终版成片内的时间段；独立片段未归档",
      "thumb": "media/img-8ea36261bc9eb912f55f.jpg",
      "refs": [
        {
          "label": "折耳根高定大片_05_全片涉人镜头原片vs成片1比1质检总表",
          "src": "media/img-78110cc2c8b0c59a899d.jpg"
        }
      ]
    },
    {
      "id": "S09",
      "title": "正坐石桌咀嚼品味至淡黑",
      "start": 81.233333,
      "duration": 4.166667,
      "framing": "生成窗 / 终版时间段",
      "action": "正坐石桌咀嚼品味至淡黑",
      "prompt": "[S09_W0]\nsubject_definitions:\n<Video 1> is the source video clip for the editing task.\n<Picture 1> is reference frame of the target video, from [Shot 1].\n<Subject 1> is the bareheaded gentleman in <Picture 1>: a bareheaded mature East Asian gentleman with vintage slicked-back dark wavy hair, zero wide-brimmed hat, thin silver half-rim rectangular glasses, bespoke black silk satin peak-lapel Godfather tuxedo with a crimson rosebud on the left lapel, crisp white wing-collar dress shirt, crisp white French cuffs with silver cufflinks, hand-tied black silk bow tie, and black tailored wool trousers. He replaces the woman in <Video 1>.\n\nsummary:\n[video editing + character replacement] Sitting squarely at the dark stone table, <Subject 1> chews slowly with serene composed dignity before the shot fades softly into black. The single continuous shot with no cuts, exact camera framing and movement, figure scale, background environment, lighting, and smooth natural motion timing of <Video 1> are strictly preserved.\n\nretention_analysis:\n- <Video 1> (source video editing): fully_preserved - from 00:00.000 to 04.458s with zero cuts, exact camera trajectory, exact figure scale and bounding box, background geometry, lighting, motion velocity, and timing are copied frame for frame.\n- <Picture 1> (appears in [Shot 1]): reference - a frame of the target video at 01.875s showing exact target scale, framing, lighting, and character look.\n- <Subject 1> (appears in [Shot 1]): fully_preserved - keep bareheaded vintage slicked-back dark hair, thin silver glasses where face is visible, Godfather tuxedo, crimson lapel rose, zero hat, zero pearls, and constant scale matched to <Video 1> in every single frame.\n\ndetailed_description:\nA crisp realistic cinema film scene matching the exact visual style and grading of <Picture 1>.\n[Shot 1] {00:00.000 - 04.458s}\n- shot_cut_type: continuous_single_shot\n- camera: Fixed medium frontal shot locked to the exact head height (~15% frame height) and centered table composition of <Video 1>.\n- environment: Dark rock cave dining wall behind and dark stone table with slate dish in foreground.\n- subjects: <Subject 1> is the bareheaded gentleman in <Picture 1>: a bareheaded mature East Asian gentleman with vintage slicked-back dark wavy hair, zero wide-brimmed hat, thin silver half-rim rectangular glasses, bespoke black silk satin peak-lapel Godfather tuxedo with a crimson rosebud on the left lapel, crisp white wing-collar dress shirt, crisp white French cuffs with silver cufflinks, hand-tied black silk bow tie, and black tailored wool trousers. He replaces the woman in <Video 1>.\n- actions: From 00:00.000 to 00:04.167, <Subject 1> sits poised facing forward, chewing gently and thoughtfully before the scene smoothly darkens to complete black around 00:04.000. In every single frame from 00:00.000 to 04.458s, keep continuous fluid motion matching <Video 1> with zero sudden scale pops, zero slideshow freezing, and zero mid-shot hard cuts.\n\noverall_soundscape:\nLow atmospheric score and quiet room tone.\n\nnon_diegetic_music:\nMatching source score from <Video 1>.",
      "seed": 3109,
      "sourceMode": "generated_replacement",
      "video": null,
      "status": "终版成片内的时间段；独立片段未归档",
      "thumb": "media/img-21c77b934d51c8cf2ac0.jpg",
      "refs": [
        {
          "label": "折耳根高定大片_05_全片涉人镜头原片vs成片1比1质检总表",
          "src": "media/img-78110cc2c8b0c59a899d.jpg"
        }
      ]
    },
    {
      "id": "P02",
      "title": "暗林黑豹走出(前调)",
      "start": 85.4,
      "duration": 3.133333,
      "framing": "原片切镜",
      "action": "暗林黑豹走出(前调)",
      "prompt": null,
      "seed": null,
      "sourceMode": "source_passthrough",
      "video": null,
      "status": "原片直通，未单独生成",
      "thumb": "media/img-d226cc4f93d792988bcc.jpg",
      "refs": [
        {
          "label": "折耳根高定大片_05_全片涉人镜头原片vs成片1比1质检总表",
          "src": "media/img-78110cc2c8b0c59a899d.jpg"
        }
      ]
    },
    {
      "id": "S10",
      "title": "隐蔽#2 唇部微距+白色折耳根须蔓生(中调)",
      "start": 88.533333,
      "duration": 3.466667,
      "framing": "生成窗 / 终版时间段",
      "action": "隐蔽#2 唇部微距+白色折耳根须蔓生(中调)",
      "prompt": "[S10_W0]\nsubject_definitions:\n<Video 1> is the source video clip for the editing task.\n<Picture 1> is reference frame of the target video, from [Shot 1].\n<Subject 1> is the gentleman's lower nose, natural unlipsticked male lips, subtle short dark mustache hairs, and faint chin stubble in <Picture 1>, with delicate translucent white zhergen root tendrils across the skin (zero red lipstick).\n\nsummary:\n[video editing + character replacement] In continuous sepia macro motion, delicate translucent white zhergen roots subtly sway and grow outward across <Subject 1>'s male lips and stubbled chin. The single continuous shot with no cuts, exact camera framing and movement, figure scale, background environment, lighting, and smooth natural motion timing of <Video 1> are strictly preserved.\n\nretention_analysis:\n- <Video 1> (source video editing): fully_preserved - from 00:00.000 to 03.750s with zero cuts, exact camera trajectory, exact figure scale and bounding box, background geometry, lighting, motion velocity, and timing are copied frame for frame.\n- <Picture 1> (appears in [Shot 1]): reference - a frame of the target video at 01.833s showing exact target scale, framing, lighting, and character look.\n- <Subject 1> (appears in [Shot 1]): fully_preserved - keep bareheaded vintage slicked-back dark hair, thin silver glasses where face is visible, Godfather tuxedo, crimson lapel rose, zero hat, zero pearls, and constant scale matched to <Video 1> in every single frame.\n\ndetailed_description:\nA crisp realistic cinema film scene matching the exact visual style and grading of <Picture 1>.\n[Shot 1] {00:00.000 - 03.750s}\n- shot_cut_type: continuous_single_shot\n- camera: Continuous extreme macro camera drift matching the magnification and dark fade-in of <Video 1>.\n- environment: Warm dark sepia-amber macro chiaroscuro lighting.\n- subjects: <Subject 1> is the gentleman's lower nose, natural unlipsticked male lips, subtle short dark mustache hairs, and faint chin stubble in <Picture 1>, with delicate translucent white zhergen root tendrils across the skin (zero red lipstick).\n- actions: Emerging smoothly from the dark opening frames across 00:00.000 to 00:03.458, translucent white zhergen root filaments branch and shimmer smoothly across <Subject 1>'s natural male lips and stubbled chin in unbroken organic motion. In every single frame from 00:00.000 to 03.750s, keep continuous fluid motion matching <Video 1> with zero sudden scale pops, zero slideshow freezing, and zero mid-shot hard cuts.\n\noverall_soundscape:\nDeep mysterious ambient drone.\n\nnon_diegetic_music:\nMatching source score from <Video 1>.",
      "seed": 3110,
      "sourceMode": "generated_replacement",
      "video": null,
      "status": "终版成片内的时间段；独立片段未归档",
      "thumb": "media/img-7fcfff50a6793a73dda4.jpg",
      "refs": [
        {
          "label": "折耳根高定大片_05_全片涉人镜头原片vs成片1比1质检总表",
          "src": "media/img-78110cc2c8b0c59a899d.jpg"
        }
      ]
    },
    {
      "id": "S11",
      "title": "隐蔽#3 深海蓝光下颌衣领+发光透明鱼(后调)",
      "start": 92,
      "duration": 5.166667,
      "framing": "生成窗 / 终版时间段",
      "action": "隐蔽#3 深海蓝光下颌衣领+发光透明鱼(后调)",
      "prompt": "[S11_W0]\nsubject_definitions:\n<Video 1> is the source video clip for the editing task.\n<Picture 1> is reference frame of the target video, from [Shot 1].\n<Subject 1> is the gentleman's underwater cyan-lit left jawline silhouette wearing a crisp white wing collar, hand-tied black silk bow tie, and black tuxedo collar in <Picture 1> (zero pearls, zero red lipstick).\n\nsummary:\n[video editing + character replacement] While a luminous glowing translucent white deep-sea fish swims smoothly left-to-right across the foreground amid fine floating bubbles, <Subject 1>'s jaw and bow-tie collar remain calmly visible in the background. The single continuous shot with no cuts, exact camera framing and movement, figure scale, background environment, lighting, and smooth natural motion timing of <Video 1> are strictly preserved.\n\nretention_analysis:\n- <Video 1> (source video editing): fully_preserved - from 00:00.000 to 05.167s with zero cuts, exact camera trajectory, exact figure scale and bounding box, background geometry, lighting, motion velocity, and timing are copied frame for frame.\n- <Picture 1> (appears in [Shot 1]): reference - a frame of the target video at 02.583s showing exact target scale, framing, lighting, and character look.\n- <Subject 1> (appears in [Shot 1]): fully_preserved - keep bareheaded vintage slicked-back dark hair, thin silver glasses where face is visible, Godfather tuxedo, crimson lapel rose, zero hat, zero pearls, and constant scale matched to <Video 1> in every single frame.\n\ndetailed_description:\nA crisp realistic cinema film scene matching the exact visual style and grading of <Picture 1>.\n[Shot 1] {00:00.000 - 05.167s}\n- shot_cut_type: continuous_single_shot\n- camera: Steady underwater close-up locked pixel-for-pixel to the framing and fade-out of <Video 1>.\n- environment: Deep teal-cyan underwater space with fine drifting bubbles and atmospheric light rays from above.\n- subjects: <Subject 1> is the gentleman's underwater cyan-lit left jawline silhouette wearing a crisp white wing collar, hand-tied black silk bow tie, and black tuxedo collar in <Picture 1> (zero pearls, zero red lipstick).\n- actions: Throughout 00:00.000 to 00:05.167, the luminous glowing translucent deep-sea fish from <Video 1> glides effortlessly left-to-right with undulating translucent tail fins directly in front of <Subject 1>'s calm cyan-lit male chin and white wing collar before fading cleanly to black around 00:04.800. In every single frame from 00:00.000 to 05.167s, keep continuous fluid motion matching <Video 1> with zero sudden scale pops, zero slideshow freezing, and zero mid-shot hard cuts.\n\noverall_soundscape:\nDeep serene underwater resonance.\n\nnon_diegetic_music:\nMatching source score from <Video 1>.",
      "seed": 3111,
      "sourceMode": "generated_replacement",
      "video": null,
      "status": "终版成片内的时间段；独立片段未归档",
      "thumb": "media/img-831657a9b7d26f309620.jpg",
      "refs": [
        {
          "label": "折耳根高定大片_05_全片涉人镜头原片vs成片1比1质检总表",
          "src": "media/img-78110cc2c8b0c59a899d.jpg"
        }
      ]
    },
    {
      "id": "S12",
      "title": "暗光渐亮左侧大特写复杂微表情",
      "start": 97.166667,
      "duration": 7.6,
      "framing": "生成窗 / 终版时间段",
      "action": "暗光渐亮左侧大特写复杂微表情",
      "prompt": "[S12_W0]\nsubject_definitions:\n<Video 1> is the source video clip for the editing task.\n<Picture 1> is reference frame of the target video, from [Shot 1].\n<Subject 1> is the bareheaded gentleman in extreme tight close-up left profile in <Picture 1>: vintage slicked-back dark wavy hair, zero wide-brimmed hat, thin silver half-rim rectangular glasses, natural unlipsticked male lips, subtle chin stubble, crisp white wing collar peek.\n\nsummary:\n[video editing + character replacement] Emerging smoothly from darkness in one continuous unbroken take, <Subject 1>'s left profile illuminates gradually as he wears an ambivalent expression between savoring and regret. The single continuous shot with no cuts, exact camera framing and movement, figure scale, background environment, lighting, and smooth natural motion timing of <Video 1> are strictly preserved.\n\nretention_analysis:\n- <Video 1> (source video editing): fully_preserved - from 00:00.000 to 08.000s with zero cuts, exact camera trajectory, exact figure scale and bounding box, background geometry, lighting, motion velocity, and timing are copied frame for frame.\n- <Picture 1> (appears in [Shot 1]): reference - a frame of the target video at 03.750s showing exact target scale, framing, lighting, and character look.\n- <Subject 1> (appears in [Shot 1]): fully_preserved - keep bareheaded vintage slicked-back dark hair, thin silver glasses where face is visible, Godfather tuxedo, crimson lapel rose, zero hat, zero pearls, and constant scale matched to <Video 1> in every single frame.\n\ndetailed_description:\nA crisp realistic cinema film scene matching the exact visual style and grading of <Picture 1>.\n[Shot 1] {00:00.000 - 08.000s}\n- shot_cut_type: continuous_single_shot\n- camera: Locked steady close-up profile framing matching <Video 1> 1:1 with zero cuts and smooth light reveal.\n- environment: Uniform clean dark studio shadow behind his bareheaded hair with zero curved hat silhouette.\n- subjects: <Subject 1> is the bareheaded gentleman in extreme tight close-up left profile in <Picture 1>: vintage slicked-back dark wavy hair, zero wide-brimmed hat, thin silver half-rim rectangular glasses, natural unlipsticked male lips, subtle chin stubble, crisp white wing collar peek.\n- actions: Beginning in deep darkness from 00:00.000 to 00:01.000 and illuminating smoothly through 00:07.583, <Subject 1>'s micro-expressions shift subtly around his eyes, brow, and clenched jaw in unbroken contemplation. In every single frame from 00:00.000 to 08.000s, keep continuous fluid motion matching <Video 1> with zero sudden scale pops, zero slideshow freezing, and zero mid-shot hard cuts.\n\noverall_soundscape:\nQuiet dramatic ambient underscore.\n\nnon_diegetic_music:\nMatching source score from <Video 1>.",
      "seed": 3112,
      "sourceMode": "generated_replacement",
      "video": null,
      "status": "终版成片内的时间段；独立片段未归档",
      "thumb": "media/img-4ff61c1a4eca8685e794.jpg",
      "refs": [
        {
          "label": "折耳根高定大片_05_全片涉人镜头原片vs成片1比1质检总表",
          "src": "media/img-78110cc2c8b0c59a899d.jpg"
        }
      ]
    },
    {
      "id": "S13",
      "title": "一镜到底 侍者金盘餐巾拭嘴->长拉远至门洞消失",
      "start": 104.766667,
      "duration": 23,
      "framing": "生成窗 / 终版时间段",
      "action": "一镜到底 侍者金盘餐巾拭嘴->长拉远至门洞消失",
      "prompt": "[S13_W0]\nsubject_definitions:\n<Video 1> is the source video clip for the editing task.\n<Picture 1> is reference frame of the target video, from [Shot 1].\n<Subject 1> is the bareheaded gentleman in <Picture 1>: a bareheaded mature East Asian gentleman with vintage slicked-back dark wavy hair, zero wide-brimmed hat, thin silver half-rim rectangular glasses, bespoke black silk satin peak-lapel Godfather tuxedo with a crimson rosebud on the left lapel, crisp white wing-collar dress shirt, crisp white French cuffs with silver cufflinks, hand-tied black silk bow tie, and black tailored wool trousers.\n\nsummary:\n[video editing + character replacement] Seated at the stone table as a white-gloved waiter holds out a brass tray with a folded cream napkin, <Subject 1> reaches for and lifts the napkin to gently dab his lips. The single continuous shot with no cuts, exact camera framing and movement, figure scale, background environment, lighting, and smooth natural motion timing of <Video 1> are strictly preserved.\n\nretention_analysis:\n- <Video 1> (source video editing): fully_preserved - from 00:00.000 to 08.708s with zero cuts, exact camera trajectory, exact figure scale and bounding box, background geometry, lighting, motion velocity, and timing are copied frame for frame.\n- <Picture 1> (appears in [Shot 1]): reference - a frame of the target video at 03.750s showing exact target scale, framing, lighting, and character look.\n- <Subject 1> (appears in [Shot 1]): fully_preserved - keep bareheaded vintage slicked-back dark hair, thin silver glasses where face is visible, Godfather tuxedo, crimson lapel rose, zero hat, zero pearls, and constant scale matched to <Video 1> in every single frame.\n\ndetailed_description:\nA crisp realistic cinema film scene matching the exact visual style and grading of <Picture 1>.\n[Shot 1] {00:00.000 - 08.708s}\n- shot_cut_type: continuous_single_shot\n- camera: Continuous smooth medium close-up camera hold matching <Video 1>.\n- environment: Dark stone dining hall with soft overhead warm spotlight.\n- subjects: <Subject 1> is the bareheaded gentleman in <Picture 1>: a bareheaded mature East Asian gentleman with vintage slicked-back dark wavy hair, zero wide-brimmed hat, thin silver half-rim rectangular glasses, bespoke black silk satin peak-lapel Godfather tuxedo with a crimson rosebud on the left lapel, crisp white wing-collar dress shirt, crisp white French cuffs with silver cufflinks, hand-tied black silk bow tie, and black tailored wool trousers.\n- actions: From 00:00.000 to 00:08.708, the white-gloved waiter arm enters from the right carrying a brass tray with a folded cream linen napkin; <Subject 1> looks politely, picks up the napkin smoothly, and brings it gracefully to blot his lips. In every single frame from 00:00.000 to 08.708s, keep continuous fluid motion matching <Video 1> with zero sudden scale pops, zero slideshow freezing, and zero mid-shot hard cuts.\n\noverall_soundscape:\nSubtle linen rustle and refined hall ambience.\n\nnon_diegetic_music:\nMatching source score from <Video 1>.\n\n[S13_W1]\nsubject_definitions:\n<Video 1> is the source video clip for the editing task.\n<Picture 1> is reference frame of the target video, from [Shot 1].\n<Subject 1> is the same bareheaded gentleman from <Picture 1>: a bareheaded mature East Asian gentleman with vintage slicked-back dark wavy hair, zero wide-brimmed hat, thin silver half-rim rectangular glasses, bespoke black silk satin peak-lapel Godfather tuxedo with a crimson rosebud on the left lapel, crisp white wing-collar dress shirt, crisp white French cuffs with silver cufflinks, hand-tied black silk bow tie, and black tailored wool trousers.\n\nsummary:\n[video editing + character replacement] Continuing smoothly from the opening 17 frames, <Subject 1> lowers the cream napkin back to the tray, rests his hands calmly on the stone table, and remains poised as the camera begins smoothly pulling back. The single continuous shot with no cuts, exact camera framing and movement, figure scale, background environment, lighting, and smooth natural motion timing of <Video 1> are strictly preserved.\n\nretention_analysis:\n- <Video 1> (source video editing): fully_preserved - from 00:00.000 to 08.708s with zero cuts, exact camera trajectory, exact figure scale and bounding box, background geometry, lighting, motion velocity, and timing are copied frame for frame.\n- <Picture 1> (appearance reference): strictly lock character identity, tuxedo outfit, zero hat, and lighting from this reference while letting the opening 17 prefix frames and <Video 1> drive motion.\n- <Subject 1> (appears in [Shot 1]): fully_preserved - keep bareheaded vintage slicked-back dark hair, thin silver glasses where face is visible, Godfather tuxedo, crimson lapel rose, zero hat, zero pearls, and constant scale matched to <Video 1> in every single frame.\n\ndetailed_description:\nA crisp realistic cinema film scene matching the exact visual style and grading of <Picture 1>.\n[Shot 1] {00:00.000 - 08.708s}\n- shot_cut_type: continuous_single_shot\n- camera: Continuous slow backward dolly reveal widening smoothly from medium shot to full table width, strictly copied from <Video 1>.\n- environment: Cavernous grey stone dining chamber revealing wide dark marble table and rock walls.\n- subjects: <Subject 1> is the same bareheaded gentleman from <Picture 1>: a bareheaded mature East Asian gentleman with vintage slicked-back dark wavy hair, zero wide-brimmed hat, thin silver half-rim rectangular glasses, bespoke black silk satin peak-lapel Godfather tuxedo with a crimson rosebud on the left lapel, crisp white wing-collar dress shirt, crisp white French cuffs with silver cufflinks, hand-tied black silk bow tie, and black tailored wool trousers.\n- actions: The opening 17 frames match the previous window seamlessly with zero jump. Seamless from 00:00.000, <Subject 1> sets down the napkin calmly as the waiter withdraws the brass tray, rests both hands neatly on the stone table, and gazes steadily forward while the camera smoothly dollies backward through 00:08.708. In every single frame from 00:00.000 to 08.708s, keep continuous fluid motion matching <Video 1> with zero sudden scale pops, zero slideshow freezing, and zero mid-shot hard cuts.\n\noverall_soundscape:\nQuiet stone chamber echo and narration.\n\nnon_diegetic_music:\nMatching source score from <Video 1>.\n\n[S13_W2]\nsubject_definitions:\n<Video 1> is the source video clip for the editing task.\n<Picture 1>, <Picture 2> are reference frames of the target video, from [Shot 1].\n<Subject 1> is the same tiny distant bareheaded tuxedoed gentleman matching <Picture 1> and <Picture 2>.\n\nsummary:\n[video editing + character replacement] Continuing seamlessly from the opening 17 frames, the camera pulls smoothly far back through concrete pillars, across the candlelit underground dining hall, and out to the green hillside exterior facade matching <Picture 2>. The single continuous shot with no cuts, exact camera framing and movement, figure scale, background environment, lighting, and smooth natural motion timing of <Video 1> are strictly preserved.\n\nretention_analysis:\n- <Video 1> (source video editing): fully_preserved - from 00:00.000 to 07.292s with zero cuts, exact camera trajectory, exact figure scale and bounding box, background geometry, lighting, motion velocity, and timing are copied frame for frame.\n- <Picture 1> (appearance reference): strictly lock character identity, tuxedo outfit, zero hat, and lighting from this reference while letting the opening 17 prefix frames and <Video 1> drive motion.\n- <Picture 2> (appearance reference): strictly lock character identity, tuxedo outfit, zero hat, and lighting from this reference while letting the opening 17 prefix frames and <Video 1> drive motion.\n- <Subject 1> (appears in [Shot 1]): fully_preserved - keep bareheaded vintage slicked-back dark hair, thin silver glasses where face is visible, Godfather tuxedo, crimson lapel rose, zero hat, zero pearls, and constant scale matched to <Video 1> in every single frame.\n\ndetailed_description:\nA crisp realistic cinema film scene matching the exact visual style and grading of <Picture 1>, <Picture 2>.\n[Shot 1] {00:00.000 - 07.292s}\n- shot_cut_type: continuous_single_shot\n- camera: Continuous wide backward crane/dolly pullback matching <Video 1> 1:1 from cave stone hall through concrete archway out onto grass terrace.\n- environment: Monumental concrete corridor, dark stone table shrinking in distance, warm glowing candlelit dining tables behind vast glass wall, and mossy green roof.\n- subjects: <Subject 1> is the same tiny distant bareheaded tuxedoed gentleman matching <Picture 1> and <Picture 2>.\n- actions: The opening 17 frames match the previous window seamlessly with zero jump. Seamless from 00:00.000 to 00:07.000, the camera sweeps smoothly far backward leaving <Subject 1> seated small inside the distant shadowy doorway (bareheaded black tuxedo silhouette matching <Picture 2>, zero hat) until the full exterior candlelit building is revealed. In every single frame from 00:00.000 to 07.292s, keep continuous fluid motion matching <Video 1> with zero sudden scale pops, zero slideshow freezing, and zero mid-shot hard cuts.\n\noverall_soundscape:\nEpic orchestral swell and distant breeze.\n\nnon_diegetic_music:\nMatching source score from <Video 1>.",
      "seed": null,
      "sourceMode": "generated_replacement",
      "video": null,
      "status": "终版成片内的时间段；独立片段未归档",
      "thumb": "media/img-20ae32836f91fbbf1b06.jpg",
      "refs": [
        {
          "label": "折耳根高定大片_05_全片涉人镜头原片vs成片1比1质检总表",
          "src": "media/img-78110cc2c8b0c59a899d.jpg"
        }
      ]
    },
    {
      "id": "P03",
      "title": "绿山地下餐厅全景外景(含20f平滑叠化入)",
      "start": 127.766667,
      "duration": 4.833333,
      "framing": "原片切镜",
      "action": "绿山地下餐厅全景外景(含20f平滑叠化入)",
      "prompt": null,
      "seed": null,
      "sourceMode": "source_passthrough",
      "video": null,
      "status": "原片直通，未单独生成",
      "thumb": "media/img-ea6f6019439db0e9fcca.jpg",
      "refs": [
        {
          "label": "折耳根高定大片_05_全片涉人镜头原片vs成片1比1质检总表",
          "src": "media/img-78110cc2c8b0c59a899d.jpg"
        }
      ]
    },
    {
      "id": "S14",
      "title": "隐蔽#4 黑色燕尾服背影+反手执带花折耳根+双关大字",
      "start": 132.6,
      "duration": 6.033333,
      "framing": "生成窗 / 终版时间段",
      "action": "隐蔽#4 黑色燕尾服背影+反手执带花折耳根+双关大字",
      "prompt": "[S14_W0]\nsubject_definitions:\n<Video 1> is the source video clip for the editing task.\n<Picture 1> is reference frame of the target video, from [Shot 1].\n<Subject 1> is the gentleman seen from behind in <Picture 1>: tailored black wool Godfather tuxedo back, bareheaded short dark hair above crisp white collar edge, and his right arm in a crisp white French cuff holding the small white-flowered green zhergen stem behind his lower back.\n\nsummary:\n[video editing + character replacement] In one continuous back-view medium close-up, the camera slowly cranes downward across <Subject 1>'s black wool tuxedo back to reveal his male hand behind his waist gently holding the zhergen stem against blurred green hills. The single continuous shot with no cuts, exact camera framing and movement, figure scale, background environment, lighting, and smooth natural motion timing of <Video 1> are strictly preserved.\n\nretention_analysis:\n- <Video 1> (source video editing): fully_preserved - from 00:00.000 to 06.583s with zero cuts, exact camera trajectory, exact figure scale and bounding box, background geometry, lighting, motion velocity, and timing are copied frame for frame.\n- <Picture 1> (appears in [Shot 1]): reference - a frame of the target video at 04.375s showing exact target scale, framing, lighting, and character look.\n- <Subject 1> (appears in [Shot 1]): fully_preserved - keep bareheaded vintage slicked-back dark hair, thin silver glasses where face is visible, Godfather tuxedo, crimson lapel rose, zero hat, zero pearls, and constant scale matched to <Video 1> in every single frame.\n\ndetailed_description:\nA crisp realistic cinema film scene matching the exact visual style and grading of <Picture 1>.\n[Shot 1] {00:00.000 - 06.583s}\n- shot_cut_type: continuous_single_shot\n- camera: Continuous steady downward tilt matching the exact body width and framing speed of <Video 1>.\n- environment: Softly blurred rolling green Guizhou hillside edge in background.\n- subjects: <Subject 1> is the gentleman seen from behind in <Picture 1>: tailored black wool Godfather tuxedo back, bareheaded short dark hair above crisp white collar edge, and his right arm in a crisp white French cuff holding the small white-flowered green zhergen stem behind his lower back.\n- actions: From 00:00.000 to 00:06.042, the camera drifts steadily downward from <Subject 1>'s bareheaded short hair and tailored black tuxedo shoulders to reveal his right hand in a crisp white French cuff calmly clasping the exact slender zhergen stem and small white flower behind his lower back. In every single frame from 00:00.000 to 06.583s, keep continuous fluid motion matching <Video 1> with zero sudden scale pops, zero slideshow freezing, and zero mid-shot hard cuts.\n\noverall_soundscape:\nSerene final chord and gentle wind.\n\nnon_diegetic_music:\nMatching source score from <Video 1>.",
      "seed": 3116,
      "sourceMode": "generated_replacement",
      "video": null,
      "status": "终版成片内的时间段；独立片段未归档",
      "thumb": "media/img-6f6f548924a4be3728fd.jpg",
      "refs": [
        {
          "label": "折耳根高定大片_05_全片涉人镜头原片vs成片1比1质检总表",
          "src": "media/img-78110cc2c8b0c59a899d.jpg"
        }
      ]
    },
    {
      "id": "P04",
      "title": "黑底ZHERGEN奢牌圆盒标版",
      "start": 138.633333,
      "duration": 2.7,
      "framing": "原片切镜",
      "action": "黑底ZHERGEN奢牌圆盒标版",
      "prompt": null,
      "seed": null,
      "sourceMode": "source_passthrough",
      "video": null,
      "status": "原片直通，未单独生成",
      "thumb": "media/img-15993ef1fc587ebbf4c8.jpg",
      "refs": [
        {
          "label": "折耳根高定大片_05_全片涉人镜头原片vs成片1比1质检总表",
          "src": "media/img-78110cc2c8b0c59a899d.jpg"
        }
      ]
    }
  ],
  "generation": {
    "model": "MiniMax H3 Viggle Remake + LC_DF3_STUDIO",
    "params": [
      {
        "k": "终版规格",
        "v": "1920×1080 · 30/1 · 141.333s"
      },
      {
        "k": "版本",
        "v": "V2"
      }
    ],
    "notes": [
      "meta.generated 统计生产计划明确的生成窗/替换镜段；只在拥有独立成片文件时才给逐镜 video。",
      "逐镜 prompt 为源脚本函数和源计划重建的文本，不等同于平台提交日志逐字存证。",
      "V2 16 个生成窗；原片空镜/微距和品牌字幕依计划直通。"
    ]
  },
  "deliverables": [
    {
      "name": "折耳根高定大片_图1马龙白兰度与LC音色_A机8卡ViggleH3成片_1080p.mp4",
      "src": "https://github.com/aikingtai-ctrl/jintai-film-showcase/releases/download/media-v1/zheergen-couture-v2-141s--2300ecc6700f012bc391.mp4",
      "note": "V2 终版 · 141.333s"
    }
  ]
});
