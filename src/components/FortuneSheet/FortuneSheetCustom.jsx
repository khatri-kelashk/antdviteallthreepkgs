import React, { useRef, useState } from 'react';
import { Workbook } from '@fortune-sheet/react';
import '@fortune-sheet/react/dist/index.css';

const FortuneSheetCustom = () => {
  const workbookRef = useRef(null);
  const [selectedInfo, setSelectedInfo] = useState(null);

  // Initial sheet data
  const [sheets] = useState([
    {
      name: 'Sheet1',
      celldata: [
        { r: 0, c: 0, v: { v: 'Name', bl: 1 } },
        { r: 0, c: 1, v: { v: 'Age', bl: 1 } },
        { r: 0, c: 2, v: { v: 'City', bl: 1 } },
        { r: 1, c: 0, v: { v: 'John Doe' } },
        { r: 1, c: 1, v: { v: 30 } },
        { r: 1, c: 2, v: { v: 'New York' } },
        { r: 2, c: 0, v: { v: 'Jane Smith' } },
        { r: 2, c: 1, v: { v: 25 } },
        { r: 2, c: 2, v: { v: 'London' } },
        { r: 3, c: 0, v: { v: 'Bob Johnson' } },
        { r: 3, c: 1, v: { v: 35 } },
        { r: 3, c: 2, v: { v: 'Paris' } },
      ],
    },
  ]);

  // Get current selection
  const getSelection = () => {
    const selection = workbookRef.current?.getSelection();
    if (!selection || selection.length === 0) {
      alert('Please select a cell first!');
      return null;
    }
    return selection[0];
  };

  // Make text bold
  const makeBold = () => {
    const selection = getSelection();
    if (!selection) return;

    const { row, column } = selection;
    const currentValue = workbookRef.current?.getCellValue(row[0], column[0]);
    const isBold = currentValue?.bl === 1;

    workbookRef.current?.setCellFormat(row[0], column[0], 'bl', isBold ? 0 : 1);
    updateSelectedInfo();
  };

  // Make text italic
  const makeItalic = () => {
    const selection = getSelection();
    if (!selection) return;

    const { row, column } = selection;
    const currentValue = workbookRef.current?.getCellValue(row[0], column[0]);
    const isItalic = currentValue?.it === 1;

    workbookRef.current?.setCellFormat(row[0], column[0], 'it', isItalic ? 0 : 1);
    updateSelectedInfo();
  };

  // Make text underline
  const makeUnderline = () => {
    const selection = getSelection();
    if (!selection) return;

    const { row, column } = selection;
    const currentValue = workbookRef.current?.getCellValue(row[0], column[0]);
    const isUnderline = currentValue?.un === 1;

    workbookRef.current?.setCellFormat(row[0], column[0], 'un', isUnderline ? 0 : 1);
    updateSelectedInfo();
  };

  // Change background color
  const changeBackgroundColor = (color) => {
    const selection = getSelection();
    if (!selection) return;

    const { row, column } = selection;
    workbookRef.current?.setCellFormat(row[0], column[0], 'bg', color);
    updateSelectedInfo();
  };

  // Change text color
  const changeTextColor = (color) => {
    const selection = getSelection();
    if (!selection) return;

    const { row, column } = selection;
    workbookRef.current?.setCellFormat(row[0], column[0], 'fc', color);
    updateSelectedInfo();
  };

  // Change font size
  const changeFontSize = (size) => {
    const selection = getSelection();
    if (!selection) return;

    const { row, column } = selection;
    workbookRef.current?.setCellFormat(row[0], column[0], 'fs', size);
    updateSelectedInfo();
  };

  // Update cell value
  const updateCellValue = () => {
    const selection = getSelection();
    if (!selection) return;

    const { row, column } = selection;
    const currentValue = workbookRef.current?.getCellValue(row[0], column[0]);
    const newValue = prompt('Enter new value:', currentValue?.v || '');
    
    if (newValue !== null) {
      workbookRef.current?.setCellValue(row[0], column[0], newValue);
      updateSelectedInfo();
    }
  };

  // Clear cell formatting
  const clearFormatting = () => {
    const selection = getSelection();
    if (!selection) return;

    const { row, column } = selection;
    
    // Clear all format attributes
    workbookRef.current?.setCellFormat(row[0], column[0], 'bl', 0);
    workbookRef.current?.setCellFormat(row[0], column[0], 'it', 0);
    workbookRef.current?.setCellFormat(row[0], column[0], 'un', 0);
    workbookRef.current?.setCellFormat(row[0], column[0], 'bg', null);
    workbookRef.current?.setCellFormat(row[0], column[0], 'fc', '#000000');
    workbookRef.current?.setCellFormat(row[0], column[0], 'fs', 10);
    
    updateSelectedInfo();
  };

  // Update selected cell information
  const updateSelectedInfo = () => {
    const selection = workbookRef.current?.getSelection();
    if (selection && selection.length > 0) {
      const { row, column } = selection[0];
      const cellValue = workbookRef.current?.getCellValue(row[0], column[0]);
      setSelectedInfo({
        row: row[0],
        col: column[0],
        value: cellValue?.v || '',
        bold: cellValue?.bl === 1,
        italic: cellValue?.it === 1,
        underline: cellValue?.un === 1,
        bg: cellValue?.bg,
        fc: cellValue?.fc,
        fs: cellValue?.fs,
      });
    }
  };

  // Handle data changes
  const handleChange = () => {
    updateSelectedInfo();
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h2 style={styles.title}>Fortune Sheet Custom Controls</h2>
        <p style={styles.subtitle}>Select a cell and use the buttons below to modify it</p>
      </div>

      <div style={styles.toolbar}>
        <div style={styles.section}>
          <h4 style={styles.sectionTitle}>Text Formatting</h4>
          <div style={styles.buttonGroup}>
            <button 
              style={{...styles.button, fontWeight: selectedInfo?.bold ? 'bold' : 'normal'}} 
              onClick={makeBold}
              title="Bold (Ctrl+B)"
            >
              <strong>B</strong>
            </button>
            <button 
              style={{...styles.button, fontStyle: selectedInfo?.italic ? 'italic' : 'normal'}} 
              onClick={makeItalic}
              title="Italic (Ctrl+I)"
            >
              <em>I</em>
            </button>
            <button 
              style={{...styles.button, textDecoration: selectedInfo?.underline ? 'underline' : 'none'}} 
              onClick={makeUnderline}
              title="Underline"
            >
              <u>U</u>
            </button>
          </div>
        </div>

        <div style={styles.section}>
          <h4 style={styles.sectionTitle}>Font Size</h4>
          <div style={styles.buttonGroup}>
            <button style={styles.button} onClick={() => changeFontSize(10)} title="Small">
              10
            </button>
            <button style={styles.button} onClick={() => changeFontSize(12)} title="Medium">
              12
            </button>
            <button style={styles.button} onClick={() => changeFontSize(14)} title="Large">
              14
            </button>
            <button style={styles.button} onClick={() => changeFontSize(18)} title="Extra Large">
              18
            </button>
          </div>
        </div>

        <div style={styles.section}>
          <h4 style={styles.sectionTitle}>Background Color</h4>
          <div style={styles.buttonGroup}>
            <button
              style={{...styles.colorButton, backgroundColor: '#FFE6E6'}}
              onClick={() => changeBackgroundColor('#FFE6E6')}
              title="Light Red"
            />
            <button
              style={{...styles.colorButton, backgroundColor: '#E6F3FF'}}
              onClick={() => changeBackgroundColor('#E6F3FF')}
              title="Light Blue"
            />
            <button
              style={{...styles.colorButton, backgroundColor: '#E6FFE6'}}
              onClick={() => changeBackgroundColor('#E6FFE6')}
              title="Light Green"
            />
            <button
              style={{...styles.colorButton, backgroundColor: '#FFF9E6'}}
              onClick={() => changeBackgroundColor('#FFF9E6')}
              title="Light Yellow"
            />
            <button
              style={{...styles.colorButton, backgroundColor: '#F0E6FF'}}
              onClick={() => changeBackgroundColor('#F0E6FF')}
              title="Light Purple"
            />
            <button
              style={{...styles.colorButton, backgroundColor: '#FFFFFF', border: '2px solid #999'}}
              onClick={() => changeBackgroundColor(null)}
              title="Clear Background"
            >
              ✕
            </button>
          </div>
        </div>

        <div style={styles.section}>
          <h4 style={styles.sectionTitle}>Text Color</h4>
          <div style={styles.buttonGroup}>
            <button
              style={{...styles.colorButton, backgroundColor: '#FF0000'}}
              onClick={() => changeTextColor('#FF0000')}
              title="Red"
            />
            <button
              style={{...styles.colorButton, backgroundColor: '#0000FF'}}
              onClick={() => changeTextColor('#0000FF')}
              title="Blue"
            />
            <button
              style={{...styles.colorButton, backgroundColor: '#00AA00'}}
              onClick={() => changeTextColor('#00AA00')}
              title="Green"
            />
            <button
              style={{...styles.colorButton, backgroundColor: '#FF6600'}}
              onClick={() => changeTextColor('#FF6600')}
              title="Orange"
            />
            <button
              style={{...styles.colorButton, backgroundColor: '#9900CC'}}
              onClick={() => changeTextColor('#9900CC')}
              title="Purple"
            />
            <button
              style={{...styles.colorButton, backgroundColor: '#000000'}}
              onClick={() => changeTextColor('#000000')}
              title="Black"
            />
          </div>
        </div>

        <div style={styles.section}>
          <h4 style={styles.sectionTitle}>Actions</h4>
          <div style={styles.buttonGroup}>
            <button style={styles.actionButton} onClick={updateCellValue}>
              📝 Edit Value
            </button>
            <button style={styles.actionButton} onClick={clearFormatting}>
              🧹 Clear Format
            </button>
          </div>
        </div>
      </div>

      <div style={styles.sheetContainer}>
        <Workbook
          ref={workbookRef}
          data={sheets}
          onChange={handleChange}
        />
      </div>

      {selectedInfo && (
        <div style={styles.info}>
          <div style={styles.infoRow}>
            <strong>Selected Cell:</strong> 
            <span style={styles.infoValue}>
              Row {selectedInfo.row + 1}, Column {selectedInfo.col + 1}
            </span>
          </div>
          <div style={styles.infoRow}>
            <strong>Value:</strong> 
            <span style={styles.infoValue}>{selectedInfo.value || '(empty)'}</span>
          </div>
          <div style={styles.infoRow}>
            <strong>Format:</strong> 
            <span style={styles.infoValue}>
              {selectedInfo.bold && 'Bold '}
              {selectedInfo.italic && 'Italic '}
              {selectedInfo.underline && 'Underline '}
              {!selectedInfo.bold && !selectedInfo.italic && !selectedInfo.underline && 'None'}
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    maxWidth: '1400px',
    margin: '0 auto',
  },
  header: {
    marginBottom: '20px',
  },
  title: {
    margin: '0 0 5px 0',
    color: '#333',
    fontSize: '24px',
  },
  subtitle: {
    margin: '0',
    color: '#666',
    fontSize: '14px',
  },
  toolbar: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '20px',
    padding: '20px',
    backgroundColor: '#f5f5f5',
    borderRadius: '8px',
    marginBottom: '20px',
  },
  section: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  },
  sectionTitle: {
    margin: '0 0 5px 0',
    fontSize: '12px',
    color: '#555',
    fontWeight: '600',
    textTransform: 'uppercase',
  },
  buttonGroup: {
    display: 'flex',
    gap: '6px',
    alignItems: 'center',
  },
  button: {
    padding: '8px 12px',
    backgroundColor: '#fff',
    border: '1px solid #ddd',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '14px',
    minWidth: '36px',
    height: '36px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 0.2s',
  },
  colorButton: {
    width: '32px',
    height: '32px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'transform 0.2s',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '12px',
  },
  actionButton: {
    padding: '8px 16px',
    backgroundColor: '#fff',
    border: '1px solid #ddd',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '14px',
    display: 'flex',
    alignItems: 'center',
    gap: '5px',
    transition: 'all 0.2s',
    whiteSpace: 'nowrap',
  },
  sheetContainer: {
    border: '1px solid #ddd',
    borderRadius: '8px',
    overflow: 'hidden',
    height: '500px',
  },
  info: {
    marginTop: '15px',
    padding: '15px',
    backgroundColor: '#e8f4f8',
    borderRadius: '4px',
    fontSize: '14px',
    color: '#333',
  },
  infoRow: {
    display: 'flex',
    gap: '10px',
    marginBottom: '5px',
  },
  infoValue: {
    color: '#0066cc',
    fontWeight: '500',
  },
};

export default FortuneSheetCustom;