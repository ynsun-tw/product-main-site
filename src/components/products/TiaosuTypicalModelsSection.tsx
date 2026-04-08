"use client";

import Image, { type StaticImageData } from "next/image";
import { useState } from "react";
import { couplingRed } from "@/data/product-content";
import {
  tiaosuTypicalModelNav,
  type TiaosuTypicalModelId,
  yocjBlock,
  yoczBlock,
} from "@/data/tiaosu-page";
import {
  YOTD_SPEC_HEADERS,
  YOTD_SPEC_ROWS,
  YOTF_SPEC_HEADERS,
  YOTF_SPEC_ROWS,
  YOTFCL_SPEC_HEADERS,
  YOTFCL_SPEC_ROWS,
  YOTG_SPEC_HEADERS,
  YOTG_SPEC_ROWS,
  YOTGR_SPEC_HEADERS,
  YOTGR_SPEC_ROWS,
} from "@/data/tiaosu-yot-spec-tables";
import imgYotd from "./YOTD.png";
import imgYotf from "./YOTF.png";
import imgYotfCl from "./YOTFXXXCL.png";
import imgYotg from "./YOTG.png";
import imgYotgr from "./YOTGR.png";

/** YOT 系列示意图（与限矩型页一致：组件内 import，兼容 basePath） */
const SERIES_DRAWING_BY_TAB: Partial<
  Record<TiaosuTypicalModelId, { src: StaticImageData; alt: string }>
> = {
  "model-yotd": {
    src: imgYotd,
    alt: "YOTD型调速型液力偶合器外形、安装尺寸及选型曲线",
  },
  "model-yotg": {
    src: imgYotg,
    alt: "YOTG型调速型液力偶合器外形、安装尺寸及选型曲线",
  },
  "model-yotgr": {
    src: imgYotgr,
    alt: "YOTG…R型调速型液力偶合器外形、安装尺寸及选型曲线",
  },
  "model-yotf": {
    src: imgYotf,
    alt: "YOTF型调速型液力偶合器外形、安装尺寸及选型曲线",
  },
  "model-yotf-cl": {
    src: imgYotfCl,
    alt: "YOTFxxxCL型调速型液力偶合器外形、安装尺寸及选型曲线",
  },
};

function SeriesDrawing({ src, alt }: { src: StaticImageData; alt: string }) {
  return (
    <div className="mb-8">
      <p className="mb-3 text-center text-sm text-gray-500">结构及选型示意图</p>
      <div className="relative mx-auto aspect-[2/1] w-full max-w-6xl overflow-hidden rounded-xl border border-white/15 bg-[#0c0c0c] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)]">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-contain p-2 sm:p-4"
          sizes="(max-width: 1152px) 100vw, 1152px"
        />
      </div>
    </div>
  );
}

function WideSpecTable({
  headers,
  rows,
}: {
  headers: readonly string[];
  rows: readonly (readonly string[])[];
}) {
  return (
    <div className="overflow-x-auto rounded-xl border border-white/20 bg-[#0c0c0c] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)]">
      <table className="w-full min-w-[640px] border-collapse text-left text-sm">
        <thead>
          <tr className="border-b border-white/25 bg-zinc-800/95">
            {headers.map((h) => (
              <th
                key={h}
                className="whitespace-nowrap px-2 py-3 text-left text-xs font-semibold text-white md:px-3 md:text-sm"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="text-gray-300">
          {rows.map((row, ri) => (
            <tr
              key={ri}
              className="border-b border-white/[0.08] odd:bg-white/[0.03] transition-colors hover:bg-white/[0.06]"
            >
              {row.map((cell, ci) => (
                <td
                  key={ci}
                  className={`px-2 py-2 text-xs tabular-nums md:px-3 md:text-sm ${
                    ci === 0 ? "font-medium text-white" : ""
                  }`}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const YOCZ_SPEC_HEADERS = [
  "型号",
  "输入转速 (r/min)",
  "最大传动比",
  "A",
  "B",
  "C",
] as const;

const YOC_SPEC_HEADERS = [
  "型号",
  "输入转速 (r/min)",
  "传递功率 (kW)",
  "最大传动比",
  "长度 L",
  "高度 H",
  "宽度 W",
] as const;

export function TiaosuTypicalModelsSection() {
  const [active, setActive] = useState<TiaosuTypicalModelId>("model-yotd");
  const drawing = SERIES_DRAWING_BY_TAB[active];

  const yoczRows = yoczBlock.table.map((r) => [
    r.model,
    r.inputRpm,
    r.ratio,
    r.a,
    r.b,
    r.c,
  ]);
  const yocRows = yocjBlock.table.map((r) => [
    r.model,
    r.n,
    r.power,
    r.ratio,
    r.l,
    r.h,
    r.w,
  ]);

  return (
    <section id="specs" className="scroll-mt-28 border-t border-white/10 py-20">
      <div className="mx-auto max-w-[1440px] px-6">
        <h2 className="mb-10 text-center text-2xl font-bold text-white md:text-3xl">
          典型型号展示
        </h2>

        <nav
          className="sticky top-24 z-20 -mx-6 mb-12 border-b border-white/10 bg-[#0a0a0a]/95 px-4 py-4 backdrop-blur-md sm:px-6 lg:top-28"
          aria-label="典型型号分段导航"
        >
          <div
            className="flex flex-wrap justify-center gap-2 md:gap-3"
            role="tablist"
          >
            {tiaosuTypicalModelNav.map((item) => {
              const isOn = active === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  role="tab"
                  aria-selected={isOn}
                  onClick={() => setActive(item.id)}
                  className={`max-w-[11rem] rounded border px-3 py-2 text-left text-xs transition md:max-w-none md:text-sm ${
                    isOn
                      ? "text-white"
                      : "border-white/15 bg-transparent text-gray-400 hover:border-white/30 hover:text-gray-200"
                  }`}
                  style={
                    isOn
                      ? {
                          borderColor: couplingRed,
                          backgroundColor: `${couplingRed}15`,
                        }
                      : undefined
                  }
                >
                  <span className="block font-semibold text-white">
                    {item.label}
                  </span>
                  <span className="mt-0.5 block text-[0.7rem] leading-snug text-gray-500 md:text-xs">
                    {item.hint}
                  </span>
                </button>
              );
            })}
          </div>
        </nav>

        <div className="relative">
          {active === "model-yotd" && (
            <div>
              <h3 className="mb-6 text-xl font-bold text-white">YOTD型</h3>
              {drawing ? <SeriesDrawing src={drawing.src} alt={drawing.alt} /> : null}
              <WideSpecTable headers={YOTD_SPEC_HEADERS} rows={YOTD_SPEC_ROWS} />
            </div>
          )}

          {active === "model-yotg" && (
            <div>
              <h3 className="mb-6 text-xl font-bold text-white">YOTG型</h3>
              {drawing ? <SeriesDrawing src={drawing.src} alt={drawing.alt} /> : null}
              <WideSpecTable headers={YOTG_SPEC_HEADERS} rows={YOTG_SPEC_ROWS} />
            </div>
          )}

          {active === "model-yotgr" && (
            <div>
              <h3 className="mb-6 text-xl font-bold text-white">YOTG…R型</h3>
              {drawing ? <SeriesDrawing src={drawing.src} alt={drawing.alt} /> : null}
              <WideSpecTable headers={YOTGR_SPEC_HEADERS} rows={YOTGR_SPEC_ROWS} />
            </div>
          )}

          {active === "model-yotf" && (
            <div>
              <h3 className="mb-6 text-xl font-bold text-white">YOTF型</h3>
              {drawing ? <SeriesDrawing src={drawing.src} alt={drawing.alt} /> : null}
              <WideSpecTable headers={YOTF_SPEC_HEADERS} rows={YOTF_SPEC_ROWS} />
            </div>
          )}

          {active === "model-yotf-cl" && (
            <div>
              <h3 className="mb-6 text-xl font-bold text-white">YOTFxxxCL型</h3>
              {drawing ? <SeriesDrawing src={drawing.src} alt={drawing.alt} /> : null}
              <WideSpecTable headers={YOTFCL_SPEC_HEADERS} rows={YOTFCL_SPEC_ROWS} />
            </div>
          )}

          {active === "model-yocz" && (
            <div>
              <h3 className="mb-6 text-xl font-bold text-white">YOCz型</h3>
              <WideSpecTable
                headers={[...YOCZ_SPEC_HEADERS]}
                rows={yoczRows}
              />
            </div>
          )}

          {active === "model-yoc" && (
            <div>
              <h3 className="mb-6 text-xl font-bold text-white">YOC型</h3>
              <WideSpecTable
                headers={[...YOC_SPEC_HEADERS]}
                rows={yocRows}
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
