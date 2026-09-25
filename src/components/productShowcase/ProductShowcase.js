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
        <div className="product-showcase-head">
          <p className="section-eyebrow">In-house builds</p>
          <h2
            id="product-showcase-title"
            className="product-showcase-title gradient-title"
          >
            {header.title}
          </h2>
          <span className="accent-bar" aria-hidden="true" />
        </div>
        <p
          className="product-showcase-subtitle"
          style={{ color: theme.secondaryText }}
        >
          {header.description}
        </p>
      </Fade>
      <div className="product-showcase-list">
        {items.map((item, i) => (
          <article
            key={item.id}
            className={`product-card product-card--${i % 4}`}
          >
            <Fade bottom duration={1500} distance="30px">
              <div className="product-card-text">
                <ul className="product-card-stack" aria-label="Tech stack">
                  {item.stack.split(/\s*·\s*/).map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>
                <h3 className="product-card-name" style={{ color: theme.text }}>
                  {item.name}
                </h3>
                <p
                  className="product-card-description"
                  style={{ color: theme.secondaryText }}
                >
                  {item.description}
                </p>
                {item.url ? (
                  <a
                    className="product-card-link"
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
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
                      className="product-shot-frame"
                      href={imageSrc(img.file)}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Open full-size screenshot: ${img.caption}`}
                    >
                      <span className="product-shot-bar" aria-hidden="true">
                        <i />
                        <i />
                        <i />
                      </span>
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
