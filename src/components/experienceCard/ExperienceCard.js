import React, { Component } from "react";
import "./ExperienceCard.css";
import { Fade } from "react-reveal";

class ExperienceCard extends Component {
  render() {
    const experience = this.props.experience;
    const index = this.props.index;
    const totalCards = this.props.totalCards;
    const theme = this.props.theme;
    const isCurrent = /present/i.test(experience["duration"] || "");
    const isLast = index === totalCards - 1;
    return (
      <div
        className={`experience-list-item${isLast ? " is-last" : ""}${
          isCurrent ? " is-current" : ""
        }`}
      >
        <Fade left duration={1200} distance="30px">
          <div className="experience-card-logo-div">
            <img
              className="experience-card-logo"
              src={require(`../../assets/images/${experience["logo_path"]}`)}
              alt=""
            />
          </div>
        </Fade>
        <div className="experience-card-stepper" aria-hidden="true">
          <span className="experience-card-dot" />
        </div>
        <Fade right duration={1200} distance="30px">
          <div className="experience-card">
            <div className="experience-card-header">
              <div className="experience-card-header-main">
                <h3
                  className="experience-card-title"
                  style={{ color: theme.text }}
                >
                  {experience["title"]}
                </h3>
                <p className="experience-card-company">
                  <a
                    href={experience["company_url"]}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {experience["company"]}
                  </a>
                </p>
              </div>
              <div className="experience-card-heading-right">
                <p className="experience-card-duration">
                  {isCurrent && (
                    <span className="experience-card-live" aria-hidden="true" />
                  )}
                  {experience["duration"]}
                </p>
                <p className="experience-card-location">
                  {experience["location"]}
                </p>
              </div>
            </div>
            <p
              className="experience-card-description"
              style={{ color: theme.secondaryText }}
            >
              {experience["description"]}
            </p>
          </div>
        </Fade>
      </div>
    );
  }
}

export default ExperienceCard;
