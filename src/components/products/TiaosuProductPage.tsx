import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { couplingRed, externalContactFormUrl } from "@/data/product-content";
import {
  modelCodeLegend,
  structureSection,
  tiaosuAdvantages,
  tiaosuHero,
} from "@/data/tiaosu-page";
import { TiaosuTypicalModelsSection } from "./TiaosuTypicalModelsSection";
import imgStructure from "./structure.png";
import imgTypesDiagram from "./types.png";

function SectionTitle({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <h2
      className={`mb-10 text-center text-2xl font-bold text-white md:text-3xl ${className}`}
    >
      {children}
    </h2>
  );
}

export function TiaosuProductPage() {
  return (
    <main className="bg-[#0a0a0a]">
      {/* Hero */}
      <section
        id="home"
        className="relative flex min-h-[560px] scroll-mt-28 items-center overflow-hidden pt-28 md:min-h-[640px]"
      >
        <div className="absolute inset-0">
          <Image
            src={tiaosuHero.image}
            alt={tiaosuHero.title}
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-black/40" />
        </div>
        <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 py-16 lg:px-12">
          <p
            className="mb-3 text-sm font-semibold uppercase tracking-[0.2em]"
            style={{ color: couplingRed }}
          >
            {tiaosuHero.subtitle}
          </p>
          <h1 className="mb-8 max-w-2xl text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
            {tiaosuHero.title}
          </h1>
          <div className="flex flex-wrap gap-3">
            {tiaosuHero.tags.map((t) => (
              <span
                key={t}
                className="border border-white/20 bg-black/40 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm"
              >
                {t}
              </span>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#advantages"
              className="rounded px-6 py-3 text-sm font-bold text-white"
              style={{ backgroundColor: couplingRed }}
            >
              了解技术特点
            </a>
            <a
              href="#specs"
              className="rounded border border-white/25 px-6 py-3 text-sm font-bold text-white hover:bg-white/10"
            >
              典型型号与参数
            </a>
            <a
              href={externalContactFormUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded border border-white/25 px-6 py-3 text-sm font-bold text-white hover:bg-white/10"
            >
              立即咨询
            </a>
          </div>
        </div>
      </section>

      {/* 三大优势 */}
      <section id="advantages" className="scroll-mt-28 border-t border-white/10 py-20">
        <div className="mx-auto max-w-[1440px] px-6">
          <div className="grid gap-8 md:grid-cols-3">
            {tiaosuAdvantages.map((a) => (
              <div
                key={a.title}
                className="border border-white/10 bg-white/[0.02] p-8"
              >
                <h3
                  className="mb-4 text-xl font-bold"
                  style={{ color: couplingRed }}
                >
                  {a.title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-400">{a.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 型号说明 */}
      <section
        id="model-explanation"
        className="scroll-mt-28 border-t border-white/10 py-20"
      >
        <div className="mx-auto max-w-[1440px] px-6">
          <SectionTitle>型号说明</SectionTitle>
          <div className="mx-auto grid w-full max-w-[min(100%,1360px)] grid-cols-1 items-start gap-10 lg:grid-cols-[minmax(0,1.55fr)_minmax(0,1fr)] lg:gap-14">
            <div className="relative min-w-0 border border-white/10 bg-black/30">
              <div className="relative h-[min(52vw,420px)] w-full min-h-[300px] sm:min-h-[380px] lg:h-[min(42vw,520px)] lg:min-h-[440px]">
                <Image
                  src={imgTypesDiagram}
                  alt="型号说明：液力偶合器型号代号与分段含义"
                  fill
                  className="object-contain object-left p-1.5 sm:p-2"
                  sizes="(max-width: 1024px) 100vw, min(820px, 58vw)"
                />
              </div>
            </div>
            <div className="flex min-w-0 flex-col gap-8 lg:justify-center lg:py-1">
              <ul className="space-y-3">
                {modelCodeLegend.map((item) => (
                  <li key={item.code} className="flex items-start gap-3">
                    <span
                      className="shrink-0 rounded px-2.5 py-1 text-sm font-bold"
                      style={{
                        backgroundColor: `${couplingRed}22`,
                        color: couplingRed,
                      }}
                    >
                      {item.code}
                    </span>
                    <span className="text-sm leading-relaxed text-gray-400">
                      {item.desc}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="text-sm leading-relaxed text-gray-500">
                完整型号由「YO - T - D/G/F - … - 规格」等段组成，具体订货代号请以技术协议与图纸为准。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 结构与配套 */}
      <section id="structure" className="scroll-mt-28 border-t border-white/10 py-20">
        <div className="mx-auto max-w-[1440px] px-6">
          <SectionTitle>内部结构剖视图</SectionTitle>
          <div className="relative mx-auto mb-16 max-w-4xl border border-white/10 bg-black/30">
            <div className="relative aspect-[16/10] w-full">
              <Image
                src={imgStructure}
                alt="调速型液力偶合器内部结构剖视"
                fill
                className="object-contain p-4"
                sizes="(max-width: 1024px) 100vw, 896px"
              />
            </div>
          </div>

          <h3 className="mb-6 text-center text-xl font-bold text-white md:text-2xl">
            {structureSection.companionTitle}
          </h3>
          <div className="mx-auto max-w-3xl overflow-x-auto">
            <table className="w-full min-w-[400px] border border-white/10 text-sm">
              <thead>
                <tr className="bg-white/5 text-left text-gray-300">
                  <th className="border-b border-white/10 px-4 py-3">配套件</th>
                  <th className="border-b border-white/10 px-4 py-3">
                    YOTD/YOTG
                  </th>
                  <th className="border-b border-white/10 px-4 py-3">YOTF</th>
                </tr>
              </thead>
              <tbody>
                {structureSection.companionRows.map((r) => (
                  <tr key={r.item} className="border-b border-white/5">
                    <td className="px-4 py-3 text-white">{r.item}</td>
                    <td className="px-4 py-3 text-gray-400">{r.yotdg}</td>
                    <td className="px-4 py-3 text-gray-400">{r.yotf}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <TiaosuTypicalModelsSection />

      <div className="border-t border-white/10 py-12 text-center">
        <Link
          href="/"
          className="text-sm font-medium text-gray-400 hover:text-white"
        >
          ← 返回产品首页
        </Link>
      </div>
    </main>
  );
}
