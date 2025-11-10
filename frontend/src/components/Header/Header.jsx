import { useEffect, useRef, useContext, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { BiMenu, BiX } from "react-icons/bi";
import logo from "../../assets/images/logo.png";
import { authContext } from "../../context/AuthContext";
import Avatar from "../../assets/images/825.jpg";

const navLinks = [
  { path: "/home", display: "Home" },
  { path: "/doctors", display: "Find Mentor" },
  { path: "/doctors", display: "Group Session" },
  { path: "/services", display: "Services" },
  { path: "/contact", display: "Contact" },
];

const Header = () => {
  const headerRef = useRef(null);
  const { user, role, token } = useContext(authContext);
  const [menuOpen, setMenuOpen] = useState(false);

  // Sticky header
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        headerRef.current.classList.add("shadow-lg", "bg-white");
      } else {
        headerRef.current.classList.remove("shadow-lg", "bg-white");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header
      ref={headerRef}
      className="fixed top-0 left-0 w-full z-50 transition-all duration-300"
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-around">
        {/* Logo */}
        <Link to={"/"}>
          <img src={logo} alt="Logo" className="w-44 md:w-52" />
        </Link>

        {/* Navigation */}
        <nav
          className={`md:flex items-center gap-8 absolute md:static top-full left-0 w-full md:w-auto bg-white md:bg-transparent transition-all duration-300 md:opacity-100 ${
            menuOpen
              ? "opacity-100 h-auto py-4 shadow-md md:shadow-none"
              : "opacity-0 h-0 overflow-hidden md:opacity-100 md:h-auto md:py-0"
          } rounded-b-md md:rounded-none`}
        >
          <ul className="flex flex-col md:flex-row items-center gap-6 md:gap-8 px-4 md:px-0">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `relative lg:text-[16px] font-medium transition-all duration-300 md:text-[14px] ${
                      isActive
                        ? "text-primaryColor font-semibold"
                        : "text-gray-700 hover:text-primaryColor"
                    }`
                  }
                  onClick={() => setMenuOpen(false)}
                >
                  {link.display}
                  {/* Sliding underline */}
                  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-primaryColor rounded-full transition-all duration-300 group-hover:w-full"></span>
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          {token && user ? (
            <Link
              to={`${
                role === "doctor" ? "/doctors/profile/me" : "/users/profile/me"
              }`}
            >
              <figure className="w-12 h-12 rounded-full overflow-hidden cursor-pointer ring-2 ring-primaryColor hover:ring-4 transition-all duration-300 transform hover:scale-105">
                <img
                  src={user?.photo || Avatar}
                  alt="User"
                  className="w-full h-full object-cover"
                />
              </figure>
            </Link>
          ) : (
            <Link to="/login">
              <button className="bg-primaryColor hover:bg-primaryColor/80 py-2 px-6 text-white font-semibold h-11 flex items-center justify-center rounded-full shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                Login
              </button>
            </Link>
          )}

          {/* Mobile Menu Toggle */}
          <span className="md:hidden" onClick={toggleMenu}>
            {menuOpen ? (
              <BiX className="w-7 h-7 cursor-pointer text-gray-700" />
            ) : (
              <BiMenu className="w-7 h-7 cursor-pointer text-gray-700" />
            )}
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
