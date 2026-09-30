import React from "react";
import "./Greeting.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import { greeting } from "../../portfolio";

const photo320 = require("../../assets/images/home-presenting-320.jpg");
const photo600 = require("../../assets/images/home-presenting-600.jpg");
const photo320webp = require("../../assets/images/home-presenting-320.webp");
const photo600webp = require("../../assets/images/home-presenting-600.webp");
const photoSizes = "(max-width: 768px) 240px, 400px";

export default function Greeting(props) {
  const theme = props.theme;
  return (
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
            {greeting.role}
          </h2>
          <p className="greeting-focus">{greeting.focus}</p>
          <p className="greeting-summary">{greeting.summary}</p>
          <div className="button-greeting-div">
            <Button text="Explore my work" href="#/projects" theme={theme} />
            <Button
              text="Let’s talk"
              href="#/contact"
              theme={theme}
              variant="outline"
            />
          </div>
          <p className="greeting-credential">{greeting.credential}</p>
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
                  alt={`${greeting.title} presenting a mining operations briefing`}
                />
              </picture>
            </div>
            <div className="greeting-badge greeting-badge--years">
              <strong>FMS · OT</strong>
              <span>field delivery</span>
            </div>
            <div className="greeting-badge greeting-badge--fleet">
              <strong>Mine control</strong>
              <span>dispatch &amp; safety</span>
            </div>
          </div>
        </div>
      </div>
      <ul className="greeting-highlights" aria-label="Key results">
        {greeting.highlights.map((h, i) => (
          <li
            key={h.label}
            className={`greeting-highlight greeting-highlight--${i % 4}`}
          >
            <span className="greeting-highlight-value">{h.value}</span>
            <span className="greeting-highlight-label">{h.label}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
