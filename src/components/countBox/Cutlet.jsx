import React from "react";
import { useContext } from "react";
import { CountContext } from "../../helper/Context";

function Cutlet() {
  const { getCutletCount, setGetCutletCount } = useContext(CountContext);

  const handleIncrement = () => {
    setGetCutletCount((count) => count + 1);
  };

  const handleDecrement = () => {
    setGetCutletCount((count) => count - 1);
  };

  return (
    <div className="count-box">
      <img src="./assets/cutlet.svg" alt="" />
      <h4>Culet</h4>
      <div className="count-div">
        {getCutletCount <= 0 ? (
          <button disabled>-</button>
        ) : (
          <button onClick={handleDecrement}>-</button>
        )}
        <h2>{getCutletCount}</h2>
        <button onClick={handleIncrement}>+</button>
      </div>
    </div>
  );
}

export default Cutlet;
