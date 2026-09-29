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
      <Reveal delay={0.4}>
        <div className="mt-16 pt-8 border-t border-[var(--line)] flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <img src="/blessing-aniefiok.jpg" alt="Blessing Aniefiok" className="w-16 h-16 rounded-full object-cover border-2 border-[var(--green)]" />
            <div>
              <p className="m-0 text-[0.9rem] text-[var(--ink)]"><T en="Supervised by" yo="Abojuwo nipasẹ" /> <strong className="text-[1.05rem]">Blessing Aniefiok</strong></p>
              <p className="text-[var(--muted)] text-[0.8rem] m-0 mt-1"><T en="Lagos Youth Development Institute (LYDI), Cohort 2, Cluster D" yo="Ile-ẹkọ Idagbasoke Ọdọ Eko (LYDI), Idapọ 2, Apa D" /></p>
            </div>
          </div>
          
          <div className="bg-[var(--green-tint)] px-5 py-4 rounded-xl border border-[#bfd1c4]">
            <p className="text-[0.75rem] font-bold text-[var(--green)] uppercase tracking-wider mb-1">
              <T en="Reach out to the team" yo="Kan si ẹgbẹ wa" />
            </p>
            <a href="mailto:projectheartng@gmail.com" className="text-[1.05rem] text-[var(--deep-blue)] hover:underline font-bold block mb-1">
              projectheartng@gmail.com
            </a>
            <span className="text-[0.75rem] text-[var(--muted)] font-medium block">projectHEART@NG2026</span>
          </div>
        </div>
      </Reveal>
    </div></section>
  );
}
