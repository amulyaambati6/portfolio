import Section from "./Section";
import { education } from "../data/profile";

function Education() {
  return (
    <Section id="education" eyebrow="Education" title="Where I'm studying" tone="tint">
      <ol className="timeline">
        {education.map((e) => (
          <li key={e.institution} className="timeline__item card">
            <div className="timeline__meta">
              <span className="pill">{e.period}</span>
              <span className="muted">{e.place}</span>
            </div>
            <h3 className="card__title">{e.institution}</h3>
            <p className="card__sub">{e.programme}</p>
            <ul className="bullets">
              {e.details.map((d) => (
                <li key={d}>{d}</li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </Section>
  );
}

export default Education;
