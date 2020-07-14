import React, { Component } from "react";
import ColorBox from "./color-box";
import "./single-color-palette.css";
import Navbar from "./navbar";
class SingleColorPalette extends Component {
  constructor(props) {
    super(props);
    this.state = { format: "hex" };
    this.changeFormat = this.changeFormat.bind(this);
  }
  changeFormat(format) {
    this.setState({ format: format });
  }
  render() {
    const shades = [100, 200, 300, 400, 500, 600, 700, 800, 900];
    const colorBoxes = shades.map((shade) => (
      <ColorBox
        singleColor={true}
        color={this.props[shade][this.state.format]}
        name={this.props[shade].name}
      />
    ));
    console.log(this.props[50]);
    return (
      <div className="SingleColorPalette">
        <Navbar
          singleColor={true}
          format={this.state.format}
          handleFormat={this.changeFormat}
        />
        <div className="color-box-container">
          {colorBoxes}
          <ColorBox
            singleColor={true}
            color="pink"
            name="lol"
            goBack={true}
            backUrl={`/palette/${this.props.paletteId}`}
          />
        </div>
        <footer className="footer">
          {this.props.palette.paletteName}
          <span className="icon">{this.props.palette.emoji}</span>
        </footer>
      </div>
    );
  }
}

export default SingleColorPalette;
