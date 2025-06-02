// src/app/robots.ts
import type {MetadataRoute} from "next";

const HOST = "https://stianlarsen.com";

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: "*",
                allow: "/",
                // Disallow crawling of system files and directories
                disallow: [
                    "/_next/",
                    "/api/",
                    "/.well-known/",
                    "/admin/",
                    "/private/",
                ],
            },
            // Specific rules for major search engines
            {
                userAgent: "Googlebot",
                allow: "/",
                disallow: [
                    "/_next/",
                    "/api/",
                    "/.well-known/",
                    "/admin/",
                    "/private/",
                ],
            },
            {
                userAgent: "Bingbot",
                allow: "/",
                disallow: [
                    "/_next/",
                    "/api/",
                    "/.well-known/",
                    "/admin/",
                    "/private/",
                ],
            },
        ],
        // Sitemap location for search engines
        sitemap: `${HOST}/sitemap.xml`,
        // Host declaration for domain canonicalization
        host: HOST,
    };
}