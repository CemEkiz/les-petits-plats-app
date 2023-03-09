import { logo } from '../../assets';

const Header = () => {
  const headerMarkup = `
  <header class="header container">
    <div class="header__logo">
      <img src="${logo}" alt="Logo" class="header__logo-img" />
    </div>
  </header>
  `;

  return headerMarkup;
};

export default Header;
