import React from "react";
import { useContext } from "react";
import { CountContext } from "../../helper/Context";

function Salad() {
  const { getSaladCount, setGetSaladCount } = useContext(CountContext);

  const handleIncrement = () => {
    setGetSaladCount((count) => count + 1);
  };

  const handleDecrement = () => {
    setGetSaladCount((count) => count - 1);
  };

  return (
    <div className="count-box">
      <img src="./assets/salad.svg" alt="" />
      <h4>Salad</h4>
      <div className="count-div">
        {getSaladCount <= 0 ? (
          <button disabled>-</button>
        ) : (
          <button onClick={handleDecrement}>-</button>
        )}
        <h2>{getSaladCount}</h2>
        <button onClick={handleIncrement}>+</button>
      </div>
    </div>
  );
}

export default Salad;
