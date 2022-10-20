import React from "react";
import "./Burger.css";
import { useContext } from "react";
import { CountContext } from "../../helper/Context";
import { burgerObject } from "../../db/burgerObject";

function Burger() {
  const {
    getCutletCount,
    getMayoCount,
    getOnionCount,
    getTomatoCount,
    getCucumberCount,
    getCheeseCount,
    getSaladCount,
    getBunCount,
  } = useContext(CountContext);

  return (
    <div className="burger">
      <img src="./assets/bun_top.svg" alt="" className="bun-top"/>

      <div className="ingredients">
        {/* Cutlet Array */}
        {[...Array(burgerObject.cutlet + getCutletCount)].map((index) => {
          return (
            <div className="useimg" key={index}>
              <img src="./assets/cutlet.svg" alt="cutlet-pic" />
            </div>
          );
        })}

        {/* Mayo Array */}
        {[...Array(burgerObject.mayo + getMayoCount)].map((index) => {
          return (
            <div className="useimg" key={index}>
              <img src="./assets/mayo.svg" alt="mayo-pic" />
            </div>
          );
        })}

        {/* Onion Array */}
        {[...Array(burgerObject.onion + getOnionCount)].map((index) => {
          return (
            <div className="useimg" key={index}>
              <img src="./assets/onion.svg" alt="onion-pic" />
            </div>
          );
        })}

        {/* Tomato Array */}

        {[...Array(burgerObject.tomato + getTomatoCount)].map((index) => {
          return (
            <div className="useimg" key={index}>
              <img src="./assets/tomatoe.svg" alt="tomato-pic" />
            </div>
          );
        })}

        {/* Cucumber Array */}

        {[...Array(burgerObject.cucumber + getCucumberCount)].map((index) => {
          return (
            <div className="useimg" key={index}>
              <img src="./assets/cucumber.svg" alt="cucumber-pic" />
            </div>
          );
        })}

        {/* Cheese Array */}

        {[...Array(burgerObject.cheese + getCheeseCount)].map((index) => {
          return (
            <div className="useimg" key={index}>
              <img src="./assets/cheese.svg" alt="cheese-pic" />
            </div>
          );
        })}

        {/* Salad Array */}

        {[...Array(burgerObject.salad + getSaladCount)].map((index) => {
          return (
            <div className="useimg" key={index}>
              <img src="./assets/salad.svg" alt="salad-pic" />
            </div>
          );
        })}

        {/* Bun Array */}

        {[...Array(burgerObject.bun + getBunCount)].map((index) => {
          return (
            <div className="useimg" key={index}>
              <img src="./assets/bun_middle.svg" alt="mayo-pic" />
            </div>
          );
        })}
      </div>
      <img src="./assets/burger_bottom.svg" alt="" className="bun-bottom"/>
      <img src="./assets/ketchup.svg" alt="" className="ketchup" />
      <img src="./assets/comment.svg" alt="" className="comment" />
    </div>
  );
}

export default Burger;
