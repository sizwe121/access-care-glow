import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Access Care Dental | Mobile Dentist Johannesburg, Parktown Clinic" },
      { name: "description", content: "Access Care Dental (AccessCareDental) is a premium mobile dentist in Johannesburg. We come to your workplace, school or home, or you can visit our Parktown clinic. Book on WhatsApp." },
      {
        name: "keywords",
        content:
          "Access Care Dental, AccessCareDental, access care dental, accesscaredental, Access Dental Care, AccessDentalCare, access dental care, accessdentalcare, ACD dental, ACD Johannesburg, Access Care Dentist, Access Care Dental Johannesburg, Access Care Dental Parktown, mobile dentist Johannesburg, mobile dental care Johannesburg, dentist Parktown, house call dentist Johannesburg, corporate dental wellness Johannesburg, school dental program Johannesburg, teeth whitening Johannesburg, teeth cleaning Parktown, dental hygienist Johannesburg, affordable dental care Johannesburg, emergency dentist Johannesburg, dentures Johannesburg, braces Johannesburg, Sandton dentist, Soweto dentist, Rosebank dentist, Randburg dentist",
      },
      { name: "author", content: "Access Care Dental" },
      { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1" },
      { name: "googlebot", content: "index, follow" },
      { name: "geo.region", content: "ZA-GT" },
      { name: "geo.placename", content: "Johannesburg" },
      { name: "geo.position", content: "-26.1815;28.0428" },
      { name: "ICBM", content: "-26.1815, 28.0428" },
      { property: "og:site_name", content: "Access Care Dental" },
      { property: "og:title", content: "Access Care Dental | Mobile Dentist Johannesburg" },
      { property: "og:description", content: "Premium mobile dental care in Johannesburg. We come to your workplace, school or home, or visit our Parktown clinic." },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "en_ZA" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Access Care Dental | Mobile Dentist Johannesburg" },
      { name: "twitter:description", content: "Mobile dental care across Johannesburg. House calls, corporate, schools, and our Parktown clinic." },
      { name: "theme-color", content: "#0a0a0a" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", type: "image/png", href: "/favicon.png" },
      { rel: "apple-touch-icon", href: "/favicon.png" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap" },
    ],
    scripts: [
      { src: "https://www.googletagmanager.com/gtag/js?id=G-VZYJE1X3WG", async: true },
      {
        children:
          "window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-VZYJE1X3WG',{send_page_view:true});",
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
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
          areaServed: "Johannesburg, South Africa",
          slogan: "Healthy smiles. Better lives.",
        }),
      },
    ],
  }),

  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  const router = useRouter();

  useEffect(() => {
    const unsub = router.subscribe("onResolved", () => {
      const w = window as unknown as { gtag?: (...args: unknown[]) => void };
      if (typeof w.gtag === "function") {
        w.gtag("event", "page_view", {
          page_path: window.location.pathname + window.location.search,
          page_location: window.location.href,
          page_title: document.title,
        });
      }
    });
    return () => unsub();
  }, [router]);

  return (
    <QueryClientProvider client={queryClient}>
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
    </QueryClientProvider>
  );
}
