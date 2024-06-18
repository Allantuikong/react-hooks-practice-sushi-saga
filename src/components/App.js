import React, { useState, useEffect } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  const [sushis, setSushis] = useState([]);
  const [eatenSushis, setEatenSushis] = useState([]);
  const [money, setMoney] = useState(100);

  useEffect(() => {
    fetch(API)
      .then(response => response.json())
      .then(data => setSushis(data));
  }, []);

  const eatSushi = (sushi) => {
    if (money >= sushi.price) {
      setEatenSushis([...eatenSushis, sushi]);
      setMoney(money - sushi.price);
    } else {
      alert("Not enough money!");
    }
  };

  return (
    <div className="app">
      <SushiContainer sushis={sushis} eatenSushis={eatenSushis} eatSushi={eatSushi} />
      <Table plates={eatenSushis} money={money} />
    </div>
  );
}

export default App;

