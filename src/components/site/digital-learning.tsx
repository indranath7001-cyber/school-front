"use client";

import {
  BookOpen,
  NotebookPen,
  GraduationCap,
  FileUp,
  ChartNoAxesCombined,
  Presentation,
  CalendarDays,
  Sparkles,
  ArrowRight,
  Laptop,
  Tablet,
  Smartphone,
  Clock,
  CheckCircle2,
  AlertCircle,
  Megaphone,
  TrendingUp,
} from "lucide-react";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const LMS = [
  { icon: BookOpen, title: "Digital Study Materials", desc: "Provide access to uploaded notes, learning materials, reference documents, and other academic resources.", tint: "bg-brand-blue/10 text-brand-blue" },
  { icon: NotebookPen, title: "Homework Management", desc: "Teachers can assign homework, share instructions, and organize academic tasks for students to access through their portal.", tint: "bg-brand-orange/10 text-brand-orange" },
  { icon: GraduationCap, title: "Classwork & Lesson Updates", desc: "Help students revisit classwork, lesson updates, and shared resources after school hours.", tint: "bg-brand-teal/10 text-brand-teal" },
  { icon: FileUp, title: "Assignment Submission", desc: "Support online assignment submission and review workflows where enabled in the configured LMS.", tint: "bg-violet-500/10 text-violet-600" },
  { icon: ChartNoAxesCombined, title: "Examination & Result Access", desc: "Let students and authorized parents access published examination results and relevant academic information.", tint: "bg-emerald-500/10 text-emerald-600" },
  { icon: Presentation, title: "Teacher Portal", desc: "Enable teachers to organize learning resources, maintain academic records, share assignments, and manage configured classroom workflows.", tint: "bg-rose-500/10 text-rose-600" },
  { icon: CalendarDays, title: "Academic Calendar", desc: "Keep students informed about school events, holidays, tests, assignment schedules, and academic activities.", tint: "bg-brand-blue/10 text-brand-blue" },
  { icon: Sparkles, title: "Engaging Digital Interface", desc: "Create a student-friendly experience with attractive dashboards, clear navigation, visual learning cards, and convenient access across supported devices.", tint: "bg-amber-500/10 text-amber-600" },
];

export function DigitalLearning() {
  return (
    <section id="digital-learning" className="relative overflow-hidden py-20 sm:py-24 md:py-28">
      <div className="pointer-events-none absolute -left-32 top-1/3 h-80 w-80 rounded-full bg-brand-orange/10 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Digital Learning Experience"
          title="Learning Doesn't Stop When the"
          highlight="School Bell Rings."
          description="Bring classroom learning into the digital world. Give students a convenient way to revisit lessons, complete assignments, access study resources, and stay connected with their teachers."
        />

        {/* Photo + device preview */}
        <div className="mt-14 grid items-center gap-8 lg:grid-cols-2">
          <Reveal className="relative">
            <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-tr from-brand-orange/20 via-brand-blue/10 to-brand-teal/15 blur-xl" />
            <div className="relative overflow-hidden rounded-[1.75rem] shadow-card-hover ring-1 ring-black/5">
              <img
                src="/images/digital-learning.png"
                alt="Indian school children learning with tablets and laptops in a modern computer lab"
                className="h-[340px] w-full object-cover sm:h-[420px]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/40 to-transparent" />
              {/* device pills */}
              <div className="absolute bottom-4 left-4 flex items-center gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1.5 text-xs font-semibold text-brand-navy backdrop-blur shadow-card-soft">
                  <Laptop className="h-3.5 w-3.5 text-brand-blue" /> Laptop
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1.5 text-xs font-semibold text-brand-navy backdrop-blur shadow-card-soft">
                  <Tablet className="h-3.5 w-3.5 text-brand-teal" /> Tablet
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1.5 text-xs font-semibold text-brand-navy backdrop-blur shadow-card-soft">
                  <Smartphone className="h-3.5 w-3.5 text-brand-orange" /> Mobile
                </span>
              </div>
            </div>
          </Reveal>

          {/* Sample student dashboard */}
          <Reveal delay={0.12}>
            <div className="rounded-3xl border border-border/70 bg-card p-5 shadow-card-hover sm:p-6">
              <div className="flex items-center justify-between border-b border-border/60 pb-3">
                <div className="flex items-center gap-2.5">
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-gradient text-white">
                    <GraduationCap className="h-5 w-5" />
                  </span>
                  <div className="leading-tight">
                    <p className="text-sm font-bold text-brand-navy">Aarav · Grade 8-B</p>
                    <p className="text-[0.65rem] text-muted-foreground">Student Dashboard</p>
                  </div>
                </div>
                <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-[0.65rem] font-semibold text-emerald-700 ring-1 ring-emerald-200">
                  Live
                </span>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-3">
                {/* Today's timetable */}
                <DashboardTile title="Today's Timetable" icon={Clock} tint="text-brand-blue">
                  <ul className="mt-1 space-y-1 text-[0.7rem] text-muted-foreground">
                    <li className="flex justify-between"><span>Maths</span><span>09:00</span></li>
                    <li className="flex justify-between"><span>Science</span><span>10:00</span></li>
                    <li className="flex justify-between"><span>English</span><span>11:30</span></li>
                  </ul>
                </DashboardTile>

                {/* Pending homework */}
                <DashboardTile title="Pending Homework" icon={NotebookPen} tint="text-brand-orange">
                  <div className="mt-1 space-y-1.5">
                    {["Maths Ch.7", "Science Lab"].map((h) => (
                      <div key={h} className="flex items-center gap-1.5 text-[0.7rem] text-brand-navy">
                        <AlertCircle className="h-3 w-3 text-brand-orange" /> {h}
                      </div>
                    ))}
                  </div>
                </DashboardTile>

                {/* Recent classwork */}
                <DashboardTile title="Recent Classwork" icon={BookOpen} tint="text-brand-teal">
                  <div className="mt-1 space-y-1.5">
                    {["History · Mughals", "Geo · Climate"].map((h) => (
                      <div key={h} className="flex items-center gap-1.5 text-[0.7rem] text-brand-navy">
                        <CheckCircle2 className="h-3 w-3 text-emerald-500" /> {h}
                      </div>
                    ))}
                  </div>
                </DashboardTile>

                {/* Upcoming exams */}
                <DashboardTile title="Upcoming Exams" icon={ClipboardExam} tint="text-violet-600">
                  <div className="mt-1 space-y-1 text-[0.7rem] text-muted-foreground">
                    <li className="flex justify-between"><span>Unit Test 2</span><span>12 Oct</span></li>
                    <li className="flex justify-between"><span>Half Yearly</span><span>28 Oct</span></li>
                  </div>
                </DashboardTile>
              </div>

              {/* study materials + announcements */}
              <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
                <DashboardTile title="New Study Materials" icon={FileUp} tint="text-brand-blue">
                  <div className="mt-1 flex flex-wrap gap-1.5">
                    {["Notes.pdf", "Quiz.pdf", "Slides.pdf"].map((f) => (
                      <span key={f} className="rounded-md bg-brand-blue/10 px-2 py-0.5 text-[0.62rem] font-medium text-brand-blue">{f}</span>
                    ))}
                  </div>
                </DashboardTile>
                <DashboardTile title="Announcements" icon={Megaphone} tint="text-rose-600">
                  <p className="mt-1 text-[0.7rem] leading-snug text-muted-foreground">
                    Sports day rehearsal on Friday. Bring your house jersey.
                  </p>
                </DashboardTile>
              </div>

              {/* academic progress */}
              <div className="mt-3 rounded-xl bg-muted/50 p-3">
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-1.5 text-[0.7rem] font-semibold text-brand-navy">
                    <TrendingUp className="h-3.5 w-3.5 text-emerald-600" /> Academic Progress
                  </span>
                  <span className="text-[0.7rem] font-bold text-emerald-600">87.4%</span>
                </div>
                <div className="mt-1.5 flex items-end gap-1">
                  {[55, 62, 58, 70, 74, 80, 87].map((h, i) => (
                    <span key={i} className="flex-1 rounded-t bg-brand-gradient" style={{ height: `${h * 0.18}rem` }} />
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* 8 feature cards */}
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {LMS.map((f, i) => (
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

        <Reveal delay={0.1} className="mt-12 flex justify-center">
          <Button asChild size="lg" className="bg-brand-gradient text-white shadow-glow rounded-full px-7 h-12 text-base">
            <a href="#contact" className="inline-flex items-center gap-2">
              See the Digital Learning Experience <ArrowRight className="h-5 w-5" />
            </a>
          </Button>
        </Reveal>
      </div>
    </section>
  );
}

function DashboardTile({
  title,
  icon: Icon,
  tint,
  children,
}: {
  title: string;
  icon: React.ElementType;
  tint: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-xl border border-border/60 bg-muted/30 p-3">
      <div className="flex items-center gap-1.5">
        <Icon className={cn("h-3.5 w-3.5", tint)} />
        <span className="text-[0.68rem] font-bold uppercase tracking-wide text-brand-navy">{title}</span>
      </div>
      {children}
    </div>
  );
}

// small inline icon substitute for clipboard-exam
function ClipboardExam(props: React.SVGProps<SVGSVGElement>) {
  return <ChartNoAxesCombined {...props} />;
}
