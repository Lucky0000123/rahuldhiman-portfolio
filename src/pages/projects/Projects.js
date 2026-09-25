import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import PublicationCard from "../../components/publicationsCard/PublicationCard";
import TopButton from "../../components/topButton/TopButton";
import { Fade } from "react-reveal";
import ProductShowcase from "../../components/productShowcase/ProductShowcase";
import {
  publicationsHeader,
  publications,
  productShowcaseHeader,
  productShowcase,
} from "../../portfolio.js";
import ProjectsImg from "./ProjectsImg";
import "./Projects.css";

class Projects extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="projects-main">
        <Header theme={theme} />
        {/* Publications */}
        {publications.data.length > 0 ? (
          <div className="basic-projects">
            <Fade bottom duration={2000} distance="40px">
              <div className="publications-heading-div page-hero">
                <div className="projects-heading-img-div page-hero-img">
                  <ProjectsImg theme={theme} />
                </div>
                <div className="publications-heading-text-div">
                  <p className="section-eyebrow">Portfolio</p>
                  <h1 className="publications-heading-text gradient-title">
                    {publicationsHeader.title}
                  </h1>
                  <span className="accent-bar" aria-hidden="true" />
                  <p
                    className="projects-header-detail-text subTitle"
                    style={{ color: theme.secondaryText }}
                  >
                    {publicationsHeader.description}
                  </p>
                </div>
              </div>
            </Fade>
          </div>
        ) : null}

        <ProductShowcase
          header={productShowcaseHeader}
          items={productShowcase}
          theme={theme}
        />

        <div className="repo-cards-div-main">
          {publications.data.map((pub, i) => {
            return (
              <PublicationCard
                index={i}
                key={pub.id}
                pub={{
                  ...pub,
                  date: `Created on: ${new Date(
                    pub.createdAt
                  ).toLocaleDateString()}`,
                }}
                theme={theme}
              />
            );
          })}
        </div>

        <Footer theme={this.props.theme} onToggle={this.props.onToggle} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Projects;
