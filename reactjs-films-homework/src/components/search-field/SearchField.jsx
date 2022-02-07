import { useDispatch } from "react-redux";

import styles from "./search-field_style.module.scss";

const SearchField = ({ search, setSearchData }) => {
  const dispatch = useDispatch();
  if (search === "error") {
    throw new Error("I crashed!");
  }
  const onSubmitSearchData = (e) => {
    dispatch(setSearchData(e));
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
