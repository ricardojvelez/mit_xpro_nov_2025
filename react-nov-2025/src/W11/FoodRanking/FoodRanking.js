import React from "react";
import FoodRankingRow from "./FoodRankingRow";
import "./FoodRanking.css";

/*const FoodRanking = () => {
  return (
    <div className="food-ranking">
      <h1 className="food-ranking-title">Food Calories Data</h1>
      <div className="food-ranking-list">
        <FoodRankingRow foodName="Lasagna" calories={400} />
        <FoodRankingRow foodName="Pizza" calories={285} />
        <FoodRankingRow foodName="Pasta" calories={220} />

      </div>
    </div>
  );
};*/



const foods = [
  { name: "Burger", calories: 300 },
  { name: "Salad", calories: 150 },
  { name: "Pizza", calories: 285 },
  { name: "Pasta", calories: 220 },
  { name: "Lasagna", calories: 400 },
  { name: "Soup", calories: 90 },
];


const FoodRanking = () => {

  const sortedFoods = foods.sort((a, b) => a.calories - b.calories);
  
  return (
    <div className="food-ranking">
      <h1 className="food-ranking-title">Food Ranking</h1>
      <div className="food-ranking-list">
        {sortedFoods.map((currentItemBeingIterated) => (
          <FoodRankingRow key={currentItemBeingIterated.name} foodName={currentItemBeingIterated.name} calories={currentItemBeingIterated.calories} />
        ))}
      </div>
    </div>
  );
};


export default FoodRanking;
