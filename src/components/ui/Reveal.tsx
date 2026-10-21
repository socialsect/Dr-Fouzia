"use client";

import { type ReactNode } from "react";
import { useScrollReveal } from "@/lib/useScrollReveal";

type Direction = "up" | "down" | "left" | "right" | "none";

interface RevealProps {
  children: ReactNode;
  direction?: Direction;
  delay?: number;
  duration?: number;
  className?: string;
}

const directionStyles: Record<Direction, { hidden: string; visible: string }> = {
  up: {
    hidden: "translate-y-8",
    visible: "translate-y-0",
  },
  down: {
    hidden: "-translate-y-8",
    visible: "translate-y-0",
  },
  left: {
    hidden: "-translate-x-12",
    visible: "translate-x-0",
  },
  right: {
    hidden: "translate-x-12",
    visible: "translate-x-0",
  },
  none: {
    hidden: "",
    visible: "",
  },
};

export function Reveal({
  children,
  direction = "up",
  delay = 0,
  duration = 700,
  className = "",
}: RevealProps) {
  const [ref, isVisible] = useScrollReveal();
  const styles = directionStyles[direction];

  return (
    <div
      ref={ref}
      className={`${isVisible ? "opacity-100" : "opacity-0"} ${isVisible ? styles.visible : styles.hidden} ${className}`}
      style={{
        transition: `opacity ${duration}ms cubic-bezier(0.16,1,0.3,1) ${delay}ms, transform ${duration}ms cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}
