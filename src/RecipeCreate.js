import React, { useState } from "react";

function RecipeCreate( {onRecipeCreate }) {
  const [formData, setFormData] = useState({
    name: "", 
    shop: "", 
    location: "", 
    rating: "", 
    notes: ""
  });

  const handleChange = ({ target }) => {
    setFormData({ ...formData, [target.name]: target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onRecipeCreate(formData);
    console.log(formData);
    setFormData({   
      name: "", 
      shop: "", 
      location: "", 
      rating: "", 
      notes: ""
      })
    }


  return (
    <form name="create" onSubmit={handleSubmit}>
      <table className="review-create">
        <tbody>
          <tr>
            <td>
              <label htmlFor="name"></label>
              <input
                value={formData.name}
                id="name"
                name="name"
                placeholder="Bean Name"
                onChange={handleChange}
                required={true}/>
            </td>
            <td>
              <label htmlFor="shop"></label>
              <input
                value={formData.shop}
                id="shop"
                name="shop"
                placeholder="Shop"
                onChange={handleChange}
                required={true}/>
            </td>
            <td>
              <label htmlFor="origin"></label>
              <select
                value={formData.origin}
                id="origin"
                name="origin"
                onChange={handleChange}
                required={true}>
                <option value="">Select an Origin</option>
                <option value="Columbia">Columbia</option>
                <option value="Costa Rica">Costa Rica</option>
                <option value="Ethiopia">Ethiopia</option>
                <option value="Indonesia">Indonesia</option>
                </select>
            </td>
            <td>
              <label htmlFor="rating"></label>
              <select
                value={formData.rating}
                id="rating"
                name="rating"
                placeholder="Rating"
                onChange={handleChange}
                required={true}>
                  <option value="">Select a rating</option>
                  <option value="⭐⭐⭐⭐⭐">⭐⭐⭐⭐⭐</option>
                  <option value="⭐⭐⭐⭐">⭐⭐⭐⭐</option>
                  <option value="⭐⭐⭐">⭐⭐⭐</option>
                  <option value="⭐⭐">⭐⭐</option>
                  <option value="⭐">⭐</option>
                </select>
            </td>
            <td>
              <label htmlFor="notes"></label>
              <input
                value={formData.notes}
                id="notes"
                name="notes"
                placeholder="Notes"
                onChange={handleChange}/>
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
