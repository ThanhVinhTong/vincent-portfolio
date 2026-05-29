export const Button = ({ className = "", size = "default", children, ...props }) => {
  const baseClasses =
    "focus-ring relative inline-flex items-center justify-center overflow-hidden rounded-full bg-primary font-medium text-primary-foreground transition-colors hover:bg-[#26c4b8] disabled:pointer-events-none disabled:opacity-50";

  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-6 py-3 text-base md:px-7 md:py-3.5",
    default: "px-6 py-3 text-base",
  };

  const classes = `${baseClasses} ${sizeClasses[size] ?? sizeClasses.default} ${className}`;

  return (
    <button className={classes} {...props}>
      <span className="relative flex items-center justify-center gap-2">{children}</span>
    </button>
  );
};
