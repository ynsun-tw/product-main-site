import Link from "next/link";
import { CompanyLogoMark } from "@/components/hengyi/CompanyLogoMark";
import { SubscribeForm } from "@/components/hengyi/SubscribeForm";

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
              <CompanyLogoMark size="sm" className="h-10 w-10 shrink-0" />
              <div>
                <h2 className="text-lg font-bold text-white">
                  大连恒亿偶合器有限公司
                </h2>
                <p className="text-xs text-gray-500">
                  液力偶合器研发与制造
                </p>
              </div>
            </div>
            <p className="mb-6 text-sm leading-relaxed text-gray-400">
              节能、创新、发展。专注调速型与限矩型液力偶合器研发制造，服务重工业动力传动与节能需求。
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-bold tracking-wider text-white">
              联系我们
            </h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>地址：甘井子区桧柏路251号</li>
              <li>中国辽宁省大连市</li>  
              <li>
                电话：{" "}
                <a href="tel:13109834507" className="hover:text-white">
                13109834507
                </a>
              </li>
              <li>传真：0411-86860650</li>
              <li>
                邮箱：{" "}
                <a
                  href="mailto:1054430872@qq.com"
                  className="hover:text-white"
                >
                  1054430872@qq.com
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
          <p>© 2026 大连恒亿偶合器有限公司 保留所有权利。</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-gray-300">
              隐私政策
            </Link>
            <Link href="/terms" className="hover:text-gray-300">
              服务条款
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
