import { useContext } from 'react';
import { CounterContext } from './CounterProvider';

export const ComponentB = () => {
  const { count, increment } = useContext(CounterContext);

  return (
    <div className="component-container">
      <h2>Component B with Context</h2>
      <p>Count in B: {count}</p>
      <button onClick={increment}>Increment from B</button>
    </div>
  );
}; 