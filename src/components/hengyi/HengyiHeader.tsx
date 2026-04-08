import Link from "next/link";
import { CompanyLogoMark } from "@/components/hengyi/CompanyLogoMark";
import { couplingRed, externalContactFormUrl } from "@/data/product-content";

const navItems = [
  { href: "/", label: "首页", external: false },
  { href: "/products/tiaosu", label: "调速型", external: false },
  { href: "/products/xianju", label: "限矩型", external: false },
  { href: "/#about", label: "关于我们", external: false },
  {
    href: externalContactFormUrl,
    label: "联系我们",
    external: true,
  },
] as const;

function HamburgerIcon() {
  return (
    <svg
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4 6h16M4 12h16M4 18h16"
      />
    </svg>
  );
}

function ArrowRightIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M13 7l5 5m0 0l-5 5m5-5H6"
      />
    </svg>
  );
}

export function HengyiHeader() {
  return (
    <header
      id="header"
      className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#0a0a0a]/80 backdrop-blur-md"
    >
      <div className="mx-auto flex h-20 max-w-[1440px] items-center justify-between px-6 lg:px-12">
        <Link
          href="/"
          className="flex shrink-0 items-center gap-3"
          prefetch={false}
        >
          <CompanyLogoMark size="md" className="h-12 w-12 shrink-0" priority />
          <div className="hidden flex-col sm:flex">
            <span className="text-lg font-bold leading-tight text-white">
              大连恒亿偶合器有限公司
            </span>
            <span className="text-xs text-gray-400">
              液力偶合器研发与制造
            </span>
          </div>
        </Link>

        <nav
          className="hidden items-center gap-8 md:flex"
          aria-label="主导航"
        >
          {navItems.map((item) =>
            item.external ? (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-gray-300 transition-colors hover:text-white"
              >
                {item.label}
              </a>
            ) : (
              <Link
                key={item.label}
                href={item.href}
                prefetch={false}
                className="text-sm font-medium text-gray-300 transition-colors hover:text-white"
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={externalContactFormUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded px-6 py-2.5 text-sm font-bold text-white sm:inline-flex"
            style={{ backgroundColor: couplingRed }}
          >
            获取报价
            <ArrowRightIcon className="h-4 w-4" />
          </a>

          <details className="group relative md:hidden">
            <summary
              className="flex cursor-pointer list-none items-center rounded-md p-2 text-gray-300 marker:hidden [&::-webkit-details-marker]:hidden"
              aria-label="打开菜单"
            >
              <HamburgerIcon />
            </summary>
            <div className="absolute right-0 top-full z-50 mt-0 w-[min(100vw-3rem,20rem)] border border-white/10 bg-[#0a0a0a] shadow-xl">
              <nav
                className="flex flex-col gap-1 px-4 py-4"
                aria-label="移动端主导航"
              >
                {navItems.map((item) =>
                  item.external ? (
                    <a
                      key={item.label}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-2 text-sm font-medium text-gray-300 hover:text-white"
                    >
                      {item.label}
                    </a>
                  ) : (
                    <Link
                      key={item.label}
                      href={item.href}
                      prefetch={false}
                      className="py-2 text-sm font-medium text-gray-300 hover:text-white"
                    >
                      {item.label}
                    </Link>
                  ),
                )}
                <a
                  href={externalContactFormUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 py-3 text-center text-sm font-bold text-white"
                  style={{ backgroundColor: couplingRed }}
                >
                  获取报价
                </a>
              </nav>
            </div>
          </details>
        </div>
      </div>
    </header>
  );
}
