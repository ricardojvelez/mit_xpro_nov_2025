import React, { useState, useEffect } from "react";

const UseEffectWithCountTracker = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("I'm in the useEffect")
    document.title = `You clicked ${count} times`;
  }, [count]);

  const handleClick = () => {
    console.log("I'm in the handleClick")
    setCount(count + 1)
  }

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
};

export default UseEffectWithCountTracker;


  /* 
  const [bananas, setBananas] = useState(2);

  useEffect(() => {
    //logic that will happen when dependencies change
  }, [dependencies])
  */