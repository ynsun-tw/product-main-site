import { EmptyMain } from "@/components/empty-main";
import { buildSubpageMetadata } from "@/lib/seo";

export const metadata = buildSubpageMetadata({
  title: "登录",
  description: "用户登录入口。",
  path: "/sign-in",
});

export default function SignInPage() {
  return <EmptyMain />;
}
