import React from "react";
import { useState } from "react";
import { CountContext } from "../../helper/Context";
import CountBoxes from "../../components/countBoxes/CountBoxes";
import MainBurgerSection from "../../components/mainBurgerSection/MainBurgerSection";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";

function MakeBurger() {
  const [getCutletCount, setGetCutletCount] = useState(0);
  const [getMayoCount, setGetMayoCount] = useState(0);
  const [getOnionCount, setGetOnionCount] = useState(0);
  const [getTomatoCount, setGetTomatoCount] = useState(0);
  const [getCucumberCount, setGetCucumberCount] = useState(0);
  const [getCheeseCount, setGetCheeseCount] = useState(0);
  const [getSaladCount, setGetSaladCount] = useState(0);
  const [getBunCount, setGetBunCount] = useState(0);
  const [showModal, setShowModal] = useState(false);

  return (
    <CountContext.Provider
      value={{
        getCutletCount,
        setGetCutletCount,
        getMayoCount,
        setGetMayoCount,
        getOnionCount,
        setGetOnionCount,
        getTomatoCount,
        setGetTomatoCount,
        getCucumberCount,
        setGetCucumberCount,
        getCheeseCount,
        setGetCheeseCount,
        getSaladCount,
        setGetSaladCount,
        getBunCount,
        setGetBunCount,
        showModal,
        setShowModal,
      }}
    >
      <Navbar />
      <MainBurgerSection />
      <CountBoxes />
      <Footer />
    </CountContext.Provider>
  );
}

export default MakeBurger;
