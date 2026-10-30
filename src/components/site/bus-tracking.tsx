"use client";

import {
  Nfc,
  MapPinned,
  Smartphone,
  BusFront,
  BellRing,
  ShieldCheck,
  Bus,
  School,
  Navigation,
  Radio,
  AlertTriangle,
} from "lucide-react";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";
import { cn } from "@/lib/utils";

const TRACK = [
  { icon: Nfc, title: "RFID-Based Student Identification", desc: "Support RFID-based student identification and configured entry or attendance recording using compatible RFID cards and readers.", tint: "bg-brand-blue/10 text-brand-blue" },
  { icon: MapPinned, title: "GPS School-Bus Location", desc: "Allow authorized users to view school-bus location information through a configured GPS tracking solution, subject to hardware availability and connectivity.", tint: "bg-brand-teal/10 text-brand-teal" },
  { icon: Smartphone, title: "Parent Transport Portal", desc: "Provide a parent-facing interface for available bus location and transport information associated with their child's assigned route.", tint: "bg-brand-orange/10 text-brand-orange" },
  { icon: BusFront, title: "Transport Administration", desc: "Organize bus records, assigned routes, student-route associations, and relevant transport information.", tint: "bg-violet-500/10 text-violet-600" },
  { icon: BellRing, title: "Transport Event Visibility", desc: "Support configured transport alerts or boarding-related notifications when the required RFID, GPS, device, and communication integrations are implemented.", tint: "bg-rose-500/10 text-rose-600" },
  { icon: ShieldCheck, title: "Authorized Access", desc: "Restrict access to student and transport information through appropriate account permissions and school-configured access rules.", tint: "bg-emerald-500/10 text-emerald-600" },
];

export function BusTracking() {
  return (
    <section id="bus-tracking" className="relative overflow-hidden py-20 sm:py-24 md:py-28">
      <div className="pointer-events-none absolute -right-32 top-1/4 h-80 w-80 rounded-full bg-brand-teal/15 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="RFID Attendance & GPS Bus Tracking"
          title="More Visibility."
          highlight="Greater Peace of Mind."
          description="Extend digital school management beyond the classroom with supported RFID-based identification and school-bus GPS tracking options."
        />

        {/* Map dashboard + photo + mobile */}
        <div className="mt-14 grid gap-6 lg:grid-cols-3 lg:items-stretch">
          {/* Photo */}
          <Reveal className="relative overflow-hidden rounded-3xl shadow-card-soft ring-1 ring-border/70 lg:row-span-2">
            <img
              src="/images/school-bus.png"
              alt="Indian school bus with a student in uniform boarding at the school gate"
              className="h-56 w-full object-cover lg:h-full"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/65 via-brand-navy/10 to-transparent" />
            <div className="absolute bottom-5 left-5 right-5">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-orange/90 px-3 py-1 text-[0.7rem] font-bold text-white backdrop-blur">
                <Radio className="h-3.5 w-3.5" /> Live boarding scan
              </span>
              <h3 className="mt-2 font-display text-lg font-bold text-white">
                Student boarded Bus 04 · Route East
              </h3>
              <p className="mt-1 text-sm text-white/80">RFID verified · 07:42 AM</p>
            </div>
          </Reveal>

          {/* GPS Map dashboard */}
          <Reveal delay={0.1} className="rounded-3xl border border-border/70 bg-card p-5 shadow-card-soft sm:p-6 lg:col-span-2">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border/60 pb-3">
              <div className="flex items-center gap-2.5">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-gradient text-white">
                  <Navigation className="h-5 w-5" />
                </span>
                <div className="leading-tight">
                  <p className="text-sm font-bold text-brand-navy">Transport Control · GPS Map</p>
                  <p className="text-[0.65rem] text-muted-foreground">Route 04 · 28 students on board</p>
                </div>
              </div>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-1 text-[0.65rem] font-bold text-emerald-700 ring-1 ring-emerald-200">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" /> Tracking Active
              </span>
            </div>

            {/* SVG map */}
            <div className="relative mt-4 h-56 overflow-hidden rounded-2xl bg-brand-sky/40 ring-1 ring-brand-blue/10 sm:h-64">
              <MapSvg />
              {/* floating mobile card */}
              <div className="absolute bottom-3 right-3 w-36 rounded-xl bg-white/95 p-2.5 shadow-card-hover backdrop-blur sm:w-40">
                <div className="flex items-center justify-between">
                  <span className="text-[0.6rem] font-bold uppercase text-muted-foreground">ETA</span>
                  <Bus className="h-3.5 w-3.5 text-brand-blue" />
                </div>
                <p className="text-base font-extrabold text-brand-navy">8 min</p>
                <div className="mt-1 flex items-center gap-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  <span className="h-1 flex-1 rounded-full bg-brand-blue/15" />
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-orange" />
                </div>
                <p className="mt-1 text-[0.58rem] text-muted-foreground">2 stops away</p>
              </div>
            </div>

            {/* route chips */}
            <div className="mt-3 flex flex-wrap gap-2">
              {[
                { n: "Bus 01", s: "On time", c: "bg-emerald-50 text-emerald-700 ring-emerald-200" },
                { n: "Bus 04", s: "Tracking", c: "bg-brand-blue/10 text-brand-blue ring-brand-blue/20" },
                { n: "Bus 07", s: "Delayed 4m", c: "bg-amber-50 text-amber-700 ring-amber-200" },
                { n: "Bus 09", s: "On time", c: "bg-emerald-50 text-emerald-700 ring-emerald-200" },
              ].map((b) => (
                <span key={b.n} className={cn("inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[0.68rem] font-semibold ring-1", b.c)}>
                  <BusFront className="h-3.5 w-3.5" /> {b.n} · {b.s}
                </span>
              ))}
            </div>
          </Reveal>
        </div>

        {/* 6 feature cards */}
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {TRACK.map((f, i) => (
            <Reveal key={f.title} delay={(i % 3) * 0.08} as="div">
              <div className="group h-full rounded-2xl border border-border/70 bg-card p-6 shadow-card-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover">
                <span className={cn("inline-flex h-12 w-12 items-center justify-center rounded-xl", f.tint)}>
                  <f.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-4 font-display text-lg font-bold text-brand-navy">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* implementation note */}
        <Reveal delay={0.1}>
          <div className="mt-10 flex items-start gap-3 rounded-2xl border border-amber-200 bg-amber-50 p-5">
            <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-amber-600" />
            <p className="text-sm leading-relaxed text-amber-900">
              <strong>Important implementation note:</strong> GPS tracking, RFID hardware, live
              location updates, automatic boarding alerts, and hardware installation are
              <strong> not included in the base price</strong>. These are configurable options whose
              hardware, integration, connectivity, and implementation requirements must be assessed
              separately.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function MapSvg() {
  return (
    <svg viewBox="0 0 600 260" className="h-full w-full" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="route" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="oklch(0.45 0.17 258)" />
          <stop offset="100%" stopColor="oklch(0.60 0.13 190)" />
        </linearGradient>
      </defs>
      {/* grid */}
      <g stroke="oklch(0.45 0.17 258 / 0.08)" strokeWidth="1">
        {[40, 100, 160, 220, 280, 340, 400, 460, 520].map((x) => (
          <line key={x} x1={x} y1="0" x2={x} y2="260" />
        ))}
        {[40, 100, 160, 220].map((y) => (
          <line key={y} x1="0" y1={y} x2="600" y2={y} />
        ))}
      </g>
      {/* roads */}
      <path d="M0,120 C120,90 200,180 320,140 C420,108 500,160 600,120" fill="none" stroke="oklch(0.45 0.17 258 / 0.12)" strokeWidth="26" strokeLinecap="round" />
      <path d="M0,120 C120,90 200,180 320,140 C420,108 500,160 600,120" fill="none" stroke="white" strokeWidth="20" strokeLinecap="round" opacity="0.5" />
      {/* route line animated */}
      <path d="M40,118 C120,90 200,180 320,140 C400,114 470,150 540,128" fill="none" stroke="url(#route)" strokeWidth="4" strokeLinecap="round" className="animate-dash" />
      {/* school marker */}
      <g transform="translate(540,128)">
        <circle r="14" fill="oklch(0.45 0.17 258)" />
        <circle r="22" fill="oklch(0.45 0.17 258 / 0.18)" />
        <foreignObject x="-8" y="-8" width="16" height="16">
          <div className="flex h-4 w-4 items-center justify-center text-white">
            <School style={{ width: 12, height: 12 }} />
          </div>
        </foreignObject>
      </g>
      {/* stops */}
      {[
        [40, 118], [180, 150], [320, 140],
      ].map(([x, y], i) => (
        <g key={i} transform={`translate(${x},${y})`}>
          <circle r="5" fill="white" stroke="oklch(0.60 0.13 190)" strokeWidth="2.5" />
        </g>
      ))}
      {/* bus marker (moving) */}
      <g transform="translate(180,150)">
        <circle r="20" fill="oklch(0.74 0.17 60 / 0.25)" className="animate-pulse-ring" />
        <circle r="14" fill="oklch(0.74 0.17 60)" />
        <foreignObject x="-9" y="-9" width="18" height="18">
          <div className="flex h-[18px] w-[18px] items-center justify-center text-white">
            <Bus style={{ width: 13, height: 13 }} />
          </div>
        </foreignObject>
      </g>
    </svg>
  );
}
