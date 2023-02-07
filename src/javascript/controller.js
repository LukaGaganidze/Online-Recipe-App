import "core-js/stable";
import "regenerator-runtime/runtime";

import { reciveData, state } from "./model.js";
import recipeViev from "./view/view.js";
const recipeContainer = document.querySelector(".recipe--side");

const renderSpinner = function (parentel) {
  const markup = `
      <div class="lds-roller">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
  `;
  parentel.innerHTML = "";
  parentel.insertAdjacentHTML("afterbegin", markup);
};

const controlRecipe = async function () {
  try {
    // current ID
    const id = window.location.hash.slice(1);
    if (!id) return;

    // render spinner
    renderSpinner(recipeContainer);

    // 1) RECIPE DATA
    await reciveData(id);

    // 2) #fff render recived data
    recipeViev.render(state.recipe);
  } catch (err) {
    console.error(err);
  }
};

// controlRecipe();

["hashchange", "load"].forEach((event) =>
  window.addEventListener(event, controlRecipe)
);
