import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "من نحن", path: "/" },
    { name: "رؤيتنا", path: "/Vision" },
    { name: "رسالتنا", path: "/Mission" },
    { name: "خدماتنا", path: "/Services" },
    { name: "لماذا نحن", path: "/consult-us" },
    // { name: "قصتنا", path: "/" },
    // { name: "أهدافنا", path: "/" },
    { name: "شركاؤنا", path: "/Partners" },
    { name: "تواصل معنا", path: "/Social" },
  ];

  return (
    <nav className="relative flex flex-row-reverse lg:flex-row items-center justify-between lg:justify-center px-6 py-4 ">

      {/* Logo */}
      <div className="flex items-center">
        <img src={logo} alt="logo" className="w-25 h-15 lg:hidden" />
      </div>

      {/* Desktop Menu */}
      <div className="hidden lg:flex items-center gap-4">
        {links.map((link) => (
          <Link
            key={link.name}
            to={link.path}
            className="text-white px-5 py-2 rounded transition-all duration-300 hover:bg-[#bbfe32] hover:text-black"
          >
            {link.name}
          </Link>
        ))}
      </div>

      {/* Mobile Hamburger Button */}
      <button
        onClick={() => setOpen(!open)}
        className="lg:hidden text-white text-3xl "
      >
        {open ? "✕" : "☰"}
      </button>

      {/* Mobile Menu */}
      {open && (
        <div className="absolute top-full left-0 w-full bg-black flex flex-col items-center gap-4 py-6 shadow-lg z-50">
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setOpen(false)}
              className="text-white w-full text-center py-3 transition-all duration-300 hover:bg-[#bbfe32] hover:text-black"
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
