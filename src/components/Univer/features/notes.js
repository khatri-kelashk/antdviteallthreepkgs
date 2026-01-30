import { getUniver } from '../UniverProvider'

export function setCellNote(row, col, text) {
  const sheet = getUniver()
    .getActiveWorkbook()
    .getActiveSheet()

  sheet.setCellMeta(row, col, { note: text })
}

export function getAllNotes() {
  const sheet = getUniver()
    .getActiveWorkbook()
    .getActiveSheet()

  const notes = []

  sheet.forEachCell((r, c, cell) => {
    if (cell?.meta?.note) {
      notes.push({ row: r, col: c, text: cell.meta.note })
    }
  })

  return notes
}
