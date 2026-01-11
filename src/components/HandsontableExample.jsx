// src/components/HandsontableExample.jsx
import { HotTable } from '@handsontable/react';
import { registerAllModules } from 'handsontable/registry';
import 'handsontable/dist/handsontable.full.min.css';

// Register Handsontable's modules
registerAllModules();

export default function HandsontableExample() {
  const data = [
    ['', 'Tesla', 'Nissan', 'Toyota', 'Honda', 'Mazda', 'Ford'],
    ['2017', 10, 11, 12, 13, 15, 16],
    ['2018', 10, 11, 12, 13, 15, 16],
    ['2019', 10, 11, 12, 13, 15, 16],
    ['2020', 10, 11, 12, 13, 15, 16],
    ['2021', 10, 11, 12, 13, 15, 16]
  ];

  return (
    <div style={{ height: 400, overflow: 'hidden' }}>
      <HotTable
        data={data}
        colHeaders={true}
        rowHeaders={true}
        height="auto"
        licenseKey="non-commercial-and-evaluation"
      />
    </div>
  );
}
