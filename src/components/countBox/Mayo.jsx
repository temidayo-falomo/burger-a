import axios from "axios";
import React from "react";
import { useContext } from "react";
import { CountContext } from "../../helper/Context";

function Mayo() {
  const { getMayoId, setGetMayoId } = useContext(CountContext);

  let data = {
    id: getMayoId + 1,
    name: "mayo",
    image: "./assets/mayo.svg",
  };

  //Handle Increment/Post data to jsonDB
  const handleIncrement = () => {
    axios
      .post("http://localhost:3500/mayo", data)
      .then(window.location.reload());
  };

  //Handle Decrement/Delete data from jsonDB
  const handleDecrement = (id) => {
    axios
      .delete(`http://localhost:3500/mayo/${Number(id)}`, data)
      .then(window.location.reload());
  };

  return (
    <div className="count-box">
      <img src="./assets/mayo.svg" alt="" />
      <h4>Mayo</h4>
      <div className="count-div">
        {getMayoId <= 0 ? (
          <button disabled>-</button>
        ) : (
          <button onClick={() => handleDecrement(data.id - 1)}>-</button>
        )}
        <h2>{getMayoId}</h2>
        <button onClick={() => handleIncrement()}>+</button>
      </div>
    </div>
  );
}

export default Mayo;
