import { SearchFieldSideEffects } from "./searchFieldSideEffects";

import styles from "./search-field_style.module.scss";

const SearchField = () => {
  const { search, funcSetSearchData, dispatch } = SearchFieldSideEffects();
  const onSubmitSearchData = (e) => {
    dispatch(funcSetSearchData(e));
  };

  return (
    <div className={styles.search}>
      <input
        className={styles.searchBar}
        type="text"
        id="search"
        value={search}
        onChange={(e) => onSubmitSearchData(e.target.value)}
        placeholder="Movies, person, movie theaters"
      />
      <img
        className={styles.searchIcon}
        src="search-zoom.svg"
        alt="search icon"
      />
    </div>
  );
};

export default SearchField;
