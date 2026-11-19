window.registerProject({
  "id": "h3-micro-expression-dual-15s",
  "title": "五阶段微表情特写｜双男主零蒙版净肤版｜15秒",
  "subtitle": "根除侧脸暗部量化麻点 · 眼神先行五拍表演链 · 双男主 × 双模式 4 条对照归档",
  "logline": "针对 AI 特写常见的侧脸 25° 暗部痘坑与 2D 蒙版清晰度断层，通过 A 机 5 卡同源对照锁定扩散侧三大麻点根源，切换至 100% 零蒙版纯原生生成栈（3D bf16 平滑放大器 + fp16 VideoVAE + 母图发顶解混），分别产出中年眼镜男士与黑 T 恤青年男士各两条 15 秒细腻微表情成片。",
  "date": "2026-11-04",
  "tags": [
    "H3",
    "微表情",
    "角色替换",
    "净肤治理",
    "双男主对照",
    "15秒",
    "竖屏 9:16",
    "待用户审片"
  ],
  "model": "A 机 FeiHou MiniMax H3 Remix HSA v0.7 + Ref2V Turbo 8-Step + 3D Latent Upscaler bf16 + fp16 VAE",
  "modelShort": "H3",
  "poster": "media/img-72368ed87990e1ad97bb.jpg",
  "film": {
    "src": "https://github.com/aikingtai-ctrl/jintai-film-showcase/releases/download/media-v1/h3-micro-expression-dual-15s--1bd4d42c4c824d9e7062.mp4",
    "duration": 15,
    "width": 1080,
    "height": 1920,
    "fps": "24"
  },
  "meta": {
    "shots": 4,
    "generated": 4,
    "durationSec": 15,
    "resolution": "1080×1920",
    "fps": "24",
    "aspect": "9:16",
    "style": "85mm 电影人像特写，眼动先于肌肉 0.5 秒（Eye-first, Muscle-second, Breath-settled），全画面 0 蒙版、0 接缝断层。"
  },
  "props": [
    {
      "id": "QC-DUAL",
      "name": "双男主 15 秒五阶段微表情净肤版对照检视板",
      "desc": "人物 A 与人物 B 在五个情绪阶段的肤质与眼神光对照。",
      "image": "media/img-9cb7cefed62f4ffab7d1.jpg"
    },
    {
      "id": "QC-DIFF",
      "name": "净肤根因治理前后对照检视板",
      "desc": "淘汰 Dasiwa/DMAD/LMS/int8VAE 麻点前后的 1:1 面部放大比对。",
      "image": "media/img-4aaa598c3b9e819a4d03.jpg"
    }
  ],
  "shots": [
    {
      "id": "S01",
      "title": "人物 A（中年眼镜男士）· 原片光影替换净肤版",
      "start": 0,
      "duration": 15,
      "framing": "85mm 竖屏人物肖像近景特写 (9:16)",
      "camera": "柔和侧前窗光 · 自然呼吸感固定肖像机位",
      "action": "0–2.5s 平静凝视 → 2.5–5.5s 眼神先暖、嘴角微扬浅笑 → 5.5–9.5s 视线先行带动 25° 右转沉思 → 9.5–12.2s 慢速眨眼静思 → 12.2–15.0s 轻呼气余韵收束。",
      "prompt": "Style: Live-action photorealistic 85mm full-frame cinema close-up portrait, soft diffused indoor window key light, clear smooth healthy skin tone, subtle film aesthetic.\n\nCharacter Swap & Identity Lock: Replace the young woman in <Video 1> completely with the East Asian middle-aged man in his early fifties from <Picture 1>. Preserve every facial and wardrobe detail from <Picture 1>: his warm rounded-oval face with clear, smooth, even-toned healthy skin, soft natural cheek contours, light salt-and-pepper stubble above his upper lip and on his chin, thick tousled short black hair with subtle silver-grey strands at the temples, thin silver-grey rectangular metal-frame eyeglasses with clear nose pads resting naturally on his nose bridge, and his dark charcoal-grey collared polo shirt with an open placket and one visible dark button.\n\nLighting & Framing Continuity: Match the exact dark charcoal matte studio backdrop, soft diffused side-front window key light coming from camera-left with gentle shadow roll-off across his smooth cheek skin, crisp rectangular catchlights in both dark brown pupils behind his eyeglasses, intimate vertical 9:16 close-up framing, shallow depth of field, and subtle organic camera breathing of <Video 1>.\n\n15-Second Micro-Expression Progression (eye-first, muscle-second, breath-settled):\n- 0.0s to 2.5s (Calm Grounded Opening): Facing the camera in relaxed composure, his upper eyelids rest comfortably, his pupils focus steadily onto the lens through his thin metal eyeglasses, his lips rest gently closed, and his chest rises slightly with a quiet breath.\n- 2.5s to 5.5s (Subtle Warm Recognition): His gaze softens and warms first, followed half a second later by both corners of his closed lips drawing slightly upward and his smooth cheekbones lifting gently by a few millimeters into an understated, warm closed-mouth smile.\n- 5.5s to 9.5s (Contemplative Turn): His eyes shift smoothly toward camera-right first, followed naturally by a gentle 25-degree head turn toward camera-right into a three-quarter close-up; his inner brows settle slightly in quiet thought while his lips part by two millimeters with a soft, silent intake of breath.\n- 9.5s to 12.2s (Quiet Reflection): Holding the three-quarter angle toward camera-right, his upper eyelids lower unhurriedly in a single slow, contemplative blink and reopen calmly as his gaze holds steady off-screen right and his lips softly close again.\n- 12.2s to 15.0s (Gradual Settling Afterglow): The faint warmth at the corners of his mouth gradually softens step by step, his smooth cheek and orbicularis muscles relax into calm stillness, and his shoulders settle slightly on a quiet exhale, leaving a grounded, serene emotional afterglow until the final frame.\n\nCamera: Steady 85mm portrait close-up matching <Video 1>'s framing and subtle natural breathing motion, keeping sharp focus on his eyes, thin metal eyeglasses, clean smooth facial skin, and subtle stubble.\nSound: Quiet, intimate indoor studio room tone with faint natural breathing presence.\nMusic: N/A.",
      "refs": [
        {
          "label": "双男主净肤对照检视板",
          "src": "media/img-9cb7cefed62f4ffab7d1.jpg"
        }
      ],
      "video": "https://github.com/aikingtai-ctrl/jintai-film-showcase/releases/download/media-v1/h3-micro-expression-dual-15s--1bd4d42c4c824d9e7062.mp4",
      "thumb": "assets/shots/S01.jpg",
      "model": "FeiHou_H3_Remix_v0.7 + 3d_bf16 upscaler + fp16 VAE",
      "params": "15s · 1080×1920 · 24fps · Ref2VA 原片光影替换 + 零蒙版原生净肤",
      "status": "已生成"
    },
    {
      "id": "S02",
      "title": "人物 A（中年眼镜男士）· 纯单图五阶段原生呼吸版",
      "start": 0,
      "duration": 15,
      "framing": "85mm 竖屏人物肖像近景特写 (9:16)",
      "camera": "柔和侧前窗光 · 自然呼吸感固定肖像机位",
      "action": "0–2.5s 平静凝视 → 2.5–5.5s 眼神先暖、嘴角微扬浅笑 → 5.5–9.5s 视线先行带动 25° 右转沉思 → 9.5–12.2s 慢速眨眼静思 → 12.2–15.0s 轻呼气余韵收束。",
      "prompt": "Style: Live-action photorealistic 85mm full-frame cinema close-up portrait, soft diffused indoor window key light, clear smooth healthy skin tone, subtle film aesthetic.\n\nCharacter Swap & Identity Lock: Replace the young woman in <Video 1> completely with the East Asian middle-aged man in his early fifties from <Picture 1>. Preserve every facial and wardrobe detail from <Picture 1>: his warm rounded-oval face with clear, smooth, even-toned healthy skin, soft natural cheek contours, light salt-and-pepper stubble above his upper lip and on his chin, thick tousled short black hair with subtle silver-grey strands at the temples, thin silver-grey rectangular metal-frame eyeglasses with clear nose pads resting naturally on his nose bridge, and his dark charcoal-grey collared polo shirt with an open placket and one visible dark button.\n\nLighting & Framing Continuity: Match the exact dark charcoal matte studio backdrop, soft diffused side-front window key light coming from camera-left with gentle shadow roll-off across his smooth cheek skin, crisp rectangular catchlights in both dark brown pupils behind his eyeglasses, intimate vertical 9:16 close-up framing, shallow depth of field, and subtle organic camera breathing of <Video 1>.\n\n15-Second Micro-Expression Progression (eye-first, muscle-second, breath-settled):\n- 0.0s to 2.5s (Calm Grounded Opening): Facing the camera in relaxed composure, his upper eyelids rest comfortably, his pupils focus steadily onto the lens through his thin metal eyeglasses, his lips rest gently closed, and his chest rises slightly with a quiet breath.\n- 2.5s to 5.5s (Subtle Warm Recognition): His gaze softens and warms first, followed half a second later by both corners of his closed lips drawing slightly upward and his smooth cheekbones lifting gently by a few millimeters into an understated, warm closed-mouth smile.\n- 5.5s to 9.5s (Contemplative Turn): His eyes shift smoothly toward camera-right first, followed naturally by a gentle 25-degree head turn toward camera-right into a three-quarter close-up; his inner brows settle slightly in quiet thought while his lips part by two millimeters with a soft, silent intake of breath.\n- 9.5s to 12.2s (Quiet Reflection): Holding the three-quarter angle toward camera-right, his upper eyelids lower unhurriedly in a single slow, contemplative blink and reopen calmly as his gaze holds steady off-screen right and his lips softly close again.\n- 12.2s to 15.0s (Gradual Settling Afterglow): The faint warmth at the corners of his mouth gradually softens step by step, his smooth cheek and orbicularis muscles relax into calm stillness, and his shoulders settle slightly on a quiet exhale, leaving a grounded, serene emotional afterglow until the final frame.\n\nCamera: Steady 85mm portrait close-up matching <Video 1>'s framing and subtle natural breathing motion, keeping sharp focus on his eyes, thin metal eyeglasses, clean smooth facial skin, and subtle stubble.\nSound: Quiet, intimate indoor studio room tone with faint natural breathing presence.\nMusic: N/A.",
      "refs": [
        {
          "label": "双男主净肤对照检视板",
          "src": "media/img-9cb7cefed62f4ffab7d1.jpg"
        }
      ],
      "video": "https://github.com/aikingtai-ctrl/jintai-film-showcase/releases/download/media-v1/h3-micro-expression-dual-15s--1fa7e70cee2a3d4948f8.mp4",
      "thumb": "assets/shots/S02.jpg",
      "model": "FeiHou_H3_Remix_v0.7 + 3d_bf16 upscaler + fp16 VAE",
      "params": "15s · 1080×1920 · 24fps · 纯单图 Ref2VA 自由五阶段微表情",
      "status": "已生成"
    },
    {
      "id": "S03",
      "title": "人物 B（黑T恤青年男士）· 原片光影替换净肤版",
      "start": 0,
      "duration": 15,
      "framing": "85mm 竖屏人物肖像近景特写 (9:16)",
      "camera": "柔和侧前窗光 · 自然呼吸感固定肖像机位",
      "action": "0–2.5s 平静凝视 → 2.5–5.5s 眼神先暖、嘴角微扬浅笑 → 5.5–9.5s 视线先行带动 25° 右转沉思 → 9.5–12.2s 慢速眨眼静思 → 12.2–15.0s 轻呼气余韵收束。",
      "prompt": "Style: Live-action photorealistic 85mm full-frame cinema close-up portrait, soft diffused indoor window key light, clear smooth healthy skin tone, subtle film aesthetic.\n\nCharacter Swap & Identity Lock: Replace the young woman in <Video 1> completely with the East Asian young man in his mid-twenties from <Picture 1>. Preserve every facial and wardrobe detail from <Picture 1>: his clean-shaven warm oval-square face with clear, smooth, even-toned healthy skin, defined jawline, natural double-fold eyelids with expressive dark brown eyes, natural eyebrows, straight rounded nose, distinct philtrum, thick voluminous textured short black hair swept upward at the crown with neat tapered sides, and his matte black crew-neck t-shirt.\n\nLighting & Framing Continuity: Match the exact dark charcoal matte studio backdrop, soft diffused side-front window key light coming from camera-left with gentle shadow roll-off across his smooth clean-shaven cheek, crisp rectangular catchlights in both dark brown pupils, intimate vertical 9:16 close-up framing, shallow depth of field, and subtle organic camera breathing of <Video 1>.\n\n15-Second Micro-Expression Progression (eye-first, muscle-second, breath-settled):\n- 0.0s to 2.5s (Calm Grounded Opening): Facing the camera in relaxed composure, his upper eyelids rest comfortably, his dark brown pupils focus steadily onto the lens, his lips rest gently closed, and his chest rises slightly with a quiet breath.\n- 2.5s to 5.5s (Subtle Warm Recognition): His gaze softens and warms first, followed half a second later by both corners of his closed lips drawing slightly upward and his smooth cheekbones lifting gently by a few millimeters into an understated, warm closed-mouth smile.\n- 5.5s to 9.5s (Contemplative Turn): His eyes shift smoothly toward camera-right first, followed naturally by a gentle 25-degree head turn toward camera-right into a three-quarter close-up; his inner brows settle slightly in quiet thought while his lips part by two millimeters with a soft, silent intake of breath.\n- 9.5s to 12.2s (Quiet Reflection): Holding the three-quarter angle toward camera-right, his upper eyelids lower unhurriedly in a single slow, contemplative blink and reopen calmly as his gaze holds steady off-screen right and his lips softly close again.\n- 12.2s to 15.0s (Gradual Settling Afterglow): The faint warmth at the corners of his mouth gradually softens step by step, his smooth cheek and orbicularis muscles relax into calm stillness, and his shoulders settle slightly on a quiet exhale, leaving a grounded, serene emotional afterglow until the final frame.\n\nCamera: Steady 85mm portrait close-up matching <Video 1>'s framing and subtle natural breathing motion, keeping sharp focus on his dark brown eyes, swept-up short black hair, and clear smooth clean-shaven skin.\nSound: Quiet, intimate indoor studio room tone with faint natural breathing presence.\nMusic: N/A.",
      "refs": [
        {
          "label": "双男主净肤对照检视板",
          "src": "media/img-9cb7cefed62f4ffab7d1.jpg"
        }
      ],
      "video": "https://github.com/aikingtai-ctrl/jintai-film-showcase/releases/download/media-v1/h3-micro-expression-dual-15s--457fbcc0d2353f051347.mp4",
      "thumb": "assets/shots/S03.jpg",
      "model": "FeiHou_H3_Remix_v0.7 + 3d_bf16 upscaler + fp16 VAE",
      "params": "15s · 1080×1920 · 24fps · Ref2VA 原片光影替换 + 零蒙版原生净肤",
      "status": "已生成"
    },
    {
      "id": "S04",
      "title": "人物 B（黑T恤青年男士）· 纯单图五阶段原生呼吸版",
      "start": 0,
      "duration": 15,
      "framing": "85mm 竖屏人物肖像近景特写 (9:16)",
      "camera": "柔和侧前窗光 · 自然呼吸感固定肖像机位",
      "action": "0–2.5s 平静凝视 → 2.5–5.5s 眼神先暖、嘴角微扬浅笑 → 5.5–9.5s 视线先行带动 25° 右转沉思 → 9.5–12.2s 慢速眨眼静思 → 12.2–15.0s 轻呼气余韵收束。",
      "prompt": "Style: Live-action photorealistic 85mm full-frame cinema close-up portrait, soft diffused indoor window key light, clear smooth healthy skin tone, subtle film aesthetic.\n\nCharacter Swap & Identity Lock: Replace the young woman in <Video 1> completely with the East Asian young man in his mid-twenties from <Picture 1>. Preserve every facial and wardrobe detail from <Picture 1>: his clean-shaven warm oval-square face with clear, smooth, even-toned healthy skin, defined jawline, natural double-fold eyelids with expressive dark brown eyes, natural eyebrows, straight rounded nose, distinct philtrum, thick voluminous textured short black hair swept upward at the crown with neat tapered sides, and his matte black crew-neck t-shirt.\n\nLighting & Framing Continuity: Match the exact dark charcoal matte studio backdrop, soft diffused side-front window key light coming from camera-left with gentle shadow roll-off across his smooth clean-shaven cheek, crisp rectangular catchlights in both dark brown pupils, intimate vertical 9:16 close-up framing, shallow depth of field, and subtle organic camera breathing of <Video 1>.\n\n15-Second Micro-Expression Progression (eye-first, muscle-second, breath-settled):\n- 0.0s to 2.5s (Calm Grounded Opening): Facing the camera in relaxed composure, his upper eyelids rest comfortably, his dark brown pupils focus steadily onto the lens, his lips rest gently closed, and his chest rises slightly with a quiet breath.\n- 2.5s to 5.5s (Subtle Warm Recognition): His gaze softens and warms first, followed half a second later by both corners of his closed lips drawing slightly upward and his smooth cheekbones lifting gently by a few millimeters into an understated, warm closed-mouth smile.\n- 5.5s to 9.5s (Contemplative Turn): His eyes shift smoothly toward camera-right first, followed naturally by a gentle 25-degree head turn toward camera-right into a three-quarter close-up; his inner brows settle slightly in quiet thought while his lips part by two millimeters with a soft, silent intake of breath.\n- 9.5s to 12.2s (Quiet Reflection): Holding the three-quarter angle toward camera-right, his upper eyelids lower unhurriedly in a single slow, contemplative blink and reopen calmly as his gaze holds steady off-screen right and his lips softly close again.\n- 12.2s to 15.0s (Gradual Settling Afterglow): The faint warmth at the corners of his mouth gradually softens step by step, his smooth cheek and orbicularis muscles relax into calm stillness, and his shoulders settle slightly on a quiet exhale, leaving a grounded, serene emotional afterglow until the final frame.\n\nCamera: Steady 85mm portrait close-up matching <Video 1>'s framing and subtle natural breathing motion, keeping sharp focus on his dark brown eyes, swept-up short black hair, and clear smooth clean-shaven skin.\nSound: Quiet, intimate indoor studio room tone with faint natural breathing presence.\nMusic: N/A.",
      "refs": [
        {
          "label": "双男主净肤对照检视板",
          "src": "media/img-9cb7cefed62f4ffab7d1.jpg"
        }
      ],
      "video": "https://github.com/aikingtai-ctrl/jintai-film-showcase/releases/download/media-v1/h3-micro-expression-dual-15s--9b28b4ea91d252c886e2.mp4",
      "thumb": "assets/shots/S04.jpg",
      "model": "FeiHou_H3_Remix_v0.7 + 3d_bf16 upscaler + fp16 VAE",
      "params": "15s · 1080×1920 · 24fps · 纯单图 Ref2VA 自由五阶段微表情",
      "status": "已生成"
    }
  ],
  "generation": {
    "model": "FeiHou_MiniMax-H3_Remix_HSA_v0.7 + SelfLiftH3Sampler (6+4=10)",
    "params": [
      {
        "k": "时长计法",
        "v": "4 条同命题双男主/双模式对照成片各 15.0s，作品库总时长只计主片 15 秒（不重复累加）"
      },
      {
        "k": "净肤三要素",
        "v": "移除 pores/moles 放大词 + SAM3.1 暗棚换底解混 + 3d_bf16 放大器配 fp16 VideoVAE"
      }
    ]
  }
});
