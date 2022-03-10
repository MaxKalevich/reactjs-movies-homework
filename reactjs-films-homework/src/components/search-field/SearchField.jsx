import { SearchFieldSideEffects } from "./searchFieldSideEffects";

import styles from "./search-field_style.module.scss";

const SearchField = () => {
  const { funcSetSearchData, dispatch, searchFromUrl } =
    SearchFieldSideEffects();
  const onSubmitSearchData = (e) => {
    dispatch(funcSetSearchData(e));
  };

  return (
    <div className={styles.search}>
      <input
        className={styles.searchBar}
        type="search"
        id="search"
        value={searchFromUrl}
        onChange={(e) => onSubmitSearchData(e.target.value)}
        placeholder="Enter the name of the movie..."
      />
      <img
        className={styles.searchIcon}
        src="/search-zoom.svg"
        alt="search icon"
      />
    </div>
  );
};

export default SearchField;
