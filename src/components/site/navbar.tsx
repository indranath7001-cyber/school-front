"use client";

import { useEffect, useState } from "react";
import { Menu, X, GraduationCap, ArrowRight, ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Features", href: "#features" },
  { label: "Digital Learning", href: "#digital-learning" },
  { label: "Parent Portal", href: "#parent-portal" },
  { label: "Bus Tracking", href: "#bus-tracking" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/85 backdrop-blur-xl border-b border-border/70 shadow-[0_4px_24px_-12px_rgba(26,40,90,0.18)]"
          : "bg-transparent"
      )}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8 md:h-18">
        {/* Brand */}
        <a href="#home" className="flex items-center gap-2.5 shrink-0 group">
          <span className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-brand-gradient shadow-glow">
            <GraduationCap className="h-5.5 w-5.5 text-white" strokeWidth={2.4} />
            <span className="absolute -right-0.5 -top-0.5 h-2.5 w-2.5 rounded-full bg-brand-orange ring-2 ring-background" />
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-display text-[1.05rem] font-extrabold tracking-tight text-brand-navy">
              Star Softwares
            </span>
            <span className="text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              School ERP
            </span>
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden lg:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-brand-navy hover:bg-brand-blue/5"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <span className="hidden xl:inline-flex items-center gap-1.5 rounded-full bg-brand-teal/10 px-2.5 py-1 text-[0.68rem] font-semibold text-brand-teal ring-1 ring-brand-teal/20">
            <GraduationCap className="h-3.5 w-3.5" /> NEP 2020 Aligned
          </span>
          <span className="hidden xl:inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-1 text-[0.68rem] font-semibold text-emerald-700 ring-1 ring-emerald-200">
            <ShieldCheck className="h-3.5 w-3.5" /> ISO · MSME
          </span>
          <Button asChild size="sm" className="bg-brand-gradient text-white shadow-glow hover:opacity-95 rounded-full px-5">
            <a href="#contact" className="inline-flex items-center gap-1.5">
              Book a Free Demo <ArrowRight className="h-4 w-4" />
            </a>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg text-brand-navy hover:bg-brand-blue/5 transition-colors"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={cn(
          "lg:hidden overflow-hidden border-t border-border/60 bg-background/95 backdrop-blur-xl transition-[max-height,opacity] duration-300",
          open ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <ul className="flex flex-col gap-1 px-4 py-4">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-4 py-3 text-base font-medium text-brand-navy hover:bg-brand-blue/5"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="mt-2">
            <Button asChild className="w-full bg-brand-gradient text-white rounded-full">
              <a href="#contact" onClick={() => setOpen(false)} className="inline-flex items-center justify-center gap-1.5">
                Book a Free Demo <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
          </li>
        </ul>
      </div>
    </header>
  );
}
