"use client";

import { site } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-sand-50/70 py-14">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">
        <div>
          <div className="font-display text-2xl text-sand-50">{site.name}</div>
          <p className="mt-2 text-sm leading-relaxed">
            {site.lineage}
          </p>
        </div>

        <div className="text-sm space-y-1">
          <p className="uppercase tracking-[0.3em] text-violet-300 text-[10px] mb-2">
            Mapa del sitio
          </p>
          <a href="#yoga-vital" className="block hover:text-sand-50">Yoga Vital</a>
          <a href="#rashi" className="block hover:text-sand-50">Rashi</a>
          <a href="#clases" className="block hover:text-sand-50">Clases</a>
          <a href="#horarios" className="block hover:text-sand-50">Horarios</a>
          <a href="#reservar" className="block hover:text-sand-50">Reservar</a>
          <a href="#cursos" className="block hover:text-sand-50">Cursos</a>
          <a href="#talleres" className="block hover:text-sand-50">Talleres</a>
          <a href="#eventos" className="block hover:text-sand-50">Eventos</a>
        </div>

        <div className="text-sm space-y-1">
          <p className="uppercase tracking-[0.3em] text-violet-300 text-[10px] mb-2">
            Contacto
          </p>
          <p>{site.whatsappDisplay}</p>
          <p>{site.email}</p>
          <p className="leading-relaxed">{site.address}</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-12 pt-6 border-t border-sand-50/10 flex flex-col md:flex-row md:justify-between items-center gap-2 text-xs text-sand-50/50">
        <span>
          © {new Date().getFullYear()} {site.name}. Todos los derechos reservados.
        </span>
        <span className="italic font-display">
          Hecho con respiración profunda en la Patagonia.
        </span>
      </div>
    </footer>
  );
}
