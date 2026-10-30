"use client";

import {
  CalendarCheck,
  ReceiptText,
  GraduationCap,
  BookOpenCheck,
  Bell,
  MessageCircle,
  Contact,
  ShieldCheck,
  Wifi,
  BatteryFull,
  Signal,
} from "lucide-react";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";
import { cn } from "@/lib/utils";

const PARENT = [
  { icon: CalendarCheck, title: "Attendance Monitoring", desc: "Check your child's recorded attendance and relevant attendance updates.", tint: "bg-brand-teal/10 text-brand-teal" },
  { icon: ReceiptText, title: "Fee Management", desc: "View applicable fee details, pending dues, payment history, and available receipts.", tint: "bg-brand-blue/10 text-brand-blue" },
  { icon: GraduationCap, title: "Academic Progress", desc: "Access published examination results, academic updates, and other available performance records.", tint: "bg-brand-orange/10 text-brand-orange" },
  { icon: BookOpenCheck, title: "Homework & Classwork", desc: "Stay informed about assignments, classwork, shared study resources, and academic activities.", tint: "bg-violet-500/10 text-violet-600" },
  { icon: Bell, title: "School Notices", desc: "Receive important school announcements, timetable changes, examination information, and configured notifications.", tint: "bg-rose-500/10 text-rose-600" },
  { icon: MessageCircle, title: "Parent-School Communication", desc: "Use supported communication features to help parents stay connected with teachers and school administration.", tint: "bg-emerald-500/10 text-emerald-600" },
  { icon: Contact, title: "Student Profile", desc: "Access relevant student information and authorized school records from one convenient portal.", tint: "bg-amber-500/10 text-amber-600" },
];

export function ParentPortal() {
  return (
    <section id="parent-portal" className="relative bg-brand-gradient-soft py-20 sm:py-24 md:py-28">
      <div className="pointer-events-none absolute inset-0 dot-pattern opacity-30" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Parent Portal"
          title="Your Child's School Life,"
          highlight="Closer Than Ever."
          description="A reassuring, family-friendly view of everything happening at school — attendance, fees, results, notices and supported transport information, all in one parent app."
        />

        <div className="mt-14 grid items-center gap-10 lg:grid-cols-2">
          {/* Photo */}
          <Reveal className="relative order-2 lg:order-1">
            <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-tr from-brand-teal/20 via-brand-blue/10 to-brand-orange/15 blur-xl" />
            <div className="relative overflow-hidden rounded-[1.75rem] shadow-card-hover ring-1 ring-black/5">
              <img
                src="/images/parent-portal.png"
                alt="Happy Indian parents with their school-age child looking at a smartphone together at home"
                className="h-[360px] w-full object-cover sm:h-[460px]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/35 to-transparent" />
              <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-xl bg-white/90 px-3.5 py-2.5 backdrop-blur shadow-card-soft">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-100 text-emerald-600">
                  <ShieldCheck className="h-5 w-5" />
                </span>
                <div className="leading-tight">
                  <p className="text-xs font-bold text-brand-navy">Secure & Private</p>
                  <p className="text-[0.65rem] text-muted-foreground">Authorized parent access only</p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Phone mockup */}
          <Reveal delay={0.12} className="order-1 lg:order-2">
            <div className="flex justify-center">
              <PhoneMockup />
            </div>
          </Reveal>
        </div>

        {/* 7 feature cards */}
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {PARENT.map((f, i) => (
            <Reveal key={f.title} delay={(i % 4) * 0.07} as="div">
              <div className="group h-full rounded-2xl border border-border/70 bg-card p-5 shadow-card-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover">
                <span className={cn("inline-flex h-11 w-11 items-center justify-center rounded-xl", f.tint)}>
                  <f.icon className="h-5.5 w-5.5" />
                </span>
                <h3 className="mt-3.5 font-display text-base font-bold text-brand-navy">{f.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function PhoneMockup() {
  return (
    <div className="relative w-[260px] sm:w-[280px]">
      {/* glow */}
      <div className="absolute -inset-6 rounded-[3rem] bg-gradient-to-b from-brand-blue/20 to-brand-teal/20 blur-2xl" />
      <div className="relative rounded-[2.5rem] border-[10px] border-brand-navy bg-brand-navy p-1 shadow-card-hover">
        <div className="overflow-hidden rounded-[2rem] bg-background">
          {/* status bar */}
          <div className="flex items-center justify-between bg-brand-gradient px-5 pt-3 pb-2 text-white">
            <span className="text-[0.6rem] font-semibold">9:41</span>
            <div className="flex items-center gap-1">
              <Signal className="h-3 w-3" />
              <Wifi className="h-3 w-3" />
              <BatteryFull className="h-3.5 w-3.5" />
            </div>
          </div>
          {/* notch */}
          <div className="relative -mt-5 flex justify-center">
            <span className="h-5 w-24 rounded-b-2xl bg-brand-navy" />
          </div>

          {/* app content */}
          <div className="px-4 pb-5 pt-3">
            <div className="flex items-center justify-between">
              <div className="leading-tight">
                <p className="text-[0.6rem] text-white/70">Welcome back</p>
                <p className="text-sm font-bold text-white">Mr. Sharma</p>
              </div>
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/20 text-white font-bold text-xs">S</span>
            </div>

            {/* child card */}
            <div className="mt-3 rounded-2xl bg-white p-3 shadow-card-soft">
              <div className="flex items-center gap-2.5">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-orange/15 text-brand-orange font-bold text-sm">A</span>
                <div className="leading-tight">
                  <p className="text-sm font-bold text-brand-navy">Aarav Sharma</p>
                  <p className="text-[0.6rem] text-muted-foreground">Grade 8-B · Roll 14</p>
                </div>
                <span className="ml-auto rounded-full bg-emerald-50 px-2 py-0.5 text-[0.55rem] font-bold text-emerald-700">Present</span>
              </div>
            </div>

            {/* quick stats */}
            <div className="mt-2.5 grid grid-cols-3 gap-2">
              {[
                { k: "94%", v: "Attend", c: "text-brand-teal" },
                { k: "₹0", v: "Dues", c: "text-emerald-600" },
                { k: "87%", v: "Score", c: "text-brand-orange" },
              ].map((s) => (
                <div key={s.v} className="rounded-xl bg-muted/60 p-2 text-center">
                  <p className={cn("text-sm font-extrabold", s.c)}>{s.k}</p>
                  <p className="text-[0.55rem] text-muted-foreground">{s.v}</p>
                </div>
              ))}
            </div>

            {/* menu list */}
            <div className="mt-2.5 space-y-1.5">
              {[
                { icon: BookOpenCheck, t: "Homework", s: "2 pending", c: "text-brand-orange" },
                { icon: ReceiptText, t: "Fees", s: "Paid · receipt", c: "text-brand-blue" },
                { icon: Bell, t: "Notice", s: "Sports day · Fri", c: "text-rose-600" },
              ].map((m) => (
                <div key={m.t} className="flex items-center gap-2.5 rounded-xl bg-white p-2 shadow-sm">
                  <span className={cn("flex h-7 w-7 items-center justify-center rounded-lg bg-muted", m.c)}>
                    <m.icon className="h-3.5 w-3.5" />
                  </span>
                  <div className="leading-tight">
                    <p className="text-[0.7rem] font-bold text-brand-navy">{m.t}</p>
                    <p className="text-[0.55rem] text-muted-foreground">{m.s}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
