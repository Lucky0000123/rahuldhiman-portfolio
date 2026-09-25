import React, { Component } from "react";
import "./Certifications.css";
import { Fade } from "react-reveal";
import { certifications } from "../../portfolio";
import CertificationCard from "../../components/certificationCard/CertificationCard";

class Certifications extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="main" id="certs">
        <div className="certs-header-div">
          <Fade bottom duration={2000} distance="20px">
            <p className="section-eyebrow">Credentials</p>
            <h1 className="certs-header gradient-title">Certifications</h1>
            <span className="accent-bar" aria-hidden="true" />
          </Fade>
        </div>
        <div className="certs-body-div">
          {certifications.certifications.map((cert) => {
            return (
              <CertificationCard
                key={cert.title}
                certificate={cert}
                theme={theme}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default Certifications;
