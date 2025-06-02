// src/app/sitemap.ts
import type {MetadataRoute} from "next";
import {projects} from "@/data/projects/projects";
import {open_source_projects_map} from "@/data/open_source/openSource";

const HOST = "https://stianlarsen.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date().toISOString();

  // Core portfolio pages with optimized priorities
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: HOST,
      lastModified: currentDate,
      priority: 1.0,
      changeFrequency: "monthly",
    },
    // Section anchors for better indexing
    {
      url: `${HOST}#about`,
      lastModified: currentDate,
      priority: 0.9,
      changeFrequency: "monthly",
    },
    {
      url: `${HOST}#experience`,
      lastModified: currentDate,
      priority: 0.9,
      changeFrequency: "monthly",
    },
    {
      url: `${HOST}#projects`,
      lastModified: currentDate,
      priority: 0.9,
      changeFrequency: "weekly",
    },
    {
      url: `${HOST}#open-source`,
      lastModified: currentDate,
      priority: 0.8,
      changeFrequency: "weekly",
    },
  ];

  // Project URLs - external projects Stian created
  const projectRoutes: MetadataRoute.Sitemap = projects.map(project => ({
    url: project.websiteUrl,
    lastModified: new Date(project.publishDate).toISOString(),
    priority: 0.7,
    changeFrequency: "monthly" as const,
  }));

  // Open source package URLs - NPM packages
  const npmRoutes: MetadataRoute.Sitemap = open_source_projects_map
      .filter(pkg => pkg.npmUrl)
      .map(pkg => ({
        url: pkg.npmUrl,
        lastModified: new Date(pkg.publishDate).toISOString(),
        priority: 0.6,
        changeFrequency: "monthly" as const,
      }));

  // Website URLs for packages that have dedicated sites
  const packageWebsiteRoutes: MetadataRoute.Sitemap = open_source_projects_map
      .filter(pkg => pkg.websiteUrl)
      .map(pkg => ({
        url: pkg.websiteUrl!,
        lastModified: new Date(pkg.publishDate).toISOString(),
        priority: 0.6,
        changeFrequency: "monthly" as const,
      }));

  // Professional and social profiles for better link authority
  const profileRoutes: MetadataRoute.Sitemap = [
    {
      url: "https://github.com/Stianlars1",
      lastModified: currentDate,
      priority: 0.8,
      changeFrequency: "weekly",
    },
    {
      url: "https://www.linkedin.com/in/stianlars1",
      lastModified: currentDate,
      priority: 0.8,
      changeFrequency: "monthly",
    },
    {
      url: "https://www.npmjs.com/~stianlars1",
      lastModified: currentDate,
      priority: 0.7,
      changeFrequency: "weekly",
    },
  ];

  // Technology-specific project GitHub repositories
  const githubRepoRoutes: MetadataRoute.Sitemap = projects
      .filter(project => project.githubUrl)
      .map(project => ({
        url: project.githubUrl!,
        lastModified: new Date(project.publishDate).toISOString(),
        priority: 0.5,
        changeFrequency: "monthly" as const,
      }));

  // Company and professional association URLs
  const professionalRoutes: MetadataRoute.Sitemap = [
    {
      url: "https://www.sparebank1.no",
      lastModified: currentDate,
      priority: 0.4,
      changeFrequency: "monthly",
    },
  ];

  // Additional technology and framework URLs for better SEO context
  const technologyRoutes: MetadataRoute.Sitemap = [
    {
      url: "https://nextjs.org",
      lastModified: currentDate,
      priority: 0.3,
      changeFrequency: "monthly",
    },
    {
      url: "https://react.dev",
      lastModified: currentDate,
      priority: 0.3,
      changeFrequency: "monthly",
    },
    {
      url: "https://www.typescriptlang.org",
      lastModified: currentDate,
      priority: 0.3,
      changeFrequency: "monthly",
    },
    {
      url: "https://kotlinlang.org",
      lastModified: currentDate,
      priority: 0.3,
      changeFrequency: "monthly",
    },
  ];

  return [
    ...staticRoutes,
    ...projectRoutes,
    ...npmRoutes,
    ...packageWebsiteRoutes,
    ...profileRoutes,
    ...githubRepoRoutes,
    ...professionalRoutes,
    ...technologyRoutes,
  ];
}