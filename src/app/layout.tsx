import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "大连恒忆偶合器有限公司 | 液力偶合器",
  description:
    "大连恒忆偶合器有限公司——调速型、限矩型液力偶合器研发与制造，为重工业提供动力传输、过载保护与节能解决方案。",
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
