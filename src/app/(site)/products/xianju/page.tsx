import { XianjuProductPage } from "@/components/products/XianjuProductPage";
import { buildSubpageMetadata } from "@/lib/seo";

export const metadata = buildSubpageMetadata({
  title: "限矩型液力偶合器",
  description:
    "限矩型液力偶合器技术详情：选型曲线、多系列参数表、过载保护与软启动，含 YOX/TVA/YOXL 等型号。",
  path: "/products/xianju",
});

export default function Page() {
  return <XianjuProductPage />;
}
