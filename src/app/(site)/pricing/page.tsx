import Link from "next/link";
import { CheckIcon, MinusIcon } from "@/components/icons";
import { buildSubpageMetadata } from "@/lib/seo";

export const metadata = buildSubpageMetadata({
  title: "定价方案",
  description:
    "简明透明的定价与功能对比，为不同规模团队提供合适方案。",
  path: "/pricing",
});

const comparisonRows: {
  feature: string;
  essentials: "check" | "minus";
  professional: "check" | "minus";
  enterprise: "check" | "minus";
}[] = [
  {
    feature: "托管与可视化",
    essentials: "check",
    professional: "check",
    enterprise: "check",
  },
  {
    feature: "配置引擎",
    essentials: "minus",
    professional: "check",
    enterprise: "check",
  },
  {
    feature: "高级分析",
    essentials: "minus",
    professional: "check",
    enterprise: "check",
  },
  {
    feature: "自定义 API 接入",
    essentials: "minus",
    professional: "minus",
    enterprise: "check",
  },
];

function CellIcon({ type }: { type: "check" | "minus" }) {
  if (type === "check") {
    return (
      <CheckIcon className="inline h-[1em] w-[1em] text-brand-orange" />
    );
  }
  return <MinusIcon className="inline h-[1em] w-[1em]" />;
}

export default function PricingPage() {
  return (
    <main className="mx-auto w-full max-w-[1200px] flex-1 px-6 pb-32 pt-28 font-sans">
      <section
        id="pricing-hero"
        className="mx-auto mb-20 max-w-3xl text-center font-sans md:mb-20"
      >
        <h1 className="mb-6 text-5xl font-bold leading-none tracking-tighter sm:text-6xl lg:text-7xl">
          简明<span className="text-gray-500 [text-wrap:balance]">定价</span>
        </h1>
        <p className="text-xl font-medium leading-relaxed text-gray-400">
          可视化商务工具套件。面向各规模团队，定价透明。
        </p>
      </section>

      <section
        id="pricing-cards"
        className="mb-32 grid grid-cols-1 gap-6 font-sans md:grid-cols-3"
      >
        <div className="relative flex flex-col border border-surface-border bg-surface-card p-8 transition-colors duration-150 hover:border-surface-border-hover">
          <div className="mb-8">
            <h3 className="mb-2 text-2xl font-bold">基础版</h3>
            <p className="h-10 text-sm leading-5 text-gray-400">
              适合成长型团队的入门方案。
            </p>
          </div>
          <div className="mb-8 flex items-baseline">
            <span className="text-5xl font-bold tracking-tight">$49</span>
            <span className="ml-1 text-gray-500">/月</span>
          </div>
          <ul className="mb-10 flex flex-1 flex-col gap-4 text-sm leading-5 text-gray-300">
            <li className="flex items-center gap-3">
              <CheckIcon className="h-[1em] w-[1em] shrink-0 text-brand-orange" />
              最多 5 名用户
            </li>
            <li className="flex items-center gap-3">
              <CheckIcon className="h-[1em] w-[1em] shrink-0 text-brand-orange" />
              基础数据分析
            </li>
            <li className="flex items-center gap-3">
              <CheckIcon className="h-[1em] w-[1em] shrink-0 text-brand-orange" />
              标准支持
            </li>
          </ul>
          <Link
            href="/get-started"
            className="block w-full border border-[#2E2E2E] bg-surface-700 py-4 text-center font-medium text-white transition-colors duration-150 hover:bg-[#2E2E2E]"
          >
            开始使用
          </Link>
        </div>

        <div className="relative flex flex-col border-2 border-brand-orange bg-surface-card p-8 shadow-card-popular md:-translate-y-4">
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-orange px-4 py-1 text-xs font-bold uppercase tracking-wider text-white">
            最受欢迎
          </div>
          <div className="mb-8">
            <h3 className="mb-2 text-2xl font-bold">专业版</h3>
            <p className="h-10 text-sm leading-5 text-gray-400">
              适合需要多种体验与深度能力的团队。
            </p>
          </div>
          <div className="mb-8 flex items-baseline">
            <span className="text-5xl font-bold tracking-tight">$99</span>
            <span className="ml-1 text-gray-500">/月</span>
          </div>
          <ul className="mb-10 flex flex-1 flex-col gap-4 text-sm leading-5 text-gray-300">
            <li className="flex items-center gap-3">
              <CheckIcon className="h-[1em] w-[1em] shrink-0 text-brand-orange" />
              用户数不限
            </li>
            <li className="flex items-center gap-3">
              <CheckIcon className="h-[1em] w-[1em] shrink-0 text-brand-orange" />
              高级分析
            </li>
            <li className="flex items-center gap-3">
              <CheckIcon className="h-[1em] w-[1em] shrink-0 text-brand-orange" />
              优先支持
            </li>
            <li className="flex items-center gap-3">
              <CheckIcon className="h-[1em] w-[1em] shrink-0 text-brand-orange" />
              自定义集成
            </li>
          </ul>
          <Link
            href="/get-started"
            className="block w-full border-0 bg-brand-orange py-4 text-center font-bold text-white transition-colors duration-150 hover:bg-brand-orange-hover"
          >
            开始使用
          </Link>
        </div>

        <div className="relative flex flex-col border border-surface-border bg-surface-card p-8 transition-colors duration-150 hover:border-surface-border-hover">
          <div className="mb-8">
            <h3 className="mb-2 text-2xl font-bold">企业版</h3>
            <p className="h-10 text-sm leading-5 text-gray-400">
              适合全球化与复杂场景的大型组织。
            </p>
          </div>
          <div className="mb-8 flex items-baseline">
            <span className="text-5xl font-bold tracking-tight">$249</span>
            <span className="ml-1 text-gray-500">/月</span>
          </div>
          <ul className="mb-10 flex flex-1 flex-col gap-4 text-sm leading-5 text-gray-300">
            <li className="flex items-center gap-3">
              <CheckIcon className="h-[1em] w-[1em] shrink-0 text-brand-orange" />
              包含专业版全部能力
            </li>
            <li className="flex items-center gap-3">
              <CheckIcon className="h-[1em] w-[1em] shrink-0 text-brand-orange" />
              专属客户成功经理
            </li>
            <li className="flex items-center gap-3">
              <CheckIcon className="h-[1em] w-[1em] shrink-0 text-brand-orange" />
              服务等级协议（SLA）
            </li>
          </ul>
          <Link
            href="/contact"
            className="block w-full border border-[#2E2E2E] bg-surface-700 py-4 text-center font-medium text-white transition-colors duration-150 hover:bg-[#2E2E2E]"
          >
            联系销售
          </Link>
        </div>
      </section>

      <section id="comparison-grid" className="mb-32 font-sans">
        <h2 className="mb-10 border-b border-surface-border pb-4 text-3xl font-bold leading-snug">
          功能对比
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[600px] text-left text-sm">
            <thead>
              <tr className="border-b border-surface-border">
                <th className="w-1/4 px-4 py-4 font-medium text-gray-400">
                  功能
                </th>
                <th className="w-1/4 px-4 py-4 text-center font-medium">
                  基础版
                </th>
                <th className="w-1/4 px-4 py-4 text-center font-medium text-brand-orange">
                  专业版
                </th>
                <th className="w-1/4 px-4 py-4 text-center font-medium">
                  企业版
                </th>
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map((row) => (
                <tr
                  key={row.feature}
                  className="border-b border-surface-card transition-colors duration-150 hover:bg-surface-card/50"
                >
                  <td className="px-4 py-5 text-gray-300">{row.feature}</td>
                  <td className="px-4 py-5 text-center text-surface-muted">
                    <CellIcon type={row.essentials} />
                  </td>
                  <td className="px-4 py-5 text-center">
                    <CellIcon type={row.professional} />
                  </td>
                  <td className="px-4 py-5 text-center">
                    <CellIcon type={row.enterprise} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}
