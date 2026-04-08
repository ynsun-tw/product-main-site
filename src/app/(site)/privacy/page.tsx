import { EmptyMain } from "@/components/empty-main";
import { buildSubpageMetadata } from "@/lib/seo";

export const metadata = buildSubpageMetadata({
  title: "隐私政策",
  description: "大连恒亿偶合器有限公司网站隐私政策说明。",
  path: "/privacy",
});

export default function PrivacyPage() {
  return <EmptyMain />;
}
