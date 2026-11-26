window.registerProject({
  "id": "wdd-office-revenge-v2-97s",
  "title": "武丹丹｜现代职场反杀爽剧｜V2 重光换声",
  "subtitle": "2026-11-26 · V2 · 已验收本地终版",
  "logline": "36 个原片切镜；28 个换角/换装，8 个片头花字镜段保留。V2 重光融影并重配真武丹丹音色。",
  "date": "2026-11-26",
  "tags": [
    "V2",
    "已生成",
    "终版归档",
    "16:9",
    "MiniMax H3 Viggle Remake"
  ],
  "model": "MiniMax H3 Viggle Remake + VoxCPM",
  "modelShort": "MiniMax H3 Viggle Remake",
  "poster": "media/img-2977274a0a7009300751.jpg",
  "film": {
    "src": "https://github.com/aikingtai-ctrl/jintai-film-showcase/releases/download/media-v1/wdd-office-revenge-v2-97s--a57c3a3b2fb255b5c43b.mp4",
    "duration": 97.083333,
    "width": 1280,
    "height": 720,
    "fps": "24/1"
  },
  "meta": {
    "shots": 36,
    "generated": 28,
    "durationSec": 97.083333,
    "resolution": "1280×720",
    "fps": "24/1",
    "aspect": "16:9",
    "style": "36 个原片切镜；28 个换角/换装，8 个片头花字镜段保留。V2 重光融影并重配真武丹丹音色。"
  },
  "synopsis": [
    "36 个原片切镜；28 个换角/换装，8 个片头花字镜段保留。V2 重光融影并重配真武丹丹音色。",
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
      "tool": "MiniMax H3 Viggle Remake + VoxCPM",
      "note": "V2 终版；QA 图卡和本地来源账本已归档。"
    }
  ],
  "props": [
    {
      "id": "QA01",
      "name": "QA01_职场反杀_V2重光换角_全片16帧对比表",
      "image": "media/img-0ba7f2a4334a2ee16136.jpg",
      "desc": "V2 终版验收图卡；来源与哈希见本地账本。"
    },
    {
      "id": "QA02",
      "name": "QA02_职场反杀_V2重光换角_关键特写2.5x核验板",
      "image": "media/img-cbcfeb4a5ee865bd0d1a.jpg",
      "desc": "V2 终版验收图卡；来源与哈希见本地账本。"
    },
    {
      "id": "QA03",
      "name": "QA03_职场反杀_V2重光换角_连续动态抽帧表",
      "image": "media/img-388e9822147614ef09d9.jpg",
      "desc": "V2 终版验收图卡；来源与哈希见本地账本。"
    },
    {
      "id": "QA04",
      "name": "00_武丹丹_现代职场全新造型定妆总卡",
      "image": "media/img-922c4db9502b3ef0989d.png",
      "desc": "V2 终版验收图卡；来源与哈希见本地账本。"
    }
  ],
  "shots": [
    {
      "id": "S01",
      "title": "Hero + Male Colleague 1 opening",
      "start": 0,
      "duration": 0.583333,
      "framing": "生成窗 / 终版时间段",
      "action": "Hero + Male Colleague 1 opening",
      "prompt": "subject_definitions:\n<Video 1> is the source 16:9 widescreen corporate office drama clip.\n<Picture 1> is frame 0 of the target video.\n<Subject 1> is the poised 40-year-old East Asian executive woman visible in <Picture 1> (left), with shoulder-length dark wavy hair, wearing a deep burgundy-merlot blazer and ivory silk blouse integrated into <Video 1>'s natural office shadows.\n\nsummary:\n[video editing + character replacement] two-shot medium frame; woman on LEFT stands listening calmly to gray-suit man on RIGHT. <Subject 1> maintains an authentic shadow-integrated film look and performs the exact eye gaze, blinks, head turns, and speech articulation from <Video 1> while all colleagues and office background remain untouched.\n\nretention_analysis:\n- <Video 1> (source video editing): fully_preserved - Lock 16:9 horizontal framing, ambient lighting contrast, exact colleague motions, and <Subject 1>'s natural micro-expressions, blinks, and lip movement.\n- <Picture 1> (appears in [Shot 1]): reference - frame 0 of the target video showing <Subject 1> naturally lit within dark rainy overcast glass-walled office interior, dim cool slate ambient shadows.\n- <Subject 1> (appears across [Shot 1]): fully_preserved - Maintain <Subject 1>'s exact facial structure, wavy black hair, and burgundy blazer throughout.\n\ndetailed_description:\nA realistic 16:9 modern corporate office film shot with dark rainy overcast glass-walled office interior, dim cool slate ambient shadows.\n[Shot 1] {00:00.000 - 00.583s} Matching <Picture 1> and the exact motion timing of <Video 1>, two-shot medium frame; woman on LEFT stands listening calmly to gray-suit man on RIGHT; <Subject 1> speaks or listens calmly with crisp relaxed jaw/lip motion, never rigid or pasted.\n\noverall_soundscape:\nIndoor office dialogue room tone.\n\nnon_diegetic_music:\nUpbeat rhythmic electronic beat.",
      "seed": 895013,
      "sourceMode": "generated_replacement",
      "video": null,
      "status": "终版成片内的时间段；独立片段未归档",
      "thumb": "media/img-fd1558f14ef9bbde82d2.jpg",
      "refs": [
        {
          "label": "QA01_职场反杀_V2重光换角_全片16帧对比表",
          "src": "media/img-0ba7f2a4334a2ee16136.jpg"
        }
      ]
    },
    {
      "id": "S02",
      "title": "Hero closeup looking right",
      "start": 0.583333,
      "duration": 1.583333,
      "framing": "生成窗 / 终版时间段",
      "action": "Hero closeup looking right",
      "prompt": "subject_definitions:\n<Video 1> is the source 16:9 widescreen corporate office drama clip.\n<Picture 1> is frame 0 of the target video.\n<Subject 1> is the poised 40-year-old East Asian executive woman visible in <Picture 1> (center), with shoulder-length dark wavy hair, wearing a deep burgundy-merlot blazer and ivory silk blouse integrated into <Video 1>'s natural office shadows.\n\nsummary:\n[video editing + character replacement] close-up 3/4 profile of woman looking RIGHT with slightly annoyed unsmiling gaze toward man's blurred foreground edge on right. <Subject 1> maintains an authentic shadow-integrated film look and performs the exact eye gaze, blinks, head turns, and speech articulation from <Video 1> while all colleagues and office background remain untouched.\n\nretention_analysis:\n- <Video 1> (source video editing): fully_preserved - Lock 16:9 horizontal framing, ambient lighting contrast, exact colleague motions, and <Subject 1>'s natural micro-expressions, blinks, and lip movement.\n- <Picture 1> (appears in [Shot 1]): reference - frame 0 of the target video showing <Subject 1> naturally lit within moody dark charcoal-grey blurred corridor wall on left and blurred foreground male ear/shoulder on right, NO open room.\n- <Subject 1> (appears across [Shot 1]): fully_preserved - Maintain <Subject 1>'s exact facial structure, wavy black hair, and burgundy blazer throughout.\n\ndetailed_description:\nA realistic 16:9 modern corporate office film shot with moody dark charcoal-grey blurred corridor wall on left and blurred foreground male ear/shoulder on right, NO open room.\n[Shot 1] {00:00.000 - 01.583s} Matching <Picture 1> and the exact motion timing of <Video 1>, close-up 3/4 profile of woman looking RIGHT with slightly annoyed unsmiling gaze toward man's blurred foreground edge on right; <Subject 1> speaks or listens calmly with crisp relaxed jaw/lip motion, never rigid or pasted.\n\noverall_soundscape:\nIndoor office dialogue room tone.\n\nnon_diegetic_music:\nUpbeat rhythmic electronic beat.",
      "seed": 895026,
      "sourceMode": "generated_replacement",
      "video": null,
      "status": "终版成片内的时间段；独立片段未归档",
      "thumb": "media/img-b0b1277fe46969ca6532.jpg",
      "refs": [
        {
          "label": "QA01_职场反杀_V2重光换角_全片16帧对比表",
          "src": "media/img-0ba7f2a4334a2ee16136.jpg"
        }
      ]
    },
    {
      "id": "S03",
      "title": "Hero + Male Colleague 1",
      "start": 2.166667,
      "duration": 1.125,
      "framing": "生成窗 / 终版时间段",
      "action": "Hero + Male Colleague 1",
      "prompt": "subject_definitions:\n<Video 1> is the source 16:9 widescreen corporate office drama clip.\n<Picture 1> is frame 0 of the target video.\n<Subject 1> is the poised 40-year-old East Asian executive woman visible in <Picture 1> (left), with shoulder-length dark wavy hair, wearing a deep burgundy-merlot blazer and ivory silk blouse integrated into <Video 1>'s natural office shadows.\n\nsummary:\n[video editing + character replacement] medium two-shot; woman on LEFT speaks coldly to gray-suit man on RIGHT. <Subject 1> maintains an authentic shadow-integrated film look and performs the exact eye gaze, blinks, head turns, and speech articulation from <Video 1> while all colleagues and office background remain untouched.\n\nretention_analysis:\n- <Video 1> (source video editing): fully_preserved - Lock 16:9 horizontal framing, ambient lighting contrast, exact colleague motions, and <Subject 1>'s natural micro-expressions, blinks, and lip movement.\n- <Picture 1> (appears in [Shot 1]): reference - frame 0 of the target video showing <Subject 1> naturally lit within dark overcast glass-walled office interior matching S01 moody contrast.\n- <Subject 1> (appears across [Shot 1]): fully_preserved - Maintain <Subject 1>'s exact facial structure, wavy black hair, and burgundy blazer throughout.\n\ndetailed_description:\nA realistic 16:9 modern corporate office film shot with dark overcast glass-walled office interior matching S01 moody contrast.\n[Shot 1] {00:00.000 - 01.125s} Matching <Picture 1> and the exact motion timing of <Video 1>, medium two-shot; woman on LEFT speaks coldly to gray-suit man on RIGHT; <Subject 1> speaks or listens calmly with crisp relaxed jaw/lip motion, never rigid or pasted.\n\noverall_soundscape:\nIndoor office dialogue room tone.\n\nnon_diegetic_music:\nUpbeat rhythmic electronic beat.",
      "seed": 895039,
      "sourceMode": "generated_replacement",
      "video": null,
      "status": "终版成片内的时间段；独立片段未归档",
      "thumb": "media/img-87c33b5af799782362b7.jpg",
      "refs": [
        {
          "label": "QA01_职场反杀_V2重光换角_全片16帧对比表",
          "src": "media/img-0ba7f2a4334a2ee16136.jpg"
        }
      ]
    },
    {
      "id": "S04",
      "title": "《仙人指路》 title card over S03",
      "start": 3.291667,
      "duration": 2.166667,
      "framing": "原片切镜",
      "action": "《仙人指路》 title card over S03",
      "prompt": null,
      "seed": null,
      "sourceMode": "source_passthrough",
      "video": null,
      "status": "原片直通，未单独生成",
      "thumb": "media/img-1ad012e9f31ceaa5a84a.jpg",
      "refs": [
        {
          "label": "QA01_职场反杀_V2重光换角_全片16帧对比表",
          "src": "media/img-0ba7f2a4334a2ee16136.jpg"
        }
      ]
    },
    {
      "id": "S05",
      "title": "Pantry Male2 + Hero",
      "start": 5.458333,
      "duration": 1.625,
      "framing": "生成窗 / 终版时间段",
      "action": "Pantry Male2 + Hero",
      "prompt": "subject_definitions:\n<Video 1> is the source 16:9 widescreen corporate office drama clip.\n<Picture 1> is frame 0 of the target video.\n<Subject 1> is the poised 40-year-old East Asian executive woman visible in <Picture 1> (right), with shoulder-length dark wavy hair, wearing a deep burgundy-merlot blazer and ivory silk blouse integrated into <Video 1>'s natural office shadows.\n\nsummary:\n[video editing + character replacement] medium wide two-shot; dark-cardigan man leaning LEFT, woman standing RIGHT holding coffee cup calmly. <Subject 1> maintains an authentic shadow-integrated film look and performs the exact eye gaze, blinks, head turns, and speech articulation from <Video 1> while all colleagues and office background remain untouched.\n\nretention_analysis:\n- <Video 1> (source video editing): fully_preserved - Lock 16:9 horizontal framing, ambient lighting contrast, exact colleague motions, and <Subject 1>'s natural micro-expressions, blinks, and lip movement.\n- <Picture 1> (appears in [Shot 1]): reference - frame 0 of the target video showing <Subject 1> naturally lit within indoor office pantry with dark shelving and soft neutral ceiling light.\n- <Subject 1> (appears across [Shot 1]): fully_preserved - Maintain <Subject 1>'s exact facial structure, wavy black hair, and burgundy blazer throughout.\n\ndetailed_description:\nA realistic 16:9 modern corporate office film shot with indoor office pantry with dark shelving and soft neutral ceiling light.\n[Shot 1] {00:00.000 - 01.625s} Matching <Picture 1> and the exact motion timing of <Video 1>, medium wide two-shot; dark-cardigan man leaning LEFT, woman standing RIGHT holding coffee cup calmly; <Subject 1> speaks or listens calmly with crisp relaxed jaw/lip motion, never rigid or pasted.\n\noverall_soundscape:\nIndoor office dialogue room tone.\n\nnon_diegetic_music:\nUpbeat rhythmic electronic beat.",
      "seed": 895065,
      "sourceMode": "generated_replacement",
      "video": null,
      "status": "终版成片内的时间段；独立片段未归档",
      "thumb": "media/img-f465f814c813bdeac673.jpg",
      "refs": [
        {
          "label": "QA01_职场反杀_V2重光换角_全片16帧对比表",
          "src": "media/img-0ba7f2a4334a2ee16136.jpg"
        }
      ]
    },
    {
      "id": "S06",
      "title": "Hero over Male shoulder",
      "start": 7.083333,
      "duration": 2.875,
      "framing": "生成窗 / 终版时间段",
      "action": "Hero over Male shoulder",
      "prompt": "subject_definitions:\n<Video 1> is the source 16:9 widescreen corporate office drama clip.\n<Picture 1> is frame 0 of the target video.\n<Subject 1> is the poised 40-year-old East Asian executive woman visible in <Picture 1> (center-right), with shoulder-length dark wavy hair, wearing a deep burgundy-merlot blazer and ivory silk blouse integrated into <Video 1>'s natural office shadows.\n\nsummary:\n[video editing + character replacement] over male shoulder medium close-up; woman faces slightly LEFT speaking with sharp unsmiling composure. <Subject 1> maintains an authentic shadow-integrated film look and performs the exact eye gaze, blinks, head turns, and speech articulation from <Video 1> while all colleagues and office background remain untouched.\n\nretention_analysis:\n- <Video 1> (source video editing): fully_preserved - Lock 16:9 horizontal framing, ambient lighting contrast, exact colleague motions, and <Subject 1>'s natural micro-expressions, blinks, and lip movement.\n- <Picture 1> (appears in [Shot 1]): reference - frame 0 of the target video showing <Subject 1> naturally lit within soft bright modern open-plan office with blurred coworker walking in rear.\n- <Subject 1> (appears across [Shot 1]): fully_preserved - Maintain <Subject 1>'s exact facial structure, wavy black hair, and burgundy blazer throughout.\n\ndetailed_description:\nA realistic 16:9 modern corporate office film shot with soft bright modern open-plan office with blurred coworker walking in rear.\n[Shot 1] {00:00.000 - 02.875s} Matching <Picture 1> and the exact motion timing of <Video 1>, over male shoulder medium close-up; woman faces slightly LEFT speaking with sharp unsmiling composure; <Subject 1> speaks or listens calmly with crisp relaxed jaw/lip motion, never rigid or pasted.\n\noverall_soundscape:\nIndoor office dialogue room tone.\n\nnon_diegetic_music:\nUpbeat rhythmic electronic beat.",
      "seed": 895078,
      "sourceMode": "generated_replacement",
      "video": null,
      "status": "终版成片内的时间段；独立片段未归档",
      "thumb": "media/img-db4e6f8dbb394ac3efed.jpg",
      "refs": [
        {
          "label": "QA01_职场反杀_V2重光换角_全片16帧对比表",
          "src": "media/img-0ba7f2a4334a2ee16136.jpg"
        }
      ]
    },
    {
      "id": "S07",
      "title": "Pantry wide + 《精准打击》 tail",
      "start": 9.958333,
      "duration": 2.958333,
      "framing": "生成窗 / 终版时间段",
      "action": "Pantry wide + 《精准打击》 tail",
      "prompt": "subject_definitions:\n<Video 1> is the source 16:9 widescreen corporate office drama clip.\n<Picture 1> is frame 0 of the target video.\n<Subject 1> is the poised 40-year-old East Asian executive woman visible in <Picture 1> (right), with shoulder-length dark wavy hair, wearing a deep burgundy-merlot blazer and ivory silk blouse integrated into <Video 1>'s natural office shadows.\n\nsummary:\n[video editing + character replacement] medium wide two-shot; dark-cardigan man LEFT, woman RIGHT holding cup looking skeptical. <Subject 1> maintains an authentic shadow-integrated film look and performs the exact eye gaze, blinks, head turns, and speech articulation from <Video 1> while all colleagues and office background remain untouched.\n\nretention_analysis:\n- <Video 1> (source video editing): fully_preserved - Lock 16:9 horizontal framing, ambient lighting contrast, exact colleague motions, and <Subject 1>'s natural micro-expressions, blinks, and lip movement.\n- <Picture 1> (appears in [Shot 1]): reference - frame 0 of the target video showing <Subject 1> naturally lit within indoor office pantry with soft diffused overhead office lighting.\n- <Subject 1> (appears across [Shot 1]): fully_preserved - Maintain <Subject 1>'s exact facial structure, wavy black hair, and burgundy blazer throughout.\n\ndetailed_description:\nA realistic 16:9 modern corporate office film shot with indoor office pantry with soft diffused overhead office lighting.\n[Shot 1] {00:00.000 - 00.542s} Matching <Picture 1> and the exact motion timing of <Video 1>, medium wide two-shot; dark-cardigan man LEFT, woman RIGHT holding cup looking skeptical; <Subject 1> speaks or listens calmly with crisp relaxed jaw/lip motion, never rigid or pasted.\n\noverall_soundscape:\nIndoor office dialogue room tone.\n\nnon_diegetic_music:\nUpbeat rhythmic electronic beat.",
      "seed": 895091,
      "sourceMode": "generated_replacement",
      "video": null,
      "status": "终版成片内的时间段；独立片段未归档",
      "thumb": "media/img-8134e426c77ba55dda7d.jpg",
      "refs": [
        {
          "label": "QA01_职场反杀_V2重光换角_全片16帧对比表",
          "src": "media/img-0ba7f2a4334a2ee16136.jpg"
        }
      ]
    },
    {
      "id": "S08",
      "title": "Desk Male3 + Hero",
      "start": 12.916667,
      "duration": 3.416667,
      "framing": "生成窗 / 终版时间段",
      "action": "Desk Male3 + Hero",
      "prompt": "subject_definitions:\n<Video 1> is the source 16:9 widescreen corporate office drama clip.\n<Picture 1> is frame 0 of the target video.\n<Subject 1> is the poised 40-year-old East Asian executive woman visible in <Picture 1> (right), with shoulder-length dark wavy hair, wearing a deep burgundy-merlot blazer and ivory silk blouse integrated into <Video 1>'s natural office shadows.\n\nsummary:\n[video editing + character replacement] medium two-shot across desk; dark-suit man leaning LEFT, woman seated RIGHT looking down/up calmly. <Subject 1> maintains an authentic shadow-integrated film look and performs the exact eye gaze, blinks, head turns, and speech articulation from <Video 1> while all colleagues and office background remain untouched.\n\nretention_analysis:\n- <Video 1> (source video editing): fully_preserved - Lock 16:9 horizontal framing, ambient lighting contrast, exact colleague motions, and <Subject 1>'s natural micro-expressions, blinks, and lip movement.\n- <Picture 1> (appears in [Shot 1]): reference - frame 0 of the target video showing <Subject 1> naturally lit within cool moody high-rise desk area with overcast window shadows.\n- <Subject 1> (appears across [Shot 1]): fully_preserved - Maintain <Subject 1>'s exact facial structure, wavy black hair, and burgundy blazer throughout.\n\ndetailed_description:\nA realistic 16:9 modern corporate office film shot with cool moody high-rise desk area with overcast window shadows.\n[Shot 1] {00:00.000 - 03.417s} Matching <Picture 1> and the exact motion timing of <Video 1>, medium two-shot across desk; dark-suit man leaning LEFT, woman seated RIGHT looking down/up calmly; <Subject 1> speaks or listens calmly with crisp relaxed jaw/lip motion, never rigid or pasted.\n\noverall_soundscape:\nIndoor office dialogue room tone.\n\nnon_diegetic_music:\nUpbeat rhythmic electronic beat.",
      "seed": 895104,
      "sourceMode": "generated_replacement",
      "video": null,
      "status": "终版成片内的时间段；独立片段未归档",
      "thumb": "media/img-712ab7a328b94054cec4.jpg",
      "refs": [
        {
          "label": "QA01_职场反杀_V2重光换角_全片16帧对比表",
          "src": "media/img-0ba7f2a4334a2ee16136.jpg"
        }
      ]
    },
    {
      "id": "S09",
      "title": "Hero over Male3 shoulder",
      "start": 16.333333,
      "duration": 4.083333,
      "framing": "生成窗 / 终版时间段",
      "action": "Hero over Male3 shoulder",
      "prompt": "subject_definitions:\n<Video 1> is the source 16:9 widescreen corporate office drama clip.\n<Picture 1> is frame 0 of the target video.\n<Subject 1> is the poised 40-year-old East Asian executive woman visible in <Picture 1> (right), with shoulder-length dark wavy hair, wearing a deep burgundy-merlot blazer and ivory silk blouse integrated into <Video 1>'s natural office shadows.\n\nsummary:\n[video editing + character replacement] over male shoulder medium close-up; seated woman on RIGHT looks up sharply and speaks unsmilingly. <Subject 1> maintains an authentic shadow-integrated film look and performs the exact eye gaze, blinks, head turns, and speech articulation from <Video 1> while all colleagues and office background remain untouched.\n\nretention_analysis:\n- <Video 1> (source video editing): fully_preserved - Lock 16:9 horizontal framing, ambient lighting contrast, exact colleague motions, and <Subject 1>'s natural micro-expressions, blinks, and lip movement.\n- <Picture 1> (appears in [Shot 1]): reference - frame 0 of the target video showing <Subject 1> naturally lit within cool overcast modern desk interior matching dark-suit man leaning in foreground left.\n- <Subject 1> (appears across [Shot 1]): fully_preserved - Maintain <Subject 1>'s exact facial structure, wavy black hair, and burgundy blazer throughout.\n\ndetailed_description:\nA realistic 16:9 modern corporate office film shot with cool overcast modern desk interior matching dark-suit man leaning in foreground left.\n[Shot 1] {00:00.000 - 04.083s} Matching <Picture 1> and the exact motion timing of <Video 1>, over male shoulder medium close-up; seated woman on RIGHT looks up sharply and speaks unsmilingly; <Subject 1> speaks or listens calmly with crisp relaxed jaw/lip motion, never rigid or pasted.\n\noverall_soundscape:\nIndoor office dialogue room tone.\n\nnon_diegetic_music:\nUpbeat rhythmic electronic beat.",
      "seed": 895117,
      "sourceMode": "generated_replacement",
      "video": null,
      "status": "终版成片内的时间段；独立片段未归档",
      "thumb": "media/img-11e630cec8f962b847b1.jpg",
      "refs": [
        {
          "label": "QA01_职场反杀_V2重光换角_全片16帧对比表",
          "src": "media/img-0ba7f2a4334a2ee16136.jpg"
        }
      ]
    },
    {
      "id": "S10",
      "title": "Male3 facing Hero back of head/shoulder",
      "start": 20.416667,
      "duration": 0.458333,
      "framing": "生成窗 / 终版时间段",
      "action": "Male3 facing Hero back of head/shoulder",
      "prompt": "subject_definitions:\n<Video 1> is the source 16:9 widescreen office drama clip.\n<Picture 1> is frame 0 of the target video showing <Subject 1>'s dark wavy hair and deep burgundy-merlot blazer shoulder matching <Video 1>.\n\nsummary:\n[video editing + wardrobe/hair preservation] medium two-shot; leaning man faces RIGHT toward foreground blurry back-of-head/shoulder of woman on RIGHT edge under cool overcast office desk interior, preserving 100% of male colleague's face, expression, lip motion, and lighting while locking <Subject 1>'s burgundy blazer shoulder and dark hair.\n\nretention_analysis:\n- <Video 1> (source video editing): fully_preserved - Keep male colleague's face, speech articulation, camera angle, and lighting 100% identical.\n- <Picture 1> (appears in [Shot 1]): reference - frame 0 locking the dark hair and deep burgundy-merlot blazer edge.\n\ndetailed_description:\nRealistic corporate office drama clip matching cool overcast office desk interior.\n[Shot 1] {00:00.000 - 00.458s} medium two-shot; leaning man faces RIGHT toward foreground blurry back-of-head/shoulder of woman on RIGHT edge, retaining exact colleague performance and dark burgundy shoulder silhouette from <Picture 1>.\n\noverall_soundscape:\nIndoor office room acoustics.\n\nnon_diegetic_music:\nSubtle upbeat electronic underscore.",
      "seed": 895130,
      "sourceMode": "generated_replacement",
      "video": null,
      "status": "终版成片内的时间段；独立片段未归档",
      "thumb": "media/img-744aa91e1445df0a499c.jpg",
      "refs": [
        {
          "label": "QA01_职场反杀_V2重光换角_全片16帧对比表",
          "src": "media/img-0ba7f2a4334a2ee16136.jpg"
        }
      ]
    },
    {
      "id": "S11",
      "title": "《美好称赞》 title card over S10",
      "start": 20.875,
      "duration": 2.166667,
      "framing": "原片切镜",
      "action": "《美好称赞》 title card over S10",
      "prompt": null,
      "seed": null,
      "sourceMode": "source_passthrough",
      "video": null,
      "status": "原片直通，未单独生成",
      "thumb": "media/img-79d38eb96634d17b0e81.jpg",
      "refs": [
        {
          "label": "QA01_职场反杀_V2重光换角_全片16帧对比表",
          "src": "media/img-0ba7f2a4334a2ee16136.jpg"
        }
      ]
    },
    {
      "id": "S12",
      "title": "Male3 talking, Hero foreground shoulder",
      "start": 23.041667,
      "duration": 1.875,
      "framing": "生成窗 / 终版时间段",
      "action": "Male3 talking, Hero foreground shoulder",
      "prompt": "subject_definitions:\n<Video 1> is the source 16:9 widescreen office drama clip.\n<Picture 1> is frame 0 of the target video showing <Subject 1>'s dark wavy hair and deep burgundy-merlot blazer shoulder matching <Video 1>.\n\nsummary:\n[video editing + wardrobe/hair preservation] medium two-shot; leaning man LEFT speaks angrily toward blurry back-of-head/shoulder of woman foreground RIGHT under cool overcast office desk interior, preserving 100% of male colleague's face, expression, lip motion, and lighting while locking <Subject 1>'s burgundy blazer shoulder and dark hair.\n\nretention_analysis:\n- <Video 1> (source video editing): fully_preserved - Keep male colleague's face, speech articulation, camera angle, and lighting 100% identical.\n- <Picture 1> (appears in [Shot 1]): reference - frame 0 locking the dark hair and deep burgundy-merlot blazer edge.\n\ndetailed_description:\nRealistic corporate office drama clip matching cool overcast office desk interior.\n[Shot 1] {00:00.000 - 01.875s} medium two-shot; leaning man LEFT speaks angrily toward blurry back-of-head/shoulder of woman foreground RIGHT, retaining exact colleague performance and dark burgundy shoulder silhouette from <Picture 1>.\n\noverall_soundscape:\nIndoor office room acoustics.\n\nnon_diegetic_music:\nSubtle upbeat electronic underscore.",
      "seed": 895156,
      "sourceMode": "generated_replacement",
      "video": null,
      "status": "终版成片内的时间段；独立片段未归档",
      "thumb": "media/img-93e96b947ebaf038482f.jpg",
      "refs": [
        {
          "label": "QA01_职场反杀_V2重光换角_全片16帧对比表",
          "src": "media/img-0ba7f2a4334a2ee16136.jpg"
        }
      ]
    },
    {
      "id": "S13",
      "title": "Hero closeup",
      "start": 24.916667,
      "duration": 1.666667,
      "framing": "生成窗 / 终版时间段",
      "action": "Hero closeup",
      "prompt": "subject_definitions:\n<Video 1> is the source 16:9 widescreen corporate office drama clip.\n<Picture 1> is frame 0 of the target video.\n<Subject 1> is the poised 40-year-old East Asian executive woman visible in <Picture 1> (center), with shoulder-length dark wavy hair, wearing a deep burgundy-merlot blazer and ivory silk blouse integrated into <Video 1>'s natural office shadows.\n\nsummary:\n[video editing + character replacement] close-up of woman facing slightly LEFT speaking calmly with unsmiling poised expression. <Subject 1> maintains an authentic shadow-integrated film look and performs the exact eye gaze, blinks, head turns, and speech articulation from <Video 1> while all colleagues and office background remain untouched.\n\nretention_analysis:\n- <Video 1> (source video editing): fully_preserved - Lock 16:9 horizontal framing, ambient lighting contrast, exact colleague motions, and <Subject 1>'s natural micro-expressions, blinks, and lip movement.\n- <Picture 1> (appears in [Shot 1]): reference - frame 0 of the target video showing <Subject 1> naturally lit within soft desaturated neutral corporate office wall background.\n- <Subject 1> (appears across [Shot 1]): fully_preserved - Maintain <Subject 1>'s exact facial structure, wavy black hair, and burgundy blazer throughout.\n\ndetailed_description:\nA realistic 16:9 modern corporate office film shot with soft desaturated neutral corporate office wall background.\n[Shot 1] {00:00.000 - 01.667s} Matching <Picture 1> and the exact motion timing of <Video 1>, close-up of woman facing slightly LEFT speaking calmly with unsmiling poised expression; <Subject 1> speaks or listens calmly with crisp relaxed jaw/lip motion, never rigid or pasted.\n\noverall_soundscape:\nIndoor office dialogue room tone.\n\nnon_diegetic_music:\nUpbeat rhythmic electronic beat.",
      "seed": 895169,
      "sourceMode": "generated_replacement",
      "video": null,
      "status": "终版成片内的时间段；独立片段未归档",
      "thumb": "media/img-0098831885b2c8de31fa.jpg",
      "refs": [
        {
          "label": "QA01_职场反杀_V2重光换角_全片16帧对比表",
          "src": "media/img-0ba7f2a4334a2ee16136.jpg"
        }
      ]
    },
    {
      "id": "S14",
      "title": "《哪凉快哪呆着去》 title card over S13",
      "start": 26.583333,
      "duration": 2.416667,
      "framing": "原片切镜",
      "action": "《哪凉快哪呆着去》 title card over S13",
      "prompt": null,
      "seed": null,
      "sourceMode": "source_passthrough",
      "video": null,
      "status": "原片直通，未单独生成",
      "thumb": "media/img-f522d5f50ca6fed17216.jpg",
      "refs": [
        {
          "label": "QA01_职场反杀_V2重光换角_全片16帧对比表",
          "src": "media/img-0ba7f2a4334a2ee16136.jpg"
        }
      ]
    },
    {
      "id": "S15",
      "title": "Pantry Hero + Glasses Male4",
      "start": 29,
      "duration": 4.916667,
      "framing": "生成窗 / 终版时间段",
      "action": "Pantry Hero + Glasses Male4",
      "prompt": "subject_definitions:\n<Video 1> is the source 16:9 widescreen corporate office drama clip.\n<Picture 1> is frame 0 of the target video.\n<Subject 1> is the poised 40-year-old East Asian executive woman visible in <Picture 1> (left), with shoulder-length dark wavy hair, wearing a deep burgundy-merlot blazer and ivory silk blouse integrated into <Video 1>'s natural office shadows.\n\nsummary:\n[video editing + character replacement] medium two-shot; woman on LEFT speaks calmly while glasses male colleague in patterned white shirt stands RIGHT. <Subject 1> maintains an authentic shadow-integrated film look and performs the exact eye gaze, blinks, head turns, and speech articulation from <Video 1> while all colleagues and office background remain untouched.\n\nretention_analysis:\n- <Video 1> (source video editing): fully_preserved - Lock 16:9 horizontal framing, ambient lighting contrast, exact colleague motions, and <Subject 1>'s natural micro-expressions, blinks, and lip movement.\n- <Picture 1> (appears in [Shot 1]): reference - frame 0 of the target video showing <Subject 1> naturally lit within soft cool office pantry corner with blurred shelves.\n- <Subject 1> (appears across [Shot 1]): fully_preserved - Maintain <Subject 1>'s exact facial structure, wavy black hair, and burgundy blazer throughout.\n\ndetailed_description:\nA realistic 16:9 modern corporate office film shot with soft cool office pantry corner with blurred shelves.\n[Shot 1] {00:00.000 - 04.917s} Matching <Picture 1> and the exact motion timing of <Video 1>, medium two-shot; woman on LEFT speaks calmly while glasses male colleague in patterned white shirt stands RIGHT; <Subject 1> speaks or listens calmly with crisp relaxed jaw/lip motion, never rigid or pasted.\n\noverall_soundscape:\nIndoor office dialogue room tone.\n\nnon_diegetic_music:\nUpbeat rhythmic electronic beat.",
      "seed": 895195,
      "sourceMode": "generated_replacement",
      "video": null,
      "status": "终版成片内的时间段；独立片段未归档",
      "thumb": "media/img-de10b5f577c25238b11c.jpg",
      "refs": [
        {
          "label": "QA01_职场反杀_V2重光换角_全片16帧对比表",
          "src": "media/img-0ba7f2a4334a2ee16136.jpg"
        }
      ]
    },
    {
      "id": "S16",
      "title": "《这都被你发现了》 title card over S15",
      "start": 33.916667,
      "duration": 2.5,
      "framing": "原片切镜",
      "action": "《这都被你发现了》 title card over S15",
      "prompt": null,
      "seed": null,
      "sourceMode": "source_passthrough",
      "video": null,
      "status": "原片直通，未单独生成",
      "thumb": "media/img-b9b794877e2409cfc2b1.jpg",
      "refs": [
        {
          "label": "QA01_职场反杀_V2重光换角_全片16帧对比表",
          "src": "media/img-0ba7f2a4334a2ee16136.jpg"
        }
      ]
    },
    {
      "id": "S17",
      "title": "Restroom mirror Hero back + reflection + Female Colleague",
      "start": 36.416667,
      "duration": 3.458333,
      "framing": "生成窗 / 终版时间段",
      "action": "Restroom mirror Hero back + reflection + Female Colleague",
      "prompt": "subject_definitions:\n<Video 1> is the source 16:9 widescreen corporate office drama clip.\n<Picture 1> is frame 0 of the target video.\n<Subject 1> is the poised 40-year-old East Asian executive woman visible in <Picture 1> (mirror_left), with shoulder-length dark wavy hair, wearing a deep burgundy-merlot blazer and ivory silk blouse integrated into <Video 1>'s natural office shadows.\n\nsummary:\n[video editing + character replacement] woman seen from back-left AND reflected in mirror center-left while female colleague fixes hair on RIGHT. <Subject 1> maintains an authentic shadow-integrated film look and performs the exact eye gaze, blinks, head turns, and speech articulation from <Video 1> while all colleagues and office background remain untouched.\n\nretention_analysis:\n- <Video 1> (source video editing): fully_preserved - Lock 16:9 horizontal framing, ambient lighting contrast, exact colleague motions, and <Subject 1>'s natural micro-expressions, blinks, and lip movement.\n- <Picture 1> (appears in [Shot 1]): reference - frame 0 of the target video showing <Subject 1> naturally lit within clean warm-neutral office restroom vanity mirror lighting.\n- <Subject 1> (appears across [Shot 1]): fully_preserved - Maintain <Subject 1>'s exact facial structure, wavy black hair, and burgundy blazer throughout.\n\ndetailed_description:\nA realistic 16:9 modern corporate office film shot with clean warm-neutral office restroom vanity mirror lighting.\n[Shot 1] {00:00.000 - 03.458s} Matching <Picture 1> and the exact motion timing of <Video 1>, woman seen from back-left AND reflected in mirror center-left while female colleague fixes hair on RIGHT; <Subject 1> speaks or listens calmly with crisp relaxed jaw/lip motion, never rigid or pasted.\n\noverall_soundscape:\nIndoor office dialogue room tone.\n\nnon_diegetic_music:\nUpbeat rhythmic electronic beat.",
      "seed": 895221,
      "sourceMode": "generated_replacement",
      "video": null,
      "status": "终版成片内的时间段；独立片段未归档",
      "thumb": "media/img-f326c929a0ae569ceaee.jpg",
      "refs": [
        {
          "label": "QA01_职场反杀_V2重光换角_全片16帧对比表",
          "src": "media/img-0ba7f2a4334a2ee16136.jpg"
        }
      ]
    },
    {
      "id": "S18",
      "title": "Hero facing Female Colleague",
      "start": 39.875,
      "duration": 3.416667,
      "framing": "生成窗 / 终版时间段",
      "action": "Hero facing Female Colleague",
      "prompt": "subject_definitions:\n<Video 1> is the source 16:9 widescreen corporate office drama clip.\n<Picture 1> is frame 0 of the target video.\n<Subject 1> is the poised 40-year-old East Asian executive woman visible in <Picture 1> (center-left), with shoulder-length dark wavy hair, wearing a deep burgundy-merlot blazer and ivory silk blouse integrated into <Video 1>'s natural office shadows.\n\nsummary:\n[video editing + character replacement] close-up of woman on LEFT touching her ear/hair looking slightly right toward blurred foreground female shoulder on right. <Subject 1> maintains an authentic shadow-integrated film look and performs the exact eye gaze, blinks, head turns, and speech articulation from <Video 1> while all colleagues and office background remain untouched.\n\nretention_analysis:\n- <Video 1> (source video editing): fully_preserved - Lock 16:9 horizontal framing, ambient lighting contrast, exact colleague motions, and <Subject 1>'s natural micro-expressions, blinks, and lip movement.\n- <Picture 1> (appears in [Shot 1]): reference - frame 0 of the target video showing <Subject 1> naturally lit within dark softly blurred restroom corridor wall and blurred brown-haired female foreground shoulder on right, NO extra blue office staff.\n- <Subject 1> (appears across [Shot 1]): fully_preserved - Maintain <Subject 1>'s exact facial structure, wavy black hair, and burgundy blazer throughout.\n\ndetailed_description:\nA realistic 16:9 modern corporate office film shot with dark softly blurred restroom corridor wall and blurred brown-haired female foreground shoulder on right, NO extra blue office staff.\n[Shot 1] {00:00.000 - 03.417s} Matching <Picture 1> and the exact motion timing of <Video 1>, close-up of woman on LEFT touching her ear/hair looking slightly right toward blurred foreground female shoulder on right; <Subject 1> speaks or listens calmly with crisp relaxed jaw/lip motion, never rigid or pasted.\n\noverall_soundscape:\nIndoor office dialogue room tone.\n\nnon_diegetic_music:\nUpbeat rhythmic electronic beat.",
      "seed": 895234,
      "sourceMode": "generated_replacement",
      "video": null,
      "status": "终版成片内的时间段；独立片段未归档",
      "thumb": "media/img-5b1cf483a78349f73157.jpg",
      "refs": [
        {
          "label": "QA01_职场反杀_V2重光换角_全片16帧对比表",
          "src": "media/img-0ba7f2a4334a2ee16136.jpg"
        }
      ]
    },
    {
      "id": "S19",
      "title": "《返老还童》 title card over S18",
      "start": 43.291667,
      "duration": 2.041667,
      "framing": "原片切镜",
      "action": "《返老还童》 title card over S18",
      "prompt": null,
      "seed": null,
      "sourceMode": "source_passthrough",
      "video": null,
      "status": "原片直通，未单独生成",
      "thumb": "media/img-461200687b7b0f293419.jpg",
      "refs": [
        {
          "label": "QA01_职场反杀_V2重光换角_全片16帧对比表",
          "src": "media/img-0ba7f2a4334a2ee16136.jpg"
        }
      ]
    },
    {
      "id": "S20",
      "title": "Cafe Male5 + Hero back/3-4",
      "start": 45.333333,
      "duration": 2.583333,
      "framing": "生成窗 / 终版时间段",
      "action": "Cafe Male5 + Hero back/3-4",
      "prompt": "subject_definitions:\n<Video 1> is the source 16:9 widescreen office drama clip.\n<Picture 1> is frame 0 of the target video showing <Subject 1>'s dark wavy hair and deep burgundy-merlot blazer shoulder matching <Video 1>.\n\nsummary:\n[video editing + wardrobe/hair preservation] medium two-shot across small cafe table; man seated LEFT, woman seen from back/3-4 profile seated RIGHT under warm golden sunlit venetian-blind lounge table, preserving 100% of male colleague's face, expression, lip motion, and lighting while locking <Subject 1>'s burgundy blazer shoulder and dark hair.\n\nretention_analysis:\n- <Video 1> (source video editing): fully_preserved - Keep male colleague's face, speech articulation, camera angle, and lighting 100% identical.\n- <Picture 1> (appears in [Shot 1]): reference - frame 0 locking the dark hair and deep burgundy-merlot blazer edge.\n\ndetailed_description:\nRealistic corporate office drama clip matching warm golden sunlit venetian-blind lounge table.\n[Shot 1] {00:00.000 - 02.583s} medium two-shot across small cafe table; man seated LEFT, woman seen from back/3-4 profile seated RIGHT, retaining exact colleague performance and dark burgundy shoulder silhouette from <Picture 1>.\n\noverall_soundscape:\nIndoor office room acoustics.\n\nnon_diegetic_music:\nSubtle upbeat electronic underscore.",
      "seed": 895260,
      "sourceMode": "generated_replacement",
      "video": null,
      "status": "终版成片内的时间段；独立片段未归档",
      "thumb": "media/img-d51b3ec2391f7bbb8c48.jpg",
      "refs": [
        {
          "label": "QA01_职场反杀_V2重光换角_全片16帧对比表",
          "src": "media/img-0ba7f2a4334a2ee16136.jpg"
        }
      ]
    },
    {
      "id": "S21",
      "title": "Cafe Hero facing Male5 shoulder",
      "start": 47.916667,
      "duration": 3.333333,
      "framing": "生成窗 / 终版时间段",
      "action": "Cafe Hero facing Male5 shoulder",
      "prompt": "subject_definitions:\n<Video 1> is the source 16:9 widescreen corporate office drama clip.\n<Picture 1> is frame 0 of the target video.\n<Subject 1> is the poised 40-year-old East Asian executive woman visible in <Picture 1> (right), with shoulder-length dark wavy hair, wearing a deep burgundy-merlot blazer and ivory silk blouse integrated into <Video 1>'s natural office shadows.\n\nsummary:\n[video editing + character replacement] over man's dark shoulder LEFT; woman seated RIGHT facing LEFT speaking calmly across table. <Subject 1> maintains an authentic shadow-integrated film look and performs the exact eye gaze, blinks, head turns, and speech articulation from <Video 1> while all colleagues and office background remain untouched.\n\nretention_analysis:\n- <Video 1> (source video editing): fully_preserved - Lock 16:9 horizontal framing, ambient lighting contrast, exact colleague motions, and <Subject 1>'s natural micro-expressions, blinks, and lip movement.\n- <Picture 1> (appears in [Shot 1]): reference - frame 0 of the target video showing <Subject 1> naturally lit within warm golden sunlit venetian-blind lounge interior.\n- <Subject 1> (appears across [Shot 1]): fully_preserved - Maintain <Subject 1>'s exact facial structure, wavy black hair, and burgundy blazer throughout.\n\ndetailed_description:\nA realistic 16:9 modern corporate office film shot with warm golden sunlit venetian-blind lounge interior.\n[Shot 1] {00:00.000 - 03.333s} Matching <Picture 1> and the exact motion timing of <Video 1>, over man's dark shoulder LEFT; woman seated RIGHT facing LEFT speaking calmly across table; <Subject 1> speaks or listens calmly with crisp relaxed jaw/lip motion, never rigid or pasted.\n\noverall_soundscape:\nIndoor office dialogue room tone.\n\nnon_diegetic_music:\nUpbeat rhythmic electronic beat.",
      "seed": 895273,
      "sourceMode": "generated_replacement",
      "video": null,
      "status": "终版成片内的时间段；独立片段未归档",
      "thumb": "media/img-017540718c213f0cd7e8.jpg",
      "refs": [
        {
          "label": "QA01_职场反杀_V2重光换角_全片16帧对比表",
          "src": "media/img-0ba7f2a4334a2ee16136.jpg"
        }
      ]
    },
    {
      "id": "S22",
      "title": "Hero closeup looking down",
      "start": 51.25,
      "duration": 1.875,
      "framing": "生成窗 / 终版时间段",
      "action": "Hero closeup looking down",
      "prompt": "subject_definitions:\n<Video 1> is the source 16:9 widescreen corporate office drama clip.\n<Picture 1> is frame 0 of the target video.\n<Subject 1> is the poised 40-year-old East Asian executive woman visible in <Picture 1> (center-right), with shoulder-length dark wavy hair, wearing a deep burgundy-merlot blazer and ivory silk blouse integrated into <Video 1>'s natural office shadows.\n\nsummary:\n[video editing + character replacement] tight close-up profile of seated woman facing slightly LEFT looking downward quietly with closed lips. <Subject 1> maintains an authentic shadow-integrated film look and performs the exact eye gaze, blinks, head turns, and speech articulation from <Video 1> while all colleagues and office background remain untouched.\n\nretention_analysis:\n- <Video 1> (source video editing): fully_preserved - Lock 16:9 horizontal framing, ambient lighting contrast, exact colleague motions, and <Subject 1>'s natural micro-expressions, blinks, and lip movement.\n- <Picture 1> (appears in [Shot 1]): reference - frame 0 of the target video showing <Subject 1> naturally lit within warm golden sunlit horizontal venetian-blind slatted window light ONLY, NO dark office monitors or computers.\n- <Subject 1> (appears across [Shot 1]): fully_preserved - Maintain <Subject 1>'s exact facial structure, wavy black hair, and burgundy blazer throughout.\n\ndetailed_description:\nA realistic 16:9 modern corporate office film shot with warm golden sunlit horizontal venetian-blind slatted window light ONLY, NO dark office monitors or computers.\n[Shot 1] {00:00.000 - 01.875s} Matching <Picture 1> and the exact motion timing of <Video 1>, tight close-up profile of seated woman facing slightly LEFT looking downward quietly with closed lips; <Subject 1> speaks or listens calmly with crisp relaxed jaw/lip motion, never rigid or pasted.\n\noverall_soundscape:\nIndoor office dialogue room tone.\n\nnon_diegetic_music:\nUpbeat rhythmic electronic beat.",
      "seed": 895286,
      "sourceMode": "generated_replacement",
      "video": null,
      "status": "终版成片内的时间段；独立片段未归档",
      "thumb": "media/img-8cbbe20cf3f445e3b9f3.jpg",
      "refs": [
        {
          "label": "QA01_职场反杀_V2重光换角_全片16帧对比表",
          "src": "media/img-0ba7f2a4334a2ee16136.jpg"
        }
      ]
    },
    {
      "id": "S23",
      "title": "《路边一条》 title card over S22",
      "start": 53.125,
      "duration": 2.083333,
      "framing": "原片切镜",
      "action": "《路边一条》 title card over S22",
      "prompt": null,
      "seed": null,
      "sourceMode": "source_passthrough",
      "video": null,
      "status": "原片直通，未单独生成",
      "thumb": "media/img-d792d664261a736ed224.jpg",
      "refs": [
        {
          "label": "QA01_职场反杀_V2重光换角_全片16帧对比表",
          "src": "media/img-0ba7f2a4334a2ee16136.jpg"
        }
      ]
    },
    {
      "id": "S24",
      "title": "Pantry wide Male2 + Hero",
      "start": 55.208333,
      "duration": 4.666667,
      "framing": "生成窗 / 终版时间段",
      "action": "Pantry wide Male2 + Hero",
      "prompt": "subject_definitions:\n<Video 1> is the source 16:9 widescreen corporate office drama clip.\n<Picture 1> is frame 0 of the target video.\n<Subject 1> is the poised 40-year-old East Asian executive woman visible in <Picture 1> (left), with shoulder-length dark wavy hair, wearing a deep burgundy-merlot blazer and ivory silk blouse integrated into <Video 1>'s natural office shadows.\n\nsummary:\n[video editing + character replacement] wide two-shot; woman standing LEFT in burgundy blazer holding small snack cup, male colleague in light beige short-sleeve polo standing RIGHT holding white mug. <Subject 1> maintains an authentic shadow-integrated film look and performs the exact eye gaze, blinks, head turns, and speech articulation from <Video 1> while all colleagues and office background remain untouched.\n\nretention_analysis:\n- <Video 1> (source video editing): fully_preserved - Lock 16:9 horizontal framing, ambient lighting contrast, exact colleague motions, and <Subject 1>'s natural micro-expressions, blinks, and lip movement.\n- <Picture 1> (appears in [Shot 1]): reference - frame 0 of the target video showing <Subject 1> naturally lit within soft office pantry interior with water dispenser behind.\n- <Subject 1> (appears across [Shot 1]): fully_preserved - Maintain <Subject 1>'s exact facial structure, wavy black hair, and burgundy blazer throughout.\n\ndetailed_description:\nA realistic 16:9 modern corporate office film shot with soft office pantry interior with water dispenser behind.\n[Shot 1] {00:00.000 - 04.667s} Matching <Picture 1> and the exact motion timing of <Video 1>, wide two-shot; woman standing LEFT in burgundy blazer holding small snack cup, male colleague in light beige short-sleeve polo standing RIGHT holding white mug; <Subject 1> speaks or listens calmly with crisp relaxed jaw/lip motion, never rigid or pasted.\n\noverall_soundscape:\nIndoor office dialogue room tone.\n\nnon_diegetic_music:\nUpbeat rhythmic electronic beat.",
      "seed": 895312,
      "sourceMode": "generated_replacement",
      "video": null,
      "status": "终版成片内的时间段；独立片段未归档",
      "thumb": "media/img-f78e74da7625005b8a74.jpg",
      "refs": [
        {
          "label": "QA01_职场反杀_V2重光换角_全片16帧对比表",
          "src": "media/img-0ba7f2a4334a2ee16136.jpg"
        }
      ]
    },
    {
      "id": "S25",
      "title": "Hero closeup",
      "start": 59.875,
      "duration": 4.125,
      "framing": "生成窗 / 终版时间段",
      "action": "Hero closeup",
      "prompt": "subject_definitions:\n<Video 1> is the source 16:9 widescreen corporate office drama clip.\n<Picture 1> is frame 0 of the target video.\n<Subject 1> is the poised 40-year-old East Asian executive woman visible in <Picture 1> (center), with shoulder-length dark wavy hair, wearing a deep burgundy-merlot blazer and ivory silk blouse integrated into <Video 1>'s natural office shadows.\n\nsummary:\n[video editing + character replacement] close-up of woman looking DOWNWARD with eyes cast down toward bottom frame, calm unsmiling expression. <Subject 1> maintains an authentic shadow-integrated film look and performs the exact eye gaze, blinks, head turns, and speech articulation from <Video 1> while all colleagues and office background remain untouched.\n\nretention_analysis:\n- <Video 1> (source video editing): fully_preserved - Lock 16:9 horizontal framing, ambient lighting contrast, exact colleague motions, and <Subject 1>'s natural micro-expressions, blinks, and lip movement.\n- <Picture 1> (appears in [Shot 1]): reference - frame 0 of the target video showing <Subject 1> naturally lit within plain smooth pale-grey-beige corridor wall with dark window frame edge left ONLY, NO seated office coworkers behind her.\n- <Subject 1> (appears across [Shot 1]): fully_preserved - Maintain <Subject 1>'s exact facial structure, wavy black hair, and burgundy blazer throughout.\n\ndetailed_description:\nA realistic 16:9 modern corporate office film shot with plain smooth pale-grey-beige corridor wall with dark window frame edge left ONLY, NO seated office coworkers behind her.\n[Shot 1] {00:00.000 - 04.125s} Matching <Picture 1> and the exact motion timing of <Video 1>, close-up of woman looking DOWNWARD with eyes cast down toward bottom frame, calm unsmiling expression; <Subject 1> speaks or listens calmly with crisp relaxed jaw/lip motion, never rigid or pasted.\n\noverall_soundscape:\nIndoor office dialogue room tone.\n\nnon_diegetic_music:\nUpbeat rhythmic electronic beat.",
      "seed": 895325,
      "sourceMode": "generated_replacement",
      "video": null,
      "status": "终版成片内的时间段；独立片段未归档",
      "thumb": "media/img-b91a68c17451cdbf2625.jpg",
      "refs": [
        {
          "label": "QA01_职场反杀_V2重光换角_全片16帧对比表",
          "src": "media/img-0ba7f2a4334a2ee16136.jpg"
        }
      ]
    },
    {
      "id": "S26",
      "title": "Pantry Hero + Glasses Male4",
      "start": 64,
      "duration": 2.208333,
      "framing": "生成窗 / 终版时间段",
      "action": "Pantry Hero + Glasses Male4",
      "prompt": "subject_definitions:\n<Video 1> is the source 16:9 widescreen corporate office drama clip.\n<Picture 1> is frame 0 of the target video.\n<Subject 1> is the poised 40-year-old East Asian executive woman visible in <Picture 1> (left), with shoulder-length dark wavy hair, wearing a deep burgundy-merlot blazer and ivory silk blouse integrated into <Video 1>'s natural office shadows.\n\nsummary:\n[video editing + character replacement] medium two-shot; woman standing LEFT looking down at cup while smiling male colleague in light beige short-sleeve polo without glasses speaks RIGHT. <Subject 1> maintains an authentic shadow-integrated film look and performs the exact eye gaze, blinks, head turns, and speech articulation from <Video 1> while all colleagues and office background remain untouched.\n\nretention_analysis:\n- <Video 1> (source video editing): fully_preserved - Lock 16:9 horizontal framing, ambient lighting contrast, exact colleague motions, and <Subject 1>'s natural micro-expressions, blinks, and lip movement.\n- <Picture 1> (appears in [Shot 1]): reference - frame 0 of the target video showing <Subject 1> naturally lit within plain neutral pantry wall and dark coffee-station counter.\n- <Subject 1> (appears across [Shot 1]): fully_preserved - Maintain <Subject 1>'s exact facial structure, wavy black hair, and burgundy blazer throughout.\n\ndetailed_description:\nA realistic 16:9 modern corporate office film shot with plain neutral pantry wall and dark coffee-station counter.\n[Shot 1] {00:00.000 - 02.208s} Matching <Picture 1> and the exact motion timing of <Video 1>, medium two-shot; woman standing LEFT looking down at cup while smiling male colleague in light beige short-sleeve polo without glasses speaks RIGHT; <Subject 1> speaks or listens calmly with crisp relaxed jaw/lip motion, never rigid or pasted.\n\noverall_soundscape:\nIndoor office dialogue room tone.\n\nnon_diegetic_music:\nUpbeat rhythmic electronic beat.",
      "seed": 895338,
      "sourceMode": "generated_replacement",
      "video": null,
      "status": "终版成片内的时间段；独立片段未归档",
      "thumb": "media/img-4884873144120ec4be55.jpg",
      "refs": [
        {
          "label": "QA01_职场反杀_V2重光换角_全片16帧对比表",
          "src": "media/img-0ba7f2a4334a2ee16136.jpg"
        }
      ]
    },
    {
      "id": "S27",
      "title": "Pantry Hero + Glasses Male4",
      "start": 66.208333,
      "duration": 3.791667,
      "framing": "生成窗 / 终版时间段",
      "action": "Pantry Hero + Glasses Male4",
      "prompt": "subject_definitions:\n<Video 1> is the source 16:9 widescreen corporate office drama clip.\n<Picture 1> is frame 0 of the target video.\n<Subject 1> is the poised 40-year-old East Asian executive woman visible in <Picture 1> (left), with shoulder-length dark wavy hair, wearing a deep burgundy-merlot blazer and ivory silk blouse integrated into <Video 1>'s natural office shadows.\n\nsummary:\n[video editing + character replacement] medium two-shot; woman standing LEFT looks up sharply and speaks to glasses male colleague on RIGHT. <Subject 1> maintains an authentic shadow-integrated film look and performs the exact eye gaze, blinks, head turns, and speech articulation from <Video 1> while all colleagues and office background remain untouched.\n\nretention_analysis:\n- <Video 1> (source video editing): fully_preserved - Lock 16:9 horizontal framing, ambient lighting contrast, exact colleague motions, and <Subject 1>'s natural micro-expressions, blinks, and lip movement.\n- <Picture 1> (appears in [Shot 1]): reference - frame 0 of the target video showing <Subject 1> naturally lit within neutral modern pantry wall and glass interior.\n- <Subject 1> (appears across [Shot 1]): fully_preserved - Maintain <Subject 1>'s exact facial structure, wavy black hair, and burgundy blazer throughout.\n\ndetailed_description:\nA realistic 16:9 modern corporate office film shot with neutral modern pantry wall and glass interior.\n[Shot 1] {00:00.000 - 03.792s} Matching <Picture 1> and the exact motion timing of <Video 1>, medium two-shot; woman standing LEFT looks up sharply and speaks to glasses male colleague on RIGHT; <Subject 1> speaks or listens calmly with crisp relaxed jaw/lip motion, never rigid or pasted.\n\noverall_soundscape:\nIndoor office dialogue room tone.\n\nnon_diegetic_music:\nUpbeat rhythmic electronic beat.",
      "seed": 895351,
      "sourceMode": "generated_replacement",
      "video": null,
      "status": "终版成片内的时间段；独立片段未归档",
      "thumb": "media/img-86241cdea01a8dbc6a09.jpg",
      "refs": [
        {
          "label": "QA01_职场反杀_V2重光换角_全片16帧对比表",
          "src": "media/img-0ba7f2a4334a2ee16136.jpg"
        }
      ]
    },
    {
      "id": "S28",
      "title": "《精准测量》 title card over S27",
      "start": 70,
      "duration": 2.5,
      "framing": "原片切镜",
      "action": "《精准测量》 title card over S27",
      "prompt": null,
      "seed": null,
      "sourceMode": "source_passthrough",
      "video": null,
      "status": "原片直通，未单独生成",
      "thumb": "media/img-0974073b089c8e11a284.jpg",
      "refs": [
        {
          "label": "QA01_职场反杀_V2重光换角_全片16帧对比表",
          "src": "media/img-0ba7f2a4334a2ee16136.jpg"
        }
      ]
    },
    {
      "id": "S29",
      "title": "Office wide group Male3 + Hero + coworkers",
      "start": 72.5,
      "duration": 2.25,
      "framing": "生成窗 / 终版时间段",
      "action": "Office wide group Male3 + Hero + coworkers",
      "prompt": "subject_definitions:\n<Video 1> is the source 16:9 widescreen corporate office drama clip.\n<Picture 1> is frame 0 of the target video.\n<Subject 1> is the poised 40-year-old East Asian executive woman visible in <Picture 1> (seated_right), with shoulder-length dark wavy hair, wearing a deep burgundy-merlot blazer and ivory silk blouse integrated into <Video 1>'s natural office shadows.\n\nsummary:\n[video editing + character replacement] two-person office desk shot ONLY (NO standing man in suit); young woman colleague in cream knit sweater STANDING LEFT holding white papers speaking down, protagonist SEATED RIGHT at computer keyboard in burgundy blazer. <Subject 1> maintains an authentic shadow-integrated film look and performs the exact eye gaze, blinks, head turns, and speech articulation from <Video 1> while all colleagues and office background remain untouched.\n\nretention_analysis:\n- <Video 1> (source video editing): fully_preserved - Lock 16:9 horizontal framing, ambient lighting contrast, exact colleague motions, and <Subject 1>'s natural micro-expressions, blinks, and lip movement.\n- <Picture 1> (appears in [Shot 1]): reference - frame 0 of the target video showing <Subject 1> naturally lit within bright modern open-plan office workstation.\n- <Subject 1> (appears across [Shot 1]): fully_preserved - Maintain <Subject 1>'s exact facial structure, wavy black hair, and burgundy blazer throughout.\n\ndetailed_description:\nA realistic 16:9 modern corporate office film shot with bright modern open-plan office workstation.\n[Shot 1] {00:00.000 - 02.250s} Matching <Picture 1> and the exact motion timing of <Video 1>, two-person office desk shot ONLY (NO standing man in suit); young woman colleague in cream knit sweater STANDING LEFT holding white papers speaking down, protagonist SEATED RIGHT at computer keyboard in burgundy blazer; <Subject 1> speaks or listens calmly with crisp relaxed jaw/lip motion, never rigid or pasted.\n\noverall_soundscape:\nIndoor office dialogue room tone.\n\nnon_diegetic_music:\nUpbeat rhythmic electronic beat.",
      "seed": 895377,
      "sourceMode": "generated_replacement",
      "video": null,
      "status": "终版成片内的时间段；独立片段未归档",
      "thumb": "media/img-02f60d1833d08b0d8c1f.jpg",
      "refs": [
        {
          "label": "QA01_职场反杀_V2重光换角_全片16帧对比表",
          "src": "media/img-0ba7f2a4334a2ee16136.jpg"
        }
      ]
    },
    {
      "id": "S30",
      "title": "Hero at desk closeup",
      "start": 74.75,
      "duration": 4.333333,
      "framing": "生成窗 / 终版时间段",
      "action": "Hero at desk closeup",
      "prompt": "subject_definitions:\n<Video 1> is the source 16:9 widescreen corporate office drama clip.\n<Picture 1> is frame 0 of the target video.\n<Subject 1> is the poised 40-year-old East Asian executive woman visible in <Picture 1> (center), with shoulder-length dark wavy hair, wearing a deep burgundy-merlot blazer and ivory silk blouse integrated into <Video 1>'s natural office shadows.\n\nsummary:\n[video editing + character replacement] close-up of seated woman glancing aside toward left-down with slight disdain, holding white papers below. <Subject 1> maintains an authentic shadow-integrated film look and performs the exact eye gaze, blinks, head turns, and speech articulation from <Video 1> while all colleagues and office background remain untouched.\n\nretention_analysis:\n- <Video 1> (source video editing): fully_preserved - Lock 16:9 horizontal framing, ambient lighting contrast, exact colleague motions, and <Subject 1>'s natural micro-expressions, blinks, and lip movement.\n- <Picture 1> (appears in [Shot 1]): reference - frame 0 of the target video showing <Subject 1> naturally lit within cool blurred office workstation wall and dark chair edge matching <Picture 1>.\n- <Subject 1> (appears across [Shot 1]): fully_preserved - Maintain <Subject 1>'s exact facial structure, wavy black hair, and burgundy blazer throughout.\n\ndetailed_description:\nA realistic 16:9 modern corporate office film shot with cool blurred office workstation wall and dark chair edge matching <Picture 1>.\n[Shot 1] {00:00.000 - 04.333s} Matching <Picture 1> and the exact motion timing of <Video 1>, close-up of seated woman glancing aside toward left-down with slight disdain, holding white papers below; <Subject 1> speaks or listens calmly with crisp relaxed jaw/lip motion, never rigid or pasted.\n\noverall_soundscape:\nIndoor office dialogue room tone.\n\nnon_diegetic_music:\nUpbeat rhythmic electronic beat.",
      "seed": 895390,
      "sourceMode": "generated_replacement",
      "video": null,
      "status": "终版成片内的时间段；独立片段未归档",
      "thumb": "media/img-5d8f52b1e5f1380dabe2.jpg",
      "refs": [
        {
          "label": "QA01_职场反杀_V2重光换角_全片16帧对比表",
          "src": "media/img-0ba7f2a4334a2ee16136.jpg"
        }
      ]
    },
    {
      "id": "S31",
      "title": "Female Colleague 2 + Hero",
      "start": 79.083333,
      "duration": 0.458333,
      "framing": "生成窗 / 终版时间段",
      "action": "Female Colleague 2 + Hero",
      "prompt": "subject_definitions:\n<Video 1> is the source 16:9 widescreen corporate office drama clip.\n<Picture 1> is frame 0 of the target video.\n<Subject 1> is the poised 40-year-old East Asian executive woman visible in <Picture 1> (costume_back_right), with shoulder-length dark wavy hair, wearing a deep burgundy-merlot blazer and ivory silk blouse integrated into <Video 1>'s natural office shadows.\n\nsummary:\n[video editing + character replacement] over-shoulder two-shot; young woman colleague in cream knit sweater STANDING CENTER-LEFT holding papers facing right, protagonist foreground RIGHT seen from back-of-head and shoulder only. <Subject 1> maintains an authentic shadow-integrated film look and performs the exact eye gaze, blinks, head turns, and speech articulation from <Video 1> while all colleagues and office background remain untouched.\n\nretention_analysis:\n- <Video 1> (source video editing): fully_preserved - Lock 16:9 horizontal framing, ambient lighting contrast, exact colleague motions, and <Subject 1>'s natural micro-expressions, blinks, and lip movement.\n- <Picture 1> (appears in [Shot 1]): reference - frame 0 of the target video showing <Subject 1> naturally lit within soft bright open-plan office.\n- <Subject 1> (appears across [Shot 1]): fully_preserved - Maintain <Subject 1>'s exact facial structure, wavy black hair, and burgundy blazer throughout.\n\ndetailed_description:\nA realistic 16:9 modern corporate office film shot with soft bright open-plan office.\n[Shot 1] {00:00.000 - 00.458s} Matching <Picture 1> and the exact motion timing of <Video 1>, over-shoulder two-shot; young woman colleague in cream knit sweater STANDING CENTER-LEFT holding papers facing right, protagonist foreground RIGHT seen from back-of-head and shoulder only; <Subject 1> speaks or listens calmly with crisp relaxed jaw/lip motion, never rigid or pasted.\n\noverall_soundscape:\nIndoor office dialogue room tone.\n\nnon_diegetic_music:\nUpbeat rhythmic electronic beat.",
      "seed": 895403,
      "sourceMode": "generated_replacement",
      "video": null,
      "status": "终版成片内的时间段；独立片段未归档",
      "thumb": "media/img-6a4d91c7826ef0111d7e.jpg",
      "refs": [
        {
          "label": "QA01_职场反杀_V2重光换角_全片16帧对比表",
          "src": "media/img-0ba7f2a4334a2ee16136.jpg"
        }
      ]
    },
    {
      "id": "S32",
      "title": "《谢谢夸奖》 title card over S31",
      "start": 79.541667,
      "duration": 1.875,
      "framing": "原片切镜",
      "action": "《谢谢夸奖》 title card over S31",
      "prompt": null,
      "seed": null,
      "sourceMode": "source_passthrough",
      "video": null,
      "status": "原片直通，未单独生成",
      "thumb": "media/img-7b56f07594c00735039f.jpg",
      "refs": [
        {
          "label": "QA01_职场反杀_V2重光换角_全片16帧对比表",
          "src": "media/img-0ba7f2a4334a2ee16136.jpg"
        }
      ]
    },
    {
      "id": "S33",
      "title": "Office Hero + Female3 + Male",
      "start": 81.416667,
      "duration": 2.333333,
      "framing": "生成窗 / 终版时间段",
      "action": "Office Hero + Female3 + Male",
      "prompt": "subject_definitions:\n<Video 1> is the source 16:9 widescreen corporate office drama clip.\n<Picture 1> is frame 0 of the target video.\n<Subject 1> is the poised 40-year-old East Asian executive woman visible in <Picture 1> (left), with shoulder-length dark wavy hair, wearing a deep burgundy-merlot blazer and ivory silk blouse integrated into <Video 1>'s natural office shadows.\n\nsummary:\n[video editing + character replacement] two-woman medium wide shot ONLY (NO third man); protagonist standing LEFT arms crossed holding tablet, female colleague in sage-green blouse and pleated beige skirt standing RIGHT arms crossed. <Subject 1> maintains an authentic shadow-integrated film look and performs the exact eye gaze, blinks, head turns, and speech articulation from <Video 1> while all colleagues and office background remain untouched.\n\nretention_analysis:\n- <Video 1> (source video editing): fully_preserved - Lock 16:9 horizontal framing, ambient lighting contrast, exact colleague motions, and <Subject 1>'s natural micro-expressions, blinks, and lip movement.\n- <Picture 1> (appears in [Shot 1]): reference - frame 0 of the target video showing <Subject 1> naturally lit within bright glass-walled executive office with warm neutral daylight.\n- <Subject 1> (appears across [Shot 1]): fully_preserved - Maintain <Subject 1>'s exact facial structure, wavy black hair, and burgundy blazer throughout.\n\ndetailed_description:\nA realistic 16:9 modern corporate office film shot with bright glass-walled executive office with warm neutral daylight.\n[Shot 1] {00:00.000 - 02.333s} Matching <Picture 1> and the exact motion timing of <Video 1>, two-woman medium wide shot ONLY (NO third man); protagonist standing LEFT arms crossed holding tablet, female colleague in sage-green blouse and pleated beige skirt standing RIGHT arms crossed; <Subject 1> speaks or listens calmly with crisp relaxed jaw/lip motion, never rigid or pasted.\n\noverall_soundscape:\nIndoor office dialogue room tone.\n\nnon_diegetic_music:\nUpbeat rhythmic electronic beat.",
      "seed": 895429,
      "sourceMode": "generated_replacement",
      "video": null,
      "status": "终版成片内的时间段；独立片段未归档",
      "thumb": "media/img-6fc4b1cdac5eeacdf3fd.jpg",
      "refs": [
        {
          "label": "QA01_职场反杀_V2重光换角_全片16帧对比表",
          "src": "media/img-0ba7f2a4334a2ee16136.jpg"
        }
      ]
    },
    {
      "id": "S34",
      "title": "Office Female3 + Hero",
      "start": 83.75,
      "duration": 3.083333,
      "framing": "生成窗 / 终版时间段",
      "action": "Office Female3 + Hero",
      "prompt": "subject_definitions:\n<Video 1> is the source 16:9 widescreen corporate office drama clip.\n<Picture 1> is frame 0 of the target video.\n<Subject 1> is the poised 40-year-old East Asian executive woman visible in <Picture 1> (left_blur), with shoulder-length dark wavy hair, wearing a deep burgundy-merlot blazer and ivory silk blouse integrated into <Video 1>'s natural office shadows.\n\nsummary:\n[video editing + character replacement] over-shoulder two-shot; protagonist foreground LEFT edge facing green-dress woman RIGHT who speaks. <Subject 1> maintains an authentic shadow-integrated film look and performs the exact eye gaze, blinks, head turns, and speech articulation from <Video 1> while all colleagues and office background remain untouched.\n\nretention_analysis:\n- <Video 1> (source video editing): fully_preserved - Lock 16:9 horizontal framing, ambient lighting contrast, exact colleague motions, and <Subject 1>'s natural micro-expressions, blinks, and lip movement.\n- <Picture 1> (appears in [Shot 1]): reference - frame 0 of the target video showing <Subject 1> naturally lit within bright glass-walled executive office interior.\n- <Subject 1> (appears across [Shot 1]): fully_preserved - Maintain <Subject 1>'s exact facial structure, wavy black hair, and burgundy blazer throughout.\n\ndetailed_description:\nA realistic 16:9 modern corporate office film shot with bright glass-walled executive office interior.\n[Shot 1] {00:00.000 - 03.083s} Matching <Picture 1> and the exact motion timing of <Video 1>, over-shoulder two-shot; protagonist foreground LEFT edge facing green-dress woman RIGHT who speaks; <Subject 1> speaks or listens calmly with crisp relaxed jaw/lip motion, never rigid or pasted.\n\noverall_soundscape:\nIndoor office dialogue room tone.\n\nnon_diegetic_music:\nUpbeat rhythmic electronic beat.",
      "seed": 895442,
      "sourceMode": "generated_replacement",
      "video": null,
      "status": "终版成片内的时间段；独立片段未归档",
      "thumb": "media/img-626ed92549960f6fc342.jpg",
      "refs": [
        {
          "label": "QA01_职场反杀_V2重光换角_全片16帧对比表",
          "src": "media/img-0ba7f2a4334a2ee16136.jpg"
        }
      ]
    },
    {
      "id": "S35",
      "title": "Hero closeup + 《降维打击》 tail",
      "start": 86.833333,
      "duration": 8.541667,
      "framing": "生成窗 / 终版时间段",
      "action": "Hero closeup + 《降维打击》 tail",
      "prompt": "subject_definitions:\n<Video 1> is the source 16:9 widescreen corporate office drama clip.\n<Picture 1> is frame 0 of the target video.\n<Subject 1> is the poised 40-year-old East Asian executive woman visible in <Picture 1> (center-left), with shoulder-length dark wavy hair, wearing a deep burgundy-merlot blazer and ivory silk blouse integrated into <Video 1>'s natural office shadows.\n\nsummary:\n[video editing + character replacement] medium close-up of woman standing slightly left of center facing RIGHT speaking calmly toward blurred foreground colleague on right. <Subject 1> maintains an authentic shadow-integrated film look and performs the exact eye gaze, blinks, head turns, and speech articulation from <Video 1> while all colleagues and office background remain untouched.\n\nretention_analysis:\n- <Video 1> (source video editing): fully_preserved - Lock 16:9 horizontal framing, ambient lighting contrast, exact colleague motions, and <Subject 1>'s natural micro-expressions, blinks, and lip movement.\n- <Picture 1> (appears in [Shot 1]): reference - frame 0 of the target video showing <Subject 1> naturally lit within bright cool frosted city window bokeh on left and blurred dark female foreground shoulder/hair edge on RIGHT, NO seated coworkers behind.\n- <Subject 1> (appears across [Shot 1]): fully_preserved - Maintain <Subject 1>'s exact facial structure, wavy black hair, and burgundy blazer throughout.\n\ndetailed_description:\nA realistic 16:9 modern corporate office film shot with bright cool frosted city window bokeh on left and blurred dark female foreground shoulder/hair edge on RIGHT, NO seated coworkers behind.\n[Shot 1] {00:00.000 - 05.500s} Matching <Picture 1> and the exact motion timing of <Video 1>, medium close-up of woman standing slightly left of center facing RIGHT speaking calmly toward blurred foreground colleague on right; <Subject 1> speaks or listens calmly with crisp relaxed jaw/lip motion, never rigid or pasted.\n\noverall_soundscape:\nIndoor office dialogue room tone.\n\nnon_diegetic_music:\nUpbeat rhythmic electronic beat.",
      "seed": 895455,
      "sourceMode": "generated_replacement",
      "video": null,
      "status": "终版成片内的时间段；独立片段未归档",
      "thumb": "media/img-18a27bd56f693a69b751.jpg",
      "refs": [
        {
          "label": "QA01_职场反杀_V2重光换角_全片16帧对比表",
          "src": "media/img-0ba7f2a4334a2ee16136.jpg"
        }
      ]
    },
    {
      "id": "S36",
      "title": "Closing Male1 + Hero",
      "start": 95.375,
      "duration": 1.708333,
      "framing": "生成窗 / 终版时间段",
      "action": "Closing Male1 + Hero",
      "prompt": "subject_definitions:\n<Video 1> is the source 16:9 widescreen corporate office drama clip.\n<Picture 1> is frame 0 of the target video.\n<Subject 1> is the poised 40-year-old East Asian executive woman visible in <Picture 1> (left), with shoulder-length dark wavy hair, wearing a deep burgundy-merlot blazer and ivory silk blouse integrated into <Video 1>'s natural office shadows.\n\nsummary:\n[video editing + character replacement] closing two-shot inside metal elevator; woman standing LEFT glancing coolly right, gray-suit male colleague standing RIGHT glancing sideways (NO rainy glass, NO extra people behind). <Subject 1> maintains an authentic shadow-integrated film look and performs the exact eye gaze, blinks, head turns, and speech articulation from <Video 1> while all colleagues and office background remain untouched.\n\nretention_analysis:\n- <Video 1> (source video editing): fully_preserved - Lock 16:9 horizontal framing, ambient lighting contrast, exact colleague motions, and <Subject 1>'s natural micro-expressions, blinks, and lip movement.\n- <Picture 1> (appears in [Shot 1]): reference - frame 0 of the target video showing <Subject 1> naturally lit within brushed metal elevator cabin interior with overhead cool light, ONLY two people inside.\n- <Subject 1> (appears across [Shot 1]): fully_preserved - Maintain <Subject 1>'s exact facial structure, wavy black hair, and burgundy blazer throughout.\n\ndetailed_description:\nA realistic 16:9 modern corporate office film shot with brushed metal elevator cabin interior with overhead cool light, ONLY two people inside.\n[Shot 1] {00:00.000 - 01.708s} Matching <Picture 1> and the exact motion timing of <Video 1>, closing two-shot inside metal elevator; woman standing LEFT glancing coolly right, gray-suit male colleague standing RIGHT glancing sideways (NO rainy glass, NO extra people behind); <Subject 1> speaks or listens calmly with crisp relaxed jaw/lip motion, never rigid or pasted.\n\noverall_soundscape:\nIndoor office dialogue room tone.\n\nnon_diegetic_music:\nUpbeat rhythmic electronic beat.",
      "seed": 895468,
      "sourceMode": "generated_replacement",
      "video": null,
      "status": "终版成片内的时间段；独立片段未归档",
      "thumb": "media/img-16fd585fa38b6f81d8c0.jpg",
      "refs": [
        {
          "label": "QA01_职场反杀_V2重光换角_全片16帧对比表",
          "src": "media/img-0ba7f2a4334a2ee16136.jpg"
        }
      ]
    }
  ],
  "generation": {
    "model": "MiniMax H3 Viggle Remake + VoxCPM",
    "params": [
      {
        "k": "终版规格",
        "v": "1280×720 · 24/1 · 97.083s"
      },
      {
        "k": "版本",
        "v": "V2"
      }
    ],
    "notes": [
      "meta.generated 统计生产计划明确的生成窗/替换镜段；只在拥有独立成片文件时才给逐镜 video。",
      "逐镜 prompt 为源脚本函数和源计划重建的文本，不等同于平台提交日志逐字存证。",
      "36 个原片切镜；28 个换角/换装，8 个片头花字镜段保留。V2 重光融影并重配真武丹丹音色。"
    ]
  },
  "deliverables": [
    {
      "name": "武丹丹_现代职场反杀爽剧_新造型换角配音成品.mp4",
      "src": "https://github.com/aikingtai-ctrl/jintai-film-showcase/releases/download/media-v1/wdd-office-revenge-v2-97s--a57c3a3b2fb255b5c43b.mp4",
      "note": "V2 终版 · 97.083s"
    }
  ]
});
