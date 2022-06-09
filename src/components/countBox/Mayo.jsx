import React from "react";
import { useContext } from "react";
import { CountContext } from "../../helper/Context";

function Mayo() {
  const { getMayoCount, setGetMayoCount } = useContext(CountContext);

  const handleIncrement = () => {
    setGetMayoCount((count) => count + 1);
  };

  const handleDecrement = () => {
    setGetMayoCount((count) => count - 1);
  };

  return (
    <div className="count-box">
      <img src="./assets/mayo.svg" alt="" />
      <h4>Mayo</h4>
      <div className="count-div">
        {getMayoCount <= 0 ? (
          <button disabled>-</button>
        ) : (
          <button onClick={handleDecrement}>-</button>
        )}
        <h2>{getMayoCount}</h2>
        <button onClick={handleIncrement}>+</button>
      </div>
    </div>
  );
}

export default Mayo;
