import React from "react";
import axios from "axios";
import { useContext } from "react";
import { CountContext } from "../../helper/Context";

function Cutlet() {
  const { getCutletId, setGetCutletId } = useContext(CountContext);

  let data = {
    id: getCutletId + 1,
    name: "Culet",
    image: "./assets/cutlet.svg",
  };

  //Handle Increment/Post data to jsonDB
  const handleIncrement = () => {
    axios
      .post("http://localhost:3500/cutlet", data)
      .then(window.location.reload());
  };

  //Handle Decrement/Delete data from jsonDB
  const handleDecrement = (id) => {
    axios
      .delete(`http://localhost:3500/cutlet/${Number(id)}`, data)
      .then(window.location.reload());
  };

  return (
    <div className="count-box">
      <img src="./assets/cutlet.svg" alt="" />
      <h4>Culet</h4>
      <div className="count-div">
        {getCutletId <= 0 ? (
          <button disabled>-</button>
        ) : (
          <button onClick={() => handleDecrement(data.id - 1)}>-</button>
        )}
        <h2>{getCutletId}</h2>
        <button onClick={() => handleIncrement()}>+</button>
      </div>
    </div>
  );
}

export default Cutlet;
