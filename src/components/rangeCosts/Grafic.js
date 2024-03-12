import WrapRadius from "../WrapRadius";
import "./styles/grafic.css";
const arrAmont = ['янв', "фев", "мар", "апр", "май", "июн", "июл", "авг", "сен", "окт", "ноб", "дек"];
export default function Grafic(props) {
  return (
    <WrapRadius className='range-wrap'>
      <ul>
        <li data-mont="va"></li>
        <li data-mont="va2"></li>
        <li data-mont="va3"></li>
      </ul>
    </WrapRadius>
  )

}