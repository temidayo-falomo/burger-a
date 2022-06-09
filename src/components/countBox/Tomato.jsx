import React from "react";
import { useContext } from "react";
import { CountContext } from "../../helper/Context";

function Tomato() {
  const { getTomatoCount, setGetTomatoCount } = useContext(CountContext);

  const handleIncrement = () => {
    setGetTomatoCount((count) => count + 1);
  };

  const handleDecrement = () => {
    setGetTomatoCount((count) => count - 1);
  };

  return (
    <div className="count-box">
      <img src="./assets/tomatoe.svg" alt="" />
      <h4>Tomato</h4>
      <div className="count-div">
        {getTomatoCount <= 0 ? (
          <button disabled>-</button>
        ) : (
          <button onClick={handleDecrement}>-</button>
        )}
        <h2>{getTomatoCount}</h2>
        <button onClick={handleIncrement}>+</button>
      </div>
    </div>
  );
}

export default Tomato;
