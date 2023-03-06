if (module.hot) {
  module.hot.accept();
}

const handleSearchPlaceholder = inputId => {
  const input = document.getElementById(inputId);

  const addPlaceholder = () => {
    input.setAttribute('placeholder', 'Rechercher une recette');
  };

  const clearPlaceholder = () => {
    input.setAttribute('placeholder', '');
  };

  // On focus, if the input is empty then clear the placeholder
  input.addEventListener('focus', () => {
    if (input.value === '') {
      clearPlaceholder();
    }
  });

  // On focusout, if the input is empty add the placeholder else remove it
  input.addEventListener('focusout', () => {
    if (input.value === '') {
      addPlaceholder();
    } else if (input.value !== '') {
      input.removeAttribute('placeholder');
    }
  });
};

handleSearchPlaceholder('searchbar-input');
