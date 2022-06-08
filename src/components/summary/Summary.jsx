import React from "react";
import Modal from "../modal/Modal";
import { useContext } from "react";
import { CountContext } from "../../helper/Context";
import "./Summary.css";

function Summary() {
  const { showModal, setShowModal } = useContext(CountContext);

  const { getCutletId, setGetCutletId } = useContext(CountContext);
  const { getMayoId, setGetMayoId } = useContext(CountContext);
  const { getOnionId, setGetOnionId } = useContext(CountContext);
  const { getTomatoId, setGetTomatoId } = useContext(CountContext);
  const { getCucumberId, setGetCucumberId } = useContext(CountContext);
  const { getCheeseId, setGetCheeseId } = useContext(CountContext);
  const { getSaladId, setGetSaladId } = useContext(CountContext);
  const { getBunId, setGetBunId } = useContext(CountContext);

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
                {getCutletId +
                  getMayoId +
                  getOnionId +
                  getTomatoId +
                  getCucumberId +
                  getCheeseId +
                  getSaladId +
                  getBunId}.00
              </h4>
              <button onClick={handleClick}>Checkout</button>
            </div>
            <div className="summary-bottom">
              <p>
                <img src="./assets/min.svg" alt="" />
                <span>{getCutletId + 2}</span>
                <span>min</span>
              </p>
              <p>
                <img src="./assets/oz.svg" alt="" />
                <span>{getCutletId + getMayoId +getSaladId}.00 oz</span>
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
        <div className="summary">
          <div className="summary-top">
            <h3>Summary</h3>
          </div>
          <div className="summary-middle">
            <h4>
              $
              {getCutletId +
                getMayoId +
                getOnionId +
                getTomatoId +
                getCucumberId +
                getCheeseId +
                getSaladId +
                getBunId}.00
            </h4>
            <button onClick={handleClick}>Checkout</button>
          </div>
          <div className="summary-bottom">
            <p>
              <img src="./assets/min.svg" alt="" />
              <span>{getCutletId + 2}</span>
              <span>min</span>
            </p>
            <p>
              <img src="./assets/oz.svg" alt="" />
              <span>{getCutletId + getMayoId +getSaladId}.00</span>
              <span>oz</span>
            </p>
            <p>
              <img src="./assets/kcal.svg" alt="" />
              <span>{getCutletId * getMayoId * getSaladId * 5}</span>
              <span>kcal</span>
            </p>
          </div>
        </div>
      )}
    </>
  );
}

export default Summary;
