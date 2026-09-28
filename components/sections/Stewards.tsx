import { Eyebrow } from "../ui/Eyebrow";
import { Button } from "../ui/Button";
import { PhotoFrame } from "../ui/PhotoFrame";
import { T } from "../LanguageProvider";

export function Stewards() {
  return (
    <section className="section stewards" id="stewards">
      <div className="container stewards-grid">
        <div className="stewards-copy">
          <Eyebrow><T en="04 — COMMUNITY HEALTH STEWARDS" yo="04 — AWỌN OLUTỌJU ILERA AGBEGBE" /></Eyebrow>
          <h2><T en="Trusted faces. Local voices." yo="Oju ti a gbẹkẹle. Ohùn ibilẹ." /></h2>
          <p><T en="Project HEART is sustained by volunteer Health Stewards from within the market community." yo="Iṣẹ HEART n tẹsiwaju pẹlu iranlọwọ awọn oluyọọda ti a mọ si Olutọju Ilera lati inu ọja." /></p>
          <div className="role-grid">
            <div>
              <h3><T en="What they do" yo="Kini iṣẹ wọn" /></h3>
              <ul>
                <li><T en="Translate health information accurately" yo="Túmọ alaye ilera daradara" /></li>
                <li><T en="Remind peers about PHC visits" yo="Ran awọn ẹlẹgbẹ wọn leti lori lilo si PHC" /></li>
                <li><T en="Answer simple questions" yo="Dahun awọn ibeere kekere" /></li>
              </ul>
            </div>
            <div>
              <h3><T en="What they receive" yo="Kini wọn yoo gba" /></h3>
              <ul>
                <li><T en="Training on hypertension & diabetes" yo="Ikẹkọ lori ẹjẹ riru & atọgbẹ" /></li>
                <li><T en="Basic communication guide" yo="Ilana ibaraẹnisọrọ ipilẹ" /></li>
                <li><T en="Certificate of participation" yo="Iwe-ẹri ijẹrisi" /></li>
              </ul>
            </div>
          </div>
          <Button variant="light" href="#get-involved"><T en="Apply to be a Steward" yo="Bere fun Iṣẹ Olutọju" /></Button>
        </div>
        <div className="steward-photo"><PhotoFrame
          tall
          dark
          label="African health professional ready to support her community"
          credit="Photo: Ato Aikins / Unsplash"
          src="https://images.unsplash.com/photo-1678695972687-033fa0bdbac9?crop=faces&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=1080"
        /><p><T en="Local voices. Practical support. Lasting trust." yo="Ohùn ibilẹ. Atilẹyin to wulo. Igbẹkẹle to duro pẹ." /></p></div>
      </div>
    </section>
  );
}
