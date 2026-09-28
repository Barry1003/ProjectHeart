import { Eyebrow } from "../ui/Eyebrow";
import { T } from "../LanguageProvider";

const outcomes = [
  ["100+", <T en="Traders and artisans reached with education, consultation and screening" yo="Àwọn oníṣòwò àti àwọn oníṣọ̀nà tí a ba sọrọ pẹ̀lú ẹkọ, ìfọ̀rọ̀wánilẹ́nuwò àti àyẹ̀wò" key="1" />],
  ["80%+", <T en="With improved health knowledge" yo="Tí wọ́n ní ìmọ̀ ìlera tó dára" key="2" />],
  ["70%+", <T en="Of abnormal results given documented referrals" yo="Nínú àwọn abájáde tí kò dára tí a fún ní ìwé ìfisílẹ̀" key="3" />],
  ["70%+", <T en="Of referred people followed up" yo="Nínú àwọn ènìyàn tí a fi sílẹ̀ tí a tẹ̀lé" key="4" />],
  ["6+", <T en="Community Health Stewards trained" yo="Àwọn Olùtọ́jú Ìlera Àdúgbò tí a kọ́" key="5" />],
];

export function Outcomes() {
  return (
    <>
      <section className="section outcomes">
        <div className="container outcomes-grid">
          <div><Eyebrow><T en="06 — WHAT SUCCESS LOOKS LIKE" yo="06 — BI AṢEYỌRI ṢE RÍ" /></Eyebrow><h2><T en="Measured by what happens next." yo="A ṣe iwọn rẹ nipa kini o ṣẹlẹ lẹhinna." /></h2><p><T en="We are tracking practical outcomes, not attendance alone." yo="A n tọpa awọn abajade to daju, kii ṣe ibi ipe nikan." /></p>
            <div className="sdgs"><span><T en="SDG 3 · Good Health and Well-being" yo="SDG 3 · Ilera ati Nini Alaafia Daadaa" /></span><span><T en="SDG 10 · Reduced Inequalities" yo="SDG 10 · Idinkujade Aidogba" /></span><span><T en="SDG 11 · Sustainable Cities and Communities" yo="SDG 11 · Awọn Ilu ati Agbegbe ti O Tọjọ" /></span></div>
          </div>
          <div className="outcome-table">{outcomes.map(([metric, label], i) => <div className="outcome-row" key={i}><strong>{metric}</strong><span>{label}</span></div>)}</div>
        </div>
      </section>
      <section className="partner"><div className="container partner-grid"><div><Eyebrow><T en="REFERRAL PARTNER" yo="ALABAṢEPỌ IFISILẸ" /></Eyebrow><p><strong><T en="Iba Primary Health Centre, Iba LCDA" yo="Ile-iwosan Iba, Iba LCDA" /></strong><br /><span><T en="Partnership proposed, pending formal engagement." yo="A ti daabobo alabaṣepọ yi, a n duro de iwe fọọmu rẹ." /></span></p></div><div className="supporters"><span><T en="Partners and supporters" yo="Awọn alabaṣiṣẹpọ ati awọn atilẹyin" /></span><strong><T en="Coming soon" yo="O n bọ laipe" /></strong></div></div></section>
    </>
  );
}
