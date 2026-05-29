import { ChevronLeft, ChevronRight, ExternalLink, Mail, Quote } from "lucide-react";
import { useState } from "react";

const testimonials = [
  {
    quote:
      "Vincent contributed strongly to medical imaging software and consistently showed ownership from research exploration to practical implementation. He is thoughtful, technically capable, and reliable in collaborative environments.",
    author: "Mrs. Danuta Sampson",
    role: "Senior Researcher, Lions Eye Institute",
    email: "danuta.sampson@uwa.edu.au",
    linkedin: "https://au.linkedin.com/in/danuta-danka-sampson-31754579",
  },
  {
    quote:
      "For the Book Borrow Platform project, Vincent was a key backend contributor working closely with other team members. He designed and delivered core backend capabilities including JWT authentication, API documentation for frontend integration, real-time messaging/notification flows, and moderation features such as blacklist and banning. He communicates clearly across technical levels and consistently takes ownership of integration quality.",
    author: "Dr. Atif Mansoor",
    role: "Senior Lecturer & Project Supervisor, The University of Western Australia",
    email: "atif.mansoor@uwa.edu.au",
    linkedin: "https://www.linkedin.com/in/atifmansoormalik/?originalSubdomain=au",
  },
];

export const Testimonials = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const active = testimonials[activeIdx];

  const next = () => {
    setActiveIdx((prev) => (prev + 1) % testimonials.length);
  };

  const previous = () => {
    setActiveIdx((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="section-shell border-b border-border/70">
      <div className="container mx-auto px-6">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <div className="section-kicker">References</div>
          <h2 className="section-title-sm mt-4">
            Professional feedback from{" "}
            <span className="font-serif text-primary">supervisors.</span>
          </h2>
        </div>

        <div className="mx-auto max-w-4xl">
          <article className="panel p-6 md:p-8">
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-primary/30 bg-primary/10">
                <Quote className="h-5 w-5 text-primary" />
              </div>
              <div>
                <blockquote className="text-lg font-medium leading-relaxed md:text-xl">
                  {active.quote}
                </blockquote>
                <div className="mt-6 flex flex-wrap items-end justify-between gap-5 border-t border-border pt-5">
                  <div>
                    <div className="font-semibold">{active.author}</div>
                    <div className="mt-1 text-sm text-muted-foreground">{active.role}</div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {active.email && (
                      <a
                        href={`mailto:${active.email}`}
                        className="inline-flex items-center gap-2 rounded-full border border-border px-3 py-2 text-sm text-muted-foreground transition-colors hover:border-primary/60 hover:text-primary"
                      >
                        <Mail className="h-4 w-4" />
                        Email
                      </a>
                    )}
                    <a
                      href={active.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-border px-3 py-2 text-sm text-muted-foreground transition-colors hover:border-primary/60 hover:text-primary"
                    >
                      <ExternalLink className="h-4 w-4" />
                      LinkedIn
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </article>

          <div className="mt-6 flex items-center justify-center gap-4">
            <button
              type="button"
              className="icon-button"
              onClick={previous}
              aria-label="Previous reference"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <div className="flex gap-2">
              {testimonials.map((item, idx) => (
                <button
                  key={item.author}
                  type="button"
                  onClick={() => setActiveIdx(idx)}
                  className={`h-2 rounded-full transition-all ${
                    idx === activeIdx
                      ? "w-8 bg-primary"
                      : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  }`}
                  aria-label={`Show reference from ${item.author}`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={next}
              className="icon-button"
              aria-label="Next reference"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
