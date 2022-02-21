import LanguageButtonContainer from "../language-button/LanguageButtonContainer";
import SearchField from "../search-field/SearchField";

import styles from "./header-style.module.scss";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <Link className={styles.heading} to={"/"}>
          <h1>Movie Searcher</h1>
        </Link>
        <div className={styles.group}>
          <SearchField />
          <LanguageButtonContainer />
        </div>
      </div>
    </header>
  );
};

export default Header;
