import React from "react";

const FoodRankingRow = ({ foodName, calories, rating }) => {
  return (
    <div className="food-ranking-row">
      <span className="food-ranking-name">{foodName}</span>
      <span className="food-ranking-calories">{calories} cal</span>
    </div>
  );
};

export default FoodRankingRow;
