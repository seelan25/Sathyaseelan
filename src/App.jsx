import { useEffect, useState } from "react";
import { FaAngleUp } from "react-icons/fa";
import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import About from "./components/sections/About";
import Contact from "./components/sections/Contact";
import Education from "./components/sections/Education";
import Home from "./components/sections/Home";
import Projects from "./components/sections/Projects";
import Skills from "./components/sections/Skills";
import MovieSite from "./pages/MovieSite.jsx";
import TravelSite from "./pages/TravelSite.jsx";

function usePage() {
  const read = () => window.location.hash.replace(/^#/, "");
  const [page, setPage] = useState(read);

  useEffect(() => {
    const onChange = () => {
      setPage(read());
      window.scrollTo(0, 0);
    };
    window.addEventListener("hashchange", onChange);
    return () => window.removeEventListener("hashchange", onChange);
  }, []);

  return page;
}

export default function App() {
  const page = usePage();
  const [sticky, setSticky] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const onScroll = () => {
      setSticky(window.scrollY > 20);
      setShowScrollTop(window.scrollY > 500);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (page === "movie" || page === "travel") return undefined;

    const sections = ["home", "about", "Education", "skills", "projects", "contact"]
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [page]);

  useEffect(() => {
    const nodes = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("show");
        });
      },
      { threshold: 0.16 }
    );
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (page === "movie") return <MovieSite />;
  if (page === "travel") return <TravelSite />;

  return (
    <>
      <div
        className={`scroll-up-btn${showScrollTop ? " show" : ""}`}
        onClick={scrollToTop}
        role="button"
        aria-label="Scroll to top"
      >
        <FaAngleUp aria-hidden="true" />
      </div>
      <Navbar
        sticky={sticky}
        active={active}
        menuOpen={menuOpen}
        onToggleMenu={() => setMenuOpen((open) => !open)}
        onNavigate={() => setMenuOpen(false)}
      />
      <Home />
      <About />
      <Education />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}
