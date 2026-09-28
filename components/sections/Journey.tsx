import { Eyebrow } from "../ui/Eyebrow";
import { Icon } from "../ui/Icon";
import { Reveal } from "../Reveal";

const steps = [
  "Mobilisation with market leaders",
  "Health education session",
  "Blood pressure and blood glucose screening",
  "Consultation, with results explained simply",
  "Referral card with PHC tracking code, if needed",
  "Follow-up within 14 days, plus SMS reminders",
];

export function Journey() {
  return (
    <section className="section journey" id="journey">
      <div className="container journey-grid">
        <div><Eyebrow>03 — THE JOURNEY</Eyebrow><h2>From first conversation to follow-up.</h2>
          <ol className="timeline">{steps.map((step, i) => (
            <Reveal as="li" key={step} delay={i * 0.1}><span>{String(i + 1).padStart(2, "0")}</span><p>{step}</p></Reveal>
          ))}</ol>
        </div>
        <Reveal delay={0.4}>
          <aside className="expect-card"><Eyebrow>ON THE DAY</Eyebrow><h3>What to expect</h3><ul>
            <li><Icon name="check" />Completely free</li><li><Icon name="clock" />About 20 minutes</li><li><Icon name="check" />Private and confidential</li><li><Icon name="check" />Consent form signed first</li><li><Icon name="check" />Results explained in simple language</li>
          </ul></aside>
        </Reveal>
      </div>
    </section>
  );
}
