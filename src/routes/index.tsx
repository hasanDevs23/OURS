import { createFileRoute, Link } from "@tanstack/react-router";
import { FeaturedOffer, ProductGrid } from "@/components/Products";
import { featuredOffer, products } from "@/lib/products";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "OURS — Y2K Chrome Streetwear" },
      { name: "description", content: "Black and liquid-silver Y2K clothing by OURS. Shop the new drop." },
      { property: "og:title", content: "OURS — Y2K Chrome Streetwear" },
      { property: "og:description", content: "Black and liquid-silver Y2K clothing by OURS." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      {featuredOffer && <FeaturedOffer product={featuredOffer} />}
      <section className="grid-bg relative overflow-hidden border-b">
        <div className="float pointer-events-none absolute right-[8%] top-16 font-display text-8xl chrome-text">✦</div>
        <div className="float pointer-events-none absolute bottom-20 left-[6%] font-display text-5xl chrome-text [animation-delay:2s]">✧</div>
        <div className="mx-auto flex min-h-[85vh] max-w-7xl flex-col justify-center px-5 py-20">
          <p className="mb-6 text-xs uppercase tracking-[0.5em] text-muted-foreground">✦ Drop 001 — Styled Winter</p>
          <h1 className="chrome-text font-logo text-[24vw] font-bold leading-[0.95] md:text-[16rem]">Ours</h1>
          <p className="mt-8 max-w-lg text-lg text-muted-foreground">Steal the Room.</p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link to="/products" className="chrome-bg rounded-full px-8 py-4 font-display text-sm font-black uppercase tracking-widest">Shop now</Link>
            <Link to="/offers" className="rounded-full border px-8 py-4 font-display text-sm font-bold uppercase tracking-widest hover:bg-accent">See offers</Link>
          </div>
        </div>
      </section>
      <div className="overflow-hidden border-b py-4">
        <div className="marquee flex w-max gap-10 whitespace-nowrap font-display text-xl font-bold uppercase">
          {Array.from({ length: 12 }).map((_, i) => (
            <span key={i} className="text-muted-foreground">✦ Your friends will steal these from you ✦ Streetwear for the unapologetic ✦ Premium fits only ✦ Limited quantities</span>
          ))}
        </div>
      </div>
      <section className="pt-20">
        <div className="mx-auto mb-10 flex max-w-7xl items-end justify-between px-5">
          <h2 className="font-display text-4xl font-black uppercase md:text-7xl">New <span className="chrome-text">In</span></h2>
          <Link 
            to="/products" 
            className="chrome-bg inline-flex items-center justify-center rounded-full px-6 py-2.5 font-display text-xs font-black uppercase tracking-widest text-black shadow-lg transition-transform hover:scale-105 active:scale-95"
          >
            View All →
          </Link>
        </div>
        <ProductGrid items={products.slice(0, 4)} />
      </section>
    </>
  );
}