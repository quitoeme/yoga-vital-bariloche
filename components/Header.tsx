"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { site } from "@/lib/data";
import Magnetic from "./Magnetic";

const links = [
  { href: "#yoga-vital", label: "Ayur Yoga Vital" },
  { href: "#rashi", label: "Rashi" },
  { href: "#clases", label: "Clases" },
  { href: "#horarios", label: "Horarios" },
  { href: "#cursos", label: "Cursos" },
  { href: "#talleres", label: "Talleres" },
  { href: "#eventos", label: "Eventos" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 60));

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-sand-50/90 backdrop-blur-xl border-b border-violet-100/70 py-3"
          : "bg-slate-950/20 backdrop-blur-md py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-3 group">
          <Logo scrolled={scrolled} />
          <div className="leading-tight">
            <div
              className={`font-display text-lg tracking-tight transition-colors ${
                scrolled ? "text-violet-800" : "text-sand-50"
              }`}
            >
              {site.headerName}
            </div>
            <div
              className={`text-[10px] uppercase tracking-[0.28em] transition-colors ${
                scrolled ? "text-violet-500" : "text-violet-200"
              }`}
            >
              Con {site.teacher}
            </div>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`text-sm transition-colors relative group ${
                scrolled
                  ? "text-violet-800/85 hover:text-violet-700"
                  : "text-sand-50/90 hover:text-sand-50"
              }`}
            >
              {l.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-violet-500 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <Magnetic strength={0.25}>
          <a
            href="#reservar"
            data-cursor-label="reservar"
            className="hidden lg:inline-flex btn-primary text-sm py-2.5 px-5"
          >
            Reservar mes
          </a>
        </Magnetic>

        <button
          aria-label="Menú"
          onClick={() => setOpen((v) => !v)}
          className={`lg:hidden p-2 transition-colors ${
            scrolled ? "text-violet-800" : "text-sand-50"
          }`}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:hidden bg-sand-50/95 backdrop-blur-xl border-t border-violet-100 mt-3 px-6 py-6"
        >
          <nav className="flex flex-col gap-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-violet-800 text-base"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#reservar"
              onClick={() => setOpen(false)}
              className="btn-primary text-sm justify-center mt-2"
            >
              Reservar mes
            </a>
          </nav>
        </motion.div>
      )}
    </motion.header>
  );
}

function Logo({ scrolled }: { scrolled: boolean }) {
  return (
    <div className="relative w-10 h-10">
      <svg
        viewBox="0 0 40 40"
        className="absolute inset-0 animate-spin-slow"
        aria-hidden
      >
        <circle
          cx="20"
          cy="20"
          r="18"
          fill="none"
          stroke={scrolled ? "#8E6FBF" : "#E5D9F2"}
          strokeWidth="0.5"
          strokeDasharray="2 4"
        />
      </svg>
      <svg viewBox="0 0 40 40" className="absolute inset-0" aria-hidden>
        <path
          d="M20 8c0 6-6 8-6 14s6 10 6 10 6-4 6-10-6-8-6-14z"
          fill={scrolled ? "#261A3D" : "#FBF7F0"}
        />
        <circle cx="20" cy="20" r="2" fill={scrolled ? "#FBF7F0" : "#6B4E9E"} />
      </svg>
    </div>
  );
}
