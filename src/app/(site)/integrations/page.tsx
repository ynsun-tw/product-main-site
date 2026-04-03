import { EmptyMain } from "@/components/empty-main";
import { buildSubpageMetadata } from "@/lib/seo";

export const metadata = buildSubpageMetadata({
  title: "集成对接",
  description: "系统集成与第三方对接说明。",
  path: "/integrations",
});

export default function IntegrationsPage() {
  return <EmptyMain />;
}
