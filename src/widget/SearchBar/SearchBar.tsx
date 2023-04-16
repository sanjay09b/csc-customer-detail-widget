import React from "react";
import SearchLens from "../images/search_lens.svg";
import customStyle from "../customStyle";

const SearchBar = (): JSX.Element => {
  return (
    <>
      <div className={customStyle.searchBar.wrapper}>
        <img className={customStyle.searchBar.image} src={SearchLens}></img>
        <input
          className={customStyle.searchBar.input}
          placeholder="Search keyword"
        ></input>
      </div>
    </>
  );
};

export default SearchBar;
