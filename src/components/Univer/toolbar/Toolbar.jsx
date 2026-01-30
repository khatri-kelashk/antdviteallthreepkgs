import React from 'react'
import { Button, Space, Divider, Upload } from 'antd'
import {
  BoldOutlined,
  ItalicOutlined,
  UnderlineOutlined,
  MergeCellsOutlined,
  PictureOutlined,
  BorderOutlined
} from '@ant-design/icons'

import { formatCommands } from '../features/formatting'
import { insertImage } from '../features/images'
import { insertShape } from '../features/shapes'

export default function Toolbar() {
  return (
    <Space wrap style={{ padding: 8 }}>
      <Button icon={<BoldOutlined />} onClick={formatCommands.bold} />
      <Button icon={<ItalicOutlined />} onClick={formatCommands.italic} />
      <Button icon={<UnderlineOutlined />} onClick={formatCommands.underline} />

      <Divider type="vertical" />

      <Button icon={<MergeCellsOutlined />} onClick={formatCommands.merge} />

      <Divider type="vertical" />

      <Upload
        showUploadList={false}
        beforeUpload={(file) => {
          const url = URL.createObjectURL(file)
          insertImage(url)
          return false
        }}
      >
        <Button icon={<PictureOutlined />}>Image</Button>
      </Upload>

      <Button
        icon={<BorderOutlined />}
        onClick={() => insertShape('rect')}
      >
        Shape
      </Button>
    </Space>
  )
}
