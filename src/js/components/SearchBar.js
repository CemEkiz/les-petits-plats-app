const SearchBar = () => {
  const searchBarMarkup = `
  <section class="searchbar container">
    <form action="" class="searchbar__form">
      <input
        type="text"
        placeholder="Rechercher une recette"
        class="searchbar__input"
        id="searchbar-input" />
      <div class="searchbar__button">
        <i class="bx bx-search-alt-2 searchbar__icon"></i>
      </div>
    </form>
  </section>
  `;

  return searchBarMarkup;
};

export default SearchBar;
