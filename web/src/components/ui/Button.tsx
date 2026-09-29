import { type ReactNode, type ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "ghost" | "dark";
  children: ReactNode;
  href?: string;
  target?: string;
  rel?: string;
}

export function Button({
  variant = "primary",
  children,
  className = "",
  href,
  target,
  rel,
  ...props
}: ButtonProps) {
  const baseStyles = "btn";
  const variantStyles = {
    primary: "btn-primary",
    ghost: "btn-ghost",
    dark: "btn-dark",
  };

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
