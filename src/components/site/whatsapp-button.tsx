"use client";

import { useEffect, useState } from "react";
import { MessageCircle, X } from "lucide-react";

// WhatsApp brand green
const WA_NUMBER = "917003216162";
const WA_DEFAULT_TEXT =
  "Hello Star Softwares, I'm interested in your School ERP. Please share more details.";

export function WhatsAppButton() {
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(false);

  // Reveal after slight delay so it doesn't pop in on load
  useEffect(() => {
    const t = setTimeout(() => setShow(true), 1200);
    return () => clearTimeout(t);
  }, []);

  const waLink = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(WA_DEFAULT_TEXT)}`;

  if (!show) return null;

  return (
    <div className="fixed bottom-5 right-5 z-[60] flex flex-col items-end gap-3 sm:bottom-6 sm:right-6">
      {/* Chat bubble tooltip */}
      {open && (
        <div className="w-72 overflow-hidden rounded-2xl border border-black/5 bg-white shadow-card-hover">
          <div className="flex items-center justify-between bg-[#075E54] px-4 py-3 text-white">
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/15">
                <MessageCircle className="h-5 w-5" />
              </span>
              <div className="leading-tight">
                <p className="text-sm font-bold">Star Softwares</p>
                <p className="text-[0.65rem] text-white/70">Typically replies in minutes</p>
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close chat"
              className="rounded-full p-1 text-white/80 transition-colors hover:bg-white/10 hover:text-white"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
          <div className="bg-[#ECE5DD] p-4">
            <div className="max-w-[85%] rounded-xl rounded-tl-sm bg-white px-3.5 py-2.5 text-sm text-brand-navy shadow-sm">
              <p className="font-semibold">Hi there! 👋</p>
              <p className="mt-1 text-[0.8rem] leading-relaxed text-muted-foreground">
                Enquiries are best sent on WhatsApp. Send us a message and our team will help you with
                a free demo of the School ERP.
              </p>
            </div>
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-4 py-2.5 text-sm font-bold text-white shadow-sm transition-opacity hover:opacity-95"
            >
              <MessageCircle className="h-4 w-4" /> Start WhatsApp Chat
            </a>
            <p className="mt-2 text-center text-[0.65rem] text-muted-foreground">
              +91 70032 16162
            </p>
          </div>
        </div>
      )}

      {/* FAB */}
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label="Chat on WhatsApp"
        className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_30px_-6px_rgba(37,211,102,0.6)] transition-transform hover:scale-105 sm:h-16 sm:w-16"
      >
        {/* pulse ring */}
        <span className="absolute inset-0 -z-10 rounded-full bg-[#25D366] opacity-60 animate-pulse-ring" />
        {open ? (
          <X className="h-7 w-7" />
        ) : (
          <svg viewBox="0 0 32 32" className="h-8 w-8 sm:h-9 sm:w-9" fill="currentColor" aria-hidden="true">
            <path d="M16.003 3.2c-7.06 0-12.8 5.74-12.8 12.8 0 2.257.592 4.46 1.713 6.402L3.2 28.8l6.608-1.732a12.74 12.74 0 0 0 6.195 1.572h.005c7.06 0 12.8-5.74 12.8-12.8C28.808 8.94 23.063 3.2 16.003 3.2zm0 23.04h-.004a10.62 10.62 0 0 1-5.41-1.48l-.388-.23-4.025 1.055 1.074-3.922-.253-.402a10.6 10.6 0 0 1-1.624-5.66c0-5.86 4.77-10.63 10.634-10.63 2.84 0 5.51 1.107 7.517 3.115a10.56 10.56 0 0 1 3.113 7.52c0 5.86-4.77 10.63-10.63 10.63zm5.826-7.942c-.319-.16-1.886-.93-2.176-1.036-.292-.107-.505-.16-.717.16-.213.32-.825 1.036-1.012 1.249-.186.213-.373.24-.692.08-.32-.16-1.35-.498-2.572-1.587-.95-.848-1.593-1.895-1.78-2.214-.186-.32-.02-.493.14-.652.144-.143.32-.373.48-.56.16-.186.213-.32.32-.533.107-.213.053-.4-.027-.56-.08-.16-.717-1.727-.982-2.364-.259-.62-.521-.536-.717-.546l-.61-.01c-.213 0-.56.08-.853.4-.293.32-1.12 1.094-1.12 2.665 0 1.57 1.146 3.087 1.306 3.3.16.213 2.253 3.44 5.456 4.823.762.329 1.357.525 1.82.672.765.243 1.461.209 2.011.127.613-.091 1.886-.771 2.152-1.516.266-.745.266-1.384.186-1.517-.08-.133-.293-.213-.613-.373z" />
          </svg>
        )}
        {/* notification dot */}
        {!open && (
          <span className="absolute -right-0.5 -top-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[0.55rem] font-bold text-white ring-2 ring-background">
            1
          </span>
        )}
      </button>
    </div>
  );
}
