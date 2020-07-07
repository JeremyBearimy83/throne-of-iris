import React from "react";
import Palette from "./palette.jsx";
import defaultPaletteData from "./default-palette-data";
function App() {
  return (
    <div className="App">
      <Palette {...defaultPaletteData[2]} />
    </div>
  );
}

export default App;
