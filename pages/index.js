// pages/index.js
import React, { useState } from "react";
import SearchBar from "@/components/SearchBar";
import RecipeList from "@/components/RecipeList";
import Layout from "./layout";

export default function Home() {
  const [recipes, setRecipes] = useState([]);

  return (
    <Layout>
      <div className="container">
        <header className="header">
          <h1>ProRecipes</h1>
        </header>

        <nav className="searchbar">
          <SearchBar setRecipes={setRecipes} />
        </nav>

        <main>
          <div className="results">
            <h2>Results</h2>
            <RecipeList recipes={recipes} />
          </div>
        </main>
      </div>
    </Layout>
  );
}
