import { portfolioJsonLd } from "@/lib/seo/jsonLd";

/**
 * JSON-LD is structured data, not executable code, so it is rendered with a
 * native <script> tag in the server-rendered HTML (per the Next.js JSON-LD
 * guide) - next/script with afterInteractive would inject it client-side,
 * hiding it from crawlers that do not execute JavaScript.
 *
 * The payload is sanitized by escaping "<" to prevent XSS via injected
 * strings, as recommended by the same guide.
 */
export function PortfolioStructuredData() {
  return (
    <script
      id="portfolio-jsonld"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(portfolioJsonLd).replace(/</g, "\\u003c"),
      }}
    />
  );
}
