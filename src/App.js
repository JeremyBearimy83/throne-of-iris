import React from "react";
import Palette from "./palette.jsx";
import "./App.css";
import defaultPaletteData from "./default-palette-data";
import { generatePalette } from "./color-shades-generator";
function App() {
  console.log(generatePalette(defaultPaletteData[4]));
  return (
    <div className="App">
      <Palette palette={generatePalette(defaultPaletteData[4])} />
    </div>
  );
}

export default App;
