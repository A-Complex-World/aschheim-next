import React from "react";

export function LineReveal({
  children, className = "", delay = 0,
}: {
  children: React.ReactNode; className?: string; delay?: number;
}) {
  return (
    <span className={`line-reveal ${className}`}>
      <span style={{ transitionDelay: `${delay}ms` }}>{children}</span>
    </span>
  );
}
