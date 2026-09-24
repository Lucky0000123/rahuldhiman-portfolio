import React from "react";
import { Fade } from "react-reveal";
import "./ProductShowcase.css";

function imageSrc(file) {
  return require(`../../assets/images/products/${file}`);
}

export default function ProductShowcase({ header, items, theme }) {
  if (!items || items.length === 0) return null;
  return (
    <section
      className="product-showcase"
      aria-labelledby="product-showcase-title"
    >
      <Fade bottom duration={1500} distance="30px">
        <h2
          id="product-showcase-title"
          className="product-showcase-title"
          style={{ color: theme.text }}
        >
          {header.title}
        </h2>
        <p
          className="product-showcase-subtitle"
          style={{ color: theme.secondaryText }}
        >
          {header.description}
        </p>
      </Fade>
      <div className="product-showcase-list">
        {items.map((item) => (
          <article
            key={item.id}
            className="product-card"
            style={{ backgroundColor: theme.highlight }}
          >
            <Fade bottom duration={1500} distance="30px">
              <div className="product-card-text">
                <p
                  className="product-card-stack"
                  style={{ color: theme.imageHighlight }}
                >
                  {item.stack}
                </p>
                <h3 className="product-card-name" style={{ color: theme.text }}>
                  {item.name}
                </h3>
                <p
                  className="product-card-description"
                  style={{ color: theme.text }}
                >
                  {item.description}
                </p>
                {item.url ? (
                  <a
                    className="product-card-link"
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: theme.text, borderColor: theme.text }}
                  >
                    {item.linkLabel || "View code on GitHub"} ↗
                  </a>
                ) : null}
              </div>
              <div
                className={`product-card-shots product-card-shots-${Math.min(
                  item.images.length,
                  3
                )}`}
              >
                {item.images.map((img) => (
                  <figure key={img.file} className="product-shot">
                    <a
                      href={imageSrc(img.file)}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Open full-size screenshot: ${img.caption}`}
                    >
                      <img
                        src={imageSrc(img.file)}
                        alt={img.caption}
                        loading="lazy"
                      />
                    </a>
                    <figcaption style={{ color: theme.secondaryText }}>
                      {img.caption}
                    </figcaption>
                  </figure>
                ))}
              </div>
            </Fade>
          </article>
        ))}
      </div>
    </section>
  );
}
