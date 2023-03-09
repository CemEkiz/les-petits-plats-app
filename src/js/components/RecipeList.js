import RecipeCard from './RecipeCard';

const RecipeList = () => {
  const recipeListMarkup = `
  <section class="recipe container">
  ${RecipeCard()}
  </section>
  `;

  return recipeListMarkup;
};

export default RecipeList;
