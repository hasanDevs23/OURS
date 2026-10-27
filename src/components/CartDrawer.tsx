import { useState } from "react";
import { z } from "zod";
import { useCart } from "@/lib/cart";
import { formatPrice } from "@/lib/products";
import { allChartKeys } from "@/lib/sizeCharts";
import { SizeChartModal } from "@/components/SizeChart";

const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyzMhcGqp8lzLUxopWwNiujBjkSnLbJBLNKQZTJ9URzYfrpjuHZt6OMPNqHcrlNA7k/exec";

const baseFields = {
  name: z.string().trim().min(1, "Name is required").max(100),
  address: z.string().trim().min(5, "Address is required").max(300),
  phone: z.string().trim().regex(/^[+\d][\d\s-]{6,19}$/, "Enter a valid phone number"),
};

const schema = z.object({
  ...baseFields,
  size: z.string().trim().max(20),
  hoodieSize: z.string().trim().max(20),
  pantsSize: z.string().trim().max(20),
});

export function CartDrawer() {
  const { items, open, setOpen, setQty, total, lookup, clear } = useCart();
  const [step, setStep] = useState<"cart" | "form" | "done">("cart");
  const [form, setForm] = useState({ name: "", address: "", phone: "", size: "", hoodieSize: "", pantsSize: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [showCharts, setShowCharts] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!open) return null;
  const close = () => { setOpen(false); if (step === "done") setStep("cart"); };

  const hasBundle = items.some((i) => lookup(i.id)?.fit === "offer");

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    const r = schema.safeParse(form);
    const fieldErrors: Record<string, string> = {};
    if (!r.success) {
      for (const i of r.error.issues) fieldErrors[String(i.path[0])] = i.message;
    }
    if (hasBundle) {
      if (!form["hoodieSize"].trim()) fieldErrors["hoodieSize"] = "Hoodie size is required";
      if (!form["pantsSize"].trim()) fieldErrors["pantsSize"] = "Pants size is required";
    } else if (!form["size"].trim()) {
      fieldErrors["size"] = "Size is required";
    }
    if (Object.keys(fieldErrors).length) {
      setErrors(fieldErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    // 1. Format combined size string
    const finalSize = hasBundle
      ? `Hoodie: ${form.hoodieSize.trim()} | Pants: ${form.pantsSize.trim()}`
      : form.size.trim() || items.map((i) => i.size).filter(Boolean).join(", ");

    // 2. Format items list for Google Sheets
    const itemsSummary = items
      ? items.map((i) => `${lookup(i.id)?.name || i.id} (Qty: ${i.qty}${i.size ? `, Size: ${i.size}` : ""})`).join(" ; ")
      : "";

    // 3. Extract all product image URLs from cart items
    const allImages = items
      .map((i) => lookup(i.id)?.image)
      .filter((img): img is string => Boolean(img));

    const payload = {
      name: form.name.trim(),
      phone: form.phone.trim(),
      address: form.address.trim(),
      size: finalSize,
      items: itemsSummary,
      total: formatPrice(total),
      imageUrl: allImages.join(", "),
      imageUrls: allImages,
    };

    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      // Meta Pixel Purchase Conversion Event
      if (typeof window !== 'undefined' && (window as any).fbq) {
        (window as any).fbq('track', 'Purchase', {
          currency: 'BDT',
          value: total,
          contents: items.map((i) => ({
            id: i.id,
            quantity: i.qty,
          })),
        });
      }

      clear();
      setForm({ name: "", address: "", phone: "", size: "", hoodieSize: "", pantsSize: "" });
      setStep("done");
    } catch (err) {
      console.error("Submission error:", err);
      setErrors({ submit: "Failed to place order. Please try again." });
    } finally {
      setIsSubmitting(false);
    }
  };

  const input = "w-full rounded-lg border bg-muted px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-ring";

  const field = (f: "name" | "address" | "phone" | "size" | "hoodieSize" | "pantsSize", label: string) => (
    <label key={f} className="block">
      <span className="mb-2 block text-xs uppercase tracking-widest">{label}</span>
      {f === "address" ? (
        <textarea rows={3} maxLength={300} className={input} value={form[f]} onChange={(e) => setForm({ ...form, [f]: e.target.value })} />
      ) : (
        <input type={f === "phone" ? "tel" : "text"} maxLength={100} className={input} value={form[f]} onChange={(e) => setForm({ ...form, [f]: e.target.value })} />
      )}
      {errors[f] && <span className="mt-1 block text-xs text-destructive">{errors[f]}</span>}
    </label>
  );

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-background/70 backdrop-blur-sm animate-in fade-in" onClick={close}>
      <aside onClick={(e) => e.stopPropagation()} className="flex h-full w-full max-w-md flex-col border-l bg-card animate-in slide-in-from-right">
        <div className="flex items-center justify-between border-b p-5">
          <h2 className="chrome-text font-display text-2xl font-black uppercase">{step === "form" ? "Checkout" : "Your Cart"}</h2>
          <button onClick={close} aria-label="Close cart" className="h-9 w-9 rounded-full border">✕</button>
        </div>

        {step === "done" ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-4 p-8 text-center">
            <p className="chrome-text font-display text-5xl font-black">✦</p>
            <h3 className="font-display text-xl font-bold uppercase">Order placed</h3>
            <p className="text-sm text-muted-foreground">Thanks! We'll contact you on your phone to confirm delivery.</p>
          </div>
        ) : step === "cart" ? (
          <>
            <div className="flex-1 space-y-4 overflow-y-auto p-5">
              {items.length === 0 && <p className="pt-10 text-center text-sm text-muted-foreground">Your cart is empty.</p>}
              {items.map((i) => {
                const p = lookup(i.id);
                if (!p) return null;
                return (
                  <div key={i.id + i.size} className="flex gap-4 rounded-lg border p-3">
                    {p.image ? <img src={p.image} alt={p.name} className="h-20 w-16 shrink-0 rounded bg-muted object-cover" /> : <div className="grid-bg h-20 w-16 shrink-0 rounded bg-muted" />}
                    <div className="flex-1">
                      <p className="font-display text-xs font-bold uppercase">{p.name}</p>
                      <p className="text-xs text-muted-foreground">Size {i.size}</p>
                      <div className="mt-2 flex items-center gap-3 text-sm">
                        <button onClick={() => setQty(i.id, i.size, i.qty - 1)} className="h-7 w-7 rounded-full border">−</button>
                        {i.qty}
                        <button onClick={() => setQty(i.id, i.size, i.qty + 1)} className="h-7 w-7 rounded-full border">+</button>
                      </div>
                    </div>
                    <p className="text-sm">{formatPrice(p.price * i.qty)}</p>
                  </div>
                );
              })}
            </div>
            <div className="space-y-4 border-t p-5">
              <div className="flex justify-between font-display text-lg font-bold"><span>Total</span><span>{formatPrice(total)}</span></div>
              <button disabled={!items.length} onClick={() => setStep("form")} className="chrome-bg w-full rounded-full py-4 font-display text-sm font-black uppercase tracking-widest disabled:opacity-40">Checkout</button>
            </div>
          </>
        ) : (
          <form onSubmit={submit} className="flex flex-1 flex-col gap-4 overflow-y-auto p-5">
            {field("name", "Full name")}
            {field("address", "Delivery address")}
            {field("phone", "Phone number")}
            {hasBundle ? (
              <>
                {field("hoodieSize", "Hoodie size (e.g. S, M, L, XL)")}
                {field("pantsSize", "Pants size (e.g. S, M, L, XL)")}
              </>
            ) : (
              field("size", "Size (e.g. S, M, L, XL)")
            )}
            <button type="button" onClick={() => setShowCharts(true)} className="rounded-full border px-4 py-2.5 text-[11px] uppercase tracking-widest transition hover:bg-accent">
              View size charts
            </button>

            {errors.submit && <p className="text-xs text-destructive">{errors.submit}</p>}

            <div className="mt-auto space-y-3 pt-2">
              {/* Cash on Delivery Notice */}
              <div className="rounded-lg border border-dashed border-muted-foreground/30 bg-muted/40 p-3 text-center">
                <p className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                  Payment Method: <span className="text-foreground font-bold">Cash on Delivery (COD)</span>
                </p>
              </div>

              <div className="flex justify-between font-display text-lg font-bold"><span>Total</span><span>{formatPrice(total)}</span></div>
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="chrome-bg w-full rounded-full py-4 font-display text-sm font-black uppercase tracking-widest disabled:opacity-50"
              >
                {isSubmitting ? "Placing order..." : "Place order"}
              </button>
              <button type="button" onClick={() => setStep("cart")} className="w-full text-xs uppercase tracking-widest text-muted-foreground">← Back to cart</button>
            </div>
          </form>
        )}
      </aside>
      {showCharts && <SizeChartModal charts={allChartKeys} onClose={() => setShowCharts(false)} />}
    </div>
  );
}