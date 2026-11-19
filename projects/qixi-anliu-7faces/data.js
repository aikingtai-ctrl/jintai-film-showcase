window.registerProject({
  "id": "qixi-anliu-7faces",
  "title": "七席暗流 · 七人面部特写",
  "subtitle": "30 秒一镜到底 · 真人电影质感 · 白模轨迹参考 + Topaz 超分",
  "logline": "黑金唱片公司会议室，七个各怀心事的成员围坐圆桌，摄影机沿白模预演的轨迹一镜到底掠过七张脸，桌心一个未拆的黑信封。",
  "date": "2026-09-23",
  "tags": [
    "一镜到底",
    "K-POP 群像",
    "轨迹参考",
    "AI Video Canvas",
    "画布 291"
  ],
  "model": "Seedance 2.5（即梦 multimodal2video，480p）→ Topaz 超分",
  "modelShort": "Seedance 2.5",
  "poster": "media/img-11dfe6cb32e083b7f675.jpg",
  "film": {},
  "meta": {
    "shots": 2,
    "generated": 2,
    "durationSec": 30,
    "resolution": "480p → 超分",
    "fps": "",
    "aspect": "16:9",
    "style": ""
  },
  "synopsis": [],
  "concept": {},
  "pipeline": [
    {
      "stage": "① 白模轨迹",
      "tool": "3D 导演台 / 参考视频",
      "note": "用白模视频锁定摄影机 30 秒连续空间轨迹与速度变化。"
    },
    {
      "stage": "② 真人参考图",
      "tool": "上传参考图",
      "note": "七人身份、脸型、服装、座位由一张真人参考图锁定。"
    },
    {
      "stage": "③ 一镜到底生成",
      "tool": "Seedance 2.5 · 30 s · 480p",
      "note": "提示词逐秒写机位路径与每人的微表情停留，禁止切镜、换座、穿桌。"
    },
    {
      "stage": "④ 超分",
      "tool": "Topaz（kie）",
      "note": "480p 成片高清放大。"
    }
  ],
  "props": [],
  "docs": [],
  "sequences": [
    {
      "title": "全片",
      "sceneTag": "",
      "shots": [
        "S01",
        "S02"
      ]
    }
  ],
  "shots": [
    {
      "id": "S01",
      "title": "视频生成",
      "start": 0,
      "duration": 30,
      "framing": "",
      "camera": "",
      "lighting": "",
      "cast": [],
      "sceneTag": "",
      "action": "@素材 30秒真人电影《七席暗流》，严格单一连续长镜头，一镜到底，零剪辑、零切镜、零跳位、零黑场、零遮挡偷切、零变形转场。完全遵循参考视频的连续摄影机空间轨迹和速度变化，用真人参考图锁定七人的身份脸型服装座位。四女三男原创成年K-POP人物围坐固定圆桌，各怀心事；只允许摄影机运动，不得人物换座或圆桌旋转。连续时间调度：0-3秒无人机般俯视七人圆桌旋转下降到白衣黑短发女队长SEORA背后；3-6.5秒沿她肩膀侧面连续绕到正脸特写，她轻抬眼",
      "picture": "",
      "dialogue": [],
      "dialogueText": "",
      "sound": "",
      "notes": "",
      "firstFramePrompt": "",
      "prompt": "@素材 30秒真人电影《七席暗流》，严格单一连续长镜头，一镜到底，零剪辑、零切镜、零跳位、零黑场、零遮挡偷切、零变形转场。完全遵循参考视频的连续摄影机空间轨迹和速度变化，用真人参考图锁定七人的身份脸型服装座位。四女三男原创成年K-POP人物围坐固定圆桌，各怀心事；只允许摄影机运动，不得人物换座或圆桌旋转。连续时间调度：0-3秒无人机般俯视七人圆桌旋转下降到白衣黑短发女队长SEORA背后；3-6.5秒沿她肩膀侧面连续绕到正脸特写，她轻抬眼嘴角绷紧；6.5-9.7秒顺着桌面滑向银发深蓝衬衫男RYU的手，沿手腕衣领抬升到脸，他礼貌笑意收敛；9.7-12.8秒贴桌横移掠过铜红马尾酒红皮衣女MINA的指尖，再斜向升到脸，她单侧轻抬眉；12.8-18.35秒从两椅之间退出到桌外缘下降，捕捉墨绿西装黑发方下颌男JUN桌下轻点的鞋尖，沿膝侧身体外侧连续升起并绕过桌沿到面部特写，他眼神沉稳算计；18.35-22.25秒真实弧线移动到金卷短发圆脸雀斑粉衣女LUMI椅背后，绕过肩膀显露脸，她抿唇藏笑；22.25-25.1秒低位大广角滑向深肤寸头唇环黑无袖男KAI，连续推进升高到自然透视面部特写，他下颌绷紧侧目；25.1-27.7秒连续侧移到紫长发心形脸紫灰高领女NARI面前特写，她慢眨眼望向队长；27.7-30秒相机连续后退升高俯视七人完整圆桌收尾。所有相邻动作必须展示真实的中间运动过程，前景桌沿肩膀保持连续视差，切勿按照时间段切成独立镜头。过渡稍快，靠近面孔时缓慢，每人面部有清晰停留。相机绕开桌板椅背人物，脚部到脸不可穿桌。黑金唱片公司会议室，圆桌中心一个未拆黑信封，暖光冷轮廓，真实皮肤与克制微表情，自然呼吸，七人不串脸不新增人物，无字幕无水印无对白，低沉悬疑环境音。参考白模仅控制摄影机轨迹和空间布局，最终全部为真人电影质感。",
      "refs": [
        {
          "label": "上传参考图",
          "src": "media/img-01ddaaee88ca06f9327c.png"
        }
      ],
      "video": "https://github.com/aikingtai-ctrl/jintai-film-showcase/releases/download/media-v1/qixi-anliu-7faces--ecb362fbc27479b0fa6c.mp4",
      "thumb": "assets/shots/S01.jpg",
      "model": "seedance2.5",
      "params": "30s · seedance2.5 · 480p · jimeng_multimodal2video",
      "status": "已生成",
      "alts": [],
      "take": "视频生成"
    },
    {
      "id": "S02",
      "title": "视频高清放大",
      "start": 30,
      "duration": 0,
      "framing": "",
      "camera": "",
      "lighting": "",
      "cast": [],
      "sceneTag": "",
      "action": "超分视频",
      "picture": "",
      "dialogue": [],
      "dialogueText": "",
      "sound": "",
      "notes": "",
      "firstFramePrompt": "",
      "prompt": "超分视频",
      "refs": [],
      "video": "https://github.com/aikingtai-ctrl/jintai-film-showcase/releases/download/media-v1/qixi-anliu-7faces--192a0af8002c599aedb8.mp4",
      "thumb": "assets/shots/S02.jpg",
      "model": "kie_topaz_upscale",
      "params": "kie_topaz_upscale",
      "status": "已生成",
      "alts": [],
      "take": "视频高清放大"
    }
  ],
  "generation": {
    "model": "Seedance 2.5",
    "params": [
      {
        "k": "画布",
        "v": "AI Video Canvas #291：2 个视频节点 / 0 个参考节点 / 2 条连线"
      },
      {
        "k": "首帧图",
        "v": "1 个图像生成节点（先出首帧再图生视频）"
      }
    ],
    "notes": []
  },
  "deliverables": [
    {
      "name": "素材 · 20260911_110044_225db0.mp4",
      "note": "音频 · video 素材",
      "src": "https://github.com/aikingtai-ctrl/jintai-film-showcase/releases/download/media-v1/qixi-anliu-7faces--bf0e8445b9ceae211241.mp4"
    },
    {
      "name": "AI Video Canvas · 画布 291",
      "note": "七席暗流｜七人面部特写｜30秒",
      "src": ""
    }
  ]
});
