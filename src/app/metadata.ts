// src/app/metadata.ts
import type {Metadata} from "next";
import {ME} from "@/data/about_me/me";

export const metadata: Metadata = {
  // Enhanced title structure for maximum SEO impact
  title: {
    default: "Stian Larsen | Full Stack Web Developer & Software Engineer | Oslo, Norway",
    template: "%s | Stian Larsen - Full Stack Developer",
  },

  // Comprehensive description optimized for search intent and conversion
  description:
      "Stian Larsen is a passionate Full Stack Web Developer and Software Engineer based in Oslo, Norway. With 2+ years of professional experience at SpareBank 1 Utvikling and a Computer Science degree, I specialize in TypeScript, React, Next.js, Kotlin, and Spring Boot development. Creator of TaskBuddy.dev task management app, Tinify.dev image optimization service, and 8+ open-source NPM packages. Expert in frontend development, backend APIs, database design, and cloud deployment. Available for freelance web development projects in Norway and internationally.",

  // Extensive keyword targeting for Norwegian and international searches
  keywords: [
    // Primary identity + location
    "Stian Larsen",
    "Stian Larsen developer",
    "Stian Larsen Oslo",
    "Stian Larsen Norway",
    "Stian Larsen portfolio",

    // Core professional titles + location
    "Full Stack Developer Oslo",
    "Full Stack Developer Norway",
    "Web Developer Oslo",
    "Web Developer Norway",
    "Software Engineer Oslo",
    "Software Engineer Norway",
    "Frontend Developer Oslo",
    "Backend Developer Oslo",
    "Norwegian Developer",
    "Norwegian Software Engineer",
    "Oslo Web Development",
    "Norway Web Development",

    // Technology-specific + location
    "TypeScript Developer Oslo",
    "TypeScript Developer Norway",
    "React Developer Oslo",
    "React Developer Norway",
    "Next.js Developer Norway",
    "Kotlin Developer Norway",
    "Spring Boot Developer Norway",
    "PostgreSQL Developer Oslo",
    "AWS Developer Norway",
    "JavaScript Developer Oslo",

    // Company-specific
    "SpareBank 1 Developer",
    "SpareBank 1 Utvikling",
    "SpareBank 1 Software Engineer",
    "Bank Developer Norway",
    "Financial Technology Developer",
    "FinTech Developer Norway",

    // Project-specific branding
    "TaskBuddy.dev",
    "TaskBuddy creator",
    "TaskBuddy developer",
    "Tinify.dev",
    "Tinify creator",
    "Tinify developer",
    "Task management app developer",
    "Image optimization developer",

    // Open source contributions
    "Open Source Developer Norway",
    "NPM Package Author",
    "React Component Library",
    "@stianlarsen packages",
    "Open Source Contributor Norway",

    // Service-based keywords
    "Freelance Developer Norway",
    "Freelance Web Developer Oslo",
    "Contract Developer Norway",
    "Web Development Services Oslo",
    "Custom Web Applications Norway",
    "E-commerce Developer Norway",
    "Business Website Developer",

    // Skill combinations
    "React TypeScript Expert",
    "Full Stack TypeScript Developer",
    "Modern Web Development Norway",
    "Responsive Web Design Oslo",
    "Mobile App Developer Norway",
    "API Developer Norway",
    "Database Developer Oslo",
    "Cloud Developer AWS",

    // Industry/domain
    "SaaS Developer Norway",
    "Web Application Developer",
    "Progressive Web App Developer",
    "UI/UX Developer Oslo",
    "Frontend Architecture",
    "Backend Architecture",
    "Microservices Developer",

    // Education/experience
    "Computer Science Graduate Norway",
    "Professional Developer Norway",
    "Experienced Web Developer",
    "Senior Developer Oslo",
    "Agile Developer Norway",
    "Scrum Developer",

    // Long-tail service keywords
    "hire full stack developer norway",
    "best web developer oslo",
    "professional website development norway",
    "custom software development oslo",
    "react development services norway",
    "typescript consulting norway",

    // Norwegian language variations
    "utvikler oslo",
    "webutvikler norge",
    "programvareutvikler oslo",
    "fullstack utvikler",

    // Technical specializations
    "JAMstack Developer",
    "Serverless Developer",
    "Headless CMS Developer",
    "REST API Developer",
    "GraphQL Developer Norway",
    "DevOps Developer Oslo",
  ],

  // Enhanced Open Graph for maximum social sharing impact
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://stianlarsen.com/",
    siteName: "Stian Larsen - Full Stack Developer Portfolio",
    title: "Stian Larsen | Full Stack Web Developer & Software Engineer | Oslo, Norway",
    description:
        "Full Stack Developer from Oslo, Norway 🇳🇴 | Creator of TaskBuddy.dev & Tinify.dev | TypeScript • React • Next.js • Kotlin • Spring Boot | 2+ years at SpareBank 1 | 8+ open source packages | Computer Science graduate | Available for projects",
    images: [
      {
        url: "https://stianlarsen.com/stian/OG-STIAN.png",
        width: 1200,
        height: 630,
        alt: "Stian Larsen - Full Stack Web Developer from Oslo, Norway. Creator of TaskBuddy.dev and Tinify.dev. Expert in TypeScript, React, Next.js, Kotlin, and Spring Boot.",
        type: "image/png",
      },
      {
        url: "https://stianlarsen.com/stian/STIAN_PHOTO.jpg",
        width: 400,
        height: 400,
        alt: "Professional photo of Stian Larsen, Full Stack Web Developer",
        type: "image/jpeg",
      },
    ],
  },

  // Enhanced Twitter/X Card for better social visibility
  twitter: {
    card: "summary_large_image",
    site: "@litehode",
    creator: "@litehode",
    title: "Stian Larsen | Full Stack Developer & Software Engineer | Oslo 🇳🇴",
    description:
        "Full Stack Developer from Oslo, Norway 🇳🇴 | Creator of TaskBuddy.dev & Tinify.dev | TypeScript • React • Kotlin | @SpareBank1 | 8+ NPM packages | Computer Science graduate",
    images: ["https://stianlarsen.com/stian/OG-STIAN.png"],
  },

  // SEO fundamentals for better indexing
  alternates: {
    canonical: "https://stianlarsen.com/",
    languages: {
      "en-US": "https://stianlarsen.com/",
      "en": "https://stianlarsen.com/",
      "no": "https://stianlarsen.com/", // Norwegian users
    },
  },

  // Professional metadata
  authors: [
    {
      name: ME.fullName,
      url: "https://stianlarsen.com",
    },
    {
      name: "Stian Larsen",
      url: "https://github.com/Stianlars1",
    },
  ],
  creator: ME.fullName,
  publisher: ME.fullName,
  applicationName: "Stian Larsen Portfolio",
  generator: "Next.js",
  referrer: "origin-when-cross-origin",

  // Enhanced robots for better crawling
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    }
  },

  // Enhanced manifest and icons
  manifest: "/manifest.webmanifest",
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.ico", sizes: "48x48" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      { rel: "mask-icon", url: "/safari-pinned-tab.svg", color: "#2563eb" },
    ],
  },

  // Category and classification
  category: "Technology",
  classification: "Portfolio Website",

  // Comprehensive additional metadata for enhanced SEO
  other: {
    // Personal/Professional identity
    "profile:first_name": ME.firstName,
    "profile:last_name": ME.lastName,
    "profile:username": "stianlars1",
    "profile:gender": "male",

    // Geographic targeting for local SEO
    "geo.region": "NO-03", // Oslo region code
    "geo.placename": "Oslo",
    "geo.position": "59.9139;10.7522", // Oslo coordinates
    "ICBM": "59.9139, 10.7522",
    "geo.country": "Norway",
    "geo.locality": "Oslo",

    // Business/Professional information
    "business.contact_data.street_address": "Oslo",
    "business.contact_data.locality": "Oslo",
    "business.contact_data.region": "Oslo",
    "business.contact_data.postal_code": "0150",
    "business.contact_data.country_name": "Norway",
    "business.contact_data.email": ME.email,
    "business.contact_data.phone_number": ME.phoneNumberString,
    "business.contact_data.website": "https://stianlarsen.com",

    // Professional qualifications
    "professional.role": "Full Stack Web Developer",
    "professional.company": "SpareBank 1 Utvikling",
    "professional.experience": "2+ years",
    "professional.education": "Computer Science",
    "professional.specialization": "TypeScript, React, Kotlin, Spring Boot",
    "professional.availability": "Available for projects",

    // Technical capabilities
    "skills.frontend": "React, Next.js, TypeScript, JavaScript, HTML, CSS, SCSS",
    "skills.backend": "Kotlin, Spring Boot, Node.js, PostgreSQL, REST APIs",
    "skills.tools": "Git, AWS, Firebase, Vercel, WebStorm, IntelliJ IDEA",
    "skills.languages": "TypeScript, Kotlin, JavaScript, SQL, HTML, CSS",

    // Portfolio metrics
    "portfolio.projects": "7+ major projects",
    "portfolio.packages": "8+ NPM packages",
    "portfolio.github": "https://github.com/Stianlars1",
    "portfolio.linkedin": "https://www.linkedin.com/in/stianlars1",

    // Mobile and app metadata
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
    "apple-mobile-web-app-title": "Stian Larsen",
    "msapplication-TileColor": "#2563eb",
    "msapplication-config": "/browserconfig.xml",

    // Content and language
    "content-language": "en",
    "language": "English",
    "distribution": "Global",
    "rating": "General",
    "revisit-after": "7 days",
    "robots": "index,follow",

    // Schema.org hints for better structured data
    "schema.person": "https://stianlarsen.com#person",
    "schema.website": "https://stianlarsen.com#website",
    "schema.portfolio": "https://stianlarsen.com#portfolio",

    // Performance and technical
    "format-detection": "telephone=no",
    "referrer": "origin-when-cross-origin",

    // Social proof and credibility
    "company.current": "SpareBank 1 Utvikling",
    "education.degree": "Computer Science",
    "projects.featured": "TaskBuddy.dev, Tinify.dev",
    "open_source.packages": "8+",
    "location.primary": "Oslo, Norway",
    "availability.freelance": "Yes",
    "experience.years": "2+",
    "specialization.primary": "Full Stack Development",
    "technologies.primary": "TypeScript, React, Kotlin, Spring Boot",
  },
};