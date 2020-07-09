import React, { Component } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import "./navbar.css";
class Navbar extends Component {
  render() {
    return (
      <div className="Navbar">
        <div className="brand">
          <span>Throne/Of/Iris</span>
        </div>
        <div className="slider-container">
          <span>{`Shade: ${this.props.shade}`}</span>
        </div>
        <div className="slider">
          <Slider
            defaultValue={this.props.shade}
            min={100}
            max={900}
            step={100}
            onChange={this.props.handleShade}
          />
        </div>
      </div>
    );
  }
}

export default Navbar;
