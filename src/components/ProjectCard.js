import { FiExternalLink, FiGithub } from "react-icons/fi";

function ProjectCard({ project }) {
  const { title, tagline, image, imageAlt, description, highlights, role, tech, repo, live } = project;
  return (
    <article className="project card">
      <figure className="project__media">
        <img src={image} alt={imageAlt} loading="lazy" width="1120" height="700" />
      </figure>
      <div className="project__body">
        <div className="project__main">
          <p className="eyebrow eyebrow--small">{tagline}</p>
          <h3 className="project__title">{title}</h3>
          <p>{description}</p>
          <ul className="bullets">
            {highlights.map((h) => (
              <li key={h}>{h}</li>
            ))}
          </ul>
        </div>
        <div className="project__aside">
          {role && <p className="project__role">{role}</p>}
          <h4 className="mini-title">Built with</h4>
          <ul className="chips chips--tech" aria-label="Technologies">
            {tech.map((t) => (
              <li key={t} className="chip chip--outline">{t}</li>
            ))}
          </ul>
          <div className="project__links">
            {repo && (
              <a className="btn btn--small btn--ghost" href={repo} target="_blank" rel="noreferrer">
                <FiGithub aria-hidden="true" /> Code
                <span className="sr-only"> for {title} on GitHub</span>
              </a>
            )}
            {live && (
              <a className="btn btn--small btn--primary" href={live} target="_blank" rel="noreferrer">
                <FiExternalLink aria-hidden="true" /> Live demo
                <span className="sr-only"> of {title}</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;
