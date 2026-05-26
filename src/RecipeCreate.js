import React, { useState } from "react";

function RecipeCreate( {onRecipeCreate }) {
  const [formData, setFormData] = useState({
    name: "", 
    cuisine: "", 
    photo: "", 
    ingredients: "", 
    preparation: ""
  });
  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers.
  const handleChange = ({ target }) => {
    setFormData({ ...formData, [target.name]: target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onRecipeCreate(formData);
    console.log(formData);
    setFormData({   
      name: "", 
      cuisine: "", 
      photo: "", 
      ingredients: "", 
      preparation: ""
      })
    }


  return (
    <form name="create" onSubmit={handleSubmit}>
      <table className="recipe-create">
        <tbody>
          <tr>
            <td>
              <label htmlFor="name"></label>
              <input
                value={formData.name}
                id="name"
                name="name"
                placeholder="Name"
                onChange={handleChange}
                required={true}
                rows={1} />
            </td>
            <td>
              <label htmlFor="cuisine"></label>
              <input
                value={formData.cuisine}
                id="cuisine"
                name="cuisine"
                placeholder="Cuisine"
                onChange={handleChange}
                required={true}
                rows={1} />
            </td>
            <td>
              <label htmlFor="photo"></label>
              <input
                value={formData.photo}
                id="photo"
                name="photo"
                placeholder="URL"
                type="url"
                onChange={handleChange}
                required={true} />
            </td>
            <td>
              <label htmlFor="ingredients"></label>
              <textarea
                value={formData.ingredients}
                id="ingredients"
                name="ingredients"
                placeholder="Ingredients"
                onChange={handleChange}
                required={true}
                rows={3} />
            </td>
            <td>
              <label htmlFor="preparation"></label>
              <textarea
                value={formData.preparation}
                id="preparation"
                name="preparation"
                placeholder="Preparation"
                onChange={handleChange}
                required={true}
                rows={3} />
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
