import React from 'react';

const RecipeDetail = ({ recipe }) => {
  if (!recipe) {
    return <p>No recipe data!</p>;
  }

  return (
    <div className="recipe-detail">
      <h1>{recipe.label}</h1>
      <img src={recipe.image} alt={recipe.label} className="recipe-image" />
      <p>Link: <a href={recipe.url} target="_blank" rel="noopener noreferrer">{recipe.url}</a></p>
      <p>Meal Types: {recipe.mealType.join(', ')}</p>
      <p>Cuisine Types: {recipe.cuisineType.join(', ')}</p>
      {/* You can add more details here, such as ingredients and preparation steps */}
    </div>
  );
};

export default RecipeDetail;
