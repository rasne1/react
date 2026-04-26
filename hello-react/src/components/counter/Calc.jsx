import { useState } from "react";

const Calc = () => {
  const [{ num1, num2, number }, setNums] = useState({
    num1: 10,
    num2: 20,
    number: 30,
  });
  //   const [num1, setNum1] = useState(0);
  //   const [num2, setNum2] = useState(0);
  //   const [number, setNumber] = useState(0);

  const onNumberChange = (event) => {
    //setNums(Number(event.target.value));
    setNums((prevNums) => {
      const newNums = { ...prevNums, num1: parseInt(event.target.value) };
      return newNums;
    });
  };
  const onNumber2Change = (event) => {
    //setNums(Number(event.target.value));
    setNums((prevNums) => {
      const newNums = { ...prevNums, num2: parseInt(event.target.value) };
      return newNums;
    });
  };

  const onCalcButtonClickHandler = (operator) => {
    let number = 0;

    if (operator === "+") {
      number = num1 + num2;
    } else if (operator === "-") {
      number = num1 - num2;
    } else if (operator === "*") {
      number = num1 * num2;
    } else if (operator === "/") {
      number = num1 / num2;
    }
    setNums((prevNums) => {
      const newNums = { ...prevNums, number };
      return newNums;
    });
  };

  return (
    <div className="count">
      <input type="text" value={num1} onChange={onNumberChange} />
      <div className="buttons">
        <button onClick={onCalcButtonClickHandler.bind(this, "+")}>+</button>
        <button onClick={onCalcButtonClickHandler.bind(this, "-")}>-</button>
        <button onClick={onCalcButtonClickHandler.bind(this, "*")}>x</button>
        <button onClick={onCalcButtonClickHandler.bind(this, "/")}>/</button>
      </div>
      <input type="text" value={num2} onChange={onNumber2Change} />
      <div className="result">{number}</div>
    </div>
  );
};
export default Calc;
