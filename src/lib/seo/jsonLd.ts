// src/lib/seo/jsonLd.ts
import {ME} from "@/data/about_me/me";
import {projects} from "@/data/projects/projects";

// Person Schema - Core identity for search engines
export const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://stianlarsen.com#person",
    name: ME.fullName,
    givenName: ME.firstName,
    familyName: ME.lastName,
    alternateName: ["Stian Lars", "Stian L", "@stianlars1", "@litehode"],
    jobTitle: ME.workingTitle,
    description: "Passionate Full Stack Web Developer from Oslo, Norway. Creator of TaskBuddy.dev, Tinify.dev, and multiple open-source packages. Expert in TypeScript, React, Next.js, Kotlin, and Spring Boot.",
    email: ME.email,
    telephone: ME.phoneNumberString,
    url: "https://stianlarsen.com",
    image: {
        "@type": "ImageObject",
        url: "https://stianlarsen.com/stian/STIAN_PHOTO.jpg",
        width: 400,
        height: 400,
        caption: "Professional photo of Stian Larsen, Full Stack Web Developer"
    },
    address: {
        "@type": "PostalAddress",
        addressLocality: "Oslo",
        addressRegion: "Oslo",
        addressCountry: "NO",
        postalCode: "0150",
    },
    nationality: {
        "@type": "Country",
        name: "Norway"
    },
    birthPlace: {
        "@type": "Place",
        name: "Norway"
    },
    sameAs: [
        "https://github.com/Stianlars1",
        "https://www.linkedin.com/in/stianlars1",
        "https://www.instagram.com/stianlarsen",
        "https://www.x.com/litehode",
        "https://www.npmjs.com/~stianlars1",
    ],
    knowsAbout: [
        "Full Stack Development",
        "TypeScript Programming",
        "React Development",
        "Next.js Framework",
        "Kotlin Programming",
        "Spring Boot Framework",
        "PostgreSQL Database",
        "AWS Cloud Services",
        "Web Development",
        "Frontend Development",
        "Backend Development",
        "UI/UX Design",
        "Open Source Development",
        "NPM Package Development",
        "JavaScript Programming",
        "CSS/SCSS Styling",
        "REST API Development",
        "Database Design",
        "Agile Development",
        "Git Version Control"
    ],
    hasOccupation: {
        "@type": "Occupation",
        name: "Full Stack Web Developer",
        occupationLocation: {
            "@type": "City",
            name: "Oslo, Norway"
        },
        skills: [
            "TypeScript", "React", "Next.js", "Kotlin", "Spring Boot",
            "PostgreSQL", "AWS", "JavaScript", "CSS", "HTML", "Git"
        ]
    },
    worksFor: {
        "@type": "Organization",
        name: "SpareBank 1 Utvikling",
        url: "https://www.sparebank1.no",
        description: "Leading Norwegian financial services company",
        address: {
            "@type": "PostalAddress",
            addressLocality: "Oslo",
            addressCountry: "Norway"
        }
    },
    alumniOf: {
        "@type": "EducationalOrganization",
        name: "Computer Science Degree",
        description: "Bachelor's degree in Computer Science"
    },
    award: [
        "Creator of TaskBuddy.dev - Task Management Application",
        "Creator of Tinify.dev - Image Optimization Service",
        "Open Source Package Maintainer - 8+ NPM packages",
        "2+ Years Professional Development Experience"
    ]
};

// Website Schema for better search understanding
export const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://stianlarsen.com#website",
    name: "Stian Larsen Portfolio",
    alternateName: "Stian Larsen - Full Stack Developer Portfolio",
    url: "https://stianlarsen.com",
    description: "Professional portfolio of Stian Larsen, Full Stack Web Developer from Oslo, Norway. Showcasing web development projects, open source contributions, and professional experience.",
    inLanguage: "en-US",
    isAccessibleForFree: true,
    author: {
        "@id": "https://stianlarsen.com#person"
    },
    creator: {
        "@id": "https://stianlarsen.com#person"
    },
    copyrightHolder: {
        "@id": "https://stianlarsen.com#person"
    },
    copyrightYear: new Date().getFullYear(),
    dateCreated: "2024-01-01",
    dateModified: new Date().toISOString(),
    potentialAction: {
        "@type": "SearchAction",
        target: {
            "@type": "EntryPoint",
            urlTemplate: "https://stianlarsen.com?search={search_term_string}"
        },
        "query-input": "required name=search_term_string"
    }
};

// Portfolio Creative Work Schema
export const portfolioSchema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "@id": "https://stianlarsen.com#portfolio",
    name: "Stian Larsen Development Portfolio",
    alternateName: "Full Stack Developer Portfolio - Stian Larsen",
    description: "Comprehensive portfolio showcasing full stack web development projects, open source contributions, and professional experience. Features projects like TaskBuddy.dev, Tinify.dev, and 8+ open source NPM packages.",
    creator: {
        "@id": "https://stianlarsen.com#person"
    },
    author: {
        "@id": "https://stianlarsen.com#person"
    },
    dateCreated: "2024-01-01",
    dateModified: new Date().toISOString(),
    datePublished: "2024-01-01",
    url: "https://stianlarsen.com",
    mainEntity: {
        "@id": "https://stianlarsen.com#person"
    },
    about: [
        "Web Development",
        "Full Stack Development",
        "TypeScript Programming",
        "React Development",
        "Open Source Development"
    ],
    keywords: [
        "portfolio", "web development", "full stack developer",
        "React", "TypeScript", "Next.js", "Kotlin", "Spring Boot",
        "Norway developer", "Oslo developer", "TaskBuddy", "Tinify"
    ],
    genre: ["Technology", "Software Development", "Web Development"],
    workExample: projects.slice(0, 5).map(project => ({
        "@type": "SoftwareApplication",
        name: project.title,
        description: typeof project.description === 'string' ? project.description : project.title,
        url: project.websiteUrl,
        applicationCategory: "WebApplication",
        datePublished: project.publishDate,
        author: {
            "@id": "https://stianlarsen.com#person"
        }
    }))
};

// Professional Service Schema for freelance work
export const professionalServiceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": "https://stianlarsen.com#service",
    name: "Stian Larsen - Full Stack Web Development Services",
    description: "Professional full stack web development services including frontend development, backend development, database design, and cloud deployment.",
    provider: {
        "@id": "https://stianlarsen.com#person"
    },
    areaServed: [
        {
            "@type": "Country",
            name: "Norway"
        },
        {
            "@type": "City",
            name: "Oslo"
        }
    ],
    serviceType: [
        "Full Stack Web Development",
        "Frontend Development",
        "Backend Development",
        "React Development",
        "TypeScript Development",
        "Database Design",
        "API Development",
        "Cloud Deployment"
    ],
    hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Web Development Services",
        itemListElement: [
            {
                "@type": "Offer",
                itemOffered: {
                    "@type": "Service",
                    name: "Full Stack Web Development",
                    description: "Complete web application development using modern technologies"
                }
            },
            {
                "@type": "Offer",
                itemOffered: {
                    "@type": "Service",
                    name: "React/TypeScript Development",
                    description: "Frontend development with React and TypeScript"
                }
            },
            {
                "@type": "Offer",
                itemOffered: {
                    "@type": "Service",
                    name: "Backend API Development",
                    description: "RESTful API development with Kotlin/Spring Boot"
                }
            }
        ]
    }
};

// Major Projects Schema
export const majorProjectsSchema = projects.slice(0, 3).map(project => ({
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: project.title,
    description: typeof project.description === 'string' ? project.description : `Advanced web application: ${project.title}`,
    url: project.websiteUrl,
    applicationCategory: "WebApplication",
    applicationSubCategory: "ProductivityApplication",
    operatingSystem: "Web Browser",
    softwareVersion: "Latest",
    datePublished: project.publishDate,
    dateModified: new Date().toISOString(),
    author: {
        "@id": "https://stianlarsen.com#person"
    },
    creator: {
        "@id": "https://stianlarsen.com#person"
    },
    programmingLanguage: project.technologies,
    runtimePlatform: "Web Browser",
    offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
        availability: "https://schema.org/InStock"
    },
    isAccessibleForFree: true,
    ...(project.githubUrl && {
        codeRepository: project.githubUrl
    })
}));

// Breadcrumb Schema for navigation
export const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://stianlarsen.com"
        },
        {
            "@type": "ListItem",
            position: 2,
            name: "About",
            item: "https://stianlarsen.com#about"
        },
        {
            "@type": "ListItem",
            position: 3,
            name: "Experience",
            item: "https://stianlarsen.com#experience"
        },
        {
            "@type": "ListItem",
            position: 4,
            name: "Projects",
            item: "https://stianlarsen.com#projects"
        },
        {
            "@type": "ListItem",
            position: 5,
            name: "Open Source",
            item: "https://stianlarsen.com#open-source"
        }
    ]
};

// FAQ Schema for common questions
export const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "Who is Stian Larsen?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Stian Larsen is a Full Stack Web Developer from Oslo, Norway, with 2+ years of professional experience at SpareBank 1 Utvikling. He holds a Computer Science degree and specializes in TypeScript, React, Next.js, Kotlin, and Spring Boot development."
            }
        },
        {
            "@type": "Question",
            name: "What projects has Stian Larsen created?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Stian Larsen is the creator of TaskBuddy.dev (task management application), Tinify.dev (image optimization service), and 8+ open source NPM packages. He has also developed QR-kode.app, Skipper'n Utleie boat rental platform, and AudioVisualizer.io."
            }
        },
        {
            "@type": "Question",
            name: "What technologies does Stian Larsen specialize in?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Stian Larsen specializes in full stack development with expertise in TypeScript, React, Next.js for frontend development, and Kotlin with Spring Boot for backend development. He also works with PostgreSQL, AWS, Firebase, and modern web development tools."
            }
        },
        {
            "@type": "Question",
            name: "Is Stian Larsen available for projects?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, Stian Larsen is available for freelance web development projects and consulting. You can contact him at stian.larsen@mac.com for custom web applications, e-commerce platforms, and software development services."
            }
        },
        {
            "@type": "Question",
            name: "Where is Stian Larsen located?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Stian Larsen is based in Oslo, Norway, and currently works at SpareBank 1 Utvikling. He provides web development services locally in Norway and internationally for remote projects."
            }
        }
    ]
};

// Organization Schema for current employer
export const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "SpareBank 1 Utvikling",
    url: "https://www.sparebank1.no",
    description: "Leading Norwegian financial services company",
    address: {
        "@type": "PostalAddress",
        addressLocality: "Oslo",
        addressCountry: "Norway"
    },
    employee: {
        "@id": "https://stianlarsen.com#person"
    }
};