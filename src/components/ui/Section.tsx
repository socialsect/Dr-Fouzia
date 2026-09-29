import { type ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  id?: string;
  className?: string;
  variant?: "default" | "sky" | "sky-deep" | "white";
}

export function Section({
  children,
  id,
  className = "",
  variant = "default",
}: SectionProps) {
  const bgMap = {
    default: "",
    sky: "bg-surface-sky",
    "sky-deep": "bg-surface-sky-deep",
    white: "bg-surface-white",
  };

  return (
    <section id={id} className={`py-24 md:py-32 ${bgMap[variant]} ${className}`}>
      <div className="container-main">{children}</div>
    </section>
  );
}
