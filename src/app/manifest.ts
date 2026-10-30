import type { MetadataRoute } from "next";

// Auto-generates /manifest.webmanifest for PWA installability & better SEO signals.
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Star Softwares — NEP 2020 Aligned Customized School ERP Software",
    short_name: "Star Softwares",
    description:
      "NEP 2020 aligned customized School ERP software for admissions, academics, fees, digital learning, parent portal & school-bus GPS tracking. ISO Certified & MSME Registered. Since 2014.",
    start_url: "/",
    display: "standalone",
    orientation: "portrait-primary",
    background_color: "#ffffff",
    theme_color: "#1a3a8f",
    lang: "en-IN",
    categories: ["education", "business", "productivity"],
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "any",
      },
    ],
    shortcuts: [
      {
        name: "Features",
        short_name: "Features",
        url: "/#features",
      },
      {
        name: "Pricing",
        short_name: "Pricing",
        url: "/#pricing",
      },
      {
        name: "Book a Free Demo",
        short_name: "Demo",
        url: "/#contact",
      },
    ],
  };
}
