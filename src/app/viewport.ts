// src/app/viewport.ts
import type {Viewport} from "next";

export const viewport: Viewport = {
    // Ensures proper width and initial scale on mobile devices
    width: "device-width",
    initialScale: 1,
    minimumScale: 1,
    maximumScale: 5,
    userScalable: true,

    // Theme color for mobile browsers and PWA

    themeColor: [
        { media: "(prefers-color-scheme: light)", color: "#FFF" },
        { media: "(prefers-color-scheme: dark)", color: "#030712" },
    ],


    // Color scheme preference for better system integration
    colorScheme: "light dark",

    // Ensure proper viewport height on mobile browsers
    // This helps with mobile browser navigation bars
    viewportFit: "cover",

    // Improve interaction on iOS devices
    interactiveWidget: "resizes-visual",
};