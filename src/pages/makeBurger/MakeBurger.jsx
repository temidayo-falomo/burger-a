import React from "react";
import { useState } from "react";
import { CountContext } from "../../helper/Context";
import CountBoxes from "../../components/countBoxes/CountBoxes";
import MainBurgerSection from "../../components/mainBurgerSection/MainBurgerSection";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";

function MakeBurger() {
  const [getCutletId, setGetCutletId] = useState(0);
  const [getMayoId, setGetMayoId] = useState(0);
  const [getOnionId, setGetOnionId] = useState(0);
  const [getTomatoId, setGetTomatoId] = useState(0);
  const [getCucumberId, setGetCucumberId] = useState(0);
  const [getCheeseId, setGetCheeseId] = useState(0);
  const [getSaladId, setGetSaladId] = useState(0);
  const [getBunId, setGetBunId] = useState(0);
  const [showModal, setShowModal] = useState(false);

  return (
    <CountContext.Provider
      value={{
        getCutletId,
        setGetCutletId,
        getMayoId,
        setGetMayoId,
        getOnionId,
        setGetOnionId,
        getTomatoId,
        setGetTomatoId,
        getCucumberId,
        setGetCucumberId,
        getCheeseId,
        setGetCheeseId,
        getSaladId,
        setGetSaladId,
        getBunId,
        setGetBunId,
        showModal,
        setShowModal
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
