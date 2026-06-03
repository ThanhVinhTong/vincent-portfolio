import { useEffect, useMemo, useState } from "react";
import { Navbar } from "@/layout/Navbar";
import { Footer } from "@/layout/Footer";

import { Hero } from "@/sections/Hero";
import { About } from "@/sections/About";
import { Education } from "@/sections/Education";
import { Projects } from "@/sections/Projects";
import { ProblemSolving } from "@/sections/ProblemSolving";
import { Experience } from "@/sections/Experience";
import { Testimonials } from "@/sections/Testimonials";
import { Certifications } from "@/sections/Certifications";
import { Contact } from "@/sections/Contact";

function App() {
  const [activeTab, setActiveTab] = useState("home");

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [activeTab]);

  const activeSection = useMemo(() => {
    switch (activeTab) {
      case "projects":
        return <Projects />;
      case "problem-solving":
        return <ProblemSolving onTabChange={setActiveTab} />;
      case "experience":
        return <Experience />;
      case "testimonials":
        return <Testimonials />;
      case "certifications":
        return <Certifications />;
      case "contact":
        return <Contact />;
      case "home":
      default:
        return (
          <>
            <Hero onTabChange={setActiveTab} />
            <ProblemSolving onTabChange={setActiveTab} />
            <About />
            <Education />
          </>
        );
    }
  }, [activeTab]);

  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <Navbar activeTab={activeTab} onTabChange={setActiveTab} />
      <main>
        {activeSection}
      </main>
      <Footer activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  );
}

export default App;
