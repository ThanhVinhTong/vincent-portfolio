import { Button } from "@/components/Button";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navLinks = [
  { key: "home", label: "Home" },
  { key: "projects", label: "Projects" },
  { key: "experience", label: "Experience" },
  { key: "testimonials", label: "Testimonials" },
  { key: "certifications", label: "Certifications" },
  { key: "contact", label: "Contact" },
];

export const Navbar = ({ activeTab, onTabChange }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const nextIsScrolled = window.scrollY > 50;
      setIsScrolled((prev) => (prev === nextIsScrolled ? prev : nextIsScrolled));
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass-strong border-b border-border/60 py-3" : "py-5"
      }`}
    >
      <nav className="container mx-auto flex items-center justify-between px-6">
        <button
          type="button"
          onClick={() => {
            onTabChange("home");
            setIsMobileMenuOpen(false);
          }}
          className="focus-ring rounded-md text-lg font-semibold tracking-tight transition-colors hover:text-primary"
        >
          Vincent Tong<span className="text-primary">.</span>
        </button>

        <div className="hidden md:flex items-center gap-1">
          <div className="glass flex items-center gap-1 rounded-full px-1.5 py-1">
            {navLinks.map((link) => (
              <button
                key={link.key}
                type="button"
                onClick={() => onTabChange(link.key)}
                className={`focus-ring rounded-full px-3 py-2 text-sm transition-colors ${
                  activeTab === link.key
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:bg-surface hover:text-foreground"
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>

        <div className="hidden md:block">
          <Button size="sm" onClick={() => onTabChange("contact")}>
            Contact
          </Button>
        </div>

        <button
          type="button"
          aria-label="Toggle navigation"
          className="focus-ring rounded-full p-2 text-foreground md:hidden"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {isMobileMenuOpen && (
        <div className="glass-strong mt-3 border-y border-border/60 md:hidden">
          <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <button
                key={link.key}
                type="button"
                onClick={() => {
                  onTabChange(link.key);
                  setIsMobileMenuOpen(false);
                }}
                className={`focus-ring rounded-md py-2 text-left text-base transition-colors ${
                  activeTab === link.key
                    ? "text-primary"
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
              Contact
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
