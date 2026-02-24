import { Button } from "@/components/Button";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navLinks = [
  // OLD: hash anchor links
  { key: "home", label: "Home" },
  // OLD: { key: "about", label: "About" },
  { key: "projects", label: "Projects" },
  { key: "experience", label: "Experience" },
  { key: "testimonials", label: "Testimonials" },
  { key: "contact", label: "Contact" },
]


export const Navbar = ({ activeTab, onTabChange }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const nextIsScrolled = window.scrollY > 50;
      // OLD: setIsScrolled(window.scrollY > 50)
      setIsScrolled((prev) => (prev === nextIsScrolled ? prev : nextIsScrolled));
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 transition-all duration-500
                        ${isScrolled ? "glass-strong py-3" : "bg-transparent py-5"} 
                        z-50`}
    >
      <nav className="container mx-auto px-6 flex items-center justify-between">
        <button
          type="button"
          onClick={() => onTabChange("home")}
          className="text-xl font-bold tracking-tight hover:text-primary"
        >
          Vincent Tong<span className="text-primary">.</span>
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1">
          <div className="glass rounded-full px-2 py-1 flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.key}
                type="button"
                onClick={() => onTabChange(link.key)}
                className={`px-4 py-2 text-sm rounded-full transition-colors ${
                  activeTab === link.key
                    ? "text-foreground bg-surface"
                    : "text-muted-foreground hover:text-foreground hover:bg-surface"
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          {/* OLD: <Button size="sm">Contact Me</Button> */}
          <Button size="sm" onClick={() => onTabChange("contact")}>Contact Me</Button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 text-foreground cursor-pointer" 
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass-strong animate-fade-in">
          <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <button
                key={link.key}
                type="button"
                onClick={() => {
                  onTabChange(link.key);
                  setIsMobileMenuOpen(false);
                }}
                className={`text-left text-lg py-2 transition-colors ${
                  activeTab === link.key
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.label}
              </button>
            ))}

            <Button
              onClick={() => {
                onTabChange("contact");
                setIsMobileMenuOpen(false);
              }}
            >
              Contact Me
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};