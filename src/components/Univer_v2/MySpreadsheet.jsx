import { useEffect, useRef, useState } from 'react';
import { createUniver, LocaleType, mergeLocales } from '@univerjs/presets';
import { UniverSheetsCorePreset } from '@univerjs/preset-sheets-core';
// import '@univerjs/preset-sheets-core/lib/index.css';
// import enUS from '@univerjs/preset-sheets-core/locales/en-US';

// Locales & Styles
import '@univerjs/preset-sheets-core/lib/index.css';
import enUS from '@univerjs/preset-sheets-core/locales/en-US';

const MySpreadsheet = () => {

  const containerRef = useRef<HTMLDivElement>(null);
  const [univerAPI, setUniverAPI] = useState(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // 1. Initialize Univer
    const { univer, univerAPI } = createUniver({
      locale: LocaleType.EN_US,
      locales: { [LocaleType.EN_US]: mergeLocales(enUS) },
      presets: [
        UniverSheetsCorePreset({
          container: containerRef.current,
        }),
      ],
    });

    useEffect(() => {
    const { univer, univerAPI: api } = createUniver({
      locale: LocaleType.EN_US,
      locales: { [LocaleType.EN_US]: mergeLocales(enUS) },
      presets: [
        UniverSheetsCorePreset({
          container: containerRef.current,
          // We can disable the default toolbar if we want to build our own
          header: true, 
        }),
      ],
    });

    api.createWorkbook({ id: 'workbook-1', name: 'Dev Project' });
    setUniverAPI(api);

    return () => univer.dispose();
  }, []);

  useEffect(() => {
    const { univer, univerAPI: api } = createUniver({
      locale: LocaleType.EN_US,
      locales: { [LocaleType.EN_US]: mergeLocales(enUS) },
      presets: [
        UniverSheetsCorePreset({
          container: containerRef.current,
          // We can disable the default toolbar if we want to build our own
          header: true, 
        }),
      ],
    });

    // api.createWorkbook({ id: 'workbook-1', name: 'Dev Project' });
    // setUniverAPI(api);

    return () => univer.dispose();
  }, []);

  

    // 2. Create an initial workbook
    univerAPI.createWorkbook({
      id: 'my-first-sheet',
      name: 'Budget Plan',
    });

    // 3. Cleanup on unmount (Crucial for React performance)
    return () => {
      univer.dispose();
    };
  }, []);

  // --- Handlers using the Facade API ---
  const handleBold = () => {
    const range = univerAPI.getActiveWorkbook().getActiveSheet().getRange();
    // Toggle Bold: 1 is bold, 0 is normal
    const isBold = range.getFontWeight() === 'bold';
    range.setFontWeight(isBold ? 'normal' : 'bold');
  };

  const handleUnderline = () => {
    const range = univerAPI.getActiveWorkbook().getActiveSheet().getRange();
    const isUnderline = range.getUnderline()?.s === 1;
    range.setUnderline({ s: isUnderline ? 0 : 1 });
  };

  const handleSetColor = (color) => {
    univerAPI.getActiveWorkbook().getActiveSheet().getRange().setFontColor(color);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      {/* CUSTOM TOOLBAR */}
      <div style={{ padding: '8px', background: '#f0f0f0', borderBottom: '1px solid #ccc', display: 'flex', gap: '10px' }}>
        <button onClick={()=> handleBold()} style={{ fontWeight: 'bold' }}>B</button>
        <button onClick={()=> handleUnderline()} style={{ textDecoration: 'underline' }}>U</button>
        <button onClick={() => handleSetColor('#ff0000')}>Red Text</button>
        <button onClick={() => handleSetColor('#000000')}>Black Text</button>
      </div>

      {/* CANVAS CONTAINER */}
      <div ref={containerRef} style={{ flex: 1 }} />
    </div>
  );
};

export default MySpreadsheet;