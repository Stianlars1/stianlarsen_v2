import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Stian Larsen - Full Stack Developer Portfolio",
    short_name: "Stian Larsen",
    description:
      "Portfolio of Stian Larsen, Full Stack Web Developer from Norway. Founder of Larsen Utvikling and creator of DBHost, Tinify.dev, and the macOS apps Station, FrameSnapper, and dotViewer. Expert in TypeScript, React, Next.js, Kotlin, and Swift.",
    start_url: "/",
    scope: "/",
    display: "standalone",
    orientation: "portrait-primary",
    background_color: "#ffffff",
    theme_color: "#030712",

    icons: [
      {
        src: "/favicon-96x96.png",
        sizes: "96x96",
        type: "image/png",
      },
      {
        src: "/favicon-196x196.png",
        sizes: "196x196",
        type: "image/png",
      },
      {
        src: "/mstile-310x310.png",
        sizes: "310x310",
        type: "image/png",
      },
    ],

    // Categories for better app store classification
    categories: ["developer", "portfolio", "technology", "productivity"],

    // Language and region
    lang: "en",

    // App shortcuts for quick access (only internal URLs within scope)
    shortcuts: [
      {
        name: "Projects",
        short_name: "Projects",
        description: "View web development projects",
        url: "/#projects",
      },
      {
        name: "macOS Apps",
        short_name: "Apps",
        description: "View native macOS apps",
        url: "/#macos-apps",
      },
      {
        name: "Open Source",
        short_name: "OSS",
        description: "View open source npm packages",
        url: "/#open-source",
      },
    ],

    // No related applications
    related_applications: [],
    prefer_related_applications: false,
  };
}
