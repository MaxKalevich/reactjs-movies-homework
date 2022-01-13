import { useState } from "react";

import "./search-field_style.scss";

const SearchField = () => {
  const [searchData, setSearchData] = useState("");
  if (searchData === "error") {
    throw new Error("I crashed!");
  }
  const onSubmitSearchData = (e) => {
    setSearchData(e);
  };

  return (
    <div className="search">
      <input
        className="search-bar"
        type="text"
        id="search"
        value={searchData}
        onChange={(e) => onSubmitSearchData(e.target.value)}
        placeholder="Movies, person, movie theaters"
      />
      <img className="search-icon" src="search-zoom.svg" alt="search icon" />
    </div>
  );
};

export default SearchField;
