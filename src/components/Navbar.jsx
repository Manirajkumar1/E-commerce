import { useState } from "react";
import { FaCartPlus, FaBars, FaTimes } from "react-icons/fa";
import { IoIosSunny } from "react-icons/io";
import { LuMoonStar } from "react-icons/lu";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import logo from "/logo.png";

const Navbar = () => {
  const [btnName, setBtnName] = useState("Light");
  const [mobileMenu, setMobileMenu] = useState(false);
  const cartItems = useSelector((store) => store.cart.cartItems);

  const themeChange = () => {
    setBtnName((prev) => (prev === "Light" ? "Dark" : "Light"));
  };

  return (
    <nav className="bg-green-400 text-white font-semibold p-3 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/">
          <img src={logo} alt="Logo" className="w-10" />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 items-center text-lg">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/men">Men</Link></li>
          <li><Link to="/women">Women</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>

        <div className="flex items-center gap-3">
          <button onClick={themeChange}>
            {btnName === "Light" ? (
              <IoIosSunny className="text-xl text-yellow-300" />
            ) : (
              <LuMoonStar className="text-xl text-gray-800" />
            )}
          </button>
          <Link to="/cartitems" className="flex items-center text-xl">
            <FaCartPlus className="mr-1" /> {cartItems.length}
          </Link>

          <button
            className="text-2xl md:hidden"
            onClick={() => setMobileMenu(!mobileMenu)}
          >
            {mobileMenu ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenu && (
        <ul className="md:hidden bg-green-400 text-white flex flex-col gap-3 mt-2 p-4">
          <li><Link to="/" onClick={() => setMobileMenu(false)}>Home</Link></li>
          <li><Link to="/men" onClick={() => setMobileMenu(false)}>Men</Link></li>
          <li><Link to="/women" onClick={() => setMobileMenu(false)}>Women</Link></li>
          <li><Link to="/contact" onClick={() => setMobileMenu(false)}>Contact</Link></li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
