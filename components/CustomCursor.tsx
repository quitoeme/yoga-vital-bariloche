"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

/**
 * Cursor stickman que fluye por 6 asanas en bucle — un guiño a Uccara®,
 * la técnica energética de la escuela: movimiento rítmico y continuo.
 *
 * La secuencia (se encadena suave, como un saludo):
 *   1. Tadasana            — montaña, de pie en quietud.
 *   2. Urdhva Hastasana    — saludo hacia arriba, brazos al cielo.
 *   3. Vrksasana           — el árbol, equilibrio sobre una pierna.
 *   4. Virabhadrasana II   — guerrero, brazos extendidos.
 *   5. Trikonasana         — triángulo, torso inclinado.
 *   6. Uttanasana          — pinza de pie, pliegue hacia la tierra.
 *
 * El punto del mouse coincide con el centro del cuerpo. Sobre elementos
 * interactivos aparece la etiqueta (data-cursor-label). Al hacer click,
 * una leve contracción (prana saliendo).
 */

type XY = { x: number; y: number };
type Pose = {
  head: XY; // centro de la cabeza
  neck: XY; // base del cuello / hombros
  hip: XY; // pelvis
  le: XY; // codo izq
  lh: XY; // mano izq
  re: XY; // codo der
  rh: XY; // mano der
  lk: XY; // rodilla izq
  lf: XY; // pie izq
  rk: XY; // rodilla der
  rf: XY; // pie der
};

// La cabeza queda anclada al puntero (siempre cerca de y≈-16) y el cuerpo
// cuelga debajo haciendo las asanas, para que el ciclo se note claramente.
const POSES: Pose[] = [
  // 1 · Tadasana — montaña (brazos al costado)
  {
    head: { x: 0, y: -16 },
    neck: { x: 0, y: -12 },
    hip: { x: 0, y: 2 },
    le: { x: -3, y: -6 },
    lh: { x: -4, y: 2 },
    re: { x: 3, y: -6 },
    rh: { x: 4, y: 2 },
    lk: { x: -2, y: 11 },
    lf: { x: -2.5, y: 20 },
    rk: { x: 2, y: 11 },
    rf: { x: 2.5, y: 20 },
  },
  // 2 · Urdhva Hastasana — brazos al cielo
  {
    head: { x: 0, y: -16 },
    neck: { x: 0, y: -12 },
    hip: { x: 0, y: 2 },
    le: { x: -2, y: -17 },
    lh: { x: -3, y: -24 },
    re: { x: 2, y: -17 },
    rh: { x: 3, y: -24 },
    lk: { x: -2, y: 11 },
    lf: { x: -2.5, y: 20 },
    rk: { x: 2, y: 11 },
    rf: { x: 2.5, y: 20 },
  },
  // 3 · Vrksasana — el árbol (pie a la pierna, manos en namaste arriba)
  {
    head: { x: 0, y: -16 },
    neck: { x: 0, y: -12 },
    hip: { x: 0, y: 2 },
    le: { x: -3, y: -16 },
    lh: { x: -0.5, y: -22 },
    re: { x: 3, y: -16 },
    rh: { x: 0.5, y: -22 },
    lk: { x: -8, y: 6 },
    lf: { x: 0, y: 7 },
    rk: { x: 1.5, y: 11 },
    rf: { x: 2, y: 20 },
  },
  // 4 · Virabhadrasana II — guerrero, brazos extendidos
  {
    head: { x: 1, y: -15 },
    neck: { x: 1, y: -11 },
    hip: { x: 1, y: 3 },
    le: { x: -5, y: -11 },
    lh: { x: -13, y: -11 },
    re: { x: 7, y: -11 },
    rh: { x: 15, y: -11 },
    lk: { x: -8, y: 12 },
    lf: { x: -13, y: 20 },
    rk: { x: 11, y: 9 },
    rf: { x: 12, y: 20 },
  },
  // 5 · Utthita Tadasana — estrella (piernas y brazos abiertos)
  {
    head: { x: 0, y: -16 },
    neck: { x: 0, y: -12 },
    hip: { x: 0, y: 2 },
    le: { x: -7, y: -15 },
    lh: { x: -13, y: -19 },
    re: { x: 7, y: -15 },
    rh: { x: 13, y: -19 },
    lk: { x: -7, y: 11 },
    lf: { x: -11, y: 20 },
    rk: { x: 7, y: 11 },
    rf: { x: 11, y: 20 },
  },
  // 6 · Virabhadrasana I — guerrero I (estocada profunda, brazos arriba)
  {
    head: { x: 2, y: -15 },
    neck: { x: 2, y: -11 },
    hip: { x: 2, y: 3 },
    le: { x: 0, y: -16 },
    lh: { x: 1, y: -23 },
    re: { x: 4, y: -16 },
    rh: { x: 5, y: -23 },
    lk: { x: -8, y: 13 },
    lf: { x: -13, y: 21 },
    rk: { x: 10, y: 9 },
    rf: { x: 11, y: 20 },
  },
];

export default function CustomCursor() {
  const cursorX = useMotionValue(-200);
  const cursorY = useMotionValue(-200);
  const x = useSpring(cursorX, { damping: 26, stiffness: 300, mass: 0.5 });
  const y = useSpring(cursorY, { damping: 26, stiffness: 300, mass: 0.5 });

  const [enabled, setEnabled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [pressed, setPressed] = useState(false);
  const [label, setLabel] = useState<string>("");
  const [pose, setPose] = useState(0);

  // Detección de puntero fino + seguimiento del mouse
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
      setLabel(interactive?.dataset.cursorLabel ?? "");
    };
    const down = () => setPressed(true);
    const up = () => setPressed(false);
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

  // Ciclo de asanas — respeta prefers-reduced-motion (queda en quietud).
  useEffect(() => {
    if (!enabled) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => {
      setPose((p) => (p + 1) % POSES.length);
    }, 1500);
    return () => clearInterval(id);
  }, [enabled]);

  if (!enabled) return null;

  const p = POSES[pose];
  const C = "#FBF7F0";
  const flow = { duration: 0.85, ease: [0.45, 0, 0.25, 1] as const };

  const line = (a: XY, b: XY, key: string) => (
    <motion.line
      key={key}
      stroke={C}
      strokeWidth={2.4}
      strokeLinecap="round"
      animate={{ x1: a.x, y1: a.y, x2: b.x, y2: b.y }}
      transition={flow}
    />
  );

  return (
    <motion.div
      style={{ x, y }}
      animate={{ opacity: visible ? 1 : 0 }}
      transition={{ opacity: { duration: 0.2 } }}
      className="pointer-events-none fixed left-0 top-0 z-[100] hidden lg:block"
      aria-hidden
    >
      <motion.div
        animate={{ scale: pressed ? 0.85 : [1, 1.04, 1] }}
        transition={
          pressed
            ? { duration: 0.18, ease: "easeOut" }
            : { duration: 5, repeat: Infinity, ease: "easeInOut" }
        }
        className="relative -translate-x-1/2 -translate-y-1/2 mix-blend-difference"
      >
        <svg width="76" height="76" viewBox="-38 -38 76 76">
          {/* Trasladamos todo por -head: así la CABEZA queda siempre en el
              punto del cursor (el origen 0,0) y el cuerpo cuelga debajo. */}
          <motion.g animate={{ x: -p.head.x, y: -p.head.y }} transition={flow}>
            {/* tronco */}
            {line(p.neck, p.hip, "torso")}
            {/* brazos */}
            {line(p.neck, p.le, "uarmL")}
            {line(p.le, p.lh, "farmL")}
            {line(p.neck, p.re, "uarmR")}
            {line(p.re, p.rh, "farmR")}
            {/* piernas */}
            {line(p.hip, p.lk, "thighL")}
            {line(p.lk, p.lf, "shinL")}
            {line(p.hip, p.rk, "thighR")}
            {line(p.rk, p.rf, "shinR")}
            {/* cabeza */}
            <motion.circle
              r={4}
              fill={C}
              animate={{ cx: p.head.x, cy: p.head.y }}
              transition={flow}
            />
          </motion.g>
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
