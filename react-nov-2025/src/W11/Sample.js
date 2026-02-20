import React from "react";

const Sample = ({isButtonDisabled}) => {

  return (
    <div>
      <input type="text" placeholder="Enter your name" />
      <input type="checkbox" checked={false} />
      <button className="btn-primary" typ="button" disabled={isButtonDisabled} onClick={() => alert("Clicked!")}>
        Click me
      </button>
    </div>
  );
};

export default Sample;
