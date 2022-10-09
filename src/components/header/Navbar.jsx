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
        <a onClick={showNavbar} href="/#">
          Home
        </a>
        {isLoggedIn && (
          <>
            <a onClick={showNavbar} href="/manage">
              Admin
            </a>
            <a onClick={removeUser} href="/backdoor">
              Logout
            </a>
          </>
        )}
        <DropDownMenu />
        <a onClick={showNavbar} href="/aboutme">
          About me
        </a>
        <a onClick={showNavbar} href="/contact">
          Contact
        </a>
      </nav>
      <button id="navBars" className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
}

export default Navbar;
