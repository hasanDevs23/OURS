import { createFileRoute } from "@tanstack/react-router";
import { PageTitle } from "@/components/Shell";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — OURS" },
      { name: "description", content: "The story behind OURS, a Y2K-inspired clothing brand." },
      { property: "og:title", content: "About Us — OURS" },
      { property: "og:description", content: "The story behind OURS." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: About,
});

function About() {
  return (
    <>
      <PageTitle kicker="Made to be yours" title="About Ours Wear" />
      <section className="mx-auto max-w-7xl space-y-8 px-5">
        <p className="max-w-4xl font-display text-2xl font-bold leading-snug md:text-4xl">
          OURS WEAR is more than clothing — it's a reflection of <span className="chrome-text">individuality, confidence, and modern style</span>.
        </p>
        <p className="max-w-3xl leading-relaxed text-muted-foreground">
          Built on the belief that great style doesn't need to be loud, we create pieces that balance clean aesthetics, everyday comfort, and timeless appeal. Every detail matters, from the way it feels to the way it represents you.
        </p>
        <p className="max-w-3xl leading-relaxed text-muted-foreground">
          Our vision is simple: to make everyday fashion feel distinctive, effortless, and personal.
        </p>
        <div className="chrome-border max-w-3xl rounded-lg p-8">
          <p className="chrome-text font-display text-2xl font-black uppercase md:text-3xl">Wear Your Identity. Own Your Style.</p>
          <p className="mt-4 text-sm uppercase tracking-[0.3em] text-muted-foreground">Welcome to OURS WEAR.</p>
        </div>
      </section>
    </>
  );
}
