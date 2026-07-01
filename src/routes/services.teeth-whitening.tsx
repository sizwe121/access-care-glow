import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/service-page";

export const Route = createFileRoute("/services/teeth-whitening")({
  head: () => ({
    meta: [
      { title: "Teeth Whitening Johannesburg | Safe, Clinical-Grade | Access Care Dental" },
      { name: "description", content: "Professional teeth whitening in Johannesburg. Clinical-grade gel, custom trays and in-chair whitening, visible results without damaging enamel. Mobile or at our Parktown clinic." },
      { name: "keywords", content: "teeth whitening Johannesburg, whitening Sandton, professional whitening Parktown, dentist whitening Rosebank, enamel safe whitening Gauteng" },
      { property: "og:title", content: "Teeth Whitening Johannesburg | Access Care Dental" },
      { property: "og:description", content: "Clinical-grade whitening that protects your enamel, done in-clinic or at home." },
      { property: "og:url", content: "/services/teeth-whitening" },
    ],
    links: [{ rel: "canonical", href: "/services/teeth-whitening" }],
  }),
  component: () => (
    <ServicePage
      eyebrow="COSMETIC · WHITENING"
      title="Teeth whitening"
      italic="without the enamel damage."
      intro="Whitening done properly is dentist-supervised, enamel-safe and tailored to the shade of your teeth. We don't sell strips. We assess, plan, and whiten the right way, in our Parktown clinic or at your home in Johannesburg."
      what={[
        "Full shade and enamel assessment before any product touches your teeth",
        "Clinical-grade in-chair whitening with light activation",
        "Take-home custom trays for gradual top-ups",
        "Gum and sensitivity protection during treatment",
        "Aftercare plan to keep results for 12+ months",
      ]}
      who={[
        "Brides, grooms and big-event clients",
        "Coffee, wine and tea drinkers",
        "Patients who tried strips and weren't impressed",
        "Anyone with stained restorations needing a colour match",
      ]}
      process={[
        { t: "Consult", d: "We check shade, enamel and any restorations, then build the right plan." },
        { t: "Whiten", d: "60–90 minute in-chair session, or fitted trays delivered to your door." },
        { t: "Maintain", d: "Simple home-care kit and a 6-month check to lock in the result." },
      ]}
      related={[
        { to: "/services/professional-tooth-cleaning", t: "Professional Cleaning" },
        { to: "/services/braces", t: "Braces & Alignment" },
        { to: "/services/tooth-replacement", t: "Tooth Replacement" },
      ]}
    />
  ),
});
