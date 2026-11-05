import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollProgress from "./components/ScrollProgress";
import Home from "./pages/Home";
import CaseStudy from "./pages/CaseStudy";
import useHashRoute from "./hooks/useHashRoute";

function App() {
  const route = useHashRoute();
  const onHome = route.page === "home";

  return (
    <>
      <a className="skip-link" href="#main" onClick={(e) => {
        e.preventDefault();
        document.getElementById("main")?.focus();
      }}>
        Skip to content
      </a>
      <ScrollProgress />
      <Navbar onHome={onHome} />
      <main id="main" tabIndex={-1}>
        {onHome ? <Home anchor={route.anchor} /> : <CaseStudy key={route.slug} slug={route.slug} />}
      </main>
      <Footer />
    </>
  );
}

export default App;
