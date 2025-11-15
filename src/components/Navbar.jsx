import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [btnName, setBtnName] = useState("Light");
  let themeChange = () => {
    btnName === "Light" ? setBtnName("Dark") : setBtnName("Light");
  };

  return (
    <div className="border-b border-black flex justify-between p-3">
      <h1>Logo</h1>
      <ul className="flex gap-5">
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
          <Link to="/cart">Cart</Link>
        </li>
      </ul>
      <button className="cursor-pointer" onClick={themeChange}>
        {btnName}
      </button>
    </div>
  );
};

export default Navbar;
