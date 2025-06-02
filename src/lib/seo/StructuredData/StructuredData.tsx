// src/components/seo/StructuredData/StructuredData.tsx
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
            <script
                id="person-schema"
                type="application/ld+json"

                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(personSchema, null, 0)
                }}
            />

            {/* Website Schema */}
            <script
                id="website-schema"
                type="application/ld+json"

                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(websiteSchema, null, 0)
                }}
            />

            {/* Portfolio Schema */}
            <script
                id="portfolio-schema"
                type="application/ld+json"

                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(portfolioSchema, null, 0)
                }}
            />

            {/* Professional Service Schema */}
            <script
                id="service-schema"
                type="application/ld+json"

                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(professionalServiceSchema, null, 0)
                }}
            />

            {/* Organization Schema */}
            <script
                id="organization-schema"
                type="application/ld+json"

                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(organizationSchema, null, 0)
                }}
            />

            {/* Major Projects Schema */}
            {majorProjectsSchema.map((schema, index) => (
                <script
                    key={`project-${index}`}
                    id={`project-schema-${index}`}
                    type="application/ld+json"

                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(schema, null, 0)
                    }}
                />
            ))}

            {/* Breadcrumb Schema */}
            <script
                id="breadcrumb-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(breadcrumbSchema, null, 0)
                }}
            />

            {/* FAQ Schema */}
            <script
                id="faq-schema"
                type="application/ld+json"

                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(faqSchema, null, 0)
                }}
            />
        </>
    );
};