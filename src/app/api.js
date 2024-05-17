import axios from "axios";

const app_id = "16179f18"; // Replace with your Edamam application ID
const app_key = "c8b5438e9e7ce5a74d34f62602738793"; // Replace with your Edamam API key

export const getRecipes = async (recipeName) => {
  try {
    const response = await axios.get(`https://api.edamam.com/api/recipes/v2`, {
      params: {
        q: recipeName,
        app_id: app_id,
        app_key: app_key,
        type: "public",
      },
    });
    return response.data.hits.map((hit) => hit.recipe);
  } catch (error) {
    console.error("Error fetching recipes:", error);
    if (error.response) {
      console.error("Error response data:", error.response.data);
    }
    throw error;
  }
};


export const getRecipeById = async (id) => {
  try {
    const response = await axios.get(
      `https://api.edamam.com/api/recipes/v2/${id}`,
      {
        params: {
          app_id: app_id,
          app_key: app_key,
          type: "public",
        },
      }
    );
    return response.data.recipe;
  } catch (error) {
    console.error("Error fetching recipe by ID:", error);
    if (error.response) {
      console.error("Error response data:", error.response.data);
    }
    throw error;
  }
};

export default { getRecipes, getRecipeById };
