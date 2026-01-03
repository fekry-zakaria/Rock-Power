import { useState } from "react";
import logo from "../assets/images/logo.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className=" flex items-center justify-between relative">

      {/* Logo */}
      <div>
        <img src={logo} alt="Logo" className="w-24 md:w-36 " />
      </div>

      {/* Desktop Menu */}
      <div className="hidden lg:flex items-center gap-10">
        {["HOME", "ABOUT US", "OUR WORK", "CONTACT US", "CONSULT US"].map(
          (item) => (
            <button
              key={item}
              className="text-white px-5 py-2 rounded transition-all duration-300 hover:bg-[#bbfe32] hover:text-black"
            >
              {item}
            </button>
          )
        )}
      </div>

      {/* Mobile Menu Button */}
      <button
  onClick={() => setOpen(!open)}
  className="lg:hidden text-white text-3xl"
>
  {open ? "✕" : "☰"}
</button>
      {/* Mobile Menu */}
      {open && (
        <div className="absolute top-full left-0 w-full bg-black flex flex-col items-center gap-4 py-6 lg:hidden shadow-lg">
          {["HOME", "ABOUT US", "OUR WORK", "CONTACT US", "CONSULT US"].map(
            (item) => (
              <button
                key={item}
                onClick={() => setOpen(false)}
                className="text-white w-full text-center py-3 transition-all duration-300 hover:bg-[#bbfe32] hover:text-black"
              >
                {item}
              </button>
            )
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
