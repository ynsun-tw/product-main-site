"use client";

export function SubscribeForm() {
  return (
    <form
      className="flex flex-col gap-3 sm:flex-row"
      onSubmit={(e) => {
        e.preventDefault();
        // 静态部署无服务端；后续可接入邮件服务或第三方表单
      }}
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
        className="shrink-0 bg-zinc-600 px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-zinc-500"
      >
        立即订阅
      </button>
    </form>
  );
}
