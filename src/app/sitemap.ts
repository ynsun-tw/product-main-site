import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/seo";

export const dynamic = "force-static";

const ROUTES = [
  "",
  "products/tiaosu",
  "products/xianju",
  "pricing",
  "about",
  "contact",
  "careers",
  "features",
  "integrations",
  "get-started",
  "sign-in",
  "resources",
  "solutions",
  "privacy",
  "terms",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl().replace(/\/$/, "");
  return ROUTES.map((route) => {
    const url = route ? `${base}/${route}/` : `${base}/`;
    const isHome = route === "";
    const isProduct = route.startsWith("products");
    return {
      url,
      lastModified: new Date(),
      changeFrequency: isHome ? "weekly" : "monthly",
      priority: isHome ? 1 : isProduct ? 0.9 : 0.55,
    };
  });
}
