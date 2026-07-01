import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav, Footer, PageHero, CTAStrip } from "@/components/site-chrome";
import { POSTS } from "@/content/blog-posts";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: "Dental Blog Johannesburg | Mobile, Cleaning, Whitening Tips | Access Care Dental" },
      { name: "description", content: "Practical dental guides for Johannesburg, mobile dentist visits, teeth cleaning in Parktown, whitening in Sandton, emergencies, dentures and school programs." },
      { name: "keywords", content: "dental blog Johannesburg, mobile dentist Johannesburg, teeth cleaning Parktown, teeth whitening Sandton, emergency dentist Johannesburg" },
      { property: "og:title", content: "Dental Blog | Access Care Dental Johannesburg" },
      { property: "og:description", content: "Practical, no-fluff dental guides for Johannesburg patients." },
      { property: "og:url", content: "/blog" },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Blog",
          name: "Access Care Dental Blog",
          url: "/blog",
          blogPost: POSTS.map((p) => ({
            "@type": "BlogPosting",
            headline: p.title,
            url: `/blog/${p.slug}`,
            datePublished: p.date,
            description: p.description,
          })),
        }),
      },
    ],
  }),
  component: BlogIndex,
});

function BlogIndex() {
  return (
    <main>
      <Nav />
      <PageHero
        eyebrow="JOURNAL · JOHANNESBURG"
        title="Notes from the chair."
        italic="And from your front door."
        intro="Plain-language guides on mobile dentistry, cleanings, whitening and emergencies, written by the same dentist who treats you."
      />
      <section className="relative bg-bone py-20 overflow-hidden premium-section-light">
        <div className="mx-auto max-w-5xl px-6">
          <ul className="divide-y divide-ink/15 border-y border-ink/15">
            {POSTS.map((p) => (
              <li key={p.slug}>
                <Link
                  to="/blog/$slug"
                  params={{ slug: p.slug }}
                  className="grid md:grid-cols-[auto_1fr_auto] gap-6 items-baseline py-8 group"
                >
                  <span className="text-[10px] tracking-[0.3em] text-teal-deep md:w-32">
                    {p.category.toUpperCase()}
                  </span>
                  <div>
                    <h2 className="font-display text-2xl md:text-3xl text-ink group-hover:text-teal-deep transition text-balance">
                      {p.title}
                    </h2>
                    <p className="mt-2 text-ink/70 leading-relaxed">{p.description}</p>
                  </div>
                  <span className="text-xs text-ink/50 whitespace-nowrap">
                    {p.readMins} min read →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <CTAStrip />
      <Footer />
    </main>
  );
}
