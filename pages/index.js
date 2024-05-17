import React, { useState } from "react";
import SearchBar from "@/components/SearchBar";
import RecipeList from "@/components/RecipeList";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Home() {
  const [recipes, setRecipes] = useState([]);

  return (
    <div className="container">
      <header>
        <h1>ProRecipes</h1>
      </header>

      <nav>
        <SearchBar setRecipes={setRecipes} />
      </nav>

      <main>
        <div className="results">
          <h2>Results</h2>
          <RecipeList recipes={recipes} />
        </div>
      </main>
    </div>
  );
}
