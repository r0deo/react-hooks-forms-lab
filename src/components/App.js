import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import Header from "./Header";
import itemData from "../data/items";
import Filter from "./Filter";
import ItemForm from "./ItemForm";

function App() {
  const [items, setItems] = useState(itemData);
  const [isDarkMode, setIsDarkMode] = useState(false);

  function handleDarkModeClick() {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }

  // Handle search change (you can customize this function)
  const handleSearchChange = (searchText) => {
    // Filter items based on searchText and update the state
    const filteredItems = itemData.filter((item) =>
      item.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setItems(filteredItems);
  };

  // Handle form submission and update the list of items
  const handleItemFormSubmit = (newItem) => {
    setItems((prevItems) => [...prevItems, newItem]);
  };

  return (
    <div className={"App " + (isDarkMode ? "dark" : "light")}>
      <Header isDarkMode={isDarkMode} onDarkModeClick={handleDarkModeClick} />
      <Filter onSearchChange={handleSearchChange} />
      <ShoppingList items={items} />
      <ItemForm onItemFormSubmit={handleItemFormSubmit} /> {/* Pass the handleItemFormSubmit function */}
    </div>
  );
}

export default App;
