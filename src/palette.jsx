import React, { Component } from "react";
import ColorBox from "./color-box";
class Palette extends Component {
  render() {
    const { colors } = this.props;
    console.log(colors);
    return (
      <div className="Palette">
        {/* Navbar goes here */}
        <div className="colors">{/*Color boxes go here*/}</div>
        {/* footer goes here */}
      </div>
    );
  }
}
export default Palette;
