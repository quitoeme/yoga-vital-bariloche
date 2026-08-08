"use client";

import { site } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-moss-50 text-violet-800/70 py-14 border-t border-moss-100">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">
        <div>
          <div className="font-display text-2xl text-violet-800">{site.name}</div>
          <p className="mt-2 text-sm leading-relaxed">
            {site.lineage}
          </p>
        </div>

        <div className="text-sm space-y-1">
          <p className="uppercase tracking-[0.3em] text-violet-500 text-[10px] mb-2">
            Mapa del sitio
          </p>
          <a href="#yoga-vital" className="block hover:text-violet-800">Ayur Yoga Vital</a>
          <a href="#rashi" className="block hover:text-violet-800">Rashi</a>
          <a href="#clases" className="block hover:text-violet-800">Clases</a>
          <a href="#horarios" className="block hover:text-violet-800">Horarios</a>
          <a href="#reservar" className="block hover:text-violet-800">Reservar</a>
          <a href="#cursos" className="block hover:text-violet-800">Cursos</a>
          <a href="#talleres" className="block hover:text-violet-800">Talleres</a>
          <a href="#eventos" className="block hover:text-violet-800">Eventos</a>
        </div>

        <div className="text-sm space-y-1">
          <p className="uppercase tracking-[0.3em] text-violet-500 text-[10px] mb-2">
            Contacto
          </p>
          <p>{site.whatsappDisplay}</p>
          <p>{site.email}</p>
          <p className="leading-relaxed">{site.address}</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-12 pt-6 border-t border-violet-800/10 flex flex-col md:flex-row md:justify-between items-center gap-2 text-xs text-violet-800/50">
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
