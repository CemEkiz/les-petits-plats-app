// prettier-ignore
import { Header, Filter, RecipeList, SearchBar } from './components';
import setPlaceholder from './helpers/setPlaceholder';
import showFilter from './helpers/showFilter';

const buildApp = root => {
  const app = document.getElementById(root);

  // Add the component of the app
  const markup = `
  ${Header()}
  ${SearchBar()}
  ${Filter()}
  ${RecipeList()}
  `;

  app.insertAdjacentHTML('afterend', markup);

  // Features
  setPlaceholder('searchbar-input', '', 'Rechercher une recette');
  setPlaceholder(
    'ingredients-input',
    'Rechercher un ingrédient',
    'Ingrédients'
  );
  setPlaceholder('devices-input', 'Rechercher un appareil', 'Appareils');
  setPlaceholder('utensils-input', 'Rechercher un ustensile', 'Ustensiles');
};

buildApp('app');

showFilter();
