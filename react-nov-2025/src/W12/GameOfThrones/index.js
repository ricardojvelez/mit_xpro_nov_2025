import React, { useEffect, useState } from "react";
import "./GameOfThrones.css";
import { CharacterForm } from "./CharacterForm";
import { Item } from "./Item";

const GameOfThrones = () => {
  const [characters, setCharacters] = useState([
    {
      name: "Jon Snow",
      house: "Stark",
    },
    {
      name: "Daenerys Targaryen",
      house: "Targaryen",
    },
    {
      name: "Tyrion Lannister",
      house: "Lannister",
    },
  ]);

  const addCharacter = (name, house) => {
    const newCharacters = [
      ...characters,
      {
        name: name,
        house: house,
      },
    ];

    setCharacters(newCharacters);
  };

  const removeCharacter = (index) => {
    let temp = [...characters];

    //Splice remove the element at the specified index
    temp.splice(index, 1);

    setCharacters(temp);
  };

  return (
    <div className="planner-container">
      <h1 className="planner-title">My favourite GoT characters</h1>
      <div className="planner-items">
        {characters.map((character, index) => (
          <Item
            key={index}
            index={index}
            character={character}
            removeCharacter={removeCharacter}
          />
        ))}
      </div>
      <CharacterForm addCharacter={addCharacter} />
    </div>
  );
};

export default GameOfThrones;
