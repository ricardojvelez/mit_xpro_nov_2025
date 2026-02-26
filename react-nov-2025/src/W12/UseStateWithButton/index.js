import React, { useState } from "react";

const UseStateWithButton = () => {
  const [bananas, setCount] = useState(0);

  //const [readOnlyVariable, variableToSetTheReadOnlyVariable] = useState('initialValue!!!')

  const onHandleIncrement = () => {
    console.log("I'm inside the handler!!! count is:", bananas);
    setCount(bananas + 1);
  };

  const onReset = () => {
    setCount(0);
  };

  return (
    <div>
      <p>Count: {bananas}</p>
      <button onClick={() => setCount(bananas + 2)}>Increment</button>
      <button onClick={onReset}>Reset</button>
    </div>
  );
};

export default UseStateWithButton;
