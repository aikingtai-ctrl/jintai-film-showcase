window.registerProject({
  "id": "pool-fall-businessman-v2-15s",
  "title": "售楼部泳池落水｜西装男士与 kit 音色｜V2",
  "subtitle": "2026-11-23 · V2 · 已验收本地终版",
  "logline": "V2 锁焦透视；4 窗连续角色替换与音色处理。",
  "date": "2026-11-23",
  "tags": [
    "V2",
    "已生成",
    "终版归档",
    "16:9",
    "MiniMax H3 Viggle Remake"
  ],
  "model": "MiniMax H3 Viggle Remake + FaceFusion + kit",
  "modelShort": "MiniMax H3 Viggle Remake",
  "poster": "media/img-54af89e83373a80ecdb3.jpg",
  "film": {
    "src": "https://github.com/aikingtai-ctrl/jintai-film-showcase/releases/download/media-v1/pool-fall-businessman-v2-15s--97d21ac7294a639cfeeb.mp4",
    "duration": 15.083333,
    "width": 1280,
    "height": 720,
    "fps": "24/1"
  },
  "meta": {
    "shots": 4,
    "generated": 4,
    "durationSec": 15.083333,
    "resolution": "1280×720",
    "fps": "24/1",
    "aspect": "16:9",
    "style": "V2 锁焦透视；4 窗连续角色替换与音色处理。"
  },
  "synopsis": [
    "V2 锁焦透视；4 窗连续角色替换与音色处理。",
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
      "tool": "MiniMax H3 Viggle Remake + FaceFusion + kit",
      "note": "V2 终版；QA 图卡和本地来源账本已归档。"
    }
  ],
  "props": [
    {
      "id": "QA01",
      "name": "11月23日_01_售楼部泳池落水_原片vs成片全片12拍1比1对比质检板",
      "image": "media/img-81fc49ff2f2104c78697.jpg",
      "desc": "V2 终版验收图卡；来源与哈希见本地账本。"
    },
    {
      "id": "QA02",
      "name": "11月23日_02_售楼部泳池落水_干湿过渡与露脸特写及接缝核验板",
      "image": "media/img-f885a15907ab6f4afe48.jpg",
      "desc": "V2 终版验收图卡；来源与哈希见本地账本。"
    },
    {
      "id": "QA03",
      "name": "11月23日_03_售楼部泳池落水_V1与V2焦距与透视比例1比1校正对比板",
      "image": "media/img-d62d6c464afec6b07fce.jpg",
      "desc": "V2 终版验收图卡；来源与哈希见本地账本。"
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
      "prompt": "subject_definitions:\n<Video 1> is the source indoor swimming pool surveillance video for the editing task.\n<Picture 1>, <Picture 2>, <Picture 3>, <Picture 4> are frames of the target video, all from [Shot 1].\n<Subject 1> is the businessman visible in <Picture 1>, <Picture 2>, <Picture 3>, <Picture 4>: a middle-aged East Asian businessman with bareheaded short cropped black hair (zero beret, zero long hair), tailored dark charcoal wool suit jacket, pale blue collared dress shirt, dark charcoal suit trousers, black leather derby shoes, carrying a black leather men's briefcase in his left hand and holding a black smartphone to his right ear. He is dry from 00:00.000 to 00:02.500 and becomes soaking wet with matted wet dark hair and soaked dark charcoal fabric during and after the water splash. He replaces the woman in <Video 1>.\n\nsummary:\n[video editing + character replacement] A dry middle-aged businessman in a tailored dark charcoal suit walks along an indoor pool edge on a phone call, steps into the pool with a huge white water splash, and surfaces soaking wet. The exact distant wide-angle high-mounted CCTV focal length, steep downward perspective, pool architecture, turquoise water, caustics, splash physics, camera micro-motion, timing, and bottom-left Chinese text watermark of <Video 1> are strictly kept.\n\nretention_analysis:\n- <Video 1> (source video editing): fully_preserved - Strictly lock the exact distant wide-angle ceiling-mounted CCTV camera focal length, steep downward perspective foreshortening, uniform surveillance optical softness, zero zoom-in, zero focal drift, compact small human bounding scale matching <Video 1>, exact motion trajectory, splash dynamics, tiled deck, lifeguard chair, lounge chairs, lighting, timing, and bottom-left white watermark.\n- <Picture 1> (appears in [Shot 1]): reference - a frame of the target video at 00.000s showing the exact target character look, suit, scale, and lighting at that moment.\n- <Picture 2> (appears in [Shot 1]): reference - a frame of the target video at 01.958s showing the exact target character look, suit, scale, and lighting at that moment.\n- <Picture 3> (appears in [Shot 1]): reference - a frame of the target video at 03.042s showing the exact target character look, suit, scale, and lighting at that moment.\n- <Picture 4> (appears in [Shot 1]): reference - a frame of the target video at 04.208s showing the exact target character look, suit, scale, and lighting at that moment.\n- <Subject 1> (appears in [Shot 1]): fully_preserved - Maintain bareheaded short black hair, dark charcoal business suit, pale blue shirt, black derby shoes, black leather briefcase, zero beret, consistent compact wide-angle scale matching <Video 1> and {pic_list}, and consistent facial identity in every frame.\n\ndetailed_description:\nA realistic fixed distant high-angle wide-angle indoor swimming pool CCTV surveillance video with uniform surveillance lens softness and crisp authentic scene geometry.\n[Shot 1] {00:00.000 - 04.458s} Matching <Picture 1>, <Picture 2>, <Picture 3>, <Picture 4> and the exact small human scale and camera focal length of <Video 1>, From 00:00.000 to 00:02.500, <Subject 1> walks dry along the blue tiled pool edge holding his black smartphone to his right ear and black briefcase in his left hand, seen from high-angle CCTV rear-three-quarter view. Around 00:02.600 he missteps off the dark stone coping and plunges into the clear blue pool amid erupting white water splash spray. From 00:03.200 to 00:04.458 he churns inside the bright white foam and ripples with wet dark short hair and soaked dark charcoal suit. In every frame from 00:00.000 to 04.458s, the person is this same businessman <Subject 1> at the exact compact body height and perspective foreshortening of <Video 1>, with zero beret, zero woman's plaid coat, and zero focal zoom drift.\n\noverall_soundscape:\nIndoor tiled swimming pool hall ambience, quiet footsteps, loud water splash at entry, and churning pool water.\n\nnon_diegetic_music:\nNone.",
      "seed": 2026112310,
      "sourceMode": "generated_window",
      "video": null,
      "status": "终版成片内的时间段；独立片段未归档",
      "thumb": "media/img-d8b06e8837ef7bea8bff.jpg",
      "refs": [
        {
          "label": "11月23日_01_售楼部泳池落水_原片vs成片全片12拍1比1对比质检板",
          "src": "media/img-81fc49ff2f2104c78697.jpg"
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
      "prompt": "subject_definitions:\n<Video 1> is the source indoor swimming pool surveillance video for the editing task.\n<Picture 1>, <Picture 2>, <Picture 3> are frames of the target video, all from [Shot 1].\n<Subject 1> is the businessman visible in <Picture 1>, <Picture 2>, <Picture 3>: the same bareheaded middle-aged East Asian businessman with wet matted short black hair (zero beret, zero long hair), clean-shaven face, soaking-wet dark obsidian-charcoal suit jacket over damp pale blue dress shirt, wet dark charcoal trousers, and glossy wet black leather briefcase. He replaces the woman in <Video 1>.\n\nsummary:\n[video editing + character replacement] The soaking-wet middle-aged businessman in a dark charcoal suit pushes his wet briefcase onto the dark pool rim and climbs out onto the poolside coping. The exact distant wide-angle high-mounted CCTV focal length, steep downward perspective, pool architecture, turquoise water, caustics, splash physics, camera micro-motion, timing, and bottom-left Chinese text watermark of <Video 1> are strictly kept.\n\nretention_analysis:\n- <Video 1> (source video editing): fully_preserved - Strictly lock the exact distant wide-angle ceiling-mounted CCTV camera focal length, steep downward perspective foreshortening, uniform surveillance optical softness, zero zoom-in, zero focal drift, compact small human bounding scale matching <Video 1>, exact motion trajectory, splash dynamics, tiled deck, lifeguard chair, lounge chairs, lighting, timing, and bottom-left white watermark.\n- <Picture 1> (appears in [Shot 1]): reference - a frame of the target video at 01.375s showing the exact target character look, suit, scale, and lighting at that moment.\n- <Picture 2> (appears in [Shot 1]): reference - a frame of the target video at 02.708s showing the exact target character look, suit, scale, and lighting at that moment.\n- <Picture 3> (appears in [Shot 1]): reference - a frame of the target video at 04.042s showing the exact target character look, suit, scale, and lighting at that moment.\n- <Subject 1> (appears in [Shot 1]): fully_preserved - Maintain bareheaded short black hair, dark charcoal business suit, pale blue shirt, black derby shoes, black leather briefcase, zero beret, consistent compact wide-angle scale matching <Video 1> and {pic_list}, and consistent facial identity in every frame.\n\ndetailed_description:\nA realistic fixed distant high-angle wide-angle indoor swimming pool CCTV surveillance video with uniform surveillance lens softness and crisp authentic scene geometry.\n[Shot 1] {00:00.000 - 04.458s} Matching <Picture 1>, <Picture 2>, <Picture 3> and the exact small human scale and camera focal length of <Video 1>, The opening 17 frames match the previous window seamlessly. <Subject 1> swims toward the dark stone pool edge in churning blue water, pushes his wet black leather briefcase onto the pool coping, grips the dark stone rim with both soaked hands, and hoists his wet body out onto the poolside edge beside the briefcase. In every frame from 00:00.000 to 04.458s, the person is this same businessman <Subject 1> at the exact compact body height and perspective foreshortening of <Video 1>, with zero beret, zero woman's plaid coat, and zero focal zoom drift.\n\noverall_soundscape:\nIndoor swimming pool water sloshing, wet fabric draining, and damp hands bracing against pool stone.\n\nnon_diegetic_music:\nNone.",
      "seed": 2026112320,
      "sourceMode": "generated_window",
      "video": null,
      "status": "终版成片内的时间段；独立片段未归档",
      "thumb": "media/img-ff6db10c69ce857df21d.jpg",
      "refs": [
        {
          "label": "11月23日_01_售楼部泳池落水_原片vs成片全片12拍1比1对比质检板",
          "src": "media/img-81fc49ff2f2104c78697.jpg"
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
      "prompt": "subject_definitions:\n<Video 1> is the source indoor swimming pool surveillance video for the editing task.\n<Picture 1>, <Picture 2>, <Picture 3> are frames of the target video, all from [Shot 1].\n<Subject 1> is the businessman visible in <Picture 1>, <Picture 2>, <Picture 3>: the same bareheaded middle-aged East Asian businessman with wet matted short black hair (zero beret, zero long hair), clean-shaven face matching <Picture 3>, soaking-wet dark charcoal suit jacket over damp pale blue collared dress shirt, wet dark charcoal suit trousers, wet black leather derby shoes, and wet black leather briefcase. He replaces the woman in <Video 1>.\n\nsummary:\n[video editing + character replacement] The soaking-wet businessman in a dark charcoal suit climbs onto the pool coping, half-crouches lifting his black briefcase on the tiled deck edge, and matches the compact wide-angle CCTV scale of <Video 1>. The exact distant wide-angle high-mounted CCTV focal length, steep downward perspective, pool architecture, turquoise water, caustics, splash physics, camera micro-motion, timing, and bottom-left Chinese text watermark of <Video 1> are strictly kept.\n\nretention_analysis:\n- <Video 1> (source video editing): fully_preserved - Strictly lock the exact distant wide-angle ceiling-mounted CCTV camera focal length, steep downward perspective foreshortening, uniform surveillance optical softness, zero zoom-in, zero focal drift, compact small human bounding scale matching <Video 1>, exact motion trajectory, splash dynamics, tiled deck, lifeguard chair, lounge chairs, lighting, timing, and bottom-left white watermark.\n- <Picture 1> (appears in [Shot 1]): reference - a frame of the target video at 01.458s showing the exact target character look, suit, scale, and lighting at that moment.\n- <Picture 2> (appears in [Shot 1]): reference - a frame of the target video at 03.042s showing the exact target character look, suit, scale, and lighting at that moment.\n- <Picture 3> (appears in [Shot 1]): reference - a frame of the target video at 04.292s showing the exact target character look, suit, scale, and lighting at that moment.\n- <Subject 1> (appears in [Shot 1]): fully_preserved - Maintain bareheaded short black hair, dark charcoal business suit, pale blue shirt, black derby shoes, black leather briefcase, zero beret, consistent compact wide-angle scale matching <Video 1> and {pic_list}, and consistent facial identity in every frame.\n\ndetailed_description:\nA realistic fixed distant high-angle wide-angle indoor swimming pool CCTV surveillance video with uniform surveillance lens softness and crisp authentic scene geometry.\n[Shot 1] {00:00.000 - 04.458s} Matching <Picture 1>, <Picture 2>, <Picture 3> and the exact small human scale and camera focal length of <Video 1>, The opening 17 frames match the previous window seamlessly. <Subject 1> crouches low on the dark stone coping climbing onto the blue tiled pool edge, stays half-crouched with one knee bent as he lifts his wet black leather briefcase near knee level, and keeps his compact distant CCTV body height and head-top position matching <Picture 3> and <Video 1> with zero premature standing or scale enlargement. In every frame from 00:00.000 to 04.458s, the person is this same businessman <Subject 1> at the exact compact body height and perspective foreshortening of <Video 1>, with zero beret, zero woman's plaid coat, and zero focal zoom drift.\n\noverall_soundscape:\nWater dripping onto tiled deck, soft wet footsteps, and quiet indoor pool hall ambience.\n\nnon_diegetic_music:\nNone.",
      "seed": 2026112330,
      "sourceMode": "generated_window",
      "video": null,
      "status": "终版成片内的时间段；独立片段未归档",
      "thumb": "media/img-cd3cd7928a30ebbfb981.jpg",
      "refs": [
        {
          "label": "11月23日_01_售楼部泳池落水_原片vs成片全片12拍1比1对比质检板",
          "src": "media/img-81fc49ff2f2104c78697.jpg"
        }
      ]
    },
    {
      "id": "W3",
      "title": "W3 · 生成接力窗",
      "start": 11.25,
      "duration": 3.833333,
      "framing": "生成窗 / 终版时间段",
      "action": "W3 · 生成接力窗",
      "prompt": "subject_definitions:\n<Video 1> is the source indoor swimming pool surveillance video for the editing task.\n<Picture 1>, <Picture 2>, <Picture 3> are frames of the target video, all from [Shot 1].\n<Subject 1> is the businessman visible in <Picture 1>, <Picture 2>, <Picture 3>: the same bareheaded middle-aged East Asian businessman with wet slicked short black hair (zero beret, zero long hair), calm clean-shaven middle-aged East Asian face matching <Picture 1> and <Picture 2>, soaking-wet dark charcoal suit jacket over damp pale blue dress shirt, wet dark charcoal trousers, wet black leather derby shoes, black leather briefcase in his left hand, and black smartphone held to his right ear. He replaces the woman in <Video 1>.\n\nsummary:\n[video editing + character replacement] The soaking-wet businessman in a dark charcoal suit strides calmly across the blue tiled deck holding his briefcase and phone, walking past the bottom-left watermark toward the exit. The exact distant wide-angle high-mounted CCTV focal length, steep downward perspective, pool architecture, turquoise water, caustics, splash physics, camera micro-motion, timing, and bottom-left Chinese text watermark of <Video 1> are strictly kept.\n\nretention_analysis:\n- <Video 1> (source video editing): fully_preserved - Strictly lock the exact distant wide-angle ceiling-mounted CCTV camera focal length, steep downward perspective foreshortening, uniform surveillance optical softness, zero zoom-in, zero focal drift, compact small human bounding scale matching <Video 1>, exact motion trajectory, splash dynamics, tiled deck, lifeguard chair, lounge chairs, lighting, timing, and bottom-left white watermark.\n- <Picture 1> (appears in [Shot 1]): reference - a frame of the target video at 01.708s showing the exact target character look, suit, scale, and lighting at that moment.\n- <Picture 2> (appears in [Shot 1]): reference - a frame of the target video at 02.792s showing the exact target character look, suit, scale, and lighting at that moment.\n- <Picture 3> (appears in [Shot 1]): reference - a frame of the target video at 03.375s showing the exact target character look, suit, scale, and lighting at that moment.\n- <Subject 1> (appears in [Shot 1]): fully_preserved - Maintain bareheaded short black hair, dark charcoal business suit, pale blue shirt, black derby shoes, black leather briefcase, zero beret, consistent compact wide-angle scale matching <Video 1> and {pic_list}, and consistent facial identity in every frame.\n\ndetailed_description:\nA realistic fixed distant high-angle wide-angle indoor swimming pool CCTV surveillance video with uniform surveillance lens softness and crisp authentic scene geometry.\n[Shot 1] {00:00.000 - 04.458s} Matching <Picture 1>, <Picture 2>, <Picture 3> and the exact small human scale and camera focal length of <Video 1>, The opening 17 frames match the previous window seamlessly. <Subject 1> strides steadily toward the foreground-left across the blue tiled deck in clear three-quarter front view while speaking calmly into his smartphone <d>[unclear]</d>, passing calmly behind the semi-transparent white Chinese CCTV text watermark in the bottom-left corner toward the left edge. In every frame from 00:00.000 to 04.458s, the person is this same businessman <Subject 1> at the exact compact body height and perspective foreshortening of <Video 1>, with zero beret, zero woman's plaid coat, and zero focal zoom drift.\n\noverall_soundscape:\nCalm spoken voice over phone, steady wet leather shoe footsteps on tiles, and soft indoor pool echo.\n\nnon_diegetic_music:\nNone.",
      "seed": 2026112340,
      "sourceMode": "generated_window",
      "video": null,
      "status": "终版成片内的时间段；独立片段未归档",
      "thumb": "media/img-e7f0ad5f3ba9ba30443b.jpg",
      "refs": [
        {
          "label": "11月23日_01_售楼部泳池落水_原片vs成片全片12拍1比1对比质检板",
          "src": "media/img-81fc49ff2f2104c78697.jpg"
        }
      ]
    }
  ],
  "generation": {
    "model": "MiniMax H3 Viggle Remake + FaceFusion + kit",
    "params": [
      {
        "k": "终版规格",
        "v": "1280×720 · 24/1 · 15.083s"
      },
      {
        "k": "版本",
        "v": "V2"
      }
    ],
    "notes": [
      "meta.generated 统计生产计划明确的生成窗/替换镜段；只在拥有独立成片文件时才给逐镜 video。",
      "逐镜 prompt 为源脚本函数和源计划重建的文本，不等同于平台提交日志逐字存证。",
      "V2 锁焦透视；4 窗连续角色替换与音色处理。"
    ]
  },
  "deliverables": [
    {
      "name": "11月23日_售楼部泳池落水_图1精英西装男士_kit音色_A机ViggleH3成片_720p.mp4",
      "src": "https://github.com/aikingtai-ctrl/jintai-film-showcase/releases/download/media-v1/pool-fall-businessman-v2-15s--97d21ac7294a639cfeeb.mp4",
      "note": "V2 终版 · 15.083s"
    }
  ]
});
