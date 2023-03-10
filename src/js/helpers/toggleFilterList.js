// If the Filter List is empty, then remove padding
const toggleFilterList = () => {
  const filterInputs = document.querySelectorAll('.filter__input');
  const filterIcons = document.querySelectorAll('.filter__icon');

  // HANDLE FILTER LIST WITH INPUT FOCUS
  filterInputs.forEach(filterInput => {
    filterInput.addEventListener('focus', e => {
      // Get the Filter List & Filter Icon of the Target Event
      const filterList = e.target.closest('.filter__select').children[2];
      const filterIcon = e.target.closest('.filter__select').children[1];

      // Open the Filter List when the input is focused
      filterList.classList.add('filter-open');

      // Rotate the Filter Icon when the input is focused
      filterIcon.classList.add('icon-selected');
    });
  });

  // HANDLE FILTER LIST WITH ICON
  filterIcons.forEach(filterIcon => {
    filterIcon.addEventListener('click', e => {
      // Get the Filter List & Filter Icon of the Target Event
      const filterList = e.target.closest('.filter__select').children[2];
      const filterIcon = e.target.closest('.filter__select').children[1];

      // Toggle the Filter List with the Icon
      filterList.classList.toggle('filter-open');

      // Toggle the Filter Icon rotation
      filterIcon.classList.toggle('icon-selected');
    });
  });
};

export default toggleFilterList;
