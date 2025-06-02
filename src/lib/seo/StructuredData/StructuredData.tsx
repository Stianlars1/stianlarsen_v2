// src/components/seo/StructuredData/StructuredData.tsx
import Script from "next/script";
import {
    breadcrumbSchema,
    faqSchema,
    majorProjectsSchema,
    organizationSchema,
    personSchema,
    portfolioSchema,
    professionalServiceSchema,
    websiteSchema,
} from "@/lib/seo/jsonLd";

export const StructuredDataScripts = () => {
    return (
        <>
            {/* Person Schema - Core identity */}
            <Script
                id="person-schema"
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(personSchema)
                }}
            />

            {/* Website Schema */}
            <Script
                id="website-schema"
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(websiteSchema)
                }}
            />

            {/* Portfolio Schema */}
            <Script
                id="portfolio-schema"
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(portfolioSchema)
                }}
            />

            {/* Professional Service Schema */}
            <Script
                id="service-schema"
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(professionalServiceSchema)
                }}
            />

            {/* Organization Schema */}
            <Script
                id="organization-schema"
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(organizationSchema)
                }}
            />

            {/* Major Projects Schema */}
            {majorProjectsSchema.map((schema, index) => (
                <Script
                    key={`project-${index}`}
                    id={`project-schema-${index}`}
                    type="application/ld+json"
                    strategy="afterInteractive"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(schema)
                    }}
                />
            ))}

            {/* Breadcrumb Schema */}
            <Script
                id="breadcrumb-schema"
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(breadcrumbSchema)
                }}
            />

            {/* FAQ Schema */}
            <Script
                id="faq-schema"
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(faqSchema)
                }}
            />

            {/* Additional Portfolio Sections Schema */}
            <Script
                id="portfolio-sections-schema"
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "ItemList",
                        name: "Stian Larsen Portfolio Sections",
                        description: "Main sections of Stian Larsen's professional portfolio",
                        itemListElement: [
                            {
                                "@type": "ListItem",
                                position: 1,
                                item: {
                                    "@type": "AboutPage",
                                    name: "About Stian Larsen",
                                    url: "https://stianlarsen.com#about",
                                    description: "Professional background and expertise"
                                }
                            },
                            {
                                "@type": "ListItem",
                                position: 2,
                                item: {
                                    "@type": "WebPage",
                                    name: "Professional Experience",
                                    url: "https://stianlarsen.com#experience",
                                    description: "Work history and professional roles"
                                }
                            },
                            {
                                "@type": "ListItem",
                                position: 3,
                                item: {
                                    "@type": "WebPage",
                                    name: "Development Projects",
                                    url: "https://stianlarsen.com#projects",
                                    description: "Web applications and software projects"
                                }
                            },
                            {
                                "@type": "ListItem",
                                position: 4,
                                item: {
                                    "@type": "WebPage",
                                    name: "Open Source Contributions",
                                    url: "https://stianlarsen.com#open-source",
                                    description: "NPM packages and open source projects"
                                }
                            }
                        ]
                    })
                }}
            />
        </>
    );
};