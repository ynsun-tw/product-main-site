import { subscribeEmail } from "@/app/actions/subscribe";

export function SubscribeForm() {
  return (
    <form
      action={subscribeEmail}
      className="flex flex-col gap-3 sm:flex-row"
    >
      <input
        type="email"
        name="email"
        required
        placeholder="工作邮箱"
        className="min-w-0 flex-1 border border-white/10 bg-industrial-900 px-4 py-3 text-sm text-white placeholder:text-industrial-500 focus:border-accent focus:outline-none"
        autoComplete="email"
      />
      <button
        type="submit"
        className="shrink-0 bg-accent px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#E56000]"
      >
        立即订阅
      </button>
    </form>
  );
}
