import React from "react";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import './Privacy.css'

function Privacy() {
  return (
    <div className="privacy">
      <Navbar />
      <p className="privacy-text">
        A website’s privacy policy outlines how your site collects, uses,
        shares, and sells the personal information of your visitors. If you
        collect personal information from users, you need a privacy policy on
        your website in most jurisdictions. Even if you aren’t subject to
        privacy policy laws, being transparent with users about how you collect
        and handle their data is a best business practice in today’s digital
        world. Our simple privacy policy template will help you comply with
        strict privacy laws and build trust with your users.
      </p>
      <Footer />
    </div>
  );
}

export default Privacy;
