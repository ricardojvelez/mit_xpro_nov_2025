// Child-to-Parent Communication:
// The Parent passes a callback function as a prop so the Child can send data back up.
import React, { useState, useEffect } from "react";
import "./ChildToParent.css";

// PARENT — owns the shared state and passes a callback down to the Child
export const ChildToParent = () => {
  const [childData, setChildData] = useState("");

  // The Child will call this whenever its input changes
  const handleChildDataChange = (newData) => {
    setChildData(newData);
  };

  useEffect(() => {
    console.log("Rendering Parent...");
  });

  return (
    <div className="ctc-wrapper">
      <div className="ctc-card">
        <h2 className="ctc-title">Child to Parent Example</h2>

        <p className="ctc-section-label">Parent Component (Data Receiver)</p>
        <div className="ctc-inner-card">
          <p className="ctc-data-text">
            Data received from Child: <span className="ctc-highlight">{childData || "nothing yet..."}</span>
          </p>
        </div>

        <p className="ctc-flow-label">↑ Data Flows Up ↑</p>

        <Child onDataChange={handleChildDataChange} />
      </div>
    </div>
  );
};

// CHILD — calls the parent's callback to send data up
export const Child = ({ onDataChange }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    const newValue = e.target.value;
    setInputValue(newValue);  // update local state
    onDataChange(newValue);   // notify the Parent
  };

  useEffect(() => {
    console.log("Rendering Child...");
  });

  return (
    <div className="ctc-inner-card">
      <p className="ctc-section-label">Child Component (Data Owner)</p>
      <input
        className="ctc-input"
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Type something..."
      />
    </div>
  );
};
