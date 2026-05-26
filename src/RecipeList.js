import React from "react";

function Recipe({ name, shop, origin, rating, notes, onRecipeDelete }) {
  return (
    <tr>
      <td>{name}</td>
      <td>{shop}</td>
      <td>{origin}</td>
      <td className="content_td">{rating}</td> 
      <td className="content-td">{notes}</td>
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
            <th>Bean Name</th>
            <th>Shop</th>
            <th>Origin</th>
            <th>Rating</th>
            <th>Notes</th>
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
