"use client";

import { ReactNode, useEffect, useState } from "react";
import { ReactLenis } from "lenis/react";
import { useReducedMotion } from "motion/react";

export function SmoothScroll({ children }: { children: ReactNode }) {
  const prefersReducedMotion = useReducedMotion();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || prefersReducedMotion) {
    return <>{children}</>;
  }

  return (
    <ReactLenis root options={{ duration: 1.1, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), smoothWheel: true, syncTouch: false }}>
      {children}
    </ReactLenis>
  );
}
