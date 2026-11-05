import Section from "./Section";
import { experience } from "../data/profile";

function Experience() {
  if (!experience.length) return null;
  return (
    <Section
      id="experience"
      number="05"
      eyebrow="Experience & leadership"
      title="Where I've worked and led"
      tone="tint"
    >
      <div className="xp">
        {experience.map(({ group, items }) => (
          <div key={group} className="xp__group">
            <h3 className="mini-title">{group}</h3>
            <ol className="timeline timeline--line">
              {items.map((x) => (
                <li key={x.title + x.org} className="timeline__item">
                  <span className="timeline__dot" aria-hidden="true" />
                  <div className="timeline__meta">
                    <span className="pill">{x.period}</span>
                  </div>
                  <h4 className="card__title">{x.title}</h4>
                  <p className="card__sub">{x.org}</p>
                  {x.points.length > 0 && (
                    <ul className="bullets">
                      {x.points.map((p) => (
                        <li key={p}>{p}</li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ol>
          </div>
        ))}
      </div>
    </Section>
  );
}

export default Experience;
