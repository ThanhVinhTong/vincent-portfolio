const educationItems = [
  {
    school: "The University of Western Australia",
    location: "Perth, Australia",
    degree: "Master of Information Technology",
    period: "Feb 2024 — Dec 2025",
  },
  {
    school: "Hanoi University of Science and Technology",
    location: "Hanoi, Vietnam",
    degree: "Bachelor of Information Technology",
    period: "Aug 2019 — Sep 2023",
  },
];

export const Education = () => {
  return (
    <section id="education" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mb-12">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Education
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-4 animate-fade-in animation-delay-100 text-secondary-foreground">
            Academic background and
            <span className="font-serif italic font-normal text-white">
              {" "}next chapter.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            Completed my studies and currently open to opportunities where I can
            contribute as a full-time engineer, contractor, or collaborator.
          </p>
        </div>

        {/* OLD: className="grid gap-6" */}
        <div className="grid md:grid-cols-2 gap-6 auto-rows-fr">
          {educationItems.map((item, idx) => (
            <article
              key={idx}
              /* OLD: className="glass rounded-2xl p-6 border border-primary/30 animate-fade-in" */
              className="glass rounded-2xl p-6 border border-primary/30 animate-fade-in h-full flex flex-col"
              style={{ animationDelay: `${(idx + 1) * 120}ms` }}
            >
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <h3 className="text-xl font-semibold">{item.school}</h3>
                  <p className="text-muted-foreground mt-1">{item.degree}</p>
                </div>
                <p className="text-sm text-muted-foreground">{item.location}</p>
              </div>

              <div className="mt-auto pt-6 flex items-center justify-between">
                <span className="text-sm italic text-muted-foreground">{item.period}</span>
                <span className="px-3 py-1 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs font-medium">
                  Completed
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
