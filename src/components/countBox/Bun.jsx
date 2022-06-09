import React from "react";
import { useContext } from "react";
import { CountContext } from "../../helper/Context";

function Bun() {
  const { getBunCount, setGetBunCount } = useContext(CountContext);

  const handleIncrement = () => {
    setGetBunCount((count) => count + 1);
  };

  const handleDecrement = () => {
    setGetBunCount((count) => count - 1);
  };

  return (
    <div className="count-box">
      <img src="./assets/bun_middle.svg" alt="" />
      <h4>Bun(Extra)</h4>
      <div className="count-div">
        {getBunCount <= 0 ? (
          <button disabled>-</button>
        ) : (
          <button onClick={handleDecrement}>-</button>
        )}
        <h2>{getBunCount}</h2>
        <button onClick={handleIncrement}>+</button>
      </div>
    </div>
  );
}

export default Bun;
