import { Eyebrow } from "../ui/Eyebrow";
import { Reveal } from "../Reveal";
import { T } from "../LanguageProvider";

const team = [
  ["Joseph, Samuel Oluwafemi", <T en="Team Lead" yo="Olori Ẹgbẹ" key="1" />, "/image3.jpeg"], 
  ["Ishola Barakah-sofiyah", <T en="Team Member" yo="Ọmọ Ẹgbẹ" key="2" />, "/WhatsApp_Image_2026-07-30_at_10.15.54_PM.jpeg"], 
  ["Apalara Idris Abiodun", <T en="Team Member" yo="Ọmọ Ẹgbẹ" key="3" />, "/WhatsApp_Image_2026-07-30_at_10.15.53_PM.jpeg"], 
  ["Oyedeji Eniola", <T en="Team Member" yo="Ọmọ Ẹgbẹ" key="4" />, "/WhatsApp_Image_2026-07-30_at_10.15.54_PM_1_.jpeg"], 
  ["Abraham Oreoluwa Isaac", <T en="Team Member" yo="Ọmọ Ẹgbẹ" key="5" />, "/WhatsApp_Image_2026-07-30_at_10.15.55_PM.jpeg"],
];

export function Team() {
  return (
    <section className="section team" id="team"><div className="container">
      <Reveal>
        <div className="section-intro split-intro"><div><Eyebrow><T en="07 — TEAM HEART" yo="07 — ẸGBẸ HEART" /></Eyebrow><h2><T en="Built with the community in mind." yo="A da a pẹlu agbegbe lokan." /></h2></div><p><T en="Five fellows bringing together community insight, public health thinking and a commitment to practical follow-through." yo="Awọn ọmọ ẹgbẹ marun ti wọn mu oye agbegbe, ironu ilera gbogbo eniyan ati ifaramọ si abajade to wulo wa." /></p></div>
      </Reveal>
      <div className="team-grid">{team.map(([name, role, imgSrc], i) => (
        <Reveal as="article" className="member" key={i} delay={i * 0.1}><div className="member-photo" role="img" aria-label={`Portrait of ${name}`} style={{ padding: 0 }}><img src={imgSrc as string} alt={name as string} style={{ width: "100%", height: "100%", objectFit: "cover" }} /></div><h3>{name}</h3><p>{role}</p></Reveal>
      ))}</div>
      <Reveal delay={0.4}><p className="supervisor"><T en="Supervised by" yo="Abojuwo nipasẹ" /> <strong>Mrs. Blessing Akinsanya</strong> · <T en="Lagos Youth Development Institute (LYDI), Cohort 2, Cluster D" yo="Ile-ẹkọ Idagbasoke Ọdọ Eko (LYDI), Idapọ 2, Apa D" /></p></Reveal>
    </div></section>
  );
}
