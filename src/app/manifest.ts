import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Stian Larsen - Full Stack Developer Portfolio",
    short_name: "Stian Larsen",
    description:
      "Portfolio of Stian Larsen, Full Stack Web Developer from Oslo, Norway. Creator of TaskBuddy.dev, Tinify.dev, and open source packages. Expert in TypeScript, React, Next.js, Kotlin, and Spring Boot.",
    start_url: "/",
    scope: "/",
    display: "standalone",
    orientation: "portrait-primary",
    background_color: "#ffffff",
    theme_color: "#030712",

    // Categories for better app store classification
    categories: ["developer", "portfolio", "technology", "productivity"],

    // Language and region
    lang: "en",

    // App shortcuts for quick access (only internal URLs within scope)
    shortcuts: [
      {
        name: "Resume",
        short_name: "Resume",
        description: "View Stian Larsen's resume and CV",
        url: "/resume",
      },
      {
        name: "Projects",
        short_name: "Projects",
        description: "View web development projects",
        url: "/#projects",
        icons: [
          {
            src: "/icons/projects-icon.png",
            sizes: "192x192",
          },
        ],
      },
      {
        name: "Contact",
        short_name: "Contact",
        description: "Get in touch with Stian",
        url: "/contact", // Changed to internal contact page
        icons: [
          {
            src: "/icons/contact-icon.png",
            sizes: "192x192",
          },
        ],
      },
    ],

    // No related applications
    related_applications: [],
    prefer_related_applications: false,
  };
}
