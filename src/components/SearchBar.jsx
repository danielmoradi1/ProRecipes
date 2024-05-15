"use client";
import React, { useState } from "react";
import { search } from '../app/api';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [recipes, setRecipes] = useState([]);


  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value);
  };
  
  const handleSearch = (event) => {
    event.preventDefault();
    console.log("Search Term:", searchTerm);
    search(searchTerm)
      .then(response => {
        console.log(response.data);
        // Do something with the data
        setRecipes(response.data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };
  
  return (
    <form id="searchformid">
      <input
        className="form-control me-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
        value={searchTerm}
        onChange={handleSearchTermChange}
      />      
      <button
        className="btn btn-outline-success"
        type="submit"
        onClick={handleSearch}
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
