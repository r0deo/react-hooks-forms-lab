import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ onItemFormSubmit }) {
  // Use state for controlled inputs
  const [itemName, setItemName] = useState("");
  const [itemCategory, setItemCategory] = useState("Produce");

  // Handle input changes and update state
  const handleNameChange = (event) => {
    setItemName(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setItemCategory(event.target.value);
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    // Create a new item object
    const newItem = {
      id: uuid(),
      name: itemName,
      category: itemCategory,
    };

    // Pass the new item to the parent component via onItemFormSubmit prop
    onItemFormSubmit(newItem);

    // Clear the form fields by resetting state
    setItemName("");
    setItemCategory("Produce");
  };

  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      {/* Connect state to the input fields */}
      <label>
        Name:
        <input type="text" name="name" value={itemName} onChange={handleNameChange} />
      </label>

      <label>
        Category:
        <select name="category" value={itemCategory} onChange={handleCategoryChange}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
