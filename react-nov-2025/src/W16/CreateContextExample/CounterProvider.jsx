import { createContext, useState } from 'react';

// 1. Create the context
export const CounterContext = createContext(null);

// 2. Provider component
export const CounterProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  const increment = () => setCount((prev) => prev + 1);

  return (
    <CounterContext.Provider value={{ count, increment }}>
      {children}
    </CounterContext.Provider>
  );
};


