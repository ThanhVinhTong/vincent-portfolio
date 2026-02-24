import { useMemo, useState } from "react";
import { Navbar } from "@/layout/Navbar";

import { Hero } from "@/sections/Hero";
import { About } from "@/sections/About";
import { Education } from "@/sections/Education";
import { Projects } from "@/sections/Projects";
import { Experience } from "@/sections/Experience";
import { Testimonials } from "@/sections/Testimonials";
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
    </div>
  );
}

export default App;
