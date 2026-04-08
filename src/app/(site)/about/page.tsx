import { EmptyMain } from "@/components/empty-main";
import { buildSubpageMetadata } from "@/lib/seo";

export const metadata = buildSubpageMetadata({
  title: "关于我们",
  description:
    "了解大连恒亿偶合器有限公司、制造能力与质量体系。",
  path: "/about",
});

export default function AboutPage() {
  return <EmptyMain />;
}
