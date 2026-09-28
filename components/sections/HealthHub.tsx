import { Eyebrow } from "../ui/Eyebrow";
import { Icon } from "../ui/Icon";
import { T } from "../LanguageProvider";

function PhoneHub() {
  return (
    <div className="phone" aria-label="Project HEART Health Hub mobile preview">
      <div className="phone-bar"><Icon name="heart" size={18} /><strong><T en="HEART Health Hub" yo="Agbegbe Ilera HEART" /></strong></div>
      <div className="phone-body"><span className="phone-kicker"><T en="KNOW YOUR NUMBERS" yo="MỌ NỌMBA RẸ" /></span><h4><T en="Blood pressure" yo="Titẹ ẹjẹ" /></h4>
        <div className="risk risk--normal"><b><T en="Normal" yo="O wọpọ" /></b><span><T en="Keep checking regularly" yo="Tẹsiwaju lati ma ṣayẹwo nigbagbogbo" /></span></div>
        <div className="risk risk--watch"><b><T en="Watch" yo="Fura" /></b><span><T en="Speak with a health worker" yo="Ba osise ilera sọrọ" /></span></div>
        <div className="risk risk--danger"><b><T en="See a doctor" yo="Ri dokita" /></b><span><T en="Get medical advice promptly" yo="Gba imọran iṣoogun ni kete" /></span></div>
        <div className="phc-mini"><Icon name="map" /><div><b><T en="Nearest PHC" yo="Ile-iwosan PHC ti o sunmọ julọ" /></b><span><T en="Iba Primary Health Centre" yo="Iba Primary Health Centre" /></span></div><button><T en="Call" yo="Pe wa" /></button></div>
        <p className="phone-tip"><b><T en="Today's tip" yo="Imọran oni" /></b><br /><T en="Take prescribed medicine as directed. Do not share it." yo="Lo oogun bi a ti kọ ọ. Ma ṣe fun ẹlomiran." /></p>
      </div>
    </div>
  );
}

export function HealthHub() {
  return (
    <section className="section hub" id="health-hub">
      <div className="container hub-grid">
        <div className="hub-copy"><Eyebrow><T en="05 — THE HEALTH HUB" yo="05 — AGBEGBE ILERA" /></Eyebrow><h2><T en="Simple guidance, after the market closes." yo="Ilana ti o rọrun, lẹhin pipade ọja." /></h2><p><T en="The Health Hub keeps essential information close: what your numbers mean, when to seek care, and how to contact the nearest PHC." yo="Agbegbe ilera ntọju awọn alaye pataki pamọ: kini nọmba rẹ tumọ si, igbati o yẹ ki o wa itọju, ati bi a ṣe le kan si PHC ti o sunmọ julọ." /></p>
          <div className="hub-note"><Icon name="phone" /><p><T en="Scan the poster in the market to open the Health Hub. No smartphone? You will also get SMS reminders and PHC hotline numbers." yo="Ṣayẹwo koodu lori iwe idanimọ ninu ọja lati ṣi Agbegbe Ilera. Ti o ko ba ni foonu igbalode? O tun le gba iranti lori SMS ati nọmba foonu PHC." /></p></div>
          <small><T en="General information only, not a substitute for medical advice." yo="Alaye gbogbogbo nikan ni eyi jẹ, kii ṣe rirọpo imọran iṣoogun." /></small>
        </div>
        <div className="mockup-scene"><PhoneHub /><div className="poster"><span><T en="PROJECT HEART" yo="IṢẸ HEART" /></span><h3><T en="Know your numbers." yo="Mọ awọn nọmba rẹ." /></h3><div className="qr" aria-label="QR code placeholder" /><p><T en="Scan for health guidance and PHC contacts." yo="Ṣayẹwo fun itọsọna ilera ati awọn olubasọrọ PHC." /></p></div></div>
      </div>
    </section>
  );
}
