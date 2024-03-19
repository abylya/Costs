import CostItem from "./CostItem";
import './styleCosts/list.css';
export default function List(props) {

  let costsContent = <li>"В этом году расходов нет"</li>
  if (props.costs.length > 0) {
    costsContent = props.costs.map((prop) => {
      return <CostItem key={prop.id} id={prop.id} date={prop.date} discription={prop.discription} amount={prop.amount} deleteCost={props.deleteCost} />
    }
    )
  }
  return (
    <ul className="list-costs">
      {costsContent}
    </ul>
  )
}