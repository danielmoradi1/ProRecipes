import React from "react";
import { useRouter } from "next/router";
import styles from "../../style/RecipeDetail.module.css";


const RecipeDetail = ({ recipe }) => {
  const router = useRouter();

  if (!recipe) {
    return <p>No recipe data!</p>;
  }

  const handleBackClick = () => {
    router.back();
  };

  return (
    <div className={styles.recipe_continer}>
      
      <button onClick={handleBackClick} className={styles.back_button}>
        Back
      </button>

      <div className={styles.recipe_detail}>
        <h1>{recipe.label}</h1>
        <img
          src={recipe.image}
          alt={recipe.label}
          className={styles.recipeImage}
        />
        <p>
          <strong>Link: </strong>{" "}
          <a href={recipe.url} target="_blank" rel="noopener noreferrer">
            {recipe.url}
          </a>
        </p>
        <p>
          <strong>Meal Types: </strong>
          {recipe.mealType.join(", ")}
        </p>
        <p>
          <strong>Cuisine Types: </strong>
          {recipe.cuisineType.join(", ")}
        </p>
      </div>
    </div>
  );
};

export default RecipeDetail;
