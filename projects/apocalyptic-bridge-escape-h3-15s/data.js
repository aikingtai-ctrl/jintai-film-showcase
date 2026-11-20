window.registerProject({
  "id": "apocalyptic-bridge-escape-h3-15s",
  "title": "末日断桥飞车｜图一男主末日皮夹克造型｜15秒",
  "subtitle": "A 机八卡 H3 二段式 1536×864 · 无人空车锚点防串脸 · 亚秒高潮镜 3× 时序展宽",
  "logline": "将 15 秒末日丧尸断桥飞车逃生实拍短片中的白人络腮胡驾驶员 100% 原生替换为图一华裔眼镜男士，量身定制重磅战损深棕牛皮机车夹克与露指战术手套，同步无痕清除全片左上角水印并完整保留后视镜 0.67 秒眼神突变高潮。",
  "date": "2026-11-05",
  "tags": [
    "H3",
    "A机8卡",
    "角色替换",
    "末日飞车",
    "造型设计",
    "去水印",
    "15秒",
    "16:9",
    "待用户审片"
  ],
  "model": "A 机 FeiHou MiniMax H3 Remix HSA v0.7 + Turbo 8-Step + 3D Latent Upscaler + MiniMaxRemover",
  "modelShort": "H3",
  "poster": "media/img-7078034ff29c236c33bb.jpg",
  "film": {
    "src": "https://github.com/aikingtai-ctrl/jintai-film-showcase/releases/download/media-v1/apocalyptic-bridge-escape-h3-15s--f370b1c85e7e92438b48.mp4",
    "duration": 15.041667,
    "width": 1920,
    "height": 1080,
    "fps": "24"
  },
  "meta": {
    "shots": 7,
    "generated": 1,
    "durationSec": 15.041667,
    "resolution": "1920×1080",
    "fps": "24",
    "aspect": "16:9",
    "style": "好莱坞末日废土公路逃生实拍质感，零后期 2D 换脸/磨皮蒙版，跨 4 机位锁定图一男士骨相、微卷黑短发与银色细框眼镜。"
  },
  "synopsis": [
    "全片共 7 个硬切镜头（精确 361 帧 / 15.04 秒）：车内右侧面丧尸砸窗惊呼猛打方向盘 → 两镜车外荒原高速倒车甩落丧尸 → 挡风玻璃正面紧握方向盘极速倒退 → 断桥悬崖边缘险险急刹 → 车内长舒一口气微笑 → 后视镜极特写双眼由笑转惊恐、丧尸利爪扑向镜头。",
    "针对多图编辑中原片白人络腮胡极易串脸的痛点，先擦除原驾驶员生成 100% 无人空车底板，再将图一男主三视角 #808080 灰底母图置于最高权重槽 image1 合成首帧锚点；针对仅 16 帧（0.67s）的后视镜高潮镜采用 3× 时序展宽跨过 3D VAE 4× 时间压缩瓶颈。"
  ],
  "concept": {
    "rules": [
      "零白人像素首帧锚点：先造空车底板再放 #808080 主角母图至 Picture 1，彻底根绝白人高眉骨与络腮胡残留。",
      "外景特技无痕去水印：不含正脸的 Shot 02/03/05 局部 512×256 经 MiniMaxRemover 时序擦除 TOPVIEW T1 水印后羽化贴回 1080p。",
      "亚秒高潮镜 3× 时序展宽：Shot 07（16 帧）渲染前 3× 展宽至 56 帧，渲染后 [::3] 精确抽回 16 帧保住瞳孔震颤与利爪划镜。"
    ],
    "directorMethod": "A 机 8×H100 四镜双种子（8801/8809）八路并发，一阶段 1024×576（5步）+ 1.5× 3D 潜空间二采 1536×864（5步），择优封装原片立体声效。"
  },
  "pipeline": [
    {
      "stage": "① 外景空镜时序去水印",
      "tool": "A 机 :8192–8194 Wan2.1-MiniMaxRemover-1.3B",
      "note": "擦除左上角 TOPVIEW T1 水印与首尾录屏 UI 污染。"
    },
    {
      "stage": "② 三视角灰底母图与空车首帧板",
      "tool": "Qwen-Image-Edit-2511 + SAM 3.1",
      "note": "产出正面半身、侧面驾驶、全身三张 #808080 母图及四镜首帧锚点。"
    },
    {
      "stage": "③ 八卡并发 H3 二段式渲染",
      "tool": "FeiHou H3 Remix v0.7 + 3D Latent Upscaler",
      "note": "4 主角镜 × 2 种子并发，含 Shot 07 3× 时序展宽还原。"
    },
    {
      "stage": "④ 逐帧对齐封装与十二帧抽检",
      "tool": "FFmpeg 1080p24 + AAC 48kHz",
      "note": "全片解码 0 错误，声画同步清晰；用户主观审片待确认。"
    }
  ],
  "characters": [
    {
      "id": "CHR-DRIVER",
      "name": "图一男主 · 末日飞车幸存者",
      "role": "全片唯一人类主角",
      "look": "华裔中年男士，圆润温和脸型、微卷黑短发、银色细金属半框眼镜；穿深棕色重磅做旧牛皮立领机车夹克、炭灰水洗亨利领内搭、黑色露指战术皮手套。",
      "image": "media/img-3486806fe4daefb3d99a.png",
      "ref": "media/img-614aaa618a246ae4fe73.png",
      "uses": 4
    }
  ],
  "props": [
    {
      "id": "CARD-01",
      "name": "主角末日飞车手五联造型定妆总卡",
      "desc": "2240×1460 五联定妆总卡（三视角灰底母图 + 战损皮夹克材质细节）。",
      "image": "media/img-a98f15d01de975a4fff3.png"
    },
    {
      "id": "CARD-02",
      "name": "四镜首帧定妆目标板合集",
      "desc": "Shot 01 / 04 / 06 / 07 零白人像素车内首帧锚点合集。",
      "image": "media/img-f6d7e35014dd621e5422.jpg"
    },
    {
      "id": "QC-12",
      "name": "成片十二帧跨镜抽检表",
      "desc": "覆盖全部 7 镜的骨相、眼镜、手套与去水印一致性核验表。",
      "image": "media/img-256cbc13afd6fd031caa.jpg"
    }
  ],
  "shots": [
    {
      "id": "S01",
      "title": "车内右侧面 · 丧尸砸窗惊呼猛打方向盘",
      "start": 0,
      "duration": 2.5,
      "framing": "车内右侧面近景",
      "camera": "手持剧烈震动跟拍",
      "cast": [
        "图一男主（末日飞车幸存者）"
      ],
      "action": "荒原冷灰日光透入车窗，丧尸扑砸右窗玻璃，图一男主身穿深棕做旧皮夹克与露指手套惊呼猛打方向盘急退。",
      "prompt": "Live-action 35mm post-apocalyptic survival thriller. Replace driver in <Video 1> with the Chinese middle-aged man from <Picture 1-3> wearing thin silver metal-frame glasses, distressed dark brown leather moto jacket, charcoal henley shirt, and black fingerless tactical driving gloves. 荒原冷灰日光透入车窗，丧尸扑砸右窗玻璃，图一男主身穿深棕做旧皮夹克与露指手套惊呼猛打方向盘急退。",
      "refs": [
        {
          "label": "末日飞车手五联定妆总卡",
          "src": "media/img-a98f15d01de975a4fff3.png"
        },
        {
          "label": "四镜首帧定妆目标板",
          "src": "media/img-f6d7e35014dd621e5422.jpg"
        }
      ],
      "video": "https://github.com/aikingtai-ctrl/jintai-film-showcase/releases/download/media-v1/apocalyptic-bridge-escape-h3-15s--f370b1c85e7e92438b48.mp4",
      "thumb": "media/img-eb20cf1ce4ef696c5bef.jpg",
      "model": "FeiHou_MiniMax-H3_Remix_HSA_v0.7",
      "params": "H3 二段式 1536×864 (s01_seedB) · @pictures 1,2,3 + @first anchor2_s01_v1.png",
      "status": "已合入成片"
    },
    {
      "id": "S02",
      "title": "车外荒原 · 高速倒车甩落扒窗丧尸（一）",
      "start": 2.5,
      "duration": 2.1,
      "framing": "车外侧后中全景",
      "camera": "高速跟移镜头",
      "cast": [
        "图一男主（末日飞车幸存者）"
      ],
      "action": "改装越野车在荒原公路上高速倒车急甩，车头浓烟翻滚甩开围堵丧尸；左上角 TOPVIEW T1 水印经 MiniMaxRemover 局部无痕修复。",
      "prompt": "Live-action 35mm post-apocalyptic survival thriller. Replace driver in <Video 1> with the Chinese middle-aged man from <Picture 1-3> wearing thin silver metal-frame glasses, distressed dark brown leather moto jacket, charcoal henley shirt, and black fingerless tactical driving gloves. 改装越野车在荒原公路上高速倒车急甩，车头浓烟翻滚甩开围堵丧尸；左上角 TOPVIEW T1 水印经 MiniMaxRemover 局部无痕修复。",
      "refs": [
        {
          "label": "末日飞车手五联定妆总卡",
          "src": "media/img-a98f15d01de975a4fff3.png"
        },
        {
          "label": "四镜首帧定妆目标板",
          "src": "media/img-f6d7e35014dd621e5422.jpg"
        }
      ],
      "video": "",
      "thumb": "media/img-b6cbf515879f68900e5c.jpg",
      "model": "FeiHou_MiniMax-H3_Remix_HSA_v0.7",
      "params": "Wan2.1-MiniMaxRemover-1.3B 512×256 时序去水印补丁回贴 1080p",
      "status": "已合入成片"
    },
    {
      "id": "S03",
      "title": "车外荒原 · 高速倒车急摆尾（二）",
      "start": 4.6,
      "duration": 2,
      "framing": "车外俯仰跟拍",
      "camera": "高速动态摇移",
      "cast": [
        "图一男主（末日飞车幸存者）"
      ],
      "action": "越野车轮胎卷起漫天黄土倒车冲向断桥方向，彻底清除原片水印并保留 1080p 原生颗粒锐度。",
      "prompt": "Live-action 35mm post-apocalyptic survival thriller. Replace driver in <Video 1> with the Chinese middle-aged man from <Picture 1-3> wearing thin silver metal-frame glasses, distressed dark brown leather moto jacket, charcoal henley shirt, and black fingerless tactical driving gloves. 越野车轮胎卷起漫天黄土倒车冲向断桥方向，彻底清除原片水印并保留 1080p 原生颗粒锐度。",
      "refs": [
        {
          "label": "末日飞车手五联定妆总卡",
          "src": "media/img-a98f15d01de975a4fff3.png"
        },
        {
          "label": "四镜首帧定妆目标板",
          "src": "media/img-f6d7e35014dd621e5422.jpg"
        }
      ],
      "video": "",
      "thumb": "media/img-8fc8d873e7138386335a.jpg",
      "model": "FeiHou_MiniMax-H3_Remix_HSA_v0.7",
      "params": "Wan2.1-MiniMaxRemover-1.3B 时序无痕去水印",
      "status": "已合入成片"
    },
    {
      "id": "S04",
      "title": "车内挡风玻璃正面 · 紧握方向盘极速倒车",
      "start": 6.6,
      "duration": 2.4,
      "framing": "车内正前近景",
      "camera": "贴挡风玻璃微震机位",
      "cast": [
        "图一男主（末日飞车幸存者）"
      ],
      "action": "透过布满尘土的挡风玻璃正面特写，图一男主戴银色细框眼镜紧咬牙关双手死死控住方向盘高速倒退。",
      "prompt": "Live-action 35mm post-apocalyptic survival thriller. Replace driver in <Video 1> with the Chinese middle-aged man from <Picture 1-3> wearing thin silver metal-frame glasses, distressed dark brown leather moto jacket, charcoal henley shirt, and black fingerless tactical driving gloves. 透过布满尘土的挡风玻璃正面特写，图一男主戴银色细框眼镜紧咬牙关双手死死控住方向盘高速倒退。",
      "refs": [
        {
          "label": "末日飞车手五联定妆总卡",
          "src": "media/img-a98f15d01de975a4fff3.png"
        },
        {
          "label": "四镜首帧定妆目标板",
          "src": "media/img-f6d7e35014dd621e5422.jpg"
        }
      ],
      "video": "",
      "thumb": "media/img-7a7afc94ecd83c043169.jpg",
      "model": "FeiHou_MiniMax-H3_Remix_HSA_v0.7",
      "params": "H3 二段式 1536×864 (s04_seedA) · 无人空车底板防白人胡须串脸",
      "status": "已合入成片"
    },
    {
      "id": "S05",
      "title": "车外断桥悬崖 · 轮胎抱死险险急刹",
      "start": 9,
      "duration": 2.6,
      "framing": "断桥悬崖大远景",
      "camera": "航拍侧视悬停",
      "cast": [
        "图一男主（末日飞车幸存者）"
      ],
      "action": "越野车倒冲至坍塌断桥边缘千钧一发急刹停住，后轮悬空扬起尘雾。",
      "prompt": "Live-action 35mm post-apocalyptic survival thriller. Replace driver in <Video 1> with the Chinese middle-aged man from <Picture 1-3> wearing thin silver metal-frame glasses, distressed dark brown leather moto jacket, charcoal henley shirt, and black fingerless tactical driving gloves. 越野车倒冲至坍塌断桥边缘千钧一发急刹停住，后轮悬空扬起尘雾。",
      "refs": [
        {
          "label": "末日飞车手五联定妆总卡",
          "src": "media/img-a98f15d01de975a4fff3.png"
        },
        {
          "label": "四镜首帧定妆目标板",
          "src": "media/img-f6d7e35014dd621e5422.jpg"
        }
      ],
      "video": "",
      "thumb": "media/img-2389f9b4293e3e0e7608.jpg",
      "model": "FeiHou_MiniMax-H3_Remix_HSA_v0.7",
      "params": "Wan2.1-MiniMaxRemover-1.3B 时序无痕去水印",
      "status": "已合入成片"
    },
    {
      "id": "S06",
      "title": "车内右侧面 · 劫后余生长舒一口气微笑",
      "start": 11.6,
      "duration": 2.7,
      "framing": "车内右侧面近景",
      "camera": "平稳呼吸感手持",
      "cast": [
        "图一男主（末日飞车幸存者）"
      ],
      "action": "车辆停稳于断桥边，男主紧绷双肩骤然松弛，靠回椅背长舒一口气露出劫后余生的微笑。",
      "prompt": "Live-action 35mm post-apocalyptic survival thriller. Replace driver in <Video 1> with the Chinese middle-aged man from <Picture 1-3> wearing thin silver metal-frame glasses, distressed dark brown leather moto jacket, charcoal henley shirt, and black fingerless tactical driving gloves. 车辆停稳于断桥边，男主紧绷双肩骤然松弛，靠回椅背长舒一口气露出劫后余生的微笑。",
      "refs": [
        {
          "label": "末日飞车手五联定妆总卡",
          "src": "media/img-a98f15d01de975a4fff3.png"
        },
        {
          "label": "四镜首帧定妆目标板",
          "src": "media/img-f6d7e35014dd621e5422.jpg"
        }
      ],
      "video": "",
      "thumb": "media/img-99ba609bcca28afcd0a1.jpg",
      "model": "FeiHou_MiniMax-H3_Remix_HSA_v0.7",
      "params": "H3 二段式 1536×864 (s06_seedB) · 骨相与银框眼镜跨镜严丝合缝",
      "status": "已合入成片"
    },
    {
      "id": "S07",
      "title": "后视镜极特写 · 双眼由笑转惊恐 + 丧尸利爪扑镜",
      "start": 14.3,
      "duration": 0.74,
      "framing": "车内后视镜极特写",
      "camera": "焦点锁死镜面极特写",
      "cast": [
        "图一男主（末日飞车幸存者）"
      ],
      "action": "内后视镜映出银色细框眼镜后的双眼，笑意瞬间凝固转为瞳孔放大惊恐，前景丧尸利爪猛然划过镜面。",
      "prompt": "Live-action 35mm post-apocalyptic survival thriller. Replace driver in <Video 1> with the Chinese middle-aged man from <Picture 1-3> wearing thin silver metal-frame glasses, distressed dark brown leather moto jacket, charcoal henley shirt, and black fingerless tactical driving gloves. 内后视镜映出银色细框眼镜后的双眼，笑意瞬间凝固转为瞳孔放大惊恐，前景丧尸利爪猛然划过镜面。",
      "refs": [
        {
          "label": "末日飞车手五联定妆总卡",
          "src": "media/img-a98f15d01de975a4fff3.png"
        },
        {
          "label": "四镜首帧定妆目标板",
          "src": "media/img-f6d7e35014dd621e5422.jpg"
        }
      ],
      "video": "",
      "thumb": "media/img-7ac79633d14596249ce9.jpg",
      "model": "FeiHou_MiniMax-H3_Remix_HSA_v0.7",
      "params": "H3 亚秒镜头 3× 时序展宽（16f→56f 跨过 3D VAE 瓶颈后 [::3] 抽回 16f · s07_seedA）",
      "status": "已合入成片"
    }
  ],
  "generation": {
    "model": "FeiHou_MiniMax-H3_Remix_HSA_v0.7 + minimax_h3_ref2v_turbo_8step_v1.1 + minimax_h3_latent_upscaler_3d_bf16",
    "params": [
      {
        "k": "算力集群",
        "v": "A 机 [内部地址已移除]（8×H100 并发）"
      },
      {
        "k": "二段式规格",
        "v": "1024×576 (5步) → 1.5× 潜空间放大 1536×864 (5步) → 1920×1080 @ 24fps"
      },
      {
        "k": "优选种子",
        "v": "s01_seedB(8809) / s04_seedA(8801) / s06_seedB(8809) / s07_seedA(8801)"
      },
      {
        "k": "成片 SHA-256",
        "v": "3C960306FC7D4E99C379FC0D149F620236A24D4AB8A8DEF4DE7D4D96A419B6D8"
      }
    ],
    "notes": [
      "技术核验：ffmpeg -v error -xerror 全片 361 帧解码 0 错误；成片音轨经人工听审无爆音断字。",
      "审片边界：本地技术归档已完成，人物观感与最终艺术效果待用户审片确认。"
    ]
  },
  "deliverables": [
    {
      "name": "11月5日_末日断桥飞车_A机H3角色替换成片_1080p.mp4",
      "src": "https://github.com/aikingtai-ctrl/jintai-film-showcase/releases/download/media-v1/apocalyptic-bridge-escape-h3-15s--f370b1c85e7e92438b48.mp4",
      "note": "15.04s · 1920×1080 · 24fps · 13.31 MB"
    },
    {
      "name": "11月5日_01_主角末日飞车手_造型设计定妆总卡.png",
      "src": "media/img-a98f15d01de975a4fff3.png",
      "note": "五联造型设计定妆总卡"
    },
    {
      "name": "11月5日_03_末日断桥飞车_H3成片十二帧抽检表.jpg",
      "src": "media/img-256cbc13afd6fd031caa.jpg",
      "note": "十二帧全片抽检表"
    }
  ]
});
