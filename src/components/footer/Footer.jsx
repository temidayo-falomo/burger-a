import React from "react";
import { Link } from "react-router-dom";
import { paymentImages } from "../data/PaymentImages";
import "./Footer.css";

function Footer() {
  return (
    <footer>
      <div className="footer-left">
        <p>2022. Make Your Burger</p>
        <Link to="/privacy-policy">Privacy Policy</Link>
        <span>|</span>
        <Link to="/terms&conditions">Terms & Conditions</Link>
      </div>
      <div className="footer-right">
        {paymentImages.map((data, index) => {
          return <img src={data.image} alt="" key={index} />;
        })}
      </div>
    </footer>
  );
}

export default Footer;
