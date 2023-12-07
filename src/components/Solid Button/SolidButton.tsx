import { buttonProps } from "../../constants/Types";

function SolidButton({ buttonStyle, title, type, classes }: buttonProps) {
  let style: string =
    "px-3 py-2 text-sm font-semibold text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600";
  if (buttonStyle === "danger") {
    style += " bg-red-600 hover:bg-red-600/80";
  } else if (buttonStyle === "success") {
    style += " bg-green-600 hover:bg-green-600/80";
  } else if (buttonStyle === "warning") {
    style += " bg-yellow-600 hover:bg-yellow-600/80";
  } else {
    style += " bg-black hover:bg-black/70";
  }
console.log(style)
  return (
    <button type={type} className={`${style} ${classes}`}>
      {title}
    </button>
  );
}

export default SolidButton;