export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  keywords: string;
  date: string;
  readMins: number;
  category: string;
  relatedTo: { to: string; label: string }[];
  body: { h?: string; p?: string; list?: string[] }[];
}

export const POSTS: BlogPost[] = [
  {
    slug: "mobile-dentist-johannesburg-guide",
    title: "Mobile Dentist Johannesburg: A Practical Guide for Busy Families",
    description:
      "What a mobile dentist in Johannesburg actually does, how much time it saves, and how to book a home visit across Sandton, Soweto and Parktown.",
    keywords:
      "mobile dentist Johannesburg, home visit dentist Johannesburg, mobile dental clinic Sandton",
    date: "2026-05-12",
    readMins: 6,
    category: "Mobile Care",
    relatedTo: [
      { to: "/mobile-dentist-johannesburg", label: "Mobile Dentist Johannesburg" },
      { to: "/home-visit-dentist", label: "Home Visit Dentist" },
    ],
    body: [
      { p: "Most Johannesburg families don't skip the dentist because they don't care. They skip it because of the drive, the parking, the waiting room, and the half-day off work. A mobile dentist removes all of that, the clinic comes to your front door." },
      { h: "What a mobile dentist actually brings" },
      { p: "Access Care Dental arrives with a portable dental chair, autoclave-sterilised instruments, suction and hand-held imaging. The clinical experience is identical to a fixed practice in Parktown or Sandton, the only difference is the address." },
      { h: "Who benefits most" },
      { list: [
        "Working parents booking the whole family in one slot",
        "Seniors and bed-bound patients who cannot easily travel",
        "Executives who would rather use a lunch break than a half-day",
        "Schools and corporates running on-site wellness days",
      ]},
      { h: "How to book" },
      { p: "Send a WhatsApp with your suburb and preferred time. We confirm within the hour and arrive ready to work, no chair, no fuss." },
    ],
  },
  {
    slug: "teeth-cleaning-parktown",
    title: "Teeth Cleaning in Parktown: What a Proper Scale and Polish Really Includes",
    description:
      "Looking for teeth cleaning in Parktown? Here's what a proper scale and polish covers, how long it takes, and why a 10-minute polish at home is not the same thing.",
    keywords:
      "teeth cleaning Parktown, scale and polish Johannesburg, dental hygienist Parktown",
    date: "2026-05-20",
    readMins: 5,
    category: "Hygiene",
    relatedTo: [
      { to: "/services/professional-tooth-cleaning", label: "Professional Tooth Cleaning" },
      { to: "/mobile-dentist-johannesburg", label: "Mobile Dentist Johannesburg" },
    ],
    body: [
      { p: "A proper teeth cleaning in Parktown is not a quick polish. It is a clinical procedure that removes hardened tartar from below the gum line, something no toothbrush, electric or otherwise, can do at home." },
      { h: "The four things a real clean includes" },
      { list: [
        "Ultrasonic scaling to remove tartar above and below the gum",
        "Stain lifting from coffee, tea, red wine and tobacco",
        "Periodontal (gum) screening to catch early gum disease",
        "A take-home plan tailored to your brushing technique",
      ]},
      { h: "How often you should book" },
      { p: "Every six months for most adults. Every three to four months if you smoke, have gum disease history, or wear braces or aligners. Book at our Parktown rooms or have us come to your home or office anywhere in Johannesburg." },
    ],
  },
  {
    slug: "teeth-whitening-sandton-safe",
    title: "Teeth Whitening in Sandton: How to Whiten Without Wrecking Your Enamel",
    description:
      "Teeth whitening in Sandton done properly: clinical-grade gel, custom trays, and the enamel-safety rules every reputable dentist follows.",
    keywords:
      "teeth whitening Sandton, professional whitening Johannesburg, enamel safe whitening",
    date: "2026-06-02",
    readMins: 5,
    category: "Cosmetic",
    relatedTo: [
      { to: "/services/teeth-whitening", label: "Teeth Whitening" },
      { to: "/services/professional-tooth-cleaning", label: "Professional Cleaning" },
    ],
    body: [
      { p: "Sandton is full of whitening offers, strips, kits, pop-up booths. Most of them do something to your teeth. Whether that something is good for them is a different question." },
      { h: "Why dentist-led whitening matters" },
      { p: "Whitening gel works by oxidising stain molecules inside the enamel. The wrong concentration or an unprotected gum line causes sensitivity, burns and uneven results. Done in a chair with isolation, the same chemistry is safe and predictable." },
      { h: "What to expect from one session" },
      { list: [
        "Shade and enamel assessment first, never skip this",
        "Gum and lip protection before any gel is applied",
        "60–90 minutes of supervised whitening",
        "A take-home tray kit to maintain results for 12+ months",
      ]},
      { p: "Want it done at home in Sandton instead? We bring the same clinical setup to you." },
    ],
  },
  {
    slug: "emergency-dentist-johannesburg",
    title: "Emergency Dentist Johannesburg: What to Do in the First Hour",
    description:
      "Toothache, broken tooth or abscess in Johannesburg? Here's exactly what to do in the first hour, and how to triage on WhatsApp before you travel.",
    keywords:
      "emergency dentist Johannesburg, toothache Johannesburg, broken tooth dentist Sandton",
    date: "2026-06-08",
    readMins: 4,
    category: "Emergency",
    relatedTo: [
      { to: "/services/extractions", label: "Extractions" },
      { to: "/mobile-dentist-johannesburg", label: "Mobile Dentist Johannesburg" },
    ],
    body: [
      { p: "Dental emergencies almost never happen at a convenient time. The first hour is the one that matters most." },
      { h: "First-hour checklist" },
      { list: [
        "Rinse gently with warm salt water, never aspirin on the gum",
        "If a tooth is knocked out, hold it by the crown and place in milk",
        "Cold compress on the cheek for swelling, 15 minutes on, 15 off",
        "WhatsApp us a clear photo of the area for triage",
      ]},
      { h: "What we do" },
      { p: "We triage by photo, call you back within minutes and book same-day where possible, at our Parktown clinic or as a mobile visit anywhere in Johannesburg." },
    ],
  },
  {
    slug: "wisdom-teeth-removal-johannesburg",
    title: "Wisdom Teeth Removal in Johannesburg: When to Wait and When to Act",
    description:
      "Wisdom teeth removal in Johannesburg explained: when impacted molars need to come out, what the procedure feels like, and recovery timelines.",
    keywords:
      "wisdom teeth removal Johannesburg, impacted wisdom teeth Sandton, oral surgery Parktown",
    date: "2026-06-15",
    readMins: 6,
    category: "Surgical",
    relatedTo: [
      { to: "/services/extractions", label: "Extractions" },
      { to: "/services/tooth-replacement", label: "Tooth Replacement" },
    ],
    body: [
      { p: "Not every wisdom tooth needs to come out. The deciding factor is angle and space, not age." },
      { h: "Remove when" },
      { list: [
        "The tooth is impacted and pressing into the molar in front",
        "There is recurring pericoronitis (gum infection around the crown)",
        "Decay has reached the tooth and it cannot be properly cleaned",
        "Orthodontic planning requires the space",
      ]},
      { h: "What recovery looks like" },
      { p: "Most patients are back to normal eating within 5–7 days. We send a written aftercare plan and follow up by call on day two." },
    ],
  },
  {
    slug: "corporate-dental-wellness-day",
    title: "How a Corporate Dental Wellness Day Works in Johannesburg",
    description:
      "Bringing a dentist to your Johannesburg office: how a corporate dental wellness day is run, what staff get on the day, and what it costs employers.",
    keywords:
      "corporate dental wellness Johannesburg, workplace dentist Sandton, office dental check-up",
    date: "2026-06-20",
    readMins: 5,
    category: "Corporate",
    relatedTo: [
      { to: "/corporate-dental-wellness", label: "Corporate Dental Wellness" },
      { to: "/services/professional-tooth-cleaning", label: "Professional Cleaning" },
    ],
    body: [
      { p: "A corporate dental wellness day is the highest-uptake wellness intervention most Johannesburg HR teams run, usually 70–90% of staff book in." },
      { h: "What we set up on the day" },
      { list: [
        "A private screening room (any quiet boardroom works)",
        "Full mobile chair, autoclaved instruments and suction",
        "15-minute screenings or 30-minute cleanings, per booking",
        "Same-day WhatsApp follow-up for treatment plans",
      ]},
      { h: "Why staff actually use it" },
      { p: "Because they don't have to take a half-day to get it. That's the whole reason it works." },
    ],
  },
  {
    slug: "dentures-johannesburg-modern",
    title: "Modern Dentures in Johannesburg: Why They Don't Look Like They Used To",
    description:
      "Dentures in Johannesburg have changed. A look at modern full and partial dentures, implant-supported options, and home fittings for seniors.",
    keywords:
      "dentures Johannesburg, false teeth Johannesburg, implant supported dentures Sandton",
    date: "2026-06-24",
    readMins: 5,
    category: "Prosthetic",
    relatedTo: [
      { to: "/services/dentures", label: "Dentures" },
      { to: "/home-visit-dentist", label: "Home Visit Dentist" },
    ],
    body: [
      { p: "If your idea of dentures is the loose, plastic-looking set your grandparent kept in a glass, you are 20 years out of date." },
      { h: "What changed" },
      { list: [
        "Digital impressions, far more accurate than putty trays",
        "Shade matching at the level of individual teeth",
        "Implant-supported options that don't move at all",
        "Same-day relines and repairs",
      ]},
      { h: "Home fittings" },
      { p: "We fit and adjust dentures at home for elderly patients across Johannesburg, including post-extraction relines so you're never without teeth." },
    ],
  },
  {
    slug: "school-dental-screening-program",
    title: "School Dental Screening in Johannesburg: What a Good Program Looks Like",
    description:
      "What a school dental screening program in Johannesburg should include, how reports are sent home, and how to run one at your school.",
    keywords:
      "school dental program Johannesburg, school dentist Sandton, dental screening Gauteng schools",
    date: "2026-06-27",
    readMins: 4,
    category: "Schools",
    relatedTo: [
      { to: "/school-dental-program", label: "School Dental Program" },
      { to: "/services/professional-tooth-cleaning", label: "Professional Cleaning" },
    ],
    body: [
      { p: "A good school dental program is not a marketing exercise. It is a 5-minute, no-pressure screening for every child whose parent signs consent." },
      { h: "What it should include" },
      { list: [
        "Visual screening by a registered dentist, not a marketer",
        "A written report sent home in the child's bag the same day",
        "No upselling, parents choose their own follow-up dentist",
        "Optional fluoride application with explicit consent",
      ]},
      { p: "Access Care Dental runs school programs across Johannesburg, Sandton, Rosebank, Parktown, Soweto and the East Rand." },
    ],
  },
  {
    slug: "best-dentist-sandton-how-to-choose",
    title: "Best Dentist in Sandton: How to Actually Choose One (Not Just Google the First Result)",
    description:
      "A working guide to choosing the best dentist in Sandton. What to look for, what to ignore, the questions to ask on the first call, and why mobile dental care is quietly taking over the northern suburbs.",
    keywords:
      "best dentist Sandton, dentist Sandton, private dentist Sandton, mobile dentist Sandton, family dentist Sandton, cosmetic dentist Sandton",
    date: "2026-06-29",
    readMins: 9,
    category: "Guides",
    relatedTo: [
      { to: "/mobile-dentist-johannesburg", label: "Mobile Dentist Johannesburg" },
      { to: "/services", label: "All Services" },
      { to: "/services/professional-tooth-cleaning", label: "Professional Cleaning" },
    ],
    body: [
      { p: "If you type 'best dentist Sandton' into Google, you get a wall of ads, an aggregator directory that sold the top slot, and a map pack of three practices whose only qualification for being at the top is that they optimised their Google Business Profile. None of that tells you whether the dentist is any good." },
      { p: "Sandton has more dental practices per square kilometre than almost any suburb in Johannesburg. That's good news, it means you have options, and bad news, it means the marketing budget can quietly outrun the clinical quality. Here is how to separate the two." },
      { h: "1. Registration and clinical credentials, not marketing awards" },
      { p: "Every dentist practising in South Africa must be registered with the Health Professions Council of South Africa (HPCSA). This is non-negotiable. You can search the HPCSA public register in under a minute. If a practice does not list the practitioner's full name and HPCSA number on their website, that is a real signal, not a small one." },
      { p: "'Award-winning practice', 'voted best in Sandton', and similar phrases usually mean the practice paid to enter a directory that hands out awards to everyone who pays. They are not clinical credentials." },
      { h: "2. Sterilisation protocol, ask before you book" },
      { p: "A proper sterilisation protocol is autoclave sterilisation of every instrument, single-use for anything that cannot be autoclaved, and a written infection-control policy. Any reception that cannot answer 'what is your sterilisation protocol' in one sentence is a practice you don't want to sit in." },
      { h: "3. Transparent pricing before treatment" },
      { p: "You should get a written quotation before any non-emergency work begins. If the practice cannot give you a quote until 'after the consultation', ask for one after the consultation but before the treatment. A dentist who refuses to put numbers on paper is a dentist who wants the freedom to add items later." },
      { h: "4. Medical aid handling" },
      { list: [
        "They should tell you upfront which medical aids they claim on behalf of the patient",
        "They should be able to give you the procedure code before you agree to treatment",
        "They should never say 'your medical aid will cover it, don't worry', that is your money on the line, not theirs",
      ]},
      { h: "5. The chair-side test" },
      { p: "The first consultation tells you everything. A good dentist explains what they see, shows you on a screen or in a mirror, and gives you options with trade-offs. A bad dentist tells you what needs to happen and hands you a quote. If you feel rushed, that is your answer." },
      { h: "6. Why mobile is quietly winning the northern suburbs" },
      { p: "Sandton traffic between 15h30 and 18h30 is a genuine tax on your time. A mobile dentist visits your home, office or gym for the same clinical standard, no drive, no parking, no waiting room. Access Care Dental runs the mobile route across Sandton, Morningside, Bryanston, Rivonia, Sunninghill and Woodmead daily, our Parktown rooms handle anything that needs a fixed setup." },
      { h: "The five questions to ask on the first call" },
      { list: [
        "What is the practitioner's HPCSA number?",
        "What is your sterilisation protocol?",
        "Do you provide written quotations before treatment?",
        "Which medical aids do you claim on behalf of the patient?",
        "Do you offer home or office visits?",
      ]},
      { p: "If a practice answers all five clearly, you have found a good one. If they push back on any of them, keep looking. There is no shortage of dentists in Sandton, there is a shortage of good ones who make it easy." },
    ],
  },
  {
    slug: "cost-of-dental-care-johannesburg-2026",
    title: "The Real Cost of Dental Care in Johannesburg (2026 Prices, No Nonsense)",
    description:
      "Real 2026 price ranges for dental cleanings, whitening, fillings, extractions, root canals, dentures and implants in Johannesburg. What medical aid pays, what it doesn't, and how to avoid the classic pricing traps.",
    keywords:
      "cost of dental care Johannesburg, dentist prices Johannesburg, teeth cleaning price Johannesburg, dental filling cost, root canal cost Johannesburg, dental implant cost South Africa",
    date: "2026-06-30",
    readMins: 10,
    category: "Pricing",
    relatedTo: [
      { to: "/services", label: "All Services" },
      { to: "/services/professional-tooth-cleaning", label: "Professional Cleaning" },
      { to: "/services/tooth-replacement", label: "Tooth Replacement" },
    ],
    body: [
      { p: "Dental pricing in South Africa is a black box because the industry benefits from it being one. The BHF (Board of Healthcare Funders) publishes reference tariffs, most private dentists charge above them, and medical aids reimburse below them. The gap is what you pay." },
      { p: "Here is what real 2026 private dental care actually costs in Johannesburg, roughly, so you walk in knowing what a fair quote looks like." },
      { h: "Consultation and X-rays" },
      { list: [
        "First consultation with a dentist, R450 to R950",
        "Bitewing X-rays (per set), R280 to R550",
        "Full mouth panoramic X-ray, R650 to R1 100",
      ]},
      { h: "Cleaning and preventive" },
      { list: [
        "Scale and polish (adult), R650 to R1 200",
        "Deep clean (per quadrant, for gum disease), R900 to R1 800",
        "Fluoride application, R180 to R350",
      ]},
      { h: "Fillings" },
      { list: [
        "Composite (white) filling, one surface, R650 to R1 250",
        "Composite filling, two to three surfaces, R950 to R2 100",
        "Amalgam (silver) filling, cheaper but rarely offered now",
      ]},
      { h: "Root canal treatment" },
      { list: [
        "Front tooth, single canal, R2 800 to R4 500",
        "Premolar, R3 500 to R6 000",
        "Molar (three or four canals), R5 500 to R9 500",
        "Crown on top of the root canal, R6 500 to R12 000",
      ]},
      { h: "Extractions" },
      { list: [
        "Simple extraction, R750 to R1 500",
        "Surgical extraction (impacted tooth), R2 500 to R5 500",
        "Wisdom tooth removal, R2 500 to R7 000 per tooth",
      ]},
      { h: "Cosmetic" },
      { list: [
        "In-chair professional whitening, R2 800 to R5 500",
        "Take-home whitening trays with gel, R1 800 to R3 500",
        "Composite veneer (per tooth), R2 500 to R4 500",
        "Porcelain veneer (per tooth), R7 500 to R15 000",
      ]},
      { h: "Replacement" },
      { list: [
        "Partial denture (acrylic), R4 500 to R11 000",
        "Full denture (per arch), R8 000 to R18 000",
        "Single dental implant with crown, R22 000 to R45 000",
        "Implant-supported full arch (per arch), R95 000 to R220 000",
      ]},
      { h: "The five pricing traps to avoid" },
      { list: [
        "Free consultations that quote three times the market rate for everything after",
        "Package pricing that hides the individual line items",
        "'Medical aid will cover it' with no procedure code to check",
        "Being charged for X-rays that were not clinically necessary",
        "Whitening quotes that exclude the shade assessment and gum protection",
      ]},
      { h: "What Access Care Dental does" },
      { p: "We publish written quotes before treatment, we give you the BHF procedure code so you can check with your medical aid before you commit, and we don't upsell. If we say you don't need a filling, you don't need a filling. That is the whole point of the practice." },
      { p: "House calls in Johannesburg are priced with a small travel component depending on your suburb, the clinical work itself is charged at the same rate as our Parktown rooms." },
    ],
  },
  {
    slug: "medical-aid-dental-benefits-south-africa",
    title: "Medical Aid Dental Benefits in South Africa: What Discovery, Momentum, Bonitas and Bestmed Actually Cover",
    description:
      "A practical breakdown of what South African medical aids actually pay for dental care in 2026, including Discovery, Momentum, Bonitas, Bestmed and GEMS. What is basic, what is specialised, and how to avoid running out of your annual limit.",
    keywords:
      "medical aid dental benefits, Discovery dental cover, Momentum dental, Bonitas dental, GEMS dental, dental medical aid South Africa",
    date: "2026-06-30",
    readMins: 8,
    category: "Medical Aid",
    relatedTo: [
      { to: "/services", label: "All Services" },
      { to: "/contact", label: "Contact Us" },
    ],
    body: [
      { p: "Every medical aid in South Africa splits dental cover into two categories: basic and specialised. The difference matters because most patients only find out what specialised means when they get the bill." },
      { h: "Basic dentistry (what most plans cover reasonably well)" },
      { list: [
        "Consultations and examinations",
        "Preventive cleanings and scale-and-polish, usually two per year",
        "Fillings, extractions and X-rays",
        "Emergency pain relief visits",
      ]},
      { p: "Most comprehensive plans cover basic dentistry from a dedicated dental benefit or from day-to-day risk. If you have hospital-only cover, basic dentistry is out of pocket." },
      { h: "Specialised dentistry (where it gets complicated)" },
      { list: [
        "Crowns, bridges and inlays",
        "Root canal treatment on molars",
        "Orthodontics (braces and aligners)",
        "Implants and implant-supported prosthetics",
        "Surgical removal of impacted wisdom teeth",
        "Dentures",
      ]},
      { p: "Specialised dentistry usually comes out of a separate limit, often with an overall annual cap and sometimes with a waiting period after joining. Some plans exclude implants entirely." },
      { h: "How to actually check before you book" },
      { list: [
        "Ask your dentist for the ICD-10 diagnosis code and the tariff (procedure) code",
        "Call your medical aid's dental line, not the general line",
        "Ask, exactly: 'Is code X covered on my plan in 2026, and how much of it will you pay?'",
        "Get the answer in writing (email or app message)",
      ]},
      { h: "The three most common medical-aid pricing surprises" },
      { list: [
        "Your dentist charges private rates. Your medical aid pays scheme rates. You pay the gap.",
        "Your annual dental limit is exhausted mid-year and you didn't know",
        "Specialised procedures need pre-authorisation and it wasn't done",
      ]},
      { h: "What we do at Access Care Dental" },
      { p: "We give you the tariff codes on the quotation, we tell you if a procedure typically needs pre-authorisation, and we don't submit a claim without your say-so. Your medical aid balance is your business, we just help you use it wisely." },
    ],
  },
  {
    slug: "kids-dentist-johannesburg-first-visit",
    title: "Kids' Dentist Johannesburg: The First Visit, Fluoride Rules, and When Braces Actually Make Sense",
    description:
      "A guide for Johannesburg parents on paediatric dentistry: when to book the first visit, what fluoride does (and does not do), the truth about baby-tooth cavities, and when to start orthodontic assessment.",
    keywords:
      "kids dentist Johannesburg, paediatric dentist Johannesburg, children's dentist Sandton, baby teeth cavities, when to take child to dentist South Africa",
    date: "2026-07-01",
    readMins: 7,
    category: "Family",
    relatedTo: [
      { to: "/services/professional-tooth-cleaning", label: "Professional Cleaning" },
      { to: "/services/braces", label: "Braces & Aligners" },
      { to: "/school-dental-program", label: "School Dental Program" },
    ],
    body: [
      { p: "The single most common question we get from Johannesburg parents is: at what age should my child see a dentist for the first time? The answer is younger than most people think." },
      { h: "The first visit: age one, or when the first tooth appears" },
      { p: "The South African Dental Association aligns with international paediatric guidance: the first dental visit should happen by the child's first birthday, or within six months of the first tooth appearing, whichever comes first." },
      { p: "The point is not treatment. The point is a five-minute visual check, a chat with the parent about brushing technique, and getting the child used to the environment before anything ever needs doing." },
      { h: "Baby teeth cavities: yes, they matter" },
      { p: "The old wisdom that 'they're going to fall out anyway' is wrong and it causes real harm. Baby teeth hold space for the adult teeth coming up behind them. An early extraction from decay leads to crowding and orthodontic work later that would not have been needed." },
      { h: "Fluoride: what it does" },
      { list: [
        "Strengthens enamel against acid attack",
        "Reduces cavity risk in children by around 25% when used correctly",
        "Is safe at the doses used in toothpaste and professional application",
      ]},
      { p: "For children under three, a smear of fluoride toothpaste the size of a grain of rice. Three to six years, a pea-sized amount. Supervise brushing until at least age seven, before that they cannot physically clean the back teeth properly." },
      { h: "When to start orthodontic assessment" },
      { p: "A first orthodontic screening at age seven is the international standard. Most children will not need anything at that age, but a small number benefit from early intervention that avoids surgery later. Braces themselves usually go on between ages 11 and 14 as the last baby teeth fall out." },
      { h: "How we handle kids at Access Care Dental" },
      { p: "Short appointments, no pressure, no scary language, and parents in the room. For school-age children we run screenings on-site at Johannesburg schools, the child sees a dentist without ever leaving the school gate." },
    ],
  },
  {
    slug: "gum-disease-johannesburg-signs-treatment",
    title: "Gum Disease in Johannesburg: The Signs You're Ignoring, and What Modern Treatment Actually Looks Like",
    description:
      "Bleeding gums, bad breath and receding gum lines are not normal. A clear guide to gingivitis, periodontitis, deep-cleaning treatment and what a Johannesburg dentist can do at each stage.",
    keywords:
      "gum disease Johannesburg, periodontitis treatment Johannesburg, bleeding gums, deep cleaning dentist Sandton, gum specialist Parktown",
    date: "2026-07-01",
    readMins: 7,
    category: "Hygiene",
    relatedTo: [
      { to: "/services/professional-tooth-cleaning", label: "Professional Cleaning" },
      { to: "/mobile-dentist-johannesburg", label: "Mobile Dentist Johannesburg" },
    ],
    body: [
      { p: "If your gums bleed when you brush, your gums are not fine. Healthy gums do not bleed. This is the single most under-reported early sign of gum disease in adults." },
      { h: "Stage one: gingivitis" },
      { p: "Reversible. Caused by plaque sitting along the gum line. Signs: red or swollen gums, bleeding when brushing or flossing, occasional bad breath. Treatment: a proper scale and polish, better home cleaning technique, done." },
      { h: "Stage two: early periodontitis" },
      { p: "The infection has moved below the gum line and started to affect the bone that holds your teeth in place. This stage is manageable but no longer fully reversible. Signs: gums that recede, teeth that look longer, persistent bad breath, occasional sensitivity." },
      { h: "Stage three: advanced periodontitis" },
      { p: "Significant bone loss. Teeth start to loosen. Without treatment, teeth are eventually lost. Reachable but the goal shifts from cure to stabilisation." },
      { h: "What modern treatment looks like" },
      { list: [
        "Full periodontal charting, we measure the depth of every pocket around every tooth",
        "Deep cleaning (scaling and root planing) under local anaesthetic, per quadrant",
        "Antimicrobial rinse or gel where indicated",
        "3 to 6 month recall schedule for the first year",
        "Referral to a periodontist for advanced cases",
      ]},
      { h: "Risk factors that make it worse" },
      { list: [
        "Smoking (single biggest modifiable risk)",
        "Diabetes, controlled or otherwise",
        "Family history of tooth loss under 60",
        "Pregnancy, hormonal changes make gums more reactive",
      ]},
      { p: "Access Care Dental screens for gum disease at every cleaning appointment, at our Parktown rooms and on every mobile visit across Johannesburg. If your gums have been bleeding for months, book a check. There is no such thing as normal bleeding gums." },
    ],
  },
  {
    slug: "invisible-aligners-vs-braces-johannesburg",
    title: "Invisible Aligners vs Braces in Johannesburg: Honest Comparison, 2026",
    description:
      "Clear aligners or traditional braces in Johannesburg? A dentist-written comparison of cost, treatment time, cases each is good for, and the mistakes people make choosing between them.",
    keywords:
      "invisible aligners Johannesburg, clear aligners vs braces, Invisalign Johannesburg, ceramic braces Sandton, teeth straightening Johannesburg",
    date: "2026-07-01",
    readMins: 8,
    category: "Cosmetic",
    relatedTo: [
      { to: "/services/braces", label: "Braces & Aligners" },
      { to: "/services/teeth-whitening", label: "Teeth Whitening" },
    ],
    body: [
      { p: "Both work. Both give you straight teeth if the treatment plan is right and you actually wear the appliance. The choice comes down to your specific case and your discipline." },
      { h: "Traditional metal braces" },
      { list: [
        "Best for complex cases: severe crowding, bite issues, rotations",
        "Cost in Johannesburg, R25 000 to R55 000 for a full course",
        "Treatment time, 18 to 30 months on average",
        "No compliance risk, you cannot take them off",
        "Visible, but modern brackets are much smaller than the ones your parents had",
      ]},
      { h: "Ceramic (tooth-coloured) braces" },
      { list: [
        "Same mechanics as metal, less visible",
        "Slightly higher cost, R35 000 to R65 000",
        "Slightly more fragile brackets",
      ]},
      { h: "Clear aligners" },
      { list: [
        "Best for mild to moderate cases",
        "Cost in Johannesburg, R40 000 to R95 000 depending on system",
        "Treatment time, 6 to 18 months",
        "Almost invisible, removable for eating and brushing",
        "Compliance is everything, 22 hours per day or the plan fails",
      ]},
      { h: "The honest trade-offs" },
      { p: "Aligners are more comfortable and better looking. They are also completely dependent on the patient wearing them. If you know you will take them out for a two-hour lunch and forget them in a napkin, braces are actually a better choice for you." },
      { p: "Braces work regardless of your discipline. They are less pretty. They take longer. They win on complex cases every time." },
      { h: "The middle option most people don't know about" },
      { p: "Short-course aligners for adult relapse cases (people who had braces as teenagers and their teeth drifted back). Often 4 to 8 months, R25 000 to R40 000. If you had braces years ago and only your front teeth have shifted, this is often the right answer." },
      { h: "What we do" },
      { p: "We assess honestly. If your case is not suitable for aligners, we tell you. If it is a border case, we tell you the risks. We do free initial orthodontic assessments including photos and digital scans at our Parktown rooms." },
    ],
  },
  {
    slug: "dental-anxiety-johannesburg",
    title: "Dental Anxiety in Johannesburg: How to Actually Get Yourself Into a Dental Chair Again",
    description:
      "Dental anxiety is real, common and under-treated. A practical guide to what to say to your dentist, what sedation options exist, and why home visits work for people who can't face a waiting room.",
    keywords:
      "dental anxiety Johannesburg, dentist for nervous patients Johannesburg, sedation dentistry Sandton, dental phobia South Africa",
    date: "2026-07-01",
    readMins: 6,
    category: "Wellbeing",
    relatedTo: [
      { to: "/home-visit-dentist", label: "Home Visit Dentist" },
      { to: "/mobile-dentist-johannesburg", label: "Mobile Dentist Johannesburg" },
      { to: "/contact", label: "Contact Us" },
    ],
    body: [
      { p: "Roughly one in three adults has some level of dental anxiety. Roughly one in ten avoids the dentist entirely because of it. If that is you, you are not weak, not dramatic, and not alone." },
      { h: "Where the fear usually comes from" },
      { list: [
        "A bad childhood experience, often before age 10",
        "Loss of control, being reclined with hands in your mouth",
        "The sound of the drill",
        "Fear of judgement about the state of your teeth",
      ]},
      { p: "The last one is the most common reason people avoid coming back after years away, they think the dentist will scold them. No good dentist will. We have all seen worse than yours." },
      { h: "What to say on the first call" },
      { p: "'I have dental anxiety and I have not been to a dentist in X years. I want to book a consultation only, no treatment on the first visit.' Any decent practice will honour that. If they push back, wrong practice." },
      { h: "Sedation options in South Africa" },
      { list: [
        "Oral sedation, a tablet taken before the appointment, you stay awake but relaxed",
        "Nitrous oxide (laughing gas), mild, wears off in minutes, needs a dentist trained in its use",
        "IV sedation, deeper, requires an anaesthetist and a hospital-grade setup",
        "General anaesthetic, only for major surgical work",
      ]},
      { h: "Why home visits work for anxious patients" },
      { p: "Half the anxiety is the environment: the smell, the waiting room, the strangers, the drive there. Take that away and most people find they can actually get treatment done. Access Care Dental does full cleanings and non-surgical treatment at home across Johannesburg for exactly this reason. Book on WhatsApp, tell us in the first message that you're anxious, we plan the visit around that from the start." },
    ],
  },
  {
    slug: "smoking-vaping-teeth-johannesburg",
    title: "What Smoking and Vaping Actually Do to Your Teeth (a Johannesburg Dentist's View)",
    description:
      "Smoking, vaping and hookah use in Johannesburg: what they do to enamel, gums and breath, and what a dentist can and can't fix while you keep doing it.",
    keywords:
      "smoking teeth damage, vaping teeth, dentist for smokers Johannesburg, hookah teeth stains, teeth whitening for smokers Sandton",
    date: "2026-07-01",
    readMins: 6,
    category: "Wellbeing",
    relatedTo: [
      { to: "/services/teeth-whitening", label: "Teeth Whitening" },
      { to: "/services/professional-tooth-cleaning", label: "Professional Cleaning" },
    ],
    body: [
      { p: "Every dentist in Johannesburg sees a version of this: patient in their thirties, whitening consult, keeps mentioning that their teeth 'used to be whiter'. Then, at some point in the exam: 'I only smoke socially.' The teeth tell a different story." },
      { h: "What smoking does, clinically" },
      { list: [
        "Yellow to brown staining from tar, mostly on inner surfaces first",
        "Reduces blood flow to gums, which masks early gum disease so it is caught later and worse",
        "Doubles the risk of tooth loss over a lifetime",
        "Significantly raises the risk of oral cancer, this is not scaremongering, it is the data",
      ]},
      { h: "What vaping does" },
      { p: "Less staining than smoking, but the marketing that vaping is 'safe for teeth' is wrong. Nicotine still restricts blood flow to gums. The flavourings and humectants in vape liquid still change the mouth's microbiome and increase cavity risk in the front teeth in particular. And the same masking of gum disease still happens." },
      { h: "What hookah does" },
      { p: "One hookah session delivers more smoke exposure than a packet of cigarettes. The staining is heavy and fast. The gum inflammation is significant. Cutting back on hookah, even without stopping cigarettes, produces visible dental results in months." },
      { h: "What we can and can't fix" },
      { list: [
        "Fix: surface staining with a professional clean and polish",
        "Fix: deeper staining with professional whitening (works, but stains come back faster if you keep smoking)",
        "Manage: gum disease, ongoing, we can stabilise but not fully reverse advanced cases",
        "Not fix: the increased oral cancer risk, only quitting does that",
      ]},
      { p: "We do not lecture patients at Access Care Dental. We tell you what we see, what we can do about it, and what will happen if we do not. What you decide from there is your business." },
    ],
  },
  {
    slug: "same-day-crowns-johannesburg",
    title: "Same-Day Crowns in Johannesburg: What They Are, and When to Choose Them Over the Traditional Route",
    description:
      "Same-day dental crowns in Johannesburg using digital scanning and in-clinic milling. How they work, what they cost, and the cases where the traditional two-visit route is still the better choice.",
    keywords:
      "same day crowns Johannesburg, CEREC crowns Sandton, digital dentistry Johannesburg, one visit crown, dental crown cost Johannesburg",
    date: "2026-07-01",
    readMins: 6,
    category: "Restorative",
    relatedTo: [
      { to: "/services/tooth-replacement", label: "Tooth Replacement" },
      { to: "/services/extractions", label: "Extractions" },
    ],
    body: [
      { p: "A traditional dental crown takes two visits and about two weeks. The first visit, the tooth is prepared and an impression is taken, then you wear a temporary crown while a lab in another city (often Cape Town or Durban) fabricates the real one. Second visit, you come back, the temporary comes off, the real crown is bonded on." },
      { p: "Same-day crowns compress all of that into one appointment. Digital scan replaces the goopy impression. The design software builds the crown on screen. An in-clinic milling machine cuts the crown from a ceramic block while you wait. Bonded on before you leave." },
      { h: "Where same-day crowns win" },
      { list: [
        "One appointment, one anaesthetic, one afternoon of your life",
        "No temporary crown to worry about breaking",
        "Digital scan is more comfortable than putty impressions",
        "Extremely consistent fit for the majority of cases",
      ]},
      { h: "Where the traditional route still wins" },
      { list: [
        "Front-tooth cosmetic crowns where you want a ceramist to hand-layer the shade",
        "Complex bite cases where you need a diagnostic wax-up first",
        "Cases where the tooth needs to settle after a root canal before the final crown",
      ]},
      { h: "Cost in Johannesburg, 2026" },
      { list: [
        "Same-day crown: R7 500 to R14 000",
        "Traditional laboratory crown: R6 500 to R12 000",
      ]},
      { p: "The cost difference is small. The time difference is significant. For a molar you'll never see when you smile, same-day is almost always the right call. For a front tooth, take the extra week and get it hand-layered." },
    ],
  },
  {
    slug: "how-often-really-teeth-cleaning-johannesburg",
    title: "How Often Do You Really Need a Teeth Cleaning in Johannesburg?",
    description:
      "The '6-month cleaning' rule is a marketing average, not a medical rule. Here is how to actually work out how often you need a professional cleaning based on your mouth, not a template.",
    keywords:
      "how often teeth cleaning, dental cleaning frequency, teeth cleaning Johannesburg, hygienist appointment Parktown",
    date: "2026-07-01",
    readMins: 5,
    category: "Hygiene",
    relatedTo: [
      { to: "/services/professional-tooth-cleaning", label: "Professional Cleaning" },
      { to: "/mobile-dentist-johannesburg", label: "Mobile Dentist Johannesburg" },
    ],
    body: [
      { p: "The six-month cleaning schedule started as a US insurance-industry default in the 1930s. It stuck because it is easy to remember and easy for medical aids to budget for. It is not based on individual clinical need." },
      { h: "Every 3 months if…" },
      { list: [
        "You have a history of gum disease",
        "You wear braces or clear aligners",
        "You smoke or vape regularly",
        "You have diabetes or another condition that affects gum health",
        "You are pregnant",
      ]},
      { h: "Every 6 months if…" },
      { list: [
        "You are a healthy adult with no gum disease history",
        "You brush twice daily and floss reasonably regularly",
        "You have had a stable dental record for years",
      ]},
      { h: "Every 9 to 12 months if…" },
      { list: [
        "You are meticulous with home care",
        "Your dentist confirms after two consecutive clean visits that your plaque control is exceptional",
        "You have no risk factors on the list above",
      ]},
      { p: "Any dentist who recommends the same schedule for every patient without looking at their mouth is not personalising your care. Ask why, and expect a specific answer." },
      { p: "Access Care Dental sets your recall interval on your second visit based on what we actually see, not on a template. If we can honestly stretch you to nine or twelve months, we will." },
    ],
  },
];
