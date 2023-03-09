import FilterTag from './FilterTag';

const Filter = () => {
  const filterMarkup = `
  <section class="filter container">
      <div class="filter__tag-list">
      ${FilterTag()}
      ${FilterTag()}
      </div>
      <div class="filter__select-list">
        <div class="filter__select filter__select--ingredients">
          <input type="text" placeholder="Ingredients" class="filter__input" />
          <i class="bx bx-chevron-down filter__icon"></i>
          <ul class="filter__list"></ul>
        </div>
        <div class="filter__select filter__select--devices">
          <input type="text" placeholder="Appareils" class="filter__input" />
          <i class="bx bx-chevron-down filter__icon"></i>
          <ul class="filter__list"></ul>
        </div>
        <div class="filter__select filter__select--utensils">
          <input type="text" placeholder="Ustensiles" class="filter__input" />
          <i class="bx bx-chevron-down filter__icon"></i>
          <ul class="filter__list"></ul>
        </div>
      </div>
    </section>
  `;

  return filterMarkup;
};

export default Filter;
