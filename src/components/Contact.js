import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import Section from "./Section";
import { profile } from "../data/profile";

function Contact() {
  const links = [
    { label: "Email", value: profile.email, href: `mailto:${profile.email}`, icon: FiMail },
    profile.linkedin && {
      label: "LinkedIn",
      value: profile.linkedin.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, ""),
      href: profile.linkedin,
      icon: FiLinkedin,
      external: true,
    },
    {
      label: "GitHub",
      value: profile.github.replace(/^https?:\/\//, ""),
      href: profile.github,
      icon: FiGithub,
      external: true,
    },
  ].filter(Boolean);

  return (
    <Section id="contact" eyebrow="Contact" title="Let's talk about March 2027">
      <p className="contact__lead">
        I'm looking for a technical internship starting in March 2027 in data analytics,
        applied AI or digital technology. I'd be glad to hear about your team.
      </p>
      <ul className="contact">
        {links.map(({ label, value, href, icon: Icon, external }) => (
          <li key={label}>
            <a
              className="contact__item card"
              href={href}
              {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
            >
              <Icon aria-hidden="true" className="contact__icon" />
              <span>
                <span className="contact__label">{label}</span>
                <span className="contact__value">{value}</span>
              </span>
            </a>
          </li>
        ))}
      </ul>
    </Section>
  );
}

export default Contact;
