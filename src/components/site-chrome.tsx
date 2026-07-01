import { Link } from "@tanstack/react-router";
import { useState } from "react";
import toothMark from "@/assets/acd-tooth.png";
import mobileLogo from "@/assets/acd-logo-mobile.png.asset.json";

export const WHATSAPP =
  "https://wa.me/27647454890?text=" +
  encodeURIComponent("Hi Access Care Dental, I'd like to book an appointment.");
export const PHONE = "+27 64 745 4890";
export const EMAIL = "accesscaredental@gmail.com";
export const INSTAGRAM = "https://www.instagram.com/accesscaredental";
export const INSTAGRAM_HANDLE = "@accesscaredental";

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link to="/" className="flex items-center gap-3 group">
      {/* Desktop: tooth + wordmark */}
      <div className="hidden md:flex items-center gap-3">
        <img src={toothMark} alt="" width={36} height={36} className="h-9 w-9 object-contain" />
        <div className="leading-none">
          <div className={`font-display text-2xl tracking-[0.18em] ${light ? "text-bone" : "text-ink"}`}>
            ACD
          </div>
          <div className={`text-[10px] tracking-[0.32em] mt-0.5 ${light ? "text-bone/70" : "text-ink/60"}`}>
            ACCESS CARE DENTAL
          </div>
        </div>
      </div>
      {/* Mobile: full logo image */}
      <img
        src={mobileLogo.url}
        alt="Access Care Dental"
        className="md:hidden h-11 w-auto object-contain"
      />
    </Link>
  );
}

const NAV_LINKS = [
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/mobile-dentist-johannesburg", label: "Mobile dentist" },
  { to: "/blog", label: "Blog" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
] as const;

export function Nav({ absolute = false }: { absolute?: boolean }) {
  const [open, setOpen] = useState(false);
  return (
    <header className={`${absolute ? "absolute top-0 inset-x-0" : "relative bg-bone border-b border-ink/10"} z-40`}>
      <div className="mx-auto max-w-7xl px-6 py-6 flex items-center justify-between">
        <Logo />
        <nav className="hidden md:flex items-center gap-8 text-sm tracking-wide text-ink/80">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="hover:text-teal-deep transition"
              activeProps={{ className: "text-teal-deep font-medium" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <a
          href={WHATSAPP} target="_blank" rel="noopener noreferrer"
          className="hidden md:inline-flex items-center gap-2 rounded-full bg-ink text-bone px-5 py-2.5 text-sm font-medium border border-ink/80 shadow-[0_8px_20px_-10px_rgba(0,0,0,0.5)] hover:bg-teal-deep hover:border-teal-deep hover:shadow-[0_12px_28px_-10px_oklch(0.55_0.13_200/0.6)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2 focus-visible:ring-offset-bone transition-all"
        >
          Book on WhatsApp
        </a>
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="md:hidden inline-flex items-center justify-center h-11 w-11 rounded-full border border-ink/20 bg-bone/80 backdrop-blur text-ink hover:border-teal-deep hover:text-teal-deep focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal transition"
        >
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
            {open ? (
              <>
                <line x1="3" y1="3" x2="15" y2="15" />
                <line x1="15" y1="3" x2="3" y2="15" />
              </>
            ) : (
              <>
                <line x1="2" y1="5" x2="16" y2="5" />
                <line x1="2" y1="9" x2="16" y2="9" />
                <line x1="2" y1="13" x2="16" y2="13" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu panel */}
      <div
        className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-300 ${open ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0"}`}
      >
        <div className="mx-4 mb-4 rounded-2xl border border-ink/10 bg-bone/95 backdrop-blur-xl shadow-[0_30px_60px_-30px_rgba(0,0,0,0.35)]">
          <nav className="flex flex-col p-2">
            {NAV_LINKS.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="px-5 py-3 rounded-xl text-ink hover:bg-teal-soft hover:text-teal-deep transition text-base"
                activeProps={{ className: "bg-teal-soft text-teal-deep font-medium" }}
              >
                {l.label}
              </Link>
            ))}
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="mt-2 mx-2 mb-2 inline-flex items-center justify-center gap-2 rounded-full bg-ink text-bone px-5 py-3 text-sm font-medium hover:bg-teal-deep transition"
            >
              Book on WhatsApp →
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="bg-ink text-bone/70 border-t border-bone/10 py-14">
      <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-4 gap-10">
        <div>
          <div className="md:hidden inline-block bg-bone rounded-xl p-3">
            <img
              src={mobileLogo.url}
              alt="Access Care Dental"
              className="h-14 w-auto object-contain"
            />
          </div>
          <div className="hidden md:block">
            <Logo light />
          </div>
          <p className="text-xs tracking-[0.25em] uppercase mt-4 text-bone/50">
            Healthy Smiles · Better Lives
          </p>
        </div>
        <div>
          <div className="text-bone text-sm font-medium mb-3">Services</div>
          <ul className="space-y-2 text-sm">
            <li><Link to="/services/professional-tooth-cleaning" className="hover:text-teal">Tooth Cleaning</Link></li>
            <li><Link to="/services/teeth-whitening" className="hover:text-teal">Teeth Whitening</Link></li>
            <li><Link to="/services/tooth-replacement" className="hover:text-teal">Tooth Replacement</Link></li>
            <li><Link to="/services/extractions" className="hover:text-teal">Extractions</Link></li>
            <li><Link to="/services/dentures" className="hover:text-teal">Dentures</Link></li>
            <li><Link to="/services/braces" className="hover:text-teal">Braces</Link></li>
          </ul>
        </div>
        <div>
          <div className="text-bone text-sm font-medium mb-3">Where we go</div>
          <ul className="space-y-2 text-sm">
            <li><Link to="/mobile-dentist-johannesburg" className="hover:text-teal">Mobile Dentist Johannesburg</Link></li>
            <li><Link to="/corporate-dental-wellness" className="hover:text-teal">Corporate Dental Wellness</Link></li>
            <li><Link to="/school-dental-program" className="hover:text-teal">School Dental Program</Link></li>
            <li><Link to="/home-visit-dentist" className="hover:text-teal">Home Visit Dentist</Link></li>
          </ul>
        </div>
        <div>
          <div className="text-bone text-sm font-medium mb-3">Contact</div>
          <ul className="space-y-2 text-sm">
            <li><a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="hover:text-teal">WhatsApp: {PHONE}</a></li>
            <li><a href={`mailto:${EMAIL}`} className="hover:text-teal break-all">{EMAIL}</a></li>
            <li><a href={INSTAGRAM} target="_blank" rel="noopener noreferrer" className="hover:text-teal">Instagram: {INSTAGRAM_HANDLE}</a></li>
            <li>Parktown, Johannesburg</li>
            <li><Link to="/faq" className="hover:text-teal">FAQ</Link></li>
            <li><Link to="/about" className="hover:text-teal">About</Link></li>
          </ul>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-6 mt-10 pt-6 border-t border-bone/10 text-xs text-bone/40 flex flex-col md:flex-row flex-wrap items-start md:items-center justify-between gap-3">
        <span>© {new Date().getFullYear()} Access Care Dental (AccessCareDental / Access Dental Care) · Johannesburg, South Africa</span>
        <div className="flex items-center gap-4">
          <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer" className="hover:text-teal tracking-[0.2em] uppercase">
            Instagram {INSTAGRAM_HANDLE}
          </a>
          <span className="hidden md:inline tracking-[0.3em] uppercase">Mobile · School · Workplace · Home · Clinic</span>
        </div>
      </div>
    </footer>
  );
}

export function PageHero({
  eyebrow,
  title,
  italic,
  intro,
}: {
  eyebrow: string;
  title: string;
  italic?: string;
  intro: string;
}) {
  return (
    <section className="relative bg-bone border-b border-ink/10 overflow-hidden premium-section-light">
      <div className="mx-auto max-w-5xl px-6 pt-20 pb-20 md:pt-28 md:pb-28">
        <div className="flex items-center gap-3 text-[10px] tracking-[0.4em] text-teal-deep mb-8">
          <span className="h-px w-10 bg-teal-deep" />
          {eyebrow}
        </div>
        <h1 className="font-display text-4xl md:text-6xl leading-[1.02] text-ink text-balance">
          {title}
          {italic && (
            <>
              <br />
              <span className="italic text-teal-deep">{italic}</span>
            </>
          )}
        </h1>
        <p className="mt-8 max-w-2xl text-lg text-ink/75 leading-relaxed">{intro}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href={WHATSAPP} target="_blank" rel="noopener noreferrer"
            className="btn-primary-premium"
          >
            Book on WhatsApp →
          </a>
          <Link to="/contact" className="btn-ghost-premium">
            Contact us
          </Link>
        </div>
      </div>
    </section>
  );
}

export function ProseSection({
  children,
  dark = false,
}: {
  children: React.ReactNode;
  dark?: boolean;
}) {
  return (
    <section className={`${dark ? "bg-ink text-bone premium-section-dark" : "bg-bone text-ink premium-section-light"} relative overflow-hidden py-20 md:py-28`}>
      <div className="mx-auto max-w-3xl px-6 prose-tight space-y-6">{children}</div>
    </section>
  );
}

export function CTAStrip() {
  return (
    <section className="relative bg-ink text-bone py-24 overflow-hidden premium-section-dark border-t border-bone/10">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <div className="inline-flex items-center gap-3 text-[10px] tracking-[0.4em] text-teal mb-6">
          <span className="h-px w-10 bg-teal/60" />
          BOOK YOUR VISIT
          <span className="h-px w-10 bg-teal/60" />
        </div>
        <h2 className="font-display text-3xl md:text-5xl leading-tight">
          Ready when you are.{" "}
          <span className="italic text-teal">We come to you.</span>
        </h2>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <a
            href={WHATSAPP} target="_blank" rel="noopener noreferrer"
            className="btn-primary-premium"
          >
            Book on WhatsApp →
          </a>
          <a href={`mailto:${EMAIL}`} className="btn-ghost-premium-dark">
            Email us
          </a>
        </div>
      </div>
    </section>
  );
}
