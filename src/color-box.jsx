import React, { Component } from "react";
import "./color-box.css";
class ColorBox extends Component {
  render() {
    return (
      <div className="ColorBox" style={{ backgroundColor: this.props.color }}>
        <span className="colorname">{this.props.name}</span>
      </div>
    );
  }
}

export default ColorBox;
