import { async } from "regenerator-runtime";

import { getJson } from "./helper.js";
import { API_URL } from "./config.js";
// MAIN STATE OBJECT (DINAMIC)
export const state = {
  recipe: {},
};

// RECIPE DATA BASED ON ID (on load/hashchange)
export const reciveData = async function (id) {
  try {
    // #FFF we pass id, so it dinamically changes recipe depending on the recipe link (id)
    const data = await getJson(`${API_URL}${id}`);

    // recipe from the API (recipe = data.data.recipe)
    const { recipe } = data.data;

    // adding (pushin) recipe to state object (global)
    state.recipe = {
      cookingTime: recipe.cooking_time,
      id: recipe.id,
      image: recipe.image_url,
      ingredients: recipe.ingredients,
      publisher: recipe.publisher,
      servings: recipe.servings,
      sourceUrl: recipe.source_url,
      title: recipe.title,
    };
  } catch (err) {
    console.error(`MODEL: ${err}`);
  }
};

console.log(state);
