import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };

  return (
    <nav className={click ? "nav-active" : ""}>
      <div className="logo">
        <img src="./assets/logo.svg" alt="" />
        <div className="hamburger" onClick={handleClick}>
          {click ? (
            <i className="fa-solid fa-xmark"></i>
          ) : (
            <i className="fa-solid fa-bars"></i>
          )}
        </div>
      </div>
      <div className="nav-left">
        <Link to="/">Discover</Link>
        <Link to="/make-burger">Make Your Burger</Link>
      </div>
      <button>
        <i className="fa-solid fa-phone"></i>Call Me Back
      </button>
      <div className="nav-right">
        <a href="/">22F452296RF</a>
        <img src="./assets/avatar.svg" alt="" />
      </div>
    </nav>
  );
}

export default Navbar;
