import { createFileRoute } from "@tanstack/react-router";
import { Nav, Footer, PageHero, CTAStrip } from "@/components/site-chrome";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Access Care Dental | Mobile Dentist Johannesburg" },
      { name: "description", content: "About Access Care Dental, a mobile dental practice in Johannesburg built on the belief that quality dentistry should come to you, not the other way around." },
      { property: "og:title", content: "About Access Care Dental" },
      { property: "og:description", content: "Why we built a mobile dental practice for Johannesburg." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <main>
      <Nav />
      <PageHero
        eyebrow="ABOUT · ACCESS CARE DENTAL"
        title="Built for the people"
        italic="dental care kept missing."
        intro="Access Care Dental is a Johannesburg-based dental practice with one stubborn idea, that good dentistry should travel to its patients, not demand they travel to it."
      />
      <section className="relative bg-bone py-20 md:py-28 overflow-hidden premium-section-light">
        <div className="mx-auto max-w-3xl px-6 space-y-6 text-ink/80 leading-relaxed text-lg">
          <p>
            We started Access Care Dental because the people who needed care the most, schoolchildren, busy parents, factory teams, elderly patients, were the people least likely to actually receive it. Not from lack of need, and not from lack of caring. Just because a traditional clinic visit is hard to fit into a real life.
          </p>
          <p>
            So we built a different kind of practice. A mobile one. A clinic with the same standards as the best fixed practices in Johannesburg, but with the ability to set up in a school hall, a corporate boardroom, a lounge in Soweto or a bedroom in Sandton, and deliver the same level of dentistry.
          </p>
          <p>
            We're proudly South African, proudly Johannesburg, and proudly serving people across Gauteng, from Parktown to Lenasia, from Midrand to the East Rand. When complex work is needed, our Parktown clinic handles it. For everything else, we come to you.
          </p>
        </div>
      </section>
      <CTAStrip />
      <Footer />
    </main>
  );
}
