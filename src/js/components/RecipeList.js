// import RecipeCard from './RecipeCard';
import recipes from '../constants/recipes';

const RecipeList = () => {
  // Empty Array (it will host all the generated recipe cards)
  const recipeCards = [];

  // Generate a recipe card for all of recipes
  recipes.forEach(recipe => {
    // TODO: faire la boucle pour la liste des ingrédients
    // Variable qui soit le résultat de la boucle
    const listIngredients = recipe.ingredients.map(ingredient => {
      return `<li class="recipe__ingredient">${ingredient?.ingredient}: ${
        ingredient?.quantity
      } ${ingredient?.unit ?? ''}</li>`;
    });

    const recipeCardMarkup = `<article class="recipe__card">
    <div class="recipe__img"></div>

    <div class="recipe__data">
      <div class="recipe__header">
        <h2 class="recipe__title">${recipe.name}</h2>
        <span class="recipe__time"
          ><i class="bx bx-time-five recipe__time-icon"></i> ${
            recipe.time
          } min</span
        >
      </div>
         
        <ul class="recipe__ingredients-list">
        ${listIngredients.join('')}
        </ul>
        
        <p class="recipe__description">
          ${recipe.description}
        </p>
      
    </div>
  </article>
  `;

    // Push all of the Recipe Card in the recipeCards array
    recipeCards.push(recipeCardMarkup);
  });

  // Create the Recipe List Section and put inside all of the Recipe Card from the array
  const recipeListMarkup = `
  <section class="recipe container">
    ${recipeCards.join('')}
  </section>
  `;

  return recipeListMarkup;
};

export default RecipeList;
