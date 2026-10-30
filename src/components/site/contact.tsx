"use client";

import { useState } from "react";
import {
  Phone,
  Mail,
  Globe,
  MapPin,
  Send,
  Loader2,
  CheckCircle2,
  ShieldCheck,
  Clock,
  MessageSquare,
  GraduationCap,
} from "lucide-react";
import { Reveal } from "./reveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const WA_NUMBER = "917003216162";
const WA_TEXT =
  "Hello Star Softwares, I'm interested in your School ERP. Please share more details.";
const waLink = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(WA_TEXT)}`;

const CONTACTS = [
  { icon: Phone, label: "Call us", value: "+91 70032 16162", href: "tel:+917003216162" },
  { icon: Mail, label: "Email us", value: "softwaresstar@gmail.com", href: "mailto:softwaresstar@gmail.com" },
  { icon: Globe, label: "Visit", value: "starsoftwares.in", href: "https://starsoftwares.in" },
  { icon: MapPin, label: "Based in", value: "India", href: "#" },
];

export function Contact() {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: data.get("name"),
      school: data.get("school"),
      email: data.get("email"),
      phone: data.get("phone"),
      role: data.get("role"),
      students: data.get("students"),
      message: data.get("message"),
    };

    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("Request failed");
      setDone(true);
      toast({
        title: "Demo request received!",
        description: "Our team will reach out to you shortly.",
      });
      form.reset();
    } catch {
      toast({
        title: "Something went wrong",
        description: "Please try again or email us directly.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="contact" className="relative overflow-hidden py-20 sm:py-24 md:py-28">
      <div className="pointer-events-none absolute -top-20 right-0 h-80 w-80 rounded-full bg-brand-blue/10 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-5 lg:items-stretch">
          {/* Left info panel */}
          <Reveal className="lg:col-span-2">
            <div className="relative flex h-full flex-col overflow-hidden rounded-3xl bg-brand-navy p-7 text-white shadow-card-hover sm:p-8">
              <div className="pointer-events-none absolute inset-0 grid-pattern opacity-20" />
              <div className="pointer-events-none absolute -bottom-16 -right-16 h-56 w-56 rounded-full bg-brand-teal/30 blur-3xl" />
              <div className="relative">
                <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-white/80 ring-1 ring-white/15">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-teal" /> NEP 2020 Aligned · Book a Free Demo
                </span>
                <h2 className="mt-4 font-display text-2xl font-extrabold leading-tight sm:text-3xl">
                  Let's digitize your school together.
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-white/70">
                  Share a few details and our team will schedule a personalized demo of the School ERP
                  — tailored to your institution's workflows.
                </p>

                {/* WhatsApp emphasis banner */}
                <a
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 flex items-center gap-3 rounded-2xl bg-[#25D366] px-4 py-3.5 text-white shadow-lg transition-transform hover:scale-[1.02]"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/20">
                    <svg viewBox="0 0 32 32" className="h-6 w-6" fill="currentColor" aria-hidden="true">
                      <path d="M16.003 3.2c-7.06 0-12.8 5.74-12.8 12.8 0 2.257.592 4.46 1.713 6.402L3.2 28.8l6.608-1.732a12.74 12.74 0 0 0 6.195 1.572h.005c7.06 0 12.8-5.74 12.8-12.8C28.808 8.94 23.063 3.2 16.003 3.2zm5.826 15.098c-.319-.16-1.886-.93-2.176-1.036-.292-.107-.505-.16-.717.16-.213.32-.825 1.036-1.012 1.249-.186.213-.373.24-.692.08-.32-.16-1.35-.498-2.572-1.587-.95-.848-1.593-1.895-1.78-2.214-.186-.32-.02-.493.14-.652.144-.143.32-.373.48-.56.16-.186.213-.32.32-.533.107-.213.053-.4-.027-.56-.08-.16-.717-1.727-.982-2.364-.259-.62-.521-.536-.717-.546l-.61-.01c-.213 0-.56.08-.853.4-.293.32-1.12 1.094-1.12 2.665 0 1.57 1.146 3.087 1.306 3.3.16.213 2.253 3.44 5.456 4.823.762.329 1.357.525 1.82.672.765.243 1.461.209 2.011.127.613-.091 1.886-.771 2.152-1.516.266-.745.266-1.384.186-1.517-.08-.133-.293-.213-.613-.373z" />
                    </svg>
                  </span>
                  <div className="leading-tight">
                    <p className="text-sm font-bold">Enquire on WhatsApp — fastest!</p>
                    <p className="text-[0.72rem] text-white/85">+91 70032 16162 · We reply quickly</p>
                  </div>
                </a>

                <ul className="mt-7 space-y-3">
                  {CONTACTS.map((c) => (
                    <li key={c.label}>
                      <a
                        href={c.href}
                        className="flex items-center gap-3 rounded-xl bg-white/5 p-3 ring-1 ring-white/10 transition-colors hover:bg-white/10"
                      >
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-gradient text-white">
                          <c.icon className="h-5 w-5" />
                        </span>
                        <div className="leading-tight">
                          <p className="text-[0.65rem] uppercase tracking-wide text-white/50">{c.label}</p>
                          <p className="text-sm font-semibold text-white">{c.value}</p>
                        </div>
                      </a>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-wrap items-center gap-4 border-t border-white/10 pt-5 text-xs text-white/60">
                  <span className="inline-flex items-center gap-1.5">
                    <GraduationCap className="h-4 w-4 text-brand-teal" /> NEP 2020 Aligned
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <ShieldCheck className="h-4 w-4 text-brand-teal" /> ISO Certified
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <ShieldCheck className="h-4 w-4 text-brand-teal" /> MSME Registered
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Clock className="h-4 w-4 text-brand-teal" /> Since 2014
                  </span>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Right form */}
          <Reveal delay={0.12} className="lg:col-span-3">
            <div className="h-full rounded-3xl border border-border/70 bg-card p-7 shadow-card-soft sm:p-8">
              {done ? (
                <div className="flex h-full min-h-[420px] flex-col items-center justify-center text-center">
                  <span className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                    <CheckCircle2 className="h-9 w-9" />
                  </span>
                  <h3 className="mt-5 font-display text-2xl font-bold text-brand-navy">Thank you!</h3>
                  <p className="mt-2 max-w-sm text-sm text-muted-foreground">
                    Your demo request has been received. Our team will reach out to you shortly to
                    schedule your personalized School ERP walkthrough.
                  </p>
                  <Button
                    variant="outline"
                    className="mt-6 rounded-full"
                    onClick={() => setDone(false)}
                  >
                    Submit another request
                  </Button>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="grid gap-4 sm:grid-cols-2">
                  <div className="sm:col-span-2 flex items-center gap-2">
                    <MessageSquare className="h-5 w-5 text-brand-blue" />
                    <h3 className="font-display text-lg font-bold text-brand-navy">Request your free demo</h3>
                  </div>

                  <Field label="Full Name *">
                    <Input id="name" name="name" placeholder="e.g. Rajesh Sharma" required />
                  </Field>
                  <Field label="School Name *">
                    <Input id="school" name="school" placeholder="e.g. Sunrise Public School" required />
                  </Field>
                  <Field label="Email *">
                    <Input id="email" name="email" type="email" placeholder="you@school.edu" required />
                  </Field>
                  <Field label="Phone *">
                    <Input id="phone" name="phone" type="tel" placeholder="+91 70032 16162" required />
                  </Field>
                  <Field label="Your Role">
                    <Select name="role">
                      <SelectTrigger id="role" className="w-full">
                        <SelectValue placeholder="Select role" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="principal">Principal</SelectItem>
                        <SelectItem value="administrator">Administrator</SelectItem>
                        <SelectItem value="trustee">Trustee / Management</SelectItem>
                        <SelectItem value="teacher">Teacher</SelectItem>
                        <SelectItem value="parent">Parent</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </Field>
                  <Field label="Approx. Students">
                    <Select name="students">
                      <SelectTrigger id="students" className="w-full">
                        <SelectValue placeholder="Select range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="under-200">Under 200</SelectItem>
                        <SelectItem value="200-500">200 – 500</SelectItem>
                        <SelectItem value="500-1000">500 – 1,000</SelectItem>
                        <SelectItem value="1000-3000">1,000 – 3,000</SelectItem>
                        <SelectItem value="3000-plus">3,000+</SelectItem>
                      </SelectContent>
                    </Select>
                  </Field>
                  <div className="sm:col-span-2">
                    <Field label="Tell us about your requirements">
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Which modules are you most interested in? Any specific workflows or challenges?"
                        className="min-h-[110px]"
                      />
                    </Field>
                  </div>

                  <div className="sm:col-span-2 flex flex-col gap-3 rounded-xl bg-[#25D366]/10 p-3.5 ring-1 ring-[#25D366]/25 sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-xs font-medium text-brand-navy">
                      💬 <strong>Prefer WhatsApp?</strong> Enquiries are best sent there — fastest response.
                    </p>
                    <a
                      href={waLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-[#25D366] px-5 py-2.5 text-sm font-bold text-white shadow-sm transition-opacity hover:opacity-95"
                    >
                      <svg viewBox="0 0 32 32" className="h-4 w-4" fill="currentColor" aria-hidden="true">
                        <path d="M16.003 3.2c-7.06 0-12.8 5.74-12.8 12.8 0 2.257.592 4.46 1.713 6.402L3.2 28.8l6.608-1.732a12.74 12.74 0 0 0 6.195 1.572h.005c7.06 0 12.8-5.74 12.8-12.8C28.808 8.94 23.063 3.2 16.003 3.2zm5.826 15.098c-.319-.16-1.886-.93-2.176-1.036-.292-.107-.505-.16-.717.16-.213.32-.825 1.036-1.012 1.249-.186.213-.373.24-.692.08-.32-.16-1.35-.498-2.572-1.587-.95-.848-1.593-1.895-1.78-2.214-.186-.32-.02-.493.14-.652.144-.143.32-.373.48-.56.16-.186.213-.32.32-.533.107-.213.053-.4-.027-.56-.08-.16-.717-1.727-.982-2.364-.259-.62-.521-.536-.717-.546l-.61-.01c-.213 0-.56.08-.853.4-.293.32-1.12 1.094-1.12 2.665 0 1.57 1.146 3.087 1.306 3.3.16.213 2.253 3.44 5.456 4.823.762.329 1.357.525 1.82.672.765.243 1.461.209 2.011.127.613-.091 1.886-.771 2.152-1.516.266-.745.266-1.384.186-1.517-.08-.133-.293-.213-.613-.373z" />
                      </svg>
                      Chat on WhatsApp
                    </a>
                  </div>

                  <div className="sm:col-span-2 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-xs text-muted-foreground">
                      By submitting, you agree to be contacted about Star Softwares School ERP.
                    </p>
                    <Button
                      type="submit"
                      disabled={loading}
                      className="bg-brand-gradient text-white shadow-glow rounded-full px-7 h-12"
                    >
                      {loading ? (
                        <><Loader2 className="h-4 w-4 animate-spin" /> Sending…</>
                      ) : (
                        <>Book Free Demo <Send className="h-4 w-4" /></>
                      )}
                    </Button>
                  </div>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-1.5">
      <Label htmlFor={String(label)} className="text-xs font-semibold text-brand-navy">
        {label}
      </Label>
      {children}
    </div>
  );
}
