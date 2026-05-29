import { Facebook, Github, Instagram, Linkedin, Mail, Phone } from "lucide-react";

const footerTabs = [
  { key: "home", label: "Home" },
  { key: "projects", label: "Projects" },
  { key: "experience", label: "Experience" },
  { key: "testimonials", label: "Testimonials" },
  { key: "certifications", label: "Certifications" },
  { key: "contact", label: "Contact" },
];

export const Footer = ({ activeTab, onTabChange }) => {
  return (
    <footer className="relative border-t border-border/70 bg-card/50">
      <div className="container mx-auto px-6 py-10">
        <div className="grid gap-8 md:grid-cols-[1.15fr_0.75fr_1.1fr]">
          {/* Left: Summary + Contact */}
          <div className="space-y-4">
            <button
              type="button"
              onClick={() => onTabChange("home")}
              className="text-lg font-semibold tracking-tight hover:text-primary transition-colors"
            >
              Vincent Tong<span className="text-primary">.</span>
            </button>
            <p className="text-sm text-muted-foreground max-w-sm">
              Software engineer building reliable, practical solutions across
              full-stack development, AI, and cloud systems.
            </p>
            <div className="space-y-2 text-sm text-muted-foreground">
              <a
                href="mailto:vincent.tong369@gmail.com"
                className="flex items-center gap-2 hover:text-primary transition-colors"
              >
                <Mail className="w-4 h-4" />
                Business: vincent.tong369@gmail.com
              </a>
              <a
                href="mailto:vinhtongthanh57@gmail.com"
                className="flex items-center gap-2 hover:text-primary transition-colors"
              >
                <Mail className="w-4 h-4" />
                Personal: vinhtongthanh57@gmail.com
              </a>
              <a
                href="tel:+61481789234"
                className="flex items-center gap-2 hover:text-primary transition-colors"
              >
                <Phone className="w-4 h-4" />
                +61 481 789 234
              </a>
            </div>
          </div>

          {/* Middle: Quick Links */}
          <div className="space-y-2">
            <h3 className="text-sm uppercase tracking-wider text-primary">Quick Links</h3>
            <div className="flex flex-col gap-1">
              {footerTabs.map((tab) => (
                <button
                  key={tab.key}
                  type="button"
                  onClick={() => onTabChange(tab.key)}
                  className={`text-left text-sm leading-6 transition-colors ${
                    activeTab === tab.key
                      ? "text-foreground underline underline-offset-4"
                      : "text-muted-foreground hover:text-foreground hover:underline hover:underline-offset-4"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Right: Connect */}
          <div className="space-y-4 md:justify-self-end">
            <div>
              <h3 className="font-medium text-primary uppercase tracking-wider">Connect With Me</h3>
              <p className="text-sm text-muted-foreground mt-1">
                Open to full-time engineering opportunities, contract projects,
                and relocation for the right role.
              </p>
            </div>

            <div className="space-y-3">
              <div>
                <h4 className="text-sm uppercase tracking-wider text-primary mb-2">
                  Professional Profiles
                </h4>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="https://www.linkedin.com/in/thanh-vinh-tong-b02b5016b/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Linkedin className="w-4 h-4" />
                    LinkedIn
                  </a>
                  <a
                    href="https://github.com/ThanhVinhTong"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    GitHub
                  </a>
                </div>
              </div>

              <div>
                <h4 className="text-sm uppercase tracking-wider text-primary mb-2">
                  Daily Life & Social
                </h4>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="https://www.instagram.com/thvinh.tong/"
                    className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Instagram className="w-4 h-4" />
                    Instagram
                  </a>
                  <a
                    href="https://www.facebook.com/tongthanh.vinh.7"
                    className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Facebook className="w-4 h-4" />
                    Facebook
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-border/50">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Vincent Tong. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
