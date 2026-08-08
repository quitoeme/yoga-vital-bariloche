"use client";

import { MotionConfig } from "framer-motion";

/**
 * El reset de `prefers-reduced-motion` en globals.css solo alcanza a las
 * animaciones CSS: framer-motion calcula transforms inline y los ignora.
 * `reducedMotion="user"` hace que framer-motion respete la preferencia del
 * sistema en todo el árbol (desactiva transforms, deja pasar los fades).
 */
export default function MotionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
