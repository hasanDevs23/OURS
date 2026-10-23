import { createFileRoute } from "@tanstack/react-router";
import { PageTitle } from "@/components/Shell";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — OURS" },
      { name: "description", content: "Get in touch with the OURS team." },
      { property: "og:title", content: "Contact — OURS" },
      { property: "og:description", content: "Get in touch with the OURS team." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Contact,
});

function Contact() {
  const rows: [string, string, string][] = [
    ["WhatsApp", "01355200762", "https://wa.me/8801355200762"],
    ["Mobile", "01355200762", "tel:+8801355200762"],
    ["Instagram", "@ours.wear", "https://www.instagram.com/ours.wear?exln=MXVyZzV6dHppZmZzbQ%3D%3D&utm_source=qr"],
    ["Facebook", "OURS on Facebook", "https://www.facebook.com/share/19VarpJyTW/?mibextid=wwXIfr"],
  ];

  return (
    <>
      <PageTitle kicker="Say hi" title="Contact" />
      <section className="mx-auto grid max-w-7xl gap-4 px-5 md:grid-cols-2">
        {rows.map(([k, v, href]) => (
          <a
            key={k}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="chrome-border relative z-10 block cursor-pointer rounded-lg p-8 transition hover:glow focus-visible:outline-2 focus-visible:outline-ring"
          >
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">{k}</p>
            <p className="mt-3 break-words font-display text-2xl font-bold md:text-3xl">{v}</p>
          </a>
        ))}
      </section>
    </>
  );
}