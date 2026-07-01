import { createFileRoute } from "@tanstack/react-router";
import { AreaPage } from "@/components/area-page";

export const Route = createFileRoute("/school-dental-program")({
  head: () => ({
    meta: [
      { title: "School Dental Program Johannesburg | Outreach & Screenings | Access Care Dental" },
      { name: "description", content: "Dental screenings, education and treatment for schools across Johannesburg and Gauteng. Catch problems early, build lifelong habits, raise healthier learners." },
      { name: "keywords", content: "school dentist Johannesburg, school dental program Gauteng, dental outreach Soweto, learner dental screenings Johannesburg" },
      { property: "og:title", content: "School Dental Program Johannesburg" },
      { property: "og:description", content: "Screenings, education and treatment for learners, across Gauteng schools." },
      { property: "og:url", content: "/school-dental-program" },
    ],
    links: [{ rel: "canonical", href: "/school-dental-program" }],
  }),
  component: () => (
    <AreaPage
      eyebrow="SCHOOLS · OUTREACH"
      title="A dentist on campus."
      italic="Before the cavity becomes a crisis."
      intro="We partner with schools across Johannesburg and Gauteng to deliver age-appropriate screenings, classroom education and on-site treatment, catching dental issues at the stage where they're cheap and easy to fix."
      paragraphs={[
        "Untreated dental decay is one of the most common reasons children miss school in South Africa. The fix isn't another awareness poster, it's a dentist who actually shows up.",
        "Our school programme is structured around three pillars: screen every learner, teach them how to look after their mouths, and treat anything that can be treated on-site or referred urgently when it can't.",
        "We've worked with public and private schools across Soweto, Lenasia, Sandton, Randburg and the East Rand, and we tailor each programme to the school's budget, hall layout and age group.",
      ]}
      bullets={[
        { t: "Full-grade screenings", d: "Quick, gentle assessments with parent-friendly written reports." },
        { t: "Classroom education", d: "Age-appropriate sessions on brushing, flossing, diet and dental anxiety." },
        { t: "On-site basic treatment", d: "Cleanings, fluoride applications and simple fillings done in a school hall." },
        { t: "Urgent referrals", d: "Severe cases referred to our Parktown rooms with discounted follow-up care." },
      ]}
      related={[
        { to: "/mobile-dentist-johannesburg", t: "Mobile Dentist Johannesburg" },
        { to: "/corporate-dental-wellness", t: "Corporate Dental Wellness" },
        { to: "/services/professional-tooth-cleaning", t: "Tooth Cleaning" },
      ]}
    />
  ),
});
