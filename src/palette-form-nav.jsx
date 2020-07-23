import React, { Component } from "react";
import classNames from "classnames";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Button from "@material-ui/core/Button";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { Link } from "react-router-dom";
class PaletteFormNav extends Component {
  constructor(props) {
    super(props);
    this.state = { paletteName: "" };
    this.handleFormChange = this.handleFormChange.bind(this);
  }
  handleFormChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  componentDidMount() {
    ValidatorForm.addValidationRule("isPaletteNameUnique", (value) =>
      this.props.palettes.every(
        (palette) => palette.paletteName.toLowerCase() !== value.toLowerCase()
      )
    );
  }
  render() {
    const { classes, open } = this.props;
    return (
      <AppBar
        position="fixed"
        color="default"
        className={classNames(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar disableGutters={!open}>
          <IconButton
            color="inherit"
            aria-label="Open drawer"
            onClick={this.props.handleDrawerOpen}
            className={classNames(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" noWrap>
            Persistent drawer
          </Typography>
          <ValidatorForm
            onSubmit={() => this.props.handleSave(this.state.paletteName)}
          >
            <TextValidator
              onChange={this.handleFormChange}
              value={this.state.paletteName}
              name="paletteName"
              validators={["required", "isPaletteNameUnique"]}
              errorMessages={[
                "This field cannot be left blank!",
                "Palette name should be unique",
              ]}
            />
            <Button variant="contained" color="primary" type="submit">
              Save Palette
            </Button>
            <Link to="/">
              <Button variant="contained" color="secondary">
                GO BACK
              </Button>
            </Link>
          </ValidatorForm>
        </Toolbar>
      </AppBar>
    );
  }
}

export default PaletteFormNav;
