import Section from "./Section";
import IndicatorChart from "./charts/IndicatorChart";
import ProjectCard, { Links, Tech } from "./ProjectCard";
import { projects } from "../data/profile";

function Projects() {
  const [featured, ...rest] = projects;
  return (
    <Section
      id="work"
      number="01"
      eyebrow="Selected work"
      title="Projects that turn data into decisions"
      tone="tint"
    >
      <article className="featured card">
        <div className="featured__head">
          <div className="featured__text">
            <p className="eyebrow eyebrow--small">Featured · {featured.tagline}</p>
            <h3 className="featured__title">
              <a href={`#/projects/${featured.slug}`}>{featured.title}</a>
            </h3>
            <p className="featured__summary">{featured.summary}</p>
            <Tech items={featured.tech} />
            <Links p={featured} />
          </div>
          <a href={`#/projects/${featured.slug}`} className="featured__media" tabIndex={-1} aria-hidden="true">
            <img src={featured.image} alt="" width="1120" height="700" />
          </a>
        </div>
        <div className="featured__chart">
          <h4 className="featured__chart-title">
            Explore the data yourself
            <span>The same World Bank data, rebuilt as an interactive chart for this site</span>
          </h4>
          <IndicatorChart />
        </div>
      </article>

      <div className="pcards">
        {rest.map((p, i) => (
          <ProjectCard key={p.slug} p={p} index={i} />
        ))}
      </div>
    </Section>
  );
}

export default Projects;
