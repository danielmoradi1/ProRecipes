import { useRouter } from "next/router";
import RecipeDetail from "@/components/RecipeDetail";
import { useEffect, useState } from "react";
import { getRecipeById } from "@/app/api";

const RecipeDetailPage = () => {
  const router = useRouter();
  const { recipeId } = router.query;
  const [recipe, setRecipe] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (recipeId) {
      getRecipeById(recipeId)
        .then((data) => {
          setRecipe(data);
        })
        .catch((error) => {
          console.error("Error fetching recipe details:", error);
          setError(error);
        });
    }
  }, [recipeId]);

  if (error) return <p>Error loading recipe: {error.message}</p>;
  if (!recipe) return <p>Loading...</p>;

  return <RecipeDetail recipe={recipe} />;
};

export default RecipeDetailPage;
