import React from "react";
import axios from "axios";
import "./Burger.css";
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { CountContext } from "../../helper/Context";

function Burger() {
  const [cutletList, setCutletList] = useState([]);
  const [mayoList, setMayoList] = useState([]);
  const [onionList, setOnionList] = useState([]);
  const [tomatoList, setTomatoList] = useState([]);
  const [cucumberList, setCucumberList] = useState([]);
  const [cheeseList, setCheeseList] = useState([]);
  const [saladList, setSaladList] = useState([]);
  const [bunList, setBunList] = useState([]);

  const { getCutletId, setGetCutletId } = useContext(CountContext);
  const { getMayoId, setGetMayoId } = useContext(CountContext);
  const { getOnionId, setGetOnionId } = useContext(CountContext);
  const { getTomatoId, setGetTomatoId } = useContext(CountContext);
  const { getCucumberId, setGetCucumberId } = useContext(CountContext);
  const { getCheeseId, setGetCheeseId } = useContext(CountContext);
  const { getSaladId, setGetSaladId } = useContext(CountContext);
  const { getBunId, setGetBunId } = useContext(CountContext);

  useEffect(() => {
    axios.all([
      axios
        .get("http://localhost:3500/cutlet")
        .then((res) => setCutletList(res.data.reverse())),
      axios
        .get("http://localhost:3500/mayo")
        .then((res) => setMayoList(res.data.reverse())),
      axios
        .get("http://localhost:3500/onion")
        .then((res) => setOnionList(res.data.reverse())),
      axios
        .get("http://localhost:3500/tomato")
        .then((res) => setTomatoList(res.data.reverse())),
      axios
        .get("http://localhost:3500/cucumber")
        .then((res) => setCucumberList(res.data.reverse())),
      axios
        .get("http://localhost:3500/cheese")
        .then((res) => setCheeseList(res.data.reverse())),
      axios
        .get("http://localhost:3500/salad")
        .then((res) => setSaladList(res.data.reverse())),
      axios
        .get("http://localhost:3500/bun")
        .then((res) => setBunList(res.data.reverse())),
    ]);
  }, []);

  return (
    <div className="burger">
      <img src="./assets/bun_top.svg" alt="" />

      <div className="ingredients">

        {cutletList.map((data, index) => {
          return (
            <div className="useimg" key={index + 1}>
              <img src={data.image} alt="" />
              {setGetCutletId(index + 1)}
            </div>
          );
        })}

        {mayoList.map((data, index) => {
          return (
            <div className="useimg" key={index + 1}>
              <img src={data.image} alt="" />
              {setGetMayoId(index + 1)}
            </div>
          );
        })}

        {onionList.map((data, index) => {
          return (
            <div className="useimg" key={index + 1}>
              <img src={data.image} alt="" />
              {setGetOnionId(index + 1)}
            </div>
          );
        })}

        {tomatoList.map((data, index) => {
          return (
            <div className="useimg" key={index + 1}>
              <img src={data.image} alt="" />
              {setGetTomatoId(index + 1)}
            </div>
          );
        })}

        {cucumberList.map((data, index) => {
          return (
            <div className="useimg" key={index + 1}>
              <img src={data.image} alt="" />
              {setGetCucumberId(index + 1)}
            </div>
          );
        })}

        {cheeseList.map((data, index) => {
          return (
            <div className="useimg" key={index + 1}>
              <img src={data.image} alt="" />
              {setGetCheeseId(index + 1)}
            </div>
          );
        })}

        {saladList.map((data, index) => {
          return (
            <div className="useimg" key={index + 1}>
              <img src={data.image} alt="" />
              {setGetSaladId(index + 1)}
            </div>
          );
        })}

        {bunList.map((data, index) => {
          return (
            <div className="useimg" key={index + 1}>
              <img src={data.image} alt="" />
              {setGetBunId(index + 1)}
            </div>
          );
        })}
        
      </div>
      <img src="./assets/burger_bottom.svg" alt="" />
      <img src="./assets/ketchup.svg" alt="" className="ketchup" />
      <img src="./assets/comment.svg" alt="" className="comment" />
    </div>
  );
}

export default Burger;
