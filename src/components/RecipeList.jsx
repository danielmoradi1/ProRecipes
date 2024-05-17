import React, { useEffect, useState } from "react";
import Link from "next/link";
import styles from "../../public/RecipeList.module.css"; // Import the CSS module

const RecipeList = ({ recipes }) => {
  const [storedRecipes, setStoredRecipes] = useState([]);

  useEffect(() => {
    const savedRecipes = localStorage.getItem("recipes");
    if (savedRecipes) {
      setStoredRecipes(JSON.parse(savedRecipes));
    }
  }, []);

  const displayRecipes = recipes.length ? recipes : storedRecipes;

  return (
    <div className={styles.cardContainer}>
      {displayRecipes &&
        displayRecipes.map((recipe) => {
          const recipeId = recipe.uri.split("#recipe_")[1];

          return (
            <div className={styles.card} key={recipe.uri}>
              <a href={`/recipes/${recipeId}`}>
                <img
                  className={styles.cardImgTop}
                  src={recipe.image}
                  alt={recipe.label}
                />
                <h5 className={styles.cardTitle}>{recipe.label}</h5>
                <p className={styles.cardText}>
                  <strong>Meal Types: </strong>{recipe.mealType.join(", ")}
                </p>
                <p className={styles.cardText}>
                  <strong>Cuisine Types: </strong>
                  {recipe.cuisineType.join(", ")}
                </p>
              </a>
            </div>
          );
        })}
    </div>
  );
};

export default RecipeList;
