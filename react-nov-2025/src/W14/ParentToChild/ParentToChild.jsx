// Parent-to-Child Communication:
// The Parent holds state and passes it down to the Child as a prop.
import React, { useState, useEffect } from "react";
import "./ParentToChild.css";

// PARENT — owns the state and passes it down
export const ParentToChild = () => {
  const [count, setCount] = useState(0);

  const onHandleIncrement = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    console.log("Rendering Parent...");
  });

  return (
    <div className="ptc-wrapper">
      <div className="ptc-card">
        <h2 className="ptc-title">Parent to Child Example</h2>

        <p className="ptc-section-label">Parent Component (Data Owner)</p>
        <div className="ptc-inner-card">
          <p className="ptc-count-text">
            Count in Parent: <span className="ptc-highlight">{count}</span>
          </p>
          <button className="ptc-button" onClick={onHandleIncrement}>
            Update Count !!!!!!!!!!
          </button>
        </div>

        <p className="ptc-flow-label">↓ Props Flow Down ↓</p>

        <Child count={count} />
      </div>
    </div>
  );
};

// CHILD — receives data from the Parent via props, no state of its own
export const Child = ({ count }) => {
  useEffect(() => {
    console.log("Rendering Child...");
  });

  return (
    <div className="ptc-inner-card">
      <p className="ptc-section-label">Child Component (Data Receiver)</p>
      <p className="ptc-count-text">
        Count received from Parent: <span className="ptc-highlight">{count}</span>
      </p>
    </div>
  );
};
