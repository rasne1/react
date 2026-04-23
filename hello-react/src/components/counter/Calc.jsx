import { useState } from "react";

const Calc = () => {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [number, setNumber] = useState(0);

  const onNumberChange = (event) => {
    setNum1(Number(event.target.value));
  };
  const onNumber2Change = (event) => {
    setNum2(Number(event.target.value));
  };

  const onPlusButtonClickHandler = () => {
    setNumber(num1 + num2);
  };
  const onMinusButtonClickHandler = () => {
    setNumber(num1 - num2);
  };
  const onTimesButtonClickHandler = () => {
    setNumber(num1 * num2);
  };
  const onDivideButtonClickHandler = () => {
    setNumber(num1 / num2);
  };

  return (
    <div className="count">
      <input type="text" onChange={onNumberChange} />
      <div className="buttons">
        <button onClick={onPlusButtonClickHandler}>+</button>
        <button onClick={onMinusButtonClickHandler}>-</button>
        <button onClick={onTimesButtonClickHandler}>x</button>
        <button onClick={onDivideButtonClickHandler}>/</button>
      </div>
      <input type="text" onChange={onNumber2Change} />
      <div className="result">{number}</div>
    </div>
  );
};
export default Calc;
