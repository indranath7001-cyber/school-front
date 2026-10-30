"use client";

import {
  LayoutDashboard,
  UserRoundPlus,
  ContactRound,
  WalletCards,
  UsersRound,
  ClipboardCheck,
  CalendarCheck,
  CalendarClock,
  BellRing,
  ChartNoAxesCombined,
  Smartphone,
  Settings2,
  ArrowUpRight,
  CalendarDays,
  NotebookPen,
  Cake,
  Building2,
  AlertCircle,
  ReceiptIndianRupee,
  FolderArchive,
  Network,
  Plug,
} from "lucide-react";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";
import { cn } from "@/lib/utils";

const FEATURES = [
  {
    icon: LayoutDashboard,
    title: "Centralized School Administration",
    desc: "Get a unified view of school operations, attendance, fees, outstanding dues, enquiries, approvals, and important activities from a centralized dashboard.",
    tint: "bg-brand-blue/10 text-brand-blue",
  },
  {
    icon: UserRoundPlus,
    title: "Admission & Enquiry Management",
    desc: "Manage admission enquiries, online applications, document uploads, optional examinations, application reviews, and admission workflows from one organized system.",
    tint: "bg-brand-teal/10 text-brand-teal",
  },
  {
    icon: ContactRound,
    title: "Student Information System",
    desc: "Maintain comprehensive student profiles, academic history, attendance records, guardian details, class assignments, and fee information in a centralized database.",
    tint: "bg-brand-orange/10 text-brand-orange",
  },
  {
    icon: WalletCards,
    title: "Fees & Financial Management",
    desc: "Configure class-wise and category-wise fee structures, concessions, payment records, outstanding dues, receipts, and financial reports. Support relevant payment methods according to the implemented configuration.",
    tint: "bg-emerald-500/10 text-emerald-600",
  },
  {
    icon: UsersRound,
    title: "Teacher & Employee Management",
    desc: "Organize teaching and non-teaching staff records, departments, attendance, leave, responsibilities, payroll information, and staff documentation.",
    tint: "bg-violet-500/10 text-violet-600",
  },
  {
    icon: ClipboardCheck,
    title: "Examination & Results",
    desc: "Manage examination schedules, marks entry, academic assessments, result preparation, and student performance records.",
    tint: "bg-brand-blue/10 text-brand-blue",
  },
  {
    icon: CalendarCheck,
    title: "Attendance Management",
    desc: "Maintain student and staff attendance records, monitor attendance trends, and provide authorized users with convenient access to relevant attendance information.",
    tint: "bg-brand-teal/10 text-brand-teal",
  },
  {
    icon: CalendarClock,
    title: "Timetable & Scheduling",
    desc: "Organize class timetables, academic calendars, school events, and teacher schedules. Support customized scheduling workflows according to school requirements.",
    tint: "bg-brand-orange/10 text-brand-orange",
  },
  {
    icon: BellRing,
    title: "Digital Notice Board",
    desc: "Publish school notices, announcements, examination dates, holidays, and important updates for the relevant students, parents, teachers, and staff.",
    tint: "bg-rose-500/10 text-rose-600",
  },
  {
    icon: ChartNoAxesCombined,
    title: "Reports & Analytics",
    desc: "Generate useful operational reports covering student records, attendance, fees, outstanding payments, academic performance, and other configured school activities.",
    tint: "bg-brand-blue/10 text-brand-blue",
  },
  {
    icon: Smartphone,
    title: "Student & Parent Portals",
    desc: "Provide dedicated portal access so students and parents can view relevant academic information, notices, attendance, fee details, results, and school updates.",
    tint: "bg-brand-teal/10 text-brand-teal",
  },
  {
    icon: Settings2,
    title: "Customization & Role-Based Access",
    desc: "Customize modules, reports, workflows, permissions, and school-specific requirements while giving authorized users access to the information relevant to their responsibilities.",
    tint: "bg-violet-500/10 text-violet-600",
  },
];

const EXTRAS = [
  { icon: CalendarDays, label: "School calendar & holidays" },
  { icon: NotebookPen, label: "Teacher daily logbook" },
  { icon: Cake, label: "Birthday management" },
  { icon: Building2, label: "Department & section management" },
  { icon: AlertCircle, label: "Fee defaulter lists" },
  { icon: ReceiptIndianRupee, label: "Staff payroll & payslips" },
  { icon: FolderArchive, label: "Document management" },
  { icon: Network, label: "Multi-campus management" },
  { icon: Plug, label: "Custom reports & integrations" },
];

export function Features() {
  return (
    <section id="features" className="relative bg-brand-gradient-soft py-20 sm:py-24 md:py-28">
      <div className="pointer-events-none absolute inset-0 dot-pattern opacity-30" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Complete School ERP"
          title="One Platform. Every Department."
          highlight="Complete School Visibility."
          description="From the first admission enquiry to everyday classroom activities, manage your school's operations through a customized, integrated system."
        />

        {/* 12 feature cards */}
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f, i) => (
            <Reveal key={f.title} delay={(i % 3) * 0.08} as="div">
              <article className="group relative h-full overflow-hidden rounded-2xl border border-border/70 bg-card p-6 shadow-card-soft transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card-hover">
                {/* hover gradient bar */}
                <span className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-brand-gradient transition-transform duration-300 group-hover:scale-x-100" />
                <div className="flex items-start justify-between">
                  <span className={cn("inline-flex h-12 w-12 items-center justify-center rounded-xl", f.tint)}>
                    <f.icon className="h-6 w-6" strokeWidth={2.1} />
                  </span>
                  <span className="text-[0.7rem] font-bold text-muted-foreground/60">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mt-4 font-display text-lg font-bold leading-snug text-brand-navy">
                  {f.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-brand-blue opacity-70 transition-all group-hover:gap-2 group-hover:opacity-100">
                  Explore Feature <ArrowUpRight className="h-3.5 w-3.5" />
                </span>
              </article>
            </Reveal>
          ))}
        </div>

        {/* Smaller highlights */}
        <Reveal delay={0.1} className="mt-12 rounded-3xl border border-border/70 bg-card p-6 shadow-card-soft sm:p-8">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <h3 className="font-display text-xl font-bold text-brand-navy">
              Plus many more configurable modules
            </h3>
            <p className="text-sm text-muted-foreground">
              Modules are configurable — your institution chooses what it needs.
            </p>
          </div>
          <ul className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-3">
            {EXTRAS.map((e) => (
              <li
                key={e.label}
                className="flex items-center gap-3 rounded-xl border border-border/60 bg-muted/40 px-3.5 py-3 transition-colors hover:bg-brand-blue/5"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-blue/10 text-brand-blue">
                  <e.icon className="h-4.5 w-4.5" />
                </span>
                <span className="text-sm font-medium text-brand-navy">{e.label}</span>
              </li>
            ))}
          </ul>
          <p className="mt-5 rounded-xl bg-amber-50 px-4 py-3 text-xs leading-relaxed text-amber-800 ring-1 ring-amber-200">
            <strong>Note:</strong> These features are presented as configurable modules. Not every
            third-party integration or optional hardware feature is included automatically in the
            standard implementation — scope is finalized with your school.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
