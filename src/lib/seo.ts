import type { Metadata } from "next";

export const SITE_NAME = "大连恒忆偶合器有限公司";

export const SITE_SHORT_NAME = "恒忆偶合器";

/** 默认分享图（绝对 URL 在运行时由 metadataBase 拼接，此处为路径或站外稳定地址） */
export const DEFAULT_OG_IMAGE =
  "https://storage.googleapis.com/uxpilot-auth.appspot.com/71bdf0b679-9ef3712e04cdf7481890.png";

export const SITE_DEFAULT_DESCRIPTION =
  "大连恒忆偶合器有限公司——调速型、限矩型液力偶合器研发与制造，为重工业提供动力传输、过载保护与节能解决方案。";

export const SITE_KEYWORDS = [
  "液力偶合器",
  "调速型液力偶合器",
  "限矩型液力偶合器",
  "大连恒忆",
  "液力耦合器",
  "软启动",
  "过载保护",
  "工业传动",
] as const;

/**
 * 站点根 URL（勿带末尾 /）。本地未配置时使用 localhost。
 * 生产环境请在构建时设置 `NEXT_PUBLIC_SITE_URL`（GitHub Actions 已自动写入）。
 */
export function getSiteUrl(): string {
  const env = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (env) return env.replace(/\/$/, "");
  return "http://localhost:3000";
}

export function getMetadataBase(): URL {
  return new URL(`${getSiteUrl()}/`);
}

function normalizePath(path: string): string {
  const p = path.startsWith("/") ? path : `/${path}`;
  return p.endsWith("/") ? p : `${p}/`;
}

function absoluteUrl(path: string): string {
  const base = getSiteUrl().replace(/\/$/, "");
  const p = normalizePath(path);
  return `${base}${p}`;
}

export function buildHomeMetadata(): Metadata {
  const title = `${SITE_NAME} | 液力偶合器研发与制造`;
  const path = "/";
  return {
    title: { absolute: title },
    description: SITE_DEFAULT_DESCRIPTION,
    keywords: [...SITE_KEYWORDS],
    alternates: { canonical: normalizePath(path) },
    openGraph: {
      type: "website",
      locale: "zh_CN",
      siteName: SITE_NAME,
      url: absoluteUrl(path),
      title,
      description: SITE_DEFAULT_DESCRIPTION,
      images: [
        {
          url: DEFAULT_OG_IMAGE,
          width: 1200,
          height: 630,
          alt: SITE_NAME,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: SITE_DEFAULT_DESCRIPTION,
      images: [DEFAULT_OG_IMAGE],
    },
  };
}

/** 子页面 title 会套用根 layout 的 title.template */
export function buildSubpageMetadata(opts: {
  /** 不含站名后缀，例如「调速型液力偶合器」 */
  title: string;
  description: string;
  /** 例如 /products/tiaosu 或 /products/tiaosu/ */
  path: string;
}): Metadata {
  const canonical = normalizePath(opts.path);
  const pageUrl = absoluteUrl(opts.path);
  return {
    title: opts.title,
    description: opts.description,
    keywords: [...SITE_KEYWORDS],
    alternates: { canonical },
    openGraph: {
      type: "website",
      locale: "zh_CN",
      siteName: SITE_NAME,
      url: pageUrl,
      title: `${opts.title} | ${SITE_NAME}`,
      description: opts.description,
      images: [
        {
          url: DEFAULT_OG_IMAGE,
          width: 1200,
          height: 630,
          alt: opts.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${opts.title} | ${SITE_NAME}`,
      description: opts.description,
      images: [DEFAULT_OG_IMAGE],
    },
  };
}

