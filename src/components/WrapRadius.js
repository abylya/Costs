import './wrapRadius.css';
function WrapRadius(props) {
  let classes = 'wrap-radius ' + props.className;
  return (
    <div className={classes}>{props.children}</div>
  )
}

export default WrapRadius;