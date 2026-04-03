import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { couplingRed, externalContactFormUrl } from "@/data/product-content";
import {
  modelCodeLegend,
  structureSection,
  tiaosuAdvantages,
  tiaosuHero,
  yocjBlock,
  yoczBlock,
  yotdBlock,
  yotgBlock,
  yotgrBlock,
} from "@/data/tiaosu-page";

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
          <div className="mx-auto flex max-w-4xl flex-wrap items-center justify-center gap-2 text-lg font-medium text-white md:gap-3">
            {modelCodeLegend.map((item, i) => (
              <span key={item.code} className="flex items-center gap-2">
                {i > 0 ? (
                  <span className="text-gray-600" aria-hidden>
                    —
                  </span>
                ) : null}
                <span
                  className="rounded px-3 py-1 font-bold"
                  style={{
                    backgroundColor: `${couplingRed}22`,
                    color: couplingRed,
                  }}
                >
                  {item.code}
                </span>
                <span className="text-sm text-gray-400 md:text-base">
                  {item.desc}
                </span>
              </span>
            ))}
          </div>
          <p className="mx-auto mt-8 max-w-2xl text-center text-sm text-gray-500">
            完整型号由「YO - T - D/G/F - … - 规格」等段组成，具体订货代号请以技术协议与图纸为准。
          </p>
        </div>
      </section>

      {/* 结构与配套 */}
      <section id="structure" className="scroll-mt-28 border-t border-white/10 py-20">
        <div className="mx-auto max-w-[1440px] px-6">
          <SectionTitle>内部结构剖视图</SectionTitle>
          <div className="relative mx-auto mb-16 max-w-4xl border border-white/10 bg-black/30">
            <div className="relative aspect-[16/10] w-full">
              <Image
                src={structureSection.crossSectionImage}
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

      {/* 典型型号 */}
      <section id="specs" className="scroll-mt-28 border-t border-white/10 py-20">
        <div className="mx-auto max-w-[1440px] px-6">
          <SectionTitle>典型型号展示</SectionTitle>

          {/* YOTD */}
          <div className="mb-20">
            <h3 className="mb-2 text-xl font-bold text-white">{yotdBlock.title}</h3>
            <p className="mb-6 text-gray-400">{yotdBlock.subtitle}</p>
            <div className="mb-8 grid gap-8 lg:grid-cols-2 lg:items-start">
              <div className="relative aspect-[4/3] border border-white/10 bg-black/20">
                <Image
                  src={yotdBlock.image}
                  alt={yotdBlock.title}
                  fill
                  className="object-contain p-4"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="overflow-x-auto">
                <table className="w-full min-w-[360px] border border-white/10 text-sm">
                  <thead>
                    <tr className="bg-white/5 text-gray-300">
                      <th className="px-3 py-2 text-left">型号</th>
                      <th className="px-3 py-2">输入转速 (转/分)</th>
                      <th className="px-3 py-2">传递功率（千瓦）</th>
                      <th className="px-3 py-2">重量（千克）</th>
                    </tr>
                  </thead>
                  <tbody>
                    {yotdBlock.table.map((row) => (
                      <tr key={row.model} className="border-t border-white/10">
                        <td className="px-3 py-2 font-medium text-white">
                          {row.model}
                        </td>
                        <td className="px-3 py-2 text-center text-gray-400">
                          {row.speed}
                        </td>
                        <td className="px-3 py-2 text-center text-gray-400">
                          {row.power}
                        </td>
                        <td className="px-3 py-2 text-center text-gray-400">
                          {row.weight}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* YOTG */}
          <div className="mb-20">
            <h3 className="mb-2 text-xl font-bold text-white">{yotgBlock.title}</h3>
            <p className="mb-6 text-gray-400">{yotgBlock.subtitle}</p>
            <div className="mb-8 grid gap-8 lg:grid-cols-2 lg:items-start">
              <div className="relative aspect-[4/3] border border-white/10 bg-black/20">
                <Image
                  src={yotgBlock.image}
                  alt={yotgBlock.title}
                  fill
                  className="object-contain p-4"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="overflow-x-auto">
                <table className="w-full min-w-[360px] border border-white/10 text-sm">
                  <thead>
                    <tr className="bg-white/5 text-gray-300">
                      <th className="px-3 py-2 text-left">型号</th>
                      <th className="px-3 py-2">输入转速 (转/分)</th>
                      <th className="px-3 py-2">传递功率（千瓦）</th>
                      <th className="px-3 py-2">重量（千克）</th>
                    </tr>
                  </thead>
                  <tbody>
                    {yotgBlock.table.map((row) => (
                      <tr key={row.model} className="border-t border-white/10">
                        <td className="px-3 py-2 font-medium text-white">
                          {row.model}
                        </td>
                        <td className="px-3 py-2 text-center text-gray-400">
                          {row.speed}
                        </td>
                        <td className="px-3 py-2 text-center text-gray-400">
                          {row.power}
                        </td>
                        <td className="px-3 py-2 text-center text-gray-400">
                          {row.weight}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* YOTGR */}
          <div className="mb-20">
            <h3 className="mb-2 text-xl font-bold text-white">{yotgrBlock.title}</h3>
            <p className="mb-6 text-gray-400">{yotgrBlock.subtitle}</p>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[480px] border border-white/10 text-sm">
                <thead>
                  <tr className="bg-white/5 text-gray-300">
                    <th className="px-3 py-2 text-left">型号</th>
                    <th className="px-3 py-2" colSpan={2}>
                      传递功率（千瓦）
                    </th>
                  </tr>
                  <tr className="border-b border-white/10 bg-black/20 text-xs text-gray-500">
                    <th />
                    <th className="px-3 py-1 font-normal">1000 转/分</th>
                    <th className="px-3 py-1 font-normal">1500 转/分</th>
                  </tr>
                </thead>
                <tbody>
                  {yotgrBlock.table.map((row) => (
                    <tr key={row.model} className="border-t border-white/10">
                      <td className="px-3 py-2 font-medium text-white">
                        {row.model}
                      </td>
                      {"p750" in row ? (
                        <>
                          <td className="px-3 py-2 text-center text-gray-400">
                            {row.p750}
                            <span className="ml-1 text-xs text-gray-600">
                              (750)
                            </span>
                          </td>
                          <td className="px-3 py-2 text-center text-gray-400">
                            {row.p1000}
                            <span className="ml-1 text-xs text-gray-600">
                              (1000)
                            </span>
                          </td>
                        </>
                      ) : (
                        <>
                          <td className="px-3 py-2 text-center text-gray-400">
                            {row.p1000}
                          </td>
                          <td className="px-3 py-2 text-center text-gray-400">
                            {row.p1500}
                          </td>
                        </>
                      )}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <ul className="mt-6 space-y-2 text-xs text-gray-500">
              {yotgrBlock.footnotes.map((f) => (
                <li key={f.slice(0, 40)}>{f}</li>
              ))}
            </ul>
          </div>

          {/* YOCz */}
          <div className="mb-20">
            <h3 className="mb-2 text-xl font-bold text-white">{yoczBlock.title}</h3>
            <p className="text-gray-500">{yoczBlock.subtitle}</p>
            <p className="mb-6 text-gray-400">{yoczBlock.description}</p>
            <div className="relative mb-8 aspect-[16/9] w-full max-w-3xl border border-white/10 bg-black/20">
              <Image
                src={yoczBlock.image}
                alt="YOCz 型传动装置"
                fill
                className="object-contain p-4"
                sizes="896px"
              />
            </div>
            <ul className="mb-8 space-y-2 text-sm text-gray-400">
              {yoczBlock.notes.map((n) => (
                <li key={n.slice(0, 50)}>{n}</li>
              ))}
            </ul>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[640px] border border-white/10 text-sm">
                <thead>
                  <tr className="bg-white/5 text-gray-300">
                    <th className="px-3 py-2 text-left">型号</th>
                    <th className="px-3 py-2">输入转速 (转/分)</th>
                    <th className="px-3 py-2">最大传动比</th>
                    <th className="px-3 py-2">A</th>
                    <th className="px-3 py-2">B</th>
                    <th className="px-3 py-2">C</th>
                  </tr>
                </thead>
                <tbody>
                  {yoczBlock.table.map((row) => (
                    <tr key={row.model} className="border-t border-white/10">
                      <td className="px-3 py-2 font-medium text-white">{row.model}</td>
                      <td className="px-3 py-2 text-center text-gray-400">
                        {row.inputRpm}
                      </td>
                      <td className="px-3 py-2 text-center text-gray-400">
                        {row.ratio}
                      </td>
                      <td className="px-3 py-2 text-center text-gray-400">{row.a}</td>
                      <td className="px-3 py-2 text-center text-gray-400">{row.b}</td>
                      <td className="px-3 py-2 text-center text-gray-400">{row.c}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* YOCj */}
          <div className="mb-8">
            <h3 className="mb-2 text-xl font-bold text-white">{yocjBlock.title}</h3>
            <p className="text-gray-500">{yocjBlock.subtitle}</p>
            <p className="mb-6 text-gray-400">{yocjBlock.description}</p>
            <div className="mb-8 grid gap-4 md:grid-cols-2">
              {yocjBlock.images.map((src) => (
                <div
                  key={src}
                  className="relative aspect-[4/3] border border-white/10 bg-black/20"
                >
                  <Image
                    src={src}
                    alt="YOCj 型传动装置"
                    fill
                    className="object-contain p-4"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              ))}
            </div>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[720px] border border-white/10 text-sm">
                <thead>
                  <tr className="bg-white/5 text-gray-300">
                    <th className="px-2 py-2 text-left">型号</th>
                    <th className="px-2 py-2">输入转速 (转/分)</th>
                    <th className="px-2 py-2">传递功率（千瓦）</th>
                    <th className="px-2 py-2">最大传动比</th>
                    <th className="px-2 py-2">长度 L</th>
                    <th className="px-2 py-2">高度 H</th>
                    <th className="px-2 py-2">宽度 W</th>
                  </tr>
                </thead>
                <tbody>
                  {yocjBlock.table.map((row) => (
                    <tr key={row.model} className="border-t border-white/10">
                      <td className="px-2 py-2 font-medium text-white">{row.model}</td>
                      <td className="px-2 py-2 text-center text-gray-400">{row.n}</td>
                      <td className="px-2 py-2 text-center text-gray-400">{row.power}</td>
                      <td className="px-2 py-2 text-center text-gray-400">{row.ratio}</td>
                      <td className="px-2 py-2 text-center text-gray-400">{row.l}</td>
                      <td className="px-2 py-2 text-center text-gray-400">{row.h}</td>
                      <td className="px-2 py-2 text-center text-gray-400">{row.w}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

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
