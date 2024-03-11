import React, { useState } from "react";
import items from "../data/items";

function Filter({ onCategoryChange }) {
  const [searchText, setSearchText] = useState("");

  // Adjusted function name to handleChange
  function handleChange(event) {
    setSearchText(event.target.value); // Corrected the state updating line
  }

  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div className="Filter">
      <input
        onChange={handleChange}
        value={searchText}
        type="text"
        name="search"
        placeholder="Search..."
      />
      <select name="filter" onChange={onCategoryChange}>
        <option value="All">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
}

export default Filter;
