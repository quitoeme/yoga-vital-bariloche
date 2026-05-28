"use client";

const phrases = [
  "Yoga Vital",
  "Ayur Yoga Terapéutico",
  "Baños de Gong",
  "Meditación",
  "Profesorado",
  "Uccara®",
  "Bariloche",
  "Pranayama",
  "Reiki",
];

export default function Marquee() {
  return (
    <div className="relative bg-moss-800 text-sand-50 py-6 overflow-hidden border-y border-moss-600">
      <div className="flex animate-marquee whitespace-nowrap gap-12">
        {[...phrases, ...phrases, ...phrases].map((p, i) => (
          <span
            key={i}
            className="font-display text-2xl md:text-4xl italic font-light tracking-tight inline-flex items-center gap-12"
          >
            {p}
            <Dot />
          </span>
        ))}
      </div>
    </div>
  );
}

function Dot() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5 text-violet-300" aria-hidden>
      <circle cx="12" cy="12" r="4" fill="currentColor" />
    </svg>
  );
}
