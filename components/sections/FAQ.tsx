"use client";

import { useState } from "react";
import { Eyebrow } from "../ui/Eyebrow";
import { Reveal } from "../Reveal";

const faqs = [
  ["Is it free?", "Yes. Health education, screening and consultation at the outreach are free."],
  ["Is my information private?", "Yes. We collect consent first, anonymise health data and do not share personal information without permission."],
  ["What if my result is high?", "A health professional will explain your result. If needed, you will receive a documented referral and clear guidance on what to do next."],
  ["Do I need a smartphone?", "No. Printed information, SMS reminders and PHC hotline numbers will also be available."],
  ["Who are the health professionals?", "The volunteer pathway is open to doctors, nurses, CHEWs, medical laboratory scientists and pharmacists. Confirmed personnel will be introduced before the outreach."],
  ["How will I be followed up?", "People referred for further care will receive follow-up within 14 days, supported by calls, SMS reminders and Community Health Stewards."],
];

export function FAQ() {
  const [open, setOpen] = useState(0);
  return (
    <section className="section faq">
      <div className="container faq-grid">
        <Reveal>
          <div><Eyebrow>FREQUENTLY ASKED QUESTIONS</Eyebrow><h2>Good to know.</h2><p>Clear answers before you take part.</p></div>
        </Reveal>
        <div className="accordion">{faqs.map(([q, a], i) => (
          <Reveal delay={i * 0.08} className="faq-item" key={q}>
            <button onClick={() => setOpen(open === i ? -1 : i)} aria-expanded={open === i}><span>{q}</span><b>{open === i ? "−" : "+"}</b></button>{open === i && <p>{a}</p>}
          </Reveal>
        ))}</div>
      </div>
    </section>
  );
}
