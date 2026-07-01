import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/service-page";

export const Route = createFileRoute("/services/dentures")({
  head: () => ({
    meta: [
      { title: "Dentures & False Teeth Johannesburg | Custom-Fit | Access Care Dental" },
      { name: "description", content: "Custom-fit full and partial dentures in Johannesburg. Comfortable, natural-looking false teeth, fitted at our Parktown clinic or your home." },
      { name: "keywords", content: "dentures Johannesburg, false teeth Johannesburg, partial dentures Sandton, full dentures Parktown, denture repair Johannesburg" },
      { property: "og:title", content: "Dentures & False Teeth Johannesburg" },
      { property: "og:description", content: "Custom dentures that look natural and fit comfortably. Home fittings available." },
      { property: "og:url", content: "/services/dentures" },
    ],
    links: [{ rel: "canonical", href: "/services/dentures" }],
  }),
  component: () => (
    <ServicePage
      eyebrow="PROSTHETIC · DENTURES"
      title="Dentures & false teeth"
      italic="that finally feel like yours."
      intro="Modern dentures are nothing like the loose, plastic-looking sets of twenty years ago. We design, fit and adjust full and partial dentures that look natural and stay where they belong, including home fittings for patients who can't travel."
      what={[
        "Full upper or lower dentures",
        "Partial dentures fitted around your remaining teeth",
        "Same-day repairs and relines",
        "Implant-supported denture referrals for maximum stability",
        "Bite calibration and aesthetic shade matching",
      ]}
      who={[
        "Patients with all or many missing teeth",
        "Anyone wearing old, loose or worn-out dentures",
        "Seniors needing home fittings and adjustments",
        "Patients preparing for or recovering from extractions",
      ]}
      process={[
        { t: "Impressions", d: "Precise digital and traditional impressions taken at our rooms or your home." },
        { t: "Trial fit", d: "We test shape, shade and bite before the final set is made." },
        { t: "Deliver & adjust", d: "Final fitting, then 1–2 adjustment visits to lock in comfort." },
      ]}
      related={[
        { to: "/services/extractions", t: "Extractions" },
        { to: "/services/tooth-replacement", t: "Tooth Replacement" },
        { to: "/home-visit-dentist", t: "Home Visit Dentist" },
      ]}
    />
  ),
});
