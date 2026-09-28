import { Eyebrow } from "../ui/Eyebrow";
import { Icon } from "../ui/Icon";
import { Reveal } from "../Reveal";
import { T } from "../LanguageProvider";

const steps = [
  <T en="Mobilisation with market leaders" yo="Ifọrọwanilẹnuwo pẹlu awọn adari ọja" key="1" />,
  <T en="Health education session" yo="Eto ẹkọ ilera" key="2" />,
  <T en="Blood pressure and blood glucose screening" yo="Ayẹwo titẹ ẹjẹ ati glukosi ẹjẹ" key="3" />,
  <T en="Consultation, with results explained simply" yo="Ifọrọwanilẹnuwo, a yoo ṣe alaye abajade ni ọna ti o rọrun" key="4" />,
  <T en="Referral card with PHC tracking code, if needed" yo="Kaadi ifisilẹ pẹlu koodu atẹle PHC, ti o ba nilo" key="5" />,
  <T en="Follow-up within 14 days, plus SMS reminders" yo="Atẹle laarin ọjọ 14, ati iranti SMS" key="6" />,
];

export function Journey() {
  return (
    <section className="section journey" id="journey">
      <div className="container journey-grid">
        <div><Eyebrow><T en="03 — THE JOURNEY" yo="03 — IRIN-AJO NAA" /></Eyebrow><h2><T en="From first conversation to follow-up." yo="Lati ibaraẹnisọrọ akọkọ si atẹle." /></h2>
          <ol className="timeline">{steps.map((step, i) => (
            <Reveal as="li" key={i} delay={i * 0.1}><span>{String(i + 1).padStart(2, "0")}</span><p>{step}</p></Reveal>
          ))}</ol>
        </div>
        <Reveal delay={0.4}>
          <aside className="expect-card"><Eyebrow><T en="ON THE DAY" yo="NI ỌJỌ NAA" /></Eyebrow><h3><T en="What to expect" yo="Kini o yẹ ki o reti" /></h3><ul>
            <li><Icon name="check" /><T en="Completely free" yo="Ọfẹ patapata" /></li><li><Icon name="clock" /><T en="About 20 minutes" yo="Titi de iṣẹju 20" /></li><li><Icon name="check" /><T en="Private and confidential" yo="Asiri ati aabo" /></li><li><Icon name="check" /><T en="Consent form signed first" yo="Wọn yoo kọkọ fọwọsi fọọmu idunnu" /></li><li><Icon name="check" /><T en="Results explained in simple language" yo="A ṣe alaye abajade ni ede to rọrun" /></li>
          </ul></aside>
        </Reveal>
      </div>
    </section>
  );
}
