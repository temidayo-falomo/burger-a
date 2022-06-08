import React from "react";
import Cutlet from "../countBox/Cutlet";
import "./CountBoxes.css";
import "../countBox/CountBox.css";
import Mayo from "../countBox/Mayo";
import Onion from "../countBox/Onion";
import Tomato from "../countBox/Tomato";
import Cucumber from "../countBox/Cucumber";
import Cheese from "../countBox/Cheese";
import Salad from "../countBox/Salad";
import Bun from "../countBox/Bun";

function CountBoxes() {
  return (
    <div className="count-boxes">
      <Cutlet />
      <Mayo />
      <Onion />
      <Tomato />
      <Cucumber />
      <Cheese />
      <Salad />
      <Bun />
    </div>
  );
}

export default CountBoxes;
