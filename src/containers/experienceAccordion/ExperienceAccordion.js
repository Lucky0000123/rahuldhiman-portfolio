import React, { Component } from "react";
import ExperienceCard from "../../components/experienceCard/ExperienceCard.js";
import "./ExperienceAccordion.css";
import { Accordion, Panel } from "baseui/accordion";

class ExperienceAccordion extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="experience-accord">
        <Accordion
          initialState={{ expanded: [this.props.sections[0]["title"]] }}
        >
          {this.props.sections.map((section) => {
            return (
              <Panel
                className="accord-panel"
                title={section["title"]}
                key={section["title"]}
                overrides={{
                  Header: {
                    style: () => ({
                      backgroundColor: "rgba(255, 255, 255, 0.8)",
                      border: "1px solid rgba(14, 107, 168, 0.18)",
                      borderRadius: "14px",
                      marginBottom: "6px",
                      paddingTop: "16px",
                      paddingBottom: "16px",
                      fontFamily: "Google Sans Bold",
                      fontSize: "18px",
                      color: `${theme.text}`,
                      boxShadow: "0 10px 24px -18px rgba(0, 28, 85, 0.45)",
                      transitionProperty: "background-color, border-color",
                      transitionDuration: "0.25s",
                      ":hover": {
                        color: "#0E6BA8",
                        backgroundColor: "#ffffff",
                        borderColor: "#0FB5C9",
                      },
                    }),
                  },
                  PanelContainer: {
                    style: () => ({
                      borderBottomWidth: "0px",
                      marginBottom: "10px",
                    }),
                  },
                  Content: {
                    style: () => ({
                      backgroundColor: "transparent",
                      paddingLeft: "0px",
                      paddingRight: "0px",
                      paddingTop: "28px",
                    }),
                  },
                }}
              >
                {section["experiences"].map((experience, index) => {
                  return (
                    <ExperienceCard
                      key={experience.title + experience.duration}
                      index={index}
                      totalCards={section["experiences"].length}
                      experience={experience}
                      theme={theme}
                    />
                  );
                })}
              </Panel>
            );
          })}
        </Accordion>
      </div>
    );
  }
}

export default ExperienceAccordion;
