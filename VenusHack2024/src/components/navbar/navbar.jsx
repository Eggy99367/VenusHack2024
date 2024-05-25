import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconButton } from "@chakra-ui/react";
import { BellIcon } from "@chakra-ui/icons";

function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header>
      <h3>LOGO</h3>
      <div className="spacer"></div>
      <nav ref={navRef}>
        <Link to="/">Home</Link>
        <Link to="/">Home</Link>
        <Link to="/">Home</Link>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
      <IconButton
        height={"55%"}
        width={"4.5%"}
        bg={"#ff6347"}
        variant="outline"
        color={"#00000"}
        aria-label="Send email"
        icon={<BellIcon boxSize={20} />}
      />
    </header>
  );
}

export default Navbar;
