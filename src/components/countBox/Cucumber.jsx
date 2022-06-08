import axios from "axios";
import React from "react";
import { useContext } from "react";
import { CountContext } from "../../helper/Context";

function Cucumber() {
  const { getCucumberId, setGetCucumberId } = useContext(CountContext);

  let data = {
    id: getCucumberId + 1,
    name: "cucumber",
    image: "./assets/cucumber.svg",
  };

  //Handle Increment/Post data to jsonDB
  const handleIncrement = () => {
    axios
      .post("http://localhost:3500/cucumber", data)
      .then(window.location.reload());
  };

  //Handle Decrement/Delete data from jsonDB
  const handleDecrement = (id) => {
    axios
      .delete(`http://localhost:3500/cucumber/${Number(id)}`, data)
      .then(window.location.reload());
  };

  return (
    <div className="count-box">
      <img src="./assets/cucumber.svg" alt="" />
      <h4>Cucumber</h4>
      <div className="count-div">
        {getCucumberId <= 0 ? (
          <button disabled>-</button>
        ) : (
          <button onClick={() => handleDecrement(data.id - 1)}>-</button>
        )}
        <h2>{getCucumberId}</h2>
        <button onClick={() => handleIncrement()}>+</button>
      </div>
    </div>
  );
}

export default Cucumber;
