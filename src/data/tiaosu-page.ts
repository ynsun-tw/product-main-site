/** 调速型液力偶合器详情页（与 Webflow 导出 tiaosu.html 对齐） */

export const tiaosuHero = {
  image:
    "https://storage.googleapis.com/uxpilot-auth.appspot.com/2f3600d724-16e4e6f7015f1134db8e.png",
  title: "调速型液力偶合器",
  subtitle: "尖端技术",
  tags: ["无级调速", "节能减排", "提升起动能力"],
};

export const tiaosuAdvantages = [
  {
    title: "无级调速",
    body: "可在电机转速不变的情况下实现输出转速的无级调节，协调多级驱动的负荷分配，实现远程控制。",
  },
  {
    title: "提升起动能力",
    body: "提高电机的起动能力，减少冲击振动，实现电机的空载起动，有效保护电机和工作机。",
  },
  {
    title: "大量节约能源",
    body: "广泛应用于各种风机、水泵、物料输送机械等设备，通过调节转速实现显著的节能效果。",
  },
];

/** 型号说明附图：代号分段示意（public/types.png） */
export const modelTypesDiagramImage = "/types.png";

/** 型号说明：YO - T - D/G/F - 规格 */
export const modelCodeLegend = [
  { code: "YO", desc: "液力偶合器" },
  { code: "T", desc: "调速型" },
  { code: "D", desc: "对开箱体" },
  { code: "G", desc: "固定箱体" },
  { code: "F", desc: "分别支撑" },
  { code: "R", desc: "圆筒式" },
  { code: "C", desc: "传动装置" },
  { code: "W", desc: "户外型" },
];

export const structureSection = {
  /** 调速型液力偶合器内部结构剖视图（本地资源 public/structure.png） */
  crossSectionImage: "/structure.png",
  companionTitle: "配套一览表",
  companionRows: [
    { item: "电动执行器", yotdg: "标准配备", yotf: "用户选配" },
    { item: "电动操作器", yotdg: "标准配备", yotf: "用户选配" },
    { item: "温度表", yotdg: "标准配备", yotf: "用户选配" },
    { item: "压力表", yotdg: "标准配备", yotf: "用户选配" },
    { item: "工作油冷却器", yotdg: "标准配备", yotf: "用户选配" },
  ],
};

export const yotdBlock = {
  title: "YOTD型",
  subtitle: "对开箱体式 调速型液力偶合器 滚动轴承",
  image:
    "https://storage.googleapis.com/uxpilot-auth.appspot.com/c58386592f-1a85a8a773be353434b4.png",
  table: [
    {
      model: "YOTD560",
      speed: "1000 / 1500",
      power: "35~100 / 115~340",
      weight: "970",
    },
    {
      model: "YOTD600",
      speed: "1000 / 1500",
      power: "50~150 / 170~500",
      weight: "1050",
    },
  ],
};

export const yotgBlock = {
  title: "YOTG型",
  subtitle: "固定箱体式 调速型液力偶合器 滚动轴承",
  image:
    "https://storage.googleapis.com/uxpilot-auth.appspot.com/cc2e3fb66f-d20cc9ec1371e197ba37.png",
  table: [
    {
      model: "YOTG360",
      speed: "1500 / 3000",
      power: "13~35 / 110~305",
      weight: "580",
    },
    {
      model: "YOTG400",
      speed: "1500 / 3000",
      power: "30~65 / 240~500",
      weight: "600",
    },
  ],
};

/** 固定箱体式 · 滑动轴承（参数表可按订货补充） */
export const yotfBlock = {
  title: "YOTF型",
  subtitle: "固定箱体式 调速型液力偶合器 滑动轴承",
  image: yotgBlock.image,
  table: [] as {
    model: string;
    speed: string;
    power: string;
    weight: string;
  }[],
  placeholderNote:
    "典型型号与参数可按工况与订货协议提供，详情请咨询技术部门。",
};

/** 除鳞泵专用系列 */
export const yotfClBlock = {
  title: "YOTFxxxCL型",
  subtitle: "除鳞泵专用 调速型液力偶合器",
  image: yotdBlock.image,
  table: [] as {
    model: string;
    speed: string;
    power: string;
    weight: string;
  }[],
  placeholderNote:
    "除鳞泵专用系列的具体型号、参数与图纸可按订货要求提供。",
};

export const yotgrBlock = {
  title: "YOTG…R型",
  subtitle: "固定箱体式 调速型液力偶合器 圆筒式",
  footnotes: [
    "1. 此类偶合器的额定转差率为1.5~3%，用于M∝n²的离心机械时，其调速范围为1~1/5；用于恒扭矩机械时，其调速范围为1~1/3。",
    "2. 户外型的标记为在型号后加W（户外型安装标记为型号后加字母W）",
    "3. 防爆型的标记为在型号后加B（防爆型安装标记为型号后加字母B）",
  ],
  /** 传递功率 (KW)，对应输入转速 1000 / 1500 (或 750/1000) */
  table: [
    { model: "YOTG450R", p1000: "12~34", p1500: "50~110" },
    { model: "YOTG500R", p1000: "20~57", p1500: "70~200" },
    { model: "YOTG560R", p1000: "35~100", p1500: "115~340" },
    { model: "YOTG650R", p1000: "75~215", p1500: "250~730" },
    { model: "YOTG750R", p750: "64~185", p1000: "150~440" },
  ],
};

export const yoczBlock = {
  title: "YOCz型",
  subtitle: "齿轮增速型液力偶合器传动装置",
  description: "YOCz型（输入侧带增速齿轮的液力偶合器传动装置）",
  image:
    "https://storage.googleapis.com/uxpilot-auth.appspot.com/3f2bda5584-3dd55ed24828d56db630.png",
  notes: [
    "1. 型号标注示例：输入转速为1500转/分，输出最高转速为900转/分的YOCJ650型液力偶合器传动装置标注为YOCJ650/1500/900。",
    "2. 此类液力偶合器的额定转差率为1.5~3%，其输出的最高转速（即型号中后一个*处标注的转速），根据用户需要确定，一般最小为输入转速的1/3。其最高总机效率≥95%。",
    "3. 此类液力偶合器传动装置用于M∝n²的离心式机械时，其调速范围为1~1/5；用于M=C的恒扭矩机械时，其调速范围为1~1/3。",
  ],
  /** 输入转速 (转/分) | 最大传动比 | A | B | C */
  table: [
    {
      model: "YOCZ320/3000/*",
      inputRpm: "3000",
      ratio: "2:1",
      a: "330",
      b: "300",
      c: "1660",
    },
    {
      model: "YOCZ360/3000/*",
      inputRpm: "3000",
      ratio: "2:1",
      a: "300",
      b: "350",
      c: "1680",
    },
    {
      model: "YOCZ400/1500/3000/*",
      inputRpm: "1500 / 3000",
      ratio: "4:1 / 2:1",
      a: "440",
      b: "350",
      c: "1650",
    },
    {
      model: "YOCZ420/1500/3000/*",
      inputRpm: "1500 / 3000",
      ratio: "4:1 / 2:1",
      a: "440",
      b: "350",
      c: "1650",
    },
    {
      model: "YOCZ450/1500/3000/*",
      inputRpm: "1500 / 3000",
      ratio: "4:1 / 2:1",
      a: "440",
      b: "550",
      c: "1800",
    },
    {
      model: "YOCZ465/1500/3000/*",
      inputRpm: "1500 / 3000",
      ratio: "4:1 / 2:1",
      a: "440",
      b: "550",
      c: "1800",
    },
    {
      model: "YOCZ500/1500/3000/*",
      inputRpm: "3000",
      ratio: "2:1",
      a: "440",
      b: "550",
      c: "1900",
    },
  ],
};

export const yocjBlock = {
  title: "YOC型",
  subtitle: "齿轮减速型液力偶合器传动装置",
  description: "YOC型（带减速齿轮的液力偶合器传动装置，订货型号示例含 YOCJ 等代号）",
  images: [
    "https://storage.googleapis.com/uxpilot-auth.appspot.com/3f2bda5584-b8eab1447b2ac3326468.png",
    "https://storage.googleapis.com/uxpilot-auth.appspot.com/4df377b69b-19845bda206084f111f2.png",
  ],
  table: [
    {
      model: "YOCJ500/*/*",
      n: "1000 / 1500",
      power: "20~60 / 70~200",
      ratio: "1:3",
      l: "1520",
      h: "1452",
      w: "1400",
    },
    {
      model: "YOCJ500/3000/*",
      n: "3000",
      power: "560~1625",
      ratio: "1:3",
      l: "1520",
      h: "1452",
      w: "1400",
    },
    {
      model: "YOCJ560/*/*",
      n: "1000 / 1500",
      power: "35~100 / 115~340",
      ratio: "1:3",
      l: "1600",
      h: "1630",
      w: "1400",
    },
    {
      model: "YOCJ580/3000/*",
      n: "3000",
      power: "1125~3250",
      ratio: "1:3",
      l: "2625",
      h: "2850",
      w: "1875",
    },
    {
      model: "YOCJ650/*/*",
      n: "1000 / 1500",
      power: "75~215 / 250~730",
      ratio: "1:3",
      l: "1850",
      h: "1532",
      w: "1680",
    },
    {
      model: "YOCJ700/*/*",
      n: "1000 / 1500",
      power: "140~410 / 480~1380",
      ratio: "1:3",
      l: "1850",
      h: "1532",
      w: "1680",
    },
    {
      model: "YOCJ750/*/*",
      n: "1000 / 1500",
      power: "150~440 / 510~1480",
      ratio: "1:3",
      l: "2390",
      h: "2180",
      w: "1815",
    },
    {
      model: "YOCJ875/1000/*",
      n: "1000",
      power: "300~850",
      ratio: "1:3",
      l: "2200",
      h: "1650",
      w: "1750",
    },
    {
      model: "YOCJ875/1500/*",
      n: "1500",
      power: "1160~3260",
      ratio: "1:3",
      l: "2888",
      h: "2520",
      w: "2250",
    },
    {
      model: "YOCJ1000/1500/*",
      n: "1500",
      power: "1250~3700",
      ratio: "1:3",
      l: "2988",
      h: "2520",
      w: "2250",
    },
  ],
};

/** 典型型号展示区块锚点导航（与页面分段 id 一致） */
export const tiaosuTypicalModelNav = [
  {
    id: "model-yotd",
    label: "YOTD型",
    hint: "对开箱体式 · 滚动轴承",
  },
  {
    id: "model-yotg",
    label: "YOTG型",
    hint: "固定箱体 · 滚动轴承",
  },
  {
    id: "model-yotgr",
    label: "YOTG…R型",
    hint: "圆筒式",
  },
  {
    id: "model-yotf",
    label: "YOTF型",
    hint: "固定箱体 · 滑动轴承",
  },
  {
    id: "model-yotf-cl",
    label: "YOTF…CL型",
    hint: "除鳞泵专用",
  },
  {
    id: "model-yocz",
    label: "YOCz型",
    hint: "齿轮增速传动装置",
  },
  {
    id: "model-yoc",
    label: "YOC型",
    hint: "齿轮减速传动装置",
  },
] as const;

export type TiaosuTypicalModelId = (typeof tiaosuTypicalModelNav)[number]["id"];
