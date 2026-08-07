"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Repeat, Calendar, Clock, ArrowRight, X } from "lucide-react";
import { workshops, type Workshop } from "@/lib/data";
import { buildWhatsappLink, workshopMessage } from "@/lib/whatsapp";

export default function Workshops() {
  const [active, setActive] = useState<Workshop | null>(null);
  return (
    <section
      id="talleres"
      className="relative py-28 md:py-36 bg-sand-50 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="grid lg:grid-cols-12 gap-12 items-end mb-14"
        >
          <div className="lg:col-span-7">
            <span className="section-eyebrow">Encuentros reiterativos</span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-violet-800 mt-5 leading-[1.05]">
              Talleres que <span className="italic text-violet-500">vuelven cada mes</span>
            </h2>
          </div>
          <p className="lg:col-span-5 text-violet-800/70 text-lg leading-relaxed">
            Formaciones cortas que se complementan entre sí, cuyo contenido
            vas a poder sumar a tus prácticas regulares. Podés sumarte a cada
            formación por separado o como un ciclo completo de talleres que
            se convierten en una gran formación troncal.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5">
          {workshops.map((w, i) => (
            <motion.button
              key={w.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.06 }}
              onClick={() => setActive(w)}
              className="group text-left bg-gradient-to-br from-sand-100 to-sand-100/60 border border-moss-100 rounded-3xl p-7 hover:from-moss-50 hover:to-moss-50/80 hover:border-cedar-400 transition-all duration-500 relative overflow-hidden"
            >
              <div className="absolute -right-4 -bottom-4 opacity-[0.06] group-hover:opacity-[0.12] transition-opacity">
                <svg viewBox="0 0 100 100" className="w-44 h-44" aria-hidden>
                  <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="0.5" />
                  <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="0.5" />
                  <circle cx="50" cy="50" r="20" fill="none" stroke="currentColor" strokeWidth="0.5" />
                  <circle cx="50" cy="50" r="10" fill="none" stroke="currentColor" strokeWidth="0.5" />
                </svg>
              </div>

              <div className="relative">
                <div className="flex items-center gap-2 mb-3 text-violet-500">
                  <Repeat size={14} />
                  <span className="text-[11px] tracking-widest uppercase">
                    {w.recurrence}
                  </span>
                </div>
                <h3 className="font-display text-2xl text-violet-800">{w.title}</h3>
                <p className="mt-3 text-violet-800/75 leading-relaxed text-[15px]">
                  {w.description}
                </p>

                <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-violet-800/65">
                  <span className="flex items-center gap-1.5">
                    <Calendar size={12} />
                    {w.day}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock size={12} />
                    {w.duration}
                  </span>
                  <span className="px-2 py-0.5 rounded-full bg-moss-100 text-violet-700 text-[10px] uppercase tracking-wide">
                    {w.sessionType}
                  </span>
                  <span className="px-2 py-0.5 rounded-full bg-moss-100 text-violet-700 text-[10px] uppercase tracking-wide">
                    {w.modality}
                  </span>
                </div>

                <div className="mt-5 inline-flex items-center gap-2 text-sm text-violet-800 font-medium group-hover:gap-3 transition-all">
                  Participar <ArrowRight size={14} />
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Modal */}
      {active && (
        <div
          className="fixed inset-0 z-[60] bg-moss-800/70 backdrop-blur-md flex items-center justify-center p-6"
          onClick={() => setActive(null)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="relative bg-sand-50 rounded-3xl max-w-md w-full p-8"
          >
            <button
              aria-label="Cerrar"
              onClick={() => setActive(null)}
              className="absolute top-4 right-4 text-violet-800 hover:text-violet-500"
            >
              <X size={20} />
            </button>
            <div className="text-violet-500 text-[11px] uppercase tracking-[0.3em]">
              {active.recurrence}
            </div>
            <h3 className="font-display text-2xl text-violet-800 mt-2">
              {active.title}
            </h3>
            <p className="mt-3 text-violet-800/75 text-[15px] leading-relaxed">
              {active.description}
            </p>
            <div className="mt-4 text-sm text-violet-800/85">
              <p>
                <strong>Cuándo:</strong> {active.recurrence} · {active.day}
              </p>
              <p>
                <strong>Duración:</strong> {active.duration}
              </p>
              <p>
                <strong>Modalidad:</strong> {active.modality} ·{" "}
                {active.sessionType}
              </p>
            </div>
            <a
              href={buildWhatsappLink(
                workshopMessage({
                  name: "[tu nombre]",
                  workshop: active.title,
                  date: active.recurrence,
                })
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-6 w-full justify-center"
            >
              Participar por WhatsApp
            </a>
          </motion.div>
        </div>
      )}
    </section>
  );
}
