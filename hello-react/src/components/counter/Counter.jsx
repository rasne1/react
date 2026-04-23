import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const onPlusButtonClickHandler = (event) => {
    console.log(event.target.value);
    return setCount(event.target + 1);
  };

  return (
    <>
      <button className="minus">-</button>
      <div className="counter" text={count}>
        {count}
      </div>
      <button className="plus" onClick={onPlusButtonClickHandler}>
        +
      </button>
    </>
  );
};
export default Counter;
