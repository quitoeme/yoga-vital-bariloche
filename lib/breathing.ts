// Práctica guiada de respiración. El ritmo es asimétrico a propósito: la
// exhalación más larga que la inhalación es lo que activa la respuesta
// parasimpática (el keyframe decorativo `animate-breathe` es 50/50 y sirve
// como adorno, no como guía).
export const PHASES = [
  { key: "inhale", label: "Inhalá", hint: "por la nariz, sin apuro", ms: 4000, scale: 1 },
  { key: "hold", label: "Sostené", hint: "sin tensión", ms: 2000, scale: 1 },
  { key: "exhale", label: "Exhalá", hint: "largo y suave", ms: 6000, scale: 0.5 },
] as const;

/** 5 ciclos de 12s = 60s exactos. */
export const TOTAL_CYCLES = 5;

export const BREATHING_EVENT = "ayv:open-breathing";

/** Abre la práctica desde cualquier componente, sin necesidad de un provider. */
export function openBreathing() {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new CustomEvent(BREATHING_EVENT));
}
