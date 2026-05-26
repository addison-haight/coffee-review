import React from "react";

function Recipe({ name, cuisine, photo, ingredients, preparation, onRecipeDelete }) {
  return (
    <tr>
      <td>{name}</td>
      <td>{cuisine}</td>
      <td><img src={photo} alt={name} /></td>
      <td className="content_td">{ingredients}</td> 
      <td className="content-td">{preparation}</td>
      <td><button name="delete" onClick={onRecipeDelete}>Delete</button></td>
    </tr>
  );
}

function RecipeList({ recipes = [], onRecipeDelete }) {
  const recipeArray = recipes.map((recipe, index) => (
  <Recipe key={index} {...recipe} onRecipeDelete={() => onRecipeDelete(index)} />
  // TODO: Display the list of recipes using the structure of table that is provided.
  // TODO: Create at least one additional component that is used by this component.
  // TODO: Each recipe row must have a delete button - <button name="delete">Delete</button> - that deletes the post when clicked.
  ))

  return (
    <div className="recipe-list">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Cuisine</th>
            <th>Photo</th>
            <th>Ingredients</th>
            <th>Preparation</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
        {recipeArray}
        </tbody>
      </table>
    </div>
  );
}

export default RecipeList;
