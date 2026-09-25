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

function RotatingDiscipline({ items }) {
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
      <span key={index} className="greeting-discipline">
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
        <div className="greeting-glow" aria-hidden="true">
          <span className="greeting-glow-a" />
          <span className="greeting-glow-b" />
          <span className="greeting-glow-c" />
        </div>
        <div className="greeting-main">
          <div className="greeting-text-div">
            <p className="greeting-eyebrow">
              <span className="greeting-status-dot" aria-hidden="true" />
              {greeting.location}
            </p>
            <h1 className="greeting-text gradient-title">{greeting.title}</h1>
            <h2 className="greeting-role" style={{ color: theme.text }}>
              <span className="visually-hidden">
                {`${greeting.role}: ${greeting.disciplines.join(", ")}`}
              </span>
              <span className="greeting-role-line" aria-hidden="true">
                {greeting.role}
              </span>
              <span className="greeting-role-line" aria-hidden="true">
                <span className="greeting-role-plus">+</span>
                <RotatingDiscipline items={greeting.disciplines} />
              </span>
            </h2>
            <p className="greeting-summary">{greeting.summary}</p>
            <div className="button-greeting-div">
              <Button
                text="Download CV (PDF)"
                newTab={true}
                href={greeting.resumeLink}
                theme={theme}
              />
              <Button
                text="Contact me"
                href="#/contact"
                theme={theme}
                variant="outline"
              />
            </div>
            <SocialMedia theme={theme} />
          </div>
          <div className="greeting-image-div">
            <div className="greeting-portrait-wrap">
              <div className="greeting-portrait">
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
              <div className="greeting-badge greeting-badge--years">
                <strong>11+ yrs</strong>
                <span>open-pit mining</span>
              </div>
              <div className="greeting-badge greeting-badge--fleet">
                <strong>891+</strong>
                <span>dump trucks</span>
              </div>
            </div>
          </div>
        </div>
        <ul className="greeting-highlights" aria-label="Key results">
          {greeting.highlights.map((h, i) => (
            <li
              key={h.label}
              className={`greeting-highlight greeting-highlight--${i % 4}`}
              style={{ animationDelay: `${0.15 + i * 0.12}s` }}
            >
              <span className="greeting-highlight-value">{h.value}</span>
              <span className="greeting-highlight-label">{h.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </Fade>
  );
}
