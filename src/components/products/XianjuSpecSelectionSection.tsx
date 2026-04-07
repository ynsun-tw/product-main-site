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
          <div className="overflow-x-auto border border-white/10">
            <table className="w-full min-w-[720px] text-center text-sm text-gray-300">
              <thead>
                <tr className="border-b border-white/10 bg-white/5">
                  <th
                    rowSpan={3}
                    className="border-r border-white/10 px-2 py-3 align-middle text-left font-medium text-white"
                  >
                    规格
                  </th>
                  <th
                    colSpan={6}
                    className="px-2 py-2 text-xs font-medium text-gray-200 md:text-sm"
                  >
                    {xianjuOilSpecSelectionTable.headerPassingPower}
                  </th>
                </tr>
                <tr className="border-b border-white/10 bg-white/5">
                  <th
                    colSpan={6}
                    className="px-2 py-2 text-xs font-medium text-gray-200 md:text-sm"
                  >
                    {xianjuOilSpecSelectionTable.headerInputRpm}
                  </th>
                </tr>
                <tr className="border-b border-white/10 bg-white/[0.07] text-xs text-gray-300 md:text-sm">
                  {xianjuOilSpecSelectionTable.rpmColumns.map((rpm) => (
                    <th key={rpm} className="px-1 py-2 font-medium md:px-2">
                      {rpm}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {xianjuOilSpecSelectionTable.rows.map((row) => (
                  <tr
                    key={row.spec}
                    className="border-b border-white/5 hover:bg-white/[0.02]"
                  >
                    <td className="border-r border-white/10 px-2 py-2.5 text-left font-medium text-white">
                      {row.spec}
                    </td>
                    {row.kw.map((cell, i) => (
                      <td key={i} className="px-1 py-2.5 text-xs md:px-2 md:text-sm">
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
            <div className="overflow-x-auto border border-white/10">
              <table className="w-full min-w-[900px] text-left text-sm text-gray-300">
                <thead>
                  <tr className="border-b border-white/10 bg-white/5">
                    <th className="px-2 py-3">型号</th>
                    <th className="px-2 py-3">Lmin</th>
                    <th className="px-2 py-3">D</th>
                    <th className="px-2 py-3" colSpan={2}>
                      输入端
                    </th>
                    <th className="px-2 py-3" colSpan={2}>
                      输出端
                    </th>
                    <th className="px-2 py-3" colSpan={2}>
                      充水量
                    </th>
                    <th className="px-2 py-3">重量</th>
                    <th className="px-2 py-3">最高转速</th>
                  </tr>
                  <tr className="border-b border-white/10 text-xs text-gray-500">
                    <th />
                    <th />
                    <th />
                    <th>d1max</th>
                    <th>H1max</th>
                    <th>d2max</th>
                    <th>H2max</th>
                    <th>max</th>
                    <th>min</th>
                    <th>(不包括水)</th>
                    <th />
                  </tr>
                </thead>
                <tbody>
                  {xianjuTableWater.map((row) => (
                    <tr
                      key={row.model}
                      className="border-b border-white/5 hover:bg-white/[0.02]"
                    >
                      <td className="px-2 py-3 font-medium text-white">{row.model}</td>
                      <td className="px-2 py-3">{row.lmin}</td>
                      <td className="px-2 py-3">{row.d}</td>
                      <td className="px-2 py-3">{row.inMax}</td>
                      <td className="px-2 py-3">{row.h1}</td>
                      <td className="px-2 py-3">{row.outMax}</td>
                      <td className="px-2 py-3">{row.h2}</td>
                      <td className="px-2 py-3">{row.fluidMax}</td>
                      <td className="px-2 py-3">{row.fluidMin}</td>
                      <td className="px-2 py-3">{row.weight}</td>
                      <td className="px-2 py-3">{row.rpm}</td>
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
            <div className="overflow-x-auto border border-white/10">
              <table className="w-full min-w-[900px] text-left text-sm text-gray-300">
                <thead>
                  <tr className="border-b border-white/10 bg-white/5">
                    <th className="px-2 py-3">型号</th>
                    <th className="px-2 py-3">Lmin</th>
                    <th className="px-2 py-3">D</th>
                    <th className="px-2 py-3" colSpan={2}>
                      输入端
                    </th>
                    <th className="px-2 py-3" colSpan={2}>
                      输出端
                    </th>
                    <th className="px-2 py-3" colSpan={2}>
                      充油量
                    </th>
                    <th className="px-2 py-3">重量</th>
                    <th className="px-2 py-3">最高转速 (r/min)</th>
                  </tr>
                  <tr className="border-b border-white/10 text-xs text-gray-500">
                    <th />
                    <th />
                    <th />
                    <th>d1max</th>
                    <th>H1max</th>
                    <th>d2max</th>
                    <th>H2max</th>
                    <th>max</th>
                    <th>min</th>
                    <th>(不包括油) kg</th>
                    <th />
                  </tr>
                </thead>
                <tbody>
                  {xianjuTableYoxTva.map((row) => (
                    <tr
                      key={row.model}
                      className="border-b border-white/5 hover:bg-white/[0.02]"
                    >
                      <td className="px-2 py-3 font-medium text-white">{row.model}</td>
                      <td className="px-2 py-3">{row.lmin}</td>
                      <td className="px-2 py-3">{row.d}</td>
                      <td className="px-2 py-3">{row.inMax}</td>
                      <td className="px-2 py-3">{row.h1}</td>
                      <td className="px-2 py-3">{row.outMax}</td>
                      <td className="px-2 py-3">{row.h2}</td>
                      <td className="px-2 py-3">{row.oilMax}</td>
                      <td className="px-2 py-3">{row.oilMin}</td>
                      <td className="px-2 py-3">{row.weight}</td>
                      <td className="px-2 py-3">{row.rpm}</td>
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
            <div className="overflow-x-auto border border-white/10">
              <table className="w-full min-w-[640px] text-left text-sm text-gray-300">
                <thead>
                  <tr className="border-b border-white/10 bg-white/5">
                    <th className="px-2 py-3">型号</th>
                    <th className="px-2 py-3">Lmin</th>
                    <th className="px-2 py-3">D</th>
                    <th className="px-2 py-3">dmax</th>
                    <th className="px-2 py-3" colSpan={2}>
                      充油量
                    </th>
                    <th className="px-2 py-3">最高转速 (r/min)</th>
                    <th className="px-2 py-3">重量(参考) (kg)</th>
                  </tr>
                  <tr className="border-b border-white/10 text-xs text-gray-500">
                    <th />
                    <th />
                    <th />
                    <th />
                    <th>max</th>
                    <th>min</th>
                    <th />
                    <th />
                  </tr>
                </thead>
                <tbody>
                  {xianjuTableYoxlTval.map((row) => (
                    <tr
                      key={row.model}
                      className="border-b border-white/5 hover:bg-white/[0.02]"
                    >
                      <td className="px-2 py-3 font-medium text-white">
                        {formatYoxlTvalModelName(row.model)}
                      </td>
                      <td className="px-2 py-3">{row.lmin}</td>
                      <td className="px-2 py-3">{row.d}</td>
                      <td className="px-2 py-3">{row.dmax}</td>
                      <td className="px-2 py-3">{row.oilMax}</td>
                      <td className="px-2 py-3">{row.oilMin}</td>
                      <td className="px-2 py-3">{row.rpm}</td>
                      <td className="px-2 py-3">{row.weight}</td>
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
            <div className="overflow-x-auto border border-white/10">
              <table className="w-full min-w-[800px] text-left text-sm text-gray-300">
                <thead>
                  <tr className="border-b border-white/10 bg-white/5">
                    <th className="px-2 py-3">型号</th>
                    <th className="px-2 py-3">Lmin</th>
                    <th className="px-2 py-3">D</th>
                    <th className="px-2 py-3">D1</th>
                    <th className="px-2 py-3" colSpan={2}>
                      输入端
                    </th>
                    <th className="px-2 py-3" colSpan={2}>
                      输出端
                    </th>
                    <th className="px-2 py-3">最高转速</th>
                  </tr>
                  <tr className="border-b border-white/10 text-xs text-gray-500">
                    <th />
                    <th />
                    <th />
                    <th />
                    <th>d1max</th>
                    <th>H1max</th>
                    <th>d2max</th>
                    <th>H2max</th>
                    <th />
                  </tr>
                </thead>
                <tbody>
                  {xianjuTableYoxzl.map((row) => (
                    <tr
                      key={row.model}
                      className="border-b border-white/5 hover:bg-white/[0.02]"
                    >
                      <td className="px-2 py-3 font-medium text-white">
                        {formatYoxzlYoxiizModelName(row.model)}
                      </td>
                      <td className="px-2 py-3">{row.lmin}</td>
                      <td className="px-2 py-3">{row.d}</td>
                      <td className="px-2 py-3">{row.d1}</td>
                      <td className="px-2 py-3">{row.inMax}</td>
                      <td className="px-2 py-3">{row.h1}</td>
                      <td className="px-2 py-3">{row.outMax}</td>
                      <td className="px-2 py-3">{row.h2}</td>
                      <td className="px-2 py-3">{row.rpm}</td>
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
            <div className="overflow-x-auto border border-white/10">
              <table className="w-full min-w-[900px] text-left text-sm text-gray-300">
                <thead>
                  <tr className="border-b border-white/10 bg-white/5">
                    <th className="px-2 py-3">型号</th>
                    <th className="px-2 py-3">D</th>
                    <th className="px-2 py-3">L2min</th>
                    <th className="px-2 py-3">I</th>
                    <th className="px-2 py-3">J</th>
                    <th className="px-2 py-3">d1max</th>
                    <th className="px-2 py-3">d2max</th>
                    <th className="px-2 py-3" colSpan={2}>
                      充油量(L)
                    </th>
                    <th className="px-2 py-3">重量(kg) 不包括油</th>
                    <th className="px-2 py-3">最高转速</th>
                  </tr>
                  <tr className="border-b border-white/10 text-xs text-gray-500">
                    <th />
                    <th />
                    <th />
                    <th />
                    <th />
                    <th />
                    <th />
                    <th>max</th>
                    <th>min</th>
                    <th />
                    <th />
                  </tr>
                </thead>
                <tbody>
                  {xianjuTableYoxeTvae.map((row) => (
                    <tr
                      key={row.model}
                      className="border-b border-white/5 hover:bg-white/[0.02]"
                    >
                      <td className="px-2 py-3 font-medium text-white">
                        {formatYoxeTvaeModelName(row.model)}
                      </td>
                      <td className="px-2 py-3">{row.d}</td>
                      <td className="px-2 py-3">{row.l2min}</td>
                      <td className="px-2 py-3">{row.i}</td>
                      <td className="px-2 py-3">{row.j}</td>
                      <td className="px-2 py-3">{row.d1max}</td>
                      <td className="px-2 py-3">{row.d2max}</td>
                      <td className="px-2 py-3">{row.oilMax}</td>
                      <td className="px-2 py-3">{row.oilMin}</td>
                      <td className="px-2 py-3">{row.weight}</td>
                      <td className="px-2 py-3">{row.rpm}</td>
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
