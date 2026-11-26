window.registerProject({
  "id": "wdd-heroic-stage-44s",
  "title": "武丹丹｜豪情舞台演唱｜新造型与歌声替换",
  "subtitle": "2026-11-25 · 终版 · 已验收本地终版",
  "logline": "A/B 双链生成 12 窗；保留原生黑场与歌词字幕，歌声音色替换。",
  "date": "2026-11-25",
  "tags": [
    "终版",
    "已生成",
    "终版归档",
    "9:16",
    "MiniMax H3 Viggle Remake"
  ],
  "model": "MiniMax H3 Viggle Remake + Seed-VC",
  "modelShort": "MiniMax H3 Viggle Remake",
  "poster": "media/img-be5fb8af2199af86ea3a.jpg",
  "film": {
    "src": "https://github.com/aikingtai-ctrl/jintai-film-showcase/releases/download/media-v1/wdd-heroic-stage-44s--af1d8adc7f93c636f0b5.mp4",
    "duration": 43.875,
    "width": 1080,
    "height": 1920,
    "fps": "24/1"
  },
  "meta": {
    "shots": 12,
    "generated": 12,
    "durationSec": 43.875,
    "resolution": "1080×1920",
    "fps": "24/1",
    "aspect": "9:16",
    "style": "A/B 双链生成 12 窗；保留原生黑场与歌词字幕，歌声音色替换。"
  },
  "synopsis": [
    "A/B 双链生成 12 窗；保留原生黑场与歌词字幕，歌声音色替换。",
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
      "tool": "MiniMax H3 Viggle Remake + Seed-VC",
      "note": "终版 终版；QA 图卡和本地来源账本已归档。"
    }
  ],
  "props": [
    {
      "id": "QA01",
      "name": "QA01_全片20拍_原片vs成片_1比1对比总表",
      "image": "media/img-a2f9033bac15280a8d69.jpg",
      "desc": "终版 终版验收图卡；来源与哈希见本地账本。"
    },
    {
      "id": "QA02",
      "name": "QA02_话筒遮挡_特写五官_转身背影与黑场过渡专项核验板",
      "image": "media/img-9ab82b414cd130e0bff8.jpg",
      "desc": "终版 终版验收图卡；来源与哈希见本地账本。"
    },
    {
      "id": "QA03",
      "name": "00_武丹丹_舞台新造型定妆总卡",
      "image": "media/img-db23b3c8128cfb56d255.jpg",
      "desc": "终版 终版验收图卡；来源与哈希见本地账本。"
    }
  ],
  "shots": [
    {
      "id": "A0",
      "title": "A0 · 生成接力窗",
      "start": 0,
      "duration": 3.75,
      "framing": "生成窗 / 终版时间段",
      "action": "A0 · 生成接力窗",
      "prompt": "subject_definitions:\n<Video 1> is the source vertical concert singing stage video for the editing task.\n<Picture 1>, <Picture 2>, <Picture 3>, <Picture 4> are key frames of the target video.\n<Subject 1> is an East Asian adult female singer <Subject 1> with identical facial bone structure, expressive dark brown eyes, natural arched brows, rose-bean-paste lips, dainty matte champagne-gold teardrop earrings, and natural shoulder-length soft wavy jet-black hair with side-swept volume (NEVER straight flat hair), wearing a tailored knee-length deep imperial burgundy wine-red matte velvet Neo-Chinese Mandarin-collar stage coat with subtle matte champagne-gold geometric cloud-fret lapel trim, antique-gold metal D-ring waist belt, gold cuff piping, matte charcoal-black mock-turtleneck knit inner top, jet-black tailored straight trousers, and matte black low-block-heel ankle boots. Seen from behind, <Subject 1> displays her natural shoulder-length soft wavy jet-black hair covering her nape and upper shoulders and her tailored deep imperial burgundy wine-red matte velvet coat back with clean princess seams, matching burgundy velvet waist belt, and jet-black trousers (zero orange-red coat, zero straight hair). She replaces ONLY the original woman in the bright orange-red coat and straight hair in <Video 1>.\n\nsummary:\nAt stage left-center under deep indigo-blue concert spotlight and cyan LED bars, <Subject 1> starts turned three-quarter right holding a silver-head black-handle handheld microphone near her mouth (<Picture 1>), turns smoothly through rear-right profile (<Picture 2>) back toward front-left singing passionately (<Picture 3>, <Picture 4>), keeping the white subtitle \"思绪飘飞带着梦想去追\" crisp at lower-center. All original camera motion, stage lighting transitions, LED light bars, forest backdrop visuals, handheld silver-head microphone motion, and white Chinese lyric subtitles from <Video 1> are strictly preserved.\n\nretention_analysis:\n- <Video 1> (source video editing): fully_preserved - Strictly lock vertical framing, exact stage camera movement, exact singing body motion and microphone hand trajectory, stage LED backdrops, spotlight color shifts, and white lyric subtitles.\n- <Picture 1> (appears in [Shot 1]): reference - a target frame at 00.000s showing <Subject 1> in her exact deep burgundy velvet Neo-Chinese stage coat, soft wavy jet-black hair, microphone grip, stage lighting, and white lyric subtitle.\n- <Picture 2> (appears in [Shot 1]): reference - a target frame at 01.250s showing <Subject 1> in her exact deep burgundy velvet Neo-Chinese stage coat, soft wavy jet-black hair, microphone grip, stage lighting, and white lyric subtitle.\n- <Picture 3> (appears in [Shot 1]): reference - a target frame at 02.583s showing <Subject 1> in her exact deep burgundy velvet Neo-Chinese stage coat, soft wavy jet-black hair, microphone grip, stage lighting, and white lyric subtitle.\n- <Picture 4> (appears in [Shot 1]): reference - a target frame at 03.833s showing <Subject 1> in her exact deep burgundy velvet Neo-Chinese stage coat, soft wavy jet-black hair, microphone grip, stage lighting, and white lyric subtitle.\n- <Subject 1> (appears across all shots): fully_preserved - Maintain natural shoulder-length soft wavy jet-black hair (zero straight hair), exact WuDandan facial features, deep imperial burgundy velvet Neo-Chinese coat with subtle champagne-gold lapel trim and antique-gold waist belt, charcoal turtleneck, and black trousers consistently across every frame.\n\ndetailed_description:\nA realistic vertical concert stage live performance video with crisp vocal expression fidelity and authentic stage spotlight integration.\n[Shot 1] {00:00.000 - 04.458s} Matching <Picture 1>, <Picture 2>, <Picture 3>, <Picture 4> and the exact motion trajectory, microphone position, and framing of <Video 1>: At stage left-center under deep indigo-blue concert spotlight and cyan LED bars, <Subject 1> starts turned three-quarter right holding a silver-head black-handle handheld microphone near her mouth (<Picture 1>), turns smoothly through rear-right profile (<Picture 2>) back toward front-left singing passionately (<Picture 3>, <Picture 4>), keeping the white subtitle \"思绪飘飞带着梦想去追\" crisp at lower-center. Zero bright orange-red coat, zero straight flat hair, zero studio backdrop.\n\noverall_soundscape:\nLive stage rock-ballad vocal performance with electric guitar, drums, and expressive female singing.\n\nnon_diegetic_music:\nNone.",
      "seed": 25000,
      "sourceMode": "generated_window",
      "video": null,
      "status": "终版成片内的时间段；独立片段未归档",
      "thumb": "media/img-3339c172896f41e442ff.jpg",
      "refs": [
        {
          "label": "QA01_全片20拍_原片vs成片_1比1对比总表",
          "src": "media/img-a2f9033bac15280a8d69.jpg"
        }
      ]
    },
    {
      "id": "A1",
      "title": "A1 · 生成接力窗",
      "start": 3.75,
      "duration": 3.75,
      "framing": "生成窗 / 终版时间段",
      "action": "A1 · 生成接力窗",
      "prompt": "subject_definitions:\n<Video 1> is the source vertical concert singing stage video for the editing task.\n<Picture 1>, <Picture 2>, <Picture 3>, <Picture 4> are key frames of the target video.\n<Subject 1> is an East Asian adult female singer <Subject 1> with identical facial bone structure, expressive dark brown eyes, natural arched brows, rose-bean-paste lips, dainty matte champagne-gold teardrop earrings, and natural shoulder-length soft wavy jet-black hair with side-swept volume (NEVER straight flat hair), wearing a tailored knee-length deep imperial burgundy wine-red matte velvet Neo-Chinese Mandarin-collar stage coat with subtle matte champagne-gold geometric cloud-fret lapel trim, antique-gold metal D-ring waist belt, gold cuff piping, matte charcoal-black mock-turtleneck knit inner top, jet-black tailored straight trousers, and matte black low-block-heel ankle boots. Seen from behind, <Subject 1> displays her natural shoulder-length soft wavy jet-black hair covering her nape and upper shoulders and her tailored deep imperial burgundy wine-red matte velvet coat back with clean princess seams, matching burgundy velvet waist belt, and jet-black trousers (zero orange-red coat, zero straight hair). She replaces ONLY the original woman in the bright orange-red coat and straight hair in <Video 1>.\n\nsummary:\nContinuing seamlessly across the first 17 frames, <Subject 1> faces front singing expressively into her silver-head black-handle microphone held in her right hand with left hand gesturing calmly near her waist (<Picture 1> to <Picture 4>), keeping the deep burgundy velvet coat and wavy hair consistent and white subtitle \"我行我素做人要敢做敢为\" crisp. All original camera motion, stage lighting transitions, LED light bars, forest backdrop visuals, handheld silver-head microphone motion, and white Chinese lyric subtitles from <Video 1> are strictly preserved.\n\nretention_analysis:\n- <Video 1> (source video editing): fully_preserved - Strictly lock vertical framing, exact stage camera movement, exact singing body motion and microphone hand trajectory, stage LED backdrops, spotlight color shifts, and white lyric subtitles.\n- <Picture 1> (appears in [Shot 1]): reference - a target frame at 01.083s showing <Subject 1> in her exact deep burgundy velvet Neo-Chinese stage coat, soft wavy jet-black hair, microphone grip, stage lighting, and white lyric subtitle.\n- <Picture 2> (appears in [Shot 1]): reference - a target frame at 02.083s showing <Subject 1> in her exact deep burgundy velvet Neo-Chinese stage coat, soft wavy jet-black hair, microphone grip, stage lighting, and white lyric subtitle.\n- <Picture 3> (appears in [Shot 1]): reference - a target frame at 03.125s showing <Subject 1> in her exact deep burgundy velvet Neo-Chinese stage coat, soft wavy jet-black hair, microphone grip, stage lighting, and white lyric subtitle.\n- <Picture 4> (appears in [Shot 1]): reference - a target frame at 04.083s showing <Subject 1> in her exact deep burgundy velvet Neo-Chinese stage coat, soft wavy jet-black hair, microphone grip, stage lighting, and white lyric subtitle.\n- <Subject 1> (appears across all shots): fully_preserved - Maintain natural shoulder-length soft wavy jet-black hair (zero straight hair), exact WuDandan facial features, deep imperial burgundy velvet Neo-Chinese coat with subtle champagne-gold lapel trim and antique-gold waist belt, charcoal turtleneck, and black trousers consistently across every frame.\n\ndetailed_description:\nA realistic vertical concert stage live performance video with crisp vocal expression fidelity and authentic stage spotlight integration.\n[Shot 1] {00:00.000 - 04.458s} Matching <Picture 1>, <Picture 2>, <Picture 3>, <Picture 4> and the exact motion trajectory, microphone position, and framing of <Video 1>: Continuing seamlessly across the first 17 frames, <Subject 1> faces front singing expressively into her silver-head black-handle microphone held in her right hand with left hand gesturing calmly near her waist (<Picture 1> to <Picture 4>), keeping the deep burgundy velvet coat and wavy hair consistent and white subtitle \"我行我素做人要敢做敢为\" crisp. Zero bright orange-red coat, zero straight flat hair, zero studio backdrop.\n\noverall_soundscape:\nLive stage rock-ballad vocal performance with electric guitar, drums, and expressive female singing.\n\nnon_diegetic_music:\nNone.",
      "seed": 25001,
      "sourceMode": "generated_window",
      "video": null,
      "status": "终版成片内的时间段；独立片段未归档",
      "thumb": "media/img-f4389926f85f1675fedd.jpg",
      "refs": [
        {
          "label": "QA01_全片20拍_原片vs成片_1比1对比总表",
          "src": "media/img-a2f9033bac15280a8d69.jpg"
        }
      ]
    },
    {
      "id": "A2",
      "title": "A2 · 生成接力窗",
      "start": 7.5,
      "duration": 3.75,
      "framing": "生成窗 / 终版时间段",
      "action": "A2 · 生成接力窗",
      "prompt": "subject_definitions:\n<Video 1> is the source vertical concert singing stage video for the editing task.\n<Picture 1>, <Picture 2>, <Picture 3>, <Picture 4> are key frames of the target video.\n<Subject 1> is an East Asian adult female singer <Subject 1> with identical facial bone structure, expressive dark brown eyes, natural arched brows, rose-bean-paste lips, dainty matte champagne-gold teardrop earrings, and natural shoulder-length soft wavy jet-black hair with side-swept volume (NEVER straight flat hair), wearing a tailored knee-length deep imperial burgundy wine-red matte velvet Neo-Chinese Mandarin-collar stage coat with subtle matte champagne-gold geometric cloud-fret lapel trim, antique-gold metal D-ring waist belt, gold cuff piping, matte charcoal-black mock-turtleneck knit inner top, jet-black tailored straight trousers, and matte black low-block-heel ankle boots. Seen from behind, <Subject 1> displays her natural shoulder-length soft wavy jet-black hair covering her nape and upper shoulders and her tailored deep imperial burgundy wine-red matte velvet coat back with clean princess seams, matching burgundy velvet waist belt, and jet-black trousers (zero orange-red coat, zero straight hair). She replaces ONLY the original woman in the bright orange-red coat and straight hair in <Video 1>.\n\nsummary:\nContinuing seamlessly across the first 17 frames, <Subject 1> sings front-facing (<Picture 1>, <Picture 2>) then turns into three-quarter left-facing expressive vocal delivery (<Picture 3>, <Picture 4>) holding her stage microphone near her lips under cool indigo stage spotlights, with white subtitle transitioning cleanly to \"人生苦短哪能半途而废\". All original camera motion, stage lighting transitions, LED light bars, forest backdrop visuals, handheld silver-head microphone motion, and white Chinese lyric subtitles from <Video 1> are strictly preserved.\n\nretention_analysis:\n- <Video 1> (source video editing): fully_preserved - Strictly lock vertical framing, exact stage camera movement, exact singing body motion and microphone hand trajectory, stage LED backdrops, spotlight color shifts, and white lyric subtitles.\n- <Picture 1> (appears in [Shot 1]): reference - a target frame at 01.083s showing <Subject 1> in her exact deep burgundy velvet Neo-Chinese stage coat, soft wavy jet-black hair, microphone grip, stage lighting, and white lyric subtitle.\n- <Picture 2> (appears in [Shot 1]): reference - a target frame at 02.167s showing <Subject 1> in her exact deep burgundy velvet Neo-Chinese stage coat, soft wavy jet-black hair, microphone grip, stage lighting, and white lyric subtitle.\n- <Picture 3> (appears in [Shot 1]): reference - a target frame at 03.250s showing <Subject 1> in her exact deep burgundy velvet Neo-Chinese stage coat, soft wavy jet-black hair, microphone grip, stage lighting, and white lyric subtitle.\n- <Picture 4> (appears in [Shot 1]): reference - a target frame at 04.083s showing <Subject 1> in her exact deep burgundy velvet Neo-Chinese stage coat, soft wavy jet-black hair, microphone grip, stage lighting, and white lyric subtitle.\n- <Subject 1> (appears across all shots): fully_preserved - Maintain natural shoulder-length soft wavy jet-black hair (zero straight hair), exact WuDandan facial features, deep imperial burgundy velvet Neo-Chinese coat with subtle champagne-gold lapel trim and antique-gold waist belt, charcoal turtleneck, and black trousers consistently across every frame.\n\ndetailed_description:\nA realistic vertical concert stage live performance video with crisp vocal expression fidelity and authentic stage spotlight integration.\n[Shot 1] {00:00.000 - 04.458s} Matching <Picture 1>, <Picture 2>, <Picture 3>, <Picture 4> and the exact motion trajectory, microphone position, and framing of <Video 1>: Continuing seamlessly across the first 17 frames, <Subject 1> sings front-facing (<Picture 1>, <Picture 2>) then turns into three-quarter left-facing expressive vocal delivery (<Picture 3>, <Picture 4>) holding her stage microphone near her lips under cool indigo stage spotlights, with white subtitle transitioning cleanly to \"人生苦短哪能半途而废\". Zero bright orange-red coat, zero straight flat hair, zero studio backdrop.\n\noverall_soundscape:\nLive stage rock-ballad vocal performance with electric guitar, drums, and expressive female singing.\n\nnon_diegetic_music:\nNone.",
      "seed": 25002,
      "sourceMode": "generated_window",
      "video": null,
      "status": "终版成片内的时间段；独立片段未归档",
      "thumb": "media/img-6f185f33a37761e1f827.jpg",
      "refs": [
        {
          "label": "QA01_全片20拍_原片vs成片_1比1对比总表",
          "src": "media/img-a2f9033bac15280a8d69.jpg"
        }
      ]
    },
    {
      "id": "A3",
      "title": "A3 · 生成接力窗",
      "start": 11.25,
      "duration": 3.75,
      "framing": "生成窗 / 终版时间段",
      "action": "A3 · 生成接力窗",
      "prompt": "subject_definitions:\n<Video 1> is the source vertical concert singing stage video for the editing task.\n<Picture 1>, <Picture 2>, <Picture 3>, <Picture 4> are key frames of the target video.\n<Subject 1> is an East Asian adult female singer <Subject 1> with identical facial bone structure, expressive dark brown eyes, natural arched brows, rose-bean-paste lips, dainty matte champagne-gold teardrop earrings, and natural shoulder-length soft wavy jet-black hair with side-swept volume (NEVER straight flat hair), wearing a tailored knee-length deep imperial burgundy wine-red matte velvet Neo-Chinese Mandarin-collar stage coat with subtle matte champagne-gold geometric cloud-fret lapel trim, antique-gold metal D-ring waist belt, gold cuff piping, matte charcoal-black mock-turtleneck knit inner top, jet-black tailored straight trousers, and matte black low-block-heel ankle boots. Seen from behind, <Subject 1> displays her natural shoulder-length soft wavy jet-black hair covering her nape and upper shoulders and her tailored deep imperial burgundy wine-red matte velvet coat back with clean princess seams, matching burgundy velvet waist belt, and jet-black trousers (zero orange-red coat, zero straight hair). She replaces ONLY the original woman in the bright orange-red coat and straight hair in <Video 1>.\n\nsummary:\nContinuing seamlessly across the first 17 frames, <Subject 1> sings in three-quarter left stance (<Picture 1>), swings into right-facing profile (<Picture 2>), pivots back toward front singing (<Picture 3>, <Picture 4>) holding her microphone with her right hand, keeping \"人生苦短哪能半途而废\" crisp while visible and clean lower coat when subtitle fades. All original camera motion, stage lighting transitions, LED light bars, forest backdrop visuals, handheld silver-head microphone motion, and white Chinese lyric subtitles from <Video 1> are strictly preserved.\n\nretention_analysis:\n- <Video 1> (source video editing): fully_preserved - Strictly lock vertical framing, exact stage camera movement, exact singing body motion and microphone hand trajectory, stage LED backdrops, spotlight color shifts, and white lyric subtitles.\n- <Picture 1> (appears in [Shot 1]): reference - a target frame at 01.083s showing <Subject 1> in her exact deep burgundy velvet Neo-Chinese stage coat, soft wavy jet-black hair, microphone grip, stage lighting, and white lyric subtitle.\n- <Picture 2> (appears in [Shot 1]): reference - a target frame at 02.167s showing <Subject 1> in her exact deep burgundy velvet Neo-Chinese stage coat, soft wavy jet-black hair, microphone grip, stage lighting, and white lyric subtitle.\n- <Picture 3> (appears in [Shot 1]): reference - a target frame at 03.167s showing <Subject 1> in her exact deep burgundy velvet Neo-Chinese stage coat, soft wavy jet-black hair, microphone grip, stage lighting, and white lyric subtitle.\n- <Picture 4> (appears in [Shot 1]): reference - a target frame at 04.083s showing <Subject 1> in her exact deep burgundy velvet Neo-Chinese stage coat, soft wavy jet-black hair, microphone grip, stage lighting, and white lyric subtitle.\n- <Subject 1> (appears across all shots): fully_preserved - Maintain natural shoulder-length soft wavy jet-black hair (zero straight hair), exact WuDandan facial features, deep imperial burgundy velvet Neo-Chinese coat with subtle champagne-gold lapel trim and antique-gold waist belt, charcoal turtleneck, and black trousers consistently across every frame.\n\ndetailed_description:\nA realistic vertical concert stage live performance video with crisp vocal expression fidelity and authentic stage spotlight integration.\n[Shot 1] {00:00.000 - 04.458s} Matching <Picture 1>, <Picture 2>, <Picture 3>, <Picture 4> and the exact motion trajectory, microphone position, and framing of <Video 1>: Continuing seamlessly across the first 17 frames, <Subject 1> sings in three-quarter left stance (<Picture 1>), swings into right-facing profile (<Picture 2>), pivots back toward front singing (<Picture 3>, <Picture 4>) holding her microphone with her right hand, keeping \"人生苦短哪能半途而废\" crisp while visible and clean lower coat when subtitle fades. Zero bright orange-red coat, zero straight flat hair, zero studio backdrop.\n\noverall_soundscape:\nLive stage rock-ballad vocal performance with electric guitar, drums, and expressive female singing.\n\nnon_diegetic_music:\nNone.",
      "seed": 25003,
      "sourceMode": "generated_window",
      "video": null,
      "status": "终版成片内的时间段；独立片段未归档",
      "thumb": "media/img-b8fff06434d65c0229d0.jpg",
      "refs": [
        {
          "label": "QA01_全片20拍_原片vs成片_1比1对比总表",
          "src": "media/img-a2f9033bac15280a8d69.jpg"
        }
      ]
    },
    {
      "id": "A4",
      "title": "A4 · 生成接力窗",
      "start": 15,
      "duration": 3.75,
      "framing": "生成窗 / 终版时间段",
      "action": "A4 · 生成接力窗",
      "prompt": "subject_definitions:\n<Video 1> is the source vertical concert singing stage video for the editing task.\n<Picture 1>, <Picture 2>, <Picture 3>, <Picture 4> are key frames of the target video.\n<Subject 1> is an East Asian adult female singer <Subject 1> with identical facial bone structure, expressive dark brown eyes, natural arched brows, rose-bean-paste lips, dainty matte champagne-gold teardrop earrings, and natural shoulder-length soft wavy jet-black hair with side-swept volume (NEVER straight flat hair), wearing a tailored knee-length deep imperial burgundy wine-red matte velvet Neo-Chinese Mandarin-collar stage coat with subtle matte champagne-gold geometric cloud-fret lapel trim, antique-gold metal D-ring waist belt, gold cuff piping, matte charcoal-black mock-turtleneck knit inner top, jet-black tailored straight trousers, and matte black low-block-heel ankle boots. Seen from behind, <Subject 1> displays her natural shoulder-length soft wavy jet-black hair covering her nape and upper shoulders and her tailored deep imperial burgundy wine-red matte velvet coat back with clean princess seams, matching burgundy velvet waist belt, and jet-black trousers (zero orange-red coat, zero straight hair). She replaces ONLY the original woman in the bright orange-red coat and straight hair in <Video 1>.\n\nsummary:\nContinuing seamlessly across the first 17 frames, <Subject 1> sings in crisp right-facing profile (<Picture 1>), swings left (<Picture 2>), and settles into passionate front-facing vocal phrasing (<Picture 3>, <Picture 4>) with microphone held at chest/chin level and crisp white subtitle \"不气不馁无惧无畏\". All original camera motion, stage lighting transitions, LED light bars, forest backdrop visuals, handheld silver-head microphone motion, and white Chinese lyric subtitles from <Video 1> are strictly preserved.\n\nretention_analysis:\n- <Video 1> (source video editing): fully_preserved - Strictly lock vertical framing, exact stage camera movement, exact singing body motion and microphone hand trajectory, stage LED backdrops, spotlight color shifts, and white lyric subtitles.\n- <Picture 1> (appears in [Shot 1]): reference - a target frame at 01.083s showing <Subject 1> in her exact deep burgundy velvet Neo-Chinese stage coat, soft wavy jet-black hair, microphone grip, stage lighting, and white lyric subtitle.\n- <Picture 2> (appears in [Shot 1]): reference - a target frame at 02.167s showing <Subject 1> in her exact deep burgundy velvet Neo-Chinese stage coat, soft wavy jet-black hair, microphone grip, stage lighting, and white lyric subtitle.\n- <Picture 3> (appears in [Shot 1]): reference - a target frame at 03.250s showing <Subject 1> in her exact deep burgundy velvet Neo-Chinese stage coat, soft wavy jet-black hair, microphone grip, stage lighting, and white lyric subtitle.\n- <Picture 4> (appears in [Shot 1]): reference - a target frame at 04.167s showing <Subject 1> in her exact deep burgundy velvet Neo-Chinese stage coat, soft wavy jet-black hair, microphone grip, stage lighting, and white lyric subtitle.\n- <Subject 1> (appears across all shots): fully_preserved - Maintain natural shoulder-length soft wavy jet-black hair (zero straight hair), exact WuDandan facial features, deep imperial burgundy velvet Neo-Chinese coat with subtle champagne-gold lapel trim and antique-gold waist belt, charcoal turtleneck, and black trousers consistently across every frame.\n\ndetailed_description:\nA realistic vertical concert stage live performance video with crisp vocal expression fidelity and authentic stage spotlight integration.\n[Shot 1] {00:00.000 - 04.458s} Matching <Picture 1>, <Picture 2>, <Picture 3>, <Picture 4> and the exact motion trajectory, microphone position, and framing of <Video 1>: Continuing seamlessly across the first 17 frames, <Subject 1> sings in crisp right-facing profile (<Picture 1>), swings left (<Picture 2>), and settles into passionate front-facing vocal phrasing (<Picture 3>, <Picture 4>) with microphone held at chest/chin level and crisp white subtitle \"不气不馁无惧无畏\". Zero bright orange-red coat, zero straight flat hair, zero studio backdrop.\n\noverall_soundscape:\nLive stage rock-ballad vocal performance with electric guitar, drums, and expressive female singing.\n\nnon_diegetic_music:\nNone.",
      "seed": 25004,
      "sourceMode": "generated_window",
      "video": null,
      "status": "终版成片内的时间段；独立片段未归档",
      "thumb": "media/img-71d846e9b3e3c50513cd.jpg",
      "refs": [
        {
          "label": "QA01_全片20拍_原片vs成片_1比1对比总表",
          "src": "media/img-a2f9033bac15280a8d69.jpg"
        }
      ]
    },
    {
      "id": "A5",
      "title": "A5 · 生成接力窗",
      "start": 18.75,
      "duration": 3.75,
      "framing": "生成窗 / 终版时间段",
      "action": "A5 · 生成接力窗",
      "prompt": "subject_definitions:\n<Video 1> is the source vertical concert singing stage video for the editing task.\n<Picture 1>, <Picture 2>, <Picture 3>, <Picture 4> are key frames of the target video.\n<Subject 1> is an East Asian adult female singer <Subject 1> with identical facial bone structure, expressive dark brown eyes, natural arched brows, rose-bean-paste lips, dainty matte champagne-gold teardrop earrings, and natural shoulder-length soft wavy jet-black hair with side-swept volume (NEVER straight flat hair), wearing a tailored knee-length deep imperial burgundy wine-red matte velvet Neo-Chinese Mandarin-collar stage coat with subtle matte champagne-gold geometric cloud-fret lapel trim, antique-gold metal D-ring waist belt, gold cuff piping, matte charcoal-black mock-turtleneck knit inner top, jet-black tailored straight trousers, and matte black low-block-heel ankle boots. Seen from behind, <Subject 1> displays her natural shoulder-length soft wavy jet-black hair covering her nape and upper shoulders and her tailored deep imperial burgundy wine-red matte velvet coat back with clean princess seams, matching burgundy velvet waist belt, and jet-black trousers (zero orange-red coat, zero straight hair). She replaces ONLY the original woman in the bright orange-red coat and straight hair in <Video 1>.\n\nsummary:\nContinuing seamlessly across the first 17 frames, <Subject 1> steps toward stage right turning three-quarter away (<Picture 1>), looks back toward camera (<Picture 2>), and continues singing in warm amber-purple stage bokeh (<Picture 3>, <Picture 4>) holding her microphone naturally with white subtitle \"桃李争辉 飒爽英姿斗艳\" appearing at lower-center. All original camera motion, stage lighting transitions, LED light bars, forest backdrop visuals, handheld silver-head microphone motion, and white Chinese lyric subtitles from <Video 1> are strictly preserved.\n\nretention_analysis:\n- <Video 1> (source video editing): fully_preserved - Strictly lock vertical framing, exact stage camera movement, exact singing body motion and microphone hand trajectory, stage LED backdrops, spotlight color shifts, and white lyric subtitles.\n- <Picture 1> (appears in [Shot 1]): reference - a target frame at 01.083s showing <Subject 1> in her exact deep burgundy velvet Neo-Chinese stage coat, soft wavy jet-black hair, microphone grip, stage lighting, and white lyric subtitle.\n- <Picture 2> (appears in [Shot 1]): reference - a target frame at 02.083s showing <Subject 1> in her exact deep burgundy velvet Neo-Chinese stage coat, soft wavy jet-black hair, microphone grip, stage lighting, and white lyric subtitle.\n- <Picture 3> (appears in [Shot 1]): reference - a target frame at 03.167s showing <Subject 1> in her exact deep burgundy velvet Neo-Chinese stage coat, soft wavy jet-black hair, microphone grip, stage lighting, and white lyric subtitle.\n- <Picture 4> (appears in [Shot 1]): reference - a target frame at 04.083s showing <Subject 1> in her exact deep burgundy velvet Neo-Chinese stage coat, soft wavy jet-black hair, microphone grip, stage lighting, and white lyric subtitle.\n- <Subject 1> (appears across all shots): fully_preserved - Maintain natural shoulder-length soft wavy jet-black hair (zero straight hair), exact WuDandan facial features, deep imperial burgundy velvet Neo-Chinese coat with subtle champagne-gold lapel trim and antique-gold waist belt, charcoal turtleneck, and black trousers consistently across every frame.\n\ndetailed_description:\nA realistic vertical concert stage live performance video with crisp vocal expression fidelity and authentic stage spotlight integration.\n[Shot 1] {00:00.000 - 04.458s} Matching <Picture 1>, <Picture 2>, <Picture 3>, <Picture 4> and the exact motion trajectory, microphone position, and framing of <Video 1>: Continuing seamlessly across the first 17 frames, <Subject 1> steps toward stage right turning three-quarter away (<Picture 1>), looks back toward camera (<Picture 2>), and continues singing in warm amber-purple stage bokeh (<Picture 3>, <Picture 4>) holding her microphone naturally with white subtitle \"桃李争辉 飒爽英姿斗艳\" appearing at lower-center. Zero bright orange-red coat, zero straight flat hair, zero studio backdrop.\n\noverall_soundscape:\nLive stage rock-ballad vocal performance with electric guitar, drums, and expressive female singing.\n\nnon_diegetic_music:\nNone.",
      "seed": 25005,
      "sourceMode": "generated_window",
      "video": null,
      "status": "终版成片内的时间段；独立片段未归档",
      "thumb": "media/img-96c100e3566d8473f3fd.jpg",
      "refs": [
        {
          "label": "QA01_全片20拍_原片vs成片_1比1对比总表",
          "src": "media/img-a2f9033bac15280a8d69.jpg"
        }
      ]
    },
    {
      "id": "A6",
      "title": "A6 · 生成接力窗",
      "start": 22.5,
      "duration": 2.5,
      "framing": "生成窗 / 终版时间段",
      "action": "A6 · 生成接力窗",
      "prompt": "subject_definitions:\n<Video 1> is the source vertical concert singing stage video for the editing task.\n<Picture 1>, <Picture 2> are key frames of the target video.\n<Subject 1> is an East Asian adult female singer <Subject 1> with identical facial bone structure, expressive dark brown eyes, natural arched brows, rose-bean-paste lips, dainty matte champagne-gold teardrop earrings, and natural shoulder-length soft wavy jet-black hair with side-swept volume (NEVER straight flat hair), wearing a tailored knee-length deep imperial burgundy wine-red matte velvet Neo-Chinese Mandarin-collar stage coat with subtle matte champagne-gold geometric cloud-fret lapel trim, antique-gold metal D-ring waist belt, gold cuff piping, matte charcoal-black mock-turtleneck knit inner top, jet-black tailored straight trousers, and matte black low-block-heel ankle boots. Seen from behind, <Subject 1> displays her natural shoulder-length soft wavy jet-black hair covering her nape and upper shoulders and her tailored deep imperial burgundy wine-red matte velvet coat back with clean princess seams, matching burgundy velvet waist belt, and jet-black trousers (zero orange-red coat, zero straight hair). She replaces ONLY the original woman in the bright orange-red coat and straight hair in <Video 1>.\n\nsummary:\nContinuing seamlessly across the first 17 frames, <Subject 1> sings in front-left spotlight (<Picture 1>) and turns slowly into soft left profile as the stage fades smoothly toward dark black transition lighting (<Picture 2>), preserving the deep burgundy velvet coat, wavy hair, microphone, and white subtitle \"桃李争辉 飒爽英姿斗艳\". All original camera motion, stage lighting transitions, LED light bars, forest backdrop visuals, handheld silver-head microphone motion, and white Chinese lyric subtitles from <Video 1> are strictly preserved.\n\nretention_analysis:\n- <Video 1> (source video editing): fully_preserved - Strictly lock vertical framing, exact stage camera movement, exact singing body motion and microphone hand trajectory, stage LED backdrops, spotlight color shifts, and white lyric subtitles.\n- <Picture 1> (appears in [Shot 1]): reference - a target frame at 01.083s showing <Subject 1> in her exact deep burgundy velvet Neo-Chinese stage coat, soft wavy jet-black hair, microphone grip, stage lighting, and white lyric subtitle.\n- <Picture 2> (appears in [Shot 1]): reference - a target frame at 02.000s showing <Subject 1> in her exact deep burgundy velvet Neo-Chinese stage coat, soft wavy jet-black hair, microphone grip, stage lighting, and white lyric subtitle.\n- <Subject 1> (appears across all shots): fully_preserved - Maintain natural shoulder-length soft wavy jet-black hair (zero straight hair), exact WuDandan facial features, deep imperial burgundy velvet Neo-Chinese coat with subtle champagne-gold lapel trim and antique-gold waist belt, charcoal turtleneck, and black trousers consistently across every frame.\n\ndetailed_description:\nA realistic vertical concert stage live performance video with crisp vocal expression fidelity and authentic stage spotlight integration.\n[Shot 1] {00:00.000 - 04.458s} Matching <Picture 1>, <Picture 2> and the exact motion trajectory, microphone position, and framing of <Video 1>: Continuing seamlessly across the first 17 frames, <Subject 1> sings in front-left spotlight (<Picture 1>) and turns slowly into soft left profile as the stage fades smoothly toward dark black transition lighting (<Picture 2>), preserving the deep burgundy velvet coat, wavy hair, microphone, and white subtitle \"桃李争辉 飒爽英姿斗艳\". Zero bright orange-red coat, zero straight flat hair, zero studio backdrop.\n\noverall_soundscape:\nLive stage rock-ballad vocal performance with electric guitar, drums, and expressive female singing.\n\nnon_diegetic_music:\nNone.",
      "seed": 25006,
      "sourceMode": "generated_window",
      "video": null,
      "status": "终版成片内的时间段；独立片段未归档",
      "thumb": "media/img-c4bc5c1f8d1be29071d0.jpg",
      "refs": [
        {
          "label": "QA01_全片20拍_原片vs成片_1比1对比总表",
          "src": "media/img-a2f9033bac15280a8d69.jpg"
        }
      ]
    },
    {
      "id": "B0",
      "title": "B0 · 生成接力窗",
      "start": 25,
      "duration": 3.75,
      "framing": "生成窗 / 终版时间段",
      "action": "B0 · 生成接力窗",
      "prompt": "subject_definitions:\n<Video 1> is the source vertical concert singing stage video for the editing task.\n<Picture 1>, <Picture 2>, <Picture 3>, <Picture 4> are key frames of the target video.\n<Subject 1> is an East Asian adult female singer <Subject 1> with identical facial bone structure, expressive dark brown eyes, natural arched brows, rose-bean-paste lips, dainty matte champagne-gold teardrop earrings, and natural shoulder-length soft wavy jet-black hair with side-swept volume (NEVER straight flat hair), wearing a tailored knee-length deep imperial burgundy wine-red matte velvet Neo-Chinese Mandarin-collar stage coat with subtle matte champagne-gold geometric cloud-fret lapel trim, antique-gold metal D-ring waist belt, gold cuff piping, matte charcoal-black mock-turtleneck knit inner top, jet-black tailored straight trousers, and matte black low-block-heel ankle boots. Seen from behind, <Subject 1> displays her natural shoulder-length soft wavy jet-black hair covering her nape and upper shoulders and her tailored deep imperial burgundy wine-red matte velvet coat back with clean princess seams, matching burgundy velvet waist belt, and jet-black trousers (zero orange-red coat, zero straight hair). She replaces ONLY the original woman in the bright orange-red coat and straight hair in <Video 1>.\n\nsummary:\nEmerging cleanly onto stage right in dark purple-blue rose-bokeh spotlight, <Subject 1> turns from right-facing profile (<Picture 1>) into crisp full-front singing (<Picture 2>, <Picture 3>) holding her silver-head microphone near her mouth, then begins turning right toward the rear (<Picture 4>) with crisp white subtitle \"成功失败总是欢乐伤悲\". All original camera motion, stage lighting transitions, LED light bars, forest backdrop visuals, handheld silver-head microphone motion, and white Chinese lyric subtitles from <Video 1> are strictly preserved.\n\nretention_analysis:\n- <Video 1> (source video editing): fully_preserved - Strictly lock vertical framing, exact stage camera movement, exact singing body motion and microphone hand trajectory, stage LED backdrops, spotlight color shifts, and white lyric subtitles.\n- <Picture 1> (appears in [Shot 1]): reference - a target frame at 00.000s showing <Subject 1> in her exact deep burgundy velvet Neo-Chinese stage coat, soft wavy jet-black hair, microphone grip, stage lighting, and white lyric subtitle.\n- <Picture 2> (appears in [Shot 1]): reference - a target frame at 01.333s showing <Subject 1> in her exact deep burgundy velvet Neo-Chinese stage coat, soft wavy jet-black hair, microphone grip, stage lighting, and white lyric subtitle.\n- <Picture 3> (appears in [Shot 1]): reference - a target frame at 02.833s showing <Subject 1> in her exact deep burgundy velvet Neo-Chinese stage coat, soft wavy jet-black hair, microphone grip, stage lighting, and white lyric subtitle.\n- <Picture 4> (appears in [Shot 1]): reference - a target frame at 04.000s showing <Subject 1> in her exact deep burgundy velvet Neo-Chinese stage coat, soft wavy jet-black hair, microphone grip, stage lighting, and white lyric subtitle.\n- <Subject 1> (appears across all shots): fully_preserved - Maintain natural shoulder-length soft wavy jet-black hair (zero straight hair), exact WuDandan facial features, deep imperial burgundy velvet Neo-Chinese coat with subtle champagne-gold lapel trim and antique-gold waist belt, charcoal turtleneck, and black trousers consistently across every frame.\n\ndetailed_description:\nA realistic vertical concert stage live performance video with crisp vocal expression fidelity and authentic stage spotlight integration.\n[Shot 1] {00:00.000 - 04.458s} Matching <Picture 1>, <Picture 2>, <Picture 3>, <Picture 4> and the exact motion trajectory, microphone position, and framing of <Video 1>: Emerging cleanly onto stage right in dark purple-blue rose-bokeh spotlight, <Subject 1> turns from right-facing profile (<Picture 1>) into crisp full-front singing (<Picture 2>, <Picture 3>) holding her silver-head microphone near her mouth, then begins turning right toward the rear (<Picture 4>) with crisp white subtitle \"成功失败总是欢乐伤悲\". Zero bright orange-red coat, zero straight flat hair, zero studio backdrop.\n\noverall_soundscape:\nLive stage rock-ballad vocal performance with electric guitar, drums, and expressive female singing.\n\nnon_diegetic_music:\nNone.",
      "seed": 25100,
      "sourceMode": "generated_window",
      "video": null,
      "status": "终版成片内的时间段；独立片段未归档",
      "thumb": "media/img-8d92baee40887c82cfad.jpg",
      "refs": [
        {
          "label": "QA01_全片20拍_原片vs成片_1比1对比总表",
          "src": "media/img-a2f9033bac15280a8d69.jpg"
        }
      ]
    },
    {
      "id": "B1",
      "title": "B1 · 生成接力窗",
      "start": 28.75,
      "duration": 3.75,
      "framing": "生成窗 / 终版时间段",
      "action": "B1 · 生成接力窗",
      "prompt": "subject_definitions:\n<Video 1> is the source vertical concert singing stage video for the editing task.\n<Picture 1>, <Picture 2>, <Picture 3>, <Picture 4> are key frames of the target video.\n<Subject 1> is an East Asian adult female singer <Subject 1> with identical facial bone structure, expressive dark brown eyes, natural arched brows, rose-bean-paste lips, dainty matte champagne-gold teardrop earrings, and natural shoulder-length soft wavy jet-black hair with side-swept volume (NEVER straight flat hair), wearing a tailored knee-length deep imperial burgundy wine-red matte velvet Neo-Chinese Mandarin-collar stage coat with subtle matte champagne-gold geometric cloud-fret lapel trim, antique-gold metal D-ring waist belt, gold cuff piping, matte charcoal-black mock-turtleneck knit inner top, jet-black tailored straight trousers, and matte black low-block-heel ankle boots. Seen from behind, <Subject 1> displays her natural shoulder-length soft wavy jet-black hair covering her nape and upper shoulders and her tailored deep imperial burgundy wine-red matte velvet coat back with clean princess seams, matching burgundy velvet waist belt, and jet-black trousers (zero orange-red coat, zero straight hair). She replaces ONLY the original woman in the bright orange-red coat and straight hair in <Video 1>.\n\nsummary:\nContinuing seamlessly across the first 17 frames, <Subject 1> completes a graceful 180-degree rear turn showing her wavy black hair and deep burgundy velvet coat back (<Picture 1>), turns back around through right profile (<Picture 2>) as the stage backdrop shifts to warm golden-green sunlit forest/tree LED visuals, and sings front-facing (<Picture 3>, <Picture 4>) with white subtitle transitioning cleanly to \"红颜娇美承受雨打风吹\". All original camera motion, stage lighting transitions, LED light bars, forest backdrop visuals, handheld silver-head microphone motion, and white Chinese lyric subtitles from <Video 1> are strictly preserved.\n\nretention_analysis:\n- <Video 1> (source video editing): fully_preserved - Strictly lock vertical framing, exact stage camera movement, exact singing body motion and microphone hand trajectory, stage LED backdrops, spotlight color shifts, and white lyric subtitles.\n- <Picture 1> (appears in [Shot 1]): reference - a target frame at 01.083s showing <Subject 1> in her exact deep burgundy velvet Neo-Chinese stage coat, soft wavy jet-black hair, microphone grip, stage lighting, and white lyric subtitle.\n- <Picture 2> (appears in [Shot 1]): reference - a target frame at 02.167s showing <Subject 1> in her exact deep burgundy velvet Neo-Chinese stage coat, soft wavy jet-black hair, microphone grip, stage lighting, and white lyric subtitle.\n- <Picture 3> (appears in [Shot 1]): reference - a target frame at 03.167s showing <Subject 1> in her exact deep burgundy velvet Neo-Chinese stage coat, soft wavy jet-black hair, microphone grip, stage lighting, and white lyric subtitle.\n- <Picture 4> (appears in [Shot 1]): reference - a target frame at 04.083s showing <Subject 1> in her exact deep burgundy velvet Neo-Chinese stage coat, soft wavy jet-black hair, microphone grip, stage lighting, and white lyric subtitle.\n- <Subject 1> (appears across all shots): fully_preserved - Maintain natural shoulder-length soft wavy jet-black hair (zero straight hair), exact WuDandan facial features, deep imperial burgundy velvet Neo-Chinese coat with subtle champagne-gold lapel trim and antique-gold waist belt, charcoal turtleneck, and black trousers consistently across every frame.\n\ndetailed_description:\nA realistic vertical concert stage live performance video with crisp vocal expression fidelity and authentic stage spotlight integration.\n[Shot 1] {00:00.000 - 04.458s} Matching <Picture 1>, <Picture 2>, <Picture 3>, <Picture 4> and the exact motion trajectory, microphone position, and framing of <Video 1>: Continuing seamlessly across the first 17 frames, <Subject 1> completes a graceful 180-degree rear turn showing her wavy black hair and deep burgundy velvet coat back (<Picture 1>), turns back around through right profile (<Picture 2>) as the stage backdrop shifts to warm golden-green sunlit forest/tree LED visuals, and sings front-facing (<Picture 3>, <Picture 4>) with white subtitle transitioning cleanly to \"红颜娇美承受雨打风吹\". Zero bright orange-red coat, zero straight flat hair, zero studio backdrop.\n\noverall_soundscape:\nLive stage rock-ballad vocal performance with electric guitar, drums, and expressive female singing.\n\nnon_diegetic_music:\nNone.",
      "seed": 25101,
      "sourceMode": "generated_window",
      "video": null,
      "status": "终版成片内的时间段；独立片段未归档",
      "thumb": "media/img-39bc5bd2656fe03f1de4.jpg",
      "refs": [
        {
          "label": "QA01_全片20拍_原片vs成片_1比1对比总表",
          "src": "media/img-a2f9033bac15280a8d69.jpg"
        }
      ]
    },
    {
      "id": "B2",
      "title": "B2 · 生成接力窗",
      "start": 32.5,
      "duration": 3.75,
      "framing": "生成窗 / 终版时间段",
      "action": "B2 · 生成接力窗",
      "prompt": "subject_definitions:\n<Video 1> is the source vertical concert singing stage video for the editing task.\n<Picture 1>, <Picture 2>, <Picture 3>, <Picture 4> are key frames of the target video.\n<Subject 1> is an East Asian adult female singer <Subject 1> with identical facial bone structure, expressive dark brown eyes, natural arched brows, rose-bean-paste lips, dainty matte champagne-gold teardrop earrings, and natural shoulder-length soft wavy jet-black hair with side-swept volume (NEVER straight flat hair), wearing a tailored knee-length deep imperial burgundy wine-red matte velvet Neo-Chinese Mandarin-collar stage coat with subtle matte champagne-gold geometric cloud-fret lapel trim, antique-gold metal D-ring waist belt, gold cuff piping, matte charcoal-black mock-turtleneck knit inner top, jet-black tailored straight trousers, and matte black low-block-heel ankle boots. Seen from behind, <Subject 1> displays her natural shoulder-length soft wavy jet-black hair covering her nape and upper shoulders and her tailored deep imperial burgundy wine-red matte velvet coat back with clean princess seams, matching burgundy velvet waist belt, and jet-black trousers (zero orange-red coat, zero straight hair). She replaces ONLY the original woman in the bright orange-red coat and straight hair in <Video 1>.\n\nsummary:\nContinuing seamlessly across the first 17 frames against the warm golden-green sunlit tree LED stage backdrop, <Subject 1> delivers soaring front-facing vocals holding her silver-head microphone near her lips with subtle hand gestures (<Picture 1> to <Picture 4>), keeping her wavy hair, burgundy velvet coat with champagne-gold trim, and white subtitle \"红颜娇美承受雨打风吹\" then \"拔剑扬眉 豪情快慰\" crisp. All original camera motion, stage lighting transitions, LED light bars, forest backdrop visuals, handheld silver-head microphone motion, and white Chinese lyric subtitles from <Video 1> are strictly preserved.\n\nretention_analysis:\n- <Video 1> (source video editing): fully_preserved - Strictly lock vertical framing, exact stage camera movement, exact singing body motion and microphone hand trajectory, stage LED backdrops, spotlight color shifts, and white lyric subtitles.\n- <Picture 1> (appears in [Shot 1]): reference - a target frame at 01.083s showing <Subject 1> in her exact deep burgundy velvet Neo-Chinese stage coat, soft wavy jet-black hair, microphone grip, stage lighting, and white lyric subtitle.\n- <Picture 2> (appears in [Shot 1]): reference - a target frame at 02.167s showing <Subject 1> in her exact deep burgundy velvet Neo-Chinese stage coat, soft wavy jet-black hair, microphone grip, stage lighting, and white lyric subtitle.\n- <Picture 3> (appears in [Shot 1]): reference - a target frame at 03.167s showing <Subject 1> in her exact deep burgundy velvet Neo-Chinese stage coat, soft wavy jet-black hair, microphone grip, stage lighting, and white lyric subtitle.\n- <Picture 4> (appears in [Shot 1]): reference - a target frame at 04.083s showing <Subject 1> in her exact deep burgundy velvet Neo-Chinese stage coat, soft wavy jet-black hair, microphone grip, stage lighting, and white lyric subtitle.\n- <Subject 1> (appears across all shots): fully_preserved - Maintain natural shoulder-length soft wavy jet-black hair (zero straight hair), exact WuDandan facial features, deep imperial burgundy velvet Neo-Chinese coat with subtle champagne-gold lapel trim and antique-gold waist belt, charcoal turtleneck, and black trousers consistently across every frame.\n\ndetailed_description:\nA realistic vertical concert stage live performance video with crisp vocal expression fidelity and authentic stage spotlight integration.\n[Shot 1] {00:00.000 - 04.458s} Matching <Picture 1>, <Picture 2>, <Picture 3>, <Picture 4> and the exact motion trajectory, microphone position, and framing of <Video 1>: Continuing seamlessly across the first 17 frames against the warm golden-green sunlit tree LED stage backdrop, <Subject 1> delivers soaring front-facing vocals holding her silver-head microphone near her lips with subtle hand gestures (<Picture 1> to <Picture 4>), keeping her wavy hair, burgundy velvet coat with champagne-gold trim, and white subtitle \"红颜娇美承受雨打风吹\" then \"拔剑扬眉 豪情快慰\" crisp. Zero bright orange-red coat, zero straight flat hair, zero studio backdrop.\n\noverall_soundscape:\nLive stage rock-ballad vocal performance with electric guitar, drums, and expressive female singing.\n\nnon_diegetic_music:\nNone.",
      "seed": 25102,
      "sourceMode": "generated_window",
      "video": null,
      "status": "终版成片内的时间段；独立片段未归档",
      "thumb": "media/img-27c296d2a1c3e9cce244.jpg",
      "refs": [
        {
          "label": "QA01_全片20拍_原片vs成片_1比1对比总表",
          "src": "media/img-a2f9033bac15280a8d69.jpg"
        }
      ]
    },
    {
      "id": "B3",
      "title": "B3 · 生成接力窗",
      "start": 36.25,
      "duration": 3.75,
      "framing": "生成窗 / 终版时间段",
      "action": "B3 · 生成接力窗",
      "prompt": "subject_definitions:\n<Video 1> is the source vertical concert singing stage video for the editing task.\n<Picture 1>, <Picture 2>, <Picture 3>, <Picture 4> are key frames of the target video.\n<Subject 1> is an East Asian adult female singer <Subject 1> with identical facial bone structure, expressive dark brown eyes, natural arched brows, rose-bean-paste lips, dainty matte champagne-gold teardrop earrings, and natural shoulder-length soft wavy jet-black hair with side-swept volume (NEVER straight flat hair), wearing a tailored knee-length deep imperial burgundy wine-red matte velvet Neo-Chinese Mandarin-collar stage coat with subtle matte champagne-gold geometric cloud-fret lapel trim, antique-gold metal D-ring waist belt, gold cuff piping, matte charcoal-black mock-turtleneck knit inner top, jet-black tailored straight trousers, and matte black low-block-heel ankle boots. Seen from behind, <Subject 1> displays her natural shoulder-length soft wavy jet-black hair covering her nape and upper shoulders and her tailored deep imperial burgundy wine-red matte velvet coat back with clean princess seams, matching burgundy velvet waist belt, and jet-black trousers (zero orange-red coat, zero straight hair). She replaces ONLY the original woman in the bright orange-red coat and straight hair in <Video 1>.\n\nsummary:\nContinuing seamlessly across the first 17 frames, <Subject 1> sings powerfully facing front (<Picture 1>), pivots right into side-rear turn (<Picture 2>), and turns into a complete 180-degree rear view facing away (<Picture 3>, <Picture 4>) raising her right arm holding the microphone up-right against the dark blue concert stage, keeping white subtitle \"拔剑扬眉 豪情快慰\". All original camera motion, stage lighting transitions, LED light bars, forest backdrop visuals, handheld silver-head microphone motion, and white Chinese lyric subtitles from <Video 1> are strictly preserved.\n\nretention_analysis:\n- <Video 1> (source video editing): fully_preserved - Strictly lock vertical framing, exact stage camera movement, exact singing body motion and microphone hand trajectory, stage LED backdrops, spotlight color shifts, and white lyric subtitles.\n- <Picture 1> (appears in [Shot 1]): reference - a target frame at 01.083s showing <Subject 1> in her exact deep burgundy velvet Neo-Chinese stage coat, soft wavy jet-black hair, microphone grip, stage lighting, and white lyric subtitle.\n- <Picture 2> (appears in [Shot 1]): reference - a target frame at 02.167s showing <Subject 1> in her exact deep burgundy velvet Neo-Chinese stage coat, soft wavy jet-black hair, microphone grip, stage lighting, and white lyric subtitle.\n- <Picture 3> (appears in [Shot 1]): reference - a target frame at 03.167s showing <Subject 1> in her exact deep burgundy velvet Neo-Chinese stage coat, soft wavy jet-black hair, microphone grip, stage lighting, and white lyric subtitle.\n- <Picture 4> (appears in [Shot 1]): reference - a target frame at 04.083s showing <Subject 1> in her exact deep burgundy velvet Neo-Chinese stage coat, soft wavy jet-black hair, microphone grip, stage lighting, and white lyric subtitle.\n- <Subject 1> (appears across all shots): fully_preserved - Maintain natural shoulder-length soft wavy jet-black hair (zero straight hair), exact WuDandan facial features, deep imperial burgundy velvet Neo-Chinese coat with subtle champagne-gold lapel trim and antique-gold waist belt, charcoal turtleneck, and black trousers consistently across every frame.\n\ndetailed_description:\nA realistic vertical concert stage live performance video with crisp vocal expression fidelity and authentic stage spotlight integration.\n[Shot 1] {00:00.000 - 04.458s} Matching <Picture 1>, <Picture 2>, <Picture 3>, <Picture 4> and the exact motion trajectory, microphone position, and framing of <Video 1>: Continuing seamlessly across the first 17 frames, <Subject 1> sings powerfully facing front (<Picture 1>), pivots right into side-rear turn (<Picture 2>), and turns into a complete 180-degree rear view facing away (<Picture 3>, <Picture 4>) raising her right arm holding the microphone up-right against the dark blue concert stage, keeping white subtitle \"拔剑扬眉 豪情快慰\". Zero bright orange-red coat, zero straight flat hair, zero studio backdrop.\n\noverall_soundscape:\nLive stage rock-ballad vocal performance with electric guitar, drums, and expressive female singing.\n\nnon_diegetic_music:\nNone.",
      "seed": 25103,
      "sourceMode": "generated_window",
      "video": null,
      "status": "终版成片内的时间段；独立片段未归档",
      "thumb": "media/img-8cfc3a7c025f04b1e522.jpg",
      "refs": [
        {
          "label": "QA01_全片20拍_原片vs成片_1比1对比总表",
          "src": "media/img-a2f9033bac15280a8d69.jpg"
        }
      ]
    },
    {
      "id": "B4",
      "title": "B4 · 生成接力窗",
      "start": 40,
      "duration": 3.875,
      "framing": "生成窗 / 终版时间段",
      "action": "B4 · 生成接力窗",
      "prompt": "subject_definitions:\n<Video 1> is the source vertical concert singing stage video for the editing task.\n<Picture 1>, <Picture 2>, <Picture 3> are key frames of the target video.\n<Subject 1> is an East Asian adult female singer <Subject 1> with identical facial bone structure, expressive dark brown eyes, natural arched brows, rose-bean-paste lips, dainty matte champagne-gold teardrop earrings, and natural shoulder-length soft wavy jet-black hair with side-swept volume (NEVER straight flat hair), wearing a tailored knee-length deep imperial burgundy wine-red matte velvet Neo-Chinese Mandarin-collar stage coat with subtle matte champagne-gold geometric cloud-fret lapel trim, antique-gold metal D-ring waist belt, gold cuff piping, matte charcoal-black mock-turtleneck knit inner top, jet-black tailored straight trousers, and matte black low-block-heel ankle boots. Seen from behind, <Subject 1> displays her natural shoulder-length soft wavy jet-black hair covering her nape and upper shoulders and her tailored deep imperial burgundy wine-red matte velvet coat back with clean princess seams, matching burgundy velvet waist belt, and jet-black trousers (zero orange-red coat, zero straight hair). She replaces ONLY the original woman in the bright orange-red coat and straight hair in <Video 1>.\n\nsummary:\nContinuing seamlessly across the first 17 frames in 180-degree rear view (<Picture 1>, <Picture 2>, <Picture 3>), <Subject 1> remains turned away from camera against the dark blue concert stage with her natural shoulder-length soft wavy jet-black hair covering her nape, deep burgundy velvet coat back with waist belt, and right arm raised holding the microphone cleanly. All original camera motion, stage lighting transitions, LED light bars, forest backdrop visuals, handheld silver-head microphone motion, and white Chinese lyric subtitles from <Video 1> are strictly preserved.\n\nretention_analysis:\n- <Video 1> (source video editing): fully_preserved - Strictly lock vertical framing, exact stage camera movement, exact singing body motion and microphone hand trajectory, stage LED backdrops, spotlight color shifts, and white lyric subtitles.\n- <Picture 1> (appears in [Shot 1]): reference - a target frame at 01.083s showing <Subject 1> in her exact deep burgundy velvet Neo-Chinese stage coat, soft wavy jet-black hair, microphone grip, stage lighting, and white lyric subtitle.\n- <Picture 2> (appears in [Shot 1]): reference - a target frame at 02.333s showing <Subject 1> in her exact deep burgundy velvet Neo-Chinese stage coat, soft wavy jet-black hair, microphone grip, stage lighting, and white lyric subtitle.\n- <Picture 3> (appears in [Shot 1]): reference - a target frame at 03.667s showing <Subject 1> in her exact deep burgundy velvet Neo-Chinese stage coat, soft wavy jet-black hair, microphone grip, stage lighting, and white lyric subtitle.\n- <Subject 1> (appears across all shots): fully_preserved - Maintain natural shoulder-length soft wavy jet-black hair (zero straight hair), exact WuDandan facial features, deep imperial burgundy velvet Neo-Chinese coat with subtle champagne-gold lapel trim and antique-gold waist belt, charcoal turtleneck, and black trousers consistently across every frame.\n\ndetailed_description:\nA realistic vertical concert stage live performance video with crisp vocal expression fidelity and authentic stage spotlight integration.\n[Shot 1] {00:00.000 - 04.458s} Matching <Picture 1>, <Picture 2>, <Picture 3> and the exact motion trajectory, microphone position, and framing of <Video 1>: Continuing seamlessly across the first 17 frames in 180-degree rear view (<Picture 1>, <Picture 2>, <Picture 3>), <Subject 1> remains turned away from camera against the dark blue concert stage with her natural shoulder-length soft wavy jet-black hair covering her nape, deep burgundy velvet coat back with waist belt, and right arm raised holding the microphone cleanly. Zero bright orange-red coat, zero straight flat hair, zero studio backdrop.\n\noverall_soundscape:\nLive stage rock-ballad vocal performance with electric guitar, drums, and expressive female singing.\n\nnon_diegetic_music:\nNone.",
      "seed": 25104,
      "sourceMode": "generated_window",
      "video": null,
      "status": "终版成片内的时间段；独立片段未归档",
      "thumb": "media/img-b6673e9590351fc15c5f.jpg",
      "refs": [
        {
          "label": "QA01_全片20拍_原片vs成片_1比1对比总表",
          "src": "media/img-a2f9033bac15280a8d69.jpg"
        }
      ]
    }
  ],
  "generation": {
    "model": "MiniMax H3 Viggle Remake + Seed-VC",
    "params": [
      {
        "k": "终版规格",
        "v": "1080×1920 · 24/1 · 43.875s"
      },
      {
        "k": "版本",
        "v": "终版"
      }
    ],
    "notes": [
      "meta.generated 统计生产计划明确的生成窗/替换镜段；只在拥有独立成片文件时才给逐镜 video。",
      "逐镜 prompt 为源脚本函数和源计划重建的文本，不等同于平台提交日志逐字存证。",
      "A/B 双链生成 12 窗；保留原生黑场与歌词字幕，歌声音色替换。"
    ]
  },
  "deliverables": [
    {
      "name": "武丹丹_豪情舞台演唱_新造型换角与歌声替换_1080p24_终版.mp4",
      "src": "https://github.com/aikingtai-ctrl/jintai-film-showcase/releases/download/media-v1/wdd-heroic-stage-44s--af1d8adc7f93c636f0b5.mp4",
      "note": "终版 终版 · 43.875s"
    }
  ]
});
