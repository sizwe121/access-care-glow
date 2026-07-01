import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { POSTS } from "@/content/blog-posts";

// TODO: replace with your project URL once a project name or custom domain is set.
const BASE_URL = "";

const PATHS = [
  "/",
  "/about",
  "/contact",
  "/faq",
  "/services",
  "/services/professional-tooth-cleaning",
  "/services/teeth-whitening",
  "/services/tooth-replacement",
  "/services/extractions",
  "/services/dentures",
  "/services/braces",
  "/mobile-dentist-johannesburg",
  "/corporate-dental-wellness",
  "/school-dental-program",
  "/home-visit-dentist",
  "/blog",
  ...POSTS.map((p) => `/blog/${p.slug}`),
];

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const urls = PATHS.map(
          (p) =>
            `  <url><loc>${BASE_URL}${p}</loc><changefreq>weekly</changefreq><priority>${p === "/" ? "1.0" : "0.8"}</priority></url>`,
        );
        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...urls,
          `</urlset>`,
        ].join("\n");
        return new Response(xml, {
          headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=3600" },
        });
      },
    },
  },
});
