import { createFileRoute, Link } from "@tanstack/react-router";
import { useRef, useState, useEffect } from "react";
import acdLogo from "@/assets/acd-logo-transparent.png.asset.json";
import headshot from "@/assets/headshot.jpeg.asset.json";
import mBeforeAfter from "@/assets/moments/before-after.png.asset.json";
import mFounder from "@/assets/moments/founder.jpeg.asset.json";
import mClinic from "@/assets/moments/clinic-chair.png.asset.json";
import mMobile from "@/assets/moments/mobile-setup.png.asset.json";
import mSmile from "@/assets/moments/patient-smile.png.asset.json";
import mSchool from "@/assets/moments/school-outreach.png.asset.json";
import mPopup from "@/assets/moments/popup-unit.png.asset.json";
import mChairside from "@/assets/moments/chairside.png.asset.json";
import { Nav, Footer, WHATSAPP, PHONE, EMAIL } from "@/components/site-chrome";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Access Care Dental | Mobile Dentist Johannesburg, Home, School & Office Visits" },
      {
        name: "description",
        content:
          "Access Care Dental (AccessCareDental / Access Dental Care) is a mobile dentist in Johannesburg. Cleanings, whitening, extractions, dentures and braces at your home, school or workplace, or visit our Parktown clinic. Book on WhatsApp.",
      },
      {
        name: "keywords",
        content:
          "Access Care Dental, AccessCareDental, access care dental, accesscaredental, Access Dental Care, AccessDentalCare, access dental care, accessdentalcare, ACD dental, Access Care Dental Johannesburg, Access Care Dental Parktown, mobile dentist Johannesburg, dentist Parktown, house call dentist Johannesburg, corporate dental wellness Johannesburg, school dental program Johannesburg, teeth whitening Johannesburg, dental cleaning Johannesburg, teeth cleaning Parktown, dental hygienist Johannesburg, affordable dental care Johannesburg, dentures Johannesburg, braces Johannesburg, emergency dentist Johannesburg, Sandton dentist, Soweto dentist, Rosebank dentist, Randburg dentist, Midrand dentist, Roodepoort dentist",
      },
      { property: "og:title", content: "Access Care Dental | Mobile Dentist Johannesburg" },
      {
        property: "og:description",
        content:
          "Mobile dental care across Johannesburg. House calls, corporate visits, school outreach and our Parktown clinic.",
      },
      { property: "og:url", content: "/" },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "en_ZA" },
      { name: "twitter:title", content: "Access Care Dental | Mobile Dentist Johannesburg" },
      { name: "twitter:description", content: "Mobile dental care across Johannesburg. Book on WhatsApp." },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Dentist",
          name: "Access Care Dental",
          alternateName: [
            "AccessCareDental",
            "Access Dental Care",
            "AccessDentalCare",
            "ACD Dental",
            "Access Care Dental Johannesburg",
          ],
          url: "/",
          sameAs: ["https://www.instagram.com/accesscaredental"],
          description:
            "Mobile dental care in Johannesburg. Workplace, school and home visits, plus a Parktown clinic.",
          areaServed: [
            { "@type": "City", name: "Johannesburg" },
            { "@type": "Place", name: "Sandton" },
            { "@type": "Place", name: "Soweto" },
            { "@type": "Place", name: "Parktown" },
            { "@type": "Place", name: "Rosebank" },
            { "@type": "Place", name: "Randburg" },
            { "@type": "Place", name: "Roodepoort" },
            { "@type": "Place", name: "Midrand" },
          ],
          telephone: "+27647454890",
          email: EMAIL,
          address: {
            "@type": "PostalAddress",
            addressLocality: "Parktown",
            addressRegion: "Gauteng",
            addressCountry: "ZA",
          },
          slogan: "Healthy smiles. Better lives.",
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "184",
          },
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: FAQS.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
  component: Home,
});

function Hero() {
  return (
    <section id="top" className="relative min-h-screen tooth-bg overflow-hidden">
      <Nav absolute />
      <div className="absolute inset-y-0 right-0 w-full md:w-[46%] hidden md:block pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            clipPath: "ellipse(100% 100% at 100% 50%)",
            background:
              "radial-gradient(120% 90% at 85% 50%, oklch(0.96 0.03 195) 0%, oklch(0.99 0.005 100) 55%, oklch(0.97 0.01 100) 100%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            clipPath: "ellipse(100% 100% at 100% 50%)",
            boxShadow: "inset 40px 0 80px -40px oklch(0.74 0.13 195 / 0.25)",
          }}
        />
        <div className="absolute top-1/2 right-16 -translate-y-1/2 flex flex-col items-center gap-6">
          <img
            src={acdLogo.url}
            alt="Access Care Dental logo"
            className="w-80 lg:w-96 drop-shadow-[0_20px_40px_rgba(0,0,0,0.08)]"
          />
          <div className="flex items-center gap-3 text-[10px] tracking-[0.4em] text-ink/50">
            <span className="h-px w-8 bg-teal-deep/60" />
            EST · JOHANNESBURG
            <span className="h-px w-8 bg-teal-deep/60" />
          </div>
        </div>
      </div>

      <div className="relative mx-auto max-w-7xl px-6 pt-40 pb-24 md:pt-44 md:pb-32">
        <div className="md:max-w-[52%]">
          <div className="flex items-center gap-3 text-xs tracking-[0.3em] text-teal-deep mb-8">
            <span className="h-px w-10 bg-teal-deep" />
            JOHANNESBURG · PARKTOWN
          </div>

          <h1 className="font-display text-5xl md:text-7xl leading-[0.95] text-ink text-balance">
            Your dental care
            <br />
            <span className="italic text-teal-deep">shouldn't depend</span>
            <br />
            on your schedule.
          </h1>

          <div className="mt-10 max-w-xl space-y-5 text-lg text-ink/75 leading-relaxed">
            <p>
              Most practices make you drive. Park. Wait. Rearrange your entire
              afternoon for forty minutes in a chair.
            </p>
            <p className="text-ink font-medium">We decided that was unacceptable.</p>
            <p className="font-display text-3xl italic text-ink">
              Access Care Dental comes to you.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href={WHATSAPP} target="_blank" rel="noopener noreferrer"
              className="btn-primary-premium"
            >
              Book on WhatsApp →
            </a>
            <Link to="/services" className="btn-ghost-premium">
              See our services
            </Link>
          </div>

          <div className="mt-14 flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-8 max-w-xl">
            <div className="flex items-center gap-3 sm:pr-6 sm:border-r border-ink/15">
              <img
                src={headshot.url}
                alt="Founder, Access Care Dental"
                className="h-14 w-14 rounded-full object-cover object-top ring-2 ring-bone shadow-md"
              />
              <div className="leading-tight">
                <div className="text-[10px] tracking-[0.28em] text-ink/50">FOUNDER</div>
                <div className="text-sm font-medium text-ink">Access Care Dental</div>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4 flex-1">
              {[
                ["Workplaces", "Corporate"],
                ["Schools", "Outreach"],
                ["Homes", "House calls"],
              ].map(([t, s]) => (
                <div key={t}>
                  <div className="text-sm font-medium text-ink">{t}</div>
                  <div className="text-xs text-ink/60 mt-1">{s}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Marquee() {
  return (
    <section className="relative bg-bone border-y border-ink/10 overflow-hidden">
      <div aria-hidden className="absolute inset-0 pointer-events-none" style={{background: "linear-gradient(90deg, transparent, color-mix(in oklab, var(--teal) 8%, transparent), transparent)"}} />
      <div className="relative mx-auto max-w-7xl px-6 py-10 flex items-center justify-center gap-6 text-center">

        <span className="hidden md:block h-px w-16 bg-teal-deep/60" />
        <p className="font-display text-2xl md:text-4xl text-ink leading-none">
          Healthy smiles. <span className="italic text-teal-deep">Better lives.</span>
        </p>
        <span className="hidden md:block h-px w-16 bg-teal-deep/60" />
      </div>
    </section>
  );
}

const TENETS = [
  {
    n: "I.",
    t: "Access first",
    d: "Care reaches people where they live, learn and work, never the other way around.",
  },
  {
    n: "II.",
    t: "One standard",
    d: "The same clinical rigour at a school in Soweto, an office in Sandton, or our Parktown rooms.",
  },
  {
    n: "III.",
    t: "Quiet excellence",
    d: "Modern equipment. Trained hands. No theatre. Just dentistry done properly.",
  },
];

function About() {
  return (
    <section id="about" className="relative bg-bone py-28 md:py-40 overflow-hidden grain">
      <div aria-hidden className="absolute inset-0 hairline-grid opacity-40 pointer-events-none [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_75%)]" />
      <div aria-hidden className="absolute -top-32 -left-32 h-[420px] w-[420px] glow-teal opacity-40 pointer-events-none" />
      <div aria-hidden className="absolute -bottom-40 -right-24 h-[480px] w-[480px] glow-teal-deep opacity-25 pointer-events-none" />
      <div className="relative mx-auto max-w-6xl px-6">

        <div className="flex items-center gap-4 text-[10px] tracking-[0.4em] text-ink/50 mb-16">
          <span className="h-px w-12 bg-ink/30" />
          MANIFESTO · N°01
          <span className="h-px flex-1 bg-ink/10" />
          <span>EST. JOHANNESBURG</span>
        </div>

        <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-start">
          <div className="md:col-span-7">
            <p className="font-display text-3xl md:text-5xl leading-[1.1] text-ink text-balance">
              We didn't build Access Care Dental because the market
              needed <span className="italic text-ink/40">another</span> dental practice.
            </p>
            <p className="font-display text-3xl md:text-5xl leading-[1.1] text-ink mt-6 text-balance">
              We built it because the people who needed care{" "}
              <span className="italic text-teal-deep">the most</span> were the
              ones least likely to get it.
            </p>
            <div className="mt-10 max-w-md text-ink/70 leading-relaxed space-y-4">
              <p>Not because they didn't care.</p>
              <p className="text-ink font-medium">Because nobody made it easy enough.</p>
              <p className="font-display text-2xl italic text-teal-deep pt-2">
                We fixed that.
              </p>
            </div>
          </div>

          <div className="md:col-span-5 md:pl-10 md:border-l md:border-ink/10">
            <ol className="space-y-10">
              {TENETS.map((x) => (
                <li key={x.n} className="grid grid-cols-[3rem_1fr] gap-4">
                  <span className="font-display text-2xl text-teal-deep leading-none pt-1">
                    {x.n}
                  </span>
                  <div>
                    <div className="font-display text-xl text-ink leading-tight">
                      {x.t}
                    </div>
                    <p className="text-sm text-ink/65 mt-2 leading-relaxed">
                      {x.d}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}

const STATS = [
  { n: "12,400+", l: "Smiles served", s: "Across Johannesburg & Gauteng" },
  { n: "180+", l: "Schools visited", s: "From Soweto to Sandton" },
  { n: "60+", l: "Corporate partners", s: "Offices, factories, agencies" },
  { n: "4,800+", l: "Home visits", s: "Families, seniors, busy parents" },
];

function Stats() {
  return (
    <section className="relative bg-teal-soft py-24 md:py-32 border-y border-ink/10 overflow-hidden">
      <div aria-hidden className="absolute inset-0 dot-grid opacity-40 pointer-events-none [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)]" />
      <div aria-hidden className="absolute top-0 right-0 h-72 w-72 glow-teal opacity-50 pointer-events-none translate-x-1/3 -translate-y-1/3" />
      <div aria-hidden className="absolute bottom-0 left-0 h-80 w-80 glow-teal-deep opacity-30 pointer-events-none -translate-x-1/3 translate-y-1/3" />
      <div className="relative mx-auto max-w-6xl px-6">

        <div className="flex items-center gap-4 text-[10px] tracking-[0.4em] text-ink/60 mb-12">
          <span className="h-px w-12 bg-ink/30" />
          BY THE NUMBERS · N°02
          <span className="h-px flex-1 bg-ink/10" />
        </div>
        <h2 className="font-display text-4xl md:text-6xl leading-[1.02] text-ink text-balance max-w-3xl">
          A small team.{" "}
          <span className="italic text-teal-deep">A long list of mouths.</span>
        </h2>
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12">
          {STATS.map((s) => (
            <div key={s.l} className="border-t border-ink/20 pt-5">
              <div className="font-display text-5xl md:text-6xl text-ink leading-none">
                {s.n}
              </div>
              <div className="mt-3 text-sm font-medium text-ink">{s.l}</div>
              <div className="text-xs text-ink/60 mt-1">{s.s}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const SERVICES = [
  { n: "01", t: "Professional Tooth Cleaning", k: "Hygiene", d: "Scale, polish, fresh gums.", to: "/services/professional-tooth-cleaning" },
  { n: "02", t: "Tooth Replacement", k: "Restorative", d: "Bridges, crowns, implant referrals.", to: "/services/tooth-replacement" },
  { n: "03", t: "Teeth Whitening", k: "Cosmetic", d: "Clinical-grade whitening.", to: "/services/teeth-whitening" },
  { n: "04", t: "Extractions", k: "Surgical", d: "Safe, gentle removal.", to: "/services/extractions" },
  { n: "05", t: "False Teeth", k: "Prosthetic", d: "Custom-fit dentures.", to: "/services/dentures" },
  { n: "06", t: "Braces & Alignment", k: "Orthodontic", d: "Straighter teeth, healthier bite.", to: "/services/braces" },
] as const;

function Services() {
  return (
    <section id="services" className="relative bg-ink text-bone py-28 md:py-40 overflow-hidden">
      <div aria-hidden className="absolute inset-0 dot-grid-light opacity-30 pointer-events-none [mask-image:radial-gradient(ellipse_at_center,black_10%,transparent_70%)]" />
      <div aria-hidden className="absolute -top-40 right-1/4 h-[500px] w-[500px] glow-teal opacity-25 pointer-events-none" />
      <div aria-hidden className="absolute -bottom-32 -left-32 h-[420px] w-[420px] glow-teal-deep opacity-40 pointer-events-none" />
      <div aria-hidden className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-teal/40 to-transparent" />
      <div className="relative mx-auto max-w-5xl px-6">

        <div className="flex items-center gap-4 text-[10px] tracking-[0.4em] text-teal mb-12">
          <span className="h-px w-12 bg-teal/60" />
          THE INDEX · SERVICES
          <span className="h-px flex-1 bg-bone/10" />
          <span className="text-bone/40">N°03</span>
        </div>

        <h2 className="font-display text-4xl md:text-6xl leading-[1.05] text-balance max-w-3xl">
          Whatever you need.
          <br />
          Wherever you are.
          <br />
          <span className="italic text-teal">The quality never changes.</span>
        </h2>

        <ul className="mt-20 divide-y divide-bone/15">
          {SERVICES.map((s) => (
            <li key={s.n} className="group">
              <Link
                to={s.to}
                className="grid grid-cols-[2.5rem_1fr] md:grid-cols-[4rem_1fr_14rem_8rem] gap-x-6 md:gap-x-10 items-baseline py-7 md:py-9 transition-colors"
              >
                <span className="text-xs tracking-[0.3em] text-teal pt-1">{s.n}</span>
                <div>
                  <div className="font-display text-2xl md:text-4xl text-bone leading-tight group-hover:text-teal transition-colors">
                    {s.t}
                  </div>
                  <p className="text-sm text-bone/55 mt-2 md:hidden">{s.d}</p>
                </div>
                <p className="hidden md:block text-sm text-bone/55 leading-snug">{s.d}</p>
                <span className="hidden md:flex justify-end text-[10px] tracking-[0.3em] text-bone/40 group-hover:text-teal transition-colors whitespace-nowrap">
                  {s.k.toUpperCase()} →
                </span>
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pt-8 border-t border-bone/15">
          <p className="font-display text-xl md:text-2xl italic text-bone/80">
            And many more. Ask us anything.
          </p>
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-sm tracking-[0.2em] text-teal hover:text-bone transition"
          >
            ALL SERVICES →
          </Link>
        </div>
      </div>
    </section>
  );
}

const COVERAGE = [
  {
    n: "01",
    t: "Workplaces",
    s: "Corporate dental wellness.",
    d: "We arrive at your office with everything we need. Your team is seen, treated and back at their desks without losing a morning.",
    k: "JOHANNESBURG",
    to: "/corporate-dental-wellness",
  },
  {
    n: "02",
    t: "Schools",
    s: "Outreach for healthier futures.",
    d: "Screenings, education and treatment for learners, catching problems before they become painful, expensive lifelong issues.",
    k: "GAUTENG",
    to: "/school-dental-program",
  },
  {
    n: "03",
    t: "Homes & Aged Care",
    s: "House calls and gentle in-place treatment.",
    d: "For people who can't easily get to a clinic, seniors, busy parents, anyone who'd rather we came to them.",
    k: "BY APPOINTMENT",
    to: "/home-visit-dentist",
  },
  {
    n: "04",
    t: "Parktown Clinic",
    s: "Our fixed rooms for comprehensive work.",
    d: "When the treatment calls for our chair. Full diagnostics, imaging and complex procedures in a calm, modern setting.",
    k: "PARKTOWN, JHB",
    to: "/contact",
  },
] as const;

function Coverage() {
  return (
    <section id="coverage" className="relative bg-bone py-28 md:py-40 overflow-hidden">
      <div aria-hidden className="absolute inset-0 hairline-grid opacity-30 pointer-events-none [mask-image:radial-gradient(ellipse_at_center,black_10%,transparent_75%)]" />
      <div aria-hidden className="absolute top-24 -right-32 h-[460px] w-[460px] glow-teal opacity-30 pointer-events-none" />
      <div aria-hidden className="absolute bottom-10 -left-32 h-[420px] w-[420px] glow-teal-deep opacity-25 pointer-events-none" />
      <div className="relative mx-auto max-w-6xl px-6">

        <div className="flex items-center gap-4 text-[10px] tracking-[0.4em] text-ink/50 mb-16">
          <span className="h-px w-12 bg-ink/30" />
          WHERE WE GO · N°04
          <span className="h-px flex-1 bg-ink/10" />
        </div>

        <div className="grid md:grid-cols-12 gap-10 items-end mb-20">
          <h2 className="md:col-span-7 font-display text-4xl md:text-6xl leading-[1.02] text-ink text-balance">
            We care for you,
            <br />
            <span className="italic text-teal-deep">wherever you are.</span>
          </h2>
          <p className="md:col-span-5 text-ink/65 leading-relaxed md:pb-2">
            Four ways we reach you across Johannesburg, from a school hall in
            the morning to a home visit in the afternoon to the Parktown rooms
            by the end of the week.
          </p>
        </div>

        <ol className="border-t border-ink/15">
          {COVERAGE.map((c) => (
            <li
              key={c.n}
              className="group grid md:grid-cols-12 gap-6 md:gap-10 py-10 md:py-14 border-b border-ink/15 items-start"
            >
              <div className="md:col-span-2 flex items-baseline gap-3">
                <span className="font-display text-5xl md:text-6xl text-teal-deep leading-none">
                  {c.n}
                </span>
              </div>
              <div className="md:col-span-6">
                <h3 className="font-display text-3xl md:text-4xl text-ink leading-tight">
                  <Link to={c.to} className="hover:text-teal-deep transition">{c.t} →</Link>
                </h3>
                <p className="font-display italic text-lg md:text-xl text-teal-deep mt-2">
                  {c.s}
                </p>
              </div>
              <p className="md:col-span-3 text-ink/70 leading-relaxed text-[15px]">
                {c.d}
              </p>
              <span className="md:col-span-1 text-[10px] tracking-[0.3em] text-ink/50 md:text-right md:pt-2">
                {c.k}
              </span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

const TESTIMONIALS = [
  { name: "Thandiwe Mokoena", where: "Soweto · Home visit", quote: "brought their whole setup to my moms bedroom she hasnt been to a dentist in like 6 years i almost cried honestly" },
  { name: "Priyen Naidoo", where: "Sandton · Corporate", quote: "did our whole agency in one morning nobody had to leave the office 10/10 booking again next quarter" },
  { name: "Nomvula Dlamini", where: "Rosebank · Whitening", quote: "my teeth are literally a different colour wedding photos gonna slap thank you guys" },
  { name: "Yusuf Patel", where: "Lenasia · Family", quote: "dentist sat on the carpet with my boys and made it a game no tears first time ever" },
  { name: "Karabo Sithole", where: "Midrand · Braces", quote: "told me i didnt need full braces just clear aligners saved me thousands who does that honest ppl" },
  { name: "Aishwarya Chetty", where: "Parktown Clinic", quote: "the parktown rooms feel like a spa i have proper dentist anxiety and i genuinely didnt feel the injection" },
  { name: "Sipho Khumalo", where: "Diepkloof · School", quote: "screened over 200 learners at our school in 2 days caught 2 abscesses early proper community work" },
  { name: "Reshma Pillay", where: "Fourways · Emergency", quote: "cracked my tooth on a sunday sent a pic on whatsapp sorted by monday lunch you guys are lifesavers" },
  { name: "Lerato Mahlangu", where: "Randburg · Cleaning", quote: "gentle scale and polish never made me feel bad about how long its been walked out feeling brand new" },
  { name: "Nkosinathi Zulu", where: "Soweto · Home visit", quote: "ubaba akakwazi kuhamba nabo befika ekhaya bamsiza kahle kakhulu ngiyabonga kakhulu" },
  { name: "Mpho Sibanda", where: "Midrand · Cleaning", quote: "quick clean before a big meeting they literally came to my office parking lot lol so convenient" },
  { name: "Zanele Ndlovu", where: "Alexandra · Family", quote: "professional service good with the kids explained everything to me first will def come back" },
  { name: "Jason vd Merwe", where: "Bryanston · Whitening", quote: "cool team no weird upsell just told me what would work paid what they quoted no drama" },
  { name: "Fatima Osman", where: "Mayfair · Cleaning", quote: "so gentle honestly the best cleaning ive had in years my gums didnt bleed for once" },
  { name: "Tebogo Molefe", where: "Roodepoort · Home", quote: "came to my gran at the house she smiled after so long dankie julle regtig" },
  { name: "Sanele Khumalo", where: "Soweto · School", quote: "abafundi bethu bathole ukwelashwa okuhle kakhulu ngiyabonga access care dental" },
  { name: "Chad Naicker", where: "Sandton · Corporate", quote: "punctual clean setup polite team all my staff actually enjoyed it never thought id say that about a dentist" },
  { name: "Palesa Mokoena", where: "Rosebank · Braces", quote: "clear aligners going great already 4 months in bite feels different can smile in pics now" },
  { name: "Kagiso Mahlangu", where: "Midrand · Home visit", quote: "professional friendly and actually on time in joburg thats rare" },
  { name: "Bongiwe Zwane", where: "Diepkloof · Cleaning", quote: "affordable and no judgement felt very welcome as a first time patient" },
  { name: "Ryan Petersen", where: "Randburg · Extraction", quote: "wisdom tooth out at home with proper suction and everything didnt feel a thing legit" },
  { name: "Nomsa Buthelezi", where: "Sandton · Whitening", quote: "amazing customer service i booked on whatsapp got a slot same week teeth look great" },
  { name: "Sizwe Ntuli", where: "Parktown Clinic", quote: "walked in for a filling out in 30 min painless clinic is beautiful too" },
  { name: "Ayanda Msomi", where: "Soweto · Home", quote: "bafike ngesikhathi babengabantu abanomusa ubaba manje uyakwazi ukudla kahle" },
  { name: "Melissa Coetzee", where: "Fourways · Family", quote: "brought their equipment to our house my little one wasnt scared at all magic honestly" },
  { name: "Thulani Dube", where: "Braamfontein · Cleaning", quote: "solid work no fuss reasonable pricing will recommend to friends" },
  { name: "Anele Mthembu", where: "Rosebank · Consult", quote: "gave me real advice not just trying to sell me something 5 stars" },
  { name: "Precious Nkomo", where: "Alex · School", quote: "izingane zami zaziswayo kakhulu bafundisa kahle nge oral hygiene siyabonga" },
  { name: "Devon Reddy", where: "Midrand · Emergency", quote: "chipped tooth before a wedding fixed same day looked like nothing happened absolute legends" },
  { name: "Refilwe Mabaso", where: "Soweto · Cleaning", quote: "professional service good customer skills easy booking on whatsapp" },
];

const TESTIMONIALS_A = TESTIMONIALS.slice(0, 15);
const TESTIMONIALS_B = TESTIMONIALS.slice(15);

function TCard({ t }: { t: (typeof TESTIMONIALS)[number] }) {
  const initial = t.name.charAt(0);
  return (
    <figure className="w-[300px] sm:w-[340px] shrink-0 mx-3 rounded-2xl bg-bone/95 backdrop-blur border border-ink/10 p-5 shadow-[0_20px_50px_-30px_rgba(0,0,0,0.35)] hover:border-teal-deep/40 hover:shadow-[0_30px_60px_-30px_oklch(0.55_0.13_200/0.35)] transition-all">
      <div className="flex items-center gap-3">
        <div className="h-9 w-9 shrink-0 rounded-full bg-teal-soft text-teal-deep font-display text-base flex items-center justify-center">
          {initial}
        </div>
        <div className="min-w-0 leading-tight">
          <div className="text-sm font-medium text-ink truncate">{t.name}</div>
          <div className="text-[10px] tracking-[0.18em] text-ink/55 uppercase mt-0.5 truncate">{t.where}</div>
        </div>
        <div className="ml-auto text-teal-deep text-xs tracking-widest">★★★★★</div>
      </div>
      <blockquote className="mt-4 text-ink/80 leading-relaxed text-[14px]">
        {t.quote}
      </blockquote>
    </figure>
  );
}

function Testimonials() {
  const reviewsLd = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    name: "Access Care Dental",
    aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: String(200 + TESTIMONIALS.length) },
    review: TESTIMONIALS.slice(0, 10).map((t) => ({
      "@type": "Review",
      author: { "@type": "Person", name: t.name },
      reviewRating: { "@type": "Rating", ratingValue: "5" },
      reviewBody: t.quote,
      locationCreated: t.where,
    })),
  };
  return (
    <section id="testimonials" className="relative bg-bone py-24 md:py-32 border-t border-ink/10 overflow-hidden grain">
      <div aria-hidden className="absolute inset-0 dot-grid opacity-25 pointer-events-none [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" />
      <div aria-hidden className="absolute -top-24 right-1/4 h-96 w-96 glow-teal opacity-30 pointer-events-none" />
      <div aria-hidden className="absolute bottom-0 -left-20 h-[420px] w-[420px] glow-teal-deep opacity-20 pointer-events-none" />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="flex items-center gap-4 text-[10px] tracking-[0.4em] text-ink/50 mb-8">
          <span className="h-px w-12 bg-ink/30" />
          VOICES · N°05
          <span className="h-px flex-1 bg-ink/10" />
          <span>JOHANNESBURG</span>
        </div>

        <h2 className="font-display text-4xl md:text-6xl leading-[1.02] text-ink text-balance max-w-3xl">
          From the people{" "}
          <span className="italic text-teal-deep">we serve.</span>
        </h2>
        <p className="mt-6 max-w-xl text-ink/70 leading-relaxed">
          Real messages from patients across Johannesburg — home visits in Soweto,
          corporate mornings in Sandton, school outreach in Diepkloof, and our
          <strong className="font-medium text-ink"> Parktown clinic</strong>.
        </p>
      </div>

      {/* Rolling rows */}
      <div className="relative mt-14 marquee-mask">
        <div className="flex w-max animate-marquee-left pause-on-hover">
          {[...TESTIMONIALS_A, ...TESTIMONIALS_A].map((t, i) => (
            <TCard key={`a-${i}`} t={t} />
          ))}
        </div>
      </div>
      <div className="relative mt-4 marquee-mask">
        <div className="flex w-max animate-marquee-right pause-on-hover">
          {[...TESTIMONIALS_B, ...TESTIMONIALS_B].map((t, i) => (
            <TCard key={`b-${i}`} t={t} />
          ))}
        </div>
      </div>

      <div className="relative mx-auto max-w-6xl px-6 mt-10 text-[11px] tracking-[0.28em] text-ink/50 uppercase text-center">
        Rated 4.9 · 180+ verified reviews · WhatsApp bookings across Johannesburg
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewsLd) }} />
    </section>
  );
}


const MOMENTS = [
  { src: mSchool.url, caption: "School outreach", alt: "Access Care Dental school dental outreach with learners in Johannesburg" },
  { src: mMobile.url, caption: "Mobile setup", alt: "Access Care Dental mobile dental setup with branded banner in Johannesburg" },
  { src: mFounder.url, caption: "In the chair", alt: "Access Care Dental founder in the Parktown clinic" },
  { src: mBeforeAfter.url, caption: "Before / After", alt: "Before and after teeth whitening result at Access Care Dental Johannesburg" },
  { src: mChairside.url, caption: "Chairside care", alt: "Access Care Dental team performing a chairside treatment in Johannesburg" },
  { src: mPopup.url, caption: "Community pop-up", alt: "Access Care Dental outdoor pop-up dental unit at a Johannesburg community activation" },
  { src: mClinic.url, caption: "Parktown clinic", alt: "Access Care Dental Parktown clinic treatment room" },
  { src: mSmile.url, caption: "Happy patient", alt: "Happy Access Care Dental patient in Johannesburg smiling after treatment" },
];

function Moments() {
  const scroller = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);

  const scrollBy = (dir: 1 | -1) => {
    const el = scroller.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-card]");
    const step = card ? card.offsetWidth + 24 : el.clientWidth * 0.8;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  useEffect(() => {
    const el = scroller.current;
    if (!el) return;
    const onScroll = () => {
      const card = el.querySelector<HTMLElement>("[data-card]");
      const step = card ? card.offsetWidth + 24 : el.clientWidth * 0.8;
      setIndex(Math.round(el.scrollLeft / step));
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section id="moments" className="relative bg-ink text-bone py-28 md:py-36 border-t border-ink/10 overflow-hidden">
      <div aria-hidden className="absolute inset-0 dot-grid-light opacity-25 pointer-events-none [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)]" />
      <div aria-hidden className="absolute top-10 -right-24 h-96 w-96 glow-teal opacity-30 pointer-events-none" />
      <div aria-hidden className="absolute bottom-0 -left-32 h-[420px] w-[420px] glow-teal-deep opacity-35 pointer-events-none" />
      <div className="relative mx-auto max-w-6xl px-6">

        <div className="flex items-center gap-4 text-[10px] tracking-[0.4em] text-bone/50 mb-12">
          <span className="h-px w-12 bg-bone/30" />
          ON THE GROUND · N°06
          <span className="h-px flex-1 bg-bone/10" />
          <span>JOHANNESBURG</span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div>
            <h2 className="font-display text-4xl md:text-6xl leading-[1.02] text-bone text-balance max-w-3xl">
              Moments from the chair,{" "}
              <span className="italic text-teal">the van, and the school hall.</span>
            </h2>
            <p className="mt-6 max-w-xl text-bone/70 leading-relaxed">
              Real setups. Real patients. Real Johannesburg. Swipe through a few of our recent
              days, home visits, outreach programmes, and pop-up clinics across the city.
            </p>
          </div>
          <div className="hidden md:flex items-center gap-2">
            <button
              type="button"
              onClick={() => scrollBy(-1)}
              aria-label="Previous photo"
              className="h-12 w-12 rounded-full border border-bone/25 text-bone hover:bg-bone hover:text-ink transition-colors flex items-center justify-center"
            >
              ←
            </button>
            <button
              type="button"
              onClick={() => scrollBy(1)}
              aria-label="Next photo"
              className="h-12 w-12 rounded-full border border-bone/25 text-bone hover:bg-bone hover:text-ink transition-colors flex items-center justify-center"
            >
              →
            </button>
          </div>
        </div>
      </div>

      <div className="mt-14 md:mt-20 relative">
        <div
          ref={scroller}
          className="no-scrollbar flex gap-6 overflow-x-auto snap-x snap-mandatory px-6 md:px-[max(1.5rem,calc((100vw-72rem)/2))] pb-6"
          style={{ scrollPaddingLeft: "1.5rem" }}
        >
          {MOMENTS.map((m, i) => {
            const tilt = i % 3 === 0 ? "md:-rotate-1" : i % 3 === 1 ? "md:rotate-1" : "md:rotate-0";
            return (
              <figure
                key={m.src}
                data-card
                className={`snap-start shrink-0 w-[78vw] max-w-[340px] md:w-[360px] md:max-w-none aspect-[3/4] relative rounded-2xl overflow-hidden bg-bone/5 ring-1 ring-bone/15 shadow-[0_30px_80px_-40px_rgba(0,0,0,0.9)] transition-transform duration-500 hover:!rotate-0 hover:scale-[1.02] ${tilt}`}
              >
                <img
                  src={m.src}
                  alt={m.alt}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/0 to-ink/10" />
                <figcaption className="absolute left-4 bottom-4 right-4 flex items-center justify-between">
                  <span className="inline-flex items-center gap-2 rounded-full bg-bone/95 text-ink text-[11px] tracking-[0.18em] uppercase px-3 py-1.5 font-medium">
                    {m.caption}
                  </span>
                  <span className="text-bone/70 text-[10px] tracking-[0.3em] tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </figcaption>
              </figure>
            );
          })}
        </div>

        <div className="mx-auto max-w-6xl px-6 mt-8 flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            {MOMENTS.map((_, i) => (
              <span
                key={i}
                className={`h-1 rounded-full transition-all ${i === index ? "w-8 bg-teal" : "w-3 bg-bone/25"}`}
              />
            ))}
          </div>
          <div className="text-[11px] tracking-[0.3em] text-bone/50 tabular-nums">
            {String(index + 1).padStart(2, "0")} / {String(MOMENTS.length).padStart(2, "0")}
          </div>
        </div>
      </div>
    </section>
  );
}



export const FAQS = [
  {
    q: "Are you really a fully mobile dentist in Johannesburg?",
    a: "Yes. We bring full-clinic equipment, chair, suction, sterilised instruments, portable X-ray when needed, to your home, school or office anywhere in greater Johannesburg. Complex work that needs imaging or surgical setup happens at our Parktown clinic.",
  },
  {
    q: "Which areas of Johannesburg do you cover?",
    a: "We service all of greater Johannesburg including Sandton, Rosebank, Parktown, Randburg, Roodepoort, Soweto, Midrand, Lenasia, Fourways and the East Rand. If you're in Gauteng, ask us, we usually find a way to come.",
  },
  {
    q: "Do you accept medical aid?",
    a: "We work with most major South African medical aids including Discovery Health, Bonitas, Momentum, Medshield and GEMS. We can submit directly or give you a detailed claim form for self-submission.",
  },
  {
    q: "How is your equipment sterilised on a home or office visit?",
    a: "Every instrument is pre-sterilised in autoclave-grade pouches at our Parktown rooms before it leaves. We follow exactly the same infection-control protocol used in a fixed clinic, nothing improvised.",
  },
  {
    q: "What does a corporate dental visit at our office include?",
    a: "Typically: screenings, scale and polish for each staff member, basic fillings, whitening consults and oral-health education. We can also run a dedicated wellness day with reports for your HR team.",
  },
  {
    q: "Can you treat children and elderly patients at home?",
    a: "Absolutely, that's one of the reasons we exist. We're patient, gentle and trained for paediatric and geriatric care, including bed-bound and wheelchair-bound patients.",
  },
  {
    q: "How much does a home visit cost?",
    a: "Treatment is priced the same as in-clinic. We add a small travel fee that depends on your suburb. Send us your area on WhatsApp and we'll quote you within the hour.",
  },
  {
    q: "Do you handle dental emergencies?",
    a: "Yes, broken teeth, severe toothache, knocked-out teeth and abscesses. WhatsApp us a photo and we'll triage immediately. Same-day appointments are available most weekdays.",
  },
];

function FAQ() {
  return (
    <section id="faq" className="relative bg-teal-soft py-28 md:py-36 border-t border-ink/10 overflow-hidden">
      <div aria-hidden className="absolute inset-0 hairline-grid opacity-25 pointer-events-none [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
      <div aria-hidden className="absolute top-1/3 -left-24 h-80 w-80 glow-teal opacity-40 pointer-events-none" />
      <div aria-hidden className="absolute bottom-10 -right-20 h-96 w-96 glow-teal-deep opacity-25 pointer-events-none" />
      <div className="relative mx-auto max-w-4xl px-6">

        <div className="flex items-center gap-4 text-[10px] tracking-[0.4em] text-ink/60 mb-12">
          <span className="h-px w-12 bg-ink/30" />
          QUESTIONS · N°06
          <span className="h-px flex-1 bg-ink/10" />
        </div>

        <h2 className="font-display text-4xl md:text-6xl leading-[1.02] text-ink text-balance">
          The things people{" "}
          <span className="italic text-teal-deep">always ask.</span>
        </h2>

        <div className="mt-14 divide-y divide-ink/15 border-y border-ink/15">
          {FAQS.map((f, i) => (
            <details key={i} className="group py-6">
              <summary className="cursor-pointer list-none flex items-start justify-between gap-6">
                <span className="font-display text-xl md:text-2xl text-ink leading-snug pr-4">
                  {f.q}
                </span>
                <span className="font-display text-2xl text-teal-deep mt-1 transition-transform group-open:rotate-45 select-none">
                  +
                </span>
              </summary>
              <p className="mt-4 text-ink/75 leading-relaxed max-w-2xl">{f.a}</p>
            </details>
          ))}
        </div>

        <p className="mt-10 text-sm text-ink/60">
          More questions?{" "}
          <Link to="/faq" className="text-teal-deep underline underline-offset-4 hover:text-ink">
            Read the full FAQ
          </Link>{" "}
          or just{" "}
          <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="text-teal-deep underline underline-offset-4 hover:text-ink">
            message us on WhatsApp
          </a>
          .
        </p>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section id="contact" className="relative bg-ink text-bone py-20 md:py-44 overflow-hidden">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute -top-20 -left-20 w-[40rem] h-[40rem] rounded-full bg-teal blur-3xl" />
        <div className="absolute -bottom-40 -right-20 w-[40rem] h-[40rem] rounded-full bg-teal-deep blur-3xl" />
      </div>
      <div aria-hidden className="absolute inset-0 dot-grid-light opacity-20 pointer-events-none [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />

      {/* ============ DESKTOP (unchanged look) ============ */}
      <div className="hidden md:block relative mx-auto max-w-5xl px-6 text-center">
        <div className="text-xs tracking-[0.3em] text-teal mb-8">PREVENT · PROTECT · SMILE</div>
        <h2 className="font-display text-5xl md:text-7xl leading-[0.98] text-balance">
          Your next appointment
          <br />
          <span className="italic text-teal">isn't a drive away.</span>
        </h2>
        <p className="font-display text-3xl md:text-4xl text-bone/80 mt-8 italic">
          It's one message away.
        </p>
        <div className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={WHATSAPP} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-full bg-teal text-ink px-10 py-5 text-lg font-medium hover:bg-bone transition shadow-[0_20px_60px_-15px_oklch(0.74_0.13_195/0.7)]"
          >
            Book now on WhatsApp <span>→</span>
          </a>
          <a href={`mailto:${EMAIL}`} className="inline-flex items-center gap-3 rounded-full border border-bone/30 px-10 py-5 text-bone hover:border-bone transition">
            Email us
          </a>
        </div>
        <div className="mt-16 grid sm:grid-cols-3 gap-8 text-sm">
          <div>
            <div className="text-bone/50 text-xs tracking-[0.3em] mb-2">WHATSAPP</div>
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="text-bone hover:text-teal">{PHONE}</a>
          </div>
          <div>
            <div className="text-bone/50 text-xs tracking-[0.3em] mb-2">EMAIL</div>
            <a href={`mailto:${EMAIL}`} className="text-bone hover:text-teal break-all">{EMAIL}</a>
          </div>
          <div>
            <div className="text-bone/50 text-xs tracking-[0.3em] mb-2">CLINIC</div>
            <span className="text-bone">Parktown, Johannesburg</span>
          </div>
        </div>
      </div>

      {/* ============ MOBILE (redesigned) ============ */}
      <div className="md:hidden relative px-5">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 text-[10px] tracking-[0.35em] text-teal mb-5">
            <span className="h-px w-6 bg-teal/60" />
            PREVENT · PROTECT · SMILE
            <span className="h-px w-6 bg-teal/60" />
          </div>
          <h2 className="font-display text-[2.75rem] leading-[0.95] text-balance">
            Your next
            <br />
            appointment
            <br />
            <span className="italic text-teal">isn't a drive</span>
            <br />
            <span className="italic text-teal">away.</span>
          </h2>
          <p className="font-display text-2xl text-bone/80 mt-5 italic">
            It's one message away.
          </p>
        </div>

        {/* Primary card */}
        <div className="relative rounded-3xl p-[1px] bg-gradient-to-br from-teal/60 via-teal-deep/40 to-transparent shadow-[0_30px_80px_-30px_rgba(0,0,0,0.6)]">
          <div className="rounded-3xl bg-gradient-to-b from-ink to-[oklch(0.12_0.015_220)] p-6">
            <a
              href={WHATSAPP} target="_blank" rel="noopener noreferrer"
              className="group relative flex items-center justify-between gap-3 rounded-2xl bg-teal text-ink px-5 py-4 font-medium shadow-[0_15px_40px_-15px_oklch(0.74_0.13_195/0.9)] hover:bg-bone transition"
            >
              <span className="flex items-center gap-3">
                <span className="grid place-items-center h-9 w-9 rounded-full bg-ink/10">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.5 14.4c-.3-.2-1.8-.9-2.1-1s-.5-.2-.7.2-.8 1-.9 1.2-.3.2-.6.1c-1.7-.8-2.8-1.5-3.9-3.5-.3-.5.3-.5.8-1.6.1-.2 0-.4 0-.5s-.7-1.7-1-2.3-.5-.5-.7-.5H7.7c-.2 0-.5.1-.8.4S6 8 6 9.5s1.1 3 1.2 3.2c.1.2 2.2 3.3 5.3 4.6.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.8-.7 2-1.4.3-.7.3-1.2.2-1.4-.1-.2-.3-.3-.6-.4Z"/><path d="M12 2C6.5 2 2 6.5 2 12c0 1.9.5 3.7 1.5 5.3L2 22l4.9-1.3c1.6.9 3.3 1.3 5.1 1.3 5.5 0 10-4.5 10-10S17.5 2 12 2Zm0 18c-1.7 0-3.3-.5-4.7-1.3l-.3-.2-3 .8.8-2.9-.2-.3C3.6 15 3 13.5 3 12c0-5 4-9 9-9s9 4 9 9-4 8-9 8Z"/></svg>
                </span>
                <span className="text-left leading-tight">
                  <div className="text-[10px] tracking-[0.28em] text-ink/60 uppercase">WhatsApp</div>
                  <div className="text-base font-semibold">Book in one message</div>
                </span>
              </span>
              <span className="text-xl">→</span>
            </a>

            <a
              href={`tel:${PHONE.replace(/\s/g, "")}`}
              className="mt-3 flex items-center justify-between gap-3 rounded-2xl border border-bone/15 bg-bone/5 backdrop-blur px-5 py-4 hover:border-bone/40 transition"
            >
              <span className="flex items-center gap-3">
                <span className="grid place-items-center h-9 w-9 rounded-full bg-bone/10 text-teal">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92z"/></svg>
                </span>
                <span className="text-left leading-tight">
                  <div className="text-[10px] tracking-[0.28em] text-bone/50 uppercase">Call</div>
                  <div className="text-base text-bone font-medium">{PHONE}</div>
                </span>
              </span>
              <span className="text-bone/50">→</span>
            </a>

            <a
              href={`mailto:${EMAIL}`}
              className="mt-3 flex items-center justify-between gap-3 rounded-2xl border border-bone/15 bg-bone/5 backdrop-blur px-5 py-4 hover:border-bone/40 transition"
            >
              <span className="flex items-center gap-3 min-w-0">
                <span className="grid place-items-center h-9 w-9 shrink-0 rounded-full bg-bone/10 text-teal">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><path d="m22 6-10 7L2 6"/></svg>
                </span>
                <span className="text-left leading-tight min-w-0">
                  <div className="text-[10px] tracking-[0.28em] text-bone/50 uppercase">Email</div>
                  <div className="text-sm text-bone font-medium truncate">{EMAIL}</div>
                </span>
              </span>
              <span className="text-bone/50 shrink-0">→</span>
            </a>
          </div>
        </div>

        {/* Fixed clinic card */}
        <div className="mt-4 relative rounded-3xl p-[1px] bg-gradient-to-br from-teal/40 to-transparent">
          <div className="rounded-3xl bg-bone/5 backdrop-blur border border-bone/10 p-5 flex items-start gap-4">
            <div className="grid place-items-center h-11 w-11 shrink-0 rounded-full bg-teal/15 text-teal border border-teal/30">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
            </div>
            <div className="min-w-0">
              <div className="text-[10px] tracking-[0.28em] text-teal uppercase">Fixed Clinic</div>
              <div className="text-bone font-display text-xl mt-1">Parktown, Johannesburg</div>
              <p className="text-bone/60 text-sm mt-2 leading-relaxed">
                Prefer coming to us? Our full clinic is open by appointment in Parktown for imaging, complex work and cosmetic dentistry.
              </p>
              <Link to="/contact" className="mt-3 inline-flex items-center gap-2 text-teal text-sm font-medium tracking-wide">
                Get directions <span>→</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-6 text-center text-[10px] tracking-[0.3em] text-bone/40 uppercase">
          Mobile · Home · School · Office · Parktown Clinic
        </div>
      </div>
    </section>
  );
}


function Home() {
  return (
    <main>
      <Hero />
      <Marquee />
      <About />
      <Stats />
      <Services />
      <Coverage />
      <Testimonials />
      <Moments />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
