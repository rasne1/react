import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const onButtonCLickHandler = (event) => {
    const className = event.target.classList.value;

    setCount((prevCount) => {
      if (className.includes("minus")) {
        if (prevCount === 0) {
          return prevCount;
        }
        return prevCount - 1;
      } else if (className.includes("plus")) {
        if (prevCount === 100) {
          return prevCount;
        }
        return prevCount + 1;
      }

      return prevCount;
    });
  };

  return (
    <div className="count">
      <button className="minus" onClick={onButtonCLickHandler}>
        -
      </button>
      <div className="counter" text={count}>
        {count}
      </div>
      <button className="plus" onClick={onButtonCLickHandler}>
        +
      </button>
    </div>
  );
};
export default Counter;
