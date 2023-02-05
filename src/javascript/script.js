const recipe = async function () {
  try {
    const response = await fetch(
      "https://forkify-api.herokuapp.com/api/v2/recipes/5ed6604591c37cdc054bc886"
    );

    const data = await response.json();

    if (!response.ok)
      throw new Error(`error: ${data.status} / ${response.statusText}`);

    let { recipe } = data.data;
    // restructoring recipe
    recipe = {
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
    console.error(err);
  }
};

recipe();
