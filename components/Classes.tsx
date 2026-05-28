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
      className="relative py-28 md:py-36 bg-moss-800 text-sand-50 overflow-hidden"
    >
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
        <svg viewBox="0 0 100 100" className="w-full h-full" aria-hidden>
          <defs>
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.2" />
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
          <span className="section-eyebrow text-violet-200 before:bg-violet-300">
            Las prácticas
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl mt-5 leading-[1.05]">
            Seis caminos,{" "}
            <span className="italic text-violet-300">una misma raíz</span>
          </h2>
          <p className="mt-6 text-sand-100/80 text-lg leading-relaxed">
            Cada clase tiene su carácter. Elegí la que más se acerque a lo que tu
            cuerpo está pidiendo hoy.
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
              <Tilt max={6} className="group relative bg-moss-600/40 border border-moss-400/30 rounded-3xl p-7 hover:bg-moss-600/60 hover:border-cedar-400/60 transition-colors duration-500 overflow-hidden">
                <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-cedar-500/10 blur-2xl group-hover:bg-cedar-400/25 transition-all duration-500" />

                <div className="relative">
                  <div className="flex items-center justify-between mb-5">
                    <ClassIcon name={c.icon} />
                    <Intensity level={c.intensity} />
                  </div>

                  <h3 className="font-display text-2xl text-sand-50">{c.title}</h3>
                  <p className="text-violet-300 text-sm italic mb-4">{c.subtitle}</p>

                  <p className="text-sand-100/75 text-[15px] leading-relaxed">
                    {c.description}
                  </p>

                  <div className="mt-6 pt-5 border-t border-moss-400/30 flex items-center gap-5 text-xs text-sand-100/70">
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
