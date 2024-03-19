import WrapRadius from "../WrapRadius";
import "./styleForms/redactCost.css";
import React from 'react';
import { ContextCost } from "../../App";

function FormRedactCost(props) {
  let { costItem, setCostItem } = React.useContext(ContextCost);
  let submitName = costItem.id >= 0 ? 'изменить' : 'добавить';
  //console.log(costItem.showForm);
  function closeHandler(ev) {
    //ev.preventDefault();
    setCostItem((val) => {
      return {
        ...val,
        showForm: 'none'
      }
    })
  }

  function resetHandl(ev) {
    ev.preventDefault();
    setCostItem((val) => {
      return {
        ...val,
        showForm: 'none'
      }
    })
  }
  function submitHandl(ev) {
    ev.preventDefault();
    let obj = costItem;
    obj.date = new Date(obj.date);
    obj.amount = Number(obj.amount);
    delete obj.showForm;
    props.upCostsHandler(obj);
    setCostItem((pr) => {
      return {
        ...pr,
        showForm: 'none'
      }
    })
    //console.log(obj);
  }

  function chengeHandler(ev) {
    ev.preventDefault();
    let name = ev.target.id
    if (name === 'amount') ev.target.value = Number(ev.target.value);
    setCostItem((prev) => {

      return {
        ...prev,
        [name]: ev.target.value
      }
    });
  }




  return (
    <div className='fix redactCost' style={{ display: costItem.showForm }} >
      <button type='button' className="close" onClick={closeHandler}>X</button>
      <form action="#" onSubmit={submitHandl}>

        <WrapRadius className='form-block'>

          <div className="inputs" >

            <div className="input-date">
              <label>Дата</label>
              <input type='date' id='date' value={costItem.date} onChange={chengeHandler} />
            </div>
            <div className="input-discript">
              <label>Покупка</label>
              <input type="text" id='discription' value={costItem.discription} onChange={chengeHandler} />
            </div>
            <div className="input-cost">
              <label>Стоимость</label>
              <input type='number' id='amount' mim='0,01' step='0,01' value={costItem.amount} onChange={chengeHandler} />
            </div>

          </div>
          <div className="buttons-block">
            <button type="reset" className="wrap-radius" onClick={resetHandl}>Отмена</button>
            <button type="submit" className="wrap-radius" >{submitName}</button>
          </div>
        </WrapRadius>
      </form>
    </ div >
  );
}

export default FormRedactCost;