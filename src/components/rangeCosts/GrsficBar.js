import "./styles/graficBar.css";


export default function GraficBar(props) {

  return (
    <li className="bar" data-month={props.data}>
      <div className="level" style={{ height: props.height }}></div>
    </li>
  )
}