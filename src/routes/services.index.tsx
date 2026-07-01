import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav, Footer, PageHero, CTAStrip } from "@/components/site-chrome";

const SERVICES = [
  { to: "/services/professional-tooth-cleaning", t: "Professional Tooth Cleaning", k: "Hygiene", d: "Scale, polish and gum-line care that resets your mouth. Available at home, office or our Parktown rooms." },
  { to: "/services/teeth-whitening", t: "Teeth Whitening", k: "Cosmetic", d: "Clinical-grade whitening that protects your enamel. Visible results in a single session." },
  { to: "/services/tooth-replacement", t: "Tooth Replacement", k: "Restorative", d: "Bridges, crowns and implant referrals, restore bite, speech and confidence." },
  { to: "/services/extractions", t: "Extractions", k: "Surgical", d: "Safe, gentle removal, wisdom teeth, broken teeth and severely decayed teeth." },
  { to: "/services/dentures", t: "Dentures & False Teeth", k: "Prosthetic", d: "Custom-fit full and partial dentures, made to look and feel like your own teeth." },
  { to: "/services/braces", t: "Braces & Alignment", k: "Orthodontic", d: "Traditional and clear-aligner orthodontics, straighter teeth, healthier bite." },
] as const;

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Dental Services Johannesburg, Cleaning, Whitening, Braces & More | Access Care Dental" },
      { name: "description", content: "Full range of dental services in Johannesburg: professional cleaning, teeth whitening, tooth replacement, extractions, dentures and braces. Mobile or in-clinic at Parktown." },
      { property: "og:title", content: "Dental Services Johannesburg | Access Care Dental" },
      { property: "og:description", content: "Cleaning, whitening, extractions, dentures and braces, at your home, office, school or our Parktown clinic." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesIndex,
});

function ServicesIndex() {
  return (
    <main>
      <Nav />
      <PageHero
        eyebrow="ALL SERVICES · JOHANNESBURG"
        title="Every service."
        italic="One standard."
        intro="From a quick scale-and-polish at your office to a full set of dentures fitted at our Parktown rooms, here's everything Access Care Dental offers across Johannesburg."
      />
      <section className="relative bg-bone py-20 overflow-hidden premium-section-light">
        <div className="mx-auto max-w-5xl px-6">
          <ul className="divide-y divide-ink/15 border-y border-ink/15">
            {SERVICES.map((s) => (
              <li key={s.to}>
                <Link to={s.to} className="grid md:grid-cols-[1fr_2fr_auto] gap-6 items-baseline py-8 group">
                  <h2 className="font-display text-2xl md:text-3xl text-ink group-hover:text-teal-deep transition">
                    {s.t}
                  </h2>
                  <p className="text-ink/70 leading-relaxed">{s.d}</p>
                  <span className="text-[10px] tracking-[0.3em] text-teal-deep">{s.k.toUpperCase()} →</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <CTAStrip />
      <Footer />
    </main>
  );
}
