import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/service-page";

export const Route = createFileRoute("/services/tooth-replacement")({
  head: () => ({
    meta: [
      { title: "Tooth Replacement Johannesburg | Crowns, Bridges & Implants | Access Care Dental" },
      { name: "description", content: "Restore missing teeth with crowns, bridges and implant referrals in Johannesburg. Natural look, full bite restoration, done at our Parktown clinic." },
      { name: "keywords", content: "tooth replacement Johannesburg, dental crowns Sandton, dental bridges Parktown, dental implants Johannesburg, missing tooth dentist" },
      { property: "og:title", content: "Tooth Replacement Johannesburg | Access Care Dental" },
      { property: "og:description", content: "Crowns, bridges and implant referrals to restore bite, speech and confidence." },
      { property: "og:url", content: "/services/tooth-replacement" },
    ],
    links: [{ rel: "canonical", href: "/services/tooth-replacement" }],
  }),
  component: () => (
    <ServicePage
      eyebrow="RESTORATIVE · REPLACEMENT"
      title="Tooth replacement"
      italic="that looks like it was always there."
      intro="A missing tooth changes how you eat, speak and smile. We restore it with the right option for your case, a crown, a bridge or a referral to a trusted implant surgeon, and we handle the full restoration end to end."
      what={[
        "Comprehensive assessment with imaging at our Parktown rooms",
        "Porcelain and zirconia crowns colour-matched to neighbouring teeth",
        "Fixed bridges for one or several adjacent missing teeth",
        "Implant planning and referral to vetted Johannesburg surgeons",
        "Final restoration, polish and bite calibration",
      ]}
      who={[
        "Patients with one or more missing teeth",
        "Anyone with old, failing crowns or bridges",
        "Patients told they need an implant and unsure where to start",
      ]}
      process={[
        { t: "Diagnose", d: "Full exam, X-rays and a written plan with costs and timelines." },
        { t: "Prepare", d: "Tooth prep, digital impressions and a temporary while your restoration is made." },
        { t: "Fit", d: "Final fit, bite check and polish, usually 2–3 visits depending on the option." },
      ]}
      related={[
        { to: "/services/extractions", t: "Extractions" },
        { to: "/services/dentures", t: "Dentures" },
        { to: "/services/professional-tooth-cleaning", t: "Professional Cleaning" },
      ]}
    />
  ),
});
