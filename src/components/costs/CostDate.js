import './styleCosts/CostDate.css';
import WrapRadius from '../WrapRadius';
import React from 'react';
function CostDate(props) {

  const year = props.date.getFullYear();
  const month = props.date.toLocaleString('ru-RU', { month: 'long' });
  const day = props.date.toLocaleString('ru-RU', { day: '2-digit' })


  return (

    <WrapRadius className="cost-date" >
      <div className="cost-date__month">{month}</div>
      <div className="cost-date__year">{year}</div>
      <div className="cost-date__day">{day}</div>
    </WrapRadius>


  )
}
export default CostDate;