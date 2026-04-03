/** 产品与详情页文案 / 图片（由 Webflow 导出整理） */

export const couplingRed = "#C41E3A";

export const productHome = {
  heroBg:
    "https://storage.googleapis.com/uxpilot-auth.appspot.com/71bdf0b679-9ef3712e04cdf7481890.png",
  products: [
    {
      slug: "tiaosu" as const,
      badge: "调速型",
      title: "调速型液力偶合器",
      subtitle: "调速型液力偶合器",
      description:
        "专为工作机械精确调速而设计。这些偶合器允许在电机恒速运行的情况下实现被驱动机械的无级调速，优化过程控制并在风机和泵类应用中实现显著节能。适用于需要频繁调速的工况，有效降低能耗，延长设备使用寿命。",
      advantages: ["过载保护", "改善起动", "隔离振动"],
      image:
        "https://storage.googleapis.com/uxpilot-auth.appspot.com/ac1bc6e748-c9576a11b0cfa0e222f0.png",
    },
    {
      slug: "xianju" as const,
      badge: "限矩型",
      title: "限矩型液力偶合器",
      subtitle: "限矩型液力偶合器",
      description:
        "专为稳定动力传输与过载保护而设计，具有平稳启动和出色的振动隔离性能。保护电机和被驱动机械免受冲击负载的损害，延长设备使用寿命，降低维护成本。",
      advantages: ["过载保护", "改善起动", "隔离振动"],
      models: [
        "YOX",
        "TVA",
        "YOXE",
        "TVAE",
        "YOXL",
        "TVAL",
        "YOXLL",
        "TVALL",
        "YOXS",
        "TVAS",
      ],
      image:
        "https://storage.googleapis.com/uxpilot-auth.appspot.com/d922de70bd-14df0c1ac99a74dc9149.png",
    },
  ],
  gallery: [
    {
      src: "https://images.unsplash.com/photo-1565439390118-bbf1a4510bc2?auto=format&fit=crop&q=80",
      label: "Workshop View",
    },
    {
      src: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&q=80",
      label: "Precision Machining",
    },
    {
      src: "https://images.unsplash.com/photo-1581092162384-8987c1d64718?auto=format&fit=crop&q=80",
      label: "Design Workstation",
    },
  ],
  about: {
    title: "先进制造与研发",
    lead:
      "Our modern facilities in Dalian are equipped with advanced CNC machinery and rigorous testing equipment.",
    bullets: [
      {
        title: "Advanced R&D",
        body: "Dedicated design workstations utilizing latest CAD/CAM software for continuous product innovation.",
      },
      {
        title: "Precision Manufacturing",
        body: "High-accuracy machining centers ensuring perfect tolerances for all internal components.",
      },
      {
        title: "Quality Assurance",
        body: "Comprehensive testing protocols including dynamic balancing and pressure testing.",
      },
    ],
  },
};

export const xianjuDetail = {
  title: "限矩型液力偶合器",
  tagline: "专业制造 卓越品质",
  intro:
    "专为重型机械设计，提供卓越的过载保护和软启动功能。广泛应用于矿山、冶金、电力、建材等行业，是提高设备寿命、降低能耗的理想选择。",
  heroImage:
    "https://storage.googleapis.com/uxpilot-auth.appspot.com/d11e233075-e16736500e06821fed57.png",
  features: [
    {
      title: "过载保护",
      body: "有效隔离电机与工作机，当工作机超载时，偶合器内部打滑，保护电机及传动部件免受损坏，实现安全可靠的过载保护。",
    },
    {
      title: "改善起动",
      body: "允许电机空载起动，逐步加速大惯量工作机，显著降低起动电流，改善电网电压降，延长设备使用寿命。",
    },
    {
      title: "隔离振动",
      body: "作为柔性传动元件，有效吸收和隔离扭振冲击，平稳传递动力，减少机械磨损,降低运行噪音。",
    },
  ],
  series: [
    { name: "YOX", desc: "标准型" },
    { name: "TVA", desc: "外轮驱动型" },
    { name: "YOXE", desc: "加长型" },
    { name: "TVAL", desc: "带皮带轮型" },
    { name: "YOXS", desc: "双腔型" },
    { name: "YOXF / YOXⅡz", desc: "复合型 / 带制动轮式" },
  ],
  specImages: {
    diagram:
      "https://storage.googleapis.com/uxpilot-auth.appspot.com/49f678ae89-9223fb54f0de450789b8.png",
    curve:
      "https://storage.googleapis.com/uxpilot-auth.appspot.com/c4af7af838-6ecdb5257ac863993f72.png",
  },
  specsTable: [
    {
      model: "YOX206A",
      lmin: "210",
      d: "Φ254",
      inMax: "Φ 28",
      h1: "60",
      outMax: "Φ 30",
      h2: "55",
      oilMax: "0.8",
      oilMin: "0.4",
      weight: "10",
      rpm: "1500",
    },
    {
      model: "YOX250",
      lmin: "215",
      d: "Φ300",
      inMax: "Φ 38",
      h1: "80",
      outMax: "Φ 35",
      h2: "60",
      oilMax: "1.8",
      oilMin: "0.9",
      weight: "15",
      rpm: "1500",
    },
    {
      model: "YOX320",
      lmin: "304",
      d: "Φ388",
      inMax: "Φ 48",
      h1: "110",
      outMax: "Φ 45",
      h2: "110",
      oilMax: "5.2",
      oilMin: "2.6",
      weight: "28",
      rpm: "1500",
    },
    {
      model: "YOX400",
      lmin: "356",
      d: "Φ480",
      inMax: "Φ 60",
      h1: "140",
      outMax: "Φ 60",
      h2: "150",
      oilMax: "9.3",
      oilMin: "4.65",
      weight: "65",
      rpm: "1500",
    },
    {
      model: "YOX500",
      lmin: "411",
      d: "Φ580",
      inMax: "Φ 85",
      h1: "170",
      outMax: "Φ 85",
      h2: "145",
      oilMax: "19.2",
      oilMin: "9.6",
      weight: "105",
      rpm: "1500",
    },
  ],
  gallery: [
    {
      src: "https://storage.googleapis.com/uxpilot-auth.appspot.com/8540a078e7-fbbf073baf5427244092.png",
      caption: "现代化生产车间",
    },
    {
      src: "https://storage.googleapis.com/uxpilot-auth.appspot.com/174f89f331-67084c5c8cb48f68811e.png",
      caption: "精密加工设备",
    },
    {
      src: "https://storage.googleapis.com/uxpilot-auth.appspot.com/9ddd95b2bb-755445982a18de98868d.png",
      caption: "技术研发中心",
    },
  ],
};

export const tiaosuDetail = {
  title: "调速型液力偶合器",
  tagline: "专业制造 卓越品质",
  intro:
    "专为工作机械精确调速而设计。在电机恒速运行条件下实现被驱动机械的无级调速，优化过程控制，在风机、泵类应用中显著节能，适用于需要频繁调速的工况。",
  heroImage: productHome.products[0].image,
  features: [
    {
      title: "无级调速",
      body: "在电机转速不变的前提下，平滑调节输出转速，满足工艺对流量、压力的连续控制需求。",
    },
    {
      title: "显著节能",
      body: "通过转速匹配负载，避免阀门节流损失，在离心式风机、泵类负载中可降低运行能耗。",
    },
    {
      title: "可靠过载保护",
      body: "与限矩型相同的安全打滑特性，在异常工况下保护电机与传动系统。",
    },
  ],
  series: [
    { name: "CST 系列", desc: "调速型成套" },
    { name: "YOT 系列", desc: "调速型偶合器" },
    { name: "定制方案", desc: "按工况参数选型" },
  ],
  specNote:
    "调速型产品规格与工况、转速范围、功率匹配强相关，以下为典型应用说明。具体选型与尺寸图请联系技术部门获取正式资料。",
  gallery: xianjuDetail.gallery,
};
