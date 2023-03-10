// If the Filter List is empty, then remove padding
const showFilter = () => {
  const filterLists = document.querySelectorAll('.filter__list');
  const filterInputs = document.querySelectorAll('.filter__input');

  filterLists.forEach(filterList => {
    filterList.style.display = 'none';
  });

  filterInputs.forEach(filterInput => {
    filterInput.addEventListener('focus', e => {
      e.target.closest('.filter__select').children[2].style.display = 'block';
    });

    filterInput.addEventListener('focusout', e => {
      e.target.closest('.filter__select').children[2].style.display = 'none';
    });
  });
};

export default showFilter;
