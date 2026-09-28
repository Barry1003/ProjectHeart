import { Button } from "../ui/Button";
import { Eyebrow } from "../ui/Eyebrow";
import { Icon } from "../ui/Icon";
import { CountUp } from "../CountUp";
import { HeroParallax } from "./HeroParallax";
import { T } from "../LanguageProvider";

export function Hero() {
  return (
    <section className="hero" id="about">
      <div className="container hero-grid">
        <div className="hero-copy">
          <Eyebrow>LYDI CAPSTONE 2026 · TEAM HEART</Eyebrow>
          <h1><T en="Health care that meets the market where it works." yo="Itọju ilera ti o ba ọja pade nibiti o ti n ṣiṣẹ." /></h1>
          <p className="hero-lede"><T en="Project HEART brings blood pressure and blood glucose screening, health education and a clear path to the nearest Primary Health Centre to traders and artisans in Iba LCDA, Lagos." yo="Agbese HEART n mu ayẹwo titẹ ẹjẹ ati glukosi ẹjẹ, ẹkọ ilera ati ọna ti o han gbangba si Ile-iṣẹ Ilera Alabọde ti o sunmọ julọ si awọn oniṣowo ati awọn oniṣọnà ni Iba LCDA, Lagos." /></p>
          <div className="button-row"><Button><T en="Join the Outreach" yo="Darapọ mọ Eto Itọju" /></Button><Button variant="secondary" href="#stewards"><T en="Become a Health Steward" yo="Di Olutọju Ilera" /></Button></div>
          <p className="micro-proof"><span><T en="Free" yo="Ọfẹ" /></span><span><T en="Confidential" yo="Asiri" /></span><span><T en="Community-led" yo="Agbegbe ṣe dari" /></span></p>
        </div>
        <div className="hero-visual">
          <HeroParallax />
          <aside className="survey-note"><strong><CountUp text="95.5%" /></strong><span><T en="of traders we surveyed said they would join free community screening." yo="ninu awọn oniṣowo ti a ṣe iwadii rẹ sọ pe wọn yoo darapọ mọ ayẹwo agbegbe ọfẹ." /></span></aside>
        </div>
      </div>
      <div className="pattern-strip" aria-hidden="true" />
    </section>
  );
}
