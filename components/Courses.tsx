"use client";

import { motion } from "framer-motion";
import { GraduationCap, Calendar, ArrowUpRight } from "lucide-react";
import { courses } from "@/lib/data";
import { buildWhatsappLink, courseMessage } from "@/lib/whatsapp";

export default function Courses() {
  return (
    <section
      id="cursos"
      className="relative py-28 md:py-36 bg-cedar-700 text-sand-50 overflow-hidden"
    >
      {/* Textura */}
      <div className="absolute inset-0 opacity-30 mix-blend-overlay pointer-events-none">
        <svg viewBox="0 0 800 600" preserveAspectRatio="none" className="w-full h-full" aria-hidden>
          {[...Array(60)].map((_, i) => (
            <line
              key={i}
              x1={Math.random() * 800}
              y1={Math.random() * 600}
              x2={Math.random() * 800}
              y2={Math.random() * 600}
              stroke="#FBF7F0"
              strokeWidth="0.4"
              opacity={Math.random() * 0.5}
            />
          ))}
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mb-16"
        >
          <span className="section-eyebrow text-sand-200 before:bg-sand-200">
            Formación profesional
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl mt-5 leading-[1.05]">
            Estudiá yoga{" "}
            <span className="italic text-sand-200">en serio</span>
          </h2>
          <p className="mt-6 text-sand-100/85 text-lg leading-relaxed">
            Niveles de formación pensados para vos. Con certificación oficial
            de la Escuela AYVIS · Ayur Yoga Vital International School y
            validaciones internacionales. Son cursos diseñados a tu tiempo y
            posibilidad: un camino de transformación personal y profesional,
            con acompañamiento y guía personalizada.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-5">
          {courses.map((c, i) => (
            <motion.article
              key={c.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative bg-sand-50 text-violet-800 rounded-3xl p-7 flex flex-col hover:-translate-y-2 transition-all duration-500 shadow-2xl shadow-cedar-700/30 overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-cedar-400/30 to-transparent rounded-bl-full" />

              <div className="relative flex items-center gap-2 mb-5">
                <GraduationCap size={18} className="text-violet-400" />
                <span className="text-[10px] uppercase tracking-[0.3em] text-violet-500 font-medium">
                  {c.level}
                </span>
              </div>

              <h3 className="font-display text-2xl text-violet-800 leading-tight">
                {c.title}
              </h3>
              <p className="text-violet-500 text-sm italic mt-1">
                {c.subtitle}
              </p>

              <p className="mt-5 text-violet-800/75 text-[15px] leading-relaxed flex-grow">
                {c.description}
              </p>

              <ul className="mt-5 space-y-1.5">
                {c.highlights.map((h) => (
                  <li
                    key={h}
                    className="text-[13px] text-violet-800/70 flex items-start gap-2 leading-snug"
                  >
                    <span className="text-violet-400 mt-1">·</span>
                    {h}
                  </li>
                ))}
              </ul>

              <div className="mt-6 pt-5 border-t border-moss-100 flex items-center gap-1.5 text-[12px] text-violet-800/70">
                <Calendar size={12} /> {c.format}
              </div>

              <div className="mt-3 text-[12px] text-violet-500 font-medium">
                {c.startDate}
              </div>

              <a
                href={buildWhatsappLink(
                  courseMessage({ name: "[tu nombre]", course: c.title })
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center justify-between bg-moss-800 text-sand-50 rounded-full px-5 py-3 text-sm font-medium hover:bg-moss-600 transition-colors group"
              >
                <span>Consultar inicio</span>
                <ArrowUpRight
                  size={16}
                  className="group-hover:rotate-45 transition-transform"
                />
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
