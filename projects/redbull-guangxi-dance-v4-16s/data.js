window.registerProject({
  "id": "redbull-guangxi-dance-v4-16s",
  "title": "红牛街舞《广西仔》｜新中式国潮换角｜V4",
  "subtitle": "2026-11-24 · V4 · 已验收本地终版",
  "logline": "四窗接力，V4 原生 24fps 消除 RIFE 重影；原曲伴奏保留。",
  "date": "2026-11-24",
  "tags": [
    "V4",
    "已生成",
    "终版归档",
    "9:16",
    "MiniMax H3 Viggle Remake"
  ],
  "model": "MiniMax H3 Viggle Remake + FaceFusion",
  "modelShort": "MiniMax H3 Viggle Remake",
  "poster": "media/img-53e797330e9a0c258124.jpg",
  "film": {
    "src": "https://github.com/aikingtai-ctrl/jintai-film-showcase/releases/download/media-v1/redbull-guangxi-dance-v4-16s--d5c2870c89ac4f6989a2.mp4",
    "duration": 15.541667,
    "width": 1080,
    "height": 1920,
    "fps": "24/1"
  },
  "meta": {
    "shots": 4,
    "generated": 4,
    "durationSec": 15.541667,
    "resolution": "1080×1920",
    "fps": "24/1",
    "aspect": "9:16",
    "style": "四窗接力，V4 原生 24fps 消除 RIFE 重影；原曲伴奏保留。"
  },
  "synopsis": [
    "四窗接力，V4 原生 24fps 消除 RIFE 重影；原曲伴奏保留。",
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
      "tool": "MiniMax H3 Viggle Remake + FaceFusion",
      "note": "V4 终版；QA 图卡和本地来源账本已归档。"
    }
  ],
  "props": [
    {
      "id": "QA01",
      "name": "11月24日_05_全片原片vs成片16拍1比1对比质检总表_V4",
      "image": "media/img-145d874fc68315167383.jpg",
      "desc": "V4 终版验收图卡；来源与哈希见本地账本。"
    },
    {
      "id": "QA02",
      "name": "11月24日_06_面部相似度与高踢腿转身及双人同框专项核验板_V4",
      "image": "media/img-fba43286b1d6fe65d3fd.jpg",
      "desc": "V4 终版验收图卡；来源与哈希见本地账本。"
    },
    {
      "id": "QA03",
      "name": "11月24日_07_V1与V4无鬼影自然肤色及光色融合1比1对比核验板",
      "image": "media/img-b72fc03ea5ed3341b373.jpg",
      "desc": "V4 终版验收图卡；来源与哈希见本地账本。"
    }
  ],
  "shots": [
    {
      "id": "W0",
      "title": "W0 · 生成接力窗",
      "start": 0,
      "duration": 3.75,
      "framing": "生成窗 / 终版时间段",
      "action": "W0 · 生成接力窗",
      "prompt": "subject_definitions:\n<Video 1> is the source vertical Red Bull Dance Your Style battle video for the editing task.\n<Picture 1>, <Picture 2>, <Picture 3>, <Picture 4> are frames of the target video, all from [Shot 1].\n<Subject 1> is the main male street dancer visible in <Picture 1>, <Picture 2>, <Picture 3>, <Picture 4>: a sturdy 50-year-old East Asian male street dancer with neat short-cropped black crew-cut hair, completely clean-shaven face (zero white hair, zero white goatee, zero beard, zero glasses), warm confident smile, wearing an open-front relaxed warm ivory-cream heavyweight cotton-linen Neo-Chinese Mandarin-collar street jacket with matte ink-black Chinese frog buttons and black collar/cuff piping over a charcoal-black crewneck T-shirt with a thin silver chest pendant, deep charcoal-black relaxed wide-leg street-dance trousers, crisp black-and-white contrast retro low-top sneakers with white midsoles, and a dark metallic wristwatch on his left wrist. He replaces ONLY the elderly white-haired bearded dancer in the beige Tang suit in <Video 1>.\n\nsummary:\n[video editing + character replacement] A clean-shaven 50-year-old East Asian male street dancer in an open ivory-cream Neo-Chinese Mandarin-collar jacket, charcoal crewneck T-shirt, charcoal wide-leg trousers, and black-and-white sneakers grooves energetically on a Red Bull Dance Your Style battle stage, pointing left, smiling under red and blue stage spotlights, and driving a high knee kick. All original camera panning, framing, motion timing, red/amber and blue/cyan stage lighting, cheering arena crowd, Red Bull Dance Your Style Zurich banner, SONY ULT speakers, foreground phone silhouettes, and the blonde female dancer in <Video 1> are strictly kept.\n\nretention_analysis:\n- <Video 1> (source video editing): fully_preserved - Strictly lock the exact vertical camera framing, smooth stage panning, exact dancer limb timing and choreography, cheering crowd members, blonde female opponent in black leather jacket and caramel trousers, Red Bull banner text, SONY ULT speakers, foreground phone silhouettes, stage lighting, and audio timing.\n- <Picture 1> (appears in [Shot 1]): reference - a frame of the target video at 00.000s showing the exact target character look, ivory Neo-Chinese jacket, charcoal wide trousers, sneakers, lighting, and pose at that moment.\n- <Picture 2> (appears in [Shot 1]): reference - a frame of the target video at 01.417s showing the exact target character look, ivory Neo-Chinese jacket, charcoal wide trousers, sneakers, lighting, and pose at that moment.\n- <Picture 3> (appears in [Shot 1]): reference - a frame of the target video at 02.750s showing the exact target character look, ivory Neo-Chinese jacket, charcoal wide trousers, sneakers, lighting, and pose at that moment.\n- <Picture 4> (appears in [Shot 1]): reference - a frame of the target video at 04.083s showing the exact target character look, ivory Neo-Chinese jacket, charcoal wide trousers, sneakers, lighting, and pose at that moment.\n- <Subject 1> (appears in [Shot 1]): fully_preserved - Maintain neat short black crew-cut hair, completely clean-shaven middle-aged East Asian face (zero white hair, zero white beard), warm ivory-cream open Neo-Chinese Mandarin-collar jacket with black frog buttons (and ink-black/gold cloud-dragon back emblem when turned away), charcoal crewneck T-shirt, charcoal wide-leg trousers, and black-and-white sneakers consistently across every frame.\n\ndetailed_description:\nA realistic vertical handheld live stage battle video with crisp motion fidelity and authentic Red Bull arena lighting.\n[Shot 1] {00:00.000 - 04.458s} Matching <Picture 1>, <Picture 2>, <Picture 3>, <Picture 4> and the exact motion trajectory and camera framing of <Video 1>, From 00:00.000 to 00:01.400, <Subject 1> bounces forward in three-quarter left view and extends his right arm to point sharply left across the stage matching <Picture 1> and <Picture 2>. Around 00:02.100 the stage overhead spotlight shifts into cool blue and warm amber backlighting as <Subject 1> turns three-quarter front-right with a broad joyful grin and open arms matching <Picture 3>. From 00:03.200 to 00:04.458, <Subject 1> swings his arms and drives his right knee high up to chest level in a dynamic street-dance kick matching <Picture 4>. In every frame from 00:00.000 to 04.458s, the central performer is this same clean-shaven short-black-haired <Subject 1> in his warm ivory Neo-Chinese jacket and dark charcoal streetwear, with zero white hair, zero white goatee, and zero beige Tang suit.\n\noverall_soundscape:\nLive indoor street-dance battle stage with rhythmic hip-hop beat, Cantonese vocals, and cheering crowd.\n\nnon_diegetic_music:\nEnergetic Cantonese electronic street-dance track from <Video 1>.",
      "seed": 112400,
      "sourceMode": "generated_window",
      "video": null,
      "status": "终版成片内的时间段；独立片段未归档",
      "thumb": "media/img-90d7f998da28058a4083.jpg",
      "refs": [
        {
          "label": "11月24日_05_全片原片vs成片16拍1比1对比质检总表_V4",
          "src": "media/img-145d874fc68315167383.jpg"
        }
      ]
    },
    {
      "id": "W1",
      "title": "W1 · 生成接力窗",
      "start": 3.75,
      "duration": 3.75,
      "framing": "生成窗 / 终版时间段",
      "action": "W1 · 生成接力窗",
      "prompt": "subject_definitions:\n<Video 1> is the source vertical Red Bull Dance Your Style battle video for the editing task.\n<Picture 1>, <Picture 2>, <Picture 3> are frames of the target video, all from [Shot 1].\n<Subject 1> is the main male street dancer visible in <Picture 1>, <Picture 2>, <Picture 3>: a sturdy 50-year-old East Asian male street dancer with neat short-cropped black crew-cut hair, completely clean-shaven face (zero white hair, zero white goatee, zero beard, zero glasses), warm confident smile, wearing an open-front relaxed warm ivory-cream heavyweight cotton-linen Neo-Chinese Mandarin-collar street jacket with matte ink-black Chinese frog buttons and black collar/cuff piping over a charcoal-black crewneck T-shirt with a thin silver chest pendant, deep charcoal-black relaxed wide-leg street-dance trousers, crisp black-and-white contrast retro low-top sneakers with white midsoles, and a dark metallic wristwatch on his left wrist. He replaces ONLY the elderly white-haired bearded dancer in the beige Tang suit in <Video 1>.\n\nsummary:\n[video editing + character replacement] The same clean-shaven short-black-haired male dancer in his open ivory-cream Neo-Chinese Mandarin-collar jacket, black T-shirt, and charcoal wide-leg trousers glides smoothly across the Red Bull stage with sweeping arm points and high stepping kicks while the camera pans alongside. All original camera panning, framing, motion timing, red/amber and blue/cyan stage lighting, cheering arena crowd, Red Bull Dance Your Style Zurich banner, SONY ULT speakers, foreground phone silhouettes, and the blonde female dancer in <Video 1> are strictly kept.\n\nretention_analysis:\n- <Video 1> (source video editing): fully_preserved - Strictly lock the exact vertical camera framing, smooth stage panning, exact dancer limb timing and choreography, cheering crowd members, blonde female opponent in black leather jacket and caramel trousers, Red Bull banner text, SONY ULT speakers, foreground phone silhouettes, stage lighting, and audio timing.\n- <Picture 1> (appears in [Shot 1]): reference - a frame of the target video at 01.333s showing the exact target character look, ivory Neo-Chinese jacket, charcoal wide trousers, sneakers, lighting, and pose at that moment.\n- <Picture 2> (appears in [Shot 1]): reference - a frame of the target video at 02.667s showing the exact target character look, ivory Neo-Chinese jacket, charcoal wide trousers, sneakers, lighting, and pose at that moment.\n- <Picture 3> (appears in [Shot 1]): reference - a frame of the target video at 04.000s showing the exact target character look, ivory Neo-Chinese jacket, charcoal wide trousers, sneakers, lighting, and pose at that moment.\n- <Subject 1> (appears in [Shot 1]): fully_preserved - Maintain neat short black crew-cut hair, completely clean-shaven middle-aged East Asian face (zero white hair, zero white beard), warm ivory-cream open Neo-Chinese Mandarin-collar jacket with black frog buttons (and ink-black/gold cloud-dragon back emblem when turned away), charcoal crewneck T-shirt, charcoal wide-leg trousers, and black-and-white sneakers consistently across every frame.\n\ndetailed_description:\nA realistic vertical handheld live stage battle video with crisp motion fidelity and authentic Red Bull arena lighting.\n[Shot 1] {00:00.000 - 04.458s} Matching <Picture 1>, <Picture 2>, <Picture 3> and the exact motion trajectory and camera framing of <Video 1>, The opening 17 frames match the previous window seamlessly. <Subject 1> lunges sideways in three-quarter left profile extending his right arm straight left past the SONY ULT stage speaker matching <Picture 1>, lifts his right knee high in an energetic smiling stepping kick matching <Picture 2>, and transitions across the stage past the Red Bull Dance Your Style sign with dynamic jacket drape and crisp arm gestures matching <Picture 3>. In every frame from 00:00.000 to 04.458s, the central performer is this same clean-shaven short-black-haired <Subject 1> in his warm ivory Neo-Chinese jacket and dark charcoal streetwear, with zero white hair, zero white goatee, and zero beige Tang suit.\n\noverall_soundscape:\nEnergetic Cantonese dance music track and live indoor battle crowd cheers.\n\nnon_diegetic_music:\nEnergetic Cantonese electronic street-dance track from <Video 1>.",
      "seed": 112401,
      "sourceMode": "generated_window",
      "video": null,
      "status": "终版成片内的时间段；独立片段未归档",
      "thumb": "media/img-e6c6c57e1a1d6d5c4f38.jpg",
      "refs": [
        {
          "label": "11月24日_05_全片原片vs成片16拍1比1对比质检总表_V4",
          "src": "media/img-145d874fc68315167383.jpg"
        }
      ]
    },
    {
      "id": "W2",
      "title": "W2 · 生成接力窗",
      "start": 7.5,
      "duration": 3.75,
      "framing": "生成窗 / 终版时间段",
      "action": "W2 · 生成接力窗",
      "prompt": "subject_definitions:\n<Video 1> is the source vertical Red Bull Dance Your Style battle video for the editing task.\n<Picture 1>, <Picture 2>, <Picture 3> are frames of the target video, all from [Shot 1].\n<Subject 1> is the main male street dancer visible in <Picture 1>, <Picture 2>, <Picture 3>: a sturdy 50-year-old East Asian male street dancer with neat short-cropped black crew-cut hair, completely clean-shaven face (zero white hair, zero white goatee, zero beard, zero glasses), warm confident smile, wearing an open-front relaxed warm ivory-cream heavyweight cotton-linen Neo-Chinese Mandarin-collar street jacket with matte ink-black Chinese frog buttons and black collar/cuff piping over a charcoal-black crewneck T-shirt with a thin silver chest pendant, deep charcoal-black relaxed wide-leg street-dance trousers, crisp black-and-white contrast retro low-top sneakers with white midsoles, and a dark metallic wristwatch on his left wrist. He replaces ONLY the elderly white-haired bearded dancer in the beige Tang suit in <Video 1>.\n\nsummary:\n[video editing + character replacement] The same clean-shaven short-black-haired male dancer in his ivory-cream Neo-Chinese jacket, black T-shirt, and charcoal wide-leg trousers kicks his knee high, leans forward to high-five a blonde female dancer on the left, and pivots into a spin. All original camera panning, framing, motion timing, red/amber and blue/cyan stage lighting, cheering arena crowd, Red Bull Dance Your Style Zurich banner, SONY ULT speakers, foreground phone silhouettes, and the blonde female dancer in <Video 1> are strictly kept.\n\nretention_analysis:\n- <Video 1> (source video editing): fully_preserved - Strictly lock the exact vertical camera framing, smooth stage panning, exact dancer limb timing and choreography, cheering crowd members, blonde female opponent in black leather jacket and caramel trousers, Red Bull banner text, SONY ULT speakers, foreground phone silhouettes, stage lighting, and audio timing.\n- <Picture 1> (appears in [Shot 1]): reference - a frame of the target video at 01.250s showing the exact target character look, ivory Neo-Chinese jacket, charcoal wide trousers, sneakers, lighting, and pose at that moment.\n- <Picture 2> (appears in [Shot 1]): reference - a frame of the target video at 02.500s showing the exact target character look, ivory Neo-Chinese jacket, charcoal wide trousers, sneakers, lighting, and pose at that moment.\n- <Picture 3> (appears in [Shot 1]): reference - a frame of the target video at 03.750s showing the exact target character look, ivory Neo-Chinese jacket, charcoal wide trousers, sneakers, lighting, and pose at that moment.\n- <Subject 1> (appears in [Shot 1]): fully_preserved - Maintain neat short black crew-cut hair, completely clean-shaven middle-aged East Asian face (zero white hair, zero white beard), warm ivory-cream open Neo-Chinese Mandarin-collar jacket with black frog buttons (and ink-black/gold cloud-dragon back emblem when turned away), charcoal crewneck T-shirt, charcoal wide-leg trousers, and black-and-white sneakers consistently across every frame.\n\ndetailed_description:\nA realistic vertical handheld live stage battle video with crisp motion fidelity and authentic Red Bull arena lighting.\n[Shot 1] {00:00.000 - 04.458s} Matching <Picture 1>, <Picture 2>, <Picture 3> and the exact motion trajectory and camera framing of <Video 1>, The opening 17 frames match the previous window seamlessly. <Subject 1> kicks his right knee up sharply while gesturing left matching <Picture 1>, then leans forward on the right side of the stage to high-five the blonde female dancer on the left (whose blonde bun, black leather jacket, and caramel-brown trousers stay 100% preserved) matching <Picture 2>, and steps wide pivoting front-right across the stage matching <Picture 3>. In every frame from 00:00.000 to 04.458s, the central performer is this same clean-shaven short-black-haired <Subject 1> in his warm ivory Neo-Chinese jacket and dark charcoal streetwear, with zero white hair, zero white goatee, and zero beige Tang suit.\n\noverall_soundscape:\nUpbeat Cantonese street-dance music and loud audience applause during the battle interaction.\n\nnon_diegetic_music:\nEnergetic Cantonese electronic street-dance track from <Video 1>.",
      "seed": 112402,
      "sourceMode": "generated_window",
      "video": null,
      "status": "终版成片内的时间段；独立片段未归档",
      "thumb": "media/img-b934b3a1ad102161ab04.jpg",
      "refs": [
        {
          "label": "11月24日_05_全片原片vs成片16拍1比1对比质检总表_V4",
          "src": "media/img-145d874fc68315167383.jpg"
        }
      ]
    },
    {
      "id": "W3",
      "title": "W3 · 生成接力窗",
      "start": 11.25,
      "duration": 4.291667,
      "framing": "生成窗 / 终版时间段",
      "action": "W3 · 生成接力窗",
      "prompt": "subject_definitions:\n<Video 1> is the source vertical Red Bull Dance Your Style battle video for the editing task.\n<Picture 1>, <Picture 2>, <Picture 3> are frames of the target video, all from [Shot 1].\n<Subject 1> is the main male street dancer visible in <Picture 1>, <Picture 2>, <Picture 3>: a sturdy 50-year-old East Asian male street dancer with neat short-cropped black crew-cut hair, completely clean-shaven face (zero white hair, zero white goatee, zero beard, zero glasses), warm confident smile, wearing an open-front relaxed warm ivory-cream heavyweight cotton-linen Neo-Chinese Mandarin-collar street jacket with matte ink-black Chinese frog buttons and black collar/cuff piping over a charcoal-black crewneck T-shirt with a thin silver chest pendant, deep charcoal-black relaxed wide-leg street-dance trousers, crisp black-and-white contrast retro low-top sneakers with white midsoles, and a dark metallic wristwatch on his left wrist. When seen from behind in back-view spins, the upper back of his ivory-cream Neo-Chinese jacket displays a bold clean ink-black and muted antique-gold stylized brush-calligraphy swirling cloud-dragon graphic emblem with pure neat short black hair at the nape (zero white hair).. He replaces ONLY the elderly white-haired bearded dancer in the beige Tang suit in <Video 1>.\n\nsummary:\n[video editing + character replacement] The same clean-shaven short-black-haired male dancer spins cleanly into full rear view showing the ink-black and antique-gold stylized cloud-dragon graphic emblem on the back of his ivory-cream Neo-Chinese jacket, raises both arms in victory, and turns back three-quarter front smiling. All original camera panning, framing, motion timing, red/amber and blue/cyan stage lighting, cheering arena crowd, Red Bull Dance Your Style Zurich banner, SONY ULT speakers, foreground phone silhouettes, and the blonde female dancer in <Video 1> are strictly kept.\n\nretention_analysis:\n- <Video 1> (source video editing): fully_preserved - Strictly lock the exact vertical camera framing, smooth stage panning, exact dancer limb timing and choreography, cheering crowd members, blonde female opponent in black leather jacket and caramel trousers, Red Bull banner text, SONY ULT speakers, foreground phone silhouettes, stage lighting, and audio timing.\n- <Picture 1> (appears in [Shot 1]): reference - a frame of the target video at 01.250s showing the exact target character look, ivory Neo-Chinese jacket, charcoal wide trousers, sneakers, lighting, and pose at that moment.\n- <Picture 2> (appears in [Shot 1]): reference - a frame of the target video at 03.125s showing the exact target character look, ivory Neo-Chinese jacket, charcoal wide trousers, sneakers, lighting, and pose at that moment.\n- <Picture 3> (appears in [Shot 1]): reference - a frame of the target video at 04.250s showing the exact target character look, ivory Neo-Chinese jacket, charcoal wide trousers, sneakers, lighting, and pose at that moment.\n- <Subject 1> (appears in [Shot 1]): fully_preserved - Maintain neat short black crew-cut hair, completely clean-shaven middle-aged East Asian face (zero white hair, zero white beard), warm ivory-cream open Neo-Chinese Mandarin-collar jacket with black frog buttons (and ink-black/gold cloud-dragon back emblem when turned away), charcoal crewneck T-shirt, charcoal wide-leg trousers, and black-and-white sneakers consistently across every frame.\n\ndetailed_description:\nA realistic vertical handheld live stage battle video with crisp motion fidelity and authentic Red Bull arena lighting.\n[Shot 1] {00:00.000 - 04.458s} Matching <Picture 1>, <Picture 2>, <Picture 3> and the exact motion trajectory and camera framing of <Video 1>, The opening 17 frames match the previous window seamlessly. From 00:00.700 to 00:02.100, <Subject 1> spins smoothly into 180-degree rear view with arms flung wide open showing the clean ink-black and antique-gold graphic emblem on his ivory jacket back and neat black short hair nape matching <Picture 1>. Around 00:03.125, <Subject 1> stays in rear view raising both bent arms and fists overhead toward the cheering crowd matching <Picture 2>. From 00:03.700 to 00:04.458, <Subject 1> turns cleanly back to three-quarter front-left view in a confident smiling battle finish with his black-haired clean-shaven face clearly visible matching <Picture 3>. In every frame from 00:00.000 to 04.458s, the central performer is this same clean-shaven short-black-haired <Subject 1> in his warm ivory Neo-Chinese jacket and dark charcoal streetwear, with zero white hair, zero white goatee, and zero beige Tang suit.\n\noverall_soundscape:\nEnergetic Cantonese dance music track and climactic crowd cheers at the finale.\n\nnon_diegetic_music:\nEnergetic Cantonese electronic street-dance track from <Video 1>.",
      "seed": 112403,
      "sourceMode": "generated_window",
      "video": null,
      "status": "终版成片内的时间段；独立片段未归档",
      "thumb": "media/img-4b3393c3ccb46580010e.jpg",
      "refs": [
        {
          "label": "11月24日_05_全片原片vs成片16拍1比1对比质检总表_V4",
          "src": "media/img-145d874fc68315167383.jpg"
        }
      ]
    }
  ],
  "generation": {
    "model": "MiniMax H3 Viggle Remake + FaceFusion",
    "params": [
      {
        "k": "终版规格",
        "v": "1080×1920 · 24/1 · 15.542s"
      },
      {
        "k": "版本",
        "v": "V4"
      }
    ],
    "notes": [
      "meta.generated 统计生产计划明确的生成窗/替换镜段；只在拥有独立成片文件时才给逐镜 video。",
      "逐镜 prompt 为源脚本函数和源计划重建的文本，不等同于平台提交日志逐字存证。",
      "四窗接力，V4 原生 24fps 消除 RIFE 重影；原曲伴奏保留。"
    ]
  },
  "deliverables": [
    {
      "name": "11月24日_红牛街舞广西仔_图2图3新中式国潮造型_A机ViggleH3成片_V4无鬼影自然肤色_1080p.mp4",
      "src": "https://github.com/aikingtai-ctrl/jintai-film-showcase/releases/download/media-v1/redbull-guangxi-dance-v4-16s--d5c2870c89ac4f6989a2.mp4",
      "note": "V4 终版 · 15.542s"
    }
  ]
});
