import { Fraction } from "fractional";
class recipeViev {
  #parentEl = document.querySelector(".recipe--side");
  #data;

  addHandlerRender(handler) {
    ["hashchange", "load"].forEach((event) =>
      window.addEventListener(event, handler)
    );
  }

  // get current data / clear innerHTML / render narkup
  renderRecipe(data) {
    this.#data = data;
    this.#clearInrHtml();
    this.#parentEl.insertAdjacentHTML("afterbegin", this.#markup());
  }

  // clear innrHTML / render spinner
  renderSpinner() {
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
    this.#clearInrHtml();
    this.#parentEl.insertAdjacentHTML("afterbegin", markup);
  }

  // clear innerHTML function
  #clearInrHtml() {
    this.#parentEl.innerHTML = "";
  }

  // recipe markup
  #markup() {
    return `
  <div class="image-container">
    <img
      src="${this.#data.image}"
      alt="recipe picture"
      class="recipe--image"
      width="800"
    />
  </div>
  
  <h1 class="recipe--name">
    <span> ${this.#data.title}</span>
  </h1>
  
  <!--RECIPE HEAD INFO -->
  <div class="recipe--head--info">
    <div class="minutes--servings--container">
      <!-- MINUTES INFO -->
      <div class="minutes--box">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="recipe--header--svg minutes--svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
  
        <div class="minutes--tex-number-box">
          <p class="info--text minutes--num">${this.#data.cookingTime}</p>
          <p class="info--text minutes--text">MINUTES</p>
        </div>
      </div>
  
      <!-- SERVINGS INFO -->
      <div class="servings--head--info">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="recipe--header--svg serving--svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
  
        <div class="servings--number-text-box">
          <p class="info--text">${this.#data.servings}</p>
          <p class="info--text">SERVINGS</p>
        </div>
        <div class="servings--quantity">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="servings--quantity--plus"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
  
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="servings--quantity--minus"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M19.5 12h-15"
            />
          </svg>
        </div>
      </div>
  
      <!-- BOOKMARKS -->
      <div class="bookmark--border">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="recipe--header--svg bookmark--svg clicked"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
          />
        </svg>
      </div>
    </div>
  </div>
  
  <div class="recipe--ingredients">
    <h2 class="recipe--ingredients--header">RECIPE INGREDIENTS</h2>
    <ul class="recipe--ingredients--list">
    ${this.#data.ingredients.map((ing) => this.#mapIngrediends(ing)).join("")}
    
      </ul>;
  </div>
  
  <div class="how--to--cook--box">
    <p class="how--to--cook-text how--to--cook-header">
      HOW TO COOK IT
    </p>
    <p class="how--to--cook-text">
      This recipe was carefully designed and tested by Closet Cooking.
      Please check out directions at their website.
    </p>
    <button class="how--to--cook--button button">
      <p>DIREVTIONS</p>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="svg svg--footer"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
        />
      </svg>
    </button>
  </div>
  `;
  }

  // recipe markup ingredients map
  #mapIngrediends(ing) {
    return `
      <li class="recipe--ingredient">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="recipe--ing--svg svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M4.5 12.75l6 6 9-13.5"
          />
        </svg>
        <div class="quantity--description-flex">
          <div class="recipe--quantity">${
            ing.quantity ? new Fraction(ing.quantity) : ""
          }</div>
          <div class="recipe--description">
            ${ing.description}
          </div>
        </div>
      </li>
  `;
  }
}

export default new recipeViev();
