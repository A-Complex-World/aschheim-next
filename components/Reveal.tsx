import React from "react";

export function WordReveal({
  text,
  className = "",
  as: Tag = "span",
  delayStep = 60,
}: {
  text: string;
  className?: string;
  as?: keyof React.JSX.IntrinsicElements;
  delayStep?: number;
}) {
  const words = text.split(" ");
  const Component = Tag as React.ElementType;
  return (
    <Component className={className}>
      {words.map((w, i) => (
        <span key={i} className="word-reveal" style={{ marginRight: "0.28em" }}>
          <span className="word-inner" style={{ transitionDelay: `${i * delayStep}ms` }}>
            {w}
          </span>
        </span>
      ))}
    </Component>
  );
}

export function LineReveal({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <span className={`line-reveal ${className}`}>
      <span style={{ transitionDelay: `${delay}ms` }}>{children}</span>
    </span>
  );
}
