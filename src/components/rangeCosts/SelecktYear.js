
import WrapRadius from "../WrapRadius";
import './styles/selecktYear.css';
import { useState } from "react";
export default function SelecktYear(props) {
   let [inpYear, setInpYear] = useState('2024');
   function yearHandler(ev) {
      let year = ev.target.value;
      setInpYear(year);
      props.setYear(year);
   }

   return (
      < div className="seleckt-year">
         <label htmlFor="input-year" className="title">
            Выберите год
         </label>
         <WrapRadius className="output" >
            <input id="input-year" className="output-year" list="year" onChange={yearHandler} autoFocus value={inpYear} />
         </WrapRadius>

         <datalist className="list" id="year">
            {props.arrYear.map((cost) => {
               return <option key={cost} value={cost}></option>
            })}
         </datalist>

      </div>
   )
}