"use client";

import {
  MessagesSquare,
  SlidersHorizontal,
  Rocket,
  ArrowRight,
} from "lucide-react";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

const STEPS = [
  {
    no: "01",
    icon: MessagesSquare,
    title: "Discuss",
    desc: "Understand your school's current workflows, pain points and goals. We review your departments, modules needed, and the scope of customization required — then finalize a clear implementation plan with you.",
    tint: "from-brand-blue to-brand-blue-light",
  },
  {
    no: "02",
    icon: SlidersHorizontal,
    title: "Customize & Implement",
    desc: "We configure and customize the School ERP around your institution's workflows — student information, fees, academics, LMS, parent portal and more. Data setup, role-based access and integrations are aligned to your requirements.",
    tint: "from-brand-teal to-brand-teal-light",
  },
  {
    no: "03",
    icon: Rocket,
    title: "Launch & Support",
    desc: "Your school goes live with onboarding and training for administrators, teachers, students and parents. Ongoing hosting, maintenance and technical support continue under the agreed service arrangement.",
    tint: "from-brand-orange to-brand-amber",
  },
];

export function Implementation() {
  return (
    <section id="implementation" className="relative py-20 sm:py-24 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Implementation Process"
          title="Your Digital School Journey in"
          highlight="Three Steps."
          description="A structured, transparent path from first conversation to a fully supported, live School ERP."
        />

        {/* Desktop horizontal timeline */}
        <div className="relative mt-16 hidden md:block">
          {/* connecting line */}
          <div className="absolute left-0 right-0 top-12 h-0.5 bg-gradient-to-r from-brand-blue via-brand-teal to-brand-orange opacity-30" />
          <div className="grid grid-cols-3 gap-6">
            {STEPS.map((s, i) => (
              <Reveal key={s.no} delay={i * 0.12} as="div">
                <div className="relative flex flex-col items-center text-center">
                  <div className={`relative z-10 flex h-24 w-24 items-center justify-center rounded-3xl bg-gradient-to-br ${s.tint} text-white shadow-glow ring-8 ring-background`}>
                    <s.icon className="h-10 w-10" />
                    <span className="absolute -right-2 -top-2 flex h-7 w-7 items-center justify-center rounded-full bg-white font-display text-xs font-extrabold text-brand-navy shadow-card-soft ring-1 ring-border">
                      {s.no}
                    </span>
                  </div>
                  <h3 className="mt-5 font-display text-xl font-bold text-brand-navy">{s.title}</h3>
                  <p className="mt-2 max-w-xs text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Mobile vertical timeline */}
        <div className="mt-12 space-y-6 md:hidden">
          {STEPS.map((s, i) => (
            <Reveal key={s.no} delay={i * 0.1} as="div">
              <div className="relative flex gap-4">
                {/* line */}
                {i < STEPS.length - 1 && (
                  <div className="absolute left-9 top-20 h-[calc(100%-3rem)] w-0.5 bg-gradient-to-b from-brand-blue/40 to-brand-teal/40" />
                )}
                <div className={`relative z-10 flex h-18 w-18 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${s.tint} text-white shadow-glow`} style={{ height: "4.5rem", width: "4.5rem" }}>
                  <s.icon className="h-8 w-8" />
                  <span className="absolute -right-1 -top-1 flex h-6 w-6 items-center justify-center rounded-full bg-white font-display text-[0.65rem] font-extrabold text-brand-navy shadow-card-soft ring-1 ring-border">
                    {s.no}
                  </span>
                </div>
                <div className="pt-1">
                  <h3 className="font-display text-lg font-bold text-brand-navy">{s.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1} className="mt-12 flex justify-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-brand-gradient px-7 py-3 text-sm font-semibold text-white shadow-glow transition-opacity hover:opacity-95"
          >
            Start with a Free Discussion <ArrowRight className="h-4 w-4" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
