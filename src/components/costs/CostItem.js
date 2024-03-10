import './styleCosts/CostItem.css';
import CostDate from './CostDate';
import WrapRadius from '../WrapRadius';
import { ContextCost } from '../../App';
import React from 'react';


function CostItem(props) {
  let { setCostItem } = React.useContext(ContextCost);
  //console.log(costItem);


  function redactHandler() {
    const year = props.date.getFullYear();
    const month = props.date.toLocaleString('ru-RU', { month: '2-digit' });
    const day = props.date.toLocaleString('ru-RU', { day: '2-digit' });
    let strDate = year + '-' + month + '-' + day;
    setCostItem((val) => {
      return {
        ...val,
        id: props.id,
        date: strDate,
        discription: props.discription,
        amount: props.amount,
        showForm: 'block'
      }
    });
  }

  function delitHandler() {

  }

  return (
    <WrapRadius className='cost-block'>
      <CostDate date={props.date} />

      <button type='button' className='wrap-radius' onClick={redactHandler}>Редактировать</button>
      <button type='button' className='wrap-radius' onClick={delitHandler}>Удалить</button>

      <div className='cost-item'>
        <WrapRadius className='cost-item__cost'>${props.amount}</WrapRadius>
        <div className='cost-item__discript'>{props.discription}</div>
      </div>
    </WrapRadius>
  )
}

export default CostItem;