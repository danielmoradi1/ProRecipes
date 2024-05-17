import React, { useState } from "react";
import { getRecipes } from "@/app/api";

const SearchBar = ({ setRecipes }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = async (event) => {
    event.preventDefault();
    if (!searchTerm.trim()) {
      alert("Please enter a name!");
      return;
    }
    try {
      const data = await getRecipes(searchTerm);
      setRecipes(data);
      localStorage.setItem("recipes", JSON.stringify(data));
    } catch (error) {
      console.error("Error:", error);
      alert(
        "An error occurred while searching for recipes. Please try again later."
      );
    }
  };

  return (
    <form onSubmit={handleSearch}>
      <input
        className="form-control me-2"
        type="text"
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
      />
      <button className="btn btn-outline-success" type="submit">
        Search
      </button>
    </form>
  );
};

export default SearchBar;
