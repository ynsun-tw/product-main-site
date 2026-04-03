import type { Metadata } from "next";
import { ProductDetailPage } from "@/components/products/ProductDetailPage";

export const metadata: Metadata = {
  title: "调速型液力偶合器 | 大连恒忆偶合器有限公司",
  description:
    "调速型液力偶合器技术详情：无级调速、节能运行与过载保护，适用于风机、泵类等工况。",
};

export default function TiaosuProductPage() {
  return <ProductDetailPage variant="tiaosu" />;
}
