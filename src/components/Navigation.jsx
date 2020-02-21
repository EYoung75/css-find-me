import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FaFacebookSquare, FaGooglePlusSquare } from "react-icons/fa";

class Navigation extends React.Component {
  constructor() {
    super();
    this.state = {
      open: false
    };
  }

  toggleNav = () => {
    this.setState({ open: !this.state.open });
  };

  render() {
    return (
      <nav
        className={"navigation " + (this.state.open ? "navigation-open" : "")}
      >
        <div className="button-background" onClick={this.toggleNav}>
          <div
            className={this.state.open ? "button button-close" : "button"}
          ></div>
        </div>
        <div className={"menu " + (this.state.open ? "menu-open" : "")}>
          <Link
            className="nav-link"
            activeClassName="nav-link--active"
            to="/"
            onClick={this.toggleNav}
          >
            <h2 className="menu-open__heading">Evan Young</h2>
          </Link>
          <ul className="nav-list">
            <NavLink
              className="nav-link"
              activeClassName="nav-link--active"
              to="/"
              exact
              onClick={this.toggleNav}
            >
              <li>Home</li>
            </NavLink>
            <NavLink
              className="nav-link"
              activeClassName="nav-link--active"
              to="/services"
              onClick={this.toggleNav}
            >
              <li>Projects</li>
            </NavLink>
            <NavLink
              className="nav-link"
              activeClassName="nav-link--active"
              to="/about"
              onClick={this.toggleNav}
            >
              <li>About</li>
            </NavLink>
          </ul>
          <div className="menu-open__footer">
            <a href="#" className="nav-link">
              <FaFacebookSquare />
            </a>
            <a href="#" className="nav-link">
              <FaGooglePlusSquare />
            </a>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navigation;
