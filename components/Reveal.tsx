"use client";

import { ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";

export function Reveal({ children, delay = 0, className = "", as = "div" }: { children: ReactNode; delay?: number; className?: string; as?: keyof typeof motion }) {
  const prefersReducedMotion = useReducedMotion();
  const MotionComponent = motion[as as keyof typeof motion] as any;
  const FallbackComponent = as as any;

  if (prefersReducedMotion) {
    return <FallbackComponent className={className}>{children}</FallbackComponent>;
  }

  return (
    <MotionComponent
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 0.5, ease: "easeOut", delay }}
    >
      {children}
    </MotionComponent>
  );
}
