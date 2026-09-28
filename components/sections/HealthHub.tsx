import { Eyebrow } from "../ui/Eyebrow";
import { Icon } from "../ui/Icon";

function PhoneHub() {
  return (
    <div className="phone" aria-label="Project HEART Health Hub mobile preview">
      <div className="phone-bar"><Icon name="heart" size={18} /><strong>HEART Health Hub</strong></div>
      <div className="phone-body"><span className="phone-kicker">KNOW YOUR NUMBERS</span><h4>Blood pressure</h4>
        <div className="risk risk--normal"><b>Normal</b><span>Keep checking regularly</span></div>
        <div className="risk risk--watch"><b>Watch</b><span>Speak with a health worker</span></div>
        <div className="risk risk--danger"><b>See a doctor</b><span>Get medical advice promptly</span></div>
        <div className="phc-mini"><Icon name="map" /><div><b>Nearest PHC</b><span>Iba Primary Health Centre</span></div><button>Call</button></div>
        <p className="phone-tip"><b>Today&apos;s tip</b><br />Take prescribed medicine as directed. Do not share it.</p>
      </div>
    </div>
  );
}

export function HealthHub() {
  return (
    <section className="section hub" id="health-hub">
      <div className="container hub-grid">
        <div className="hub-copy"><Eyebrow>05 — THE HEALTH HUB</Eyebrow><h2>Simple guidance, after the market closes.</h2><p>The Health Hub keeps essential information close: what your numbers mean, when to seek care, and how to contact the nearest PHC.</p>
          <div className="hub-note"><Icon name="phone" /><p>Scan the poster in the market to open the Health Hub. No smartphone? You will also get SMS reminders and PHC hotline numbers.</p></div>
          <small>General information only, not a substitute for medical advice.</small>
        </div>
        <div className="mockup-scene"><PhoneHub /><div className="poster"><span>PROJECT HEART</span><h3>Know your numbers.</h3><div className="qr" aria-label="QR code placeholder" /><p>Scan for health guidance and PHC contacts.</p></div></div>
      </div>
    </section>
  );
}
