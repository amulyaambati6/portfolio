import { profile } from "../data/profile";

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>
        <a href="#top">Back to top ↑</a>
      </div>
    </footer>
  );
}

export default Footer;
