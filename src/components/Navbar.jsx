import { useState } from "react";
import { FaCartPlus } from "react-icons/fa";
import { IoIosSunny } from "react-icons/io";
import { LuMoonStar } from "react-icons/lu";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [btnName, setBtnName] = useState("Light");

  let themeChange = () => {
    setBtnName((prev) => (prev === "Light" ? "Dark" : "Light"));
  };

  return (
    <div className="bg-green-400 text-white font-semibold flex justify-between p-2 ">
      <h1>Logo</h1>
      <ul className="flex gap-5 text-xl ">
        <li>
          <Link to="/men">Men</Link>
        </li>
        <li>
          <Link to="/women">Women</Link>
        </li>
        <li>
          <Link to="Kid">Kid</Link>
        </li>
        <li>
          <Link to="/cart">
          <FaCartPlus className="inline-block align-middle"/>
          </Link>
        </li>
      </ul>
      <button className="cursor-pointer" onClick={themeChange}>
        {
          btnName === "Light" ? (
            <IoIosSunny className="text-xl text-red-400"/>
          ):(
            <LuMoonStar className="text-xl text-gray-600"/>
          )
        }
      </button>
    </div>
  );
};

export default Navbar;
