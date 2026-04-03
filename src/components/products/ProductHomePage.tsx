import Image from "next/image";
import Link from "next/link";
import { productHome, couplingRed } from "@/data/product-content";

export function ProductHomePage() {
  return (
    <main className="bg-[#0a0a0a]">
      <section
        id="hero"
        className="relative flex h-[800px] items-center overflow-hidden pt-48"
      >
        <div className="absolute inset-0 z-0 bg-[#0a0a0a]" />
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/80 to-transparent" />
        <div className="absolute right-0 top-0 z-[5] h-full w-1/2">
          <Image
            src={productHome.heroBg}
            alt=""
            fill
            className="object-cover opacity-20"
            sizes="50vw"
            priority
          />
        </div>
        <div className="relative z-20 mx-auto w-full max-w-[1440px] px-6">
          <div className="max-w-3xl">
            <div
              className="mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-2"
              style={{ borderColor: `${couplingRed}40` }}
            >
              <span
                className="h-2 w-2 rounded-full"
                style={{ backgroundColor: couplingRed }}
              />
              <span className="text-xs font-medium uppercase tracking-wider text-gray-400">
                高精度工程技术
              </span>
            </div>
            <h2 className="mb-2 text-5xl font-bold leading-tight text-white lg:text-6xl">
              大连恒忆偶合器
              <span style={{ color: couplingRed }}>有限公司</span>
            </h2>
            <p className="mb-4 text-sm tracking-widest text-gray-400">
              节能·创新·发展
            </p>
            <p className="mb-10 max-w-2xl text-lg leading-relaxed text-gray-300">
              深耕工业传动领域，专注液力偶合器研发与制造。为全球重工业提供高性能动力传输、过载保护和节能解决方案。
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#products"
                className="rounded px-8 py-4 text-sm font-bold text-white transition hover:opacity-90"
                style={{ backgroundColor: couplingRed }}
              >
                查看产品规格
              </a>
              <a
                href="#gallery"
                className="rounded border border-white/10 bg-white/5 px-8 py-4 text-sm font-bold text-white transition hover:bg-white/10"
              >
                探索生产设施
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="products" className="scroll-mt-28 py-24">
        <div className="mx-auto max-w-[1440px] px-6">
          <h3 className="mb-4 text-center text-3xl font-bold text-white">
            主要产品系列
          </h3>
          <p
            className="mx-auto mb-12 h-1 w-24"
            style={{ backgroundColor: couplingRed }}
            aria-hidden
          />
          <div className="grid gap-10 lg:grid-cols-2">
            {productHome.products.map((p) => (
              <article
                key={p.slug}
                className="flex flex-col overflow-hidden border border-white/10 bg-[#0a0a0a] lg:flex-row"
              >
                <div className="relative aspect-[4/3] w-full lg:w-2/5">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                  <span
                    className="absolute right-4 top-4 px-3 py-1 text-xs font-bold text-white"
                    style={{ backgroundColor: couplingRed }}
                  >
                    {p.badge}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-8">
                  <h4 className="mb-2 text-xl font-bold text-white">{p.title}</h4>
                  <p className="mb-6 flex-grow text-sm leading-relaxed text-gray-400">
                    {p.description}
                  </p>
                  <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-gray-500">
                    产品优势
                  </p>
                  <ul className="mb-6 flex flex-wrap gap-2">
                    {p.advantages.map((a) => (
                      <li
                        key={a}
                        className="border border-white/10 px-2 py-1 text-xs text-gray-300"
                      >
                        {a}
                      </li>
                    ))}
                  </ul>
                  {"models" in p && p.models ? (
                    <div className="mb-6">
                      <p className="mb-2 text-xs font-semibold text-gray-500">
                        可选型号
                      </p>
                      <div className="flex flex-wrap gap-1">
                        {p.models.map((m) => (
                          <span
                            key={m}
                            className="bg-white/5 px-2 py-0.5 text-xs text-gray-400"
                          >
                            {m}
                          </span>
                        ))}
                      </div>
                    </div>
                  ) : null}
                  <Link
                    href={`/products/${p.slug}`}
                    className="mt-auto w-full border border-white/20 py-3 text-center text-sm font-medium text-white transition hover:border-white/40 hover:bg-white/10"
                  >
                    技术详情
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="scroll-mt-28 border-t border-white/10 py-20">
        <div className="mx-auto max-w-[1440px] px-6">
          <h3 className="mb-2 text-center text-2xl font-bold text-white">
            {productHome.about.title}
          </h3>
          <p className="mx-auto mb-12 max-w-3xl text-center text-sm text-gray-400">
            State-of-the-Art Manufacturing & Design — {productHome.about.lead}
          </p>
          <div className="grid gap-8 md:grid-cols-3">
            {productHome.about.bullets.map((b) => (
              <div
                key={b.title}
                className="border border-white/10 bg-white/[0.02] p-6"
              >
                <h4
                  className="mb-3 text-lg font-bold text-white"
                  style={{ color: couplingRed }}
                >
                  {b.title}
                </h4>
                <p className="text-sm leading-relaxed text-gray-400">{b.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="gallery" className="scroll-mt-28 py-24">
        <div className="mx-auto max-w-[1440px] px-6">
          <p className="mb-2 text-center text-xs uppercase tracking-widest text-gray-500">
            Cross-Section Diagrams
          </p>
          <h3 className="mb-12 text-center text-3xl font-bold text-white">
            制造与设计
          </h3>
          <div className="grid gap-6 md:grid-cols-3">
            {productHome.gallery.map((g) => (
              <div key={g.src} className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={g.src}
                  alt={g.label}
                  fill
                  className="object-cover"
                  sizes="33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <p className="absolute bottom-4 left-4 text-sm font-medium text-white">
                  {g.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
