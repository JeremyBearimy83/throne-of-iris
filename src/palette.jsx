import React, { Component } from "react";
import ColorBox from "./color-box";
import "./palette.css";
import Navbar from "./navbar";
class Palette extends Component {
  constructor(props) {
    super(props);
    this.state = { shade: 500 };
    this.changeShade = this.changeShade.bind(this);
  }
  changeShade(shade) {
    this.setState({ shade: shade });
  }
  render() {
    const colorBoxes = this.props.palette.colors[
      this.state.shade
    ].map((color) => <ColorBox color={color.hex} name={color.name} />);
    return (
      <div className="Palette">
        <Navbar shade={this.state.shade} handleShade={this.changeShade} />
        {/* Navbar goes here */}
        <div className="color-box-container">{colorBoxes}</div>
        {/* footer goes here */}
      </div>
    );
  }
}
export default Palette;
