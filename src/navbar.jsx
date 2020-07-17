import React, { Component } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { Select, MenuItem } from "@material-ui/core/";
import { Link } from "react-router-dom";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import { withStyles } from "@material-ui/styles";

const styles = {
  Navbar: {
    height: "6vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  sliderContainer: {
    fontSize: "16px",
    letterSpacing: "1px",
    margin: "0px 9px",
    textTransform: "uppercase",
  },
  hide: {
    display: "none",
  },
  brand: {
    backgroundColor: "#eceff1",
    height: "100%",
    fontSize: "20px",
    display: "flex",
    alignItems: "center",
    padding: "0 13px",
    margin: "0px 5px",
    fontFamily: "MedievalSharp",
    color: "black",
    textDecoration: "none",
  },
  slider: {
    width: "200px",
    margin: "0 10px",
    display: "inline-block",
    "& .rc-slider-rail": { height: "15px" },
    "& .rc-slider-track": { backgroundColor: "transparent" },
    "& .rc-slider-handle,.rc-slider-handle:active,.rc-slider-handle:focus,.rc-slider-handle:hover": {
      backgroundColor: "#79e4e4",
      outline: "none",
      border: "2px solid #79e4e4",
      boxShadow: "none",
      width: "13px",
      height: "13px",
      marginLeft: -"7px",
      marginTop: -"3px",
      padding: "8px",
    },
  },
  selectContainer: {
    marginLeft: "auto",
    marginRight: "20px",
  },
};
class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = { format: this.props.format, open: false };
    this.handleFormat = this.handleFormat.bind(this);
    this.changeSnackbar = this.changeSnackbar.bind(this);
  }
  changeSnackbar() {
    this.setState({ open: false });
  }
  handleFormat(e) {
    this.setState({ format: e.target.value, open: true });
    this.props.handleFormat(e.target.value);
  }
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.Navbar}>
        <Link style={{ height: "100%", textDecoration: "none" }} to="/">
          <div className={classes.brand}>
            <span>Throne/Of/Iris</span>
          </div>
        </Link>
        {/*CHECKING IF NAVBAR IS IN SINGLE COLOR PALETTE OR NORMAL PALETTE AND HIDING SLIDER BASED ON THAT */}
        {!this.props.singleColor ? (
          <div>
            <div className={classes.sliderContainer}>
              <span>{`Shade: ${this.props.shade}`}</span>
            </div>
            <div className={classes.slider}>
              <Slider
                defaultValue={this.props.shade}
                min={100}
                max={900}
                step={100}
                onChange={this.props.handleShade}
              />
            </div>
          </div>
        ) : null}

        <div className={classes.selectContainer}>
          <Select value={this.state.format} onChange={this.handleFormat}>
            <MenuItem value="hex">HEX - #ffffff</MenuItem>
            <MenuItem value="rgb">RGB - rgb(255, 255, 255)</MenuItem>
            <MenuItem value="rgba">RGBA - rgba(255, 255, 255, 1,0)</MenuItem>
          </Select>
        </div>
        <Snackbar
          message={`Format changed to ${this.state.format}`}
          open={this.state.open}
          onClose={this.changeSnackbar}
          action={
            <IconButton color="inherit" onClick={this.changeSnackbar}>
              <CloseIcon />
            </IconButton>
          }
          autoHideDuration={3000}
          anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        />
      </div>
    );
  }
}

export default withStyles(styles)(Navbar);
