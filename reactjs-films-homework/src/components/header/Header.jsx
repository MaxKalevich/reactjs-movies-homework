import SearchField from "../search-field/SearchField";
import LanguageButton from "../language-button/LanguageButton";

import "./header-style.scss";

const Header = (props) => {
  return (
    <header className="header">
      <div className="header-wrapper">
        <h1 className="heading">Title</h1>
        <div className="header-group">
          <SearchField />
          <LanguageButton />
        </div>
      </div>
    </header>
  );
};

export default Header;
