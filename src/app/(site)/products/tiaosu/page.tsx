import { TiaosuProductPage } from "@/components/products/TiaosuProductPage";
import { buildSubpageMetadata } from "@/lib/seo";

export const metadata = buildSubpageMetadata({
  title: "调速型液力偶合器",
  description:
    "调速型液力偶合器技术详情：无级调速、节能运行与过载保护，适用于风机、泵类等工况。",
  path: "/products/tiaosu",
});

export default function Page() {
  return <TiaosuProductPage />;
}
