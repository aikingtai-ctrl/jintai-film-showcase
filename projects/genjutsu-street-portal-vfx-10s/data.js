window.registerProject({
  "id": "genjutsu-street-portal-vfx-10s",
  "title": "街头幻术破界｜Higgsfield Genjutsu A机 8×H100 本地平替｜10秒",
  "subtitle": "四大特效模态 × GrowMask 膨胀律 × MiniMaxH3AddGuide 压力帧钉桩 × ¥508 云端成本 0 元本地平替",
  "logline": "深度逆向 Higgsfield Genjutsu 官方节点与二进制 MP4 盒后在 A 机 8×H100 落地的全套免费本地平替示范片：同框完整呈现兵器赤炎变形、压力帧传送门爆裂、赛博世界瞬移、作画动漫重绘及四宫格逐帧对照全 7 条成品。",
  "date": "2026-10-30",
  "tags": [
    "Genjutsu",
    "H3",
    "特效VFX",
    "SAM 3.1",
    "技术拆解",
    "16:9",
    "已生成"
  ],
  "model": "A 机 Genjutsu VFX Director SelfLift + Keyframe Morph (8188–8195)",
  "modelShort": "Genjutsu + H3",
  "poster": "media/img-ea0f844261cfb5bd90ac.jpg",
  "film": {
    "src": "https://github.com/aikingtai-ctrl/jintai-film-showcase/releases/download/media-v1/genjutsu-street-portal-vfx-10s--c427bae76d2d77ec238f.mp4",
    "duration": 9.417,
    "width": 1920,
    "height": 1080,
    "fps": "24"
  },
  "meta": {
    "shots": 7,
    "generated": 7,
    "durationSec": 9.417,
    "resolution": "1920×1080",
    "fps": "24",
    "aspect": "16:9",
    "style": "实拍街道动作零损失嫁接四种特效模态，832×480 解耦参考流提速 33.5%。"
  },
  "synopsis": [
    "穿透 Comfy.org 官方节点发现云端 1080p Genjutsu 收费高达 $2.33/秒（≈¥508/30秒）且存在 seed 伪随机与 3D VAE 8m+1 截尾短板，提炼出「超体积遮罩膨胀（18–28px）、一槽一职责、V2V 增量词法、压力帧单帧钉桩、前期木棍引导物、832×480 参考解耦」六大铁律。",
    "全案除沉淀全局 genjutsu-vfx-director 技能与两套 ComfyUI JSON 工作流外，还同批生成了 1080P 主片、四宫格同步拆解大片与 5 条单一模态 demo clip，总计 7 段视频全量挂入分镜列表。"
  ],
  "concept": {
    "rules": [
      "超体积遮罩膨胀律：木棍变大太刀必须用 GrowMask 24px 防止光刃被窄轮廓切平。",
      "压力帧钉桩（AddGuide）：抽取关键爆发帧 P 好传送门再钉回潜空间驱动过渡。",
      "V2V 增量词法 + 832×480 参考解耦：省去复述原动作并提速 33.5%。"
    ],
    "directorMethod": "使用亮色短棍实拍确定握持手型真值，经 SAM 3.1 生成遮罩与反遮罩，调度两套 SelfLift 工作流在 A 机并排产出 4 大特效并合辑成四宫格对照大片。"
  },
  "pipeline": [
    {
      "stage": "① 前期引导物实拍底板",
      "tool": "00_raw_street_stick_master.mp4",
      "note": "快门 ≥1/120s 消除运动拖影，锁死 SAM 3.1 握手遮挡。"
    },
    {
      "stage": "② SAM 3.1 动态遮罩生成",
      "tool": "GrowMask=24 / person_invert",
      "note": "为兵器膨胀与场景瞬移提供精确区域切换。"
    },
    {
      "stage": "③ 压力帧钉桩与四大模态生成",
      "tool": "A 机 SelfLift + AddGuide",
      "note": "一次性跑齐兵器变形、传送门、赛博瞬移、动漫重绘。"
    },
    {
      "stage": "④ 主片合辑与四宫格拆解封装",
      "tool": "FFmpeg 1080p24 + 四联板",
      "note": "7 段独立可播视频全部入库验证。"
    }
  ],
  "characters": [
    {
      "id": "CYBER-JY",
      "name": "赛博金衣卫参考",
      "role": "mode=3 瞬移换装",
      "look": "未来东方霓虹机甲风衣卫士。",
      "image": "media/img-1684fca8609cca8ada74.png",
      "uses": 3
    }
  ],
  "sceneCards": [
    {
      "id": "RAW-ST",
      "name": "原实拍街头底板帧",
      "desc": "木棍与实拍环境锚点。",
      "image": "media/img-11a47a8ed2eb460949be.png",
      "uses": 3
    },
    {
      "id": "CYBER-CITY",
      "name": "霓虹赛博堡垒",
      "desc": "mode=3 背景世界替换参考。",
      "image": "media/img-7419e910857a2e5c04c0.png",
      "uses": 2
    }
  ],
  "props": [
    {
      "id": "GEN-4V",
      "name": "Genjutsu 影视四联标准检视板",
      "desc": "全流程特效四联验收面板。",
      "image": "media/img-9c3b70220a76a7f34137.png"
    },
    {
      "id": "ODACHI",
      "name": "赤炎等离子大太刀参考",
      "desc": "mode=1 GrowMask 24px 兵器变形目标。",
      "image": "media/img-dbb6f1af7707f16e295f.png"
    },
    {
      "id": "PORTAL",
      "name": "第 k 帧撕裂传送门压力帧",
      "desc": "mode=2 AddGuide 单帧钉桩爆发源图。",
      "image": "media/img-0a0b2db5175dbc4da426.png"
    },
    {
      "id": "SAKUGA",
      "name": "作画动漫风格首帧参考",
      "desc": "mode=4 全画幅风格转描参考。",
      "image": "media/img-45c19154ade14b3fb2c9.png"
    }
  ],
  "shots": [
    {
      "id": "S01",
      "title": "01 · 创意成片_街头幻术破界_1080P",
      "start": 0,
      "duration": 9.417,
      "framing": "16:9 特效重绘 (1920×1080 @ 24fps)",
      "camera": "源视频手持运动流 100% 锁定",
      "action": "完整串联四大幻术特效模态的街头实拍成片：挥棍唤出赤炎等离子大太刀、压力帧撕裂异界传送门、霓虹赛博金衣卫瞬移与作画动漫重绘。",
      "prompt": "Genjutsu VFX Director (S01) · dynamic GrowMask + 832x480 decoupled ref stream + SelfLift 6+4.",
      "refs": [
        {
          "label": "Genjutsu 影视四联检视板",
          "src": "media/img-9c3b70220a76a7f34137.png"
        }
      ],
      "video": "https://github.com/aikingtai-ctrl/jintai-film-showcase/releases/download/media-v1/genjutsu-street-portal-vfx-10s--596eaf4591d2580354a1.mp4",
      "thumb": "assets/shots/S01.jpg",
      "model": "A 机 Genjutsu VFX Director SelfLift + SAM 3.1",
      "params": "1920×1080 @ 24fps · 9.417s",
      "status": "已生成"
    },
    {
      "id": "S02",
      "title": "02 · 四宫格逐帧同步拆解大片_1080P",
      "start": 0,
      "duration": 10.167,
      "framing": "16:9 特效重绘 (1920×1080 @ 24fps)",
      "camera": "源视频手持运动流 100% 锁定",
      "action": "四宫格 1:1 逐帧对照展示四种 Genjutsu 特效模式与原实拍底板的严格帧对齐。",
      "prompt": "Genjutsu VFX Director (S02) · dynamic GrowMask + 832x480 decoupled ref stream + SelfLift 6+4.",
      "refs": [
        {
          "label": "Genjutsu 影视四联检视板",
          "src": "media/img-9c3b70220a76a7f34137.png"
        }
      ],
      "video": "https://github.com/aikingtai-ctrl/jintai-film-showcase/releases/download/media-v1/genjutsu-street-portal-vfx-10s--9d93febd0deead18f67d.mp4",
      "thumb": "assets/shots/S02.jpg",
      "model": "A 机 Genjutsu VFX Director SelfLift + SAM 3.1",
      "params": "1920×1080 @ 24fps · 10.167s",
      "status": "已生成"
    },
    {
      "id": "S03",
      "title": "03 · 前期实拍引导物底板 (木棍轨迹真值)",
      "start": 0,
      "duration": 5.167,
      "framing": "16:9 特效重绘 (1664×928 @ 24fps)",
      "camera": "源视频手持运动流 100% 锁定",
      "action": "手持引导短棍拍摄的原生动作底板，为 SAM 3.1 与 18–28px 动态 GrowMask 提供稳定握持手型与前遮挡。",
      "prompt": "Genjutsu VFX Director (S03) · dynamic GrowMask + 832x480 decoupled ref stream + SelfLift 6+4.",
      "refs": [
        {
          "label": "Genjutsu 影视四联检视板",
          "src": "media/img-9c3b70220a76a7f34137.png"
        }
      ],
      "video": "https://github.com/aikingtai-ctrl/jintai-film-showcase/releases/download/media-v1/genjutsu-street-portal-vfx-10s--5b4b77fcef0b56469a37.mp4",
      "thumb": "assets/shots/S03.jpg",
      "model": "A 机 Genjutsu VFX Director SelfLift + SAM 3.1",
      "params": "1664×928 @ 24fps · 5.167s",
      "status": "已生成"
    },
    {
      "id": "S04",
      "title": "04 · 模式一_兵器变形 (GrowMask 24px 赤炎大太刀)",
      "start": 0,
      "duration": 5.167,
      "framing": "16:9 特效重绘 (1664×928 @ 24fps)",
      "camera": "源视频手持运动流 100% 锁定",
      "action": "通过超体积遮罩膨胀 GrowMask=24px 给足光刃、护手与电弧膨胀空间，防止新兵器被木棍窄轮廓切平。",
      "prompt": "Genjutsu VFX Director (S04) · dynamic GrowMask + 832x480 decoupled ref stream + SelfLift 6+4.",
      "refs": [
        {
          "label": "Genjutsu 影视四联检视板",
          "src": "media/img-9c3b70220a76a7f34137.png"
        }
      ],
      "video": "https://github.com/aikingtai-ctrl/jintai-film-showcase/releases/download/media-v1/genjutsu-street-portal-vfx-10s--3497a551fd9d48f824f0.mp4",
      "thumb": "assets/shots/S04.jpg",
      "model": "A 机 Genjutsu VFX Director SelfLift + SAM 3.1",
      "params": "1664×928 @ 24fps · 5.167s",
      "status": "已生成"
    },
    {
      "id": "S05",
      "title": "05 · 模式二_关键帧钉桩撕裂传送门 (AddGuide f=k)",
      "start": 0,
      "duration": 5.167,
      "framing": "16:9 特效重绘 (1664×928 @ 24fps)",
      "camera": "源视频手持运动流 100% 锁定",
      "action": "将重绘好的爆发压力帧通过 MiniMaxH3AddGuide(frame_idx) 钉入潜空间，由 DiT 自动补全物理撕裂与余晖过渡。",
      "prompt": "Genjutsu VFX Director (S05) · dynamic GrowMask + 832x480 decoupled ref stream + SelfLift 6+4.",
      "refs": [
        {
          "label": "Genjutsu 影视四联检视板",
          "src": "media/img-9c3b70220a76a7f34137.png"
        }
      ],
      "video": "https://github.com/aikingtai-ctrl/jintai-film-showcase/releases/download/media-v1/genjutsu-street-portal-vfx-10s--fb71466cdeb915bfa1a2.mp4",
      "thumb": "assets/shots/S05.jpg",
      "model": "A 机 Genjutsu VFX Director SelfLift + SAM 3.1",
      "params": "1664×928 @ 24fps · 5.167s",
      "status": "已生成"
    },
    {
      "id": "S06",
      "title": "06 · 模式三_跨次元霓虹赛博瞬移 (person_invert)",
      "start": 0,
      "duration": 5.167,
      "framing": "16:9 特效重绘 (1664×928 @ 24fps)",
      "camera": "源视频手持运动流 100% 锁定",
      "action": "反转前景人物遮罩冻结运动，绕人物重建霓虹赛博堡垒背景并换装赛博金衣卫。",
      "prompt": "Genjutsu VFX Director (S06) · dynamic GrowMask + 832x480 decoupled ref stream + SelfLift 6+4.",
      "refs": [
        {
          "label": "Genjutsu 影视四联检视板",
          "src": "media/img-9c3b70220a76a7f34137.png"
        }
      ],
      "video": "https://github.com/aikingtai-ctrl/jintai-film-showcase/releases/download/media-v1/genjutsu-street-portal-vfx-10s--d315da7a3294aa8d12c3.mp4",
      "thumb": "assets/shots/S06.jpg",
      "model": "A 机 Genjutsu VFX Director SelfLift + SAM 3.1",
      "params": "1664×928 @ 24fps · 5.167s",
      "status": "已生成"
    },
    {
      "id": "S07",
      "title": "07 · 模式四_作画动漫风格重绘 (Sakuga Restyle)",
      "start": 0,
      "duration": 5.167,
      "framing": "16:9 特效重绘 (1664×928 @ 24fps)",
      "camera": "源视频手持运动流 100% 锁定",
      "action": "以旁路遮罩全帧结构锁叠加作画赛璐璐风格参考帧 06 驱动全画幅风格转描。",
      "prompt": "Genjutsu VFX Director (S07) · dynamic GrowMask + 832x480 decoupled ref stream + SelfLift 6+4.",
      "refs": [
        {
          "label": "Genjutsu 影视四联检视板",
          "src": "media/img-9c3b70220a76a7f34137.png"
        }
      ],
      "video": "https://github.com/aikingtai-ctrl/jintai-film-showcase/releases/download/media-v1/genjutsu-street-portal-vfx-10s--5b4740d3836c22a7108a.mp4",
      "thumb": "assets/shots/S07.jpg",
      "model": "A 机 Genjutsu VFX Director SelfLift + SAM 3.1",
      "params": "1664×928 @ 24fps · 5.167s",
      "status": "已生成"
    }
  ],
  "generation": {
    "model": "Genjutsu VFX Director SelfLift + Keyframe Morph",
    "params": [
      {
        "k": "成本对比",
        "v": "云端 $2.33/s (≈¥508/30s) → A 机本地 0 元"
      },
      {
        "k": "遮罩引擎",
        "v": "SAM 3.1 + GrowMask=24px + person_invert"
      },
      {
        "k": "推理加速",
        "v": "参考流 832×480 解耦 (+33.5% 速度)"
      }
    ],
    "notes": [
      "完整技术拆解手册见 Higgsfield_Genjutsu核心秘诀拆解与金泰本地平替全案.md。"
    ]
  },
  "deliverables": [
    {
      "name": "01_创意成片_街头幻术破界_1080P.mp4",
      "src": "https://github.com/aikingtai-ctrl/jintai-film-showcase/releases/download/media-v1/genjutsu-street-portal-vfx-10s--c427bae76d2d77ec238f.mp4",
      "note": "9.417s · 主成片 · 20.42 MB"
    },
    {
      "name": "02_四宫格逐帧同步拆解大片_1080P.mp4",
      "src": "https://github.com/aikingtai-ctrl/jintai-film-showcase/releases/download/media-v1/genjutsu-street-portal-vfx-10s--9d93febd0deead18f67d.mp4",
      "note": "10.17s · 四宫格对照"
    },
    {
      "name": "Genjutsu_影视四联标准检视板.png",
      "src": "media/img-9c3b70220a76a7f34137.png",
      "note": "四联检视板"
    }
  ]
});
