import { useState } from "react";

import styles from "./search-field_style.module.scss";

const SearchField = () => {
  const [searchData, setSearchData] = useState("");
  if (searchData === "error") {
    throw new Error("I crashed!");
  }
  const onSubmitSearchData = (e) => {
    setSearchData(e);
  };

  return (
    <div className={styles.search}>
      <input
        className={styles.searchBar}
        type="text"
        id="search"
        value={searchData}
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
