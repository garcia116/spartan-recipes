import React from 'react';
import "./Form.css";

const Form = props => (
  <form onSubmit={props.getRecipe} style={{ marginBottom:"2rem" }}>
    <input className="form__inputs" type="text" name="recipeName" />
    <br></br>
        <br></br>
    <div className="search text-center" >
    Calories:
    <select name="calories">
    	<option value = "5000">None</option>
    	<option value="100">100 ></option>
    	<option value="200">200 ></option>
    	<option value="300">300 ></option>
    	<option value="400">400 ></option>
    </select>
    

    Diet:
    <select multiple name="diet">
   		<option value="balanced">None</option>
   		<option value="balanced">Balanced </option>
    	<option value="low-carb">Low-Carb </option>
    	<option value="low-fat">Low-Fat </option>
    	<option value="high-protein">High-Protein </option>
    </select>
   
    
    Lifestyle: 
    <select multiple name="health">
    	<option value = "alcohol-free">None</option>
    	<option value="vegan">Vegan ></option>
    	<option value="vegetarian">Vegetarian ></option>
    	<option value="gluten-free">Gluten-free ></option>
    </select>

    </div>
    <br></br>
    
    <button className="form__buttons">Search</button>
  </form>
);

export default Form;