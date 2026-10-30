"use client";

import {
  FileStack,
  Network,
  BookLock,
  EyeOff,
  ArrowRight,
  MonitorPlay,
} from "lucide-react";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";
import { cn } from "@/lib/utils";

const PROBLEMS = [
  {
    icon: FileStack,
    title: "Manual Administration",
    desc: "Replace scattered registers, spreadsheets, and repetitive paperwork with centralized digital records.",
    tint: "from-rose-500/15 to-rose-500/5 text-rose-600",
  },
  {
    icon: Network,
    title: "Disconnected Communication",
    desc: "Bring teachers, students, parents, and school administration together through connected portals.",
    tint: "from-amber-500/15 to-amber-500/5 text-amber-600",
  },
  {
    icon: BookLock,
    title: "Limited Learning Access",
    desc: "Let students access homework, classwork, learning resources, and academic updates beyond classroom hours.",
    tint: "from-brand-blue/15 to-brand-blue/5 text-brand-blue",
  },
  {
    icon: EyeOff,
    title: "Difficult Student Monitoring",
    desc: "Make attendance, academic progress, fee status, and supported school-transport tracking easier to monitor.",
    tint: "from-emerald-500/15 to-emerald-500/5 text-emerald-600",
  },
];

export function Problem() {
  return (
    <section id="problem" className="relative py-20 sm:py-24 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="The Challenge"
          title="Less Paperwork. More Learning."
          highlight="Better Management."
          description="Traditional schools juggle registers, disconnected apps and endless paperwork. Star Softwares brings it all into one connected digital platform — so your team can focus on education, not administration."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-2 lg:items-stretch">
          {/* Split layout: photo + dashboard */}
          <Reveal className="relative overflow-hidden rounded-3xl shadow-card-soft ring-1 ring-border/70">
            <img
              src="/images/admin-desk.png"
              alt="Indian school administrator reviewing records at a modern desk"
              className="h-72 w-full object-cover lg:h-full"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/70 via-brand-navy/10 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1 text-[0.7rem] font-semibold text-white backdrop-blur ring-1 ring-white/20">
                <MonitorPlay className="h-3.5 w-3.5" /> Before
              </span>
              <h3 className="mt-2 font-display text-xl font-bold text-white">
                Buried under registers & spreadsheets
              </h3>
              <p className="mt-1 text-sm text-white/80">
                Fragmented records slow down every department.
              </p>
            </div>
          </Reveal>

          {/* Dashboard mockup */}
          <Reveal delay={0.12} className="rounded-3xl border border-border/70 bg-card p-6 shadow-card-soft sm:p-8">
            <div className="flex items-center justify-between">
              <div>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-teal/15 px-3 py-1 text-[0.7rem] font-semibold text-brand-teal">
                  <MonitorPlay className="h-3.5 w-3.5" /> After · Connected Dashboard
                </span>
                <h3 className="mt-3 font-display text-xl font-bold text-brand-navy">
                  One screen. Total visibility.
                </h3>
              </div>
            </div>

            <div className="mt-5 grid grid-cols-3 gap-3">
              {[
                { k: "1,284", v: "Students", c: "text-brand-blue" },
                { k: "94.6%", v: "Attendance", c: "text-emerald-600" },
                { k: "₹4.8L", v: "Fees Today", c: "text-brand-orange" },
              ].map((s) => (
                <div key={s.v} className="rounded-xl bg-muted/60 p-3 text-center">
                  <p className={cn("font-display text-lg font-extrabold", s.c)}>{s.k}</p>
                  <p className="text-[0.65rem] font-medium text-muted-foreground">{s.v}</p>
                </div>
              ))}
            </div>

            <div className="mt-4 space-y-2">
              {[
                { t: "Admission enquiries", w: "82%", c: "bg-brand-blue" },
                { t: "Fee collection", w: "78%", c: "bg-brand-teal" },
                { t: "Homework completion", w: "65%", c: "bg-brand-orange" },
                { t: "Bus on-time", w: "91%", c: "bg-emerald-500" },
              ].map((r) => (
                <div key={r.t} className="flex items-center gap-3">
                  <span className="w-40 text-xs font-medium text-brand-navy">{r.t}</span>
                  <div className="h-2 flex-1 overflow-hidden rounded-full bg-muted">
                    <div className={cn("h-full rounded-full", r.c)} style={{ width: r.w }} />
                  </div>
                  <span className="w-9 text-right text-xs font-semibold text-muted-foreground">{r.w}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        {/* 4 problem cards */}
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {PROBLEMS.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.08} as="div">
              <div className="group h-full rounded-2xl border border-border/70 bg-card p-6 shadow-card-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover">
                <span
                  className={cn(
                    "inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br",
                    p.tint
                  )}
                >
                  <p.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-4 font-display text-lg font-bold text-brand-navy">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-brand-blue opacity-0 transition-opacity group-hover:opacity-100">
                  Centralized in one ERP <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
