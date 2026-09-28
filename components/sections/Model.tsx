"use client";

import React from "react";
import { Eyebrow } from "../ui/Eyebrow";
import { Icon, IconName } from "../ui/Icon";
import { Button } from "../ui/Button";
import { motion, useReducedMotion } from "motion/react";
import { Reveal } from "../Reveal";

const pillars = [
  {
    letter: "H·E", number: "01", title: "Health Education",
    description: "Clear, practical education on hypertension, diabetes and prevention, in English and Yoruba.",
    list: ["Understand common risk factors", "Ask questions in familiar language"],
    output: "100+ traders reached", icon: "education" as IconName, tone: "green",
  },
  {
    letter: "A", number: "02", title: "Assessment",
    description: "Every participant receives a risk assessment, screening and a simple explanation of their results.",
    list: ["Blood pressure check", "Blood glucose screening"],
    output: "BP + glucose for every participant", icon: "assessment" as IconName, tone: "blue",
  },
  {
    letter: "R", number: "03", title: "Referral",
    description: "People who need further care leave with a clear, documented route to the partner PHC.",
    list: ["Results reviewed in consultation", "PHC referral card provided"],
    output: "Documented referral with tracking code", icon: "referral" as IconName, tone: "deep-green",
  },
  {
    letter: "T", number: "04", title: "Tracking",
    description: "Support continues after the outreach through calls, reminders and trusted community voices.",
    list: ["SMS and phone reminders", "Steward support after referral"],
    output: "Follow-up within 14 days", icon: "tracking" as IconName, tone: "blue-yellow",
  },
] as const;

export function Model() {
  const prefersReducedMotion = useReducedMotion();

  const pathAnimation = prefersReducedMotion ? { pathLength: 1 } : { pathLength: 1 };
  const initialPath = prefersReducedMotion ? { pathLength: 1 } : { pathLength: 0 };

  return (
    <section className="section model" id="model">
      <div className="container">
        <Reveal>
          <div className="section-intro"><Eyebrow>02 — THE MODEL</Eyebrow><h2>More than a one-day outreach.</h2><p>HEART connects education, screening and care in one continuous community pathway.</p></div>
        </Reveal>
        <div className="pathway">
          <svg className="pulse-route" viewBox="0 0 1200 122" preserveAspectRatio="none" aria-hidden="true">
            <motion.path 
              initial={initialPath}
              whileInView={pathAnimation}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="pulse-route__base" pathLength="1" d="M0 50H92l13-20 14 40 15-20h166l13-20 14 40 15-20h166l13-20 14 40 15-20h166l13-20 14 40 15-20h161" />
            <motion.path 
              initial={initialPath}
              whileInView={pathAnimation}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="pulse-route__segment pulse-route__segment--green" pathLength="1" d="M0 50H92l13-20 14 40 15-20h166" />
            <motion.path 
              initial={initialPath}
              whileInView={pathAnimation}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 1.5, ease: "easeOut", delay: 0.1 }}
              className="pulse-route__segment pulse-route__segment--blue" pathLength="1" d="M300 50h92l13-20 14 40 15-20h166" />
            <motion.path 
              initial={initialPath}
              whileInView={pathAnimation}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
              className="pulse-route__segment pulse-route__segment--deep-green" pathLength="1" d="M600 50h92l13-20 14 40 15-20h166" />
            <motion.path 
              initial={initialPath}
              whileInView={pathAnimation}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
              className="pulse-route__segment pulse-route__segment--blue" pathLength="1" d="M900 50h92l13-20 14 40 15-20h161" />
            
            <path className="pulse-route__blip" pathLength="1" d="M0 50H92l13-20 14 40 15-20h166l13-20 14 40 15-20h166l13-20 14 40 15-20h166l13-20 14 40 15-20h161" />
          </svg>
          <div className="pillar-grid">
            {pillars.map((pillar, index) => (
              <Reveal key={pillar.title} delay={0.4 + index * 0.15} className={`pillar pillar--${pillar.tone}`} style={{ "--pillar-index": 0 } as React.CSSProperties}>
                <div className="pillar-mark"><span className="pillar-letter">{pillar.letter}</span><span className="pillar-number">{pillar.number}</span></div>
                <h3>{pillar.title}</h3>
                <p className="pillar-description">{pillar.description}</p>
                <div className="pillar-happens"><p><Icon name={pillar.icon} size={16} />WHAT HAPPENS</p><ul>{pillar.list.map((item) => <li key={item}><Icon name="check" size={15} />{item}</li>)}</ul></div>
                <p className="pillar-output"><span>OUTPUT</span>{pillar.output}</p>
              </Reveal>
            ))}
          </div>
          <Reveal delay={1.2}>
            <div className="pathway-return"><Icon name="arrow" size={17} /><span>Then back to the community: Stewards keep it going</span></div>
          </Reveal>
        </div>
      </div>
      <div className="model-closing"><div className="container"><strong>One pathway. Four stages. No one left at the clinic door.</strong><Button variant="text" href="#journey">See how it works</Button></div></div>
    </section>
  );
}
