"use client";

import { motion } from "framer-motion";
import { Calendar, Sparkles, ArrowUpRight } from "lucide-react";
import { events } from "@/lib/data";
import { buildWhatsappLink, eventMessage } from "@/lib/whatsapp";
import Tilt from "./Tilt";

const typeColors: Record<string, string> = {
  "Baño de Gong": "bg-lake-600 text-sand-50",
  Luna: "bg-cedar-500 text-sand-50",
  Retiro: "bg-moss-600 text-sand-50",
  Encuentro: "bg-cedar-700 text-sand-50",
};

export default function Events() {
  return (
    <section
      id="eventos"
      className="relative py-28 md:py-36 bg-gradient-to-b from-sand-50 to-moss-50 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14"
        >
          <div className="max-w-2xl">
            <span className="section-eyebrow">Agenda especial</span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-violet-800 mt-5 leading-[1.05]">
              Encuentros de{" "}
              <span className="italic text-violet-500">Revitalización</span> de
              fin de semana
            </h2>
            <p className="mt-5 text-violet-800/70 text-lg leading-relaxed">
              Retiros y círculos de sanación, meditaciones, mantras sagrados,
              baños de gongs, rituales, alquimia, sabiduría femenina y
              masculina. Tu espacio sagrado para liberar el estrés y regresar
              a nuestro centro.
            </p>
          </div>
          <Sparkles className="hidden md:block text-cedar-400" size={48} />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {events.map((ev, i) => {
            return (
              <motion.div
                key={ev.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                data-cursor-label={ev.type.toLowerCase()}
              >
              <Tilt max={6} className="group relative bg-sand-50 rounded-3xl overflow-hidden border border-moss-100 hover:shadow-2xl hover:shadow-moss-800/15 transition-shadow duration-500 flex flex-col h-full">
                <div className="relative h-56 overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-700"
                    style={{ backgroundImage: `url(${ev.cover})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-moss-800/80 via-moss-800/20 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span
                      className={`text-[10px] uppercase tracking-[0.25em] px-3 py-1.5 rounded-full ${
                        typeColors[ev.type] ?? "bg-moss-600 text-sand-50"
                      }`}
                    >
                      {ev.type}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 text-sand-50">
                    <p className="text-[11px] uppercase tracking-[0.25em] opacity-90 flex items-center gap-1.5">
                      <Calendar size={11} />
                      {ev.date} · {ev.time}
                    </p>
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="font-display text-xl text-violet-800 leading-tight">
                    {ev.title}
                  </h3>
                  <p className="mt-3 text-violet-800/70 text-[14px] leading-relaxed flex-grow">
                    {ev.description}
                  </p>

                  <a
                    href={buildWhatsappLink(
                      eventMessage({
                        name: "[tu nombre]",
                        event: ev.title,
                        date: ev.date,
                      })
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center justify-between bg-moss-800 text-sand-50 rounded-full px-5 py-2.5 text-sm hover:bg-moss-600 transition-colors group/btn"
                  >
                    <span>Reservar lugar</span>
                    <ArrowUpRight
                      size={14}
                      className="group-hover/btn:rotate-45 transition-transform"
                    />
                  </a>
                </div>
              </Tilt>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
