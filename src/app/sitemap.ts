import { MetadataRoute } from "next";
import { getChapters } from "@/lib/content";

const BASE_URL = "https://www.aisreal.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const chapters = getChapters();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: BASE_URL, priority: 1.0, changeFrequency: "weekly" },
    { url: `${BASE_URL}/chapters`, priority: 0.9, changeFrequency: "weekly" },
    { url: `${BASE_URL}/morals`, priority: 0.8, changeFrequency: "weekly" },
    { url: `${BASE_URL}/about`, priority: 0.6, changeFrequency: "monthly" },
    { url: `${BASE_URL}/story`, priority: 0.6, changeFrequency: "monthly" },
  ];

  const chapterRoutes: MetadataRoute.Sitemap = chapters.map((ch) => ({
    url: `${BASE_URL}/chapters/${ch.slug}`,
    priority: 0.8,
    changeFrequency: "weekly" as const,
  }));

  const conversationRoutes: MetadataRoute.Sitemap = chapters.flatMap((ch) =>
    ch.conversations.map((conv) => ({
      url: `${BASE_URL}/chapters/${ch.slug}/${conv.slug}`,
      lastModified: conv.date ? new Date(conv.date) : undefined,
      priority: 0.7,
      changeFrequency: "monthly" as const,
    }))
  );

  return [...staticRoutes, ...chapterRoutes, ...conversationRoutes];
}
