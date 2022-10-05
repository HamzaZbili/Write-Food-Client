import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import useAuth from "../auth/useAuth";
import "./navbar.css";

function Navbar() {
  const { isLoggedIn, currentUser } = useAuth();
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
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
        <a onClick={showNavbar} href="/#">
          My Work
        </a>
        <a onClick={showNavbar} href="/#">
          About me
        </a>
        <a onClick={showNavbar} href="/#">
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
