import { EmptyMain } from "@/components/empty-main";
import { buildSubpageMetadata } from "@/lib/seo";

export const metadata = buildSubpageMetadata({
  title: "资源中心",
  description: "技术资料、文档与下载资源。",
  path: "/resources",
});

export default function ResourcesPage() {
  return <EmptyMain />;
}
