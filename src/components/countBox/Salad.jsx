import axios from "axios";
import React from "react";
import { useContext } from "react";
import { CountContext } from "../../helper/Context";

function Salad() {
  const { getSaladId, setGetSaladId } = useContext(CountContext);

  let data = {
    id: getSaladId + 1,
    name: "salad",
    image: "./assets/salad.svg",
  };

  //Handle Increment/Post data to jsonDB
  const handleIncrement = () => {
    axios
      .post("http://localhost:3500/salad", data)
      .then(window.location.reload());
  };

  //Handle Decrement/Delete data from jsonDB
  const handleDecrement = (id) => {
    axios
      .delete(`http://localhost:3500/salad/${Number(id)}`, data)
      .then(window.location.reload());
  };

  return (
    <div className="count-box">
      <img src="./assets/salad.svg" alt="" />
      <h4>Salad</h4>
      <div className="count-div">
        {getSaladId <= 0 ? (
          <button disabled>-</button>
        ) : (
          <button onClick={() => handleDecrement(data.id - 1)}>-</button>
        )}
        <h2>{getSaladId}</h2>
        <button onClick={() => handleIncrement()}>+</button>
      </div>
    </div>
  );
}

export default Salad;
