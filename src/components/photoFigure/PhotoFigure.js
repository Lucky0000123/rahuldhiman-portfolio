import React from "react";
import "./PhotoFigure.css";

/* Licensed photo with the attribution its Creative Commons licence requires. */
export default function PhotoFigure({ photo, theme, className = "" }) {
  return (
    <figure className={`photo-figure ${className}`}>
      <img
        src={require(`../../assets/images/home/${photo.file}`)}
        alt={photo.alt}
        loading="lazy"
      />
      <figcaption style={{ color: theme.secondaryText }}>
        {photo.caption} · Photo:{" "}
        <a href={photo.source} target="_blank" rel="noopener noreferrer">
          {photo.author}
        </a>
        , {photo.license}
      </figcaption>
    </figure>
  );
}
