import { Eyebrow } from "../ui/Eyebrow";
import { Reveal } from "../Reveal";
import { CountUp } from "../CountUp";

const stats = [
  ["40.9%", "of surveyed traders diagnosed with hypertension", "urgent"],
  ["77.3%", "buy medicines from roadside vendors or agbo sellers", ""],
  ["31.8%", "have never checked their blood pressure", "urgent"],
  ["1 in 3", "Nigerian adults lives with hypertension — over half do not know", ""],
];

export function Problem() {
  return (
    <section className="section problem" id="problem">
      <div className="container">
        <Reveal>
          <div className="section-intro split-intro">
            <div><Eyebrow>01 — THE PROBLEM</Eyebrow><h2>The clinic is there. The habit of using it isn&apos;t.</h2></div>
            <p>Primary Health Centres are available, yet preventive checks are often delayed. Community interviews point to self-medication and informal providers because they feel faster and easier to reach.</p>
          </div>
        </Reveal>
        <div className="stat-grid">
          {stats.map(([number, label, tone], i) => (
            <Reveal className={`stat ${i === 0 ? "stat--lead" : ""}`} delay={i * 0.1} key={number}>
              <strong className={tone}><CountUp text={number} /></strong><span>{label}</span><i />
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.2}>
          <div className="problem-bottom">
            <blockquote>“The challenge was not a lack of interest in health, but limited access to convenient preventive healthcare.”</blockquote>
            <div className="barriers"><h3>What gets in the way</h3><ul><li>Long PHC waiting times</li><li>Work commitments</li><li>Convenience of informal care</li><li>Misconceptions about preventive care</li></ul></div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
