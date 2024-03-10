import './styleForms/redactCost.css';
import WrapRadius from "../WrapRadius";

function FormAddCost() {

  let formBlock = document.querySelector('.fix')
  function closeHandler(ev) {
    ev.preventDefault();
    // document.querySelector('.fix').style.display = 'none';
  }

  function resetHandl(ev) {
    ev.preventDefault();
    //let formBlock = document.querySelector('.fix');
    // formBlock.style.display = 'none';

  }
  function submitHandl(ev) {
    ev.preventDefault();
    //let formBlock = document.querySelector('.fix')
    // formBlock.style.display = 'none';
    // formBlock.querySelector('.input-date input').value = '';
    // formBlock.querySelector('.input-discript input').value = '';
    // formBlock.querySelector('.input-cost input').value = '';
  }

  return (
    <div className='fix addCost'>
      <button type='button' id='closeFormAdd' className="close" onClick={closeHandler} >X</button>
      <form action="#">
        <WrapRadius className='form-block'>
          <div className="inputs">
            <div className="input-date">
              <label>Дата</label>
              <input type='date' />
            </div>
            <div className="input-discript">
              <label>Покупка</label>
              <input type="text" />
            </div>
            <div className="input-cost">
              <label>Стоимость</label>
              <input type='number' mim='0,01' step='0,01' />
            </div>
          </div>
          <div className="buttons-block">
            <button type="reset" className="wrap-radius" onClick={resetHandl}>Отмена</button>
            <button type="submit" className="wrap-radius" onClick={submitHandl}>Добавить расход</button>
          </div>
        </WrapRadius>
      </form>
    </div>
  )
}

export default FormAddCost;