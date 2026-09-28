import { Eyebrow } from "../ui/Eyebrow";
import { Reveal } from "../Reveal";

const team = [
  ["Joseph, Samuel Oluwafemi", "Team Lead"], ["Apalara Idris Abiodun", "Team Member"], ["Ishola Barakah-sofiyah", "Team Member"], ["Oyedeji Eniola", "Team Member"], ["Abraham Oreoluwa Isaac", "Team Member"],
];

export function Team() {
  return (
    <section className="section team" id="team"><div className="container">
      <Reveal>
        <div className="section-intro split-intro"><div><Eyebrow>07 — TEAM HEART</Eyebrow><h2>Built with the community in mind.</h2></div><p>Five fellows bringing together community insight, public health thinking and a commitment to practical follow-through.</p></div>
      </Reveal>
      <div className="team-grid">{team.map(([name, role], i) => (
        <Reveal as="article" className="member" key={name} delay={i * 0.1}><div className="member-photo" role="img" aria-label={`Portrait placeholder for ${name}`}><span>0{i + 1}</span></div><h3>{name}</h3><p>{role}</p></Reveal>
      ))}</div>
      <Reveal delay={0.4}><p className="supervisor">Supervised by <strong>Mrs. Blessing Akinsanya</strong> · Lagos Youth Development Institute (LYDI), Cohort 2, Cluster D</p></Reveal>
    </div></section>
  );
}
