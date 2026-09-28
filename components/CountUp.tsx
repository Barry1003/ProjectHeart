"use client";

import { useEffect, useState, useRef } from "react";
import { useInView, useReducedMotion } from "motion/react";

export function CountUp({ text }: { text: string }) {
  const prefersReducedMotion = useReducedMotion();
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });
  const [display, setDisplay] = useState(text.replace(/[0-9]/g, "0"));
  const [hasRun, setHasRun] = useState(false);

  useEffect(() => {
    if (prefersReducedMotion) {
      setDisplay(text);
      return;
    }
    
    if (!isInView || hasRun) return;
    setHasRun(true);

    const numMatch = text.match(/([0-9.]+)/);
    if (!numMatch) {
      setDisplay(text);
      return;
    }

    const endVal = parseFloat(numMatch[1]);
    const prefix = text.slice(0, numMatch.index);
    const suffix = text.slice(numMatch.index! + numMatch[1].length);
    const decimals = numMatch[1].includes(".") ? numMatch[1].split(".")[1].length : 0;

    let startTimestamp: number | null = null;
    const duration = 1200;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      const current = endVal * ease;

      setDisplay(`${prefix}${current.toFixed(decimals)}${suffix}`);

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setDisplay(text);
      }
    };

    requestAnimationFrame(step);
  }, [isInView, prefersReducedMotion, text, hasRun]);

  return <span ref={ref}>{display}</span>;
}
