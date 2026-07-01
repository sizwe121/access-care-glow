import { Link } from "@tanstack/react-router";
import { Nav, Footer, PageHero, CTAStrip, WHATSAPP } from "./site-chrome";

export interface ServicePageProps {
  eyebrow: string;
  title: string;
  italic: string;
  intro: string;
  what: string[];
  who: string[];
  process: { t: string; d: string }[];
  related: { to: string; t: string }[];
}

export function ServicePage(p: ServicePageProps) {
  return (
    <main>
      <Nav />
      <PageHero eyebrow={p.eyebrow} title={p.title} italic={p.italic} intro={p.intro} />

      <section className="relative bg-bone py-20 md:py-28 border-b border-ink/10 overflow-hidden premium-section-light">
        <div className="mx-auto max-w-5xl px-6 grid md:grid-cols-2 gap-14">
          <div className="card-premium p-8">
            <h2 className="font-display text-3xl text-ink">What's included</h2>
            <ul className="mt-6 space-y-3 text-ink/75">
              {p.what.map((x) => (
                <li key={x} className="flex gap-3">
                  <span className="text-teal-deep font-display">•</span>
                  <span>{x}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="card-premium p-8">
            <h2 className="font-display text-3xl text-ink">Who it's for</h2>
            <ul className="mt-6 space-y-3 text-ink/75">
              {p.who.map((x) => (
                <li key={x} className="flex gap-3">
                  <span className="text-teal-deep font-display">•</span>
                  <span>{x}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="relative bg-ink text-bone py-20 md:py-28 overflow-hidden premium-section-dark">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="font-display text-3xl md:text-5xl">How it works</h2>
          <ol className="mt-12 grid md:grid-cols-3 gap-8">
            {p.process.map((s, i) => (
              <li key={s.t} className="border-t border-bone/20 pt-5">
                <div className="font-display text-teal text-sm tracking-[0.3em]">
                  STEP 0{i + 1}
                </div>
                <div className="font-display text-2xl mt-3">{s.t}</div>
                <p className="text-bone/70 mt-3 text-sm leading-relaxed">{s.d}</p>
              </li>
            ))}
          </ol>
          <div className="mt-14">
            <a
              href={WHATSAPP} target="_blank" rel="noopener noreferrer"
              className="btn-primary-premium"
            >
              Book on WhatsApp →
            </a>
          </div>
        </div>
      </section>

      <section className="relative bg-bone py-20 overflow-hidden premium-section-light">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="font-display text-2xl text-ink">Related services</h2>
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
