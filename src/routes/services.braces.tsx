import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/service-page";

export const Route = createFileRoute("/services/braces")({
  head: () => ({
    meta: [
      { title: "Braces & Clear Aligners Johannesburg | Orthodontics | Access Care Dental" },
      { name: "description", content: "Traditional braces and clear-aligner orthodontics in Johannesburg. Straighter teeth, healthier bite, for teenagers and adults. Free initial assessment." },
      { name: "keywords", content: "braces Johannesburg, clear aligners Johannesburg, orthodontist Sandton, invisible braces Parktown, teeth straightening Gauteng" },
      { property: "og:title", content: "Braces & Clear Aligners Johannesburg" },
      { property: "og:description", content: "Straighter teeth, healthier bite, fixed braces or clear aligners, planned properly." },
      { property: "og:url", content: "/services/braces" },
    ],
    links: [{ rel: "canonical", href: "/services/braces" }],
  }),
  component: () => (
    <ServicePage
      eyebrow="ORTHODONTIC · ALIGNMENT"
      title="Braces & alignment"
      italic="for teens and adults."
      intro="Straight teeth aren't just cosmetic, they're easier to clean, kinder to your gums and better for your bite. We offer fixed metal and ceramic braces alongside modern clear-aligner systems, with honest timelines and honest pricing."
      what={[
        "Free initial orthodontic assessment with photos and X-rays",
        "Traditional metal braces",
        "Ceramic (tooth-coloured) braces for adults",
        "Clear-aligner systems for mild to moderate cases",
        "Regular adjustments and retainer planning",
      ]}
      who={[
        "Teenagers ready for first-time orthodontics",
        "Adults with mild crowding or relapse after old braces",
        "Patients with bite issues affecting jaw or chewing",
      ]}
      process={[
        { t: "Plan", d: "Full assessment with imaging, treatment options and a clear cost breakdown." },
        { t: "Fit", d: "Braces bonded or first aligners delivered, with full home-care guidance." },
        { t: "Adjust", d: "Regular short visits to track progress. Retainers when treatment is complete." },
      ]}
      related={[
        { to: "/services/teeth-whitening", t: "Teeth Whitening" },
        { to: "/services/professional-tooth-cleaning", t: "Professional Cleaning" },
        { to: "/services/tooth-replacement", t: "Tooth Replacement" },
      ]}
    />
  ),
});
