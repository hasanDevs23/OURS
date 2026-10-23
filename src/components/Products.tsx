import { useEffect, useState } from "react";
import { formatPrice, type Product } from "@/lib/products";
import { chartsForFit } from "@/lib/sizeCharts";
import { SizeChartModal } from "@/components/SizeChart";
import { useCart } from "@/lib/cart";
import { Button } from "@/components/ui/button";

export function FeaturedOffer({ product }: { product: Product }) {
  const [active, setActive] = useState(false);
  return (
    <section className="border-b bg-muted/20">
      <div className="mx-auto max-w-7xl px-5 py-6 md:py-10">
        <img src={product.image} alt={product.name} fetchPriority="high" className="mx-auto aspect-square max-h-[65vh] w-full object-contain" />
        <div className="mx-auto mt-5 flex max-w-2xl flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-xs uppercase text-muted-foreground">Featured offer</p>
            <h2 className="chrome-text font-display text-xl font-bold md:text-2xl">{product.name}</h2>
            <p className="mt-2 font-display font-bold">{formatPrice(product.price)}</p>
          </div>
          <Button onClick={() => setActive(true)} className="chrome-bg font-display font-bold">Shop offer →</Button>
        </div>
      </div>
      {active && <ProductInsight product={product} onClose={() => setActive(false)} />}
    </section>
  );
}

function ImageSlot({
  src,
  alt = "",
  className = "",
}: {
  src?: string | undefined;
  alt?: string | undefined;
  className?: string | undefined;
}) {
  if (src) {
    return (
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className={`bg-muted object-cover ${className}`}
      />
    );
  }
  return (
    <div className={`grid-bg flex items-center justify-center bg-muted ${className}`}>
      <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground/50">Image</span>
    </div>
  );
}

export function ProductSection({
  title,
  note,
  items,
}: {
  title: string;
  note?: string;
  items: Product[];
}) {
  return (
    <section className="pt-16 first:pt-8 md:pt-24">
      <div className="mx-auto mb-8 max-w-7xl px-5">
        <div className="flex flex-wrap items-end justify-between gap-3 border-b pb-5">
          <h2 className="font-display text-3xl font-black uppercase leading-none md:text-6xl">
            <span className="chrome-text">{title}</span>
          </h2>
          <p className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
            {note ?? `${items.length} pieces`}
          </p>
        </div>
      </div>
      <ProductGrid items={items} />
    </section>
  );
}

export function ProductGrid({ items }: { items: Product[] }) {

  const [active, setActive] = useState<Product | null>(null);
  return (
    <>
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-4 px-5 md:grid-cols-3 lg:grid-cols-4 md:gap-6">
        {items.map((p) => (
          <button key={p.id} onClick={() => setActive(p)} className="chrome-border group overflow-hidden rounded-lg text-left transition duration-300 hover:-translate-y-1 hover:glow">
            <div className="relative">
              <ImageSlot src={p.image} alt={p.name} className="aspect-[3/4] w-full transition duration-500 group-hover:scale-105" />
              {p.oldPrice && <span className="chrome-bg absolute left-3 top-3 rounded-full px-3 py-1 text-[10px] font-bold uppercase">Sale</span>}
            </div>
            <div className="p-4">
              <p className="text-[10px] uppercase tracking-widest text-muted-foreground">{p.category}</p>
              <h3 className="mt-1 font-display text-sm font-bold uppercase md:text-base">{p.name}</h3>
              <p className="mt-2 text-sm">
                {formatPrice(p.price)} {p.oldPrice && <s className="ml-1 text-muted-foreground">{formatPrice(p.oldPrice)}</s>}
              </p>
            </div>
          </button>
        ))}
      </div>
      {active && <ProductInsight product={active} onClose={() => setActive(null)} />}
    </>
  );
}

function ProductInsight({ product, onClose }: { product: Product; onClose: () => void }) {
  const { add } = useCart();
  const [size, setSize] = useState<string>(product.sizes[0] ?? "One size");
  const [showChart, setShowChart] = useState(false);
  useEffect(() => {
    const k = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", k);
    return () => window.removeEventListener("keydown", k);
  }, [onClose]);
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 p-4 backdrop-blur-md animate-in fade-in" onClick={onClose}>
      <div onClick={(e) => e.stopPropagation()} className="chrome-border glow relative grid max-h-[92vh] w-full max-w-5xl overflow-y-auto rounded-lg md:grid-cols-2 animate-in zoom-in-95">
        <button onClick={onClose} aria-label="Close" className="chrome-bg absolute right-3 top-3 z-10 h-9 w-9 rounded-full font-bold">✕</button>
        <ImageSlot src={product.image} alt={product.name} className="aspect-square w-full object-cover md:aspect-auto md:h-full md:min-h-[560px]" />
        <div className="flex flex-col gap-6 p-6 md:p-10">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">✦ {product.category}</p>
          <h2 className="chrome-text font-display text-3xl font-black uppercase leading-none break-words sm:text-4xl md:text-5xl">{product.name}</h2>
          <p className="font-display text-2xl font-bold">
            {formatPrice(product.price)} {product.oldPrice && <s className="text-base text-muted-foreground">{formatPrice(product.oldPrice)}</s>}
          </p>
          <p className="text-sm leading-relaxed text-muted-foreground">{product.description}</p>
          <div>
            <div className="mb-3 flex items-center justify-between gap-3">
              <p className="text-xs uppercase tracking-widest">Size</p>
              <button onClick={() => setShowChart(true)} className="rounded-full border px-4 py-1.5 text-[11px] uppercase tracking-widest transition hover:bg-accent">
                View size chart
              </button>
            </div>
            <div className="flex flex-wrap gap-2">
              {product.sizes.map((s) => (
                <button key={s} onClick={() => setSize(s)} className={`rounded-full border px-4 py-2 text-xs transition ${size === s ? "chrome-bg border-transparent" : "hover:bg-accent"}`}>{s}</button>
              ))}
            </div>
          </div>
          <button onClick={() => { add(product.id, size); onClose(); }} className="chrome-bg mt-auto rounded-full py-4 font-display text-sm font-black uppercase tracking-widest transition hover:scale-[1.02]">
            Add to cart
          </button>
        </div>
      </div>
      {showChart && <SizeChartModal charts={chartsForFit(product.fit)} onClose={() => setShowChart(false)} />}
    </div>
  );
}
