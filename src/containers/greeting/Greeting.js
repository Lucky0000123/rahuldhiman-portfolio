import React, { useEffect, useState } from "react";
import "./Greeting.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import { greeting } from "../../portfolio";
import { Fade } from "react-reveal";

const photo320 = require("../../assets/images/profile_photo-320.jpg");
const photo600 = require("../../assets/images/profile_photo-600.jpg");
const photo320webp = require("../../assets/images/profile_photo-320.webp");
const photo600webp = require("../../assets/images/profile_photo-600.webp");
const photoSizes = "(max-width: 768px) 240px, 400px";

function RotatingDiscipline({ items, color }) {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const reduce =
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || items.length < 2) return undefined;
    const id = setInterval(() => setIndex((i) => (i + 1) % items.length), 2800);
    return () => clearInterval(id);
  }, [items.length]);
  return (
    <span className="greeting-discipline-wrap" aria-hidden="true">
      <span key={index} className="greeting-discipline" style={{ color }}>
        {items[index]}
      </span>
    </span>
  );
}

export default function Greeting(props) {
  const theme = props.theme;
  return (
    <Fade bottom duration={1500} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <p
              className="greeting-eyebrow"
              style={{ color: theme.imageHighlight }}
            >
              {greeting.location}
            </p>
            <h1 className="greeting-text" style={{ color: theme.text }}>
              {greeting.title}
            </h1>
            <h2 className="greeting-role" style={{ color: theme.text }}>
              <span className="visually-hidden">
                {`${greeting.role}: ${greeting.disciplines.join(", ")}`}
              </span>
              <span className="greeting-role-line" aria-hidden="true">
                {greeting.role}
              </span>
              <span className="greeting-role-line" aria-hidden="true">
                <span
                  className="greeting-role-plus"
                  style={{ color: theme.imageHighlight }}
                >
                  +
                </span>
                <RotatingDiscipline
                  items={greeting.disciplines}
                  color={theme.imageHighlight}
                />
              </span>
            </h2>
            <p
              className="greeting-summary"
              style={{ color: theme.secondaryText }}
            >
              {greeting.summary}
            </p>
            <div className="button-greeting-div">
              <Button
                text="Download CV (PDF)"
                newTab={true}
                href={greeting.resumeLink}
                theme={theme}
              />
              <Button text="Contact me" href="#/contact" theme={theme} />
            </div>
            <SocialMedia theme={theme} />
          </div>
          <div className="greeting-image-div">
            <div
              className="greeting-portrait"
              style={{ borderColor: theme.imageHighlight }}
            >
              <picture>
                <source
                  type="image/webp"
                  srcSet={`${photo320webp} 320w, ${photo600webp} 600w`}
                  sizes={photoSizes}
                />
                <img
                  src={photo600}
                  srcSet={`${photo320} 320w, ${photo600} 600w`}
                  sizes={photoSizes}
                  width="600"
                  height="750"
                  alt={`Portrait of ${greeting.title}`}
                />
              </picture>
            </div>
          </div>
        </div>
        <ul className="greeting-highlights" aria-label="Key results">
          {greeting.highlights.map((h) => (
            <li
              key={h.label}
              className="greeting-highlight"
              style={{ backgroundColor: theme.highlight }}
            >
              <span
                className="greeting-highlight-value"
                style={{ color: theme.text }}
              >
                {h.value}
              </span>
              <span
                className="greeting-highlight-label"
                style={{ color: theme.secondaryText }}
              >
                {h.label}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </Fade>
  );
}
