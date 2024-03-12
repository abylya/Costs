import Grafic from "./Grafic";
import SelecktYear from "./SelecktYear";
import './styles/rangeCosts.css';
import WrapRadius from "../WrapRadius";
function RangeCosts(props) {


  return (
    <WrapRadius className='range-costs'>
      <SelecktYear costs={props.costs} />
      <Grafic />
    </WrapRadius>
  )
}

export default RangeCosts;