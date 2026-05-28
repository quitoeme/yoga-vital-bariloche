"use client";

import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import { schedule, classFeatures, days, type ScheduleSlot } from "@/lib/data";
import { buildWhatsappLink } from "@/lib/whatsapp";

export default function Schedule() {
  const classMap = useMemo(
    () => Object.fromEntries(classFeatures.map((c) => [c.id, c])),
    []
  );
  const [activeClass, setActiveClass] = useState<string | "todas">("todas");

  const filtered = activeClass === "todas"
    ? schedule
    : schedule.filter((s) => s.classId === activeClass);

  return (
    <section
      id="horarios"
      className="relative py-28 md:py-36 bg-sand-50 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12"
        >
          <div className="max-w-2xl">
            <span className="section-eyebrow">Cuadro semanal</span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-violet-800 mt-5 leading-[1.05]">
              Horarios y <span className="italic text-violet-500">grupos abiertos</span>
            </h2>
            <p className="mt-5 text-violet-800/70 text-lg leading-relaxed">
              Grupos chicos. Reservás un mes completo y el lugar es tuyo cada semana.
            </p>
          </div>

          <div className="flex flex-wrap gap-2 max-w-full">
            <FilterBtn active={activeClass === "todas"} onClick={() => setActiveClass("todas")}>
              Todas
            </FilterBtn>
            {classFeatures.map((c) => (
              <FilterBtn
                key={c.id}
                active={activeClass === c.id}
                onClick={() => setActiveClass(c.id)}
              >
                {c.title}
              </FilterBtn>
            ))}
          </div>
        </motion.div>

        {/* Vista escritorio */}
        <div className="hidden md:block bg-sand-100/60 border border-moss-100 rounded-3xl p-6">
          <div className="grid grid-cols-6 gap-3 mb-3">
            {days.map((d) => (
              <div key={d} className="text-center">
                <span className="block text-xs uppercase tracking-[0.25em] text-violet-500">
                  {d}
                </span>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-6 gap-3">
            {days.map((d) => (
              <div key={d} className="flex flex-col gap-3 min-h-[200px]">
                {filtered
                  .filter((s) => s.day === d)
                  .map((s) => (
                    <SlotCard key={`${s.day}-${s.start}-${s.classId}`} slot={s} classTitle={classMap[s.classId].title} />
                  ))}
              </div>
            ))}
          </div>
        </div>

        {/* Vista mobile (lista) */}
        <div className="md:hidden space-y-6">
          {days.map((d) => {
            const slots = filtered.filter((s) => s.day === d);
            if (!slots.length) return null;
            return (
              <div key={d}>
                <h3 className="text-xs uppercase tracking-[0.3em] text-violet-500 mb-3">
                  {d}
                </h3>
                <div className="space-y-2">
                  {slots.map((s) => (
                    <SlotCard
                      key={`${s.day}-${s.start}-${s.classId}-m`}
                      slot={s}
                      classTitle={classMap[s.classId].title}
                    />
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <p className="mt-8 text-sm text-violet-800/60 italic">
          *Los lugares disponibles se actualizan semanalmente. Una clase suelta para
          probar también es posible — escribinos por WhatsApp.
        </p>
      </div>
    </section>
  );
}

function FilterBtn({
  active,
  children,
  onClick,
}: {
  active: boolean;
  children: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`text-xs px-4 py-2 rounded-full border transition-all duration-300 ${
        active
          ? "bg-moss-600 text-sand-50 border-moss-600"
          : "bg-transparent text-violet-800/70 border-moss-200 hover:border-moss-600 hover:text-violet-800"
      }`}
    >
      {children}
    </button>
  );
}

function SlotCard({
  slot,
  classTitle,
}: {
  slot: ScheduleSlot;
  classTitle: string;
}) {
  const full = slot.spotsLeft === 0;
  const msg = `Hola Rashi! Quiero sumarme al grupo "${slot.groupName}" (${classTitle}) los ${slot.day} de ${slot.start} a ${slot.end}. ¿Tenés lugar?`;
  return (
    <a
      href={buildWhatsappLink(msg)}
      target="_blank"
      rel="noopener noreferrer"
      className={`block rounded-2xl p-4 border transition-all duration-300 hover:-translate-y-0.5 ${
        full
          ? "bg-cedar-700/10 border-cedar-700/20 opacity-70 cursor-default"
          : "bg-sand-50 border-moss-100 hover:border-cedar-400 hover:shadow-lg hover:shadow-moss-200/40"
      }`}
      onClick={(e) => full && e.preventDefault()}
    >
      <div className="text-[11px] tracking-widest uppercase text-violet-500 mb-1">
        {slot.start} · {slot.end}
      </div>
      <div className="font-display text-[15px] text-violet-800 leading-tight">
        {classTitle}
      </div>
      <div className="mt-2 flex items-center justify-between text-[11px]">
        <span className="text-violet-800/60">{slot.groupName}</span>
        <span
          className={`px-2 py-0.5 rounded-full text-[10px] font-medium ${
            full
              ? "bg-cedar-700/20 text-violet-700"
              : slot.spotsLeft <= 2
              ? "bg-cedar-400/20 text-violet-500"
              : "bg-moss-200/60 text-violet-800"
          }`}
        >
          {full ? "Sin cupo" : `${slot.spotsLeft} libres`}
        </span>
      </div>
    </a>
  );
}
