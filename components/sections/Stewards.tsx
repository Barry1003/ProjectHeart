import { Button } from "../ui/Button";
import { Eyebrow } from "../ui/Eyebrow";
import { Icon } from "../ui/Icon";
import { PhotoFrame } from "../ui/PhotoFrame";

export function Stewards() {
  return (
    <section className="section stewards" id="stewards">
      <div className="container stewards-grid">
        <div><Eyebrow light>04 — COMMUNITY HEALTH STEWARDS</Eyebrow><h2>Health advice works best from someone you trust.</h2><p>At least six trained Community Health Stewards will give peer health education, help people complete referrals and keep the conversation going after the outreach.</p>
          <ul className="steward-list"><li><Icon name="check" />Share clear health information in familiar language</li><li><Icon name="check" />Guide neighbours through screening and referral</li><li><Icon name="check" />Support follow-up without judgement</li></ul>
          <Button variant="light" href="#get-involved">Apply to be a Steward</Button>
        </div>
        <div className="steward-photo"><PhotoFrame
          tall
          dark
          label="African health professional ready to support her community"
          credit="Photo: Ato Aikins / Unsplash"
          src="https://images.unsplash.com/photo-1678695972687-033fa0bdbac9?crop=faces&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=1080"
        /><p>Local voices. Practical support. Lasting trust.</p></div>
      </div>
    </section>
  );
}
