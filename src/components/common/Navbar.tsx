import { useEffect, useState } from "react";
import {
  FaMapMarkerAlt,
  FaHotel,
  FaTags,
  //   FaFerrisWheel,
  FaUtensils,
  FaCalendarAlt,
  FaUser,
  FaBars,
  FaChevronDown,
} from "react-icons/fa";

const NavItem = ({ icon, label }: { icon: React.ReactNode; label: string }) => {
  return (
    <div className="flex items-center gap-2 cursor-pointer hover:text-blue-dark transition">
      <span className="text-base">{icon}</span>
      <span>{label}</span>
      <FaChevronDown className="text-xs opacity-70" />
    </div>
  );
};

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 120);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`
        fixed
        top-4
        left-0
        z-50
        w-full
        px-4
        transition-all
        duration-300
      `}
    >
      <div
        className={`
          mx-auto
          flex
          max-w-6xl
          items-center
          justify-between
          rounded-xl
          px-6
          py-3
          transition-all
          duration-300
          ${scrolled ? "bg-white shadow-lg" : "bg-transparent"}
        `}
      >
        {/* LEFT */}
        <img
          src="https://entartica.com/wp-content/uploads/2025/05/cropped-Entartica-logo-webp.webp"
          alt="Wonderla"
          className="h-11"
        />

        {/* CENTER */}
        <nav
          className={`hidden lg:flex items-center gap-8 text-sm font-semibold   ${scrolled ? "text-gray-600" : "text-white"} `}
        >
          <NavItem icon={<FaMapMarkerAlt />} label="PARK" />
          <NavItem icon={<FaHotel />} label="RESORTS" />
          <NavItem icon={<FaTags />} label="OFFERS" />
          <NavItem icon={<FaTags />} label="RIDES" />
          <NavItem icon={<FaUtensils />} label="RESTAURANTS" />
          <NavItem icon={<FaCalendarAlt />} label="EVENTS" />
        </nav>

        {/* RIGHT */}
        <div className="flex items-center gap-4">
          <div
            className={`hidden sm:flex items-center gap-2 text-sm font-semibold  ${scrolled ? "text-gray-600" : "text-white"} `}
          >
            <FaUser />
            LOGIN
          </div>

          <button className="rounded-lg bg-secondary  px-3 py-2 text-sm font-extrabold text-[#334dcf]">
            BOOK TICKETS 🎟️
          </button>

          <FaBars className="lg:hidden text-xl" />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
