import React, { Component } from "react";
import Palette from "./palette.jsx";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import defaultPaletteData from "./default-palette-data";
import { generatePalette } from "./color-shades-generator";

class App extends Component {
  constructor(props) {
    super(props);
    this.getPalette = this.getPalette.bind(this);
  }
  getPalette(props) {
    const id = props.match.params.id;
    const currentPalette = defaultPaletteData.find((el) => el.id === id);
    return <Palette palette={generatePalette(currentPalette)} />;
  }

  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/">
            <h1>Palette List</h1>
          </Route>
          <Route path="/palette/:id" render={this.getPalette}></Route>
        </Switch>
      </div>
    );
  }
}

export default App;
