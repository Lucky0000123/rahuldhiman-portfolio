import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import AddressImg from "./AddressImg";
import { Fade } from "react-reveal";
import "./ContactComponent.css";
import { greeting, contactPageData } from "../../portfolio.js";

const ContactData = contactPageData.contactSection;
const addressSection = contactPageData.addressSection;
const phoneSection = contactPageData.phoneSection;
const phoneNumbers = phoneSection.subtitle.split("·").map((n) => n.trim());

const photo320 = require("../../assets/images/profile_photo-320.jpg");
const photo600 = require("../../assets/images/profile_photo-600.jpg");
const photo320webp = require("../../assets/images/profile_photo-320.webp");
const photo600webp = require("../../assets/images/profile_photo-600.webp");
const photoSizes = "(max-width: 768px) 240px, 360px";

class Contact extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="contact-main">
        <Header theme={theme} />
        <div className="basic-contact">
          <Fade bottom duration={1000} distance="40px">
            <div className="contact-heading-div page-hero">
              <div className="contact-heading-img-div">
                <div className="contact-portrait">
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
              <div className="contact-heading-text-div">
                <p className="section-eyebrow">Let's talk</p>
                <h1 className="contact-heading-text gradient-title">
                  {ContactData["title"]}
                </h1>
                <span className="accent-bar" aria-hidden="true" />
                <p
                  className="contact-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  {ContactData["description"]}
                </p>
                <SocialMedia theme={theme} />
                <div className="resume-btn-div">
                  <Button
                    text="Email me"
                    href="mailto:work.rahuldhiman@gmail.com"
                    theme={theme}
                  />
                  <Button
                    text="See my resume"
                    newTab={true}
                    href={greeting.resumeLink}
                    theme={theme}
                    variant="outline"
                  />
                </div>
              </div>
            </div>
          </Fade>
          <Fade bottom duration={1000} distance="40px">
            <div className="address-heading-div">
              <div className="contact-heading-img-div contact-address-img">
                <AddressImg theme={theme} />
              </div>
              <div className="address-heading-text-div">
                <div className="contact-info-card contact-info-card--address">
                  <span className="contact-info-icon" aria-hidden="true">
                    <i className="fas fa-map-marker-alt" />
                  </span>
                  <div>
                    <h2 className="address-heading-text">
                      {addressSection["title"]}
                    </h2>
                    <p className="contact-info-value">
                      {addressSection["subtitle"]}
                    </p>
                    <a
                      className="contact-info-link"
                      href={addressSection.location_map_link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Open in Google Maps ↗
                    </a>
                  </div>
                </div>
                <div className="contact-info-card contact-info-card--phone">
                  <span className="contact-info-icon" aria-hidden="true">
                    <i className="fas fa-phone-alt" />
                  </span>
                  <div>
                    <h2 className="address-heading-text">
                      {phoneSection["title"]}
                    </h2>
                    {phoneNumbers.map((n) => (
                      <a
                        key={n}
                        className="contact-info-value contact-phone"
                        href={`tel:${n.replace(/[^+\d]/g, "")}`}
                      >
                        {n}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Fade>
        </div>
        <Footer theme={this.props.theme} onToggle={this.props.onToggle} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Contact;
