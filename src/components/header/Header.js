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
  state = { menuOpen: false };
  menuButton = React.createRef();

  closeMenu = () => this.setState({ menuOpen: false });

  handleKeyDown = (event) => {
    if (event.key === "Escape" && this.state.menuOpen) {
      this.closeMenu();
      this.menuButton.current.focus();
    }
  };

  render() {
    const theme = this.props.theme;
    const link = settings.isSplash ? "/splash" : "/home";
    return (
      <div className="header-shell">
        <SeoHeader />
        <Fade top duration={1000} distance="20px">
          <header className="header" onKeyDown={this.handleKeyDown}>
            <NavLink to={link} tag={Link} className="logo">
              <span style={{ color: theme.text }}> &lt;</span>
              <span className="logo-name" style={{ color: theme.text }}>
                {greeting.logo_name}
              </span>
              <span style={{ color: theme.text }}>/&gt;</span>
            </NavLink>
            <button
              className="menu-icon"
              type="button"
              ref={this.menuButton}
              aria-label="Toggle navigation menu"
              aria-expanded={this.state.menuOpen}
              aria-controls="portfolio-navigation"
              onClick={() =>
                this.setState(({ menuOpen }) => ({ menuOpen: !menuOpen }))
              }
            >
              <span className="navicon" aria-hidden="true"></span>
            </button>
            <ul
              id="portfolio-navigation"
              className={`menu${this.state.menuOpen ? " menu--open" : ""}`}
            >
              {navItems.map((item) => (
                <li key={item.to}>
                  <NavLink
                    to={item.to}
                    tag={Link}
                    className="nav-link"
                    activeClassName="nav-link-active"
                    style={{ color: theme.text }}
                    onClick={this.closeMenu}
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
