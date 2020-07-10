import React, { Component } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import "./navbar.css";
import { Select, MenuItem } from "@material-ui/core/";
class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = { format: this.props.format };
    this.handleFormat = this.handleFormat.bind(this);
  }
  handleFormat(e) {
    console.log(
      "THOU HAVE ENTERED HANDLE FORMAT IN NAVBAR THIS WILL CALL HANDLE FORMAT IN PALETTE"
    );
    this.setState({ format: e.target.value });
    this.props.handleFormat(e.target.value);
  }
  render() {
    return (
      <div className="Navbar">
        <div className="brand">
          <span>Throne/OfIris</span>
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
      </div>
    );
  }
}

export default Navbar;
