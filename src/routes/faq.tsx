import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav, Footer, PageHero, CTAStrip, WHATSAPP } from "@/components/site-chrome";

const FAQS = [
  { q: "Are you really a fully mobile dentist in Johannesburg?", a: "Yes. We bring full-clinic equipment, chair, suction, sterilised instruments, portable X-ray when needed, to your home, school or office anywhere in greater Johannesburg. Complex work that needs imaging or surgical setup happens at our Parktown clinic." },
  { q: "Which areas of Johannesburg do you cover?", a: "We service all of greater Johannesburg including Sandton, Rosebank, Parktown, Randburg, Roodepoort, Soweto, Midrand, Lenasia, Fourways and the East Rand. If you're in Gauteng, ask us, we usually find a way to come." },
  { q: "Do you accept medical aid?", a: "We work with most major South African medical aids including Discovery Health, Bonitas, Momentum, Medshield and GEMS. We can submit directly or give you a detailed claim form for self-submission." },
  { q: "How is your equipment sterilised on a home or office visit?", a: "Every instrument is pre-sterilised in autoclave-grade pouches at our Parktown rooms before it leaves. We follow exactly the same infection-control protocol used in a fixed clinic, nothing improvised." },
  { q: "What does a corporate dental visit at our office include?", a: "Typically: screenings, scale and polish for each staff member, basic fillings, whitening consults and oral-health education. We can also run a dedicated wellness day with reports for your HR team." },
  { q: "Can you treat children and elderly patients at home?", a: "Absolutely, that's one of the reasons we exist. We're patient, gentle and trained for paediatric and geriatric care, including bed-bound and wheelchair-bound patients." },
  { q: "How much does a home visit cost?", a: "Treatment is priced the same as in-clinic. We add a small travel fee that depends on your suburb. Send us your area on WhatsApp and we'll quote you within the hour." },
  { q: "Do you handle dental emergencies?", a: "Yes, broken teeth, severe toothache, knocked-out teeth and abscesses. WhatsApp us a photo and we'll triage immediately. Same-day appointments are available most weekdays." },
  { q: "Do you offer teeth whitening at home?", a: "Yes. We do in-chair whitening at home or our clinic, and provide custom take-home trays. Every whitening plan starts with an enamel and shade assessment." },
  { q: "Can I get braces or clear aligners through Access Care Dental?", a: "Yes. We offer traditional metal braces, ceramic braces and clear-aligner systems. The initial assessment is free." },
  { q: "Do you do dentures and denture repairs?", a: "Yes, full and partial dentures, fittings and same-day repairs and relines. Home fittings are available across Johannesburg." },
  { q: "How do I book?", a: "WhatsApp is fastest. Send your suburb, what you need, and preferred times. We confirm within the hour during business hours." },
];

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ | Access Care Dental, Mobile Dentist Johannesburg" },
      { name: "description", content: "Frequently asked questions about Access Care Dental, mobile and clinic-based dental care in Johannesburg. Areas, pricing, medical aid, sterilisation and emergencies." },
      { property: "og:title", content: "Access Care Dental FAQ" },
      { property: "og:description", content: "Everything patients ask about our mobile and clinic dental services in Johannesburg." },
      { property: "og:url", content: "/faq" },
    ],
    links: [{ rel: "canonical", href: "/faq" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: FAQS.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
  component: FAQPage,
});

function FAQPage() {
  return (
    <main>
      <Nav />
      <PageHero
        eyebrow="FAQ · JOHANNESBURG"
        title="The questions"
        italic="we hear every week."
        intro="Everything you'd ask before booking a mobile or in-clinic dentist in Johannesburg, covered honestly. Still unsure? WhatsApp us and we'll answer in plain language."
      />
      <section className="relative bg-bone py-20 overflow-hidden premium-section-light">
        <div className="mx-auto max-w-3xl px-6 divide-y divide-ink/15 border-y border-ink/15">
          {FAQS.map((f) => (
            <details key={f.q} className="group py-6">
              <summary className="cursor-pointer list-none flex items-start justify-between gap-6">
                <span className="font-display text-xl md:text-2xl text-ink leading-snug pr-4">
                  {f.q}
                </span>
                <span className="font-display text-2xl text-teal-deep mt-1 transition-transform group-open:rotate-45 select-none">
                  +
                </span>
              </summary>
              <p className="mt-4 text-ink/75 leading-relaxed">{f.a}</p>
            </details>
          ))}
        </div>
        <p className="mx-auto max-w-3xl px-6 mt-10 text-sm text-ink/60">
          Don't see your question?{" "}
          <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="text-teal-deep underline underline-offset-4 hover:text-ink">
            Message us on WhatsApp
          </a>{" "}
          or head to our{" "}
          <Link to="/contact" className="text-teal-deep underline underline-offset-4 hover:text-ink">
            contact page
          </Link>
          .
        </p>
      </section>
      <CTAStrip />
      <Footer />
    </main>
  );
}
