


export const  Item = ({ character, index, removeCharacter }) => {
    return (
      <div
        title="Click to remove character"
        className="planner-item"
        onClick={() => removeCharacter(index)}
      >
        {character.name} - {character.house}
      </div>
    );
  }