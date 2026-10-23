import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { useCart } from "@/lib/cart";
const logo = "/ourslogo.jpg";

const nav = [
  { to: "/products", label: "Products" },
  { to: "/offers", label: "Offers" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const { count, setOpen } = useCart();
  const [menu, setMenu] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b bg-background backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-4 px-5">
        <Link to="/" aria-label="Ours home" className="flex h-14 w-28 items-center justify-center">
          <img src={logo} alt="Ours" className="h-full w-full object-contain mix-blend-screen" />
        </Link>
        <nav className="hidden gap-8 md:flex">
          {nav.map((n) => (
            <Link key={n.to} to={n.to} className="font-display text-sm uppercase tracking-widest text-muted-foreground transition hover:text-foreground" activeProps={{ className: "chrome-text" }}>
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <button onClick={() => setOpen(true)} className="chrome-bg rounded-full px-5 py-2 font-display text-xs font-bold uppercase tracking-wider">
            Cart ({count})
          </button>
          <button onClick={() => setMenu(!menu)} className="rounded-full border px-3 py-2 text-xs md:hidden">Menu</button>
        </div>
      </div>
      {menu && (
        <nav className="flex flex-col gap-4 border-t px-5 py-5 md:hidden">
          {nav.map((n) => (
            <Link key={n.to} to={n.to} onClick={() => setMenu(false)} className="font-display text-2xl font-bold uppercase">{n.label}</Link>
          ))}
        </nav>
      )}
    </header>
  );
}

export function Footer() {
  return (
    <footer className="mt-24 border-t">
      <div className="overflow-hidden py-6">
        <div className="marquee flex w-max gap-12 whitespace-nowrap font-logo text-6xl font-bold sm:text-7xl md:text-8xl">
          {Array.from({ length: 8 }).map((_, i) => (
            <span key={i} className={i % 2 ? "text-muted-foreground/30" : "chrome-text"}>Ours ✦</span>
          ))}
        </div>
      </div>
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-2 px-5 py-8 text-xs text-muted-foreground md:flex-row">
        <span>© 2026 OURS. All rights reserved.</span>
        <span>Made for the future, inspired by the past.</span>
      </div>
    </footer>
  );
}

export function PageTitle({ kicker, title }: { kicker: string; title: string }) {
  return (
    <div className="mx-auto max-w-7xl px-5 pb-10 pt-16">
      <p className="mb-4 text-xs uppercase tracking-[0.4em] text-muted-foreground">✦ {kicker}</p>
      <h1 className="chrome-text font-display text-[clamp(2rem,11vw,9rem)] font-black uppercase leading-none break-words">{title}</h1>
    </div>
  );
}
