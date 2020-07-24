import React from "react";
import { withStyles } from "@material-ui/core/styles";
import DeleteIcon from "@material-ui/icons/Delete";
import { SortableElement } from "react-sortable-hoc";
import styles from "./styles/DraggableColorBoxStyles";
const DraggableColorBox = SortableElement((props) => {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <div className={classes.boxContent}>
        <span>{props.name}</span>
        <DeleteIcon onClick={props.handleDelete} className={classes.delete} />
      </div>
    </div>
  );
});
export default withStyles(styles)(DraggableColorBox);
