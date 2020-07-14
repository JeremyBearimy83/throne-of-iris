import React, { Component } from "react";
import "./color-box.css";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Link } from "react-router-dom";
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
    return (
      <CopyToClipboard text={this.props.color} onCopy={this.handleCopyOverlay}>
        <div className="ColorBox" style={{ backgroundColor: this.props.color }}>
          <div
            className={`copy-overlay ${this.state.copied ? "show" : ""}`}
            style={{
              backgroundColor: this.props.color,
              border: `5px solid ${this.props.color}`,
            }}
          />
          <div className={`copy-msg ${this.state.copied ? "show" : ""}`}>
            <h1>copied!</h1>
            <p>{this.props.color}</p>
          </div>
          <button className="copy-button">copy</button>
          <span className="color-name">{this.props.name}</span>
          <Link to={this.props.moreUrl} onClick={(e) => e.stopPropagation()}>
            <span className="more">more</span>
          </Link>
        </div>
      </CopyToClipboard>
    );
  }
}

export default ColorBox;
