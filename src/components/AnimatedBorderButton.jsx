const BorderSvg = () => (
  <svg
    className="pointer-events-none absolute left-0 top-0 h-full w-full"
    viewBox="0 0 200 60"
    preserveAspectRatio="none"
    style={{ overflow: "visible" }}
  >
    <path
      d="M 30,1 A 29,29 0 0 0 1,30 L 1,30 A 29,29 0 0 0 30,59 L 170,59 A 29,29 0 0 0 199,30 L 199,30 A 29,29 0 0 0 170,1 Z"
      fill="none"
      stroke="var(--color-primary)"
      strokeWidth="2"
      strokeDasharray="400 550"
      strokeDashoffset="400"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="animated-border-path"
    />
  </svg>
);

export const AnimatedBorderButton = ({ as = "button", children, className = "", ...props }) => {
  const classes = `focus-ring animated-border group relative inline-flex overflow-visible rounded-full border border-border bg-transparent px-6 py-3 text-base font-medium text-foreground transition-all duration-300 hover:border-primary/60 disabled:cursor-not-allowed disabled:opacity-50 ${className}`;
  const inner = (
    <>
      <BorderSvg />
      <span className="relative z-10 flex items-center justify-center gap-2">{children}</span>
    </>
  );

  if (as === "a") {
    return (
      <a className={classes} {...props}>
        {inner}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {inner}
    </button>
  );
};
