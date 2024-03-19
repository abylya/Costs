import './styleCosts/Costs.css';
import WrapRadius from '../WrapRadius';
import { ContextCost } from '../../App';
import React, { useState } from 'react';
import List from './List';

function Costs(props) {
  //console.log(props.costs);
  let { setCostItem } = React.useContext(ContextCost);
  function addCostHandl() {
    let newDate = new Date();
    const year = newDate.getFullYear();
    const month = newDate.toLocaleString('ru-RU', { month: '2-digit' });
    const day = newDate.toLocaleString('ru-RU', { day: '2-digit' });
    let strDate = year + '-' + month + '-' + day;
    setCostItem((pr) => {
      return {
        ...pr,
        id: -1,
        date: strDate,
        discription: '',
        amount: '',
        showForm: 'block'
      }
    })
  }


  return (
    <WrapRadius className='flex'>
      <WrapRadius className='addCost' type='button' onClick={addCostHandl}>
        <button onClick={addCostHandl}>Добавить расход <span>+</span></button>
      </WrapRadius>
      <List costs={props.costs} deleteCost={props.deleteCost}></List>
    </WrapRadius>

  )

}

export default Costs;