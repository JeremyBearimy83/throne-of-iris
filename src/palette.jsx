import React, { Component } from "react";
import ColorBox from "./color-box";
import Navbar from "./navbar";
import { withStyles } from "@material-ui/styles";
import styles from "./styles/PaletteStyles";
class Palette extends Component {
  constructor(props) {
    super(props);
    this.state = { shade: 500, format: "hex" };
    this.changeShade = this.changeShade.bind(this);
    this.changeFormat = this.changeFormat.bind(this);
  }
  changeFormat(format) {
    this.setState({ format: format });
  }
  changeShade(shade) {
    this.setState({ shade: shade });
  }
  render() {
    const { classes } = this.props;
    const colorBoxes = this.props.palette.colors[
      this.state.shade
    ].map((color) => (
      <ColorBox
        color={color[this.state.format]}
        name={color.name}
        moreUrl={`/palette/${this.props.palette.id}/more/${color.id}`}
      />
    ));
    return (
      <div className={classes.palette}>
        <Navbar
          shade={this.state.shade}
          handleShade={this.changeShade}
          format={this.state.format}
          handleFormat={this.changeFormat}
        />
        {/* Navbar goes here */}
        <div className={classes.colorBoxContainer}>{colorBoxes}</div>
        <footer className={classes.footer}>
          {this.props.palette.paletteName}
          <span className={classes.icon}>{this.props.palette.emoji}</span>
        </footer>
      </div>
    );
  }
}
export default withStyles(styles)(Palette);
