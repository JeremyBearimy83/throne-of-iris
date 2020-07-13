import React, { Component } from "react";
import Palette from "./palette.jsx";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import defaultPaletteData from "./default-palette-data";
import { generatePalette } from "./color-shades-generator";
import PaletteList from "./palette-list.jsx";
import SingleColorPalette from "./single-color-palette.jsx";

class App extends Component {
  constructor(props) {
    super(props);
    this.getPalette = this.getPalette.bind(this);
  }
  getColor(props) {
    const colorName = props.match.params.colorName;
    const id = props.match.params.id;
    const currentPalette = defaultPaletteData.find((el) => el.id === id);
    const paletteData = generatePalette(currentPalette);
    let firstColor = {};
    const singleColor = [];
    let bruh;
    for (let i = 0; i < 20; i++) {
      firstColor = {};
      for (const shade in paletteData.colors) {
        bruh = paletteData.colors[shade];
        firstColor[shade] = bruh[i];
      }
      singleColor.push(firstColor);
    }
    const currentColor = singleColor.find((el) => el[50].id === colorName);
    return <SingleColorPalette {...currentColor} />;
  }
  getPalette(props) {
    let id = props.match.params.id;
    const currentPalette = defaultPaletteData.find((el) => el.id === id);
    const paletteData = generatePalette(currentPalette);
    let firstColor = {};
    const singleColor = [];
    let bruh;
    for (let i = 0; i < 20; i++) {
      firstColor = {};
      for (const shade in paletteData.colors) {
        bruh = paletteData.colors[shade];
        firstColor[shade] = bruh[i];
      }
      singleColor.push(firstColor);
    }
    const currentColor = singleColor.find((el) => el[50].id === "turquoise");
    console.log(currentColor);
    console.log("--------LOOK HERE --------AS WELL ----");
    console.log(singleColor);
    console.log("---------LOOK HERE ------ LOOK HERE----");
    console.log(paletteData);
    return <Palette palette={paletteData} />;
  }

  render() {
    return (
      <div className="App">
        <Switch>
          <Route
            exact
            path="/"
            render={(routeProps) => <PaletteList {...routeProps} />}
          />

          <Route exact path="/palette/:id" render={this.getPalette}></Route>
          <Route
            exact
            path="/palette/:id/match/:colorName"
            render={this.getColor}
          ></Route>
        </Switch>
      </div>
    );
  }
}

export default App;
