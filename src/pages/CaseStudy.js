import { useEffect, useState } from "react";
import { FiArrowLeft, FiArrowRight, FiExternalLink, FiGithub, FiX } from "react-icons/fi";
import IndicatorChart from "../components/charts/IndicatorChart";
import PasswordDemo from "../components/PasswordDemo";
import { Tech } from "../components/ProjectCard";
import useReveal from "../hooks/useReveal";
import { profile, projects } from "../data/profile";

function Block({ title, children, className = "" }) {
  const [ref, visible] = useReveal();
  return (
    <section ref={ref} className={`cs-block reveal${visible ? " is-visible" : ""} ${className}`}>
      <h2 className="cs-block__title">{title}</h2>
      {children}
    </section>
  );
}

function Lightbox({ image, onClose }) {
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);
  return (
    <div className="lightbox" role="dialog" aria-modal="true" aria-label={image.alt} onClick={onClose}>
      <button type="button" className="lightbox__close" aria-label="Close image" autoFocus>
        <FiX />
      </button>
      <img src={image.src} alt={image.alt} />
    </div>
  );
}

function CaseStudy({ slug }) {
  const index = projects.findIndex((p) => p.slug === slug);
  const p = projects[index];
  const [zoom, setZoom] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = p ? `${p.title} · ${profile.name}` : `Not found · ${profile.name}`;
  }, [p]);

  if (!p) {
    return (
      <div className="container cs-missing">
        <h1>That project doesn't exist.</h1>
        <a className="btn btn--primary" href="#work">
          <FiArrowLeft aria-hidden="true" /> Back to all work
        </a>
      </div>
    );
  }

  const cs = p.caseStudy;
  const next = projects[(index + 1) % projects.length];

  return (
    <article className="cs">
      <header className="cs-hero">
        <div className="container">
          <a href="#work" className="cs-back">
            <FiArrowLeft aria-hidden="true" /> All work
          </a>
          <p className="eyebrow">Case study · {p.tagline}</p>
          <h1 className="cs-title">{p.title}</h1>
          <p className="cs-question">“{cs.question}”</p>
          <dl className="cs-meta">
            {cs.meta.map((m) => (
              <div key={m.label}>
                <dt>{m.label}</dt>
                <dd>{m.value}</dd>
              </div>
            ))}
          </dl>
          <div className="project__links">
            {p.live && (
              <a className="btn btn--small btn--primary" href={p.live} target="_blank" rel="noreferrer">
                <FiExternalLink aria-hidden="true" /> Open the live app
              </a>
            )}
            {p.repo && (
              <a className="btn btn--small btn--ghost" href={p.repo} target="_blank" rel="noreferrer">
                <FiGithub aria-hidden="true" /> View the code
              </a>
            )}
          </div>
        </div>
        <div className="container">
          <figure className="cs-cover">
            <img src={p.image} alt={p.imageAlt} width="1120" height="700" />
          </figure>
        </div>
      </header>

      <div className="container cs-body">
        <Block title="Overview">
          <div className="cs-prose">
            {cs.overview.map((t) => (
              <p key={t}>{t}</p>
            ))}
          </div>
          <Tech items={p.tech} />
        </Block>

        {cs.contribution.length > 0 && (
          <Block title="My contribution">
            <ul className="cs-list">
              {cs.contribution.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </Block>
        )}

        <Block title={cs.demo ? "How the score works" : "How it comes together"}>
          <ol className="cs-steps">
            {cs.process.map((s, i) => (
              <li key={s.step}>
                <span className="cs-steps__num">{String(i + 1).padStart(2, "0")}</span>
                <h3>{s.step}</h3>
                <p>{s.text}</p>
              </li>
            ))}
          </ol>
        </Block>

        {cs.demo && (
          <Block title="Try it live">
            <PasswordDemo />
          </Block>
        )}

        {cs.findings && (
          <Block title="What the data showed" className="cs-block--wide">
            <ul className="cs-findings">
              {cs.findings.map((f) => (
                <li key={f.figure}>
                  <span className="cs-findings__fig">{f.figure}</span>
                  <span>{f.text}</span>
                </li>
              ))}
            </ul>
            <p className="cs-note">{cs.findingsNote}</p>
          </Block>
        )}

        {p.slug === "covid-dashboard" && (
          <Block title="Explore the data" className="cs-block--wide">
            <div className="card cs-chart">
              <IndicatorChart />
            </div>
          </Block>
        )}

        <Block title="Key features">
          <ul className="cs-list cs-list--grid">
            {cs.features.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
          {cs.scopeNote && <p className="cs-note">{cs.scopeNote}</p>}
        </Block>

        <Block title="Gallery" className="cs-block--wide">
          <ul className="cs-gallery">
            {cs.gallery.map((g) => (
              <li key={g.alt}>
                <button type="button" onClick={() => setZoom(g)} aria-label={`Enlarge: ${g.alt}`}>
                  <img src={g.src} alt={g.alt} loading="lazy" width="1120" height="700" />
                </button>
              </li>
            ))}
          </ul>
        </Block>

        <a className="cs-next card" href={`#/projects/${next.slug}`}>
          <span className="eyebrow eyebrow--small">Next case study</span>
          <span className="cs-next__title">
            {next.title} <FiArrowRight aria-hidden="true" />
          </span>
        </a>
      </div>

      {zoom && <Lightbox image={zoom} onClose={() => setZoom(null)} />}
    </article>
  );
}

export default CaseStudy;
