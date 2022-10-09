import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import useAuth from "../auth/useAuth";
import DropDownMenu from "./DropDownMenu";
import "./navbar.css";

function Navbar() {
  const { isLoggedIn, removeUser } = useAuth();
  const navRef = useRef();

  const showNavbar = () => {
    setTimeout(() => {
      navRef.current.classList.toggle("responsive_nav");
    }, 120);
  };

  return (
    <header>
      <Link to="/" id="titleLogo">
        <h2>RACHEL NAISMITH</h2>
      </Link>
      <nav ref={navRef}>
        <button
          id="navClose"
          className="nav-close-btn nav-btn"
          onClick={showNavbar}
        >
          <FaTimes />
        </button>
        <Link to="/" onClick={showNavbar}>
          Home
        </Link>
        <DropDownMenu />
        <Link to="/aboutme" onClick={showNavbar}>
          About me
        </Link>
        <Link to="/contact" onClick={showNavbar}>
          Contact
        </Link>
        {isLoggedIn && (
          <>
            <Link to="/manage" onClick={showNavbar}>
              Admin
            </Link>
            <Link to="/backdoor" onClick={removeUser}>
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
