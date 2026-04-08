import type { Metadata } from "next";
import { Inter } from "next/font/google";
import {
  getMetadataBase,
  SITE_DEFAULT_DESCRIPTION,
  SITE_KEYWORDS,
  SITE_LOGO_PATH,
  SITE_NAME,
} from "@/lib/seo";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const googleVerification = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION;
const baiduVerification = process.env.NEXT_PUBLIC_BAIDU_SITE_VERIFICATION;

export const metadata: Metadata = {
  metadataBase: getMetadataBase(),
  title: {
    default: `${SITE_NAME} | 液力偶合器`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DEFAULT_DESCRIPTION,
  keywords: [...SITE_KEYWORDS],
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  icons: {
    icon: SITE_LOGO_PATH,
    apple: SITE_LOGO_PATH,
  },
  ...(googleVerification || baiduVerification
    ? {
        verification: {
          ...(googleVerification ? { google: googleVerification } : {}),
          ...(baiduVerification
            ? {
                other: {
                  "baidu-site-verification": baiduVerification,
                },
              }
            : {}),
        },
      }
    : {}),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className={inter.variable} suppressHydrationWarning>
      <body
        className="min-h-screen bg-[#0a0a0a] font-sans text-white antialiased"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
