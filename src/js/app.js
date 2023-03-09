// prettier-ignore
import { Header, Filter, RecipeList, SearchBar } from './components';
import handlePlaceholder from './helpers/handlePlaceholder';
import clearFilter from './helpers/clearFilterList';

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
  handlePlaceholder('searchbar-input', '', 'Rechercher une recette');
};

buildApp('app');

clearFilter();
