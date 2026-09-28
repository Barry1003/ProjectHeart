"use client";

import { FormEvent, useState } from "react";
import { Eyebrow } from "../ui/Eyebrow";
import { Field } from "../ui/Field";
import { Icon } from "../ui/Icon";
import { T } from "../LanguageProvider";

export function GetInvolved() {
  const [tab, setTab] = useState<"outreach" | "volunteer" | "support">("outreach");
  const [sent, setSent] = useState(false);
  
  const tabContent = {
    outreach: { label: <T en="Join the outreach" yo="Darapọ mọ eto itọju" />, title: <T en="Register your interest" yo="Forukọsilẹ ifẹ rẹ" />, intro: <T en="For traders and artisans in Iba LCDA." yo="Fun awọn oniṣowo ati oniṣọnà ni Iba LCDA." />, fields: [[<T en="Full name" yo="Orukọ ni kikun" key="1" />, <T en="Your name" yo="Orukọ rẹ" key="1" />, "text"], [<T en="Phone number" yo="Nọmba foonu" key="2" />, "0800 000 0000", "tel"], [<T en="Market or association" yo="Ọja tabi ẹgbẹ" key="3" />, <T en="Where do you trade or work?" yo="Nibo ni o n ta ọja tabi ṣiṣẹ?" key="3" />, "text"], [<T en="Preferred language" yo="Ede ti o fẹran" key="4" />, <T en="English or Yoruba" yo="Gẹẹsi tabi Yoruba" key="4" />, "text"]] },
    volunteer: { label: <T en="Volunteer" yo="Yọọda ara rẹ" />, title: <T en="Offer your time and skills" yo="Fun wa ni akoko ati ọgbọn rẹ" />, intro: <T en="For doctors, nurses, CHEWs, medical laboratory scientists, pharmacists and logistics volunteers." yo="Fun awọn dokita, nọọsi, CHEWs, awọn onimo ijinlẹ yàrá iwosan, oniwosan oogun ati awọn oluyọọda ipese." />, fields: [[<T en="Full name" yo="Orukọ ni kikun" key="1" />, <T en="Your name" yo="Orukọ rẹ" key="1" />, "text"], [<T en="Phone number" yo="Nọmba foonu" key="2" />, "0800 000 0000", "tel"], [<T en="Professional role" yo="Ipa rẹ gẹgẹbi ọjọgbọn" key="3" />, <T en="Your role or area of support" yo="Ipa tabi agbegbe ti o fẹ ṣe atilẹyin" key="3" />, "text"], [<T en="Availability" yo="Akoko ti o wa" key="4" />, <T en="Tell us when you can help" yo="Sọ fun wa nigbati o le ṣe iranlọwọ" key="4" />, "text"]] },
    support: { label: <T en="Support" yo="Ṣe Atilẹyin" />, title: <T en="Help make the outreach possible" yo="Ṣe iranlọwọ ki eto itọju le wa si imuṣẹ" />, intro: <T en="For sponsors, NGOs and in-kind partners. Estimated funding need: ₦800,000." yo="Fun awọn onigbọwọ, NGO ati awọn alabaṣiṣẹpọ ti o nifẹ. Iye owo ti a n reti: ₦800,000." />, fields: [[<T en="Name or organisation" yo="Orukọ rẹ tabi ajo" key="1" />, <T en="Your name" yo="Orukọ rẹ" key="1" />, "text"], [<T en="Work email" yo="Imeeli iṣẹ" key="2" />, "name@organisation.org", "email"], [<T en="Phone number" yo="Nọmba foonu" key="3" />, "0800 000 0000", "tel"], [<T en="How would you like to help?" yo="Bawo ni o ṣe fẹ ṣe iranlọwọ?" key="4" />, <T en="Funding, supplies or another contribution" yo="Pẹlu owo, ohun elo tabi ilowosi miiran" key="4" />, "text"]] },
  };

  const current = tabContent[tab];
  function submit(e: FormEvent) { e.preventDefault(); setSent(true); }
  return (
    <section className="section involve" id="get-involved"><div className="container"><div className="section-intro"><Eyebrow><T en="08 — GET INVOLVED" yo="08 — KOPA" /></Eyebrow><h2><T en="There is a place for you in HEART." yo="Aaye wa fun ọ ninu HEART." /></h2><p><T en="Choose how you would like to take part." yo="Yan bi o ṣe fẹ lati kopa." /></p></div>
      <div className="involve-panel"><div className="tabs" role="tablist">{Object.entries(tabContent).map(([key, value]) => <button key={key} role="tab" aria-selected={tab === key} onClick={() => { setTab(key as any); setSent(false); }}>{value.label}</button>)}</div>
        <div className="form-layout"><div><h3>{current.title}</h3><p>{current.intro}</p><p className="privacy"><Icon name="check" /><T en="We collect consent before screening. Your health data is anonymised and never shared without your permission." yo="A ngba ifọwọsi rẹ ṣaaju ayẹwo. Awọn alaye ilera rẹ jẹ asiri ati pe a ki yoo pin pẹlu ẹnikẹni laisi igbanilaaye rẹ." /></p></div>
          {sent ? <div className="form-success" role="status"><Icon name="check" size={30} /><h3><T en="Thank you for raising your hand." yo="O ṣeun fun igbiyanju rẹ." /></h3><p><T en="This is a website preview. Contact details will be added before registration opens." yo="Oju opo wẹẹbu idanwo nikan ni eyi. Awọn alaye olubasọrọ yoo jẹ afikun ṣaaju ki iforukọsilẹ to bẹrẹ." /></p></div> :
          <form onSubmit={submit}><div className="field-grid">{current.fields.map(([label, placeholder, type], i) => <Field key={i} label={label as any} placeholder={placeholder as any} type={type as any} required />)}</div><button className="submit-button" type="submit"><T en="Send my interest" yo="Fi ifẹ mi ranṣẹ" /> <Icon name="arrow" /></button></form>}
        </div>
      </div>
    </div></section>
  );
}
