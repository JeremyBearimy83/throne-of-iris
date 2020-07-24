import React, { Component } from "react";
import Palette from "./palette.jsx";
import { Route, Switch } from "react-router-dom";
import defaultPaletteData from "./default-palette-data";
import { generatePalette } from "./color-shades-generator";
import PaletteList from "./palette-list.jsx";
import SingleColorPalette from "./single-color-palette.jsx";
import NewPaletteForm from "./new-palette-form";

class App extends Component {
  constructor(props) {
    super(props);
    const savedPalettes = JSON.parse(window.localStorage.getItem("palettes"));
    this.state = { palettes: savedPalettes || defaultPaletteData };
    this.getPalette = this.getPalette.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.getColor = this.getColor.bind(this);
    this.syncLocalStorage = this.syncLocalStorage.bind(this);
    this.deletePalette = this.deletePalette.bind(this);
  }
  deletePalette(id) {
    this.setState(
      (st) => ({
        palettes: st.palettes.filter((p) => p.id !== id),
      }),
      this.syncLocalStorage
    );
  }
  handleSave(newPalette) {
    console.log(newPalette);
    this.setState(
      { palettes: [...this.state.palettes, newPalette] },
      this.syncLocalStorage
    );
  }
  syncLocalStorage() {
    window.localStorage.setItem(
      "palettes",
      JSON.stringify(this.state.palettes)
    );
  }
  getColor(props) {
    const colorName = props.match.params.colorName;
    const id = props.match.params.id;
    const currentPalette = this.state.palettes.find((el) => el.id === id);
    const paletteData = generatePalette(currentPalette);
    let color = {};
    const singleColor = [];
    let shadeArray;
    for (let i = 0; i < 20; i++) {
      color = {};
      for (const shade in paletteData.colors) {
        shadeArray = paletteData.colors[shade];
        color[shade] = shadeArray[i];
      }
      singleColor.push(color);
    }
    const currentColor = singleColor.find((el) => el[50].id === colorName);
    return (
      <SingleColorPalette
        {...currentColor}
        paletteId={id}
        palette={paletteData}
      />
    );
  }
  getPalette(props) {
    let id = props.match.params.id;
    const currentPalette = this.state.palettes.find((el) => el.id === id);
    const paletteData = generatePalette(currentPalette);
    return <Palette palette={paletteData} />;
  }

  render() {
    return (
      <div className="App">
        <Switch>
          <Route
            exact
            path="/"
            render={(routeProps) => (
              <PaletteList
                deletePalette={this.deletePalettep}
                defaultPaletteData={this.state.palettes}
                {...routeProps}
              />
            )}
          />
          <Route
            exact
            path="/palette/new"
            render={(routeProps) => (
              <NewPaletteForm
                savePalette={this.handleSave}
                {...routeProps}
                palettes={this.state.palettes}
              />
            )}
          />

          <Route exact path="/palette/:id" render={this.getPalette} />
          <Route
            exact
            path="/palette/:id/more/:colorName"
            render={this.getColor}
          ></Route>
        </Switch>
      </div>
    );
  }
}

export default App;
