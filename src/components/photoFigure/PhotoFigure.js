import React from "react";
import "./PhotoFigure.css";

const img = (file) => require(`../../assets/images/home/${file}`);

/* Home page photo. Licensed photos show the attribution their Creative Commons licence requires. */
export default function PhotoFigure({ photo, theme, className = "" }) {
  const sizes = "(max-width: 768px) 92vw, 50vw";
  const jpgSet = photo.small
    ? `${img(photo.small)} 720w, ${img(photo.file)} 1400w`
    : undefined;
  return (
    <figure
      className={`photo-figure ${
        photo.wide ? "photo-figure--wide" : ""
      } ${className}`}
    >
      <picture>
        {photo.webp && (
          <source
            type="image/webp"
            srcSet={`${img(photo.webpSmall)} 720w, ${img(photo.webp)} 1400w`}
            sizes={sizes}
          />
        )}
        <img
          src={img(photo.file)}
          srcSet={jpgSet}
          sizes={jpgSet ? sizes : undefined}
          alt={photo.alt}
          loading="lazy"
        />
      </picture>
      <figcaption style={{ color: theme.secondaryText }}>
        {photo.caption}
        {photo.author && (
          <>
            {" "}
            · Photo:{" "}
            <a href={photo.source} target="_blank" rel="noopener noreferrer">
              {photo.author}
            </a>
            , {photo.license}
          </>
        )}
      </figcaption>
    </figure>
  );
}
