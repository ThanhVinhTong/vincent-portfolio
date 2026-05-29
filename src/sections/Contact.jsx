import {
  AlertCircle,
  CheckCircle,
  Github,
  Linkedin,
  Mail,
  Phone,
  Send,
} from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/Button";

const contactInfo = [
  {
    icon: Mail,
    label: "Business email",
    value: "vincent.tong369@gmail.com",
    href: "mailto:vincent.tong369@gmail.com",
  },
  {
    icon: Mail,
    label: "Personal email",
    value: "vinhtongthanh57@gmail.com",
    href: "mailto:vinhtongthanh57@gmail.com",
  },
  {
    icon: Phone,
    label: "Mobile",
    value: "+61 481 789 234",
    href: "tel:+61481789234",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "thanh-vinh-tong-b02b5016b",
    href: "https://www.linkedin.com/in/thanh-vinh-tong-b02b5016b/",
    external: true,
  },
  {
    icon: Github,
    label: "GitHub",
    value: "ThanhVinhTong",
    href: "https://github.com/ThanhVinhTong",
    external: true,
  },
];

const initialFormData = {
  name: "",
  email: "",
  tel: "",
  subject: "",
  message: "",
};

export const Contact = () => {
  const [formData, setFormData] = useState(initialFormData);
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({
    type: null,
    message: "",
  });

  const updateField = (field, value) => {
    setFormData((current) => ({ ...current, [field]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error(
          "Contact form is not configured for this environment. Please email me directly."
        );
      }

      const currentTime = new Date().toLocaleString("en-AU", {
        year: "numeric",
        month: "short",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
      });

      const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          service_id: serviceId,
          template_id: templateId,
          user_id: publicKey,
          template_params: {
            from_name: formData.name,
            from_email: formData.email,
            tel: formData.tel,
            time: currentTime,
            subject: formData.subject,
            message: formData.message,
          },
        }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(errorText || "Failed to send message.");
      }

      setSubmitStatus({
        type: "success",
        message: "Message sent successfully. I will get back to you soon.",
      });
      setFormData(initialFormData);
    } catch (err) {
      console.error("Contact form error:", err);
      setSubmitStatus({
        type: "error",
        message: err?.message || "Failed to send message. Please try again later.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="section-shell">
      <div className="container mx-auto px-6">
        <div className="mb-12 grid gap-6 lg:grid-cols-[0.72fr_1fr] lg:items-end">
          <div>
            <div className="section-kicker">Contact</div>
            <h2 className="section-title-sm mt-4">
              Build something{" "}
              <span className="font-serif text-primary">practical.</span>
            </h2>
          </div>
          <p className="section-copy max-w-3xl lg:justify-self-end">
            Open to full-time software engineering roles, contract projects, and
            relocation for the right opportunity.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.08fr_0.92fr]">
          <div className="panel p-5 md:p-6">
            <form className="grid gap-5" onSubmit={handleSubmit}>
              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-medium">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) => updateField("name", e.target.value)}
                    className="focus-ring w-full rounded-lg border border-border bg-surface px-4 py-3 text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-medium">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => updateField("email", e.target.value)}
                    className="focus-ring w-full rounded-lg border border-border bg-surface px-4 py-3 text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary"
                  />
                </div>
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label htmlFor="tel" className="mb-2 block text-sm font-medium">
                    Mobile
                  </label>
                  <input
                    id="tel"
                    type="tel"
                    required
                    placeholder="+61..."
                    value={formData.tel}
                    onChange={(e) => updateField("tel", e.target.value)}
                    className="focus-ring w-full rounded-lg border border-border bg-surface px-4 py-3 text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="mb-2 block text-sm font-medium">
                    Subject
                  </label>
                  <input
                    id="subject"
                    type="text"
                    required
                    placeholder="Message subject"
                    value={formData.subject}
                    onChange={(e) => updateField("subject", e.target.value)}
                    className="focus-ring w-full rounded-lg border border-border bg-surface px-4 py-3 text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={6}
                  required
                  value={formData.message}
                  onChange={(e) => updateField("message", e.target.value)}
                  placeholder="Tell me about the role, project, or team."
                  className="focus-ring w-full resize-none rounded-lg border border-border bg-surface px-4 py-3 text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary"
                />
              </div>

              <Button className="w-full" type="submit" size="lg" disabled={isLoading}>
                {isLoading ? (
                  "Sending..."
                ) : (
                  <>
                    Send message
                    <Send className="h-5 w-5" />
                  </>
                )}
              </Button>

              {submitStatus.type && (
                <div
                  className={`flex items-start gap-3 rounded-lg border p-4 ${
                    submitStatus.type === "success"
                      ? "border-success/25 bg-success/10 text-success"
                      : "border-error/25 bg-error/10 text-error"
                  }`}
                >
                  {submitStatus.type === "success" ? (
                    <CheckCircle className="mt-0.5 h-5 w-5 shrink-0" />
                  ) : (
                    <AlertCircle className="mt-0.5 h-5 w-5 shrink-0" />
                  )}
                  <p className="text-sm leading-relaxed">{submitStatus.message}</p>
                </div>
              )}
            </form>
          </div>

          <aside className="space-y-6">
            <div className="panel p-5 md:p-6">
              <h3 className="text-xl font-semibold">Direct channels</h3>
              <div className="mt-5 divide-y divide-border">
                {contactInfo.map((item) => (
                  <a
                    key={`${item.label}-${item.value}`}
                    href={item.href}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noopener noreferrer" : undefined}
                    className="group flex items-center gap-4 py-4 first:pt-0 last:pb-0"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-primary/25 bg-primary/10 transition-colors group-hover:border-primary/60">
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-sm text-muted-foreground">{item.label}</div>
                      <div className="truncate font-medium transition-colors group-hover:text-primary">
                        {item.value}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="panel-soft p-5 md:p-6">
              <div className="flex items-center gap-3">
                <span className="h-3 w-3 rounded-full bg-primary shadow-[0_0_16px_rgba(32,178,166,0.55)]" />
                <span className="font-medium">Currently available</span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Full work rights in Australia. Open to full-time engineering roles,
                contract work, and relocation for the right role.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};
