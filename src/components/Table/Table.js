import React from "react";

import "./Table.css";

const Table = ({ data, currentPage, pageSize }) => {
  const renderHeaders = (arr) => {
    if (arr.length > 0) {
      return Object.keys(arr[0]).map((item, index) => (
        <th key={index} style={{ textTransform: "capitalize" }}>
          {item.toLowerCase()}
        </th>
      ));
    }
  };

  const renderRows = (rowItem) => {
    return Object.entries(rowItem).map(([, cell], index) => (
      <td key={index}>{cell}</td>
    ));
  };

  return (
    <table>
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
