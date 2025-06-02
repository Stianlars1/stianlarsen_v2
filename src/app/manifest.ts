// src/app/manifest.ts
import type {MetadataRoute} from "next";

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

        // Icons for various device sizes and purposes
        icons: [
            {
                src: "/favicon.ico",
                sizes: "any",
                type: "image/x-icon",
            },
            {
                src: "/favicon-16x16.png",
                sizes: "16x16",
                type: "image/png",
            },
            {
                src: "/favicon-32x32.png",
                sizes: "32x32",
                type: "image/png",
            },
            {
                src: "/favicon-96x96.png",
                sizes: "96x96",
                type: "image/png",
            },
            {
                src: "/favicon-128.png",
                sizes: "128x128",
                type: "image/png",
            },
            {
                src: "/apple-touch-icon-57x57.png",
                sizes: "57x57",
                type: "image/png",
            },
            {
                src: "/apple-touch-icon-72x72.png",
                sizes: "72x72",
                type: "image/png",
            },
            {
                src: "/apple-touch-icon-120x120.png",
                sizes: "120x120",
                type: "image/png",
            },
            {
                src: "/apple-touch-icon-152x152.png",
                sizes: "152x152",
                type: "image/png",
            },
            {
                src: "/android-chrome-192x192.png",
                sizes: "192x192",
                type: "image/png",
            },
            {
                src: "/android-chrome-512x512.png",
                sizes: "512x512",
                type: "image/png",
            },
        ],


        // App shortcuts for quick access
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
                url: "mailto:stian.larsen@mac.com?subject=👋%20Hello,%20Stian",
                icons: [
                    {
                        src: "/icons/contact-icon.png",
                        sizes: "192x192",
                    },
                ],
            },
            {
                name: "GitHub",
                short_name: "GitHub",
                description: "View open source projects",
                url: "https://github.com/Stianlars1",
                icons: [
                    {
                        src: "/icons/github-icon.png",
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