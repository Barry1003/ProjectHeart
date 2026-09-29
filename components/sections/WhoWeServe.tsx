"use client";

import { useState } from "react";
import { Reveal } from "../Reveal";
import { Icon } from "../ui/Icon";
import { T } from "../LanguageProvider";

export function WhoWeServe() {
  const [checked, setChecked] = useState([false, false, false, false]);

  const toggleCheck = (index: number) => {
    const newChecked = [...checked];
    newChecked[index] = !newChecked[index];
    setChecked(newChecked);
  };

  const isAnyChecked = checked.some(Boolean);

  const options = [
    { en: "You are a trader, market seller, or food vendor", yo: "O jẹ onisowo, ataja ọja, tabi onitaja ounjẹ" },
    { en: "You are an artisan, mechanic, tailor, or craftsperson", yo: "O jẹ oniṣọnà, ẹlẹrọ, asọ, tabi oníṣẹ́ ọnà" },
    { en: "You are an informal sector worker or community member", yo: "O jẹ oṣiṣẹ aladani alaiṣe deede tabi ọmọ ẹgbẹ agbegbe" },
    { en: "You have not had a health check in the last 12 months", yo: "O ko ti ni ayẹwo ilera ni oṣu mejila sẹhin" }
  ];

  return (
    <section className="section who-we-serve">
      <div className="container">
        <div className="who-we-serve-grid">
          <div className="who-we-serve-content">
            <Reveal>
              <span className="eyebrow">
                <Icon name="heart" size={14} className="text-[var(--red)]" /> 
                <T en="WHO WE SERVE" yo="AWỌN TI A Ń ṢIṢẸ FUN" />
              </span>
              <h2>
                <T en="Are You a Trader, Artisan, or Community Worker?" yo="Ṣe O Jẹ Onisowo, Oniṣọnà, Tabi Oṣiṣẹ Agbegbe?" />
              </h2>
              <p className="text-muted text-lg mb-8">
                <T en="Project HEART is for you. Tick any of the boxes below:" yo="Project HEART wa fun ọ. Samisi eyikeyi ninu awọn apoti isalẹ:" />
              </p>
            </Reveal>
            
            <div className="serve-options">
              {options.map((opt, i) => (
                <Reveal key={i} delay={0.05 * i}>
                  <button 
                    className={`serve-option ${checked[i] ? "is-checked" : ""}`}
                    onClick={() => toggleCheck(i)}
                    type="button"
                  >
                    <div className="serve-checkbox">
                      <Icon name="check" size={16} />
                    </div>
                    <span className="serve-text">
                      <T en={opt.en} yo={opt.yo} />
                    </span>
                  </button>
                </Reveal>
              ))}

              <Reveal delay={0.25}>
                <div className={`serve-result ${isAnyChecked ? "is-active" : ""}`}>
                  <div className="serve-result-icon">
                    <Icon name="check" size={18} />
                  </div>
                  <div className="serve-result-text">
                    <strong><T en="Then HEART is for you. " yo="Nigbana HEART wa fun ọ. " /></strong>
                    <span><T en="Our services are free, confidential, and come to where you work." yo="Awọn iṣẹ wa jẹ ọfẹ, aṣiri, ati wa si ibiti o ti n ṣiṣẹ." /></span>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
          <Reveal delay={0.3}>
            <div className="who-we-serve-image">
              <img src="/image-2.png" alt="Community Worker" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
