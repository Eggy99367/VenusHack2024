import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import { useRef } from "react";
import { FaBars, FaHeart, FaTimes } from "react-icons/fa";
import { Center, IconButton } from "@chakra-ui/react";
import { BellIcon } from "@chakra-ui/icons";
import { CiHeart } from "react-icons/ci";

function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header>
      <Link to="http://localhost:5173/"> {<img src="./assets/white_logo.png" alt="Logo" className="nav-logo" />} </Link>
      <div className="spacer"></div>
      <nav ref={navRef}>
        <Link to="/brandywine">Brandywine</Link>
        <Link to="/anteatery">Anteatery</Link>
        <Link to="/compare">Compare</Link>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
      <IconButton
      className="nav-btn-heart"
      height={"55%"}
      width={"4.5%"}
      bg={"#ff6347"}
      variant="outline"
      color={"#00000"}
      aria-label="Send email"
      icon={<FaHeart boxSize={20} />}
    />
    </header>
  );
}

export default Navbar;
