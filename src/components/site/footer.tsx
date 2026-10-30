"use client";

import {
  GraduationCap,
  ShieldCheck,
  BadgeCheck,
  CalendarCheck,
  Phone,
  Mail,
  Globe,
  ArrowRight,
  Linkedin,
  Facebook,
  Twitter,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const WA_NUMBER = "917003216162";
const WA_TEXT =
  "Hello Star Softwares, I'm interested in your School ERP. Please share more details.";
const waLink = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(WA_TEXT)}`;

const NAV = [
  { label: "Home", href: "#home" },
  { label: "Features", href: "#features" },
  { label: "Digital Learning", href: "#digital-learning" },
  { label: "Parent Portal", href: "#parent-portal" },
  { label: "Bus Tracking", href: "#bus-tracking" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

const MODULES = [
  "Admissions",
  "Student Information",
  "Fees & Finance",
  "Examinations",
  "Digital Learning (LMS)",
  "Parent Portal",
  "GPS Bus Tracking",
  "Reports & Analytics",
];

export function Footer() {
  return (
    <footer className="relative mt-auto overflow-hidden bg-brand-navy text-white">
      <div className="pointer-events-none absolute inset-0 grid-pattern opacity-[0.07]" />
      <div className="pointer-events-none absolute -top-24 left-1/3 h-72 w-72 rounded-full bg-brand-blue/25 blur-3xl" />

      {/* CTA strip */}
      <div className="relative border-b border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 px-4 py-10 sm:px-6 md:flex-row lg:px-8">
          <div className="text-center md:text-left">
            <h3 className="font-display text-2xl font-extrabold leading-tight sm:text-3xl">
              Ready to digitize your school?
            </h3>
            <p className="mt-2 text-sm text-white/70">
              Book a free, personalized demo of the NEP-aligned Star Softwares School ERP today.
            </p>
          </div>
          <div className="flex flex-col items-center gap-3 sm:flex-row">
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-bold text-white shadow-lg transition-opacity hover:opacity-95"
            >
              <svg viewBox="0 0 32 32" className="h-4 w-4" fill="currentColor" aria-hidden="true">
                <path d="M16.003 3.2c-7.06 0-12.8 5.74-12.8 12.8 0 2.257.592 4.46 1.713 6.402L3.2 28.8l6.608-1.732a12.74 12.74 0 0 0 6.195 1.572h.005c7.06 0 12.8-5.74 12.8-12.8C28.808 8.94 23.063 3.2 16.003 3.2zm5.826 15.098c-.319-.16-1.886-.93-2.176-1.036-.292-.107-.505-.16-.717.16-.213.32-.825 1.036-1.012 1.249-.186.213-.373.24-.692.08-.32-.16-1.35-.498-2.572-1.587-.95-.848-1.593-1.895-1.78-2.214-.186-.32-.02-.493.14-.652.144-.143.32-.373.48-.56.16-.186.213-.32.32-.533.107-.213.053-.4-.027-.56-.08-.16-.717-1.727-.982-2.364-.259-.62-.521-.536-.717-.546l-.61-.01c-.213 0-.56.08-.853.4-.293.32-1.12 1.094-1.12 2.665 0 1.57 1.146 3.087 1.306 3.3.16.213 2.253 3.44 5.456 4.823.762.329 1.357.525 1.82.672.765.243 1.461.209 2.011.127.613-.091 1.886-.771 2.152-1.516.266-.745.266-1.384.186-1.517-.08-.133-.293-.213-.613-.373z" />
              </svg>
              WhatsApp Enquiry
            </a>
            <Button asChild size="lg" className="bg-white text-brand-navy shadow-glow rounded-full px-7 h-12 hover:bg-white/90">
              <a href="#contact" className="inline-flex items-center gap-2">
                Book a Free Demo <ArrowRight className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-12">
          {/* Brand */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-2.5">
              <span className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-brand-gradient shadow-glow">
                <GraduationCap className="h-6 w-6 text-white" strokeWidth={2.4} />
                <span className="absolute -right-0.5 -top-0.5 h-2.5 w-2.5 rounded-full bg-brand-orange ring-2 ring-brand-navy" />
              </span>
              <div className="leading-none">
                <p className="font-display text-lg font-extrabold">Star Softwares</p>
                <p className="text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-white/50">
                  Customized School ERP
                </p>
              </div>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/65">
              Your entire school, digitally connected. Customized School ERP software for
              admissions, academics, fees, digital learning, parent engagement and school-bus
              tracking — built around your institution since 2014.
            </p>

            <div className="mt-5 flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-teal/15 px-3 py-1.5 text-[0.7rem] font-semibold text-brand-teal-light ring-1 ring-brand-teal/25">
                <GraduationCap className="h-3.5 w-3.5" /> NEP 2020 Aligned
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1.5 text-[0.7rem] font-semibold text-white/80 ring-1 ring-white/10">
                <ShieldCheck className="h-3.5 w-3.5 text-brand-teal" /> ISO Certified
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1.5 text-[0.7rem] font-semibold text-white/80 ring-1 ring-white/10">
                <BadgeCheck className="h-3.5 w-3.5 text-brand-teal" /> MSME Registered
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1.5 text-[0.7rem] font-semibold text-white/80 ring-1 ring-white/10">
                <CalendarCheck className="h-3.5 w-3.5 text-brand-teal" /> Since 2014
              </span>
            </div>

            <div className="mt-6 flex items-center gap-3">
              {[Linkedin, Facebook, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="social link"
                  className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 text-white/70 ring-1 ring-white/10 transition-colors hover:bg-white/10 hover:text-white"
                >
                  <Icon className="h-4.5 w-4.5" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-3">
            <p className="font-display text-sm font-bold uppercase tracking-wide text-white/50">
              Navigate
            </p>
            <ul className="mt-4 grid grid-cols-2 gap-2.5 lg:grid-cols-1">
              {NAV.map((n) => (
                <li key={n.href}>
                  <a
                    href={n.href}
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Modules */}
          <div className="lg:col-span-3">
            <p className="font-display text-sm font-bold uppercase tracking-wide text-white/50">
              Modules
            </p>
            <ul className="mt-4 grid gap-2.5">
              {MODULES.map((m) => (
                <li key={m} className="text-sm text-white/70">{m}</li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-2">
            <p className="font-display text-sm font-bold uppercase tracking-wide text-white/50">
              Contact
            </p>
            <ul className="mt-4 space-y-3">
              <li>
                <a href="tel:+917003216162" className="flex items-center gap-2.5 text-sm text-white/70 hover:text-white">
                  <Phone className="h-4 w-4 text-brand-teal" /> +91 70032 16162
                </a>
              </li>
              <li>
                <a href={waLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 text-sm text-white/70 hover:text-white">
                  <svg viewBox="0 0 32 32" className="h-4 w-4 text-[#25D366]" fill="currentColor" aria-hidden="true">
                    <path d="M16.003 3.2c-7.06 0-12.8 5.74-12.8 12.8 0 2.257.592 4.46 1.713 6.402L3.2 28.8l6.608-1.732a12.74 12.74 0 0 0 6.195 1.572h.005c7.06 0 12.8-5.74 12.8-12.8C28.808 8.94 23.063 3.2 16.003 3.2zm5.826 15.098c-.319-.16-1.886-.93-2.176-1.036-.292-.107-.505-.16-.717.16-.213.32-.825 1.036-1.012 1.249-.186.213-.373.24-.692.08-.32-.16-1.35-.498-2.572-1.587-.95-.848-1.593-1.895-1.78-2.214-.186-.32-.02-.493.14-.652.144-.143.32-.373.48-.56.16-.186.213-.32.32-.533.107-.213.053-.4-.027-.56-.08-.16-.717-1.727-.982-2.364-.259-.62-.521-.536-.717-.546l-.61-.01c-.213 0-.56.08-.853.4-.293.32-1.12 1.094-1.12 2.665 0 1.57 1.146 3.087 1.306 3.3.16.213 2.253 3.44 5.456 4.823.762.329 1.357.525 1.82.672.765.243 1.461.209 2.011.127.613-.091 1.886-.771 2.152-1.516.266-.745.266-1.384.186-1.517-.08-.133-.293-.213-.613-.373z" />
                  </svg>
                  WhatsApp Enquiry
                </a>
              </li>
              <li>
                <a href="mailto:softwaresstar@gmail.com" className="flex items-center gap-2.5 text-sm text-white/70 hover:text-white">
                  <Mail className="h-4 w-4 text-brand-teal" /> softwaresstar@gmail.com
                </a>
              </li>
              <li>
                <a href="https://starsoftwares.in" className="flex items-center gap-2.5 text-sm text-white/70 hover:text-white">
                  <Globe className="h-4 w-4 text-brand-teal" /> starsoftwares.in
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-center sm:flex-row sm:text-left">
          <p className="text-xs text-white/50">
            © {new Date().getFullYear()} Star Softwares. All rights reserved.
          </p>
          <p className="text-xs text-white/50">
            NEP 2020 Aligned · Customized School ERP · ISO Certified · MSME Registered · Established 2014
          </p>
        </div>
      </div>
    </footer>
  );
}
