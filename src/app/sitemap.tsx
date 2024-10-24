import { MetadataRoute } from "next";

const DOMAIN = "https://stianlarsen.com";
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticRoutes: MetadataRoute.Sitemap = [""].map((route) => ({
    url: `${DOMAIN}/${route}`,
    lastModified: new Date().toISOString(),
    priority: 1,
    changeFrequency: "weekly",
  }));

  return [...staticRoutes];
}
