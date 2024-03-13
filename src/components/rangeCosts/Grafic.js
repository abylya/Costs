import WrapRadius from "../WrapRadius";
import "./styles/grafic.css";
const arrMont = ['янв', "фев", "мар", "апр", "май", "июн", "июл", "авг", "сен", "окт", "ноб", "дек"];
export default function Grafic(props) {
  return (
    <WrapRadius className='range-wrap'>
      <ul>
        {arrMont.map((month) => {
          return <li key={month} data-month={month}><div></div></li>;
        })}
      </ul>
    </WrapRadius>
  )

}