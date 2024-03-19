import WrapRadius from "../WrapRadius";
import "./styles/grafic.css";
import GraficBar from './GrsficBar';

export default function Grafic(props) {
  let arr = props.costs.map(cost => cost.value);
  let maxValue = Math.round(Math.max(...arr));

  //console.log(maxValue);

  return (
    <WrapRadius className='range-wrap'>
      <ul className="grafic-list">
        {props.costs.map((month) => {
          let height = '0%';
          height = month.value && month.value / maxValue * 100 + "%";
          //console.log(height);
          return <GraficBar key={month.label} data={month.label} height={height} />;
        })}
      </ul>
    </WrapRadius>
  )

}