import "./App.css";
import "./i18n";
import Contact from "./components/contact";
import Hero from "./components/hero";
import Projects from "./components/projects";
import Skills from "./components/skills";
import Whoami from "./components/whoami";
import ScrollReveal from "./ui/scroll-reveal";
import { useCallback, useLayoutEffect } from "react";
import { useTranslation } from "react-i18next";

function App() {
  const { i18n } = useTranslation();

  const renamePage = useCallback((lang: string) => {
    document.title =
      lang === "es" ? "Mi portafolio - Jesu" : "My portfolio - Jesu";
  }, []);

  useLayoutEffect(() => {
    if (!i18n.resolvedLanguage) return;
    renamePage(i18n.resolvedLanguage);
  }, [i18n.resolvedLanguage, renamePage]);

  useLayoutEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="flex flex-col gap-y-8">
      <Hero />

      <ScrollReveal>
        <Whoami />
      </ScrollReveal>

      <ScrollReveal delay={0.2}>
        <Projects />
      </ScrollReveal>

      <ScrollReveal delay={0.2}>
        <Skills />
      </ScrollReveal>

      <ScrollReveal delay={0.2}>
        <Contact />
      </ScrollReveal>
    </main>
  );
}

export default App;
