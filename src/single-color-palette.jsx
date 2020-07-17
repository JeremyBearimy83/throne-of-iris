import React, { Component } from "react";
import ColorBox from "./color-box";
import "./single-color-palette.css";
import Navbar from "./navbar";
import { Link } from "react-router-dom";
import { withStyles, withTheme } from "@material-ui/styles";
const styles = {
  singleColorPalette: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
  },
  colorBoxContainer: {
    height: "90%",
  },
  goBack: {
    width: "20%",
    height: "50%",
    margin: "0 auto",
    display: "inline-block",
    position: "relative",
    marginBottom: "-3.5px",
    opacity: "1",
    backgroundColor: "rgba(69, 69, 169, 0.9)",
    "& div": {
      position: "absolute",
      opacity: "1",
      left: "50%",
      top: "50%",
      width: "100px",
      height: "30px",
      display: "inline-block",
      marginLeft: "-50px",
      marginTop: "-15px",
      backgroundColor: "rgba(255, 255, 255, 0.3)",
      border: "none",
      fontSize: "1rem",
      textTransform: "uppercase",
      textAlign: "center",
      opacity: "1",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      "&:focus": { border: "none", outline: "none" },
      textDecoration: "none",
      color: "white",
      "& span": {
        color: "white",
      },
    },
  },
  footer: {
    height: "5vh",
    display: "flex",
    justifyContent: "flex-end",
    fontSize: "17px",
    alignItems: "center",
    marginRight: "10px",
  },
  icon: {
    margin: "0px 7px",
    fontSize: "1.5rem",
  },
};
class SingleColorPalette extends Component {
  constructor(props) {
    super(props);
    this.state = { format: "hex" };
    this.changeFormat = this.changeFormat.bind(this);
  }
  changeFormat(format) {
    this.setState({ format: format });
  }
  render() {
    const { classes } = this.props;
    const shades = [100, 200, 300, 400, 500, 600, 700, 800, 900];
    const colorBoxes = shades.map((shade) => (
      <ColorBox
        singleColor={true}
        color={this.props[shade][this.state.format]}
        name={this.props[shade].name}
      />
    ));
    console.log(this.props[50]);
    return (
      <div className={classes.singleColorPalette}>
        <Navbar
          singleColor={true}
          format={this.state.format}
          handleFormat={this.changeFormat}
        />

        <div className={classes.colorBoxContainer}>
          {colorBoxes}
          <div className={classes.goBack}>
            <Link to={`/palette/${this.props.palette.id}`}>
              <div>
                <span>GO BACK</span>
              </div>
            </Link>
          </div>
        </div>
        <footer className={classes.footer}>
          {this.props.palette.paletteName}
          <span className={classes.icon}>{this.props.palette.emoji}</span>
        </footer>
      </div>
    );
  }
}

export default withStyles(styles)(SingleColorPalette);
