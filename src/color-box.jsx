import React, { Component } from "react";
import "./color-box.css";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Link } from "react-router-dom";
import chroma from "chroma-js";
import { withStyles } from "@material-ui/styles";

const styles = {
  copyText: {
    color: (props) =>
      chroma(props.color).luminance() >= 0.7 ? "rgba(0,0,0,0.6)" : "white",
  },
  more: {
    position: "absolute",
    border: "none",
    right: "0px",
    bottom: "0px",
    lineHeight: "30px",
    textAlign: "center",
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    textTransform: "uppercase",
    padding: "2px 5px",
    color: (props) =>
      chroma(props.color).luminance() >= 0.7 ? "rgba(0,0,0,0.6)" : "white",
    width: "60px",
    height: "30px",
  },
  colorName: {
    position: "absolute",
    left: "0px",
    bottom: "0px",
    textTransform: "uppercase",
    letterSpacing: "1px",
    fontSize: "12px",
    padding: "10px",
    color: (props) =>
      chroma(props.color).luminance() <= 0.075 ? "white" : "black",
  },
  copyButton: {
    position: "absolute",
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
    color: (props) =>
      chroma(props.color).luminance() >= 0.7 ? "rgba(0,0,0,0.6)" : "white",
    textTransform: "uppercase",
    textAlign: "center",
    opacity: "0",
    "&:focus": { border: "none", outline: "none" },
  },
  colorBox: {
    width: "20%",
    height: (props) => (props.singleColor ? "50%" : "25%"),
    margin: "0 auto",
    display: "inline-block",
    position: "relative",
    marginBottom: "-3.5px",
    "&:hover button": { opacity: 1, transition: "0.5s" },
  },
};

class ColorBox extends Component {
  constructor(props) {
    super(props);
    this.state = { copied: false };
    this.handleCopyOverlay = this.handleCopyOverlay.bind(this);
  }
  handleCopyOverlay() {
    this.setState({ copied: true }, () =>
      setTimeout(() => this.setState({ copied: false }), 1500)
    );
  }
  render() {
    const { classes } = this.props;
    const isDark = chroma(this.props.color).luminance() <= 0.075;
    const isLight = chroma(this.props.color).luminance() >= 0.6;
    return (
      <CopyToClipboard text={this.props.color} onCopy={this.handleCopyOverlay}>
        <div
          className={classes.colorBox}
          style={{ backgroundColor: this.props.color }}
        >
          <div
            className={`copy-overlay ${this.state.copied ? "show" : ""}`}
            style={{
              backgroundColor: this.props.color,
              border: `5px solid ${this.props.color}`,
            }}
          />
          <div className={`copy-msg ${this.state.copied ? "show" : ""}`}>
            <h1>copied!</h1>
            <p className={classes.copyText}>{this.props.color}</p>
          </div>

          <button className={classes.copyButton}>copy</button>
          <span className={classes.colorName}>{this.props.name}</span>
          {!this.props.singleColor && (
            <Link to={this.props.moreUrl} onClick={(e) => e.stopPropagation()}>
              <span className={classes.more}>more</span>
            </Link>
          )}
        </div>
      </CopyToClipboard>
    );
  }
}

export default withStyles(styles)(ColorBox);
