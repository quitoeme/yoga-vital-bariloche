"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

type Variant = "default" | "hover" | "text";

/**
 * Cursor con forma de loto (padma) — símbolo central del yoga.
 *  - 8 pétalos: las Ashtanga, los ocho miembros del yoga de Patanjali.
 *  - Bindu central: el punto de conciencia, semilla del que todo emana.
 *  - Anillo exterior: el halo del meditante, la aura.
 *
 * Estados:
 *  - default: loto en reposo, respira y rota lento.
 *  - hover:   florece (segunda corola estilo Sahasrara).
 *  - text:    pétalos se recogen y aparece la barra-mantra vertical.
 *  - pressed: contracción + ondas concéntricas tipo prana saliendo del bindu.
 */
export default function CustomCursor() {
  const cursorX = useMotionValue(-200);
  const cursorY = useMotionValue(-200);
  const x = useSpring(cursorX, { damping: 28, stiffness: 280, mass: 0.5 });
  const y = useSpring(cursorY, { damping: 28, stiffness: 280, mass: 0.5 });

  const [variant, setVariant] = useState<Variant>("default");
  const [label, setLabel] = useState<string>("");
  const [enabled, setEnabled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [pressed, setPressed] = useState(false);
  const [pulseKey, setPulseKey] = useState(0);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    setEnabled(true);

    const move = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const over = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      const interactive = t.closest<HTMLElement>(
        "a, button, [role='button'], [data-cursor]"
      );
      if (interactive) {
        const dc = interactive.dataset.cursor;
        if (dc === "text") {
          setVariant("text");
          setLabel("");
        } else {
          setVariant("hover");
          setLabel(interactive.dataset.cursorLabel ?? "");
        }
      } else if (t.closest("input, textarea, [contenteditable], select")) {
        setVariant("text");
        setLabel("");
      } else {
        setVariant("default");
        setLabel("");
      }
    };

    const down = () => setPressed(true);
    const up = () => {
      setPressed(false);
      setPulseKey((k) => k + 1);
    };

    const enter = () => setVisible(true);
    const leave = () => setVisible(false);

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    window.addEventListener("mousedown", down);
    window.addEventListener("mouseup", up);
    document.addEventListener("mouseenter", enter);
    document.addEventListener("mouseleave", leave);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
      window.removeEventListener("mousedown", down);
      window.removeEventListener("mouseup", up);
      document.removeEventListener("mouseenter", enter);
      document.removeEventListener("mouseleave", leave);
    };
  }, [cursorX, cursorY]);

  if (!enabled) return null;

  const isHover = variant === "hover";
  const isText = variant === "text";

  // Geometría según estado (la contracción del press tiene prioridad sobre hover)
  const ring = {
    r: pressed ? 10 : isHover ? 26 : isText ? 0 : 18,
    opacity: pressed ? 0.85 : isHover ? 0.55 : isText ? 0 : 0.32,
  };
  const petal = pressed
    ? { cy: -7, rx: 1.6, ry: 3.6, opacity: 0.85 }
    : isHover
    ? { cy: -19, rx: 3.4, ry: 10.5, opacity: 0.95 }
    : isText
    ? { cy: 0, rx: 0, ry: 0, opacity: 0 }
    : { cy: -12, rx: 2.4, ry: 6.2, opacity: 0.95 };
  const inner = pressed
    ? { cy: -4, rx: 1, ry: 2.4, opacity: 0.6 }
    : isHover
    ? { cy: -10, rx: 1.6, ry: 5, opacity: 0.7 }
    : isText
    ? { cy: 0, rx: 0, ry: 0, opacity: 0 }
    : { cy: -6, rx: 1.2, ry: 3.2, opacity: 0.4 };
  const bindu = pressed
    ? 3.4
    : isText
    ? 0
    : isHover
    ? 2.8
    : 1.5;

  return (
    <motion.div
      style={{ x, y }}
      animate={{ opacity: visible ? 1 : 0 }}
      transition={{ opacity: { duration: 0.2 } }}
      className="pointer-events-none fixed left-0 top-0 z-[100] hidden lg:block"
      aria-hidden
    >
      {/* Respiración pasiva: leve pulso de 6 segundos, como prana */}
      <motion.div
        animate={{ scale: pressed ? 0.82 : [1, 1.05, 1] }}
        transition={
          pressed
            ? { duration: 0.18, ease: "easeOut" }
            : { duration: 6, repeat: Infinity, ease: "easeInOut" }
        }
        className="relative -translate-x-1/2 -translate-y-1/2 mix-blend-difference"
      >
        <svg width="72" height="72" viewBox="-36 -36 72 72">
          {/* Ondas de prana al hacer click — concéntricas desde el bindu */}
          <motion.circle
            key={`ripple-a-${pulseKey}`}
            cx="0"
            cy="0"
            fill="none"
            stroke="#FBF7F0"
            strokeWidth="1.1"
            initial={{ r: 3, opacity: 0.85 }}
            animate={{ r: 34, opacity: 0 }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          />
          <motion.circle
            key={`ripple-b-${pulseKey}`}
            cx="0"
            cy="0"
            fill="none"
            stroke="#FBF7F0"
            strokeWidth="0.7"
            initial={{ r: 1, opacity: 0.65 }}
            animate={{ r: 22, opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
          />

          {/* Cuerpo del loto que rota lentamente como mandala */}
          <motion.g
            animate={{ rotate: isText ? 0 : 360 }}
            transition={
              isText
                ? { duration: 0.4 }
                : { duration: 36, repeat: Infinity, ease: "linear" }
            }
            style={{ transformOrigin: "0 0" }}
          >
            {/* Halo exterior — aura del meditante */}
            <motion.circle
              cx="0"
              cy="0"
              r={18}
              fill="none"
              stroke="#FBF7F0"
              strokeWidth="0.5"
              strokeDasharray="2 3"
              animate={{ r: ring.r, opacity: ring.opacity }}
              transition={{ duration: 0.35 }}
            />

            {/* 8 pétalos exteriores — Ashtanga, los 8 miembros del yoga */}
            {Array.from({ length: 8 }).map((_, i) => (
              <g key={`p1-${i}`} transform={`rotate(${(i * 360) / 8})`}>
                <motion.ellipse
                  cx="0"
                  cy={-12}
                  rx={2.4}
                  ry={6.2}
                  fill="#FBF7F0"
                  animate={{
                    cy: petal.cy,
                    rx: petal.rx,
                    ry: petal.ry,
                    opacity: petal.opacity,
                  }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                />
              </g>
            ))}

            {/* 8 pétalos interiores rotados 22.5° — Sahasrara floreciendo */}
            {Array.from({ length: 8 }).map((_, i) => (
              <g key={`p2-${i}`} transform={`rotate(${(i * 360) / 8 + 22.5})`}>
                <motion.ellipse
                  cx="0"
                  cy={-6}
                  rx={1.2}
                  ry={3.2}
                  fill="#FBF7F0"
                  animate={{
                    cy: inner.cy,
                    rx: inner.rx,
                    ry: inner.ry,
                    opacity: inner.opacity,
                  }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                />
              </g>
            ))}

            {/* Bindu — punto de conciencia */}
            <motion.circle
              cx="0"
              cy="0"
              r={1.5}
              fill="#FBF7F0"
              animate={{ r: bindu }}
              transition={{ duration: 0.3 }}
            />
          </motion.g>

          {/* Modo texto: barra-mantra vertical (no rota con el loto) */}
          <motion.rect
            x="-0.6"
            y="-11"
            width="1.2"
            height="22"
            rx="0.6"
            fill="#FBF7F0"
            initial={{ opacity: 0 }}
            animate={{ opacity: isText ? 0.95 : 0 }}
            transition={{ duration: 0.25 }}
          />
        </svg>

        {label && (
          <motion.span
            key={label}
            initial={{ opacity: 0, y: 6, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.25 }}
            className="absolute left-1/2 -translate-x-1/2 top-14 whitespace-nowrap text-[10px] tracking-[0.32em] uppercase text-sand-50 bg-violet-800/85 backdrop-blur px-3 py-1 rounded-full"
          >
            {label}
          </motion.span>
        )}
      </motion.div>
    </motion.div>
  );
}
