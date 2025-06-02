import Script from "next/script";
import {portfolioJsonLd} from "@/lib/seo/jsonLd";

/**
 * NOTE: keep jsonLd in its own file (tree-shakable and testable).
 * If you need per-request data (e.g. live project stats),
 * accept props and patch before serialising – exactly like you did
 * for CSS-Variables-Assistant.
 */

export function PortfolioStructuredData() {
    return (
        <Script
            id="portfolio-jsonld"
            type="application/ld+json"
            strategy="afterInteractive"      // SSR-safe, avoids hydration mismatch
            dangerouslySetInnerHTML={{
                __html: JSON.stringify(portfolioJsonLd),
            }}
        />
    );
}
