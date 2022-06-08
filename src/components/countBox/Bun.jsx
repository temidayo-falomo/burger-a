import axios from "axios";
import React from "react";
import { useContext } from "react";
import { CountContext } from "../../helper/Context";

function Bun() {
  const { getBunId, setGetBunId } = useContext(CountContext);

  let data = {
    id: getBunId + 1,
    name: "bun",
    image: "./assets/bun_middle.svg",
  };

  //Handle Increment/Post data to jsonDB
  const handleIncrement = () => {
    axios
      .post("http://localhost:3500/bun", data)
      .then(window.location.reload());
  };

  //Handle Decrement/Delete data from jsonDB
  const handleDecrement = (id) => {
    axios
      .delete(`http://localhost:3500/bun/${Number(id)}`, data)
      .then(window.location.reload());
  };

  return (
    <div className="count-box">
      <img src="./assets/bun_middle.svg" alt="" />
      <h4>Bun(Extra)</h4>
      <div className="count-div">
        {getBunId <= 0 ? (
          <button disabled>-</button>
        ) : (
          <button onClick={() => handleDecrement(data.id - 1)}>-</button>
        )}
        <h2>{getBunId}</h2>
        <button onClick={() => handleIncrement()}>+</button>
      </div>
    </div>
  );
}

export default Bun;
