import React from "react";
import { useContext } from "react";
import { CountContext } from "../../helper/Context";
import "./Modal.css";

function Modal() {
  const { showModal, setShowModal } = useContext(CountContext);

  const { getCutletCount, setGetCutletCount } = useContext(CountContext);
  const { getMayoCount, setGetMayoCount } = useContext(CountContext);
  const { getOnionCount, setGetOnionCount } = useContext(CountContext);
  const { getTomatoCount, setGetTomatoCount } = useContext(CountContext);
  const { getCucumberCount, setGetCucumberCount } = useContext(CountContext);
  const { getCheeseCount, setGetCheeseCount } = useContext(CountContext);
  const { getSaladCount, setGetSaladCount } = useContext(CountContext);
  const { getBunCount, setGetBunCount } = useContext(CountContext);

  return (
    <div className="modal">
      <div className="modal-box">
        <div className="modal-box-top">
          <h4>CheckBox</h4>
          <i
            className="fa-solid fa-xmark"
            onClick={() => setShowModal(!showModal)}
            style={{ cursor: "pointer", fontSize: "1.1rem" }}
          ></i>
        </div>
        <div className="modal-box-content">
          <p style={{ marginBottom: "10px" }}>Your Hamburger Ingridients:</p>
          <ul>
            <li>{getCutletCount} Cutlet(s)</li>
            <li>{getMayoCount} Mayo spread(s)</li>
            <li>{getOnionCount} Onion(s)</li>
            <li>{getTomatoCount} Tomato(es)</li>
            <li>{getCucumberCount} Cucumber(s)</li>
            <li>{getCheeseCount} Cheese</li>
            <li>{getSaladCount} Salad(s)</li>
            <li>{getBunCount} Extra Bun(s)</li>
            <button onClick={() => alert("Would Integrate Payment soon!")}>
              Pay
            </button>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Modal;
