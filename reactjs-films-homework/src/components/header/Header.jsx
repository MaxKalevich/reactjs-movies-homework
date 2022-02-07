import LanguageButtonContainer from "../language-button/LanguageButtonContainer";
import SearchFieldContainer from "../search-field/SearchFieldContainer";

import styles from "./header-style.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <h1 className={styles.heading}>Movie Searcher</h1>
        <div className={styles.group}>
          <SearchFieldContainer />
          <LanguageButtonContainer />
        </div>
      </div>
    </header>
  );
};

export default Header;
