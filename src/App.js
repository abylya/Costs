
//import React from 'react';
import Costs from './components/costs/Costs';
//import FormAddCost from './components/forms/FormAddCost';
import FormRedactCost from './components/forms/FormRedactCost';
import React, { createContext, useState } from 'react';

export const ContextCost = createContext();

let costs = [
  { id: 0, date: new Date(2021, 3, 10), discription: 'Холодельник', amount: 500 },
  { id: 1, date: new Date(2024, 4, 3), discription: 'джинсы', amount: 60 },
  { id: 2, date: new Date(2023, 0, 22), discription: 'Чайник', amount: 100 },
];

function App() {

  let [costArr, setCostArr] = useState(costs);
  costs = costArr;
  console.log(costs);
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

      <ContextCost.Provider value={{ costItem, setCostItem }}>
        <Costs costs={costs} cost={costItem}></Costs>
        <FormRedactCost cost={costItem} upCostsHandler={upCosts} ></FormRedactCost>

      </ContextCost.Provider>

    </div>
  );
}


export default App;
