import React, { useState } from "react";

import "./Table.css";

const Table = ({ data, currentPage, pageSize }) => {
  const [sortDirection, setSortDirection] = useState("asc");
  const [sortCol, setSortCol] = useState("");

  const renderHeaders = (arr) => {
    if (arr.length > 0) {
      return Object.keys(arr[0]).map((item, index) => (
        <th
          scope="col"
          key={index}
          className="th-cell"
          onClick={() => sortHandler(item, sortDirection)}
        >
          {item.toLowerCase()}
          {sortCol === "" ? null : sortCol === item &&
            sortDirection === "desc" ? (
            <span>▲</span>
          ) : (
            <span>▼</span>
          )}
        </th>
      ));
    }
  };

  const renderRows = (rowItem) => {
    return Object.entries(rowItem).map(([id, cell], index) => (
      <td key={index} className={`table-item-${id}`}>
        {cell}
      </td>
    ));
  };

  const sortHandler = (col, sortDirection) => {
    setSortCol(col);
    if (typeof data[0][col] === "string") {
      if (sortDirection === "asc") {
        setSortDirection("desc");
        return data.sort((a, b) =>
          a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1
        );
      } else {
        setSortDirection("asc");
        return data.sort((a, b) =>
          a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1
        );
      }
    } else if (typeof data[0][col] === "number") {
      if (sortDirection === "asc") {
        setSortDirection("desc");
        return data.sort((a, b) => a[col] - b[col]);
      } else {
        setSortDirection("asc");
        return data.sort((a, b) => b[col] - a[col]);
      }
    }
  };

  return (
    <table className="table table-hover">
      <thead>
        <tr>{renderHeaders(data)}</tr>
      </thead>
      <tbody>
        {data.length > 0 &&
          data
            .slice(pageSize * (currentPage - 1), pageSize * currentPage)
            .map((item) => <tr key={item.id}>{renderRows(item)}</tr>)}
      </tbody>
    </table>
  );
};

export default Table;
