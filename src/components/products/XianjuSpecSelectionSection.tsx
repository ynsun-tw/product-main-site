"use client";

import Image from "next/image";
import { useState } from "react";
import { couplingRed } from "@/data/product-content";
import {
  xianjuFootnoteYoxe,
  xianjuFootnotesWater,
  xianjuOilSpecSelectionTable,
  xianjuSpecCategories,
  xianjuSpecIntro,
  xianjuTableWater,
  xianjuTableYoxeTvae,
  xianjuTableYoxlTval,
  xianjuTableYoxTva,
  xianjuTableYoxzl,
  type XianjuSpecCategoryId,
} from "@/data/xianju-page";
import {
  YoxeMark,
  YoxeTvaeSectionHeading,
  YoxiizMark,
  YoxlTvalSectionHeading,
  YoxzlMark,
  YoxzlYoxiizSectionHeading,
  TvaeMark,
  formatYoxeTvaeModelName,
  formatYoxlTvalModelName,
  formatYoxzlYoxiizModelName,
  TvalMark,
  YoxlMark,
} from "./YoxlTvalMarks";

/** 参数表外框：圆角、边界与轻微内高光，便于和背景区分 */
const tableShell =
  "overflow-x-auto rounded-xl border border-white/20 bg-[#0c0c0c] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)]";
/** 表头主行（分组标题） */
const theadRowMain = "border-b border-white/25 bg-zinc-800/95";
/** 表头子行（d1max 等） */
const theadRowSub = "border-b border-white/20 bg-zinc-900/90";
/** 表体行：分隔线与斑马纹 */
const tbodyTr =
  "border-b border-white/[0.08] odd:bg-white/[0.03] transition-colors hover:bg-white/[0.06]";
/** 表头单元格：主行 */
const thMain = "px-3 py-3 text-left text-sm font-semibold text-white";
const thMainCenter = "px-3 py-3 text-center text-sm font-semibold text-white";
/** 表头单元格：子行 */
const thSub = "px-3 py-2 text-xs font-medium text-gray-400";

export function XianjuSpecSelectionSection() {
  const [active, setActive] = useState<XianjuSpecCategoryId>("water");

  return (
    <section id="specs" className="scroll-mt-28 border-t border-white/10 py-20">
      <div className="mx-auto max-w-[1440px] px-6">
        <h2 className="mb-12 text-center text-3xl font-bold text-white">
          {xianjuSpecIntro.sectionTitle}
        </h2>

        <div className="mb-14">
          <h3 className="mb-2 text-center text-lg font-semibold text-white md:text-xl">
            {xianjuOilSpecSelectionTable.title}
          </h3>
          <p className="mb-6 text-center text-xs text-gray-500">
            {xianjuOilSpecSelectionTable.unitHint}
          </p>
          <div className={tableShell}>
            <table className="w-full min-w-[720px] border-collapse text-center text-sm">
              <thead>
                <tr
                  className={`${theadRowMain} border-t-2`}
                  style={{ borderTopColor: couplingRed }}
                >
                  <th
                    rowSpan={3}
                    className="sticky left-0 z-20 min-w-[3.75rem] border-r border-white/20 bg-zinc-900 px-3 py-4 text-left align-middle text-sm font-bold text-white shadow-[4px_0_12px_rgba(0,0,0,0.35)]"
                  >
                    规格
                  </th>
                  <th
                    colSpan={6}
                    className="px-4 py-3.5 text-center text-sm font-semibold tracking-wide text-white"
                  >
                    {xianjuOilSpecSelectionTable.headerPassingPower}
                  </th>
                </tr>
                <tr className={theadRowSub}>
                  <th colSpan={6} className="px-4 py-2.5 text-center text-xs font-medium text-gray-300">
                    {xianjuOilSpecSelectionTable.headerInputRpm}
                  </th>
                </tr>
                <tr className="border-b border-white/25 bg-black/50">
                  {xianjuOilSpecSelectionTable.rpmColumns.map((rpm) => (
                    <th
                      key={rpm}
                      className="border-l border-white/10 px-2 py-2.5 text-center text-xs font-semibold tabular-nums text-white first:border-l-0 md:text-sm"
                    >
                      {rpm}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="text-gray-300">
                {xianjuOilSpecSelectionTable.rows.map((row) => (
                  <tr key={row.spec} className={tbodyTr}>
                    <td className="sticky left-0 z-10 border-r border-white/15 bg-[#0a0a0a] px-3 py-2.5 text-left text-sm font-semibold text-white tabular-nums shadow-[4px_0_8px_rgba(0,0,0,0.25)]">
                      {row.spec}
                    </td>
                    {row.kw.map((cell, i) => (
                      <td
                        key={i}
                        className="px-2 py-2.5 text-xs tabular-nums md:px-3 md:text-sm"
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-center text-xs text-gray-500">
            {xianjuOilSpecSelectionTable.footnote}
          </p>
        </div>

        <h3 className="mb-6 text-center text-xl font-semibold text-white md:text-2xl">
          {xianjuSpecIntro.curveTitle}
        </h3>
        <div className="relative mx-auto mb-10 aspect-[16/10] w-full max-w-4xl border border-white/10 bg-black/40">
          <Image
            src={xianjuSpecIntro.curveImage}
            alt={xianjuSpecIntro.curveTitle}
            fill
            className="object-contain p-4"
            sizes="(max-width: 896px) 100vw, 896px"
            priority
          />
        </div>

        <p className="mx-auto mb-10 max-w-3xl text-center text-sm leading-relaxed text-gray-400">
          {xianjuSpecIntro.temperatureNote}
        </p>

        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {xianjuSpecCategories.map((cat) => {
            const isOn = active === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActive(cat.id)}
                {...(cat.id === "yoxl-tval" ||
                cat.id === "yoxzl" ||
                cat.id === "yoxe-tvae"
                  ? { "aria-label": cat.label }
                  : {})}
                className={`rounded border px-3 py-2 text-left text-xs font-medium transition md:text-sm ${
                  isOn
                    ? "text-white"
                    : "border-white/15 bg-transparent text-gray-400 hover:border-white/25 hover:text-gray-200"
                }`}
                style={
                  isOn
                    ? { borderColor: couplingRed, backgroundColor: `${couplingRed}15` }
                    : undefined
                }
              >
                {cat.id === "yoxl-tval" ? (
                  <>
                    <YoxlMark />
                    、
                    <TvalMark />
                    型 (带皮带轮式)
                  </>
                ) : cat.id === "yoxzl" ? (
                  <>
                    <YoxzlMark />
                    、
                    <YoxiizMark />
                    型 (带制动轮式)
                  </>
                ) : cat.id === "yoxe-tvae" ? (
                  <>
                    <YoxeMark />
                    、
                    <TvaeMark />
                    型
                  </>
                ) : (
                  cat.label
                )}
              </button>
            );
          })}
        </div>

        {active === "water" && (
          <>
            <h4 className="mb-2 text-lg font-bold text-white">一、YOXs、TVAs型</h4>
            <p className="mb-6 text-sm text-gray-500">(水介质)</p>
            <div className={tableShell}>
              <table className="w-full min-w-[900px] border-collapse text-left text-sm text-gray-300">
                <thead>
                  <tr className={theadRowMain}>
                    <th className={thMain}>型号</th>
                    <th className={thMain}>Lmin</th>
                    <th className={thMain}>D</th>
                    <th className={thMainCenter} colSpan={2}>
                      输入端
                    </th>
                    <th className={thMainCenter} colSpan={2}>
                      输出端
                    </th>
                    <th className={thMainCenter} colSpan={2}>
                      充水量
                    </th>
                    <th className={thMain}>重量</th>
                    <th className={thMain}>最高转速</th>
                  </tr>
                  <tr className={theadRowSub}>
                    <th className={thSub} />
                    <th className={thSub} />
                    <th className={thSub} />
                    <th className={thSub}>d1max</th>
                    <th className={thSub}>H1max</th>
                    <th className={thSub}>d2max</th>
                    <th className={thSub}>H2max</th>
                    <th className={thSub}>max</th>
                    <th className={thSub}>min</th>
                    <th className={thSub}>(不包括水)</th>
                    <th className={thSub} />
                  </tr>
                </thead>
                <tbody>
                  {xianjuTableWater.map((row) => (
                    <tr key={row.model} className={tbodyTr}>
                      <td className="px-3 py-2.5 font-medium text-white">{row.model}</td>
                      <td className="px-3 py-2.5 tabular-nums">{row.lmin}</td>
                      <td className="px-3 py-2.5 tabular-nums">{row.d}</td>
                      <td className="px-3 py-2.5 tabular-nums">{row.inMax}</td>
                      <td className="px-3 py-2.5 tabular-nums">{row.h1}</td>
                      <td className="px-3 py-2.5 tabular-nums">{row.outMax}</td>
                      <td className="px-3 py-2.5 tabular-nums">{row.h2}</td>
                      <td className="px-3 py-2.5 tabular-nums">{row.fluidMax}</td>
                      <td className="px-3 py-2.5 tabular-nums">{row.fluidMin}</td>
                      <td className="px-3 py-2.5 tabular-nums">{row.weight}</td>
                      <td className="px-3 py-2.5 tabular-nums">{row.rpm}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <ul className="mt-6 space-y-2 text-xs text-gray-500">
              {xianjuFootnotesWater.map((f) => (
                <li key={f.slice(0, 24)}>{f}</li>
              ))}
            </ul>
          </>
        )}

        {active === "yox-tva" && (
          <>
            <h4 className="mb-6 text-lg font-bold text-white">二、YOX、TVA型</h4>
            <div className={tableShell}>
              <table className="w-full min-w-[900px] border-collapse text-left text-sm text-gray-300">
                <thead>
                  <tr className={theadRowMain}>
                    <th className={thMain}>型号</th>
                    <th className={thMain}>Lmin</th>
                    <th className={thMain}>D</th>
                    <th className={thMainCenter} colSpan={2}>
                      输入端
                    </th>
                    <th className={thMainCenter} colSpan={2}>
                      输出端
                    </th>
                    <th className={thMainCenter} colSpan={2}>
                      充油量
                    </th>
                    <th className={thMain}>重量</th>
                    <th className={thMain}>最高转速 (r/min)</th>
                  </tr>
                  <tr className={theadRowSub}>
                    <th className={thSub} />
                    <th className={thSub} />
                    <th className={thSub} />
                    <th className={thSub}>d1max</th>
                    <th className={thSub}>H1max</th>
                    <th className={thSub}>d2max</th>
                    <th className={thSub}>H2max</th>
                    <th className={thSub}>max</th>
                    <th className={thSub}>min</th>
                    <th className={thSub}>(不包括油) kg</th>
                    <th className={thSub} />
                  </tr>
                </thead>
                <tbody>
                  {xianjuTableYoxTva.map((row) => (
                    <tr key={row.model} className={tbodyTr}>
                      <td className="px-3 py-2.5 font-medium text-white">{row.model}</td>
                      <td className="px-3 py-2.5 tabular-nums">{row.lmin}</td>
                      <td className="px-3 py-2.5 tabular-nums">{row.d}</td>
                      <td className="px-3 py-2.5 tabular-nums">{row.inMax}</td>
                      <td className="px-3 py-2.5 tabular-nums">{row.h1}</td>
                      <td className="px-3 py-2.5 tabular-nums">{row.outMax}</td>
                      <td className="px-3 py-2.5 tabular-nums">{row.h2}</td>
                      <td className="px-3 py-2.5 tabular-nums">{row.oilMax}</td>
                      <td className="px-3 py-2.5 tabular-nums">{row.oilMin}</td>
                      <td className="px-3 py-2.5 tabular-nums">{row.weight}</td>
                      <td className="px-3 py-2.5 tabular-nums">{row.rpm}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}

        {active === "yoxl-tval" && (
          <>
            <h4 className="mb-2 text-lg font-bold text-white">
              <YoxlTvalSectionHeading />
            </h4>
            <p className="mb-6 text-sm text-gray-500">(带皮带轮式)</p>
            <div className={tableShell}>
              <table className="w-full min-w-[640px] border-collapse text-left text-sm text-gray-300">
                <thead>
                  <tr className={theadRowMain}>
                    <th className={thMain}>型号</th>
                    <th className={thMain}>Lmin</th>
                    <th className={thMain}>D</th>
                    <th className={thMain}>dmax</th>
                    <th className={thMainCenter} colSpan={2}>
                      充油量
                    </th>
                    <th className={thMain}>最高转速 (r/min)</th>
                    <th className={thMain}>重量(参考) (kg)</th>
                  </tr>
                  <tr className={theadRowSub}>
                    <th className={thSub} />
                    <th className={thSub} />
                    <th className={thSub} />
                    <th className={thSub} />
                    <th className={thSub}>max</th>
                    <th className={thSub}>min</th>
                    <th className={thSub} />
                    <th className={thSub} />
                  </tr>
                </thead>
                <tbody>
                  {xianjuTableYoxlTval.map((row) => (
                    <tr key={row.model} className={tbodyTr}>
                      <td className="px-3 py-2.5 font-medium text-white">
                        {formatYoxlTvalModelName(row.model)}
                      </td>
                      <td className="px-3 py-2.5 tabular-nums">{row.lmin}</td>
                      <td className="px-3 py-2.5 tabular-nums">{row.d}</td>
                      <td className="px-3 py-2.5 tabular-nums">{row.dmax}</td>
                      <td className="px-3 py-2.5 tabular-nums">{row.oilMax}</td>
                      <td className="px-3 py-2.5 tabular-nums">{row.oilMin}</td>
                      <td className="px-3 py-2.5 tabular-nums">{row.rpm}</td>
                      <td className="px-3 py-2.5 tabular-nums">{row.weight}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}

        {active === "yoxzl" && (
          <>
            <h4 className="mb-2 text-lg font-bold text-white">
              <YoxzlYoxiizSectionHeading />
            </h4>
            <p className="mb-6 text-sm text-gray-500">(带制动轮式)</p>
            <div className={tableShell}>
              <table className="w-full min-w-[800px] border-collapse text-left text-sm text-gray-300">
                <thead>
                  <tr className={theadRowMain}>
                    <th className={thMain}>型号</th>
                    <th className={thMain}>Lmin</th>
                    <th className={thMain}>D</th>
                    <th className={thMain}>D1</th>
                    <th className={thMainCenter} colSpan={2}>
                      输入端
                    </th>
                    <th className={thMainCenter} colSpan={2}>
                      输出端
                    </th>
                    <th className={thMain}>最高转速</th>
                  </tr>
                  <tr className={theadRowSub}>
                    <th className={thSub} />
                    <th className={thSub} />
                    <th className={thSub} />
                    <th className={thSub} />
                    <th className={thSub}>d1max</th>
                    <th className={thSub}>H1max</th>
                    <th className={thSub}>d2max</th>
                    <th className={thSub}>H2max</th>
                    <th className={thSub} />
                  </tr>
                </thead>
                <tbody>
                  {xianjuTableYoxzl.map((row) => (
                    <tr key={row.model} className={tbodyTr}>
                      <td className="px-3 py-2.5 font-medium text-white">
                        {formatYoxzlYoxiizModelName(row.model)}
                      </td>
                      <td className="px-3 py-2.5 tabular-nums">{row.lmin}</td>
                      <td className="px-3 py-2.5 tabular-nums">{row.d}</td>
                      <td className="px-3 py-2.5 tabular-nums">{row.d1}</td>
                      <td className="px-3 py-2.5 tabular-nums">{row.inMax}</td>
                      <td className="px-3 py-2.5 tabular-nums">{row.h1}</td>
                      <td className="px-3 py-2.5 tabular-nums">{row.outMax}</td>
                      <td className="px-3 py-2.5 tabular-nums">{row.h2}</td>
                      <td className="px-3 py-2.5 tabular-nums">{row.rpm}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}

        {active === "yoxe-tvae" && (
          <>
            <h4 className="mb-6 text-lg font-bold text-white">
              <YoxeTvaeSectionHeading />
            </h4>
            <div className={tableShell}>
              <table className="w-full min-w-[900px] border-collapse text-left text-sm text-gray-300">
                <thead>
                  <tr className={theadRowMain}>
                    <th className={thMain}>型号</th>
                    <th className={thMain}>D</th>
                    <th className={thMain}>L2min</th>
                    <th className={thMain}>I</th>
                    <th className={thMain}>J</th>
                    <th className={thMain}>d1max</th>
                    <th className={thMain}>d2max</th>
                    <th className={thMainCenter} colSpan={2}>
                      充油量(L)
                    </th>
                    <th className={thMain}>重量(kg) 不包括油</th>
                    <th className={thMain}>最高转速</th>
                  </tr>
                  <tr className={theadRowSub}>
                    <th className={thSub} />
                    <th className={thSub} />
                    <th className={thSub} />
                    <th className={thSub} />
                    <th className={thSub} />
                    <th className={thSub} />
                    <th className={thSub} />
                    <th className={thSub}>max</th>
                    <th className={thSub}>min</th>
                    <th className={thSub} />
                    <th className={thSub} />
                  </tr>
                </thead>
                <tbody>
                  {xianjuTableYoxeTvae.map((row) => (
                    <tr key={row.model} className={tbodyTr}>
                      <td className="px-3 py-2.5 font-medium text-white">
                        {formatYoxeTvaeModelName(row.model)}
                      </td>
                      <td className="px-3 py-2.5 tabular-nums">{row.d}</td>
                      <td className="px-3 py-2.5 tabular-nums">{row.l2min}</td>
                      <td className="px-3 py-2.5 tabular-nums">{row.i}</td>
                      <td className="px-3 py-2.5 tabular-nums">{row.j}</td>
                      <td className="px-3 py-2.5 tabular-nums">{row.d1max}</td>
                      <td className="px-3 py-2.5 tabular-nums">{row.d2max}</td>
                      <td className="px-3 py-2.5 tabular-nums">{row.oilMax}</td>
                      <td className="px-3 py-2.5 tabular-nums">{row.oilMin}</td>
                      <td className="px-3 py-2.5 tabular-nums">{row.weight}</td>
                      <td className="px-3 py-2.5 tabular-nums">{row.rpm}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-6 text-xs text-gray-500">{xianjuFootnoteYoxe}</p>
          </>
        )}

        <p className="mt-10 text-center text-xs text-gray-500">
          * 注：表中数据仅供参考，具体尺寸请以实际图纸为准。
        </p>
      </div>
    </section>
  );
}
