import { Button } from "../ui/Button";
import { Eyebrow } from "../ui/Eyebrow";
import { Icon } from "../ui/Icon";
import { CountUp } from "../CountUp";
import { HeroParallax } from "./HeroParallax";

export function Hero() {
  return (
    <section className="hero" id="about">
      <div className="container hero-grid">
        <div className="hero-copy">
          <Eyebrow>LYDI CAPSTONE 2026 · TEAM HEART</Eyebrow>
          <h1>Health care that meets the market where it works.</h1>
          <p className="hero-lede">Project HEART brings blood pressure and blood glucose screening, health education and a clear path to the nearest Primary Health Centre to traders and artisans in Iba LCDA, Lagos.</p>
          <div className="button-row"><Button>Join the Outreach</Button><Button variant="secondary" href="#stewards">Become a Health Steward</Button></div>
          <p className="micro-proof"><span>Free</span><span>Confidential</span><span>Community-led</span></p>
        </div>
        <div className="hero-visual">
          <HeroParallax />
          <aside className="survey-note"><strong><CountUp text="95.5%" /></strong><span>of traders we surveyed said they would join free community screening.</span></aside>
        </div>
      </div>
      <div className="pattern-strip" aria-hidden="true" />
    </section>
  );
}
