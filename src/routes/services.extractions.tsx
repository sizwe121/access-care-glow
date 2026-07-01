import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/service-page";

export const Route = createFileRoute("/services/extractions")({
  head: () => ({
    meta: [
      { title: "Tooth Extractions Johannesburg | Wisdom Teeth & Emergencies | Access Care Dental" },
      { name: "description", content: "Safe, gentle tooth extractions in Johannesburg, wisdom teeth, broken teeth and emergency removals. Mobile or at our Parktown clinic. Same-day available." },
      { name: "keywords", content: "tooth extraction Johannesburg, wisdom teeth removal Sandton, emergency dentist Johannesburg, broken tooth dentist Parktown" },
      { property: "og:title", content: "Tooth Extractions Johannesburg | Access Care Dental" },
      { property: "og:description", content: "Gentle, modern extractions including wisdom teeth and emergencies. Same-day appointments." },
      { property: "og:url", content: "/services/extractions" },
    ],
    links: [{ rel: "canonical", href: "/services/extractions" }],
  }),
  component: () => (
    <ServicePage
      eyebrow="SURGICAL · EXTRACTIONS"
      title="Extractions"
      italic="done calmly and properly."
      intro="When a tooth has to come out, the experience matters as much as the procedure. We use modern anaesthesia, atraumatic techniques and a calm chair-side manner, for everything from routine removals to impacted wisdom teeth."
      what={[
        "Pre-extraction imaging and pain assessment",
        "Local anaesthesia with conscious-sedation referral when needed",
        "Routine extractions for decayed or fractured teeth",
        "Wisdom-tooth removal, simple and surgical",
        "Bone preservation and aftercare for future implants",
      ]}
      who={[
        "Patients with severe toothache or abscess",
        "Anyone with impacted or painful wisdom teeth",
        "Trauma cases, knocked out or broken teeth",
        "Patients preparing for implants or dentures",
      ]}
      process={[
        { t: "Triage", d: "WhatsApp us a photo. We assess severity and book same-day if possible." },
        { t: "Procedure", d: "Numb, remove, suture if needed. Most extractions take under 30 minutes." },
        { t: "Recover", d: "Clear aftercare plan, follow-up call and pain management. Healing in days, not weeks." },
      ]}
      related={[
        { to: "/services/tooth-replacement", t: "Tooth Replacement" },
        { to: "/services/dentures", t: "Dentures" },
        { to: "/services/professional-tooth-cleaning", t: "Professional Cleaning" },
      ]}
    />
  ),
});
