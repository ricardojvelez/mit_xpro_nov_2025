import React from "react";
import "./App.css";
import Sample from "./W11/Sample";
import FoodRanking from "./W11/FoodRanking/FoodRanking";
import ChangingStyleButton from "./W12/ChangingStyleButton/index";
import UseStateWithButton from "./W12/UseStateWithButton/index";
import UseEffectWithCountTracker from "./W12/UseEffectWithCountTracker/index";
import GameOfThrones from "./W12/GameOfThrones/index";


//W14
import { ParentToChild } from "./W14/ParentToChild/ParentToChild";
import { ChildToParent } from "./W14/ChildToParent/ChildToParent";
import HierarchyTree from "./W14/RecursiveExample/HierarchyTree/HierarchyTree";

//W15
import { AxiosComponent } from "./W15/AxiosComponent/AxiosComponent"; 
import { FetchComponent } from "./W15/FetchComponent/FetchComponent";
import { FetchComponentSinglePokemon } from "./W15/FetchComponentSinglePokemon/FetchComponentSinglePokemon";




const App = () => {
  return <FetchComponent name="bulbasaur" />;
};

export default App;
