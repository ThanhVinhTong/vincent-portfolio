import { ArrowUpRight, ChevronLeft, ChevronRight, MailIcon, Quote } from "lucide-react";
import { useState } from "react";

const testimonials = [
  // OLD: placeholder testimonials with stock names and avatar images
  {
    quote:
      "Vincent contributed strongly to medical imaging software and consistently showed ownership from research exploration to practical implementation. He is thoughtful, technically capable, and reliable in collaborative environments.",
    author: "Mrs. Danuta Sampson",
    role: "Senior Researcher, Lions Eye Institute",
    email: "danuta.sampson@uwa.edu.au",
    linkedin: "https://au.linkedin.com/in/danuta-danka-sampson-31754579",
  },
  {
    // OLD:
    // "Vincent demonstrates a strong software engineering foundation with clear growth in AI and computer vision work. He learns quickly, communicates clearly, and can contribute effectively to both research-driven and product-focused teams."
    quote:
      "For the Book Borrow Platform project, Vincent was a key backend contributor working closely with other team members. He designed and delivered core backend capabilities including JWT authentication, API documentation for frontend integration, real-time messaging/notification flows, and moderation features such as blacklist and banning. He communicates clearly across technical levels and consistently takes ownership of integration quality.",
    author: "Dr. Atif Mansoor",
    // OLD: "Senior Lecturer, The University of Western Australia"
    role: "Senior Lecturer & Project Supervisor, The University of Western Australia",
    email: "atif.mansoor@uwa.edu.au",
    linkedin: "https://www.linkedin.com/in/atifmansoormalik/?originalSubdomain=au",
  },
];

export const Testimonials = () => {
  const [activeIdx, setActiveIdx] = useState(0);

  const next = () => {
    setActiveIdx((prev) => (prev + 1) % testimonials.length);
  };

  const previous = () => {
    setActiveIdx(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };
  return (
    <section id="testimonials" className="py-32 relative overflow-hidden">
      <div
        className="absolute top-1/2 left-1/2
       w-[800px] h-[800px] bg-primary/5
        rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"
      />
      <div
        className="container mx-auto 
      px-6 relative z-10"
      >
        {/* Section Header */}
        <div
          className="text-center max-w-3xl 
        mx-auto mb-16"
        >
          <span
            className="text-secondary-foreground 
          text-sm font-medium tracking-wider 
          uppercase animate-fade-in"
          >
            {/* OLD: What People Say */}
            Referrals
          </span>
          <h2
            className="text-4xl md:text-5xl 
          font-bold mt-4 mb-6 animate-fade-in 
          animation-delay-100 text-secondary-foreground"
          >
            Professional references from{" "}
            <span
              className="font-serif italic 
            font-normal text-white"
            >
              supervisors and mentors.
            </span>
          </h2>
        </div>

        {/* Testimonial Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Main Testimonial */}
            <div className="glass p-8 rounded-3xl md:p-12 glow-border animate-fade-in animation-delay-200">
              <div className="absolute -top-4 left-8 w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                <Quote className="w-6 h-6 text-primary-foreground" />
              </div>

              <blockquote className="text-xl md:text-2xl font-medium leading-relaxed mb-8 pt-4">
                "{testimonials[activeIdx].quote}"
              </blockquote>

              {/* OLD: avatar image + author details */}
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full ring-2 ring-primary/20 bg-primary/10 flex items-center justify-center text-primary font-semibold">
                  {testimonials[activeIdx].author
                    .split(" ")
                    .slice(-1)[0]
                    .charAt(0)}
                </div>
                <div className="space-y-1">
                  <div className="font-semibold">
                    {testimonials[activeIdx].author}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonials[activeIdx].role}
                  </div>
                  {testimonials[activeIdx].email && (
                    <a
                      href={`mailto:${testimonials[activeIdx].email}`}
                      /* OLD: className="block text-sm text-primary hover:underline" */
                      className="referral-link text-sm text-primary"
                    >
                      <span className="inline-flex items-center gap-1 whitespace-nowrap">
                        {testimonials[activeIdx].email} <MailIcon className="w-4 h-4" />
                      </span>
                    </a>
                  )}
                  <a
                    href={testimonials[activeIdx].linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    /* OLD: className="block text-sm text-primary hover:underline" */
                    className="referral-link text-sm text-primary"
                  >
                    {/* OLD: <span>LinkedIn Profile <ArrowUpRight className="w-4 h-4" /></span> */}
                    <span className="inline-flex items-center gap-1 whitespace-nowrap">
                      LinkedIn Profile <ArrowUpRight className="w-4 h-4" />
                    </span>
                  </a>
                </div>
              </div>
            </div>

            {/* Testimonials Navigation */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                className="p-3 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all"
                onClick={previous}
              >
                <ChevronLeft />
              </button>

              <div className="flex gap-2">
                {testimonials.map((_, idx) => (
                  <button
                    onClick={() => setActiveIdx(idx)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      idx === activeIdx
                        ? "w-8 bg-primary"
                        : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                className="p-3 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all"
              >
                <ChevronRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};