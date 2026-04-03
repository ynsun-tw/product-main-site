import { EmptyMain } from "@/components/empty-main";
import { buildSubpageMetadata } from "@/lib/seo";

export const metadata = buildSubpageMetadata({
  title: "功能特性",
  description: "产品与平台功能说明与能力概览。",
  path: "/features",
});

export default function FeaturesPage() {
  return <EmptyMain />;
}
