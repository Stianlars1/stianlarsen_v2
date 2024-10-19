// metadata for stianlarsen.com

import type { Viewport } from "next";
import { Metadata } from "next";

export const useThisViewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "hsl(0, 0%, 100%)" },
    { media: "(prefers-color-scheme: dark)", color: "hsl(224, 71.4% 4.1%)" },
  ],
};

export const rootMeta: Metadata = {
  title: "Stian Larsen | Full Stack Web Developer",
  description:
    "Hi, I'm Stian Larsen, a passionate Full Stack Web Developer based in Norway. With a Bachelor's degree in Computer Science and over two years of professional experience, I specialize in building innovative web applications and backend services. Explore my projects like TaskBuddy.dev and Tinify.dev to see my work in action.",
  keywords: [
    "Stian Larsen",
    "Full Stack Developer",
    "Web Developer Norway",
    "TaskBuddy.dev",
    "Tinify.dev",
    "Full Stack Web Development",
    "React Developer",
    "Kotlin Spring Boot",
    "Web Applications",
    "Backend Services",
    "Software Engineering",
    "Computer Science Graduate",
    "Web Development Projects",
    "Freelance Developer",
    "Portfolio Website",
  ],
  openGraph: {
    title: "Stian Larsen | Full Stack Web Developer",
    description:
      "Hi, I'm Stian Larsen, a passionate Full Stack Web Developer based in Norway. With a Bachelor's degree in Computer Science and over two years of professional experience, I specialize in building innovative web applications and backend services. Explore my projects like TaskBuddy.dev and Tinify.dev to see my work in action.",
    url: "https://stianlarsen.com/",
    type: "website",
    images: [
      {
        url: "https://stianlarsen.com/stian/OG-STIAN.png", // Replace with your actual image URL
        width: 1200,
        height: 630,
        alt: "Stian Larsen - Full Stack Web Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Stian Larsen | Full Stack Web Developer",
    description:
      "Hi, I'm Stian Larsen, a passionate Full Stack Web Developer based in Norway. Check out my portfolio to see my projects like TaskBuddy.dev and Tinify.dev.",
    images: ["https://stianlarsen.com/stian/OG-STIAN.png"], // Replace with your actual image URL
  },
  alternates: {
    canonical: "https://stianlarsen.com/",
  },
  icons: {
    icon: "/favicon.ico", // Replace with your favicon path
    shortcut: "/favicon-16x16.png", // Replace if you have different favicon sizes
    apple: "/apple-touch-icon.png", // Replace if you have an Apple touch icon
  },
};
