import React from "react";
import "./Skills.css";
import SkillSection from "./SkillSection";
import { Fade } from "react-reveal";

export default function Skills(props) {
  const theme = props.theme;
  return (
    <div className="main" id="skills">
      <div className="skills-header-div">
        <Fade bottom duration={2000} distance="20px">
          <div className="skills-header-block">
            <p className="section-eyebrow">Expertise</p>
            <h2 className="skills-header gradient-title">
              How I support the operation
            </h2>
            <span className="accent-bar" aria-hidden="true" />
          </div>
        </Fade>
      </div>
      <SkillSection theme={theme} />
    </div>
  );
}
