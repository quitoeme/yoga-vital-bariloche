"use client";

import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { useEffect, useRef } from "react";

type Props = {
  size?: number;
  color?: string;
  className?: string;
};

export default function CursorSpotlight({
  size = 420,
  color = "rgba(251, 247, 240, 0.20)",
  className = "",
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(-9999);
  const y = useMotionValue(-9999);
  const sx = useSpring(x, { damping: 22, stiffness: 160, mass: 0.6 });
  const sy = useSpring(y, { damping: 22, stiffness: 160, mass: 0.6 });

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const el = ref.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const inside =
        e.clientX >= r.left &&
        e.clientX <= r.right &&
        e.clientY >= r.top &&
        e.clientY <= r.bottom;
      if (!inside) {
        x.set(-9999);
        y.set(-9999);
        return;
      }
      x.set(e.clientX - r.left);
      y.set(e.clientY - r.top);
    };
    window.addEventListener("mousemove", handler);
    return () => window.removeEventListener("mousemove", handler);
  }, [x, y]);

  const bg = useMotionTemplate`radial-gradient(${size}px circle at ${sx}px ${sy}px, ${color}, transparent 70%)`;

  return (
    <motion.div
      ref={ref}
      aria-hidden
      style={{ background: bg }}
      className={`pointer-events-none absolute inset-0 ${className}`}
    />
  );
}
