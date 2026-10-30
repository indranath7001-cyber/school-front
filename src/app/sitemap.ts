import type { MetadataRoute } from "next";

const SITE_URL = "https://school.starsoftwares.in";

// Auto-generates /sitemap.xml for search engines.
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  // Single-page marketing site with anchored sections.
  // Each section anchor is listed so Google can index deep links.
  const sections = [
    { path: "/", anchor: "", priority: 1.0, changeFreq: "weekly" as const },
    { path: "/#features", anchor: "#features", priority: 0.9, changeFreq: "monthly" as const },
    { path: "/#nep-aligned", anchor: "#nep-aligned", priority: 0.9, changeFreq: "monthly" as const },
    { path: "/#digital-learning", anchor: "#digital-learning", priority: 0.8, changeFreq: "monthly" as const },
    { path: "/#parent-portal", anchor: "#parent-portal", priority: 0.8, changeFreq: "monthly" as const },
    { path: "/#bus-tracking", anchor: "#bus-tracking", priority: 0.8, changeFreq: "monthly" as const },
    { path: "/#pricing", anchor: "#pricing", priority: 0.9, changeFreq: "monthly" as const },
    { path: "/#contact", anchor: "#contact", priority: 0.9, changeFreq: "monthly" as const },
  ];

  return sections.map((s) => ({
    url: `${SITE_URL}/${s.anchor}`,
    lastModified,
    changeFrequency: s.changeFreq,
    priority: s.priority,
  }));
}
