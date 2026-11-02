import { FiArrowRight, FiGithub, FiLinkedin, FiMail, FiMapPin } from "react-icons/fi";
import photo from "../assets/profile1.jpg";
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
          <h1 className="hero__name">{profile.name}</h1>
          <p className="hero__positioning">
            {profile.positioning.map((p, i) => (
              <span key={p}>
                {p}
                {i < profile.positioning.length - 1 && (
                  <span className="sep" aria-hidden="true"> · </span>
                )}
              </span>
            ))}
          </p>
          <p className="hero__intro">{profile.intro}</p>
          <p className="hero__location">
            <FiMapPin aria-hidden="true" /> {profile.location}
          </p>

          <div className="hero__actions">
            <a href="#projects" className="btn btn--primary">
              View projects <FiArrowRight aria-hidden="true" />
            </a>
            <a href="#contact" className="btn btn--ghost">
              Get in touch
            </a>
          </div>

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

        <div className="hero__photo">
          <div className="hero__frame">
            <img src={photo} alt={`Portrait of ${profile.name}`} width="689" height="886" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
