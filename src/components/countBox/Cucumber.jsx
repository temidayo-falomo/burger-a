import React from "react";
import { useContext } from "react";
import { CountContext } from "../../helper/Context";

function Cucumber() {
  const { getCucumberCount, setGetCucumberCount } = useContext(CountContext);

  const handleIncrement = () => {
    setGetCucumberCount((count) => count + 1);
  };

  const handleDecrement = () => {
    setGetCucumberCount((count) => count - 1);
  };

  return (
    <div className="count-box">
      <img src="./assets/cucumber.svg" alt="" />
      <h4>Cucumber</h4>
      <div className="count-div">
        {getCucumberCount <= 0 ? (
          <button disabled>-</button>
        ) : (
          <button onClick={handleDecrement}>-</button>
        )}
        <h2>{getCucumberCount}</h2>
        <button onClick={handleIncrement}>+</button>
      </div>
    </div>
  );
}

export default Cucumber;
