import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { products, type Product } from "./products";

export type CartItem = { id: string; size: string; qty: number };

type Ctx = {
  items: CartItem[];
  open: boolean;
  setOpen: (v: boolean) => void;
  add: (id: string, size: string) => void;
  setQty: (id: string, size: string, qty: number) => void;
  clear: () => void;
  count: number;
  total: number;
  lookup: (id: string) => Product | undefined;
};

const CartContext = createContext<Ctx | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    try {
      const s = localStorage.getItem("ours-cart");
      if (s) setItems(JSON.parse(s));
    } catch {}
  }, []);
  useEffect(() => {
    localStorage.setItem("ours-cart", JSON.stringify(items));
  }, [items]);

  const lookup = (id: string) => products.find((p) => p.id === id);
  const add = (id: string, size: string) => {
    setItems((prev) => {
      const f = prev.find((i) => i.id === id && i.size === size);
      if (f) return prev.map((i) => (i === f ? { ...i, qty: i.qty + 1 } : i));
      return [...prev, { id, size, qty: 1 }];
    });
    setOpen(true);
  };
  const setQty = (id: string, size: string, qty: number) =>
    setItems((prev) =>
      prev.flatMap((i) => (i.id === id && i.size === size ? (qty > 0 ? [{ ...i, qty }] : []) : [i])),
    );
  const count = items.reduce((a, i) => a + i.qty, 0);
  const total = items.reduce((a, i) => a + i.qty * (lookup(i.id)?.price ?? 0), 0);

  return (
    <CartContext.Provider value={{ items, open, setOpen, add, setQty, clear: () => setItems([]), count, total, lookup }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const c = useContext(CartContext);
  if (!c) throw new Error("useCart outside provider");
  return c;
}
