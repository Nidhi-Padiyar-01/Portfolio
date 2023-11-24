import React, { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../csscomponent/Navbar.css";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/Aboutme") {
    }
  }, [location]);

  const sidebar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };
  const closeSidebar = () => {
    setIsNavbarOpen(false);
  };

  return (
    <nav>
      <h3>Portfolio</h3>
      <label className="hamburger-btn" onClick={sidebar}>
        {isNavbarOpen ? <FaTimes /> : <FaBars />}
      </label>

    
      <ul className={isNavbarOpen ? "show" : ""}>
        {location.pathname === "/" ? (
          " "
        ) : (
          <li className="desktop" onClick={closeSidebar}>
            <Link className="active" to="/">
              HOME
            </Link>
          </li>
        )}
        {location.pathname === "/Aboutme" ? (
          " "
        ) : (
          <li className="desktop" onClick={closeSidebar}>
            <Link className="active" to="/Aboutme">
              ABOUT
            </Link>
          </li>
        )}
        {location.pathname === "/Skill" ? (
          " "
        ) : (
          <li className="desktop" onClick={closeSidebar}>
            <Link className="active" to="/Skill">
              SKILLS
            </Link>
          </li>
        )}
        {location.pathname === "/Project" ? (
          " "
        ) : (
          <li className="desktop" onClick={closeSidebar}>
            <Link className="active" to="/Project">
              PROJECTS
            </Link>
          </li>
        )}
        {location.pathname === "/contact" ? (
          " "
        ) : (
          <li className="desktop" onClick={closeSidebar}>
            <Link className="active" to="/contact">
              CONTACT ME
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
