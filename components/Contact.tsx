"use client";

import { motion } from "framer-motion";
import { MapPin, Mail, MessageCircle, Instagram, Facebook } from "lucide-react";
import { site } from "@/lib/data";
import { buildWhatsappLink, generalMessage } from "@/lib/whatsapp";

export default function Contact() {
  return (
    <section
      id="contacto"
      className="relative py-28 md:py-36 bg-moss-800 text-sand-50 overflow-hidden"
    >
      <div className="absolute inset-0 breathe-bg opacity-30" aria-hidden />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7"
          >
            <span className="section-eyebrow text-violet-200 before:bg-violet-300">
              Encontranos
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl mt-5 leading-[1.05]">
              Te esperamos en{" "}
              <span className="italic text-violet-300">Bariloche</span>
            </h2>
            <p className="mt-6 text-sand-100/80 text-lg leading-relaxed max-w-xl">
              El espacio está pensado para que llegues, dejes el mundo afuera y
              te encuentres. Si es la primera vez, contanos y te orientamos.
            </p>

            <div className="mt-10 grid sm:grid-cols-2 gap-3">
              <ContactCard
                icon={<MessageCircle size={18} />}
                label="WhatsApp"
                value={site.whatsappDisplay}
                href={buildWhatsappLink(generalMessage())}
              />
              <ContactCard
                icon={<Mail size={18} />}
                label="Email"
                value={site.email}
                href={`mailto:${site.email}`}
              />
              <ContactCard
                icon={<MapPin size={18} />}
                label="Estudio"
                value={site.address}
              />
              <ContactCard
                icon={<Instagram size={18} />}
                label="Instagram"
                value={site.instagram}
                href={`https://instagram.com/${site.instagram.replace("@", "")}`}
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
            className="lg:col-span-5"
          >
            <div className="aspect-square rounded-3xl overflow-hidden border border-moss-400/30 relative">
              <iframe
                src="https://www.openstreetmap.org/export/embed.html?bbox=-71.318%2C-41.137%2C-71.290%2C-41.125&layer=mapnik&marker=-41.1335%2C-71.3103"
                className="w-full h-full grayscale-[20%] contrast-110"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mapa estudio Ayur Yoga Vital Bariloche"
              />
              <div className="absolute inset-0 pointer-events-none ring-1 ring-inset ring-cedar-400/30" />
            </div>
            <div className="mt-4 flex items-center justify-between text-sm text-sand-100/70">
              <span>Av. San Martín 586 · 1° B</span>
              <a
                href="https://maps.google.com/?q=Av.+San+Martin+586,+San+Carlos+de+Bariloche"
                target="_blank"
                rel="noopener noreferrer"
                className="text-violet-300 hover:text-sand-100 underline underline-offset-2"
              >
                Cómo llegar
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ContactCard({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}) {
  const inside = (
    <div className="bg-moss-600/40 hover:bg-moss-600/60 border border-moss-400/30 rounded-2xl p-5 transition-all duration-300 hover:border-cedar-400/60 group">
      <div className="flex items-center gap-2 text-violet-300 mb-2">
        {icon}
        <span className="text-[10px] uppercase tracking-[0.3em]">{label}</span>
      </div>
      <div className="text-sand-50 group-hover:text-sand-100 transition-colors">
        {value}
      </div>
    </div>
  );
  return href ? (
    <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer">
      {inside}
    </a>
  ) : (
    inside
  );
}
