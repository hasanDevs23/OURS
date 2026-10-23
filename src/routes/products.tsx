import { createFileRoute } from "@tanstack/react-router";
import { PageTitle } from "@/components/Shell";
import { ProductSection } from "@/components/Products";
import { dropShoulder, regularFit, cardigans, fitLabels } from "@/lib/products";


export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products — OURS" },
      { name: "description", content: "Shop OURS hoodies in two fits: drop shoulder and regular fit, in black and liquid silver." },
      { property: "og:title", content: "Products — OURS" },
      { property: "og:description", content: "Drop shoulder and regular fit hoodies." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },

    ],
  }),
  component: () => (
    <>
      <PageTitle kicker="The full collection" title="Products" />
      <div className="pb-24">
        <ProductSection title={fitLabels.drop} items={dropShoulder} />
        <ProductSection title={fitLabels.regular} items={regularFit} />
        <ProductSection title={fitLabels.cardigan} items={cardigans} />
      </div>

    </>
  ),
});
