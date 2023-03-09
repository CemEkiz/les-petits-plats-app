// If the Filter List is empty, then remove padding
const clearFilter = () => {
  const filterLists = document.querySelectorAll('.filter__list');
  const filterItem = document.querySelector('.filter__item');

  filterLists.forEach(filterList => {
    if (!filterList.contains(filterItem)) {
      filterList.style.padding = '0';
    } else {
      filterList.style.padding = '0 0.75rem 0.75rem';
    }
  });
};

export default clearFilter;
