import React, { Component } from "react";
import "./CertificationCard.css";
import { Fade } from "react-reveal";

// Only these hosts point at an actual credential; others link to the issuer.
const CREDENTIAL_HOSTS = ["credly.com", "coursera.org", "drive.google.com"];
function isCredentialLink(url) {
  try {
    const host = new URL(url).hostname.replace(/^www\./, "");
    return CREDENTIAL_HOSTS.some((h) => host === h || host.endsWith("." + h));
  } catch (e) {
    return false;
  }
}

class CertificationCard extends Component {
  render() {
    const certificate = this.props.certificate;
    const theme = this.props.theme;
    const linkLabel = isCredentialLink(certificate.certificate_link)
      ? "View certificate"
      : "Issuer website";
    return (
      <Fade bottom duration={2000} distance="20px">
        <div className="cert-card">
          <div className="content">
            <a
              href={certificate.certificate_link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${certificate.title}: ${linkLabel} (opens in a new tab)`}
            >
              <div className="content-overlay"></div>
              <div
                className="cert-header"
                style={{ backgroundColor: certificate.color_code }}
              >
                <img
                  className="logo_img"
                  src={require(`../../assets/images/${certificate.logo_path}`)}
                  alt={certificate.alt_name}
                />
              </div>
              <div className="content-details fadeIn-top">
                <h3 className="content-title" style={{ color: theme.body }}>
                  {linkLabel}
                </h3>
              </div>
            </a>
          </div>
          <div className="cert-body">
            <h2 className="cert-body-title" style={{ color: theme.text }}>
              {certificate.title}
            </h2>
            <h3
              className="cert-body-subtitle"
              style={{ color: theme.secondaryText }}
            >
              {certificate.subtitle}
            </h3>
          </div>
        </div>
      </Fade>
    );
  }
}

export default CertificationCard;
