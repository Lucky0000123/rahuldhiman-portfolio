import React, { Component } from "react";
import "./Header.css";
import { Fade } from "react-reveal";
import { NavLink, Link } from "react-router-dom";
import { greeting, settings } from "../../portfolio.js";
import SeoHeader from "../seoHeader/SeoHeader";

const navItems = [
  { to: "/home", label: "Home" },
  { to: "/education", label: "Education" },
  { to: "/experience", label: "Experience" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact Me" },
];

class Header extends Component {
  render() {
    const theme = this.props.theme;
    const link = settings.isSplash ? "/splash" : "home";
    return (
      <div className="header-shell">
        <SeoHeader />
        <Fade top duration={1000} distance="20px">
          <header className="header">
            <NavLink to={link} tag={Link} className="logo">
              <span style={{ color: theme.text }}> &lt;</span>
              <span className="logo-name" style={{ color: theme.text }}>
                {greeting.logo_name}
              </span>
              <span style={{ color: theme.text }}>/&gt;</span>
            </NavLink>
            <input
              className="menu-btn"
              type="checkbox"
              id="menu-btn"
              aria-label="Toggle navigation menu"
            />
            <label className="menu-icon" htmlFor="menu-btn">
              <span className="navicon"></span>
            </label>
            <ul className="menu">
              {navItems.map((item) => (
                <li key={item.to}>
                  <NavLink
                    to={item.to}
                    tag={Link}
                    className="nav-link"
                    activeClassName="nav-link-active"
                    style={{ color: theme.text }}
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </header>
        </Fade>
      </div>
    );
  }
}

export default Header;
