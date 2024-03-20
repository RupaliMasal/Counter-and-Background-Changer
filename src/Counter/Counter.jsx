import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const addValue = () => {
    setCount(count + 1);
    // setCount(count + 1);
    // setCount(count + 1);
    // setCount(count + 1);//counterincrease only 1 bcoz batch
    // setCount((prevCount) => prevCount + 1);
    // setCount((prevCount) => prevCount + 1);
    // setCount((prevCount) => prevCount + 1);//count increase by 4 bcoz callback
    // setCount((prevCount) => prevCount + 1); //using callback function to increase count using previous value of the state.
  };
  const removeValue = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h1>Counter</h1>
      <p>Count: {count}</p>
      <button className="py-2 px-5 bg-violet-500 text-white font-semibold rounded-full shadow-md hover:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-400 focus:ring-opacity-75" onClick={addValue}>Increase</button>
      <button className="py-2 px-5 bg-violet-500 text-white font-semibold rounded-full shadow-md hover:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-400 focus:ring-opacity-75" onClick={removeValue}>Decrease</button>
    </div>
  );
};

export default Counter;
