import Link from "next/link";
import { couplingRed } from "@/data/product-content";

const navItems = [
  { href: "/", label: "首页" },
  { href: "/#products", label: "产品系列" },
  { href: "/#gallery", label: "技术支持" },
  { href: "/#about", label: "关于恒忆" },
  { href: "/#contact", label: "联系我们" },
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
          <div
            className="flex h-12 w-12 items-center justify-center rounded text-xl font-bold text-white"
            style={{ backgroundColor: couplingRed }}
          >
            恒忆
          </div>
          <div className="hidden flex-col sm:flex">
            <span className="text-lg font-bold leading-tight text-white">
              大连恒忆偶合器有限公司
            </span>
            <span className="text-xs text-gray-400">
              Dalian HengYi Fluid Coupling Co.,Ltd.
            </span>
          </div>
        </Link>

        <nav
          className="hidden items-center gap-8 md:flex"
          aria-label="主导航"
        >
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              prefetch={false}
              className="text-sm font-medium text-gray-300 transition-colors hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/#contact"
            prefetch={false}
            className="hidden items-center gap-2 rounded px-6 py-2.5 text-sm font-bold text-white sm:inline-flex"
            style={{ backgroundColor: couplingRed }}
          >
            获取报价
            <ArrowRightIcon className="h-4 w-4" />
          </Link>

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
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    prefetch={false}
                    className="py-2 text-sm font-medium text-gray-300 hover:text-white"
                  >
                    {item.label}
                  </Link>
                ))}
                <Link
                  href="/#contact"
                  prefetch={false}
                  className="mt-2 py-3 text-center text-sm font-bold text-white"
                  style={{ backgroundColor: couplingRed }}
                >
                  获取报价
                </Link>
              </nav>
            </div>
          </details>
        </div>
      </div>
    </header>
  );
}
