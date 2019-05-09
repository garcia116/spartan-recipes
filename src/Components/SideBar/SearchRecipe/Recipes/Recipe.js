import React from 'react';
import "./Recipe.css";
import { Link } from "react-router-dom";

const API_KEY = "01b95f80bbd4b9e0e29d33d930d51dac";
const API_ID = "79a1d6a6";

class Recipe extends React.Component {

  state = {
    activeRecipe: []
  }

  componentDidMount = async () => {
     const label = this.props.location.state.recipe;
    const req = await fetch(
      `https://cors-anywhere.herokuapp.com/https://api.edamam.com/search?app_id=${API_ID}&app_key=${API_KEY}&q=${label}`);
    
    const res = await req.json();
    this.setState({activeRecipe: res.hits[0]});
    console.log(this.state.activeRecipe);
  }

  render() {
const recipe = this.state.activeRecipe;
    return (
      <div className="container">
        { this.state.activeRecipe.length !== 0 &&
          <div className="active-recipe">
            <img className="active-recipe__img" src={recipe.recipe.image} alt={recipe.recipe.label}/>
            <h4 className="active-recipe__title">{ recipe.recipe.label }</h4>
            <h4 className="active-recipe__publisher">
              Ingredients: <span>{ recipe.recipe.ingredientLines }</span>
            </h4>
            <h4 className="active-recipe_dietLabels">
              Diet Labels: <span>{ recipe.recipe.dietLabels }</span>
            </h4>
            <h4 className="active-recipe_healthLabels">
              Health Labels: <span>{ recipe.recipe.healthLabels }</span>
            </h4>
            <h4 className="active-recipe__website">
            Website: <span><a href={recipe.recipe.url}>{recipe.recipe.url}</a></span>
            </h4>

            <button className="active-recipe__button">
              <Link to="/">Go Home</Link>
            </button>
          </div>
        }
      </div>
    );
  }
};

export default Recipe;