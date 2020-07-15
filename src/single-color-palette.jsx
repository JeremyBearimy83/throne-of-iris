import React, { Component } from "react";
import ColorBox from "./color-box";
import "./single-color-palette.css";
import Navbar from "./navbar";
import { Link } from "react-router-dom";
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
          <div className="ColorBox go-back SingleColor">
            <Link to={`/palette/${this.props.palette.id}`}>
              <div className="copy-button">
                <span>Go Back</span>
              </div>
            </Link>
          </div>
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
