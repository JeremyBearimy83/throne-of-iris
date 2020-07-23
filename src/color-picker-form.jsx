import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import { ChromePicker } from "react-color";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
class ColorPickerForm extends Component {
  constructor(props) {
    super(props);
    this.state = { currentColor: "teal", colorName: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleFormChange = this.handleFormChange.bind(this);
    this.handleSumbit = this.handleSumbit.bind(this);
  }
  handleSumbit() {
    const newColor = {
      color: this.state.currentColor,
      name: this.state.colorName,
    };
    this.props.addColor(newColor);
    this.setState({ colorName: "" });
  }
  handleChange(color) {
    this.setState({ currentColor: color.hex });
  }
  handleFormChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  componentDidMount() {
    ValidatorForm.addValidationRule("isNameUnique", (value) =>
      this.props.colors.every(
        (color) => color.name.toLowerCase() !== value.toLowerCase()
      )
    );
    ValidatorForm.addValidationRule("isColorUnique", (value) =>
      this.props.colors.every(
        (color) => color.color !== this.state.currentColor
      )
    );
  }
  render() {
    const { isPaletteFull } = this.props;
    return (
      <div>
        <ChromePicker
          color={this.state.currentColor}
          onChangeComplete={this.handleChange}
        />
        <ValidatorForm onSubmit={this.handleSumbit}>
          <TextValidator
            onChange={this.handleFormChange}
            value={this.state.colorName}
            name="colorName"
            validators={["required", "isNameUnique", "isColorUnique"]}
            errorMessages={[
              "This field cannot be left blank!",
              "Color name should be unique",
              "Color should be unique",
            ]}
          />
          <Button
            variant="contained"
            color="primary"
            style={
              isPaletteFull
                ? { backgroundColor: "lightgrey" }
                : { backgroundColor: this.state.currentColor }
            }
            type="submit"
            disabled={isPaletteFull}
          >
            {isPaletteFull ? "Palette Full" : "Add Color"}
          </Button>
        </ValidatorForm>
      </div>
    );
  }
}

export default ColorPickerForm;
