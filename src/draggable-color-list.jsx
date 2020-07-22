import React from "react";
import DraggableColorBox from "./draggable-color-box";
import { SortableContainer } from "react-sortable-hoc";

const DraggableColorList = SortableContainer(({ colors, handleDelete }) => {
  return (
    <div style={{ height: "100%" }}>
      {colors.map((color, i) => (
        <DraggableColorBox
          index={i}
          color={color.color}
          name={color.name}
          handleDelete={() => handleDelete(color.name)}
        />
      ))}
    </div>
  );
});

export default DraggableColorList;
