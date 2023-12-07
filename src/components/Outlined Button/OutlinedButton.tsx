import React from "react";
import { buttonProps } from "../../constants/Types";

const OutlinedButton = ({
  buttonStyle,
  title,
  type,
  classes
}: buttonProps) => {
  let style: any =
    "px-3 py-2 text-sm font-semibold shadow-sm ";
  if (buttonStyle === "danger") {
    style += "text-red-600 border border-red-700 focus-visible:outline-red";
  } else if (buttonStyle === "success") {
    style += "text-green-600 border border-green-700 focus-visible:outline-green";
  } else if (buttonStyle === "warning") {
    style += " text-yellow-600 border border-yellow-700 focus-visible:outline-yellow";
  } else {
    style += " text-black hover:bg-gray-200 border border-black focus-visible:outline-black";
  }
  return (
    <button type={type} className={`${style} ${classes}`}>
      {title}
    </button>
  );
};

export default OutlinedButton;
