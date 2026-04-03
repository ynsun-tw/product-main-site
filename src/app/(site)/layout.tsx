import { HengyiFooter } from "@/components/hengyi/HengyiFooter";
import { HengyiHeader } from "@/components/hengyi/HengyiHeader";
import { OrganizationJsonLd } from "@/components/seo/OrganizationJsonLd";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col bg-[#0a0a0a] text-white">
      <OrganizationJsonLd />
      <HengyiHeader />
      {children}
      <HengyiFooter />
    </div>
  );
}
