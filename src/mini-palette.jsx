import React, { Component } from "react";
import { withStyles } from "@material-ui/styles";
import styles from "./styles/MiniPaletteStyles";
import DeleteIcon from "@material-ui/icons/Delete";

class MiniPalette extends Component {
  constructor(props) {
    super(props);
    this.deletePalette = this.deletePalette.bind(this);
  }
  deletePalette(e) {
    e.stopPropagation();
    this.props.deletePalette(this.props.id);
  }
  render() {
    const { classes } = this.props;
    const { colors, emoji, paletteName } = this.props;
    console.log("COLORS ARRAY COLORS ARRAY COLORS ARRAY:");
    console.log(colors);
    return (
      <div className={classes.root} onClick={this.props.handleClick}>
        <div className={classes.delete}>
          <DeleteIcon
            className={classes.deleteIcon}
            style={{ transition: "all 0.3s ease-in-out" }}
            onClick={this.deletePalette}
          />
        </div>
        <div className={classes.colors}>
          {colors.map((color) => (
            <div
              className={classes.minicolors}
              style={{ backgroundColor: color.color }}
            />
          ))}
        </div>
        <h5 className={classes.title}>
          {paletteName}
          <span className={classes.emoji}>{emoji}</span>
        </h5>
      </div>
    );
  }
}
export default withStyles(styles)(MiniPalette);
