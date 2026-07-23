import { Project } from "../projects";

export const project_tinify: Project = {
  title: "Tinify: Advanced Image Optimization Service",
  publishDate: "2024-10-13",
  previewDate: "October 2024",
  description: [
    "Developed Tinify, a web-based image optimization service that compresses, resizes, and crops images across AVIF, GIF, JPEG, PNG, and WebP — free to use, private by default, with files auto-deleted after two hours.",
    "Fully relaunched in July 2026 with a public REST API, account plans, and usage-based billing: a free tier, and Developer and Pro plans with monthly operation allotments, asynchronous batch processing, API key rotation, and opt-in overage caps. You pay only for successful operations.",
    "The backend is built in Kotlin and Spring Boot, using image processing tools like ImageMagick, pngquant, and cjpeg for efficient manipulation. The relaunch also shipped a complete frontend redesign in Next.js and TypeScript, with all UI components designed from scratch.",
  ],
  technologies: [
    "Kotlin",
    "Spring Boot",
    "ImageMagick",
    "REST API",
    "Next.js",
    "TypeScript",
    "React",
    "AWS Lightsail",
    "UI/UX Design",
    "Image Processing Tools",
  ],
  websiteUrl: "https://tinify.dev",
  githubUrl: "https://github.com/Stianlars1/tinify-client",
};
