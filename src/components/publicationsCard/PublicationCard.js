import React from "react";
import "./PublicationCard.css";

export default function PublicationCard({ pub, theme, index = 0 }) {
  const Wrapper = pub.url ? "a" : "div";
  const link = pub.url
    ? { href: pub.url, target: "_blank", rel: "noopener noreferrer" }
    : {};
  return (
    <div className={`publication-card-div publication-card--${index % 4}`}>
      <Wrapper {...link} className="publication-card-inner">
        <div className="publication-name-div">
          <p className="publication-name" style={{ color: theme.text }}>
            {pub.name}
          </p>
        </div>
        <p className="publication-description" style={{ color: theme.text }}>
          {pub.description}
        </p>
        {pub.url && (
          <div className="publication-details">
            <p
              className="publication-creation-date subTitle"
              style={{ color: theme.secondaryText }}
            >
              Operation or vendor website
            </p>
          </div>
        )}
      </Wrapper>
    </div>
  );
}
