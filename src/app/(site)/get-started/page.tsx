import { EmptyMain } from "@/components/empty-main";
import { buildSubpageMetadata } from "@/lib/seo";

export const metadata = buildSubpageMetadata({
  title: "快速入门",
  description: "新用户快速入门与使用指引。",
  path: "/get-started",
});

export default function GetStartedPage() {
  return <EmptyMain />;
}
