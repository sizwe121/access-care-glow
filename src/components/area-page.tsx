import { Link } from "@tanstack/react-router";
import { Nav, Footer, PageHero, CTAStrip } from "./site-chrome";

export interface AreaPageProps {
  eyebrow: string;
  title: string;
  italic: string;
  intro: string;
  paragraphs: string[];
  bullets: { t: string; d: string }[];
  related: { to: string; t: string }[];
}

export function AreaPage(p: AreaPageProps) {
  return (
    <main>
      <Nav />
      <PageHero eyebrow={p.eyebrow} title={p.title} italic={p.italic} intro={p.intro} />

      <section className="relative bg-bone py-20 md:py-28 overflow-hidden premium-section-light">
        <div className="mx-auto max-w-3xl px-6 space-y-6 text-ink/80 leading-relaxed text-lg">
          {p.paragraphs.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>
      </section>

      <section className="relative bg-teal-soft py-20 md:py-28 border-y border-ink/10 overflow-hidden premium-section-light">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="font-display text-3xl md:text-5xl text-ink">What you get</h2>
          <div className="mt-12 grid md:grid-cols-2 gap-8">
            {p.bullets.map((b) => (
              <div key={b.t} className="card-premium p-7">
                <div className="font-display text-2xl text-ink">{b.t}</div>
                <p className="text-ink/70 mt-3 leading-relaxed">{b.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative bg-bone py-16 overflow-hidden premium-section-light">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="font-display text-2xl text-ink">Related</h2>
          <div className="mt-6 flex flex-wrap gap-3">
            {p.related.map((r) => (
              <Link
                key={r.to}
                to={r.to}
                className="rounded-full border border-ink/20 bg-bone/80 backdrop-blur px-5 py-2 text-sm text-ink hover:border-teal-deep hover:text-teal-deep hover:shadow-[0_8px_20px_-10px_oklch(0.55_0.13_200/0.5)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2 focus-visible:ring-offset-bone transition-all"
              >
                {r.t}
              </Link>
            ))}
          </div>
        </div>
      </section>


      <CTAStrip />
      <Footer />
    </main>
  );
}
