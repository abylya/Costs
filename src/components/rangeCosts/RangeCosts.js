import Grafic from "./Grafic";
import SelecktYear from "./SelecktYear";
import './styles/rangeCosts.css';
import WrapRadius from "../WrapRadius";
function RangeCosts(props) {


  return (
    <WrapRadius className='range-costs'>
      <SelecktYear costs={props.costs} setYear={props.setYear} />
      <Grafic costs={props.costs} />
    </WrapRadius>
  )
}

export default RangeCosts;