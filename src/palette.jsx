import React, { Component } from "react";
import ColorBox from "./color-box";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import "./palette.css";
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
        <div className="slider">
          <Slider
            defaultValue={this.state.shade}
            min={100}
            max={900}
            step={100}
            onChange={this.changeShade}
          />
        </div>

        {/* Navbar goes here */}
        <div className="color-box-container">{colorBoxes}</div>
        {/* footer goes here */}
      </div>
    );
  }
}
export default Palette;
