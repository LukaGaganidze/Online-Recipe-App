import { async } from "regenerator-runtime";

export const state = {
  recipe: {},
};

export const reciveData = async function (id) {
  try {
    // #FFF we pass id, so it dinamically changes recipe depending on the recipe link (id)

    // fetch response from API (dinamic)
    const response = await fetch(
      `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
    );

    // data from API
    const data = await response.json();
    if (!response.ok)
      throw new Error(`error: ${data.status} / ${response.statusText}`);

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
    console.log(state.recipe);
  } catch (err) {
    console.error(err);
  }
};
