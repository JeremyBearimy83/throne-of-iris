import React, { Component } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import "./navbar.css";
import { Select, MenuItem, Icon } from "@material-ui/core/";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";

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
    return (
      <div className="Navbar">
        <div className="brand">
          <span>Throne/Of/Iris</span>
        </div>
        <div className="slider-container">
          <span>{`Shade: ${this.props.shade}`}</span>
        </div>
        <div className="slider">
          <Slider
            defaultValue={this.props.shade}
            min={100}
            max={900}
            step={100}
            onChange={this.props.handleShade}
          />
        </div>
        <div className="select-container">
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

export default Navbar;
