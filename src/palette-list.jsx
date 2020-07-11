import React, { Component } from "react";
import { Link } from "react-router-dom";
import defaultPaletteData from "./default-palette-data";
class PaletteList extends Component {
  render() {
    return (
      <div className="PaletteList">
        <div className="palette-links">
          {defaultPaletteData.map((palette) => (
            <p>
              <Link to={`/palette/${palette.id}`}>{palette.paletteName}</Link>
            </p>
          ))}
          {console.log(defaultPaletteData)}
        </div>
      </div>
    );
  }
}

export default PaletteList;
