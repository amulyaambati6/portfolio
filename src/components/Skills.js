import Section from "./Section";
import { skills } from "../data/profile";

function Skills() {
  return (
    <Section id="skills" eyebrow="Technical skills" title="What I work with">
      <div className="skills">
        {skills.map(({ group, items }) => (
          <div key={group} className="skills__group card">
            <h3 className="mini-title">{group}</h3>
            <ul className="chips">
              {items.map((s) => (
                <li key={s} className="chip">{s}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}

export default Skills;
