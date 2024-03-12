
import WrapRadius from "../WrapRadius";
import './styles/selecktYear.css';
import { useState } from "react";
export default function SelecktYear(props) {
   let [isShow, setIsShow] = useState('hidden');
   function arrowHandler() {
      setIsShow((prev) => {
         return prev === 'hidden' ? 'show' : 'hidden';
      })
   }
   return (
      < div className="seleckt-year">
         <label htmlFor="input-year" className="title">
            Выберите год
         </label>
         <WrapRadius className="output" >
            <input id="input-year" className="output-year" list="year" onClick={arrowHandler} />
         </WrapRadius>

         <datalist className="list" id="year">
            {props.costs.map((cost) => {
               let date = cost.date;
               let year = date.getFullYear();
               return <option key={cost.id} value={year}></option>
            })}
         </datalist>

      </div>
   )
}