"use client";

import {
  GraduationCap,
  FileSpreadsheet,
  Layers,
  Target,
  BookMarked,
  Compass,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";
import { cn } from "@/lib/utils";

const NEP_POINTS = [
  {
    icon: FileSpreadsheet,
    title: "Holistic Progress Card",
    desc: "360-degree assessment covering scholastic and co-scholastic areas, aligned with NEP 2020's multidimensional report card approach.",
    tint: "bg-brand-blue/10 text-brand-blue",
  },
  {
    icon: Layers,
    title: "Staged Curriculum Mapping",
    desc: "Support Foundational, Preparatory, Middle and Secondary stage structures as defined by the NEP 2020 curricular stages.",
    tint: "bg-brand-teal/10 text-brand-teal",
  },
  {
    icon: Target,
    title: "Competency-Based Assessment",
    desc: "Record competency and learning-outcome-based assessments instead of purely marks-driven evaluation.",
    tint: "bg-brand-orange/10 text-brand-orange",
  },
  {
    icon: BookMarked,
    title: "Multilingual & Foundational Literacy",
    desc: "Track foundational literacy, numeracy and mother-tongue instruction milestones as emphasized by NEP.",
    tint: "bg-violet-500/10 text-violet-600",
  },
  {
    icon: Compass,
    title: "Experiential & Vocational Learning",
    desc: "Capture experiential learning, bagless days and vocational exposure activities as part of student records.",
    tint: "bg-emerald-500/10 text-emerald-600",
  },
  {
    icon: Sparkles,
    title: "Cognitive & Co-Scholastic Tracking",
    desc: "Maintain records of arts, sports, wellness and critical-thinking activities alongside academic progress.",
    tint: "bg-rose-500/10 text-rose-600",
  },
];

export function NepAligned() {
  return (
    <section id="nep-aligned" className="relative overflow-hidden py-20 sm:py-24 md:py-28">
      <div className="pointer-events-none absolute -top-20 -left-20 h-80 w-80 rounded-full bg-brand-teal/15 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-80 w-80 rounded-full bg-brand-orange/10 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="NEP 2020 Aligned"
          title="Built Around India's"
          highlight="National Education Policy."
          description="Star Softwares School ERP is designed to support the principles of NEP 2020 — holistic, multidimensional, competency-based education — so your institution stays aligned with national direction."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3 lg:items-start">
          {/* Highlight banner */}
          <Reveal className="lg:col-span-3">
            <div className="relative overflow-hidden rounded-3xl bg-brand-navy p-6 text-white shadow-card-hover sm:p-8">
              <div className="pointer-events-none absolute inset-0 grid-pattern opacity-[0.08]" />
              <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-brand-teal/30 blur-3xl" />
              <div className="relative flex flex-col items-start gap-5 md:flex-row md:items-center md:justify-between">
                <div className="flex items-start gap-4">
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-brand-gradient text-white shadow-glow">
                    <GraduationCap className="h-7 w-7" />
                  </span>
                  <div>
                    <h3 className="font-display text-xl font-extrabold sm:text-2xl">
                      NEP 2020 ready — out of the box
                    </h3>
                    <p className="mt-1.5 max-w-2xl text-sm leading-relaxed text-white/75">
                      From holistic progress cards to competency-based assessments and staged
                      curriculum mapping, the ERP supports the structural and pedagogical shifts
                      envisioned by the National Education Policy 2020.
                    </p>
                  </div>
                </div>
                <span className="inline-flex shrink-0 items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-bold text-white ring-1 ring-white/15">
                  National Education Policy 2020
                </span>
              </div>
            </div>
          </Reveal>

          {/* 6 NEP points */}
          {NEP_POINTS.map((p, i) => (
            <Reveal key={p.title} delay={(i % 3) * 0.08} as="div">
              <div className="group h-full rounded-2xl border border-border/70 bg-card p-6 shadow-card-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover">
                <span className={cn("inline-flex h-12 w-12 items-center justify-center rounded-xl", p.tint)}>
                  <p.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-4 font-display text-lg font-bold text-brand-navy">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1} className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <p className="text-sm text-muted-foreground">
            Want to see how the ERP maps to your school's NEP compliance?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-brand-gradient px-6 py-2.5 text-sm font-semibold text-white shadow-glow transition-opacity hover:opacity-95"
          >
            Request an NEP-aligned demo <ArrowRight className="h-4 w-4" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
