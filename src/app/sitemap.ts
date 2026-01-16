import type { MetadataRoute } from "next";
import { brands } from "@/data/brands";
import { siteConfig } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.baseUrl;

  const brandPages = brands.map((brand) => ({
    url: `${baseUrl}/${brand.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    ...brandPages,
  ];
}
