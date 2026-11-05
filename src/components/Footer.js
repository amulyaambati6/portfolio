import { profile } from "../data/profile";

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p className="footer__name">{profile.name}</p>
        <p>
          © {new Date().getFullYear()} · Built with React. Charts drawn by hand in SVG from real
          project data.
        </p>
        <a href="#top">Back to top ↑</a>
      </div>
    </footer>
  );
}

export default Footer;
