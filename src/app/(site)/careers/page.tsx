import { EmptyMain } from "@/components/empty-main";
import { buildSubpageMetadata } from "@/lib/seo";

export const metadata = buildSubpageMetadata({
  title: "人才招聘",
  description: "加入大连恒忆偶合器，与团队共同成长。",
  path: "/careers",
});

export default function CareersPage() {
  return <EmptyMain />;
}
