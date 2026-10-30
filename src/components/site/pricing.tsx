"use client";

import {
  Check,
  ArrowRight,
  Server,
  Boxes,
  Info,
  CheckCircle2,
  XCircle,
  Cpu,
  Wrench,
  Plug,
  FileCheck2,
} from "lucide-react";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const PLAN_1 = [
  "Customized School ERP implementation",
  "Agreed module configuration and customization",
  "School administration and admission workflows",
  "Student information management",
  "Fee and financial management",
  "Teacher and employee management",
  "Academic and examination workflows",
  "Student and parent portals",
  "LMS features as defined in the agreed scope",
  "Initial deployment and implementation support",
];

const PLAN_2 = [
  "Server/hosting arrangement under the agreed plan",
  "Routine technical maintenance",
  "Agreed bug fixes and support",
  "Application availability monitoring where included",
  "Technical assistance for the deployed system",
  "Maintenance of the configured school ERP environment",
];

const COMPARE = [
  { label: "One-time customization & implementation", icon: FileCheck2, ok: true },
  { label: "Recurring server & maintenance charges", icon: Server, ok: true },
  { label: "Additional hardware / integrations assessed separately", icon: Cpu, ok: true },
  { label: "Scope finalized before implementation", icon: Wrench, ok: true },
  { label: "Hidden hardware bundled in base price", icon: Plug, ok: false },
];

export function Pricing() {
  return (
    <section id="pricing" className="relative bg-brand-gradient-soft py-20 sm:py-24 md:py-28">
      <div className="pointer-events-none absolute inset-0 dot-pattern opacity-25" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Transparent Pricing"
          title="NEP-Aligned School Management."
          highlight="Transparent Pricing."
          description="A one-time deployment cost and a small monthly server & maintenance fee — no hidden bundles. Scope is finalized with your school before implementation."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-2 lg:items-stretch">
          {/* Card 1 */}
          <Reveal as="div" className="h-full">
            <div className="relative flex h-full flex-col overflow-hidden rounded-3xl border border-brand-blue/20 bg-card p-7 shadow-card-soft sm:p-8">
              <span className="absolute inset-x-0 top-0 h-1.5 bg-brand-gradient" />
              <div className="flex items-center gap-3">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-blue/10 text-brand-blue">
                  <Boxes className="h-6 w-6" />
                </span>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wide text-brand-blue">One-Time</p>
                  <h3 className="font-display text-lg font-bold text-brand-navy">Deployment Cost</h3>
                </div>
              </div>

              <div className="mt-5 flex items-end gap-2">
                <span className="font-display text-4xl font-extrabold text-brand-navy sm:text-5xl">₹54,000</span>
                <span className="pb-1.5 text-sm font-semibold text-muted-foreground">+ GST</span>
              </div>
              <p className="mt-1 text-sm font-medium text-muted-foreground">One-Time Implementation &amp; Deployment Fee</p>

              <ul className="mt-6 grid gap-2.5">
                {PLAN_1.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-brand-navy">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-blue/10 text-brand-blue">
                      <Check className="h-3.5 w-3.5" strokeWidth={3} />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex-1" />
              <Button asChild size="lg" className="mt-2 w-full bg-brand-gradient text-white shadow-glow rounded-full h-12 text-base">
                <a href="#contact" className="inline-flex items-center justify-center gap-2">
                  Discuss Your Requirements <ArrowRight className="h-5 w-5" />
                </a>
              </Button>
              <p className="mt-3 text-center text-[0.7rem] leading-relaxed text-muted-foreground">
                The final implementation scope must be confirmed with the school before committing to
                individual features, integrations, or advanced customizations.
              </p>
            </div>
          </Reveal>

          {/* Card 2 */}
          <Reveal as="div" delay={0.1} className="h-full">
            <div className="relative flex h-full flex-col overflow-hidden rounded-3xl border border-brand-teal/20 bg-card p-7 shadow-card-soft sm:p-8">
              <span className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-brand-teal to-brand-teal-light" />
              <div className="flex items-center gap-3">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-teal/10 text-brand-teal">
                  <Server className="h-6 w-6" />
                </span>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wide text-brand-teal">Monthly</p>
                  <h3 className="font-display text-lg font-bold text-brand-navy">Server &amp; Maintenance</h3>
                </div>
              </div>

              <div className="mt-5 flex items-end gap-2">
                <span className="font-display text-4xl font-extrabold text-brand-navy sm:text-5xl">₹2,500</span>
                <span className="pb-1.5 text-sm font-semibold text-muted-foreground">+ GST / month</span>
              </div>
              <p className="mt-1 text-sm font-medium text-muted-foreground">For Up to 1,000 Students</p>

              <ul className="mt-6 grid gap-2.5">
                {PLAN_2.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-brand-navy">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-teal/10 text-brand-teal">
                      <Check className="h-3.5 w-3.5" strokeWidth={3} />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex-1" />
              <Button asChild size="lg" variant="outline" className="mt-2 w-full rounded-full h-12 text-base border-brand-teal/30 text-brand-navy hover:bg-brand-teal/5">
                <a href="#contact" className="inline-flex items-center justify-center gap-2">
                  Get a Maintenance Plan <ArrowRight className="h-5 w-5" />
                </a>
              </Button>
              <p className="mt-3 text-center text-[0.7rem] leading-relaxed text-muted-foreground">
                Applies to schools with up to 1,000 students under the agreed hosting & maintenance scope.
              </p>
            </div>
          </Reveal>
        </div>

        {/* Note */}
        <Reveal delay={0.1}>
          <div className="mt-8 flex items-start gap-3 rounded-2xl border border-amber-200 bg-amber-50 p-5">
            <Info className="mt-0.5 h-5 w-5 shrink-0 text-amber-600" />
            <p className="text-sm leading-relaxed text-amber-900">
              Pricing is exclusive of applicable GST. The ₹2,500 monthly Server &amp; Maintenance plan
              applies to schools with up to 1,000 students under the agreed hosting and maintenance
              scope. The ₹54,000 one-time deployment covers agreed customization and implementation.
              Additional student capacity, premium infrastructure, hardware, third-party
              subscriptions, SMS/WhatsApp charges, payment gateway charges, GPS/RFID devices, and
              specialized integrations may require separate quotations. Not every hardware device or
              third-party subscription is included in these prices.
            </p>
          </div>
        </Reveal>

        {/* Comparison */}
        <Reveal delay={0.15}>
          <div className="mt-8 rounded-3xl border border-border/70 bg-card p-6 shadow-card-soft sm:p-8">
            <h3 className="font-display text-lg font-bold text-brand-navy">What's included — at a glance</h3>
            <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
              {COMPARE.map((c) => (
                <li key={c.label} className="flex items-center gap-3 rounded-xl bg-muted/40 px-4 py-3">
                  <span className={cn("flex h-7 w-7 shrink-0 items-center justify-center rounded-lg", c.ok ? "bg-emerald-100 text-emerald-600" : "bg-rose-100 text-rose-600")}>
                    {c.ok ? <CheckCircle2 className="h-4 w-4" /> : <XCircle className="h-4 w-4" />}
                  </span>
                  <span className="text-sm font-medium text-brand-navy">{c.label}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
