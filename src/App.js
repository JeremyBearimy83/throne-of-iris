import React from "react";
import Palette from "./palette.jsx";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import defaultPaletteData from "./default-palette-data";
import { generatePalette } from "./color-shades-generator";
function App() {
  console.log(generatePalette(defaultPaletteData[8]));
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <h1>Palette List</h1>
        </Route>
        <Route path="/palette/:id">
          <Palette palette={generatePalette(defaultPaletteData[8])} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
