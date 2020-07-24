import React, { Component } from "react";
import MiniPalette from "./mini-palette";
import { withStyles } from "@material-ui/styles";
import { Link } from "react-router-dom";

import styles from "./styles/PaletteListStyles";
class PaletteList extends Component {
  openPalette(id) {
    this.props.history.push(`/palette/${id}`);
  }
  render() {
    const { defaultPaletteData } = this.props;
    const { props, classes } = this.props;
    console.log(defaultPaletteData);
    return (
      <div className={classes.root}>
        <div className={classes.container}>
          <nav className={classes.nav}>
            <h1>React Colors</h1>
            <Link to="/palette/new">CREATE NEW PALETTE</Link>
          </nav>
          <div className={classes.palettes}>
            {defaultPaletteData.map((palette) => (
              <div>
                <MiniPalette
                  deletePalette={this.props.deletePalette}
                  {...palette}
                  handleClick={() => this.openPalette(palette.id)}
                  key={palette.id}
                  id={palette.id}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(PaletteList);
