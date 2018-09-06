import React, { Component } from "react";
import "./Header.css";

class Header extends Component {
  constructor() {
    super();
    this.state = {
      clickMenu: false,
      dropDown: "noLinks"
    };
  }

  clickHandler = () => {
    this.setState({ clickMenu: !this.state.clickMenu });
  };

  render() {
    if (this.state.clickMenu === true) {
      this.setState({ dropDown: "nav_dropdown" });
    }
    return (
      <div className="hw">
        <div className="logo">Start Bootstrap</div>
        <button
          className="hamburger"
          onClick={() => {
            this.clickHandler();
          }}
        >
          Menu
        </button>
        <div className="links">
          <div className="link">SERVICES</div>
          <div className="link">PORTFOLIO</div>
          <div className="link">ABOUT</div>
          <div className="link">TEAM</div>
          <div className="link">CONTACT</div>
        </div>
        <div className={this.state.dropDown}>
          <div className="dropdown__links">SERVICES</div>
          <div className="dropdown__links">PORTFOLIO</div>
          <div className="dropdown__links">ABOUT</div>
          <div className="dropdown__links">TEAM</div>
          <div className="dropdown__links">CONTACT</div>
        </div>
      </div>
    );
  }
}

export default Header;
