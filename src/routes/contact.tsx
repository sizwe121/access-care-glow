import { createFileRoute } from "@tanstack/react-router";
import { Nav, Footer, PageHero, WHATSAPP, PHONE, EMAIL } from "@/components/site-chrome";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Access Care Dental | Book a Dentist in Johannesburg" },
      { name: "description", content: "Contact Access Care Dental, book a mobile or in-clinic dental appointment in Johannesburg via WhatsApp, phone or email. Same-day appointments often available." },
      { property: "og:title", content: "Contact Access Care Dental" },
      { property: "og:description", content: "Book a dentist in Johannesburg, WhatsApp, phone or email." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <main>
      <Nav />
      <PageHero
        eyebrow="CONTACT · BOOKINGS"
        title="Book a dentist."
        italic="The easy way."
        intro="The fastest way to reach us is WhatsApp, send your area, what you need, and when works, and we usually confirm within the hour. Same-day appointments are available most weekdays."
      />
      <section className="relative bg-bone py-20 md:py-28 overflow-hidden premium-section-light">
        <div className="mx-auto max-w-4xl px-6 grid md:grid-cols-3 gap-10">
          <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="group border border-ink/15 rounded-2xl p-8 hover:border-teal-deep transition">
            <div className="text-[10px] tracking-[0.3em] text-teal-deep">WHATSAPP · FASTEST</div>
            <div className="font-display text-2xl text-ink mt-4 group-hover:text-teal-deep transition">
              {PHONE}
            </div>
            <p className="text-sm text-ink/60 mt-3">Send a message, we reply within the hour, most days.</p>
          </a>
          <a href={`mailto:${EMAIL}`} className="group border border-ink/15 rounded-2xl p-8 hover:border-teal-deep transition">
            <div className="text-[10px] tracking-[0.3em] text-teal-deep">EMAIL</div>
            <div className="font-display text-2xl text-ink mt-4 break-all group-hover:text-teal-deep transition">
              {EMAIL}
            </div>
            <p className="text-sm text-ink/60 mt-3">Better for corporate, school and detailed bookings.</p>
          </a>
          <div className="border border-ink/15 rounded-2xl p-8">
            <div className="text-[10px] tracking-[0.3em] text-teal-deep">CLINIC</div>
            <div className="font-display text-2xl text-ink mt-4">Parktown</div>
            <p className="text-sm text-ink/60 mt-3">Johannesburg, Gauteng, for complex cases needing imaging or theatre.</p>
          </div>
        </div>
      </section>
      <section className="relative bg-ink text-bone py-20 overflow-hidden premium-section-dark">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="font-display text-3xl md:text-4xl">When you message us, include:</h2>
          <ul className="mt-8 space-y-3 text-bone/80 text-lg">
            <li>Your suburb in Johannesburg</li>
            <li>Whether you'd prefer a home, office or clinic visit</li>
            <li>What you need (cleaning, pain, whitening, denture, etc.)</li>
            <li>Two or three time windows that work for you</li>
          </ul>
        </div>
      </section>
      <Footer />
    </main>
  );
}
