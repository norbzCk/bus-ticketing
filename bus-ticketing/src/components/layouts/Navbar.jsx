import { Link } from "react-router-dom";
import { HiOutlineMenuAlt3 } from "react-icons/hi";

export default function Navbar() {
  return (
    <nav
      className="
      fixed
      top-0
      left-0
      w-full
      z-50
      bg-black/30
      backdrop-blur-lg
      border-b
      border-white/10
    "
    >

      <div
        className="
        max-w-7xl
        mx-auto
        flex
        justify-between
        items-center
        px-6
        py-4
      "
      >

        {/* Logo */}

        <Link
          to="/"
          className="text-3xl font-bold text-white"
        >
          BusGo
        </Link>

        {/* Desktop Menu */}

        <div className="hidden md:flex items-center gap-8 text-white">

          <Link to="/">Home</Link>

          <Link to="/gallery">Gallery</Link>

          <Link to="/contact">Contact</Link>

          <Link
            to="/admin-login"
            className="
              bg-blue-600
              hover:bg-blue-700
              px-5
              py-2
              rounded-xl
              transition
            "
          >
            Admin
          </Link>

        </div>

        {/* Mobile Icon */}

        <button className="md:hidden text-white text-3xl">
          <HiOutlineMenuAlt3 />
        </button>

      </div>

    </nav>
  );
}