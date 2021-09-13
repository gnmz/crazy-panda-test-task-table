import React, { useState } from "react";

import "./TableSearch.css";

const TableSearch = ({ data, searchData, getCurrentPage }) => {
  const [searchValue, setSearchValue] = useState("");

  const searchInputHandler = (e) => {
    const value = e.target.value;
    setSearchValue(value);
    if (value) {
      let filtred = data.filter((item) => item["name"].includes(value));
      searchData(filtred, true);
      getCurrentPage(1)
    }
  };

  const removeInputValue = () => {
    setSearchValue("");
    searchData(data, false);
    getCurrentPage(1)
  };

  return (
    <div className="table-search">
      <span className="table-search-icon">&#128269;</span>
      <input
        type="text"
        className="table-search-input"
        placeholder="Найти"
        value={searchValue}
        onChange={searchInputHandler}
      />
      <button className="remove-search-value-btn" onClick={removeInputValue} disabled={!searchValue}>X</button>
    </div>
  );
};

export default TableSearch;
