import React, { useState } from "react";
import { getRecipes } from "@/app/api";
import styles from "../../style/RecipeList.module.css";

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
    <form className={styles.form} onSubmit={handleSearch}>
      <input
        className="form-control me-2"
        type="text"
        placeholder="Search for recipes"
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
      />
      <button id="button" className={styles.button} type="submit">
        Search
      </button>
    </form>
  );
};

export default SearchBar;

