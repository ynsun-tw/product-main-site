import { ProductHomePage } from "@/components/products/ProductHomePage";
import { buildHomeMetadata } from "@/lib/seo";

export const metadata = buildHomeMetadata();

export default function HomePage() {
  return <ProductHomePage />;
}
