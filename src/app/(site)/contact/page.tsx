import { EmptyMain } from "@/components/empty-main";
import { buildSubpageMetadata } from "@/lib/seo";

export const metadata = buildSubpageMetadata({
  title: "联系我们",
  description:
    "大连恒亿偶合器有限公司联系方式：地址、电话、传真与邮箱。",
  path: "/contact",
});

export default function ContactPage() {
  return <EmptyMain />;
}
