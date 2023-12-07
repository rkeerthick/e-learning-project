import { buttonProps } from "../../constants/Types";

function SolidButton({ buttonStyle, title, type }: buttonProps) {
  let style: string =
    "rounded-md  px-3 py-2 text-sm font-semibold text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600";
  if (buttonStyle === "danger") {
    style += " bg-red-600 hover:bg-red-600/80";
  } else if (buttonStyle === "success") {
    style += " bg-green-600 hover:bg-green-600/80";
  } else if (buttonStyle === "warning") {
    style += " bg-yellow-600 hover:bg-yellow-600/80";
  } else {
    style += " bg-blue-600 hover:bg-blue-600/80";
  }
console.log(style)
  return (
    <button type={type} className={style}>
      {title}
    </button>
  );
}

export default SolidButton;