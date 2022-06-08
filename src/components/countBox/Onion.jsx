import axios from "axios";
import React from "react";
import { useContext } from "react";
import { CountContext } from "../../helper/Context";

function Onion() {
  const { getOnionId, setGetOnionId } = useContext(CountContext);

  let data = {
    id: getOnionId + 1,
    name: "onion",
    image: "./assets/onion.svg",
  };

  //Handle Increment/Post data to jsonDB
  const handleIncrement = () => {
    axios
      .post("http://localhost:3500/onion", data)
      .then(window.location.reload());
  };

  //Handle Decrement/Delete data from jsonDB
  const handleDecrement = (id) => {
    axios
      .delete(`http://localhost:3500/onion/${Number(id)}`, data)
      .then(window.location.reload());
  };

  return (
    <div className="count-box">
      <img src="./assets/onion.svg" alt="" />
      <h4>Onion</h4>
      <div className="count-div">
        {getOnionId <= 0 ? (
          <button disabled>-</button>
        ) : (
          <button onClick={() => handleDecrement(data.id - 1)}>-</button>
        )}
        <h2>{getOnionId}</h2>
        <button onClick={() => handleIncrement()}>+</button>
      </div>
    </div>
  );
}

export default Onion;
