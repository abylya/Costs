import Grafic from "./Grafic";
import SelecktYear from "./SelecktYear";
import './styles/rangeCosts.css';
import WrapRadius from "../WrapRadius";


function RangeCosts(props) {
  const arrMont = [
    { label: 'янв', value: 0 },
    { label: "фев", value: 0 },
    { label: "мар", value: 0 },
    { label: "апр", value: 0 },
    { label: "май", value: 0 },
    { label: "июн", value: 0 },
    { label: "июл", value: 0 },
    { label: "авг", value: 0 },
    { label: "сен", value: 0 },
    { label: "окт", value: 0 },
    { label: "ноб", value: 0 },
    { label: "дек", value: 0 }
  ];
  let arrYear = props.costs.map(cost => cost.date.getFullYear().toString());
  arrYear = [...new Set(arrYear)];
  let filterCosts = props.costs.filter(cost => props.setYear.selYear === cost.date.getFullYear().toString());
  /*   let clonedArray = [...arrMont];
    filterCosts.forEach((cost) => {
      clonedArray[cost.date.getMonth()] = Object.assign({}, clonedArray[cost.date.getMonth()]);
      clonedArray[cost.date.getMonth()].value += cost.amount
    }) */
  filterCosts.forEach((cost) => {
    arrMont[cost.date.getMonth()].value += cost.amount;
  })

  //console.log(arrMont);
  return (
    <WrapRadius className='range-costs'>
      <SelecktYear arrYear={arrYear} setYear={props.setYear.setSelYear} />
      <Grafic costs={arrMont} />
    </WrapRadius>
  )
}

export default RangeCosts;