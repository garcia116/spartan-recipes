import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import SearchRecipe from "./SearchRecipe";
import Recipe from "./Recipes/Recipe";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={SearchRecipe} exact />
      <Route path="/recipe/:uri" component={Recipe} />
    </Switch>
  </BrowserRouter>
);

export default Router;