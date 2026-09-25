import React from "react";
import "./Button.css";

export default function Button({
  text,
  className,
  href,
  newTab,
  theme,
  variant = "primary",
}) {
  return (
    <div className={className}>
      <a
        className={`main-button main-button--${variant}`}
        href={href}
        target={newTab ? "_blank" : undefined}
        rel={newTab ? "noopener noreferrer" : undefined}
      >
        <span>{text}</span>
        {newTab ? (
          <span className="main-button-icon" aria-hidden="true">
            ↗
          </span>
        ) : (
          <span className="main-button-icon" aria-hidden="true">
            →
          </span>
        )}
      </a>
    </div>
  );
}
