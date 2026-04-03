import Link from "next/link";
import { CheckIcon, MinusIcon } from "@/components/icons";

const comparisonRows: {
  feature: string;
  essentials: "check" | "minus";
  professional: "check" | "minus";
  enterprise: "check" | "minus";
}[] = [
  {
    feature: "Hosting & Visualization",
    essentials: "check",
    professional: "check",
    enterprise: "check",
  },
  {
    feature: "Configuration Engine",
    essentials: "minus",
    professional: "check",
    enterprise: "check",
  },
  {
    feature: "Advanced Analytics",
    essentials: "minus",
    professional: "check",
    enterprise: "check",
  },
  {
    feature: "Custom API Access",
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
          Simple{" "}
          <span className="text-gray-500 [text-wrap:balance]">pricing</span>
        </h1>
        <p className="text-xl font-medium leading-relaxed text-gray-400">
          Your Visual Commerce Toolkit. Transparent pricing for teams of all
          sizes.
        </p>
      </section>

      <section
        id="pricing-cards"
        className="mb-32 grid grid-cols-1 gap-6 font-sans md:grid-cols-3"
      >
        <div className="relative flex flex-col border border-surface-border bg-surface-card p-8 transition-colors duration-150 hover:border-surface-border-hover">
          <div className="mb-8">
            <h3 className="mb-2 text-2xl font-bold">Essentials</h3>
            <p className="h-10 text-sm leading-5 text-gray-400">
              Our standard package for growing teams.
            </p>
          </div>
          <div className="mb-8 flex items-baseline">
            <span className="text-5xl font-bold tracking-tight">$49</span>
            <span className="ml-1 text-gray-500">/mo</span>
          </div>
          <ul className="mb-10 flex flex-1 flex-col gap-4 text-sm leading-5 text-gray-300">
            <li className="flex items-center gap-3">
              <CheckIcon className="h-[1em] w-[1em] shrink-0 text-brand-orange" />
              Up to 5 users
            </li>
            <li className="flex items-center gap-3">
              <CheckIcon className="h-[1em] w-[1em] shrink-0 text-brand-orange" />
              Basic analytics
            </li>
            <li className="flex items-center gap-3">
              <CheckIcon className="h-[1em] w-[1em] shrink-0 text-brand-orange" />
              Standard support
            </li>
          </ul>
          <Link
            href="/get-started"
            className="block w-full border border-[#2E2E2E] bg-surface-700 py-4 text-center font-medium text-white transition-colors duration-150 hover:bg-[#2E2E2E]"
          >
            Get Started
          </Link>
        </div>

        <div className="relative flex flex-col border-2 border-brand-orange bg-surface-card p-8 shadow-card-popular md:-translate-y-4">
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-orange px-4 py-1 text-xs font-bold uppercase tracking-wider text-white">
            Most Popular
          </div>
          <div className="mb-8">
            <h3 className="mb-2 text-2xl font-bold">Professional</h3>
            <p className="h-10 text-sm leading-5 text-gray-400">
              Best for offering multiple experiences.
            </p>
          </div>
          <div className="mb-8 flex items-baseline">
            <span className="text-5xl font-bold tracking-tight">$99</span>
            <span className="ml-1 text-gray-500">/mo</span>
          </div>
          <ul className="mb-10 flex flex-1 flex-col gap-4 text-sm leading-5 text-gray-300">
            <li className="flex items-center gap-3">
              <CheckIcon className="h-[1em] w-[1em] shrink-0 text-brand-orange" />
              Unlimited users
            </li>
            <li className="flex items-center gap-3">
              <CheckIcon className="h-[1em] w-[1em] shrink-0 text-brand-orange" />
              Advanced analytics
            </li>
            <li className="flex items-center gap-3">
              <CheckIcon className="h-[1em] w-[1em] shrink-0 text-brand-orange" />
              Priority support
            </li>
            <li className="flex items-center gap-3">
              <CheckIcon className="h-[1em] w-[1em] shrink-0 text-brand-orange" />
              Custom integrations
            </li>
          </ul>
          <Link
            href="/get-started"
            className="block w-full border-0 bg-brand-orange py-4 text-center font-bold text-white transition-colors duration-150 hover:bg-brand-orange-hover"
          >
            Get Started
          </Link>
        </div>

        <div className="relative flex flex-col border border-surface-border bg-surface-card p-8 transition-colors duration-150 hover:border-surface-border-hover">
          <div className="mb-8">
            <h3 className="mb-2 text-2xl font-bold">Enterprise</h3>
            <p className="h-10 text-sm leading-5 text-gray-400">
              Best for global, complex use cases.
            </p>
          </div>
          <div className="mb-8 flex items-baseline">
            <span className="text-5xl font-bold tracking-tight">$249</span>
            <span className="ml-1 text-gray-500">/mo</span>
          </div>
          <ul className="mb-10 flex flex-1 flex-col gap-4 text-sm leading-5 text-gray-300">
            <li className="flex items-center gap-3">
              <CheckIcon className="h-[1em] w-[1em] shrink-0 text-brand-orange" />
              Everything in Pro
            </li>
            <li className="flex items-center gap-3">
              <CheckIcon className="h-[1em] w-[1em] shrink-0 text-brand-orange" />
              Dedicated success manager
            </li>
            <li className="flex items-center gap-3">
              <CheckIcon className="h-[1em] w-[1em] shrink-0 text-brand-orange" />
              SLA guarantee
            </li>
          </ul>
          <Link
            href="/contact"
            className="block w-full border border-[#2E2E2E] bg-surface-700 py-4 text-center font-medium text-white transition-colors duration-150 hover:bg-[#2E2E2E]"
          >
            Contact Sales
          </Link>
        </div>
      </section>

      <section id="comparison-grid" className="mb-32 font-sans">
        <h2 className="mb-10 border-b border-surface-border pb-4 text-3xl font-bold leading-snug">
          Key Features
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[600px] text-left text-sm">
            <thead>
              <tr className="border-b border-surface-border">
                <th className="w-1/4 px-4 py-4 font-medium text-gray-400">
                  Features
                </th>
                <th className="w-1/4 px-4 py-4 text-center font-medium">
                  Essentials
                </th>
                <th className="w-1/4 px-4 py-4 text-center font-medium text-brand-orange">
                  Professional
                </th>
                <th className="w-1/4 px-4 py-4 text-center font-medium">
                  Enterprise
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
