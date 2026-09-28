"use client";

import { useState } from "react";
import { Eyebrow } from "../ui/Eyebrow";
import { Reveal } from "../Reveal";
import { T } from "../LanguageProvider";

const faqs = [
  [<T en="Is it free?" yo="Ṣe o jẹ ọfẹ?" key="1" />, <T en="Yes. Health education, screening and consultation at the outreach are free." yo="Bẹẹni. Ẹkọ ilera, ayẹwo ati ifọrọwanilẹnuwo ni ibi itọju jẹ ọfẹ." key="1a" />],
  [<T en="Is my information private?" yo="Ṣe alaye mi jẹ asiri?" key="2" />, <T en="Yes. We collect consent first, anonymise health data and do not share personal information without permission." yo="Bẹẹni. A ma n gba ifọwọsi ni akọkọ, tọju alaye ilera ati pe a ko pin alaye rẹ pẹlu ẹnikẹni laisi aṣẹ." key="2a" />],
  [<T en="What if my result is high?" yo="Kini ti ayẹwo mi ba ga?" key="3" />, <T en="A health professional will explain your result. If needed, you will receive a documented referral and clear guidance on what to do next." yo="Osise ilera yoo ṣe alaye ayẹwo rẹ. Ti o ba nilo rẹ, iwọ yoo gba iwe ifisilẹ ati itọsọna ti o han gbangba lori ohun ti iwọ yoo ṣe atẹle." key="3a" />],
  [<T en="Do I need a smartphone?" yo="Ṣe mo nilo foonu igbalode?" key="4" />, <T en="No. Printed information, SMS reminders and PHC hotline numbers will also be available." yo="Rara. Alaye ti a tẹ sita, awọn iranti SMS ati nọmba foonu PHC yoo tun wa fun ọ." key="4a" />],
  [<T en="Who are the health professionals?" yo="Tani awọn osise ilera naa?" key="5" />, <T en="The volunteer pathway is open to doctors, nurses, CHEWs, medical laboratory scientists and pharmacists. Confirmed personnel will be introduced before the outreach." yo="Ọna fun awọn oluyọọda ṣii si awọn dokita, nọọsi, CHEW, onimo ijinlẹ yàrá ati awọn oniwosan oogun. Awọn eniyan ti o daju yoo jẹ iṣafihan ṣaaju eto itọju naa." key="5a" />],
  [<T en="How will I be followed up?" yo="Bawo ni ẹ ṣe le tẹle mi?" key="6" />, <T en="People referred for further care will receive follow-up within 14 days, supported by calls, SMS reminders and Community Health Stewards." yo="Awọn ti a fisilẹ fun itọju siwaju yoo gba atẹle laarin ọjọ 14, atilẹyin nipasẹ awọn ipe, awọn iranti SMS ati awọn Olutọju Ilera Agbegbe." key="6a" />],
];

export function FAQ() {
  const [open, setOpen] = useState(0);
  return (
    <section className="section faq">
      <div className="container faq-grid">
        <Reveal>
          <div><Eyebrow><T en="FREQUENTLY ASKED QUESTIONS" yo="AWỌN IBEERE TI A MA N BEERE LOPỌLỌPỌ" /></Eyebrow><h2><T en="Good to know." yo="O dara lati mọ." /></h2><p><T en="Clear answers before you take part." yo="Awọn idahun gbangba ṣaaju ki o to kopa." /></p></div>
        </Reveal>
        <div className="accordion">{faqs.map(([q, a], i) => (
          <Reveal delay={i * 0.08} className="faq-item" key={i}>
            <button onClick={() => setOpen(open === i ? -1 : i)} aria-expanded={open === i}><span>{q}</span><b>{open === i ? "−" : "+"}</b></button>{open === i && <p>{a}</p>}
          </Reveal>
        ))}</div>
      </div>
    </section>
  );
}
