import { createFileRoute } from "@tanstack/react-router";
import { AreaPage } from "@/components/area-page";

export const Route = createFileRoute("/mobile-dentist-johannesburg")({
  head: () => ({
    meta: [
      { title: "Mobile Dentist Johannesburg | We Come to You | Access Care Dental" },
      { name: "description", content: "Looking for a mobile dentist in Johannesburg? Access Care Dental brings the full clinic to your home, school or office across Sandton, Soweto, Rosebank, Randburg and greater Johannesburg." },
      { name: "keywords", content: "mobile dentist Johannesburg, mobile dental clinic Johannesburg, dentist house call Johannesburg, mobile dentist Sandton, mobile dentist Soweto" },
      { property: "og:title", content: "Mobile Dentist Johannesburg | Access Care Dental" },
      { property: "og:description", content: "Full mobile dental clinic, home, school or office. Across greater Johannesburg." },
      { property: "og:url", content: "/mobile-dentist-johannesburg" },
    ],
    links: [{ rel: "canonical", href: "/mobile-dentist-johannesburg" }],
  }),
  component: () => (
    <AreaPage
      eyebrow="MOBILE DENTIST · JOHANNESBURG"
      title="The full clinic,"
      italic="at your front door."
      intro="Access Care Dental is a fully mobile dental practice serving greater Johannesburg, Sandton, Soweto, Rosebank, Parktown, Randburg, Roodepoort, Midrand, Lenasia and the East Rand. Same equipment, same sterilisation standard, same dentist as a fixed clinic."
      paragraphs={[
        "Most people put off dental care because of time, not pain. The drive, the parking, the waiting room, the half-day off work, it adds up. So instead of expecting you to come to us, we bring the clinic to you.",
        "Every mobile visit includes a portable dental chair, sterilised instruments straight from our autoclaves in Parktown, suction, hand-held imaging when needed, and a fully qualified dentist. You get the same clinical experience as a fixed practice, in your lounge, boardroom or staff room.",
        "If a case needs full imaging or a surgical setup, we book you in at our Parktown rooms instead. Either way, the standard never changes.",
      ]}
      bullets={[
        { t: "Same-day cleanings", d: "Scale, polish and gum check at home or work, usually within 24 hours of your message." },
        { t: "Emergency relief", d: "Toothache, broken teeth and abscesses triaged via WhatsApp and seen the same day where possible." },
        { t: "Family bookings", d: "Whole-family visits in one slot, kids, parents and grandparents, all done together." },
        { t: "Senior-friendly", d: "Wheelchair-accessible setups and gentle bedside care for elderly and bed-bound patients." },
      ]}
      related={[
        { to: "/corporate-dental-wellness", t: "Corporate Dental Wellness" },
        { to: "/home-visit-dentist", t: "Home Visit Dentist" },
        { to: "/school-dental-program", t: "School Dental Program" },
        { to: "/services", t: "All Services" },
      ]}
    />
  ),
});
