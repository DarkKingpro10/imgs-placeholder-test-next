import type { MetadataRoute } from "next";
import { locales, defaultLocale } from "./[lang]/dictionaries";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl =
    process.env.SITE_URL ?? process.env.NEXT_PUBLIC_SITE_URL ?? "https://your-site.com";

  const routes = [
    "",
    "static",
    "color-placeholder",
    "dynamic-placeholder",
    "no-placeholder",
    "skeleton",
  ];

  const urls: MetadataRoute.Sitemap = [];

  // add per-locale pages
  for (const lang of locales) {
    for (const route of routes) {
      const path = route === "" ? `/${lang}` : `/${lang}/${route}`;
      urls.push({
        url: `${baseUrl}${path}`,
        lastModified: new Date(),
        changeFrequency: route === "" ? "weekly" : "monthly",
        priority: route === "" ? 1 : 0.8,
        images: [
          `${baseUrl}/og/${lang}/opengraph-image?route=${encodeURIComponent(
            route || "/"
          )}&title=${encodeURIComponent(route === "" ? "Home" : route)}`,
        ],
      });
    }
  }

  // also add root canonical to default locale
  urls.push({
    url: baseUrl,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 1,
    images: [
      `${baseUrl}/og/${defaultLocale}/opengraph-image?route=/&title=${encodeURIComponent("Home")}`,
    ],
  });

  return urls;
}

