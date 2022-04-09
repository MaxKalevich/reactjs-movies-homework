import LanguageButtonContainer from "../language-button/LanguageButtonContainer";
import SearchField from "../search-field/SearchField";

import styles from "./header-style.module.scss";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const { language } = useSelector((state) => state.mainPageSlice);
  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <Link to={`/?filter=popular&page=1&lang=${language}`}>
          <h1 className={styles.heading}>Movie Searcher</h1>
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
