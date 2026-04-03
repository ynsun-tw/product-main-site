import Image from "next/image";
import Link from "next/link";
import {
  couplingRed,
  tiaosuDetail,
  xianjuDetail,
} from "@/data/product-content";

type Variant = "tiaosu" | "xianju";

export function ProductDetailPage({ variant }: { variant: Variant }) {
  const isXianju = variant === "xianju";
  const d = isXianju ? xianjuDetail : tiaosuDetail;

  return (
    <main className="bg-[#0a0a0a]">
      <section
        id="home"
        className="relative scroll-mt-28 pt-36 lg:grid lg:min-h-[560px] lg:grid-cols-2 lg:items-center"
      >
        <div className="relative z-10 px-6 py-12 lg:pl-12 lg:pr-8">
          <p
            className="mb-4 text-sm font-semibold uppercase tracking-wider"
            style={{ color: couplingRed }}
          >
            {d.tagline}
          </p>
          <h1 className="mb-6 text-4xl font-bold text-white lg:text-5xl">
            {d.title}
          </h1>
          <p className="mb-8 max-w-xl text-lg leading-relaxed text-gray-400">
            {d.intro}
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#specs"
              className="rounded px-6 py-3 text-sm font-bold text-white"
              style={{ backgroundColor: couplingRed }}
            >
              查看技术参数
            </a>
            <Link
              href="/#contact"
              className="rounded border border-white/20 px-6 py-3 text-sm font-bold text-white hover:bg-white/5"
            >
              立即咨询
            </Link>
          </div>
        </div>
        <div className="relative h-[320px] lg:h-full lg:min-h-[560px]">
          <Image
            src={d.heroImage}
            alt={d.title}
            fill
            className="object-contain object-center lg:object-right"
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority
          />
        </div>
      </section>

      <section id="features" className="scroll-mt-28 border-t border-white/10 py-20">
        <div className="mx-auto max-w-[1440px] px-6">
          <h2 className="mb-12 text-center text-3xl font-bold text-white">
            结构原理与技术特点
          </h2>
          <div className="grid gap-10 md:grid-cols-3">
            {d.features.map((f) => (
              <div key={f.title} className="border border-white/10 bg-white/[0.02] p-8">
                <h3 className="mb-4 text-xl font-bold" style={{ color: couplingRed }}>
                  {f.title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-400">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="series" className="scroll-mt-28 py-20">
        <div className="mx-auto max-w-[1440px] px-6">
          <h2 className="mb-4 text-center text-3xl font-bold text-white">
            关键系列型号
          </h2>
          <p className="mb-12 text-center text-gray-400">
            提供多种结构型式，满足不同工况需求，支持定制化设计。
          </p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {d.series.map((s) => (
              <div
                key={s.name}
                className="border border-white/10 p-6 text-center transition hover:border-white/20"
              >
                <h4 className="text-lg font-bold text-white">{s.name}</h4>
                <p className="mt-2 text-sm text-gray-500">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="specs" className="scroll-mt-28 border-t border-white/10 py-20">
        <div className="mx-auto max-w-[1440px] px-6">
          <h2 className="mb-12 text-center text-3xl font-bold text-white">
            技术参数
          </h2>

          {isXianju ? (
            <>
              <div className="mb-12 grid gap-12 lg:grid-cols-2">
                <div>
                  <h3 className="mb-4 text-lg font-semibold text-white">
                    结构尺寸图
                  </h3>
                  <div className="relative aspect-[4/3] w-full border border-white/10 bg-black/40">
                    <Image
                      src={xianjuDetail.specImages.diagram}
                      alt="结构尺寸图"
                      fill
                      className="object-contain p-4"
                      sizes="50vw"
                    />
                  </div>
                </div>
                <div>
                  <h3 className="mb-4 text-lg font-semibold text-white">
                    性能曲线
                  </h3>
                  <div className="relative aspect-[4/3] w-full border border-white/10 bg-black/40">
                    <Image
                      src={xianjuDetail.specImages.curve}
                      alt="性能曲线"
                      fill
                      className="object-contain p-4"
                      sizes="50vw"
                    />
                  </div>
                </div>
              </div>
              <div className="overflow-x-auto border border-white/10">
                <table className="w-full min-w-[800px] text-left text-sm text-gray-300">
                  <thead>
                    <tr className="border-b border-white/10 bg-white/5">
                      <th className="px-3 py-3">型号</th>
                      <th className="px-3 py-3">Lmin</th>
                      <th className="px-3 py-3">D</th>
                      <th className="px-3 py-3" colSpan={2}>
                        输入端
                      </th>
                      <th className="px-3 py-3" colSpan={2}>
                        输出端
                      </th>
                      <th className="px-3 py-3" colSpan={2}>
                        充油量
                      </th>
                      <th className="px-3 py-3">重量 (kg)</th>
                      <th className="px-3 py-3">最高转速 (r/min)</th>
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
                      <th />
                      <th />
                    </tr>
                  </thead>
                  <tbody>
                    {xianjuDetail.specsTable.map((row) => (
                      <tr
                        key={row.model}
                        className="border-b border-white/5 hover:bg-white/[0.02]"
                      >
                        <td className="px-3 py-3 font-medium text-white">
                          {row.model}
                        </td>
                        <td className="px-3 py-3">{row.lmin}</td>
                        <td className="px-3 py-3">{row.d}</td>
                        <td className="px-3 py-3">{row.inMax}</td>
                        <td className="px-3 py-3">{row.h1}</td>
                        <td className="px-3 py-3">{row.outMax}</td>
                        <td className="px-3 py-3">{row.h2}</td>
                        <td className="px-3 py-3">{row.oilMax}</td>
                        <td className="px-3 py-3">{row.oilMin}</td>
                        <td className="px-3 py-3">{row.weight}</td>
                        <td className="px-3 py-3">{row.rpm}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-6 text-center text-xs text-gray-500">
                * 注：表中数据仅供参考，具体尺寸请以实际图纸为准。
              </p>
            </>
          ) : (
            <p className="mx-auto max-w-3xl text-center text-lg leading-relaxed text-gray-400">
              {tiaosuDetail.specNote}
            </p>
          )}
        </div>
      </section>

      <section id="gallery" className="scroll-mt-28 border-t border-white/10 py-20">
        <div className="mx-auto max-w-[1440px] px-6">
          <h2 className="mb-12 text-center text-3xl font-bold text-white">
            生产车间与应用
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {d.gallery.map((g) => (
              <div key={g.src} className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={g.src}
                  alt={g.caption}
                  fill
                  className="object-cover"
                  sizes="33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <p className="absolute bottom-4 left-4 text-sm font-medium text-white">
                  {g.caption}
                </p>
              </div>
            ))}
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
