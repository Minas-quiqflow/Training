import React, { useState, useMemo } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

const AgGridTable = () => {
  const columnDefs = useMemo(() => [
    { field: "id", sortable: true, filter: true },
    { field: "name", sortable: true, filter: true },
    { field: "email", sortable: true, filter: true },
    { field: "age", sortable: true, filter: true },
  ], []);

  const rowData = useState([
    { id: 1, name: "Alice", email: "alice@example.com", age: 25 },
    { id: 2, name: "Bob", email: "bob@example.com", age: 30 },
    { id: 3, name: "Charlie", email: "charlie@example.com", age: 28 },
    { id: 4, name: "Diana", email: "diana@example.com", age: 35 },
  ])[0];

  return (
    <div className="ag-theme-alpine" style={{ height: 300, width: "100%" }}>
      <AgGridReact
        rowData={rowData}
        columnDefs={columnDefs}
        pagination={true}
      />
    </div>
  );
};

export default AgGridTable;
