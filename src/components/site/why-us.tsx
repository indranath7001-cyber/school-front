"use client";

import {
  Wrench,
  CalendarClock,
  Blocks,
  MousePointerClick,
  Database,
  Headset,
  ShieldCheck,
  BadgeCheck,
  CalendarCheck,
  GraduationCap,
} from "lucide-react";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";
import { cn } from "@/lib/utils";

const REASONS = [
  { icon: GraduationCap, title: "NEP 2020 Aligned", desc: "Designed to support holistic progress cards, competency-based assessment and the staged curriculum structure envisioned by NEP 2020.", tint: "bg-brand-teal/10 text-brand-teal" },
  { icon: Wrench, title: "Customized Solutions", desc: "Designed around your institution's workflows and requirements.", tint: "bg-brand-blue/10 text-brand-blue" },
  { icon: CalendarClock, title: "Experienced Software Company", desc: "Established in 2014, with experience in customized software development.", tint: "bg-brand-teal/10 text-brand-teal" },
  { icon: Blocks, title: "Modular Architecture", desc: "Configure the modules your institution needs and expand the system as requirements evolve.", tint: "bg-brand-orange/10 text-brand-orange" },
  { icon: MousePointerClick, title: "User-Friendly Experience", desc: "Clear, role-specific interfaces for administrators, teachers, students, and parents.", tint: "bg-violet-500/10 text-violet-600" },
  { icon: Database, title: "Centralized Information", desc: "Bring relevant operational and academic information into one connected system.", tint: "bg-emerald-500/10 text-emerald-600" },
  { icon: Headset, title: "Ongoing Technical Support", desc: "Implementation, agreed maintenance, and technical support under the selected service arrangement.", tint: "bg-rose-500/10 text-rose-600" },
];

const TRUST = [
  { icon: GraduationCap, label: "NEP 2020 Aligned", sub: "National Education Policy ready" },
  { icon: ShieldCheck, label: "ISO Certified", sub: "Quality assured processes" },
  { icon: BadgeCheck, label: "MSME Registered", sub: "Government recognized" },
  { icon: CalendarCheck, label: "Established 2014", sub: "A decade of experience" },
];

export function WhyUs() {
  return (
    <section id="why-us" className="relative py-20 sm:py-24 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Why Star Softwares"
          title="Technology Built Around"
          highlight="Your School's Needs."
          description="We don't sell a boxed product. We build, configure and maintain a School ERP that fits how your institution actually works."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {REASONS.map((r, i) => (
            <Reveal key={r.title} delay={(i % 3) * 0.08} as="div">
              <div className="group h-full rounded-2xl border border-border/70 bg-card p-6 shadow-card-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover">
                <div className="flex items-center gap-3">
                  <span className={cn("inline-flex h-12 w-12 items-center justify-center rounded-xl", r.tint)}>
                    <r.icon className="h-6 w-6" />
                  </span>
                  <span className="font-display text-xs font-bold text-muted-foreground/50">
                    0{i + 1}
                  </span>
                </div>
                <h3 className="mt-4 font-display text-lg font-bold text-brand-navy">{r.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{r.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Trust indicators */}
        <Reveal delay={0.1}>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {TRUST.map((t) => (
              <div
                key={t.label}
                className="flex items-center gap-4 rounded-2xl border border-border/70 bg-brand-gradient-soft p-5 shadow-card-soft"
              >
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white text-brand-blue shadow-card-soft">
                  <t.icon className="h-7 w-7" />
                </span>
                <div>
                  <p className="font-display text-base font-bold text-brand-navy">{t.label}</p>
                  <p className="text-sm text-muted-foreground">{t.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
