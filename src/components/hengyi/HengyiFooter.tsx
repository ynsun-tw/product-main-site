import Link from "next/link";
import { SubscribeForm } from "@/components/hengyi/SubscribeForm";
import { couplingRed } from "@/data/product-content";

const productLinks = [
  { label: "调速型液力偶合器", href: "/products/tiaosu" },
  { label: "限矩型液力偶合器", href: "/products/xianju" },
];

export function HengyiFooter() {
  return (
    <footer
      id="contact"
      className="scroll-mt-24 border-t border-white/10 bg-[#0a0a0a]"
    >
      <div className="mx-auto max-w-[1440px] px-6 py-16 lg:px-12 lg:py-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 xl:grid-cols-4">
          <div>
            <div className="mb-4 flex items-center gap-2">
              <div
                className="flex h-10 w-10 items-center justify-center text-sm font-bold text-white"
                style={{ backgroundColor: couplingRed }}
              >
                恒忆
              </div>
              <div>
                <h2 className="text-lg font-bold text-white">
                  大连恒忆偶合器有限公司
                </h2>
                <p className="text-xs text-gray-500">
                  Dalian HengYi Fluid Coupling Co.,Ltd.
                </p>
              </div>
            </div>
            <p className="mb-6 text-sm leading-relaxed text-gray-400">
              Energy Saving, Innovation, Development. Professional manufacturer
              of variable speed and constant filling fluid couplings.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">
              Contact Us
            </h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>地址：大连市甘井子区辛寨子镇由家村工业园区</li>
              <li>Dalian, Liaoning, China</li>
              <li>
                电话 (Tel):{" "}
                <a href="tel:041139643700" className="hover:text-white">
                  0411-39643700
                </a>
              </li>
              <li>传真 (Fax): 0411-39643700</li>
              <li>
                邮箱 (Email):{" "}
                <a
                  href="mailto:dlhy0502@163.com"
                  className="hover:text-white"
                >
                  dlhy0502@163.com
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-bold text-white">产品系列</h3>
            <ul className="flex flex-col gap-2 text-sm text-gray-400">
              {productLinks.map((p) => (
                <li key={p.href}>
                  <Link href={p.href} className="hover:text-white">
                    {p.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-2 text-sm font-bold text-white">获取技术资料</h3>
            <p className="mb-4 text-sm text-gray-400">
              订阅以获取最新的产品规格书与应用指南。
            </p>
            <SubscribeForm />
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-gray-500 md:flex-row">
          <p>© 2026 Dalian HengYi Fluid Coupling Co.,Ltd. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-gray-300">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-gray-300">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
