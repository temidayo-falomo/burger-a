import React from "react";
import { useContext } from "react";
import { CountContext } from "../../helper/Context";
import "./Modal.css";

function Modal() {
  const { showModal, setShowModal } = useContext(CountContext);

  const { getCutletId, setGetCutletId } = useContext(CountContext);
  const { getMayoId, setGetMayoId } = useContext(CountContext);
  const { getOnionId, setGetOnionId } = useContext(CountContext);
  const { getTomatoId, setGetTomatoId } = useContext(CountContext);
  const { getCucumberId, setGetCucumberId } = useContext(CountContext);
  const { getCheeseId, setGetCheeseId } = useContext(CountContext);
  const { getSaladId, setGetSaladId } = useContext(CountContext);
  const { getBunId, setGetBunId } = useContext(CountContext);

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
            <li>{getCutletId} Cutlet(s)</li>
            <li>{getMayoId} helping(s) of Mayo</li>
            <li>{getOnionId} Onion(s)</li>
            <li>{getTomatoId} Tomato(es)</li>
            <li>{getCucumberId} Cucumber(s)</li>
            <li>{getCheeseId} Cheese</li>
            <li>{getSaladId} Salad(s)</li>
            <li>{getBunId} Extra Bun(s)</li>
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
