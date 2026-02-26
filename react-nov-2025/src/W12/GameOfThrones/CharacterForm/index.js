import React, { useState } from "react";

export const  CharacterForm = ({ addCharacter }) => {
    const [name, setName] = useState("");
    const [house, setHouse] = useState("");
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (!name || !house) return;
      addCharacter(name, house);
      setName("");
      setHouse("");
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Character name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <input
          type="text"
          placeholder="House"
          value={house}
          onChange={(e) => setHouse(e.target.value)}
        />
        <button type="submit">Add Character</button>
      </form>
    );
  }