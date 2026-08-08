"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import { X, Wind } from "lucide-react";
import {
  BREATHING_EVENT,
  PHASES,
  TOTAL_CYCLES,
  openBreathing,
} from "@/lib/breathing";
import { buildWhatsappLink, generalMessage } from "@/lib/whatsapp";

const INVITE_SEEN_KEY = "ayv:breathing-invite-seen";
const IDLE_MS = 45_000;
const SCROLL_DEPTH = 0.5;
/** Permanencia mínima antes de poder invitar: sin esto, quien entra con la
 *  página ya scrolleada vería la invitación al instante, que es justo el
 *  patrón de "interstitial de entrada" que Google penaliza en mobile. */
const MIN_DWELL_MS = 20_000;

type Status = "running" | "done";

export default function BreathingSession() {
  const [open, setOpen] = useState(false);
  const [invite, setInvite] = useState(false);

  const start = useCallback(() => {
    setInvite(false);
    try {
      sessionStorage.setItem(INVITE_SEEN_KEY, "1");
    } catch {
      /* modo incógnito con storage bloqueado: no es crítico */
    }
    setOpen(true);
  }, []);

  const dismissInvite = useCallback(() => {
    setInvite(false);
    try {
      sessionStorage.setItem(INVITE_SEEN_KEY, "1");
    } catch {
      /* idem */
    }
  }, []);

  // Apertura explícita desde cualquier parte del sitio (BreathingCircle, etc.)
  useEffect(() => {
    window.addEventListener(BREATHING_EVENT, start);
    return () => window.removeEventListener(BREATHING_EVENT, start);
  }, [start]);

  // Invitación: una sola vez por sesión, tras señales de interés real
  // (scroll > 50% o 45s de inactividad). Nunca mientras se completa un campo
  // del formulario de reserva, para no costarle una reserva a Rashi.
  useEffect(() => {
    try {
      if (sessionStorage.getItem(INVITE_SEEN_KEY)) return;
    } catch {
      return;
    }

    let idleTimer: ReturnType<typeof setTimeout>;
    let dwellTimer: ReturnType<typeof setTimeout>;
    let done = false;
    let dwellOk = false;

    const isTyping = () => {
      const el = document.activeElement;
      if (!el) return false;
      const tag = el.tagName;
      return (
        tag === "INPUT" ||
        tag === "TEXTAREA" ||
        tag === "SELECT" ||
        (el as HTMLElement).isContentEditable
      );
    };

    const deepEnough = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      return max > 0 && window.scrollY / max > SCROLL_DEPTH;
    };

    const trigger = () => {
      if (done || !dwellOk || isTyping()) return;
      done = true;
      setInvite(true);
      cleanup();
    };

    const onScroll = () => {
      if (deepEnough()) trigger();
      resetIdle();
    };

    const resetIdle = () => {
      clearTimeout(idleTimer);
      idleTimer = setTimeout(trigger, IDLE_MS);
    };

    const cleanup = () => {
      clearTimeout(idleTimer);
      clearTimeout(dwellTimer);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("pointermove", resetIdle);
      window.removeEventListener("keydown", resetIdle);
    };

    dwellTimer = setTimeout(() => {
      dwellOk = true;
      // Se puede llegar con la página ya scrolleada (restauración del navegador
      // o link con #ancla). En ese caso no llega ningún evento de scroll, así
      // que hay que evaluar la profundidad también acá.
      if (deepEnough()) trigger();
    }, MIN_DWELL_MS);

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("pointermove", resetIdle, { passive: true });
    window.addEventListener("keydown", resetIdle);
    resetIdle();

    return cleanup;
  }, []);

  // Nota: deliberadamente sin AnimatePresence. Retenía los hijos esperando una
  // animación de salida que, con reducir-movimiento activo, tardaba segundos en
  // completar — el overlay quedaba imposible de cerrar. Descartar nunca puede
  // depender de una animación decorativa; solo animamos la entrada.
  return (
    <>
      {invite && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="fixed bottom-6 left-6 z-40 max-w-[19rem]"
          >
            <div className="flex items-start gap-3 rounded-2xl border border-moss-100 bg-sand-50/95 p-4 shadow-xl shadow-violet-800/10 backdrop-blur-md">
              <span className="mt-0.5 shrink-0 text-violet-500">
                <Wind size={18} />
              </span>
              <div>
                <p className="font-display text-[15px] italic text-violet-800">
                  ¿Un minuto para vos?
                </p>
                <p className="mt-1 text-[13px] leading-snug text-violet-800/70">
                  Te guío un ciclo de respiración consciente. Sin apuro.
                </p>
                <button
                  type="button"
                  onClick={start}
                  data-cursor-label="respirar"
                  className="mt-3 rounded-full bg-moss-600 px-4 py-1.5 text-[13px] font-medium text-sand-50 transition-colors hover:bg-moss-800"
                >
                  Respirar un minuto
                </button>
              </div>
              <button
                type="button"
                onClick={dismissInvite}
                aria-label="Cerrar invitación"
                className="-mr-1 -mt-1 shrink-0 rounded-full p-1 text-violet-800/40 transition-colors hover:text-violet-800"
              >
                <X size={16} />
              </button>
            </div>
        </motion.div>
      )}

      {open && <BreathingOverlay onClose={() => setOpen(false)} />}
    </>
  );
}

function BreathingOverlay({ onClose }: { onClose: () => void }) {
  const reduced = useReducedMotion();
  const [status, setStatus] = useState<Status>("running");
  const [cycle, setCycle] = useState(0);
  const [phaseIndex, setPhaseIndex] = useState(0);
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  const phase = PHASES[phaseIndex];

  // Motor del ciclo
  useEffect(() => {
    if (status !== "running") return;
    const t = setTimeout(() => {
      const next = phaseIndex + 1;
      if (next < PHASES.length) {
        setPhaseIndex(next);
        return;
      }
      const nextCycle = cycle + 1;
      if (nextCycle >= TOTAL_CYCLES) {
        setStatus("done");
      } else {
        setCycle(nextCycle);
        setPhaseIndex(0);
      }
    }, phase.ms);
    return () => clearTimeout(t);
  }, [status, phaseIndex, cycle, phase.ms]);

  // Bloquea el scroll de fondo mientras la práctica está abierta
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, []);

  // Escape + focus trap (el modal de Talleres no los tiene; acá sí)
  useEffect(() => {
    closeRef.current?.focus();

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
        return;
      }
      if (e.key !== "Tab") return;

      const focusables = dialogRef.current?.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
      );
      if (!focusables?.length) return;

      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [onClose]);

  const done = status === "done";

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed inset-0 z-[90] flex items-center justify-center overflow-hidden bg-sand-50/95 px-6 backdrop-blur-xl"
      onClick={onClose}
    >
      <div className="breathe-bg pointer-events-none absolute inset-0 opacity-50" aria-hidden />

      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-label="Práctica guiada de respiración"
        onClick={(e) => e.stopPropagation()}
        className="relative flex w-full max-w-md flex-col items-center text-center"
      >
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          aria-label="Cerrar la práctica"
          className="fixed right-5 top-5 rounded-full p-2 text-violet-800/50 transition-colors hover:bg-violet-800/5 hover:text-violet-800"
        >
          <X size={22} />
        </button>

        {/* Anillos concéntricos: mismo lenguaje visual que el BreathingCircle
            decorativo de la sección "La práctica", pero centrados y guiando.
            Todos absolutos con `inset-*`: si alguno queda en el flujo, el flex
            lo trata como item, lo aplasta a un óvalo y lo corre de eje. */}
        <div className="relative mt-6 h-64 w-64 sm:h-72 sm:w-72">
          <Ring
            className="absolute inset-0 border border-moss-200"
            scale={phase.scale}
            ms={phase.ms}
            reduced={reduced}
          />
          <Ring
            className="absolute inset-8 border border-cedar-400/50"
            scale={phase.scale}
            ms={phase.ms}
            reduced={reduced}
            delay={0.08}
          />
          <Ring
            className="absolute inset-16 bg-moss-600/20"
            scale={phase.scale}
            ms={phase.ms}
            reduced={reduced}
            delay={0.16}
          />

          <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-6 text-center">
            {done ? (
              <p className="font-display text-2xl italic text-violet-800">
                Volviste
              </p>
            ) : (
              // Texto sólido, sin animación de entrada. Un fade en cada cambio
              // de fase hacía parpadear la instrucción y la dejaba semi-
              // transparente buena parte del ciclo. Es lo único que guía a
              // quien tiene reducir-movimiento activo: tiene que leerse
              // siempre. El movimiento ya lo aportan los anillos.
              <div aria-live="polite">
                <p className="font-display text-3xl italic text-violet-800">
                  {phase.label}
                </p>
                <p className="mt-1 text-[13px] text-violet-800/75">
                  {phase.hint}
                </p>
              </div>
            )}
          </div>
        </div>

        {done ? (
          <div className="mt-10">
            <p className="text-[15px] leading-relaxed text-violet-800/75">
              Eso que acabás de hacer es el comienzo de cada clase. El resto
              lo hacemos juntos.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <a
                href={buildWhatsappLink(generalMessage())}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor-label="hablar"
                className="btn-primary text-sm"
              >
                Hablar con Rashi
              </a>
              <button
                type="button"
                onClick={onClose}
                className="btn-ghost text-sm"
              >
                Seguir navegando
              </button>
            </div>
          </div>
        ) : (
          <>
            <div className="mt-10 flex items-center gap-2" aria-hidden>
              {Array.from({ length: TOTAL_CYCLES }).map((_, i) => (
                <span
                  key={i}
                  className={`h-1.5 rounded-full transition-all duration-500 ${
                    i < cycle
                      ? "w-6 bg-moss-400"
                      : i === cycle
                      ? "w-6 bg-violet-400"
                      : "w-1.5 bg-moss-200"
                  }`}
                />
              ))}
            </div>
            <p className="mt-4 text-[11px] uppercase tracking-[0.3em] text-violet-800/40">
              Ciclo {cycle + 1} de {TOTAL_CYCLES}
            </p>
          </>
        )}
      </div>
    </motion.div>
  );
}

function Ring({
  className,
  scale,
  ms,
  reduced,
  delay = 0,
}: {
  className: string;
  scale: number;
  ms: number;
  reduced: boolean | null;
  delay?: number;
}) {
  // Con "reducir movimiento" activado no escalamos nada: el escalado grande y
  // automático es justamente el disparador vestibular. Queda la guía de texto
  // y un latido de opacidad, que es seguro.
  return (
    <motion.div
      aria-hidden
      className={`rounded-full ${className}`}
      // Arranca contraído (estado de fin de exhalación). Sin esto el anillo
      // nace en tamaño máximo y la PRIMERA inhalación no crece: te dice
      // "inhalá" y no pasa nada visualmente, justo en la primera impresión.
      initial={reduced ? { opacity: 0.55 } : { scale: 0.5, opacity: 0.7 }}
      animate={
        reduced
          ? { opacity: scale === 1 ? 1 : 0.55 }
          : { scale, opacity: scale === 1 ? 1 : 0.7 }
      }
      transition={{ duration: ms / 1000, ease: "easeInOut", delay }}
    />
  );
}
