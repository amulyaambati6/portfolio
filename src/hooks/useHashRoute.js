import { useEffect, useState } from "react";

// Minimal hash router that works on GitHub Pages without server config.
// "#/projects/<slug>" opens a case study; any other hash ("#about") is a
// section of the home page, so plain anchor links keep working.
function parse(hash) {
  const m = hash.match(/^#\/projects\/([\w-]+)/);
  return m ? { page: "project", slug: m[1] } : { page: "home", anchor: hash.slice(1) };
}

export default function useHashRoute() {
  const [route, setRoute] = useState(() => parse(window.location.hash));
  useEffect(() => {
    const onChange = () => setRoute(parse(window.location.hash));
    window.addEventListener("hashchange", onChange);
    return () => window.removeEventListener("hashchange", onChange);
  }, []);
  return route;
}
