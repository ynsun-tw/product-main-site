import { EmptyMain } from "@/components/empty-main";
import { buildSubpageMetadata } from "@/lib/seo";

export const metadata = buildSubpageMetadata({
  title: "服务条款",
  description: "网站服务条款与使用协议。",
  path: "/terms",
});

export default function TermsPage() {
  return <EmptyMain />;
}
