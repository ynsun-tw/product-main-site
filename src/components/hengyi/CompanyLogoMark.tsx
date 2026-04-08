import Image from "next/image";
import { SITE_LOGO_PATH } from "@/lib/seo";

const SIZE_PX = { sm: 40, md: 48, lg: 64, xl: 96 } as const;

type LogoSize = keyof typeof SIZE_PX;

type Props = {
  size?: LogoSize;
  className?: string;
  priority?: boolean;
};

/** 全站统一公司标识图（恒亿标志） */
export function CompanyLogoMark({
  size = "md",
  className = "",
  priority = false,
}: Props) {
  const px = SIZE_PX[size];
  return (
    <Image
      src={SITE_LOGO_PATH}
      alt="大连恒亿偶合器"
      width={px}
      height={px}
      className={`object-contain object-left ${className}`}
      priority={priority || size === "md"}
    />
  );
}
