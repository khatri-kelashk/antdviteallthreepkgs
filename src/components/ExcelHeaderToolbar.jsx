import React, { useState } from 'react';
import {
  Layout,
  Button,
  Select,
  InputNumber,
  Dropdown,
  Divider,
  Space,
  Tooltip
} from 'antd';
import {
  SaveOutlined,
  CopyOutlined,
  ScissorOutlined,
  UndoOutlined,
  RedoOutlined,
  BoldOutlined,
  ItalicOutlined,
  UnderlineOutlined,
  BorderOutlined,
  BgColorsOutlined,
  FontColorsOutlined,
  AlignLeftOutlined,
  AlignCenterOutlined,
  AlignRightOutlined,
  MenuOutlined,
  PlusOutlined,
  MinusOutlined,
  TableOutlined,
  PictureOutlined,
  InsertRowBelowOutlined,
  ColumnWidthOutlined,
  FormatPainterOutlined,
  CheckSquareOutlined
} from '@ant-design/icons';

const { Header } = Layout;

const ExcelHeaderToolbar = () => {
  const [fontSize, setFontSize] = useState(12);
  const [fontFamily, setFontFamily] = useState('Poppins');

  const fontFamilies = [
    { value: 'Poppins', label: 'Poppins' },
    { value: 'Arial', label: 'Arial' },
    { value: 'Times New Roman', label: 'Times New Roman' },
    { value: 'Calibri', label: 'Calibri' },
    { value: 'Verdana', label: 'Verdana' }
  ];

  const borderOptions = {
    items: [
      { key: '1', label: 'All Borders' },
      { key: '2', label: 'Outside Borders' },
      { key: '3', label: 'Top Border' },
      { key: '4', label: 'Bottom Border' }
    ]
  };

  const fillColorOptions = {
    items: [
      { key: '1', label: 'No Fill' },
      { key: '2', label: 'Red' },
      { key: '3', label: 'Blue' },
      { key: '4', label: 'Yellow' }
    ]
  };

  return (
    <Header style={{ 
      background: '#fff', 
      padding: '0 16px',
      marginTop: '400px',
      height: 'auto',
      lineHeight: 'normal',
      borderBottom: '1px solid #e8e8e8'
    }}>
      <Space split={<Divider type="vertical" style={{ margin: '0 8px' }} />} wrap style={{ padding: '8px 0' }}>
        
        {/* File Operations */}
        <Space size="small">
          <Tooltip title="Paste">
            <Button icon={<SaveOutlined />} size="small" />
          </Tooltip>
          <Tooltip title="Copy">
            <Button icon={<CopyOutlined />} size="small" />
          </Tooltip>
          <Tooltip title="Cut">
            <Button icon={<ScissorOutlined />} size="small" />
          </Tooltip>
          <Tooltip title="Format Painter">
            <Button icon={<FormatPainterOutlined />} size="small" />
          </Tooltip>
        </Space>

        {/* Font Settings */}
        <Space size="small">
          <Select
            value={fontFamily}
            onChange={setFontFamily}
            options={fontFamilies}
            style={{ width: 120 }}
            size="small"
          />
          
          <Space.Compact size="small">
            <Button icon={<MinusOutlined />} size="small" />
            <InputNumber
              value={fontSize}
              onChange={setFontSize}
              min={8}
              max={72}
              style={{ width: 60 }}
              size="small"
            />
            <Button icon={<PlusOutlined />} size="small" />
          </Space.Compact>
        </Space>

        {/* Text Formatting */}
        <Space size="small">
          <Tooltip title="Bold">
            <Button icon={<BoldOutlined />} size="small" />
          </Tooltip>
          <Tooltip title="Italic">
            <Button icon={<ItalicOutlined />} size="small" />
          </Tooltip>
          <Tooltip title="Underline">
            <Button icon={<UnderlineOutlined />} size="small" />
          </Tooltip>
          <Dropdown menu={borderOptions} trigger={['click']}>
            <Button icon={<BorderOutlined />} size="small" />
          </Dropdown>
          <Dropdown menu={fillColorOptions} trigger={['click']}>
            <Button icon={<BgColorsOutlined />} size="small" />
          </Dropdown>
          <Tooltip title="Font Color">
            <Button icon={<FontColorsOutlined />} size="small" />
          </Tooltip>
        </Space>

        {/* Alignment */}
        <Space size="small">
          <Tooltip title="Align Left">
            <Button icon={<AlignLeftOutlined />} size="small" />
          </Tooltip>
          <Tooltip title="Align Center">
            <Button icon={<AlignCenterOutlined />} size="small" />
          </Tooltip>
          <Tooltip title="Align Right">
            <Button icon={<AlignRightOutlined />} size="small" />
          </Tooltip>
          <Tooltip title="More Options">
            <Button icon={<MenuOutlined />} size="small" />
          </Tooltip>
        </Space>

        {/* Cell Operations */}
        <Space size="small">
          <Tooltip title="Merge Cells">
            <Button size="small">
              <TableOutlined /> Merge Cells
            </Button>
          </Tooltip>
          <Tooltip title="Wrap Text">
            <Button size="small">Wrap Text</Button>
          </Tooltip>
        </Space>

        {/* Insert Options */}
        <Space size="small">
          <Tooltip title="Insert Cell">
            <Button icon={<PlusOutlined />} size="small">Insert Cell</Button>
          </Tooltip>
          <Tooltip title="Insert Entire Column">
            <Button size="small">Insert Entire Column</Button>
          </Tooltip>
          <Tooltip title="Insert Image">
            <Button icon={<PictureOutlined />} size="small">Insert Image</Button>
          </Tooltip>
          <Tooltip title="Insert Text Box">
            <Button size="small">Insert Text Box</Button>
          </Tooltip>
          <Tooltip title="Insert Entire Row">
            <Button icon={<InsertRowBelowOutlined />} size="small">Insert Entire Row</Button>
          </Tooltip>
        </Space>

        {/* Additional Controls */}
        <Space size="small">
          <Tooltip title="Insert Shape">
            <Button size="small">Insert Shape</Button>
          </Tooltip>
          <Tooltip title="Bring Forward">
            <Button size="small">Bring forward</Button>
          </Tooltip>
          <Tooltip title="Send Backward">
            <Button size="small">Send backward</Button>
          </Tooltip>
          <Tooltip title="Spell Check">
            <Button icon={<CheckSquareOutlined />} size="small">Spell Check</Button>
          </Tooltip>
        </Space>
      </Space>
    </Header>
  );
};

export default ExcelHeaderToolbar;