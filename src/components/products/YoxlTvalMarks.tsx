import type { ReactNode } from "react";

const subClass = "text-[0.7em] leading-none align-baseline";

/** YOX<sub>L</sub> */
export function YoxlMark(): ReactNode {
  return (
    <>
      YOX<sub className={subClass}>L</sub>
    </>
  );
}

/** TVA<sub>L</sub> */
export function TvalMark(): ReactNode {
  return (
    <>
      TVA<sub className={subClass}>L</sub>
    </>
  );
}

/** 三、YOX<sub>L</sub>、TVA<sub>L</sub>型 */
export function YoxlTvalSectionHeading(): ReactNode {
  return (
    <span className="inline-flex flex-wrap items-baseline">
      三、
      <YoxlMark />
      、
      <TvalMark />
      型
    </span>
  );
}

/** 参数表型号列：YOXL… / TVAL… */
export function formatYoxlTvalModelName(model: string): ReactNode {
  if (model.startsWith("YOXL")) {
    return (
      <>
        YOX<sub className={subClass}>L</sub>
        {model.slice(4)}
      </>
    );
  }
  if (model.startsWith("TVAL")) {
    return (
      <>
        TVA<sub className={subClass}>L</sub>
        {model.slice(4)}
      </>
    );
  }
  return model;
}

/** YOX<sub>ZL</sub> */
export function YoxzlMark(): ReactNode {
  return (
    <>
      YOX<sub className={subClass}>ZL</sub>
    </>
  );
}

/** YOX<sub>IIz</sub> */
export function YoxiizMark(): ReactNode {
  return (
    <>
      YOX<sub className={subClass}>IIz</sub>
    </>
  );
}

/** YOX<sub>E</sub> */
export function YoxeMark(): ReactNode {
  return (
    <>
      YOX<sub className={subClass}>E</sub>
    </>
  );
}

/** TVA<sub>E</sub> */
export function TvaeMark(): ReactNode {
  return (
    <>
      TVA<sub className={subClass}>E</sub>
    </>
  );
}

/** 四、YOX<sub>ZL</sub>、YOX<sub>IIz</sub>型 */
export function YoxzlYoxiizSectionHeading(): ReactNode {
  return (
    <span className="inline-flex flex-wrap items-baseline">
      四、
      <YoxzlMark />
      、
      <YoxiizMark />
      型
    </span>
  );
}

/** 五、YOX<sub>E</sub>、TVA<sub>E</sub>型 */
export function YoxeTvaeSectionHeading(): ReactNode {
  return (
    <span className="inline-flex flex-wrap items-baseline">
      五、
      <YoxeMark />
      、
      <TvaeMark />
      型
    </span>
  );
}

/** 参数表：YOXZL… / YOXIIz… */
export function formatYoxzlYoxiizModelName(model: string): ReactNode {
  if (model.startsWith("YOXZL")) {
    return (
      <>
        YOX<sub className={subClass}>ZL</sub>
        {model.slice(5)}
      </>
    );
  }
  if (model.startsWith("YOXIIz")) {
    return (
      <>
        YOX<sub className={subClass}>IIz</sub>
        {model.slice(6)}
      </>
    );
  }
  return model;
}

/** 参数表：YOXE… / TVAE… */
export function formatYoxeTvaeModelName(model: string): ReactNode {
  if (model.startsWith("YOXE")) {
    return (
      <>
        YOX<sub className={subClass}>E</sub>
        {model.slice(4)}
      </>
    );
  }
  if (model.startsWith("TVAE")) {
    return (
      <>
        TVA<sub className={subClass}>E</sub>
        {model.slice(4)}
      </>
    );
  }
  return model;
}

/** 产品首页等标签：YOXL / TVAL / YOXLL / TVALL */
export function formatProductModelBadge(model: string): ReactNode {
  if (model === "YOXL") return <YoxlMark />;
  if (model === "TVAL") return <TvalMark />;
  if (model === "YOXZL") return <YoxzlMark />;
  if (model === "YOXE") return <YoxeMark />;
  if (model === "TVAE") return <TvaeMark />;
  if (model === "YOXLL")
    return (
      <>
        YOX<sub className={subClass}>LL</sub>
      </>
    );
  if (model === "TVALL")
    return (
      <>
        TVA<sub className={subClass}>LL</sub>
      </>
    );
  return model;
}
