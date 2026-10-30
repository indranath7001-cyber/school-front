// Server component that injects JSON-LD structured data for richer Google results.
// Covers Organization, SoftwareApplication (Product), WebSite, and FAQPage schemas.

const SITE_URL = "https://school.starsoftwares.in";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Star Softwares",
  alternateName: "Star Softwares School ERP",
  url: SITE_URL,
  logo: `${SITE_URL}/icon.svg`,
  description:
    "Customized School ERP software company established in 2014. ISO Certified and MSME Registered. Builds NEP 2020 aligned school management software for admissions, academics, fees, digital learning, parent portal and school-bus GPS tracking.",
  foundingDate: "2014",
  slogan: "Your Entire School. Digitally Connected.",
  email: "softwaresstar@gmail.com",
  telephone: "+91-7003216162",
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+91-7003216162",
      contactType: "sales",
      email: "softwaresstar@gmail.com",
      areaServed: "IN",
      availableLanguage: ["English", "Hindi"],
    },
  ],
  address: {
    "@type": "PostalAddress",
    addressCountry: "IN",
  },
  knowsAbout: [
    "School ERP Software",
    "School Management System",
    "NEP 2020",
    "Digital Learning",
    "Learning Management System",
    "GPS School Bus Tracking",
    "RFID Attendance",
    "Fee Management Software",
    "Parent Portal",
    "Student Information System",
  ],
  identifier: [
    { "@type": "PropertyValue", name: "ISO Certified", value: "ISO Certified" },
    { "@type": "PropertyValue", name: "MSME Registered", value: "MSME Registered" },
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Star Softwares — School ERP Software",
  url: SITE_URL,
  publisher: { "@type": "Organization", name: "Star Softwares" },
  description:
    "NEP 2020 aligned customized School ERP software for admissions, academics, fees, digital learning, parent engagement and school-bus tracking.",
  inLanguage: "en-IN",
};

const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Star Softwares School ERP",
  applicationCategory: "EducationApplication",
  operatingSystem: "Web, Android, iOS",
  url: SITE_URL,
  description:
    "Customized, NEP 2020 aligned School ERP software for managing admissions, student information, fees, academics, examinations, digital learning (LMS), parent portal, and GPS school-bus tracking. Built around each institution's workflows since 2014.",
  offers: [
    {
      "@type": "Offer",
      name: "Deployment Cost (One-Time)",
      price: "54000",
      priceCurrency: "INR",
      description:
        "One-time implementation & deployment fee for customized School ERP. + GST. Scope finalized with the school before implementation.",
      url: `${SITE_URL}/#pricing`,
    },
    {
      "@type": "Offer",
      name: "Server & Maintenance (Monthly)",
      price: "2500",
      priceCurrency: "INR",
      description:
        "Monthly server & maintenance for up to 1,000 students. + GST. Includes hosting, routine maintenance, bug fixes and technical assistance.",
      url: `${SITE_URL}/#pricing`,
    },
  ],
  featureList: [
    "Centralized School Administration",
    "Admission & Enquiry Management",
    "Student Information System",
    "Fees & Financial Management",
    "Teacher & Employee Management",
    "Examination & Results",
    "Attendance Management",
    "Timetable & Scheduling",
    "Digital Notice Board",
    "Reports & Analytics",
    "Student & Parent Portals",
    "Customization & Role-Based Access",
    "Digital Learning / LMS",
    "RFID Attendance & GPS School Bus Tracking",
    "NEP 2020 Aligned Holistic Progress Cards",
  ],
  publisher: { "@type": "Organization", name: "Star Softwares" },
  inLanguage: "en-IN",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    reviewCount: "1",
    bestRating: "5",
    worstRating: "1",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is Star Softwares School ERP?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Star Softwares School ERP is a customized, NEP 2020 aligned school management software platform that brings admissions, academics, fees, digital learning, parent engagement and school-bus tracking into one integrated system. It has been built around each institution's workflows since 2014.",
      },
    },
    {
      "@type": "Question",
      name: "Is the software aligned with NEP 2020?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Star Softwares School ERP is designed to support the principles of NEP 2020, including holistic progress cards, competency-based assessment, staged curriculum mapping (Foundational, Preparatory, Middle, Secondary), and co-scholastic tracking.",
      },
    },
    {
      "@type": "Question",
      name: "How much does the School ERP cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The one-time deployment cost is ₹54,000 + GST, covering agreed customization and implementation. The recurring Server & Maintenance plan is ₹2,500 + GST per month for up to 1,000 students. Additional hardware, GPS/RFID devices, third-party subscriptions and specialized integrations are assessed separately.",
      },
    },
    {
      "@type": "Question",
      name: "Does the price include GPS bus tracking and RFID hardware?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. GPS tracking, RFID hardware, live location updates, automatic boarding alerts and hardware installation are configurable options and are not included in the base price. Their hardware, integration, connectivity and implementation requirements are assessed separately.",
      },
    },
    {
      "@type": "Question",
      name: "Is Star Softwares a certified company?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Star Softwares is ISO Certified and MSME Registered, and has been building customized software for schools since 2014.",
      },
    },
    {
      "@type": "Question",
      name: "How can I get a free demo of the School ERP?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You can book a free demo by filling the demo request form on the website, or by sending an enquiry on WhatsApp at +91 70032 16162. Enquiries on WhatsApp receive the fastest response. You can also call +91 70032 16162 or email softwaresstar@gmail.com.",
      },
    },
    {
      "@type": "Question",
      name: "Which modules are included in the School ERP?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Modules include centralized administration, admission & enquiry management, student information system, fees & financial management, teacher & employee management, examination & results, attendance, timetable, digital notice board, reports & analytics, student & parent portals, digital learning (LMS), and supported RFID attendance & GPS school-bus tracking. Modules are configurable to your school's needs.",
      },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: SITE_URL,
    },
  ],
};

export function JsonLd() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
}
