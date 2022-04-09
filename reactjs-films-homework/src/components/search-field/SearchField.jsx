import { SearchFieldSideEffects } from "./searchFieldSideEffects";

import styles from "./search-field_style.module.scss";
import { setSearchFromUrl } from "../../store/reducers/mainPageSlice";

const SearchField = () => {
  const { funcSetSearchData, dispatch, searchFromUrl, search } =
    SearchFieldSideEffects();
  const onSubmitSearchData = (e) => {
    dispatch(funcSetSearchData(e));
    dispatch(setSearchFromUrl(e));
  };

  return (
    <div className={styles.search}>
      <input
        className={styles.searchBar}
        type="search"
        id="search"
        value={searchFromUrl !== "undefined" ? searchFromUrl : ""}
        // value={searchFromUrl}
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
