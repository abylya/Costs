import './styleCosts/Costs.css';
import CostItem from './CostItem';
import WrapRadius from '../WrapRadius';
import { ContextCost } from '../../App';
import React from 'react';
function Costs(props) {
  //console.log(props.costs);
  let { setCostItem } = React.useContext(ContextCost);
  function addCostHandl() {
    setCostItem((pr) => {
      return {
        ...pr,
        id: undefined,
        date: '',
        discription: '',
        amount: '',
        showForm: 'block'
      }
    })
  }



  return (
    <WrapRadius className='costs-backg flex'>
      <WrapRadius className='addCost' type='button' onClick={addCostHandl}>
        <button onClick={addCostHandl}>Добавить расход <span>+</span></button>
      </WrapRadius>
      {props.costs.map((prop) => <CostItem key={prop.id} id={prop.id} date={prop.date} discription={prop.discription} amount={prop.amount} />)}

    </WrapRadius>

  )

}

export default Costs;