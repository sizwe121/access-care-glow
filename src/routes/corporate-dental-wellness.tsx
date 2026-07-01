import { createFileRoute } from "@tanstack/react-router";
import { AreaPage } from "@/components/area-page";

export const Route = createFileRoute("/corporate-dental-wellness")({
  head: () => ({
    meta: [
      { title: "Corporate Dental Wellness Johannesburg | Office Visits | Access Care Dental" },
      { name: "description", content: "On-site corporate dental wellness in Johannesburg. We bring screenings, cleanings, whitening and treatment to your office, no half-days, no productivity loss." },
      { name: "keywords", content: "corporate dental wellness Johannesburg, workplace dentist Johannesburg, office dentist Sandton, employee wellness day Johannesburg" },
      { property: "og:title", content: "Corporate Dental Wellness Johannesburg" },
      { property: "og:description", content: "Full team dental wellness, delivered at your office in a single morning." },
      { property: "og:url", content: "/corporate-dental-wellness" },
    ],
    links: [{ rel: "canonical", href: "/corporate-dental-wellness" }],
  }),
  component: () => (
    <AreaPage
      eyebrow="WORKPLACES · CORPORATE WELLNESS"
      title="Dental wellness"
      italic="without losing a workday."
      intro="A team dental day at your office in Johannesburg. We arrive with the full mobile clinic, work through your staff one by one, and leave with a confidential wellness report for HR, all without anyone driving across town."
      paragraphs={[
        "Companies invest serious budget in flu shots, mental-health days and ergonomic chairs, and then ignore one of the most common reasons employees take sick leave: dental pain. We fixed that with a structured, in-office wellness programme.",
        "A typical visit covers screenings, scale-and-polish, whitening consults, basic fillings and on-the-spot oral-health education. Anything that needs follow-up gets booked into our Parktown rooms with a corporate discount.",
        "We've run dental wellness days for agencies, law firms, factories, retail head offices and tech teams across Sandton, Rosebank, Bryanston, Midrand and Johannesburg CBD.",
      ]}
      bullets={[
        { t: "One-morning rollout", d: "We can see 20+ team members in a single morning with two operators on-site." },
        { t: "Anonymous HR report", d: "Aggregate health insights for your wellness team, never individual data." },
        { t: "Quarterly check-ins", d: "Recurring quarterly visits keep your team's oral health visible and consistent." },
        { t: "Medical-aid friendly", d: "We bill major South African medical aids directly so staff aren't out of pocket." },
      ]}
      related={[
        { to: "/services/professional-tooth-cleaning", t: "Tooth Cleaning" },
        { to: "/services/teeth-whitening", t: "Teeth Whitening" },
        { to: "/mobile-dentist-johannesburg", t: "Mobile Dentist Johannesburg" },
        { to: "/contact", t: "Book a wellness day" },
      ]}
    />
  ),
});
