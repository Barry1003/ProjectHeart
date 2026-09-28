"use client";

import React from "react";
import { Eyebrow } from "../ui/Eyebrow";
import { Icon, IconName } from "../ui/Icon";
import { Button } from "../ui/Button";
import { motion, useReducedMotion } from "motion/react";
import { Reveal } from "../Reveal";
import { T } from "../LanguageProvider";

const pillars = [
  {
    letter: "H·E", number: "01", 
    title: <T en="Health Education" yo="Ẹkọ Ilera" />,
    description: <T en="Clear, practical education on hypertension, diabetes and prevention, in English and Yoruba." yo="Ẹkọ ti o han gbangba lori ẹjẹ riru, atọgbẹ ati idena rẹ, ni ede Gẹẹsi ati Yoruba." />,
    list: [<T key="1" en="Understand common risk factors" yo="Ni oye awọn idi ewu ti o wọpọ" />, <T key="2" en="Ask questions in familiar language" yo="Beere ibeere ni ede rẹ" />],
    output: <T en="100+ traders reached" yo="A ba ju oniṣowo 100 sọrọ" />, 
    icon: "education" as IconName, tone: "green",
  },
  {
    letter: "A", number: "02", 
    title: <T en="Assessment" yo="Ayẹwo" />,
    description: <T en="Every participant receives a risk assessment, screening and a simple explanation of their results." yo="Gbogbo eniyan yoo gba ayẹwo ewu ilera wọn pẹlu alaye ti o rọrun lori abajade rẹ." />,
    list: [<T key="1" en="Blood pressure check" yo="Ayẹwo titẹ ẹjẹ riru" />, <T key="2" en="Blood glucose screening" yo="Ayẹwo itọ-ṣuga" />],
    output: <T en="BP + glucose for every participant" yo="Ayẹwo BP + ṣuga fun gbogbo eniyan" />, 
    icon: "assessment" as IconName, tone: "blue",
  },
  {
    letter: "R", number: "03", 
    title: <T en="Referral" yo="Ifisilẹ" />,
    description: <T en="People who need further care leave with a clear, documented route to the partner PHC." yo="Awọn ti o nilo itọju siwaju yoo gba ọna ti o mọ daradara si PHC alabaṣepọ wa." />,
    list: [<T key="1" en="Results reviewed in consultation" yo="A ṣe ayẹwo abajade rẹ" />, <T key="2" en="PHC referral card provided" yo="A fun ni kaadi ifisilẹ si PHC" />],
    output: <T en="Documented referral with tracking code" yo="Ifisilẹ pẹlu koodu atẹle" />, 
    icon: "referral" as IconName, tone: "deep-green",
  },
  {
    letter: "T", number: "04", 
    title: <T en="Tracking" yo="Titọpa" />,
    description: <T en="Support continues after the outreach through calls, reminders and trusted community voices." yo="Itọju yoo tẹsiwaju lẹhin iṣẹ naa nipasẹ ipe, iranti ati awọn ti a gbẹkẹle ni agbegbe." />,
    list: [<T key="1" en="SMS and phone reminders" yo="Iranti lori SMS ati ipe foonu" />, <T key="2" en="Steward support after referral" yo="Iranlọwọ lati ọdọ awọn olutọju" />],
    output: <T en="Follow-up within 14 days" yo="A yoo tẹle ọ laarin ọjọ 14" />, 
    icon: "tracking" as IconName, tone: "blue-yellow",
  },
];

export function Model() {
  const prefersReducedMotion = useReducedMotion();

  const pathAnimation = prefersReducedMotion ? { pathLength: 1 } : { pathLength: 1 };
  const initialPath = prefersReducedMotion ? { pathLength: 1 } : { pathLength: 0 };

  return (
    <section className="section model" id="model">
      <div className="container">
        <Reveal>
          <div className="section-intro"><Eyebrow><T en="02 — THE MODEL" yo="02 — ILANA NAA" /></Eyebrow><h2><T en="More than a one-day outreach." yo="O ju eto ọlọjọ-kan lọ." /></h2><p><T en="HEART connects education, screening and care in one continuous community pathway." yo="HEART n so ẹkọ, ayẹwo ati itọju pọ gẹgẹbi ọna agbegbe ti o tẹsiwaju." /></p></div>
        </Reveal>
        <div className="pathway">
          <svg className="pulse-route" viewBox="0 0 1200 122" preserveAspectRatio="none" aria-hidden="true">
            <motion.path 
              initial={initialPath} whileInView={pathAnimation} viewport={{ once: true, margin: "-10% 0px" }} transition={{ duration: 1.5, ease: "easeOut" }}
              className="pulse-route__base" pathLength="1" d="M0 50H92l13-20 14 40 15-20h166l13-20 14 40 15-20h166l13-20 14 40 15-20h166l13-20 14 40 15-20h161" />
            <motion.path initial={initialPath} whileInView={pathAnimation} viewport={{ once: true, margin: "-10% 0px" }} transition={{ duration: 1.5, ease: "easeOut" }} className="pulse-route__segment pulse-route__segment--green" pathLength="1" d="M0 50H92l13-20 14 40 15-20h166" />
            <motion.path initial={initialPath} whileInView={pathAnimation} viewport={{ once: true, margin: "-10% 0px" }} transition={{ duration: 1.5, ease: "easeOut", delay: 0.1 }} className="pulse-route__segment pulse-route__segment--blue" pathLength="1" d="M300 50h92l13-20 14 40 15-20h166" />
            <motion.path initial={initialPath} whileInView={pathAnimation} viewport={{ once: true, margin: "-10% 0px" }} transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }} className="pulse-route__segment pulse-route__segment--deep-green" pathLength="1" d="M600 50h92l13-20 14 40 15-20h166" />
            <motion.path initial={initialPath} whileInView={pathAnimation} viewport={{ once: true, margin: "-10% 0px" }} transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }} className="pulse-route__segment pulse-route__segment--blue" pathLength="1" d="M900 50h92l13-20 14 40 15-20h161" />
            <path className="pulse-route__blip" pathLength="1" d="M0 50H92l13-20 14 40 15-20h166l13-20 14 40 15-20h166l13-20 14 40 15-20h166l13-20 14 40 15-20h161" />
          </svg>
          <div className="pillar-grid">
            {pillars.map((pillar, index) => (
              <Reveal key={index} delay={0.4 + index * 0.15} className={`pillar pillar--${pillar.tone}`} style={{ "--pillar-index": 0 } as React.CSSProperties}>
                <div className="pillar-mark"><span className="pillar-letter">{pillar.letter}</span><span className="pillar-number">{pillar.number}</span></div>
                <h3>{pillar.title}</h3>
                <p className="pillar-description">{pillar.description}</p>
                <div className="pillar-happens"><p><Icon name={pillar.icon} size={16} /><T en="WHAT HAPPENS" yo="KINI YOO ṢẸLẸ" /></p><ul>{pillar.list.map((item, i) => <li key={i}><Icon name="check" size={15} />{item}</li>)}</ul></div>
                <p className="pillar-output"><span><T en="OUTPUT" yo="ABAJADE" /></span>{pillar.output}</p>
              </Reveal>
            ))}
          </div>
          <Reveal delay={1.2}>
            <div className="pathway-return"><Icon name="arrow" size={17} /><span><T en="Then back to the community: Stewards keep it going" yo="Lẹhinna pada s'agbegbe: Awọn Olutọju yoo jẹ ki o tẹsiwaju" /></span></div>
          </Reveal>
        </div>
      </div>
      <div className="model-closing"><div className="container"><strong><T en="One pathway. Four stages. No one left at the clinic door." yo="Ọna kan. Ipele mẹrin. A kii yoo fi ẹnikẹni silẹ lẹnu ilẹkun ile-iwosan." /></strong><Button variant="text" href="#journey"><T en="See how it works" yo="Wo bi o ṣe n ṣiṣẹ" /></Button></div></div>
    </section>
  );
}
