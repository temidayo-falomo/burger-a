import React from 'react'
import { useContext } from 'react';
import { CountContext } from '../../helper/Context';

function Cheese() {
  const { getCheeseCount, setGetCheeseCount } = useContext(CountContext);

  const handleIncrement = () => {
    setGetCheeseCount((count) => count + 1);
  };

  const handleDecrement = () => {
    setGetCheeseCount((count) => count - 1);
  };

  return (
    <div className="count-box">
      <img src="./assets/cheese.svg" alt="" />
      <h4>Cheese</h4>
      <div className="count-div">
        {getCheeseCount <= 0 ? (
          <button disabled>-</button>
        ) : (
          <button onClick={handleDecrement}>-</button>
        )}
        <h2>{getCheeseCount}</h2>
        <button onClick={handleIncrement}>+</button>
      </div>
    </div>
  );
}

export default Cheese