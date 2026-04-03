import { EmptyMain } from "@/components/empty-main";
import { buildSubpageMetadata } from "@/lib/seo";

export const metadata = buildSubpageMetadata({
  title: "解决方案",
  description: "面向重工业与传动领域的解决方案概述。",
  path: "/solutions",
});

export default function SolutionsPage() {
  return <EmptyMain />;
}
