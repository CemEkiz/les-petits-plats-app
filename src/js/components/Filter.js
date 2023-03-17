import FilterTag from './FilterTag';
import recipes from '../constants/recipes';

const Filter = () => {
  const upperCaser = function (name) {
    const passengerLower = name.toLowerCase();
    const passengerCorrect =
      passengerLower[0].toUpperCase() + passengerLower.slice(1);
    return passengerCorrect;
  };

  // Array where all the ingredients will be pushed
  let allIngredients = [];

  // Loop over each ingredient of each recipe and push that ingredient in the array
  recipes.map(recipe => {
    recipe.ingredients.map(recipeIng => {
      const ingredient = recipeIng.ingredient;
      allIngredients.push(ingredient.toLowerCase());
    });
  });

  // Clear the duplicated ingredients from the array
  allIngredients = [...new Set(allIngredients)];

  // Array where the non-duplicated ingredients will be pushed
  const allIngredientsUniques = [];

  allIngredients.forEach(ingUnique => {
    allIngredientsUniques.push(upperCaser(ingUnique));
  });

  console.log(allIngredientsUniques);

  const ingredientsFilterEl = allIngredientsUniques.map(ingredient => {
    return `
    <li>
    ${ingredient}
    </li>
    `;
  });

  const filterMarkup = `
  <section class="filter container">
      <div class="filter__tag-list">
      ${FilterTag()}
      ${FilterTag()}
      </div>
      <div class="filter__select-list">
        <div class="filter__select filter__select--ingredients">
          <input type="text" placeholder="Ingrédients" class="filter__input" id="ingredients-input" />
          <i class="bx bx-chevron-down filter__icon"></i>
          <ul class="filter__list">
            ${ingredientsFilterEl.join('')}
          </ul>
        </div>
        <div class="filter__select filter__select--devices">
          <input type="text" placeholder="Appareils" class="filter__input" id="devices-input" />
          <i class="bx bx-chevron-down filter__icon"></i>
          <ul class="filter__list"></ul>
        </div>
        <div class="filter__select filter__select--utensils">
          <input type="text" placeholder="Ustensiles" class="filter__input" id="utensils-input" />
          <i class="bx bx-chevron-down filter__icon"></i>
          <ul class="filter__list"></ul>
        </div>
      </div>
    </section>
  `;

  return filterMarkup;
};

export default Filter;
