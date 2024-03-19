

import Costs from './components/costs/Costs';
import RangeCosts from './components/rangeCosts/RangeCosts';
import FormRedactCost from './components/forms/FormRedactCost';
import React, { createContext, useState } from 'react';

export const ContextCost = createContext();

let costs = [
  { id: 0, date: new Date(2021, 3, 10), discription: 'Холодельник', amount: 500 },
  { id: 1, date: new Date(2024, 4, 3), discription: 'джинсы', amount: 60 },
  { id: 2, date: new Date(2024, 0, 22), discription: 'Чайник', amount: 100 },
];

function App() {
  let [selYear, setSelYear] = useState(new Date().getFullYear().toString());
  let [costArr, setCostArr] = useState(costs);

  // costs = costArr;
  let filterCosts = costArr.filter((cost) => cost.date.getFullYear().toString() === selYear)
  //console.log(costs);
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
        costData.id = arr.length;
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

  function deleteCost(id) {
    console.log(id);
    setCostArr((prev) => {
      let clon = [...prev]
      clon.splice(id, 1);
      for (let i = 0; i < clon.length; i++) {
        clon[i].id = i;
      }

      return clon;
    })

  }
  //console.log(costArr);
  return (
    <div>
      <RangeCosts costs={costArr} setYear={{ selYear, setSelYear }}></RangeCosts>
      <ContextCost.Provider value={{ costItem, setCostItem }}>
        <Costs costs={filterCosts} cost={costItem} deleteCost={deleteCost}></Costs>
        <FormRedactCost cost={costItem} upCostsHandler={upCosts} ></FormRedactCost>
      </ContextCost.Provider>
    </div>
  );
}


export default App;
