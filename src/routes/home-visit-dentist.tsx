import { createFileRoute } from "@tanstack/react-router";
import { AreaPage } from "@/components/area-page";

export const Route = createFileRoute("/home-visit-dentist")({
  head: () => ({
    meta: [
      { title: "Home Visit Dentist Johannesburg | House Calls | Access Care Dental" },
      { name: "description", content: "House-call dentist in Johannesburg. Gentle, professional dental care at your home, perfect for seniors, busy families, and patients with mobility challenges." },
      { name: "keywords", content: "home visit dentist Johannesburg, house call dentist Sandton, dentist for elderly Johannesburg, family dentist home visit Gauteng" },
      { property: "og:title", content: "Home Visit Dentist Johannesburg" },
      { property: "og:description", content: "House calls across Johannesburg, same equipment, same care, no waiting room." },
      { property: "og:url", content: "/home-visit-dentist" },
    ],
    links: [{ rel: "canonical", href: "/home-visit-dentist" }],
  }),
  component: () => (
    <AreaPage
      eyebrow="HOMES · HOUSE CALLS"
      title="A dentist in your lounge."
      italic="No drive. No waiting room."
      intro="Home visits across Johannesburg for seniors, families, anxious patients and anyone who'd simply rather skip the commute. Full clinical setup, full clinical standard, delivered to your doorstep."
      paragraphs={[
        "For many people, elderly parents, young families, patients recovering from surgery, getting to a dental clinic is the hardest part of dental care. That barrier is exactly why so much pain goes untreated until it becomes serious.",
        "A home visit means we set up a portable chair, sterilised instruments and lighting in your lounge or bedroom, and treat you exactly the way we would in a fixed practice. Cleanings, simple fillings, denture adjustments, extractions and emergency relief are all possible from home.",
        "Anything that genuinely needs imaging or surgical theatre gets booked into our Parktown rooms with a planned, low-stress visit.",
      ]}
      bullets={[
        { t: "Elderly & bed-bound care", d: "Gentle bedside treatment, denture relines and pain management." },
        { t: "Family bookings", d: "Whole family in one slot, kids, parents and grandparents." },
        { t: "Anxious patients", d: "Calm, unhurried care in your own space, at your pace." },
        { t: "Honest pricing", d: "Same treatment prices as in-clinic, plus a small suburb-based travel fee." },
      ]}
      related={[
        { to: "/mobile-dentist-johannesburg", t: "Mobile Dentist Johannesburg" },
        { to: "/services/dentures", t: "Dentures" },
        { to: "/services/professional-tooth-cleaning", t: "Tooth Cleaning" },
        { to: "/services/extractions", t: "Extractions" },
      ]}
    />
  ),
});
