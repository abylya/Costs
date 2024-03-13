

import Costs from './components/costs/Costs';
import RangeCosts from './components/rangeCosts/RangeCosts';
import FormRedactCost from './components/forms/FormRedactCost';
import React, { createContext, useState } from 'react';
import SelecktYear from './components/rangeCosts/SelecktYear';

export const ContextCost = createContext();

let costs = [
  { id: 0, date: new Date(2021, 3, 10), discription: 'Холодельник', amount: 500 },
  { id: 1, date: new Date(2024, 4, 3), discription: 'джинсы', amount: 60 },
  { id: 2, date: new Date(2024, 0, 22), discription: 'Чайник', amount: 100 },
];

function App() {
  let [selYear, setSelYear] = useState(new Date().getFullYear().toString());
  let [costArr, setCostArr] = useState(costs);
  costs = costArr;
  let filterCosts = costs.filter((cost) => cost.date.getFullYear().toString() === selYear)

  function upCosts(costData) {
    //costs[costData.id] = costData;
    let isPush = true;
    setCostArr((val) => {
      let arr = val.map((obj) => {
        if (costData.id === obj.id) {
          obj = costData;
          isPush = false;
          //console.log(obj);
        }
        return obj;
      });
      if (isPush) {
        let index = arr.length;
        costData.id = index;
        arr.push(costData);
      }
      return arr;
    });

  }
  let [costItem, setCostItem] = useState(
    {
      id: '',
      date: '',
      discription: '',
      amount: '',
      showForm: 'none'
    });


  return (
    <div>
      <RangeCosts costs={filterCosts} setYear={setSelYear}></RangeCosts>
      <ContextCost.Provider value={{ costItem, setCostItem }}>
        <Costs costs={filterCosts} cost={costItem}></Costs>
        <FormRedactCost cost={costItem} upCostsHandler={upCosts} ></FormRedactCost>
      </ContextCost.Provider>

    </div>
  );
}


export default App;
