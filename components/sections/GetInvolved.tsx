"use client";

import { FormEvent, useState } from "react";
import { Eyebrow } from "../ui/Eyebrow";
import { Field } from "../ui/Field";
import { Icon } from "../ui/Icon";

const tabContent = {
  outreach: { label: "Join the outreach", title: "Register your interest", intro: "For traders and artisans in Iba LCDA.", fields: [["Full name", "Your name", "text"], ["Phone number", "0800 000 0000", "tel"], ["Market or association", "Where do you trade or work?", "text"], ["Preferred language", "English or Yoruba", "text"]] },
  volunteer: { label: "Volunteer", title: "Offer your time and skills", intro: "For doctors, nurses, CHEWs, medical laboratory scientists, pharmacists and logistics volunteers.", fields: [["Full name", "Your name", "text"], ["Phone number", "0800 000 0000", "tel"], ["Professional role", "Your role or area of support", "text"], ["Availability", "Tell us when you can help", "text"]] },
  support: { label: "Support", title: "Help make the outreach possible", intro: "For sponsors, NGOs and in-kind partners. Estimated funding need: ₦800,000.", fields: [["Name or organisation", "Your name", "text"], ["Work email", "name@organisation.org", "email"], ["Phone number", "0800 000 0000", "tel"], ["How would you like to help?", "Funding, supplies or another contribution", "text"]] },
};

export function GetInvolved() {
  const [tab, setTab] = useState<keyof typeof tabContent>("outreach");
  const [sent, setSent] = useState(false);
  const current = tabContent[tab];
  function submit(e: FormEvent) { e.preventDefault(); setSent(true); }
  return (
    <section className="section involve" id="get-involved"><div className="container"><div className="section-intro"><Eyebrow>08 — GET INVOLVED</Eyebrow><h2>There is a place for you in HEART.</h2><p>Choose how you would like to take part.</p></div>
      <div className="involve-panel"><div className="tabs" role="tablist">{Object.entries(tabContent).map(([key, value]) => <button key={key} role="tab" aria-selected={tab === key} onClick={() => { setTab(key as keyof typeof tabContent); setSent(false); }}>{value.label}</button>)}</div>
        <div className="form-layout"><div><h3>{current.title}</h3><p>{current.intro}</p><p className="privacy"><Icon name="check" />We collect consent before screening. Your health data is anonymised and never shared without your permission.</p></div>
          {sent ? <div className="form-success" role="status"><Icon name="check" size={30} /><h3>Thank you for raising your hand.</h3><p>This is a website preview. Contact details will be added before registration opens.</p></div> :
          <form onSubmit={submit}><div className="field-grid">{current.fields.map(([label, placeholder, type]) => <Field key={label} label={label} placeholder={placeholder} type={type} required />)}</div><button className="submit-button" type="submit">Send my interest <Icon name="arrow" /></button></form>}
        </div>
      </div>
    </div></section>
  );
}
