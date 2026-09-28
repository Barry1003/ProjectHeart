import { Eyebrow } from "../ui/Eyebrow";

const outcomes = [
  ["100+", "Traders and artisans reached with education, consultation and screening"],
  ["80%+", "With improved health knowledge"],
  ["70%+", "Of abnormal results given documented referrals"],
  ["70%+", "Of referred people followed up"],
  ["6+", "Community Health Stewards trained"],
];

export function Outcomes() {
  return (
    <>
      <section className="section outcomes">
        <div className="container outcomes-grid">
          <div><Eyebrow>06 — WHAT SUCCESS LOOKS LIKE</Eyebrow><h2>Measured by what happens next.</h2><p>We are tracking practical outcomes, not attendance alone.</p>
            <div className="sdgs"><span>SDG 3 · Good Health and Well-being</span><span>SDG 10 · Reduced Inequalities</span><span>SDG 11 · Sustainable Cities and Communities</span></div>
          </div>
          <div className="outcome-table">{outcomes.map(([metric, label]) => <div className="outcome-row" key={metric + label}><strong>{metric}</strong><span>{label}</span></div>)}</div>
        </div>
      </section>
      <section className="partner"><div className="container partner-grid"><div><Eyebrow>REFERRAL PARTNER</Eyebrow><p><strong>Iba Primary Health Centre, Iba LCDA</strong><br /><span>Partnership proposed, pending formal engagement.</span></p></div><div className="supporters"><span>Partners and supporters</span><strong>Coming soon</strong></div></div></section>
    </>
  );
}
