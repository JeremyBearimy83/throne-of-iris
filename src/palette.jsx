import React, { Component } from "react";
import ColorBox from "./color-box";
import "./palette.css";
class Palette extends Component {
  render() {
    const colorBoxes = this.props.palette.colors[700].map((color) => (
      <ColorBox color={color.hex} name={color.name} />
    ));
    return (
      <div className="Palette">
        {/* Navbar goes here */}
        <div className="color-box-container">{colorBoxes}</div>
        {/* footer goes here */}
      </div>
    );
  }
}
export default Palette;
