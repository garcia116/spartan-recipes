import React, { Component } from 'react';
import './SearchRecipe.css';

import Form from './Form/Form';
import Recipes from './Recipes/Recipes';

const API_KEY = "01b95f80bbd4b9e0e29d33d930d51dac";
const API_ID = "79a1d6a6";

class SearchRecipe   extends Component {
   state = {
    recipes: []
    
  }
  getRecipe = async (e) => {
    const recipeName = e.target.elements.recipeName.value;
    const calories = e.target.elements.calories.value;
    const diet = e.target.elements.diet.value;
    e.preventDefault();
    const api_call = await fetch(
      `https://cors-anywhere.herokuapp.com/https://api.edamam.com/search?from=0&to=50&app_id=${API_ID}&app_key=${API_KEY}&q=${recipeName}&calories=${calories}&count=10`);
    
    const data = await api_call.json();
    this.setState({recipes: data.hits})
    console.log(this.state.recipes);
  }


 componentDidMount = () => {
if(  localStorage.getItem("recipes") != null){ 
 const json = localStorage.getItem("recipes");
    const recipes = JSON.parse(json);
    this.setState({ recipes });
}
  }﻿

  componentDidUpdate = () => {
    const recipes = JSON.stringify(this.state.recipes);
    localStorage.setItem("recipes", recipes);
  }

  render() {
    return (
      <div className="App">
        <header className="App-headers">
          <h1 className="App-titles">Recipe Search</h1>
        </header>
        <Form getRecipe={this.getRecipe} />
        <Recipes recipes={this.state.recipes} />
      </div>
    );
  }
}

export default SearchRecipe;