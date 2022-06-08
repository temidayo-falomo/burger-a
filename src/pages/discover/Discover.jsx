import React from "react";
import "./Discover.css";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import Hero from "../../components/hero/Hero";
import { useState } from "react";
import Loading from "../../components/loading/Loading";
import { useEffect } from "react";

function Discover() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1200);
  }, []);

  return (
    <div className="discover">
      {loading ? (
        <Loading />
      ) : (
        <>
          <Navbar />
          <Hero />
          <Footer />
        </>
      )}
    </div>
  );
}

export default Discover;
