"use client";

import {
  UserRoundPlus,
  ContactRound,
  WalletCards,
  UsersRound,
  ClipboardCheck,
  CalendarCheck,
  CalendarClock,
  BellRing,
  ChartNoAxesCombined,
  BookOpen,
  BusFront,
  Nfc,
  ShieldCheck,
  Smartphone,
  Settings2,
} from "lucide-react";

const ITEMS = [
  { icon: UserRoundPlus, label: "Admissions" },
  { icon: ContactRound, label: "Student Information" },
  { icon: WalletCards, label: "Fee Management" },
  { icon: UsersRound, label: "Staff Management" },
  { icon: ClipboardCheck, label: "Examinations" },
  { icon: CalendarCheck, label: "Attendance" },
  { icon: CalendarClock, label: "Timetable" },
  { icon: BellRing, label: "Notice Board" },
  { icon: ChartNoAxesCombined, label: "Reports & Analytics" },
  { icon: BookOpen, label: "Digital Learning (LMS)" },
  { icon: BusFront, label: "Bus Tracking" },
  { icon: Nfc, label: "RFID Attendance" },
  { icon: Smartphone, label: "Parent & Student Portals" },
  { icon: Settings2, label: "Role-Based Access" },
  { icon: ShieldCheck, label: "ISO Certified" },
];

export function Marquee() {
  return (
    <section aria-label="Capabilities" className="border-y border-border/60 bg-white py-5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="mb-4 text-center text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
          Everything your school needs — in one connected platform
        </p>
      </div>
      <div className="relative overflow-hidden">
        {/* fade edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-white to-transparent sm:w-28" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-white to-transparent sm:w-28" />
        <div className="flex w-max animate-[marquee_38s_linear_infinite] items-center gap-3 px-4">
          {[...ITEMS, ...ITEMS].map((item, i) => (
            <span
              key={i}
              className="inline-flex shrink-0 items-center gap-2 rounded-full border border-border/70 bg-muted/40 px-4 py-2 text-sm font-medium text-brand-navy"
            >
              <item.icon className="h-4 w-4 text-brand-blue" />
              {item.label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
