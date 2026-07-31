// src/app/robots.ts
import type { MetadataRoute } from "next";

const HOST = "https://v2.stianlarsen.com";

/* This is the archived v2 site; stianlarsen.com now serves v3.
   Crawling stays allowed on purpose. De-indexing happens through the noindex
   in metadataROOT, and a crawler that is blocked here would never fetch the
   page to see it — already-indexed URLs would then linger indefinitely.
   No sitemap or host is declared, because both used to claim the domain that
   now belongs to v3. */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        // Disallow crawling of system files and directories
        disallow: ["/_next/", "/api/", "/.well-known/", "/admin/", "/private/"],
      },
      // Specific rules for major search engines
      {
        userAgent: "Googlebot",
        allow: "/",
        disallow: ["/_next/", "/api/", "/.well-known/", "/admin/", "/private/"],
      },
      {
        userAgent: "Bingbot",
        allow: "/",
        disallow: ["/_next/", "/api/", "/.well-known/", "/admin/", "/private/"],
      },
    ],
    host: HOST,
  };
}
