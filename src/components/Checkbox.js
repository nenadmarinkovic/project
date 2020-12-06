import React from "react";

export const Checkbox = (props) => {
  return (
    <li>
      <input
        onClick={props.handleCheckChieldElement}
        type="checkbox"
        value={props.Value}
        checked={props.Checked}
      />
      {props.Value}
    </li>
  );
};

export default Checkbox;
