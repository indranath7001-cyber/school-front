"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  PlayCircle,
  ShieldCheck,
  CalendarCheck,
  WalletCards,
  BellRing,
  MapPinned,
  BookOpen,
  Sparkles,
  CheckCircle2,
  GraduationCap,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const TRUST = [
  { icon: GraduationCap, label: "NEP 2020 Aligned" },
  { icon: Sparkles, label: "Customized for Your School" },
  { icon: ShieldCheck, label: "ISO Certified Company" },
  { icon: CalendarCheck, label: "Established in 2014" },
];

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-mesh pt-28 pb-20 sm:pt-32 md:pt-36 md:pb-28">
      {/* decorative blobs */}
      <div className="pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full bg-brand-teal/20 blur-3xl" />
      <div className="pointer-events-none absolute top-40 -left-24 h-80 w-80 rounded-full bg-brand-blue/20 blur-3xl" />
      <div className="pointer-events-none absolute inset-0 grid-pattern opacity-40 mask-fade-b" />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-10 lg:px-8">
        {/* LEFT */}
        <div className="flex flex-col items-start gap-7">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-brand-blue shadow-card-soft ring-1 ring-brand-blue/10"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-pulse-ring rounded-full bg-brand-teal" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-teal" />
            </span>
            NEP 2020 Aligned · Smarter Schools Start Here
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-brand-navy sm:text-5xl md:text-6xl"
          >
            Your Entire School.{" "}
            <span className="text-gradient-brand">One Digital Platform.</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.14, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-2 rounded-full bg-brand-gradient px-4 py-1.5 text-xs font-bold text-white shadow-glow"
          >
            <GraduationCap className="h-4 w-4" /> NEP 2020 Aligned Software
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            Transform the way your school operates. Simplify administration, engage
            students with interactive digital learning, keep parents connected, and
            bring every department together with one customizable School ERP.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.24, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <Button asChild size="lg" className="bg-brand-gradient text-white shadow-glow hover:opacity-95 rounded-full px-7 h-12 text-base">
              <a href="#contact" className="inline-flex items-center gap-2">
                Book a Free Demo <ArrowRight className="h-5 w-5" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full px-7 h-12 text-base border-brand-blue/20 text-brand-navy hover:bg-brand-blue/5 hover:text-brand-navy">
              <a href="#features" className="inline-flex items-center gap-2">
                <PlayCircle className="h-5 w-5 text-brand-teal" /> Explore All Features
              </a>
            </Button>
          </motion.div>

          <motion.ul
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.32, ease: [0.22, 1, 0.36, 1] }}
            className="grid grid-cols-1 gap-2.5 pt-2 sm:grid-cols-2 sm:gap-3 lg:grid-cols-2"
          >
            {TRUST.map((t) => (
              <li key={t.label} className="flex items-center gap-2 text-sm font-medium text-brand-navy">
                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-brand-blue/10 text-brand-blue">
                  <t.icon className="h-4 w-4" />
                </span>
                {t.label}
              </li>
            ))}
          </motion.ul>
        </div>

        {/* RIGHT — photo + floating mockups */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-xl lg:max-w-none"
        >
          <div className="relative">
            {/* gradient frame */}
            <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-tr from-brand-blue/20 via-brand-teal/15 to-brand-orange/15 blur-xl" />
            <div className="relative overflow-hidden rounded-[1.75rem] shadow-card-hover ring-1 ring-black/5">
              <img
                src="/images/hero-classroom.png"
                alt="Happy Indian school students learning with a friendly teacher in a modern classroom using Star Softwares School ERP"
                className="h-[340px] w-full object-cover sm:h-[440px] lg:h-[500px]"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/35 via-transparent to-transparent" />
              {/* small badge bottom-left */}
              <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-xl bg-white/90 px-3 py-2 backdrop-blur shadow-card-soft">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-gradient text-white">
                  <CheckCircle2 className="h-4.5 w-4.5" />
                </span>
                <div className="leading-tight">
                  <p className="text-xs font-bold text-brand-navy">Connected Ecosystem</p>
                  <p className="text-[0.65rem] text-muted-foreground">Admin · Teachers · Students · Parents</p>
                </div>
              </div>
            </div>

            {/* Floating mockup: Attendance */}
            <FloatCard className="-left-4 top-8 sm:-left-8 animate-float-slow" delay={0.5}>
              <div className="flex items-center justify-between">
                <span className="text-[0.65rem] font-semibold uppercase tracking-wide text-muted-foreground">Attendance</span>
                <CalendarCheck className="h-3.5 w-3.5 text-brand-teal" />
              </div>
              <p className="mt-1 text-xl font-extrabold text-brand-navy">94.6%</p>
              <div className="mt-2 flex items-end gap-1">
                {[40, 65, 50, 80, 70, 90, 60].map((h, i) => (
                  <span key={i} className="w-1.5 rounded-full bg-brand-blue/70" style={{ height: `${h * 0.22}rem` }} />
                ))}
              </div>
              <p className="mt-1.5 text-[0.6rem] text-emerald-600 font-semibold">▲ 2.1% this week</p>
            </FloatCard>

            {/* Floating mockup: Fee collection */}
            <FloatCard className="-right-3 top-20 sm:-right-6 animate-float-slower" delay={0.7}>
              <div className="flex items-center justify-between">
                <span className="text-[0.65rem] font-semibold uppercase tracking-wide text-muted-foreground">Fee Collection</span>
                <WalletCards className="h-3.5 w-3.5 text-brand-blue" />
              </div>
              <p className="mt-1 text-xl font-extrabold text-brand-navy">₹ 4.82L</p>
              <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-brand-blue/10">
                <div className="h-full w-[78%] rounded-full bg-brand-gradient" />
              </div>
              <p className="mt-1.5 text-[0.6rem] text-muted-foreground">78% collected · 22% pending</p>
            </FloatCard>

            {/* Floating mockup: LMS homework */}
            <FloatCard className="-left-3 bottom-24 sm:-left-6 animate-float-slower" delay={0.9}>
              <div className="flex items-center gap-2">
                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-brand-orange/15 text-brand-orange">
                  <BookOpen className="h-4 w-4" />
                </span>
                <div className="leading-tight">
                  <p className="text-[0.7rem] font-bold text-brand-navy">New Homework</p>
                  <p className="text-[0.6rem] text-muted-foreground">Maths · Chapter 7</p>
                </div>
              </div>
            </FloatCard>

            {/* Floating mockup: Bus location */}
            <FloatCard className="-right-4 bottom-10 sm:-right-8 animate-float-slow" delay={1.1}>
              <div className="flex items-center justify-between">
                <span className="text-[0.65rem] font-semibold uppercase tracking-wide text-muted-foreground">Bus Location</span>
                <MapPinned className="h-3.5 w-3.5 text-brand-teal" />
              </div>
              <p className="mt-1 text-[0.78rem] font-bold text-brand-navy">Route 4 · ETA 8 min</p>
              <div className="mt-2 flex items-center gap-1">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                <span className="h-1 flex-1 rounded-full bg-brand-blue/15" />
                <span className="h-1.5 w-1.5 rounded-full bg-brand-orange" />
              </div>
            </FloatCard>

            {/* Floating mockup: Parent notification */}
            <FloatCard className="right-6 -bottom-3 sm:right-12 animate-float-slow" delay={1.3}>
              <div className="flex items-center gap-2">
                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-brand-blue text-white">
                  <BellRing className="h-3.5 w-3.5" />
                </span>
                <div className="leading-tight">
                  <p className="text-[0.7rem] font-bold text-brand-navy">Parent Alert Sent</p>
                  <p className="text-[0.6rem] text-muted-foreground">PTA meet · Sat 10 AM</p>
                </div>
              </div>
            </FloatCard>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function FloatCard({
  children,
  className,
  delay,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 10 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={`absolute z-10 w-36 rounded-2xl border border-white/60 bg-white/95 p-3 shadow-card-hover backdrop-blur-sm sm:w-40 ${className ?? ""}`}
    >
      {children}
    </motion.div>
  );
}
