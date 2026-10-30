import type { Metadata, Viewport } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { JsonLd } from "@/components/site/json-ld";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
  weight: ["500", "600", "700", "800"],
});

// Canonical production URL — used for metadataBase, sitemap, OG, robots
const SITE_URL = "https://starsoftwares.in";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      "Star Softwares — NEP 2020 Aligned Customized School ERP Software | Digitally Connected",
    template: "%s | Star Softwares School ERP",
  },
  description:
    "Star Softwares builds NEP 2020 aligned, customized School ERP software since 2014. Manage admissions, academics, fees, digital learning, parent engagement & school-bus GPS tracking through one integrated platform. ISO Certified & MSME Registered. Book a free demo.",
  applicationName: "Star Softwares School ERP",
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
  keywords: [
    "School ERP",
    "School ERP Software",
    "School Management Software",
    "School Management System",
    "Star Softwares",
    "School ERP India",
    "NEP 2020 aligned software",
    "NEP aligned School ERP",
    "Digital Learning Platform",
    "LMS for Schools",
    "Parent Portal",
    "GPS School Bus Tracking",
    "RFID Attendance System",
    "Fee Management Software",
    "Student Information System",
    "Admission Management Software",
    "Examination Management System",
    "School Administration Software",
    "Customized School ERP",
    "School Software India",
  ],
  authors: [{ name: "Star Softwares", url: SITE_URL }],
  creator: "Star Softwares",
  publisher: "Star Softwares",
  category: "Education Technology",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    siteName: "Star Softwares",
    title:
      "Star Softwares — NEP 2020 Aligned Customized School ERP | Your Entire School, Digitally Connected",
    description:
      "Manage admissions, academics, fees, digital learning, parent portal & school-bus GPS tracking in one integrated, NEP 2020 aligned School ERP. ISO Certified & MSME Registered. Since 2014.",
    images: [
      {
        url: "/images/og-share.png",
        width: 1344,
        height: 768,
        alt: "Star Softwares — NEP 2020 Aligned Customized School ERP Software",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@starsoftwares",
    creator: "@starsoftwares",
    title:
      "Star Softwares — NEP 2020 Aligned Customized School ERP Software",
    description:
      "Your Entire School. One Digital Platform. Admissions, academics, fees, LMS, parent portal & GPS bus tracking. ISO Certified & MSME Registered. Since 2014.",
    images: ["/images/og-share.png"],
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/icon.svg" }],
  },
  manifest: "/manifest.webmanifest",
  other: {
    // Search engine verification placeholders — replace with real keys from
    // Google Search Console / Bing Webmaster Tools when available
    "google-site-verification": "GOOGLE_VERIFICATION_TOKEN",
    "msvalidate.01": "BING_VERIFICATION_TOKEN",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#1a3a8f" },
    { media: "(prefers-color-scheme: dark)", color: "#0f1e3d" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN" suppressHydrationWarning>
      <head>
        <JsonLd />
      </head>
      <body
        className={`${inter.variable} ${jakarta.variable} font-sans antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
