import React from "react";
import SearchLens from "../images/search_lens.svg";
import CustomStyles from "../CustomStyles";

const SearchBar = (): JSX.Element => {
  return (
    <>
      <div className={CustomStyles.searchBar.wrapper}>
        <img className={CustomStyles.searchBar.image} src={SearchLens}></img>
        <input
          className={CustomStyles.searchBar.input}
          placeholder="Search keyword"
        ></input>
      </div>
    </>
  );
};

export default SearchBar;
