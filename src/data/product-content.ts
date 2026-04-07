/** 产品与详情页文案 / 图片（由 Webflow 导出整理） */

export const couplingRed = "#C41E3A";

/** 金数据「联系我们」在线表单 */
export const externalContactFormUrl = "https://jsj.top/f/fGsCL7";

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
      label: "车间实景",
    },
    {
      src: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&q=80",
      label: "精密加工",
    },
    {
      src: "https://images.unsplash.com/photo-1581092162384-8987c1d64718?auto=format&fit=crop&q=80",
      label: "设计工位",
    },
  ],
  about: {
    title: "先进制造与研发",
    lead:
      "大连现代化厂房配备先进数控加工设备与严格检测手段，保障产品品质。",
    bullets: [
      {
        title: "先进研发",
        body: "专业设计工位，采用主流 CAD/CAM 软件，持续推动产品创新。",
      },
      {
        title: "精密制造",
        body: "高精度加工中心，保证各内部零部件的加工精度与装配质量。",
      },
      {
        title: "质量保障",
        body: "涵盖动平衡、压力试验等在内的完整检测流程，确保出厂可靠。",
      },
    ],
  },
};
