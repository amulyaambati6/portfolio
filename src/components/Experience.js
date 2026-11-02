import Section from "./Section";
import { experience } from "../data/profile";

function Experience() {
  if (!experience.length) return null;
  return (
    <Section id="experience" eyebrow="Experience & leadership" title="Roles and responsibilities">
      <ol className="timeline timeline--line">
        {experience.map((x) => (
          <li key={x.title + x.org} className="timeline__item">
            <span className="timeline__dot" aria-hidden="true" />
            <div className="timeline__meta">
              <span className="pill">{x.period}</span>
            </div>
            <h3 className="card__title">{x.title}</h3>
            <p className="card__sub">{x.org}</p>
            <ul className="bullets">
              {x.points.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </Section>
  );
}

export default Experience;
