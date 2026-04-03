import { getSiteUrl, SITE_NAME } from "@/lib/seo";

/** Organization + WebSite 结构化数据（JSON-LD） */
export function OrganizationJsonLd() {
  const url = getSiteUrl();
  const graph = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": `${url}/#organization`,
      name: SITE_NAME,
      alternateName: "恒忆偶合器",
      url,
      logo: {
        "@type": "ImageObject",
        url: "https://storage.googleapis.com/uxpilot-auth.appspot.com/71bdf0b679-9ef3712e04cdf7481890.png",
      },
      description:
        "调速型、限矩型液力偶合器研发与制造，为重工业提供动力传输、过载保护与节能解决方案。",
      address: {
        "@type": "PostalAddress",
        streetAddress: "甘井子区辛寨子镇由家村工业园区",
        addressLocality: "大连",
        addressRegion: "辽宁省",
        addressCountry: "CN",
      },
      telephone: "+86-411-39643700",
      email: "dlhy0502@163.com",
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": `${url}/#website`,
      name: SITE_NAME,
      url,
      inLanguage: "zh-CN",
      publisher: { "@id": `${url}/#organization` },
    },
  ];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@graph": graph }) }}
    />
  );
}
