import React from "react";
import { useContext } from "react";
import { CountContext } from "../../helper/Context";

function Onion() {
  const { getOnionCount, setGetOnionCount } = useContext(CountContext);

  const handleIncrement = () => {
    setGetOnionCount((count) => count + 1);
  };

  const handleDecrement = () => {
    setGetOnionCount((count) => count - 1);
  };

  return (
    <div className="count-box">
      <img src="./assets/onion.svg" alt="" />
      <h4>Onion</h4>
      <div className="count-div">
        {getOnionCount <= 0 ? (
          <button disabled>-</button>
        ) : (
          <button onClick={handleDecrement}>-</button>
        )}
        <h2>{getOnionCount}</h2>
        <button onClick={handleIncrement}>+</button>
      </div>
    </div>
  );
}

export default Onion;
