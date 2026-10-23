import { createFileRoute } from "@tanstack/react-router";
import { PageTitle } from "@/components/Shell";
import { ProductGrid } from "@/components/Products";
import { offers } from "@/lib/products";

export const Route = createFileRoute("/offers")({
  head: () => ({
    meta: [
      { title: "Offers — OURS" },
      { name: "description", content: "Limited-time deals on OURS Y2K pieces." },
      { property: "og:title", content: "Offers — OURS" },
      { property: "og:description", content: "Limited-time deals on OURS Y2K pieces." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => (
    <>
      <PageTitle kicker="Limited time" title="Offers" />
      <ProductGrid items={offers} />
    </>
  ),
});
