"use client";

import {
  Building2,
  GraduationCap,
  Backpack,
  Users,
  ArrowLeftRight,
} from "lucide-react";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";
import { cn } from "@/lib/utils";

const ROLES = [
  {
    icon: Building2,
    title: "School Administration",
    desc: "Centralized operational visibility, admissions, financial oversight, reporting, staff management, and configured system controls.",
    tint: "from-brand-blue to-brand-blue-light",
    img: "/images/admin-desk.png",
  },
  {
    icon: GraduationCap,
    title: "Teachers",
    desc: "Academic planning, timetables, attendance, assignments, examinations, learning resources, and student records.",
    tint: "from-brand-teal to-brand-teal-light",
    img: "/images/students-reading.png",
  },
  {
    icon: Backpack,
    title: "Students",
    desc: "A convenient digital destination for homework, classwork, study materials, notices, examinations, and results.",
    tint: "from-brand-orange to-brand-amber",
    img: "/images/digital-learning.png",
  },
  {
    icon: Users,
    title: "Parents",
    desc: "A connected view of attendance, fees, academic updates, notices, and supported school-transport information.",
    tint: "from-violet-500 to-violet-400",
    img: "/images/parent-portal.png",
  },
];

export function UserExperiences() {
  return (
    <section id="experiences" className="relative py-20 sm:py-24 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Connected User Experiences"
          title="Designed Around"
          highlight="Everyone in Your School."
          description="One integrated platform, four role-specific experiences — with information flowing seamlessly between administrators, teachers, students and parents."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {ROLES.map((r, i) => (
            <Reveal key={r.title} delay={i * 0.08} as="div">
              <article className="group relative h-full overflow-hidden rounded-3xl border border-border/70 bg-card shadow-card-soft transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card-hover">
                <div className="relative h-36 overflow-hidden">
                  <img
                    src={r.img}
                    alt={r.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className={cn("absolute inset-0 bg-gradient-to-t opacity-80 mix-blend-multiply", r.tint)} />
                  <span className="absolute -bottom-6 left-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-brand-navy shadow-card-hover ring-1 ring-black/5">
                    <r.icon className="h-7 w-7" />
                  </span>
                </div>
                <div className="p-5 pt-9">
                  <h3 className="font-display text-lg font-bold text-brand-navy">{r.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{r.desc}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {/* flow diagram */}
        <Reveal delay={0.1}>
          <div className="mt-10 rounded-3xl border border-border/70 bg-brand-gradient-soft p-6 sm:p-8">
            <div className="flex flex-col items-center gap-4 lg:flex-row lg:justify-center lg:gap-2">
              {ROLES.map((r, i) => (
                <div key={r.title} className="flex items-center gap-2">
                  <div className="flex items-center gap-2.5 rounded-full bg-white px-4 py-2.5 shadow-card-soft">
                    <span className={cn("flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br text-white", r.tint)}>
                      <r.icon className="h-4.5 w-4.5" />
                    </span>
                    <span className="text-sm font-bold text-brand-navy">{r.title.split(" ")[0]}</span>
                  </div>
                  {i < ROLES.length - 1 && (
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-blue/10 text-brand-blue">
                      <ArrowLeftRight className="h-4 w-4" />
                    </span>
                  )}
                </div>
              ))}
            </div>
            <p className="mt-5 text-center text-sm text-muted-foreground">
              Information flows between roles through a single integrated platform — no duplicate data, no disconnected apps.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
