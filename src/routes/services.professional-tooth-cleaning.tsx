import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/service-page";

export const Route = createFileRoute("/services/professional-tooth-cleaning")({
  head: () => ({
    meta: [
      { title: "Professional Tooth Cleaning Johannesburg | Scale & Polish | Access Care Dental" },
      { name: "description", content: "Professional tooth cleaning, scale and polish in Johannesburg. Mobile or in-clinic. Removes tartar, brightens teeth and protects your gums. Book on WhatsApp." },
      { name: "keywords", content: "tooth cleaning Johannesburg, scale and polish Johannesburg, dental hygiene Johannesburg, plaque removal Sandton, dentist cleaning Soweto" },
      { property: "og:title", content: "Professional Tooth Cleaning Johannesburg" },
      { property: "og:description", content: "Scale, polish and gum care delivered at your home, office or our Parktown clinic." },
      { property: "og:url", content: "/services/professional-tooth-cleaning" },
    ],
    links: [{ rel: "canonical", href: "/services/professional-tooth-cleaning" }],
  }),
  component: () => (
    <ServicePage
      eyebrow="HYGIENE · CLEANING"
      title="Professional tooth cleaning"
      italic="that actually changes how your mouth feels."
      intro="A proper clean isn't just polish. It's tartar removal below the gum line, stain lifting, gum assessment and a plan to keep it that way. Done at home, at the office, at school or at our Parktown rooms in Johannesburg."
      what={[
        "Full ultrasonic scale to remove hardened tartar",
        "Polish to lift surface stains from coffee, tea and tobacco",
        "Gum-line check and periodontal screening",
        "Fluoride application on request",
        "Personalised brushing and flossing coaching",
      ]}
      who={[
        "Anyone who hasn't had a clean in 6+ months",
        "Coffee, tea, red wine and smoking patients",
        "Teams booking a corporate wellness day",
        "Parents booking the whole family in one visit",
        "Seniors who can't easily travel to a clinic",
      ]}
      process={[
        { t: "Message us", d: "Send your area and preferred time on WhatsApp. We confirm within the hour." },
        { t: "We arrive", d: "Full mobile setup at your door, or you visit our Parktown rooms, your choice." },
        { t: "30–45 minutes", d: "Scale, polish, gum check and home-care plan. You leave feeling brand new." },
      ]}
      related={[
        { to: "/services/teeth-whitening", t: "Teeth Whitening" },
        { to: "/services/extractions", t: "Extractions" },
        { to: "/corporate-dental-wellness", t: "Corporate Dental Wellness" },
        { to: "/home-visit-dentist", t: "Home Visit Dentist" },
      ]}
    />
  ),
});
