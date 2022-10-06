import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import useAuth from "../auth/useAuth";
import "./navbar.css";
import DropDownMenu from "./DropDownMenu";

function Navbar() {
  const { isLoggedIn } = useAuth();
  const navRef = useRef();

  const showNavbar = () => {
    setTimeout(() => {
      navRef.current.classList.toggle("responsive_nav");
    }, 110);
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
        <a onClick={showNavbar} href="/#">
          Home
        </a>
        {isLoggedIn && (
          <a onClick={showNavbar} href="/manage">
            Admin
          </a>
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
