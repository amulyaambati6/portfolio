import { FiArrowUpRight, FiExternalLink, FiGithub } from "react-icons/fi";
import useReveal from "../hooks/useReveal";

export function Links({ p }) {
  return (
    <div className="project__links">
      <a className="btn btn--small btn--primary" href={`#/projects/${p.slug}`}>
        Read case study <FiArrowUpRight aria-hidden="true" />
        <span className="sr-only">: {p.title}</span>
      </a>
      {p.live && (
        <a className="btn btn--small btn--ghost" href={p.live} target="_blank" rel="noreferrer">
          <FiExternalLink aria-hidden="true" /> Live app
          <span className="sr-only"> of {p.title}</span>
        </a>
      )}
      {p.repo && (
        <a className="btn btn--small btn--ghost" href={p.repo} target="_blank" rel="noreferrer">
          <FiGithub aria-hidden="true" /> Code
          <span className="sr-only"> for {p.title} on GitHub</span>
        </a>
      )}
    </div>
  );
}

export function Tech({ items }) {
  return (
    <ul className="chips chips--tech" aria-label="Technologies">
      {items.map((t) => (
        <li key={t} className="chip chip--outline">
          {t}
        </li>
      ))}
    </ul>
  );
}

function ProjectCard({ p, index }) {
  const [ref, visible] = useReveal();
  return (
    <article
      ref={ref}
      className={`pcard card reveal${visible ? " is-visible" : ""}`}
      style={{ transitionDelay: `${index * 0.1}s` }}
    >
      <a href={`#/projects/${p.slug}`} className="pcard__media" tabIndex={-1} aria-hidden="true">
        <img src={p.image} alt="" loading="lazy" width="1120" height="700" />
      </a>
      <div className="pcard__body">
        <p className="eyebrow eyebrow--small">{p.tagline}</p>
        <h3 className="project__title">
          <a href={`#/projects/${p.slug}`}>{p.title}</a>
        </h3>
        <p>{p.summary}</p>
        <Tech items={p.tech} />
        <Links p={p} />
      </div>
    </article>
  );
}

export default ProjectCard;
