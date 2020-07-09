import React from "react";
import Palette from "./palette.jsx";
import "./App.css";
import defaultPaletteData from "./default-palette-data";
import { generatePalette } from "./color-shades-generator";
function App() {
  return (
    <div className="App">
      <Palette palette={generatePalette(defaultPaletteData[8])} />
    </div>
  );
}

export default App;
