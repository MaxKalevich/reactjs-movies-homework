import SearchField from "../search-field/SearchField";
import LanguageButton from "../language-button/LanguageButton";

import styles from "./header-style.module.scss";

const Header = (props) => {
  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <h1 className={styles.heading}>Title</h1>
        <div className={styles.group}>
          <SearchField />
          <LanguageButton />
        </div>
      </div>
    </header>
  );
};

export default Header;
