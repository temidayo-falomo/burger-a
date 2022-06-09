import React from "react";
import { Link } from "react-router-dom";
import "./Hero.css";

function Hero() {
  return (
    <div className="hero">
      <div className="hero-left">
        <h1>Make Your Burger</h1>
      </div>

      <div className="hero-right">
        <img src="./assets/main-img.png" alt="" rel="preload" as="image" />
        <Link to="/make-burger">
          <button className="hero-btn">Make Burger</button>
        </Link>
      </div>
    </div>
  );
}

export default Hero;
