import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

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

export const metadata: Metadata = {
  title: "Star Softwares — NEP 2020 Aligned Customized School ERP Software | Your Entire School, Digitally Connected",
  description:
    "Star Softwares builds NEP 2020 aligned, customized School ERP software since 2014. Manage admissions, academics, fees, digital learning, parent engagement and school-bus tracking through one integrated platform. ISO Certified & MSME Registered.",
  keywords: [
    "School ERP",
    "School Management Software",
    "Star Softwares",
    "School ERP India",
    "Digital Learning",
    "Parent Portal",
    "GPS School Bus Tracking",
    "RFID Attendance",
    "LMS",
  ],
  authors: [{ name: "Star Softwares" }],
  openGraph: {
    title: "Star Softwares — Your Entire School. Digitally Connected.",
    description:
      "Customized School ERP software: admissions, academics, fees, digital learning, parent portal and school-bus tracking in one integrated platform.",
    siteName: "Star Softwares",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Star Softwares — School ERP Software",
    description: "Your Entire School. One Digital Platform.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${jakarta.variable} font-sans antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
