import React, { useState } from "react";

import "./TableSearch.css";

const TableSearch = ({ data, searchData }) => {
  const [searchValue, setSearchValue] = useState("");

  const searchInputHandler = (e) => {
    const value = e.target.value;
    setSearchValue(value);
    if (value) {
      let filtred = data.filter((item) => item["name"].includes(value));
      searchData(filtred, true);
    }
  };

  const removeInputValue = () => {
    setSearchValue("");
    searchData(data, false);
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
