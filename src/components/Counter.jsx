import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const decrease = () => {
    setCount(count - 1);
  };

  const increase = () => {
    setCount(count + 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div>
      <h1 className={count > 0 ? "inc" : count < 0 ? "dec" : ""}>{count}</h1>
      <button className="dec" onClick={() => decrease()}>
        Decrease
      </button>
      <button className="reset" onClick={() => reset()}>
        Reset
      </button>
      <button className="inc" onClick={() => increase()}>
        Increase
      </button>
    </div>
  );
};
export default Counter;

//display a counter with default value of 0
//create 3 buttons: increment, decrement, reset
//use useState hook to mutate the value of the counter
