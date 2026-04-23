import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const onPlusButtonClickHandler = () => {
    console.log("클릭됨");
    if (count < 100) {
      setCount(count + 1);
    }
  };

  const onMinusButtonClickHandler = () => {
    console.log("클릭됨");
    if (count >= 1) {
      setCount(count - 1);
    }
  };

  return (
    <div className="count">
      <button className="minus" onClick={onMinusButtonClickHandler}>
        -
      </button>
      <div className="counter" text={count}>
        {count}
      </div>
      <button className="plus" onClick={onPlusButtonClickHandler}>
        +
      </button>
    </div>
  );
};
export default Counter;
