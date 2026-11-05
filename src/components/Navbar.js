import { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { navLinks, profile } from "../data/profile";

function Navbar({ onHome }) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 8);
      if (!onHome) return setActive("");
      const mid = window.innerHeight * 0.35;
      let current = "";
      navLinks.forEach(({ id }) => {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= mid) current = id;
      });
      return setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [onHome]);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const close = () => setOpen(false);

  return (
    <header className={`nav${scrolled ? " nav--scrolled" : ""}`}>
      <nav className="nav__inner container" aria-label="Main">
        <a href="#top" className="nav__brand" onClick={close}>
          <span className="nav__mark" aria-hidden="true">
            A
          </span>
          {profile.name}
        </a>

        <button
          type="button"
          className="nav__toggle"
          aria-expanded={open}
          aria-controls="nav-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <FiX /> : <FiMenu />}
        </button>

        <ul id="nav-menu" className={`nav__links${open ? " is-open" : ""}`}>
          {navLinks.map(({ id, label }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className={active === id ? "is-active" : undefined}
                aria-current={active === id ? "true" : undefined}
                onClick={close}
              >
                {label}
              </a>
            </li>
          ))}
          <li>
            <a href="#resume" className="nav__cta" onClick={close}>
              Resume
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
