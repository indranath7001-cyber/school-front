import { Navbar } from "@/components/site/navbar";
import { Hero } from "@/components/site/hero";
import { Problem } from "@/components/site/problem";
import { Features } from "@/components/site/features";
import { DigitalLearning } from "@/components/site/digital-learning";
import { ParentPortal } from "@/components/site/parent-portal";
import { BusTracking } from "@/components/site/bus-tracking";
import { UserExperiences } from "@/components/site/user-experiences";
import { Digitalization } from "@/components/site/digitalization";
import { NepAligned } from "@/components/site/nep-aligned";
import { WhyUs } from "@/components/site/why-us";
import { Pricing } from "@/components/site/pricing";
import { Implementation } from "@/components/site/implementation";
import { Contact } from "@/components/site/contact";
import { Footer } from "@/components/site/footer";
import { Marquee } from "@/components/site/marquee";
import { WhatsAppButton } from "@/components/site/whatsapp-button";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Marquee />
        <Problem />
        <Features />
        <NepAligned />
        <DigitalLearning />
        <ParentPortal />
        <BusTracking />
        <UserExperiences />
        <Digitalization />
        <WhyUs />
        <Pricing />
        <Implementation />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
