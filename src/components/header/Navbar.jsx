import { useCallback } from "react";
import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import useAuth from "../auth/useAuth";
import DropDownMenu from "./DropDownMenu";
import "./navbar.css";

function Navbar() {
  const { isLoggedIn, removeUser } = useAuth();
  const navRef = useRef();

  const showNavbar = useCallback(() => {
    setTimeout(() => {
      navRef.current.classList.toggle("responsive_nav");
    }, 120);
  });

  return (
    <header>
      <a href="/" id="titleLogo">
        <h2>RACHEL NAISMITH</h2>
      </a>
      <nav ref={navRef}>
        <button
          id="navClose"
          className="nav-close-btn nav-btn"
          onClick={showNavbar}
        >
          <FaTimes />
        </button>
        <Link to="/" onClick={showNavbar} className="navBarLink">
          Home
        </Link>
        <DropDownMenu showNavbar={showNavbar} />
        <Link to="/aboutme" onClick={showNavbar} className="navBarLink">
          About me
        </Link>
        <Link to="/contact" onClick={showNavbar} className="navBarLink">
          Contact
        </Link>
        {isLoggedIn && (
          <>
            <Link to="/manage" onClick={showNavbar} className="navBarLink">
              Admin
            </Link>
            <Link to="/backdoor" onClick={removeUser} className="navBarLink">
              Logout
            </Link>
          </>
        )}
      </nav>
      <button id="navBars" className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
}

export default Navbar;
