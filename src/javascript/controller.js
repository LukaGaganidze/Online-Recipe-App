import "core-js/stable";
import "regenerator-runtime/runtime";

import { reciveData, state } from "./model.js";
import recipeViev from "./view/view.js";

const controlRecipe = async function () {
  try {
    // current ID
    const id = window.location.hash.slice(1);
    if (!id) return;

    // render spinner
    recipeViev.renderSpinner();

    // 1) RECIPE DATA
    await reciveData(id);

    // 2) #fff render recived data
    recipeViev.renderRecipe(state.recipe);
  } catch (err) {
    throw err;
  }
};

// controlRecipe();

["hashchange", "load"].forEach((event) =>
  window.addEventListener(event, controlRecipe)
);
