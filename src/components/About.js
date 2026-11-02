import Section from "./Section";
import { about } from "../data/profile";

function About() {
  return (
    <Section id="about" eyebrow="About me" title="Data, design and decisions">
      <div className="about">
        <div className="about__text">
          {about.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
        <aside className="about__side">
          <h3 className="mini-title">Interests</h3>
          <ul className="chips">
            {about.interests.map((i) => (
              <li key={i} className="chip">{i}</li>
            ))}
          </ul>
          <h3 className="mini-title">Languages</h3>
          <dl className="langs">
            {about.languages.map(({ name, level }) => (
              <div key={name}>
                <dt>{name}</dt>
                <dd>{level}</dd>
              </div>
            ))}
          </dl>
        </aside>
      </div>
    </Section>
  );
}

export default About;
