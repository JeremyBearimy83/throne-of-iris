import React from "react";
import { withStyles } from "@material-ui/core/styles";
const styles = {
  root: {
    width: "20%",
    height: "25%",
    margin: "0 auto",
    display: "inline-block",
    position: "relative",
    marginBottom: "-4.8px",
    backgroundColor: (props) => props.color,
  },
};
const DraggableColorBox = (props) => {
  return <div className={props.classes.root}>{props.name}</div>;
};
export default withStyles(styles)(DraggableColorBox);
