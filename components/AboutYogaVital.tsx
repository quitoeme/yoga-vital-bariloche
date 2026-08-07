"use client";

import { motion } from "framer-motion";
import { yogaVitalPhilosophy } from "@/lib/data";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut", delay: i * 0.08 },
  }),
};

export default function AboutYogaVital() {
  return (
    <section
      id="yoga-vital"
      className="relative py-28 md:py-36 bg-sand-50 overflow-hidden"
    >
      <div className="absolute inset-0 breathe-bg opacity-60" aria-hidden />
      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid lg:grid-cols-12 gap-12 items-start"
        >
          <motion.div variants={fadeUp} className="lg:col-span-5 lg:sticky lg:top-32">
            <span className="section-eyebrow">La práctica</span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-violet-800 mt-5 leading-[1.05]">
              Qué es <span className="italic text-violet-500">Ayur Yoga</span>?
            </h2>
            <p className="mt-6 text-violet-800/80 text-lg leading-relaxed">
              {yogaVitalPhilosophy.whatIs}
            </p>
            <BreathingCircle />
          </motion.div>

          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-5">
            {yogaVitalPhilosophy.pillars.map((p, i) => (
              <motion.article
                key={p.title}
                variants={fadeUp}
                custom={i + 1}
                className="group bg-sand-100/70 border border-moss-100 rounded-3xl p-7 hover:bg-sand-100 hover:-translate-y-1 transition-all duration-500"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-full bg-moss-600 text-sand-50 flex items-center justify-center text-xs font-medium">
                    0{i + 1}
                  </div>
                  <h3 className="font-display text-xl text-violet-800">
                    {p.title}
                  </h3>
                </div>
                <p className="text-violet-800/70 leading-relaxed text-[15px]">
                  {p.body}
                </p>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function BreathingCircle() {
  return (
    <div className="hidden lg:block mt-12 relative h-52">
      <div className="absolute left-0 top-0 w-44 h-44 rounded-full border border-moss-200 animate-breathe" />
      <div className="absolute left-6 top-6 w-32 h-32 rounded-full border border-cedar-400/50 animate-breathe [animation-delay:1s]" />
      <div className="absolute left-12 top-12 w-20 h-20 rounded-full bg-moss-600/20 animate-breathe [animation-delay:2s]" />
      <span className="absolute left-56 top-20 text-xs text-violet-500 italic font-display">
        Inhala. Exhala. Siente tu corazón.
      </span>
    </div>
  );
}
