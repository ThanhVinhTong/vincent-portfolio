import { Facebook, Github, Instagram, Linkedin, Mail, Phone } from "lucide-react";

const footerTabs = [
  { key: "home", label: "Home" },
  { key: "problem-solving", label: "Problem Solving" },
  { key: "projects", label: "Projects" },
  { key: "experience", label: "Experience" },
  { key: "testimonials", label: "References" },
  { key: "certifications", label: "Credentials" },
  { key: "contact", label: "Contact" },
];

const professionalLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/thanh-vinh-tong-b02b5016b/",
    icon: Linkedin,
  },
  {
    label: "GitHub",
    href: "https://github.com/ThanhVinhTong",
    icon: Github,
  },
];

const socialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/thvinh.tong/",
    icon: Instagram,
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/tongthanh.vinh.7",
    icon: Facebook,
  },
];

export const Footer = ({ activeTab, onTabChange }) => {
  return (
    <footer className="border-t border-border/70 bg-card/70">
      <div className="container mx-auto px-6 py-10">
        <div className="grid gap-8 md:grid-cols-[1.1fr_0.75fr_1fr]">
          <div className="space-y-4">
            <button
              type="button"
              onClick={() => onTabChange("home")}
              className="focus-ring rounded-md text-lg font-semibold tracking-tight transition-colors hover:text-primary"
            >
              Vincent Tong<span className="text-primary">.</span>
            </button>
            <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
              Software engineer building reliable full-stack, AI, data, and cloud
              systems for practical workflows.
            </p>
            <div className="space-y-2 text-sm text-muted-foreground">
              <a
                href="mailto:vincent.tong369@gmail.com"
                className="flex items-center gap-2 transition-colors hover:text-primary"
              >
                <Mail className="h-4 w-4" />
                Business: vincent.tong369@gmail.com
              </a>
              <a
                href="mailto:vinhtongthanh57@gmail.com"
                className="flex items-center gap-2 transition-colors hover:text-primary"
              >
                <Mail className="h-4 w-4" />
                Personal: vinhtongthanh57@gmail.com
              </a>
              <a
                href="tel:+61481789234"
                className="flex items-center gap-2 transition-colors hover:text-primary"
              >
                <Phone className="h-4 w-4" />
                +61 481 789 234
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-medium text-primary">Navigation</h3>
            <div className="mt-3 flex flex-col gap-1">
              {footerTabs.map((tab) => (
                <button
                  key={tab.key}
                  type="button"
                  onClick={() => onTabChange(tab.key)}
                  className={`focus-ring rounded-md py-1 text-left text-sm leading-6 transition-colors ${
                    activeTab === tab.key
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-5 md:justify-self-end">
            <div>
              <h3 className="text-sm font-medium text-primary">Professional profiles</h3>
              <div className="mt-3 flex flex-wrap gap-3">
                {professionalLinks.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    <item.icon className="h-4 w-4" />
                    {item.label}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-medium text-primary">Social</h3>
              <div className="mt-3 flex flex-wrap gap-3">
                {socialLinks.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    <item.icon className="h-4 w-4" />
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-border/70 pt-6">
          <p className="text-xs text-muted-foreground">
            Copyright {new Date().getFullYear()} Vincent Tong. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
