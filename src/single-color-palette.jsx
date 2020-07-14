import React, { Component } from "react";
import ColorBox from "./color-box";
import "./single-color-palette.css";
class SingleColorPalette extends Component {
  render() {
    const shades = [100, 200, 300, 400, 500, 600, 700, 800, 900];
    const colorBoxes = shades.map((shade) => (
      <ColorBox
        singleColor={true}
        color={this.props[shade].hex}
        name={this.props[shade].name}
      />
    ));
    console.log(this.props[50]);
    return (
      <div className="SingleColorPalette">
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
      </div>
    );
  }
}

export default SingleColorPalette;
