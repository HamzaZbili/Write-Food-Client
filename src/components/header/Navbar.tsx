import React from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import useAuth from "../auth/useAuth";
import "./navbar.css";

function Navbar() {
  const { isLoggedIn, removeUser } = useAuth();
  const navRef = React.useRef<HTMLElement | null>(null);

  function showNavbar() {
    setTimeout(() => {
      navRef.current?.classList.toggle("responsive_nav");
    }, 120);
  }

  return (
    <header>
      <nav ref={navRef}>
        <button
          id="navClose"
          className="nav-close-btn nav-btn"
          onClick={showNavbar}
        >
          <FaTimes />
        </button>
        <Link to="/" onClick={showNavbar} className="navBarLink">
          home
        </Link>
        {/* <DropDownMenu showNavbar={showNavbar} /> */}
        <Link to="/about" onClick={showNavbar} className="navBarLink">
          about
        </Link>
        <Link to="/contact" onClick={showNavbar} className="navBarLink">
          contact
        </Link>
        {isLoggedIn && (
          <>
            <Link to="/manage" onClick={showNavbar} className="navBarLink">
              admin
            </Link>
            <Link to="/backdoor" onClick={removeUser} className="navBarLink">
              logout
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
