import React from "react";
import "./PublicationCard.css";

export default function PublicationCard({ pub, theme, index = 0 }) {
  const internal = pub.url.startsWith("#/");
  const label = pub.url.includes("github.com")
    ? "View project code ↗"
    : internal
    ? "View product screenshots ↑"
    : "Operation or vendor website ↗";
  return (
    <div className={`publication-card-div publication-card--${index % 4}`}>
      <a
        href={pub.url}
        target={internal ? undefined : "_blank"}
        rel={internal ? undefined : "noopener noreferrer"}
        aria-label={`${pub.name}${internal ? "" : " (opens in a new tab)"}`}
        className="publication-card-inner"
        style={{ textDecoration: "none" }}
        onClick={
          internal
            ? (event) => {
                event.preventDefault();
                document
                  .getElementById("product-showcase-title")
                  .scrollIntoView();
              }
            : undefined
        }
      >
        <div className="publication-name-div">
          <p className="publication-name" style={{ color: theme.text }}>
            {pub.name}
          </p>
        </div>
        <p className="publication-description" style={{ color: theme.text }}>
          {pub.description}
        </p>
        <div className="publication-details">
          <p
            className="publication-creation-date subTitle"
            style={{ color: theme.secondaryText }}
          >
            {label}
          </p>
        </div>
      </a>
    </div>
  );
}
