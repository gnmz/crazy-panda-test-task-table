import React, { useEffect, useState } from "react";

import "./TablePagination.css";

const TablePagination = ({ currentPage, pageSize, data, getCurrentPage }) => {
  const [pages, setPages] = useState([]);

  const pagesCount = Math.ceil(data.length / pageSize);
  useEffect(() => {
    const createPages = () => {
      let pages = [];
      for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
      }
      setPages(pages);
    };
    createPages();
  }, [pagesCount]);

  const prevPage = () => {
    getCurrentPage(currentPage - 1);
  };

  const nextPage = () => {
    getCurrentPage(currentPage + 1);
  };

  return (
    <div className="table-pagination">
      <button onClick={prevPage} disabled={currentPage === 1} className="pagination-btn">
        &laquo;
      </button>

      {pages.map((item, index) => (
        <button
          className={
            currentPage === item ? "pagination-active-btn" : "pagination-btn"
          }
          key={index}
          onClick={() => getCurrentPage(item)}
        >
          {item}
        </button>
      ))}
      <button onClick={nextPage} disabled={currentPage === pagesCount} className="pagination-btn">
        &raquo;
      </button>
    </div>
  );
};

export default TablePagination;
