"use client";

import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { ArrowDown, MapPin } from "lucide-react";
import { site } from "@/lib/data";
import Magnetic from "./Magnetic";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);

  // Scroll parallax
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const yImage = useTransform(scrollYProgress, [0, 1], ["0%", "16%"]);
  const scaleImage = useTransform(scrollYProgress, [0, 1], [1, 1.06]);
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "-6%"]);
  const opacityText = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  // Cursor parallax 0..1 dentro del hero
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const smx = useSpring(mx, { damping: 32, stiffness: 90 });
  const smy = useSpring(my, { damping: 32, stiffness: 90 });

  const imgX = useTransform(smx, [0, 1], [16, -16]);
  const imgY = useTransform(smy, [0, 1], [10, -10]);

  // Spotlight cálido que sigue al cursor (aumenta luz dorada donde mirás)
  const spotX = useTransform(smx, [0, 1], ["0%", "100%"]);
  const spotY = useTransform(smy, [0, 1], ["0%", "100%"]);
  const warmGlow = useMotionTemplate`radial-gradient(540px circle at ${spotX} ${spotY}, rgba(245,201,140,0.28), transparent 60%)`;
  const subtleHaze = useMotionTemplate`radial-gradient(900px circle at ${spotX} ${spotY}, rgba(255,255,255,0.06), transparent 70%)`;

  useEffect(() => {
    const handle = (e: MouseEvent) => {
      const el = ref.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      mx.set(Math.min(1, Math.max(0, (e.clientX - r.left) / r.width)));
      my.set(Math.min(1, Math.max(0, (e.clientY - r.top) / r.height)));
    };
    window.addEventListener("mousemove", handle);
    return () => window.removeEventListener("mousemove", handle);
  }, [mx, my]);

  return (
    <section
      id="top"
      ref={ref}
      className="relative min-h-[100svh] w-full overflow-hidden bg-slate-950 text-sand-50"
    >
      {/* Imagen base con parallax */}
      <motion.div
        style={{ y: yImage, scale: scaleImage }}
        className="absolute inset-0"
      >
        <motion.div
          style={{ x: imgX, y: imgY }}
          className="absolute -inset-12"
        >
          <Image
            src="/hero-yoga-bariloche.jpg"
            alt="Clase de Ayur Yoga Vital en Bariloche al amanecer sobre el lago Nahuel Huapi"
            fill
            priority
            quality={88}
            sizes="100vw"
            className="object-cover object-[70%_60%] md:object-[center_55%]"
          />
        </motion.div>
      </motion.div>

      {/* Spotlight cálido siguiendo el cursor */}
      <motion.div
        aria-hidden
        style={{ background: warmGlow }}
        className="pointer-events-none absolute inset-0 mix-blend-screen"
      />
      <motion.div
        aria-hidden
        style={{ background: subtleHaze }}
        className="pointer-events-none absolute inset-0 mix-blend-soft-light"
      />

      {/* Veladuras para legibilidad del texto */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-slate-950/65 via-slate-950/15 to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/30 via-transparent to-slate-950/70"
      />

      {/* Partículas doradas */}
      <Particles />

      {/* Contenido */}
      <motion.div
        style={{ y: yText, opacity: opacityText }}
        className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-end px-6 pb-28 pt-32"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-sand-50/25 bg-moss-800/30 px-4 py-2 text-[10px] uppercase tracking-[0.32em] text-sand-50/95 backdrop-blur-md">
            <MapPin size={12} />
            <span>Ayur Yoga Vital · {site.city}</span>
          </div>

          <h1 className="mt-6 font-display text-[clamp(2.6rem,7.5vw,6rem)] leading-[0.92] tracking-tight text-sand-50">
            <RevealLine delay={0.45}>Respirar.</RevealLine>{" "}
            <RevealLine delay={0.7}>
              <span className="italic font-light text-sand-100/95">
                Habitar el Ser.
              </span>
            </RevealLine>
            <br />
            <RevealLine delay={0.95}>Volver a casa.</RevealLine>
            <span className="sr-only">
              {" "}
              — Ayur Yoga Vital en San Carlos de Bariloche con Rashi: clases de
              yoga y yoga terapéutico.
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.15, duration: 0.9 }}
            className="mt-7 max-w-xl text-base leading-relaxed text-sand-50/90 md:text-lg"
          >
            Formaciones y Clases de Ayur Yoga Vital en San Carlos de Bariloche
            al pie del Nahuel Huapi. Una práctica terapéutica que une las
            filosofías de las tradiciones orientales clásicas y la
            neurociencia actual, adaptada a las necesidades de la vida
            moderna.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.35, duration: 0.9 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <Magnetic strength={0.35}>
              <a
                href="#reservar"
                data-cursor-label="reservar"
                className="btn-primary bg-sand-50 text-moss-800 hover:bg-sand-100"
              >
                Reservar un mes
              </a>
            </Magnetic>
            <Magnetic strength={0.2}>
              <a
                href="#yoga-vital"
                data-cursor-label="explorar"
                className="btn-ghost !border-sand-50/50 !text-sand-50 hover:!bg-sand-50 hover:!text-moss-800"
              >
                Conocer la práctica
              </a>
            </Magnetic>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 1 }}
          className="mt-16 flex flex-wrap items-end justify-between gap-6 text-[11px] uppercase tracking-[0.32em] text-sand-50/60"
        >
          <span>Lago Nahuel Huapi · Río Negro</span>
          <span className="flex items-center gap-2">
            Scroll
            <motion.span
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <ArrowDown size={12} />
            </motion.span>
          </span>
        </motion.div>
      </motion.div>
    </section>
  );
}

function RevealLine({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  return (
    <span className="relative inline-block overflow-hidden align-bottom">
      <motion.span
        initial={{ y: "110%" }}
        animate={{ y: 0 }}
        transition={{ delay, duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="inline-block"
      >
        {children}
      </motion.span>
    </span>
  );
}

function Particles() {
  return (
    <div className="pointer-events-none absolute inset-0 z-[1] overflow-hidden" aria-hidden>
      {Array.from({ length: 22 }).map((_, i) => {
        const left = (i * 53) % 100;
        const top = 30 + ((i * 17) % 50);
        const dur = 14 + (i % 7) * 2;
        const size = 1 + (i % 3);
        return (
          <motion.span
            key={i}
            initial={{ opacity: 0, y: 30 }}
            animate={{
              opacity: [0, 0.85, 0],
              y: [30, -160],
              x: [0, (i % 2 === 0 ? 1 : -1) * 35],
            }}
            transition={{
              duration: dur,
              repeat: Infinity,
              delay: (i * 0.7) % 12,
              ease: "easeInOut",
            }}
            style={{
              left: `${left}%`,
              top: `${top}%`,
              width: size,
              height: size,
            }}
            className="absolute rounded-full bg-[#FBE4BD]/85 shadow-[0_0_6px_rgba(251,228,189,0.7)]"
          />
        );
      })}
    </div>
  );
}
