import React, { Component } from "react";
import "./color-box.css";
import { CopyToClipboard } from "react-copy-to-clipboard";
class ColorBox extends Component {
  render() {
    return (
      <CopyToClipboard text={this.props.color}>
        <div className="ColorBox" style={{ backgroundColor: this.props.color }}>
          <button className="copy-button">copy</button>
          <span className="color-name">{this.props.name}</span>
          <span className="more">more</span>
        </div>
      </CopyToClipboard>
    );
  }
}

export default ColorBox;
