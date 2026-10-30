"use client";

import {
  UserRoundPlus,
  LayoutDashboard,
  GraduationCap,
  Backpack,
  Users,
  WalletCards,
  BookOpen,
  ClipboardCheck,
  BusFront,
  ChartNoAxesCombined,
  Network,
} from "lucide-react";
import { Reveal } from "./reveal";
import { cn } from "@/lib/utils";

const NODES = [
  { icon: UserRoundPlus, label: "Admissions", tint: "bg-brand-blue/10 text-brand-blue" },
  { icon: LayoutDashboard, label: "Administration", tint: "bg-brand-teal/10 text-brand-teal" },
  { icon: GraduationCap, label: "Teachers", tint: "bg-violet-500/10 text-violet-600" },
  { icon: Backpack, label: "Students", tint: "bg-brand-orange/10 text-brand-orange" },
  { icon: Users, label: "Parents", tint: "bg-emerald-500/10 text-emerald-600" },
  { icon: WalletCards, label: "Accounts & Fees", tint: "bg-brand-blue/10 text-brand-blue" },
  { icon: BookOpen, label: "LMS & Academics", tint: "bg-brand-teal/10 text-brand-teal" },
  { icon: ClipboardCheck, label: "Examination", tint: "bg-rose-500/10 text-rose-600" },
  { icon: BusFront, label: "Transport", tint: "bg-amber-500/10 text-amber-600" },
  { icon: ChartNoAxesCombined, label: "Reports & Analytics", tint: "bg-brand-blue/10 text-brand-blue" },
];

export function Digitalization() {
  return (
    <section id="digitalization" className="relative overflow-hidden bg-brand-navy py-20 text-white sm:py-24 md:py-28">
      <div className="pointer-events-none absolute inset-0 opacity-30 grid-pattern" style={{ color: "white" }} />
      <div className="pointer-events-none absolute -top-20 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-brand-blue/30 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="flex flex-col items-center gap-4 text-center mx-auto max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-white/80 ring-1 ring-white/15">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-teal" />
            School-Wide Digitalization
          </span>
          <h2 className="font-display text-3xl font-extrabold leading-[1.12] tracking-tight sm:text-4xl md:text-[2.85rem]">
            From Paper Registers to a{" "}
            <span className="text-gradient-brand">Connected Digital School.</span>
          </h2>
          <p className="max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
            Bring your school's daily workflows together with one customized platform, reducing
            fragmented processes and improving visibility across departments.
          </p>
        </Reveal>

        {/* Hub & spoke */}
        <Reveal delay={0.15} className="mt-16">
          <div className="relative mx-auto hidden h-[520px] max-w-4xl md:block">
            {/* connecting lines */}
            <svg className="absolute inset-0 h-full w-full" viewBox="0 0 800 520" preserveAspectRatio="none">
              <defs>
                <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="oklch(0.62 0.16 255)" />
                  <stop offset="100%" stopColor="oklch(0.72 0.12 185)" />
                </linearGradient>
              </defs>
              {NODES.map((_, i) => {
                const angle = (i / NODES.length) * Math.PI * 2 - Math.PI / 2;
                const cx = 400, cy = 260, r = 200;
                const x = cx + r * Math.cos(angle);
                const y = cy + r * Math.sin(angle);
                return (
                  <line
                    key={i}
                    x1={cx}
                    y1={cy}
                    x2={x}
                    y2={y}
                    stroke="url(#lineGrad)"
                    strokeWidth="1.5"
                    strokeOpacity="0.45"
                    className="animate-dash"
                  />
                );
              })}
            </svg>

            {/* central hub */}
            <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
              <div className="relative flex h-36 w-36 flex-col items-center justify-center rounded-full bg-brand-gradient text-center shadow-glow ring-4 ring-white/15">
                <Network className="h-8 w-8 text-white" />
                <span className="mt-1.5 font-display text-sm font-extrabold leading-tight text-white">
                  School ERP
                </span>
                <span className="absolute inset-0 -z-10 animate-pulse-ring rounded-full bg-brand-teal/40" />
              </div>
            </div>

            {/* surrounding nodes */}
            {NODES.map((n, i) => {
              const angle = (i / NODES.length) * Math.PI * 2 - Math.PI / 2;
              const cx = 50, cy = 50, r = 38;
              const left = cx + r * Math.cos(angle);
              const top = cy + r * Math.sin(angle);
              return (
                <div
                  key={n.label}
                  className="absolute z-10 flex w-32 -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-1.5"
                  style={{ left: `${left}%`, top: `${top}%` }}
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/95 shadow-card-hover ring-1 ring-white/20">
                    <span className={cn("flex h-10 w-10 items-center justify-center rounded-xl", n.tint)}>
                      <n.icon className="h-5 w-5" />
                    </span>
                  </div>
                  <span className="rounded-full bg-white/10 px-2.5 py-1 text-center text-[0.7rem] font-semibold text-white/90 ring-1 ring-white/10 backdrop-blur">
                    {n.label}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Mobile stacked layout */}
          <div className="md:hidden">
            <div className="mx-auto mb-6 flex w-40 flex-col items-center gap-1.5 rounded-3xl bg-brand-gradient p-5 shadow-glow">
              <Network className="h-7 w-7 text-white" />
              <span className="font-display text-sm font-extrabold text-white">School ERP</span>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {NODES.map((n) => (
                <div key={n.label} className="flex items-center gap-2.5 rounded-2xl bg-white/10 p-3 ring-1 ring-white/10 backdrop-blur">
                  <span className={cn("flex h-9 w-9 items-center justify-center rounded-lg bg-white/90", n.tint)}>
                    <n.icon className="h-4.5 w-4.5" />
                  </span>
                  <span className="text-xs font-semibold text-white/90">{n.label}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mx-auto mt-12 max-w-2xl text-center text-sm text-white/60">
            The system is modular yet integrated — enable the departments your school needs today,
            and expand as your requirements evolve.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
