// src/components/ReactGridExample.jsx
import { ReactGrid } from "@silevis/reactgrid";
import "@silevis/reactgrid/styles.css";
import { useState } from 'react';

export default function ReactGridExample() {
  const [rows] = useState([
    {
      rowId: "header",
      cells: [
        { type: "header", text: "Name" },
        { type: "header", text: "Age" },
        { type: "header", text: "City" }
      ]
    },
    {
      rowId: 0,
      cells: [
        { type: "text", text: "John Doe" },
        { type: "number", value: 28 },
        { type: "text", text: "New York" }
      ]
    },
    {
      rowId: 1,
      cells: [
        { type: "text", text: "Jane Smith" },
        { type: "number", value: 34 },
        { type: "text", text: "London" }
      ]
    }
  ]);

  const [columns] = useState([
    { columnId: "name", width: 150 },
    { columnId: "age", width: 100 },
    { columnId: "city", width: 150 }
  ]);

  return (
    <div style={{ height: 400 }}>
      <ReactGrid rows={rows} columns={columns} />
    </div>
  );
}