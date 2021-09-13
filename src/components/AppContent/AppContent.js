import React, { useState } from "react";
import Table from "../Table/Table";
import TablePagination from "../TablePagination/TablePagination";
import TableSearch from "../TableSearch/TableSearch";

import "./AppContent.css";

const AppContent = ({ data, searchData, searchedData, isSearched }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize] = useState(50);

  const getCurrentPage = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="app-content">
      <TableSearch
        searchData={searchData}
        data={data}
        getCurrentPage={getCurrentPage}
      />
      {searchedData.length === 0 && isSearched ? (
        <div>Ничего не найдено</div>
      ) : (
        <Table
          data={searchedData.length > 0 ? searchedData : data}
          currentPage={currentPage}
          pageSize={pageSize}
        />
      )}
      {searchedData.length === 0 && isSearched ? null : (
        <TablePagination
          data={
            searchedData.length > 0 || (searchedData.length === 0 && isSearched)
              ? searchedData
              : data
          }
          currentPage={currentPage}
          pageSize={pageSize}
          getCurrentPage={getCurrentPage}
        />
      )}
    </div>
  );
};

export default AppContent;
