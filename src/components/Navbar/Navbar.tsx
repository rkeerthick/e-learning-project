import LOGO from "../../assets/images/logo-udemy.svg";
import { BsCart3 } from "react-icons/bs";
import OutlinedButton from "../Outlined Button/OutlinedButton";
import SolidButton from "../Solid Button/SolidButton";

const Navbar = () => {
  const spanClass = "inline-block text-sm cursor-default";
  return (
    <div className="px-4 py-3 w-full flex items-center justify-between gap-4 border-b-2 border-gray-800 border-opacity-10">
      <img src={LOGO} alt="Logo" className="w-[70px] h-auto" />
      <span className={spanClass}>Categories</span>
      <input
        type="text"
        placeholder="Search anything here"
        className="w-[1100px] h-12 rounded-full px-4 border-2 border-gray-600 focus:outline-none"
      />
      <span className={spanClass}>Udemy Business</span>
      <span className={spanClass}>Teach On Udemy</span>
      <button type="button">
        <BsCart3 className="text-xl" />
      </button>
      <OutlinedButton title="Login In" type="button" classes="px-6" />
      <SolidButton title="Sign Up" type="button" classes="px-6 py-2" />
    </div>
  );
};

export default Navbar;
