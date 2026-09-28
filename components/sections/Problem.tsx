import { Eyebrow } from "../ui/Eyebrow";
import { Reveal } from "../Reveal";
import { CountUp } from "../CountUp";
import { T } from "../LanguageProvider";

const stats = [
  ["40.9%", <T en="of surveyed traders diagnosed with hypertension" yo="ti awọn oniṣowo ti a ṣe iwadii ti ni aisan ẹjẹ riru" key="1" />, "urgent"],
  ["77.3%", <T en="buy medicines from roadside vendors or agbo sellers" yo="ra oogun lati ọdọ awọn ti n ta ọja ni ẹba ọna tabi awọn ẹlẹgbo" key="2" />, ""],
  ["31.8%", <T en="have never checked their blood pressure" yo="ko ti ṣayẹwo titẹ ẹjẹ wọn ri" key="3" />, "urgent"],
  ["1 in 3", <T en="Nigerian adults lives with hypertension — over half do not know" yo="Àgbàlagbà orílẹ̀-èdè Nàìjíríà n gbe pẹlu ẹjẹ riru — diẹ sii ju idaji ko mọ" key="4" />, ""],
];

export function Problem() {
  return (
    <section className="section problem" id="problem">
      <div className="container">
        <Reveal>
          <div className="section-intro split-intro">
            <div><Eyebrow><T en="01 — THE PROBLEM" yo="01 — IṢORO NÁÀ" /></Eyebrow><h2><T en="The clinic is there. The habit of using it isn't." yo="Ile-iwosan wa nibe. Ṣugbọn lilo rẹ ko di aṣa." /></h2></div>
            <p><T en="Primary Health Centres are available, yet preventive checks are often delayed. Community interviews point to self-medication and informal providers because they feel faster and easier to reach." yo="Ile-iṣẹ Ilera Alabọde wa, sibẹsibẹ a n sun awọn ayẹwo idena siwaju. Awọn ifọrọwanilẹnuwo agbegbe fihan pe lilo oogun funraẹni ati awọn olupese ti kii ṣe iṣẹ-ṣiṣe ni a nlo nitori wọn ro pe o yara ati rọrun lati de." /></p>
          </div>
        </Reveal>
        <div className="stat-grid">
          {stats.map(([number, label, tone], i) => (
            <Reveal className={`stat ${i === 0 ? "stat--lead" : ""}`} delay={i * 0.1} key={i}>
              <strong className={tone as string}><CountUp text={number as string} /></strong><span>{label}</span><i />
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.2}>
          <div className="problem-bottom">
            <blockquote><T en="“The challenge was not a lack of interest in health, but limited access to convenient preventive healthcare.”" yo="“Ipenija naa kii ṣe pe wọn ko nifẹ si ilera, ṣugbọn aini aye ti o rọrun lati gba itọju ilera idena.”" /></blockquote>
            <div className="barriers"><h3><T en="What gets in the way" yo="Kini awọn ohun idena" /></h3><ul><li><T en="Long PHC waiting times" yo="Idaduro pipẹ ni PHC" /></li><li><T en="Work commitments" yo="Akoko idiwọ iṣẹ" /></li><li><T en="Convenience of informal care" ir ="Irọrun ti itọju ti kii ṣe ti gidi" yo="Irọrun ti itọju igberiko" /></li><li><T en="Misconceptions about preventive care" yo="Awọn ero ti ko tọ nipa itọju idena" /></li></ul></div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
