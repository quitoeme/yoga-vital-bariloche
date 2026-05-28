"use client";

import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import { CheckCircle2, Send } from "lucide-react";
import { classFeatures, schedule, type ScheduleSlot } from "@/lib/data";
import { buildWhatsappLink, reservationMessage } from "@/lib/whatsapp";
import Magnetic from "./Magnetic";

const monthsFromToday = () => {
  const out: string[] = [];
  const now = new Date();
  const labels = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];
  for (let i = 0; i < 4; i++) {
    const d = new Date(now.getFullYear(), now.getMonth() + i, 1);
    out.push(`${labels[d.getMonth()]} ${d.getFullYear()}`);
  }
  return out;
};

export default function Reservation() {
  const months = useMemo(monthsFromToday, []);
  const classMap = useMemo(
    () => Object.fromEntries(classFeatures.map((c) => [c.id, c])),
    []
  );
  const available = schedule.filter((s) => s.spotsLeft > 0);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [slotKey, setSlotKey] = useState<string>(
    keyOf(available[0])
  );
  const [month, setMonth] = useState(months[0]);

  const slot = available.find((s) => keyOf(s) === slotKey) ?? available[0];
  const classTitle = classMap[slot.classId]?.title ?? "Yoga Vital";

  const ready = name.trim().length > 1;

  const message = reservationMessage({
    name: name.trim() || "—",
    email: email.trim() || undefined,
    groupName: slot.groupName,
    classTitle,
    day: slot.day,
    time: `${slot.start} - ${slot.end}`,
    month,
  });

  const href = buildWhatsappLink(message);

  return (
    <section
      id="reservar"
      className="relative py-28 md:py-36 overflow-hidden bg-gradient-to-b from-sand-50 via-lake-200/30 to-sand-50"
    >
      <div className="absolute inset-0 breathe-bg opacity-50" aria-hidden />

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5"
          >
            <span className="section-eyebrow">Reservá tu lugar</span>
            <h2 className="font-display text-4xl md:text-5xl text-violet-800 mt-5 leading-[1.05]">
              Un mes completo,{" "}
              <span className="italic text-violet-500">tu lugar fijo</span>
            </h2>
            <p className="mt-5 text-violet-800/75 text-lg leading-relaxed">
              Elegí el grupo y el mes. Te aseguramos tu lugar y Rashi recibe la
              reserva al instante por WhatsApp.
            </p>

            <ul className="mt-8 space-y-3">
              {[
                "Cupo reservado durante 48hs después de enviar",
                "Coordinás forma de pago directamente con Rashi",
                "Podés probar una clase antes de reservar el mes",
              ].map((b) => (
                <li
                  key={b}
                  className="flex items-start gap-3 text-violet-800/85 text-[15px]"
                >
                  <CheckCircle2
                    size={18}
                    className="text-moss-600 shrink-0 mt-0.5"
                  />
                  {b}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.15 }}
            action={href}
            target="_blank"
            rel="noopener noreferrer"
            onSubmit={(e) => {
              if (!ready) {
                e.preventDefault();
                return;
              }
            }}
            className="lg:col-span-7 bg-sand-50 border border-moss-100 rounded-3xl p-8 shadow-xl shadow-moss-200/40"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <Field
                label="Tu nombre"
                placeholder="María"
                value={name}
                onChange={setName}
                required
              />
              <Field
                label="Email (opcional)"
                placeholder="maria@ejemplo.com"
                value={email}
                onChange={setEmail}
                type="email"
              />
            </div>

            <div className="mt-5">
              <Label>Elegí grupo</Label>
              <div className="grid sm:grid-cols-2 gap-2 mt-2">
                {available.map((s) => {
                  const k = keyOf(s);
                  const active = slotKey === k;
                  const title = classMap[s.classId]?.title ?? "";
                  return (
                    <button
                      type="button"
                      key={k}
                      onClick={() => setSlotKey(k)}
                      className={`text-left rounded-2xl border p-3.5 transition-all duration-300 ${
                        active
                          ? "bg-moss-600 border-moss-600 text-sand-50"
                          : "bg-sand-100/60 border-moss-100 hover:border-cedar-400"
                      }`}
                    >
                      <div
                        className={`text-[10px] tracking-widest uppercase ${
                          active ? "text-sand-100/80" : "text-violet-500"
                        }`}
                      >
                        {s.day} · {s.start} – {s.end}
                      </div>
                      <div
                        className={`font-display text-base mt-0.5 ${
                          active ? "text-sand-50" : "text-violet-800"
                        }`}
                      >
                        {title}
                      </div>
                      <div
                        className={`text-[11px] mt-1 ${
                          active ? "text-sand-100/85" : "text-violet-800/60"
                        }`}
                      >
                        {s.groupName} · {s.spotsLeft} libres
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="mt-5">
              <Label>Mes a reservar</Label>
              <div className="flex flex-wrap gap-2 mt-2">
                {months.map((m) => {
                  const active = month === m;
                  return (
                    <button
                      type="button"
                      key={m}
                      onClick={() => setMonth(m)}
                      className={`px-4 py-2 rounded-full text-sm border transition-all ${
                        active
                          ? "bg-cedar-600 border-cedar-600 text-sand-50"
                          : "border-moss-200 text-violet-800/70 hover:border-cedar-400"
                      }`}
                    >
                      {m}
                    </button>
                  );
                })}
              </div>
            </div>

            <details className="mt-6 text-sm rounded-2xl bg-sand-100/60 border border-moss-100 p-4">
              <summary className="cursor-pointer text-violet-800/80">
                Ver el mensaje que le va a llegar a Rashi
              </summary>
              <pre className="mt-3 whitespace-pre-wrap text-violet-800/75 text-[13px] font-sans leading-relaxed">
                {message}
              </pre>
            </details>

            <Magnetic strength={0.18} as="div" className="mt-8 block w-full">
              <button
                type="submit"
                disabled={!ready}
                data-cursor-label="enviar"
                className={`w-full btn-primary justify-center py-4 text-base ${
                  !ready ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                <Send size={16} /> Enviar reserva a Rashi por WhatsApp
              </button>
            </Magnetic>

            <p className="mt-3 text-xs text-violet-800/55 text-center">
              Vas a abrir WhatsApp con el mensaje pre-armado. Solo apretás enviar.
            </p>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function keyOf(s: ScheduleSlot) {
  return `${s.day}-${s.start}-${s.classId}`;
}

function Field({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
  required,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <Label>{label}</Label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        required={required}
        className="mt-2 w-full bg-sand-100/60 border border-moss-100 rounded-xl px-4 py-3 text-violet-800 placeholder:text-violet-800/40 focus:outline-none focus:border-cedar-500 focus:bg-sand-50 transition-colors"
      />
    </div>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return (
    <label className="text-xs uppercase tracking-[0.22em] text-violet-500">
      {children}
    </label>
  );
}
