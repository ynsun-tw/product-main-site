import type { Metadata } from "next";
import { ProductDetailPage } from "@/components/products/ProductDetailPage";

export const metadata: Metadata = {
  title: "限矩型液力偶合器 | 大连恒忆偶合器有限公司",
  description:
    "限矩型液力偶合器技术详情：过载保护、软启动、隔离振动，含系列型号与技术参数表。",
};

export default function XianjuProductPage() {
  return <ProductDetailPage variant="xianju" />;
}
