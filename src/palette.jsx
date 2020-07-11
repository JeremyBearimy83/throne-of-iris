import React, { Component } from "react";
import ColorBox from "./color-box";
import "./palette.css";
import Navbar from "./navbar";
class Palette extends Component {
  constructor(props) {
    super(props);
    this.state = { shade: 500, format: "hex" };
    this.changeShade = this.changeShade.bind(this);
    this.changeFormat = this.changeFormat.bind(this);
  }
  changeFormat(format) {
    this.setState({ format: format });
  }
  changeShade(shade) {
    this.setState({ shade: shade });
  }
  render() {
    const colorBoxes = this.props.palette.colors[
      this.state.shade
    ].map((color) => (
      <ColorBox color={color[this.state.format]} name={color.name} />
    ));
    return (
      <div className="Palette">
        <Navbar
          shade={this.state.shade}
          handleShade={this.changeShade}
          format={this.state.format}
          handleFormat={this.changeFormat}
        />
        {/* Navbar goes here */}
        <div className="color-box-container">{colorBoxes}</div>
        <footer className="footer">
          {this.props.palette.paletteName}
          <span className="icon">{this.props.palette.emoji}</span>
        </footer>
      </div>
    );
  }
}
export default Palette;
