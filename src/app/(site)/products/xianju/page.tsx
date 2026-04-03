import { ProductDetailPage } from "@/components/products/ProductDetailPage";
import { buildSubpageMetadata } from "@/lib/seo";

export const metadata = buildSubpageMetadata({
  title: "限矩型液力偶合器",
  description:
    "限矩型液力偶合器技术详情：过载保护、软启动、隔离振动，含系列型号与技术参数表。",
  path: "/products/xianju",
});

export default function XianjuProductPage() {
  return <ProductDetailPage />;
}
