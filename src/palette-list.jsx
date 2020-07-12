import React, { Component } from "react";
import { Link } from "react-router-dom";
import defaultPaletteData from "./default-palette-data";
import MiniPalette from "./mini-palette";
class PaletteList extends Component {
  render() {
    console.log(defaultPaletteData);
    return (
      <div className="PaletteList">
        <div className="palette-links">
          {defaultPaletteData.map((palette) => (
            <div>
              <Link to={`/palette/${palette.id}`}>
                <MiniPalette {...palette} />
              </Link>
            </div>
          ))}
          {console.log(defaultPaletteData)}
        </div>
      </div>
    );
  }
}

export default PaletteList;
