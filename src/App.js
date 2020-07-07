import React from "react";
import Palette from "./palette.jsx";
import "./App.css";
import defaultPaletteData from "./default-palette-data";
function App() {
  return (
    <div className="App">
      <Palette {...defaultPaletteData[1]} />
    </div>
  );
}

export default App;
