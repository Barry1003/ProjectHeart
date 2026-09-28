"use client";

import { useScroll, useTransform, motion, useReducedMotion } from "motion/react";
import { useRef } from "react";
import { Icon } from "../ui/Icon";

export function HeroParallax() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  const prefersReducedMotion = useReducedMotion();
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <figure ref={ref} className="photo-frame photo-frame--tall" role="img" aria-label="Traders gathered around a food stall in Lagos">
      <motion.img 
        style={{ y: prefersReducedMotion ? 0 : y, scale: prefersReducedMotion ? 1 : 1.2, transformOrigin: 'center' }}
        src="https://images.unsplash.com/photo-1579998120708-682dd8a5624f?crop=faces&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=1080" 
        alt="Traders gathered around a food stall in Lagos" 
        loading="lazy" 
      />
      <figcaption><span>Traders gathered around a food stall in Lagos</span><small>Photo: Mary / Unsplash</small></figcaption>
    </figure>
  );
}
