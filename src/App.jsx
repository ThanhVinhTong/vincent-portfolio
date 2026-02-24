import { useMemo, useState } from "react";
import { Navbar } from "@/layout/Navbar";
import { Footer } from "@/layout/Footer";

import { Hero } from "@/sections/Hero";
import { About } from "@/sections/About";
import { Education } from "@/sections/Education";
import { Projects } from "@/sections/Projects";
import { Experience } from "@/sections/Experience";
import { Testimonials } from "@/sections/Testimonials";
import { Certifications } from "@/sections/Certifications";
import { Contact } from "@/sections/Contact";

function App() {
  const [activeTab, setActiveTab] = useState("home");

  const activeSection = useMemo(() => {
    switch (activeTab) {
      case "projects":
        return <Projects />;
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
            <About />
            <Education />
          </>
        );
    }
  }, [activeTab]);

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar activeTab={activeTab} onTabChange={setActiveTab} />
      <main>
        {activeSection}
      </main>
      <Footer activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  );
}

export default App;
