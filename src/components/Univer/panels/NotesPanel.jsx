import React, { useEffect, useState } from 'react'
import { Drawer, List } from 'antd'
import { getAllNotes } from '../features/notes'

export default function NotesPanel({ open, onClose }) {
  const [notes, setNotes] = useState([])

  useEffect(() => {
    if (open) setNotes(getAllNotes())
  }, [open])

  return (
    <Drawer title="Cell Notes" open={open} onClose={onClose}>
      <List
        dataSource={notes}
        renderItem={(n) => (
          <List.Item>
            <b>{`R${n.row + 1} C${n.col + 1}`}</b>: {n.text}
          </List.Item>
        )}
      />
    </Drawer>
  )
}
