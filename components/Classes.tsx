"use client";

import { motion } from "framer-motion";
import { classFeatures } from "@/lib/data";
import { Clock, Users } from "lucide-react";
import ClassIcon from "./ClassIcon";
import Tilt from "./Tilt";

export default function Classes() {
  return (
    <section
      id="clases"
      className="relative py-28 md:py-36 bg-moss-50 text-violet-800 overflow-hidden"
    >
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
        <svg viewBox="0 0 100 100" className="w-full h-full" aria-hidden>
          <defs>
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="#3D4A2A" strokeWidth="0.2" />
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#grid)" />
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
          <span className="section-eyebrow">Las prácticas</span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl mt-5 leading-[1.05] text-violet-800">
            Muchos caminos,{" "}
            <span className="italic text-violet-500">un solo objetivo: tu bienestar</span>
          </h2>
          <p className="mt-6 text-violet-800/70 text-lg leading-relaxed">
            Cada clase tiene una tónica particular. Elegí la que más sientas
            que tu Ser esté necesitando hoy.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {classFeatures.map((c, i) => (
            <motion.div
              key={c.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.07 }}
              data-cursor-label={c.title.toLowerCase()}
            >
              <Tilt max={6} className="group relative bg-sand-50/80 border border-moss-100 rounded-3xl p-7 hover:bg-sand-50 hover:border-cedar-400/60 transition-colors duration-500 overflow-hidden">
                <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-cedar-500/10 blur-2xl group-hover:bg-cedar-400/25 transition-all duration-500" />

                <div className="relative">
                  <div className="flex items-center justify-between mb-5">
                    <ClassIcon name={c.icon} />
                    <Intensity level={c.intensity} />
                  </div>

                  <h3 className="font-display text-2xl text-violet-800">{c.title}</h3>
                  <p className="text-violet-500 text-sm italic mb-4">{c.subtitle}</p>

                  <p className="text-violet-800/70 text-[15px] leading-relaxed">
                    {c.description}
                  </p>

                  <div className="mt-6 pt-5 border-t border-moss-100 flex items-center gap-5 text-xs text-violet-800/60">
                    <span className="flex items-center gap-1.5">
                      <Clock size={13} /> {c.duration}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Users size={13} /> {c.forWho}
                    </span>
                  </div>
                </div>
              </Tilt>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Intensity({ level }: { level: 1 | 2 | 3 }) {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3].map((i) => (
        <div
          key={i}
          className={`w-1.5 h-4 rounded-full transition-colors ${
            i <= level ? "bg-cedar-400" : "bg-moss-400/30"
          }`}
        />
      ))}
    </div>
  );
}
