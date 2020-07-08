import React, { Component } from "react";
import "./color-box.css";
class ColorBox extends Component {
  render() {
    return (
      <div className="ColorBox" style={{ backgroundColor: this.props.color }}>
        <button className="copy-button">copy</button>
        <span className="color-name">{this.props.name}</span>
        <span className="more">more</span>
      </div>
    );
  }
}

export default ColorBox;
