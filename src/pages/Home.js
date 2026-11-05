import { useEffect } from "react";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import Projects from "../components/Projects";
import About from "../components/About";
import Education from "../components/Education";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import Contact from "../components/Contact";

export const HOME_TITLE = "Amulya Ambati · Computer Science, Data Analytics & AI";

function Home({ anchor }) {
  useEffect(() => {
    document.title = HOME_TITLE;
    // Arriving from a case study with "#about" etc.: jump to that section.
    const el = anchor && document.getElementById(anchor);
    if (el) el.scrollIntoView();
    else window.scrollTo(0, 0);
    // Only on first mount of the home page.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Hero />
      <Stats />
      <Projects />
      <About />
      <Education />
      <Skills />
      <Experience />
      <Contact />
    </>
  );
}

export default Home;
