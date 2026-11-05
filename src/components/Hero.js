import { FiArrowDownRight, FiGithub, FiLinkedin, FiMail, FiMapPin } from "react-icons/fi";
import HeroChart from "./charts/HeroChart";
import { profile } from "../data/profile";

function Hero() {
  return (
    <section id="top" className="hero" aria-label="Introduction">
      <div className="container hero__grid">
        <div className="hero__text">
          <p className="hero__status">
            <span className="dot" aria-hidden="true" />
            {profile.availability}
          </p>
          <h1 className="hero__name">
            <span>{profile.firstName}</span>
            <em>{profile.lastName}</em>
          </h1>
          <p className="hero__headline">{profile.headline}</p>
          <ul className="hero__positioning" aria-label="Focus areas">
            {profile.positioning.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
          <p className="hero__intro">{profile.intro}</p>

          <div className="hero__actions">
            <a href="#work" className="btn btn--primary">
              See my work <FiArrowDownRight aria-hidden="true" />
            </a>
            <a href="#contact" className="btn btn--ghost">
              Get in touch
            </a>
          </div>

          <div className="hero__meta">
            <span className="hero__location">
              <FiMapPin aria-hidden="true" /> {profile.location}
            </span>
            <ul className="hero__social" aria-label="Profiles">
              <li>
                <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
                  <FiGithub />
                </a>
              </li>
              {profile.linkedin && (
                <li>
                  <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
                    <FiLinkedin />
                  </a>
                </li>
              )}
              <li>
                <a href={`mailto:${profile.email}`} aria-label="Email">
                  <FiMail />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="hero__visual">
          <HeroChart />
        </div>
      </div>
    </section>
  );
}

export default Hero;
