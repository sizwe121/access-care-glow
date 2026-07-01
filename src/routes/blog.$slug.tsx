import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Nav, Footer, CTAStrip, WHATSAPP } from "@/components/site-chrome";
import { POSTS, type BlogPost } from "@/content/blog-posts";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = POSTS.find((p) => p.slug === params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData, params }) => {
    const post = loaderData?.post;
    if (!post) {
      return {
        meta: [{ title: "Post not found | Access Care Dental" }],
      };
    }
    const url = `/blog/${params.slug}`;
    return {
      meta: [
        { title: `${post.title} | Access Care Dental Johannesburg` },
        { name: "description", content: post.description },
        { name: "keywords", content: post.keywords },
        { property: "og:title", content: post.title },
        { property: "og:description", content: post.description },
        { property: "og:type", content: "article" },
        { property: "og:url", content: url },
        { property: "article:published_time", content: post.date },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.title,
            description: post.description,
            datePublished: post.date,
            author: { "@type": "Organization", name: "Access Care Dental" },
            publisher: { "@type": "Organization", name: "Access Care Dental" },
            mainEntityOfPage: url,
          }),
        },
      ],
    };
  },
  notFoundComponent: () => (
    <main>
      <Nav />
      <div className="mx-auto max-w-3xl px-6 py-32 text-center">
        <h1 className="font-display text-4xl text-ink">Post not found</h1>
        <p className="mt-4 text-ink/70">That article doesn't exist (or has moved).</p>
        <Link to="/blog" className="mt-8 inline-block text-teal-deep underline">
          ← Back to the blog
        </Link>
      </div>
      <Footer />
    </main>
  ),
  errorComponent: ({ error, reset }) => (
    <main>
      <Nav />
      <div className="mx-auto max-w-3xl px-6 py-32 text-center">
        <h1 className="font-display text-3xl text-ink">Something went wrong</h1>
        <p className="mt-4 text-ink/70">{error.message}</p>
        <button onClick={reset} className="mt-8 text-teal-deep underline">Try again</button>
      </div>
      <Footer />
    </main>
  ),
  component: BlogPost,
});

function BlogPost() {
  const { post } = Route.useLoaderData() as { post: BlogPost };

  return (
    <main>
      <Nav />
      <article>
        <header className="bg-bone border-b border-ink/10">
          <div className="mx-auto max-w-3xl px-6 pt-20 pb-16 md:pt-28">
            <div className="flex items-center gap-3 text-[10px] tracking-[0.4em] text-teal-deep mb-8">
              <span className="h-px w-10 bg-teal-deep" />
              {post.category.toUpperCase()} · {post.readMins} MIN READ
            </div>
            <h1 className="font-display text-4xl md:text-5xl leading-[1.05] text-ink text-balance">
              {post.title}
            </h1>
            <p className="mt-6 text-lg text-ink/75 leading-relaxed">{post.description}</p>
          </div>
        </header>

        <section className="relative bg-bone pb-20 overflow-hidden premium-section-light">
          <div className="mx-auto max-w-3xl px-6 space-y-6">
            {post.body.map((b, i) => {
              if (b.h) return <h2 key={i} className="font-display text-2xl md:text-3xl text-ink pt-6">{b.h}</h2>;
              if (b.list) return (
                <ul key={i} className="space-y-2 text-ink/80">
                  {b.list.map((x) => (
                    <li key={x} className="flex gap-3"><span className="text-teal-deep font-display">•</span><span>{x}</span></li>
                  ))}
                </ul>
              );
              return <p key={i} className="text-ink/80 leading-relaxed text-lg">{b.p}</p>;
            })}
          </div>
        </section>

        <section className="relative bg-ink text-bone py-16 overflow-hidden premium-section-dark">
          <div className="mx-auto max-w-3xl px-6">
            <div className="text-[10px] tracking-[0.3em] text-teal mb-4">RELATED SERVICES</div>
            <div className="flex flex-wrap gap-3">
              {post.relatedTo.map((r) => (
                <Link
                  key={r.to}
                  to={r.to}
                  className="rounded-full border border-bone/30 px-5 py-2 text-sm text-bone hover:border-teal hover:text-teal transition"
                >
                  {r.label} →
                </Link>
              ))}
            </div>
            <div className="mt-10">
              <a
                href={WHATSAPP} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-teal text-ink px-7 py-4 font-medium hover:bg-bone transition"
              >
                Book on WhatsApp →
              </a>
            </div>
          </div>
        </section>

        <section className="relative bg-bone py-16 overflow-hidden premium-section-light">
          <div className="mx-auto max-w-5xl px-6">
            <div className="text-[10px] tracking-[0.3em] text-teal-deep mb-6">MORE FROM THE JOURNAL</div>
            <ul className="grid md:grid-cols-3 gap-6">
              {POSTS.filter((p) => p.slug !== post.slug).slice(0, 3).map((p) => (
                <li key={p.slug}>
                  <Link to="/blog/$slug" params={{ slug: p.slug }} className="block group">
                    <div className="text-[10px] tracking-[0.3em] text-teal-deep">{p.category.toUpperCase()}</div>
                    <div className="font-display text-xl text-ink mt-2 group-hover:text-teal-deep transition">
                      {p.title}
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-10">
              <Link to="/blog" className="text-teal-deep underline">← All articles</Link>
            </div>
          </div>
        </section>
      </article>
      <CTAStrip />
      <Footer />
    </main>
  );
}
