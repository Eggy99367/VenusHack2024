import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./navbar.css";
import { useRef } from "react";
import { FaBars, FaHeart, FaTimes } from "react-icons/fa";
import { Center, IconButton } from "@chakra-ui/react";
import { CiHeart } from "react-icons/ci";

function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/like"); // Replace '/home' with your desired route
  };

  return (
    <header>
      <Link to="http://localhost:5173/">
        {" "}
        {
          <img src="./assets/white_logo.png" alt="Logo" className="nav-logo" />
        }{" "}
      </Link>

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
      <button className="icon-button" onClick={handleClick}>
        <CiHeart className="icon" />
      </button>
    </header>
  );
}

export default Navbar;
