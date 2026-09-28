import { Eyebrow } from "../ui/Eyebrow";
import { Reveal } from "../Reveal";
import { T } from "../LanguageProvider";

const team = [
  ["Joseph, Samuel Oluwafemi", <T en="Team Lead" yo="Olori Ẹgbẹ" key="1" />], 
  ["Apalara Idris Abiodun", <T en="Team Member" yo="Ọmọ Ẹgbẹ" key="2" />], 
  ["Ishola Barakah-sofiyah", <T en="Team Member" yo="Ọmọ Ẹgbẹ" key="3" />], 
  ["Oyedeji Eniola", <T en="Team Member" yo="Ọmọ Ẹgbẹ" key="4" />], 
  ["Abraham Oreoluwa Isaac", <T en="Team Member" yo="Ọmọ Ẹgbẹ" key="5" />],
];

export function Team() {
  return (
    <section className="section team" id="team"><div className="container">
      <Reveal>
        <div className="section-intro split-intro"><div><Eyebrow><T en="07 — TEAM HEART" yo="07 — ẸGBẸ HEART" /></Eyebrow><h2><T en="Built with the community in mind." yo="A da a pẹlu agbegbe lokan." /></h2></div><p><T en="Five fellows bringing together community insight, public health thinking and a commitment to practical follow-through." yo="Awọn ọmọ ẹgbẹ marun ti wọn mu oye agbegbe, ironu ilera gbogbo eniyan ati ifaramọ si abajade to wulo wa." /></p></div>
      </Reveal>
      <div className="team-grid">{team.map(([name, role], i) => (
        <Reveal as="article" className="member" key={i} delay={i * 0.1}><div className="member-photo" role="img" aria-label={`Portrait placeholder for ${name}`}><span>0{i + 1}</span></div><h3>{name}</h3><p>{role}</p></Reveal>
      ))}</div>
      <Reveal delay={0.4}><p className="supervisor"><T en="Supervised by" yo="Abojuwo nipasẹ" /> <strong>Mrs. Blessing Akinsanya</strong> · <T en="Lagos Youth Development Institute (LYDI), Cohort 2, Cluster D" yo="Ile-ẹkọ Idagbasoke Ọdọ Eko (LYDI), Idapọ 2, Apa D" /></p></Reveal>
    </div></section>
  );
}
