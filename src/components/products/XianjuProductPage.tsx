import Image from "next/image";
import Link from "next/link";
import { couplingRed, externalContactFormUrl } from "@/data/product-content";
import {
  xianjuGallery,
  xianjuHero,
  xianjuSeries,
  xianjuSeriesIntro,
  xianjuFeatures,
} from "@/data/xianju-page";
import { TvalMark, YoxeMark } from "./YoxlTvalMarks";
import { XianjuSpecSelectionSection } from "./XianjuSpecSelectionSection";

export function XianjuProductPage() {
  const h = xianjuHero;

  return (
    <main className="bg-[#0a0a0a]">
      <section
        id="home"
        className="relative scroll-mt-28 flex min-h-[calc(100vh-7rem)] flex-col justify-center pt-28 pb-16 lg:min-h-[min(640px,calc(100vh-7rem))] lg:pb-20"
      >
        <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-10 px-6 lg:flex-row lg:items-center lg:gap-16 lg:px-12">
          <div className="flex w-full max-w-xl flex-col">
            <p
              className="mb-4 text-sm font-semibold tracking-wider"
              style={{ color: couplingRed }}
            >
              {h.tagline}
            </p>
            <h1 className="mb-6 text-4xl font-bold text-white lg:text-5xl">{h.title}</h1>
            <p className="mb-8 max-w-xl text-lg leading-relaxed text-gray-400">{h.intro}</p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#specs"
                className="rounded px-6 py-3 text-sm font-bold text-white"
                style={{ backgroundColor: couplingRed }}
              >
                查看技术参数
              </a>
              <a
                href={externalContactFormUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded border border-white/20 px-6 py-3 text-sm font-bold text-white hover:bg-white/5"
              >
                立即咨询
              </a>
            </div>
          </div>
          <div className="relative aspect-[4/3] w-full max-w-md lg:max-w-lg">
            <Image
              src={h.heroImage}
              alt={h.title}
              fill
              className="object-contain object-center"
              sizes="(max-width: 1024px) 100vw, 46vw"
              priority
            />
          </div>
        </div>
      </section>

      <XianjuSpecSelectionSection />

      <section id="features" className="scroll-mt-28 border-t border-white/10 py-20">
        <div className="mx-auto max-w-[1440px] px-6">
          <h2 className="mb-12 text-center text-3xl font-bold text-white">
            结构原理与技术特点
          </h2>
          <div className="grid gap-10 md:grid-cols-3">
            {xianjuFeatures.map((f) => (
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
          <h2 className="mb-4 text-center text-3xl font-bold text-white">关键系列型号</h2>
          <p className="mb-12 text-center text-gray-400">{xianjuSeriesIntro}</p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {xianjuSeries.map((s) => (
              <div
                key={s.name}
                className="border border-white/10 p-6 text-center transition hover:border-white/20"
              >
                <h4 className="text-lg font-bold text-white">
                  {s.name === "TVAL" ? (
                    <TvalMark />
                  ) : s.name === "YOXE" ? (
                    <YoxeMark />
                  ) : (
                    s.name
                  )}
                </h4>
                <p className="mt-2 text-sm text-gray-500">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="gallery" className="scroll-mt-28 border-t border-white/10 py-20">
        <div className="mx-auto max-w-[1440px] px-6">
          <h2 className="mb-12 text-center text-3xl font-bold text-white">
            生产车间与应用
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {xianjuGallery.map((g) => (
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
