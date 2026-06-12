import React, { useState } from "react";
import "./App.css";
import RecipeCreate from "./RecipeCreate";
import RecipeList from "./RecipeList";
import RecipeData from "./RecipeData";
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [recipes, setRecipes] = useState(RecipeData);

  // TODO: Add the ability for the <RecipeList /> component to list and delete an existing recipe.
  // TODO: Add the ability for the <RecipeCreate /> component to create new recipes.
  const handleRecipeCreate = (newRecipe) => {
    setRecipes([...recipes, newRecipe]);
  }

  const handleRecipeDelete = (indexToDelete) => {
    setRecipes(recipes.filter((recipe, index) => index !== indexToDelete))
  }
  
  return (
    <Router>
      {/* <Navbar /> */}
      <Routes>
        {/* <Route path="/" element={<Beans />} /> */}
        {/* <Route path="/shops" element={<Shops />} /> */}
      </Routes>
    
    
    <div className="App">
      <header><h1>Coffee Reviews</h1></header>
      <RecipeList recipes={recipes} onRecipeDelete={handleRecipeDelete} />
      <RecipeCreate onRecipeCreate={handleRecipeCreate} />
    </div>
    </Router>
  );
}

export default App;
