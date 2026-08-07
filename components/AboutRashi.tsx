"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Award } from "lucide-react";
import { aboutRashi, site } from "@/lib/data";
import { buildWhatsappLink, generalMessage } from "@/lib/whatsapp";
import Magnetic from "./Magnetic";

export default function AboutRashi() {
  return (
    <section
      id="rashi"
      className="relative py-28 md:py-36 bg-gradient-to-b from-sand-50 via-moss-50 to-sand-50 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Foto + decoración */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="lg:col-span-5 relative"
          >
            <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl shadow-violet-800/25">
              <Image
                src="/rashi.jpg"
                alt={`${aboutRashi.fullName} dando clase de Ayur Yoga Vital`}
                fill
                sizes="(min-width: 1024px) 40vw, 90vw"
                quality={88}
                className="object-cover object-[55%_30%] scale-[1.15]"
              />
              {/* Tinte violeta suave para integrar con la paleta */}
              <div className="absolute inset-0 bg-gradient-to-t from-violet-900/55 via-violet-900/10 to-transparent" />
              <div className="absolute inset-0 bg-violet-700/10 mix-blend-color" />
              <div className="absolute bottom-6 left-6 text-sand-50">
                <p className="font-display italic text-lg">{aboutRashi.name}</p>
                <p className="text-xs uppercase tracking-[0.25em] opacity-80">
                  Coordinador regional Bariloche · Ayur Yoga Vital
                </p>
              </div>
            </div>
            {/* decorativo: círculo y sello */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
              className="absolute -top-8 -right-8 w-44 h-44 hidden md:block"
            >
              <svg viewBox="0 0 200 200" className="w-full h-full" aria-hidden>
                <defs>
                  <path
                    id="rashi-circle"
                    d="M100,100 m-80,0 a80,80 0 1,1 160,0 a80,80 0 1,1 -160,0"
                  />
                </defs>
                <text
                  className="fill-violet-500 text-[13px] tracking-[0.4em] uppercase font-medium"
                  fontFamily="var(--font-inter)"
                >
                  <textPath href="#rashi-circle">
                    Ayur Yoga Vital · Bariloche · Ayur Yoga Vital · Bariloche ·
                  </textPath>
                </text>
              </svg>
            </motion.div>
          </motion.div>

          {/* Texto */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7"
          >
            <span className="section-eyebrow">Un aprendiz · un buscador</span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-violet-800 mt-5 leading-[1.05]">
              Quién es <span className="italic text-violet-500">{aboutRashi.name}</span>
            </h2>
            <p className="mt-3 text-violet-500 text-sm tracking-wide">
              {aboutRashi.fullName} · {aboutRashi.role}
            </p>

            <div className="mt-8 space-y-5 text-violet-800/80 text-lg leading-relaxed">
              {aboutRashi.bio.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            <ul className="mt-10 grid sm:grid-cols-2 gap-3">
              {aboutRashi.credentials.map((c) => (
                <li
                  key={c}
                  className="flex items-start gap-3 bg-sand-100/70 border border-moss-100 rounded-2xl p-4"
                >
                  <Award size={18} className="text-violet-400 mt-0.5 shrink-0" />
                  <span className="text-sm text-violet-800/85">{c}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10">
              <Magnetic strength={0.28}>
                <a
                  href={buildWhatsappLink(generalMessage())}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor-label="hablar"
                  className="btn-primary"
                >
                  Habla con {site.teacher}
                </a>
              </Magnetic>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
