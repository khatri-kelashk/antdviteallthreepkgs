import React, { useEffect, useRef } from 'react'
import { initUniver } from './UniverProvider'

export default function SheetContainer() {
  const ref = useRef(null)

  useEffect(() => {
    initUniver(ref.current)
  }, [])

  return (
    <div
      ref={ref}
      style={{ height: '100%', width: '100%', border: '1px solid #ddd' }}
    />
  )
}
