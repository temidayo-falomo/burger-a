import React from "react";
import Modal from "../modal/Modal";
import { useContext } from "react";
import { CountContext } from "../../helper/Context";
import "./Summary.css";

function Summary() {
  const { showModal, setShowModal } = useContext(CountContext);

  const {
    getCutletCount,
    getMayoCount,
    getOnionCount,
    getTomatoCount,
    getCucumberCount,
    getCheeseCount,
    getSaladCount,
    getBunCount,
  } = useContext(CountContext);

  const handleClick = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      {showModal ? (
        <>
          <div className="summary">
            <div className="summary-top">
              <h3>Summary</h3>
            </div>
            <div className="summary-middle">
              <h4>
                $
                {getCutletCount +
                  getMayoCount +
                  getOnionCount +
                  getCucumberCount +
                  getCheeseCount +
                  getSaladCount +
                  getBunCount}
                .00
              </h4>
              <button onClick={handleClick}>Checkout</button>
            </div>
            <div className="summary-bottom">
              <p>
                <img src="./assets/min.svg" alt="" />
                <span>{getCutletCount + 2}</span>
                <span>min</span>
              </p>
              <p>
                <img src="./assets/oz.svg" alt="" />
                <span>{((getBunCount / 1) * getCutletCount) / 1}</span>
                <span>oz</span>
              </p>
              <p>
                <img src="./assets/kcal.svg" alt="" />
                <span>0</span>
                <span>kcal</span>
              </p>
            </div>
          </div>
          <Modal />
        </>
      ) : (
        // Same With Above
        <div className="summary">
          <div className="summary-top">
            <h3>Summary</h3>
          </div>
          <div className="summary-middle">
            <h4>
              $
              {getCutletCount +
                getMayoCount +
                getOnionCount +
                getCucumberCount +
                getCheeseCount +
                getSaladCount +
                getBunCount}
              .00
            </h4>
            <button onClick={handleClick}>Checkout</button>
          </div>
          <div className="summary-bottom">
            <p>
              <img src="./assets/min.svg" alt="" />
              <span>{getCutletCount + 2}</span>
              <span>min</span>
            </p>
            <p>
              <img src="./assets/oz.svg" alt="" />
              <span>{(((getBunCount / 2) * getCutletCount) / 2) * 2 + 1}</span>
              <span>oz</span>
            </p>
            <p>
              <img src="./assets/kcal.svg" alt="" />
              <span>
                {getMayoCount +
                  getBunCount +
                  getCheeseCount +
                  getCutletCount +
                  getTomatoCount}
              </span>
              <span>kcal</span>
            </p>
          </div>
        </div>
      )}
    </>
  );
}

export default Summary;
