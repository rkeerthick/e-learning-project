import React from "react";
import { buttonProps } from "../../constants/Types";

const OutlinedButton = ({
  buttonStyle,
  title,
  type,
}: buttonProps) => {
  let style: any =
    "rounded-sm px-3 py-2 text-sm font-semibold shadow-sm ";
  if (buttonStyle === "danger") {
    style += "text-red-600 border border-red-700 focus-visible:outline-red";
  } else if (buttonStyle === "success") {
    style += "text-green-600 border border-green-700 focus-visible:outline-green";
  } else if (buttonStyle === "warning") {
    style += " text-yellow-600 border border-yellow-700 focus-visible:outline-yellow";
  } else {
    style += " text-blue-600 border border-blue-700 focus-visible:outline-blue";
  }
  return (
    <button type={type} className={style}>
      {title}
    </button>
  );
};

export default OutlinedButton;
