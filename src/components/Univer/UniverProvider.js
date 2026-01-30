import { Univer } from '@univerjs/core'
import { SheetsPlugin } from '@univerjs/sheets'
import { SheetsUIPlugin } from '@univerjs/sheets-ui'
// import { DrawingPlugin } from '@univerjs/drawing'

let univerInstance = null

export function initUniver(container) {
  const univer = new Univer()

  univer.registerPlugin(SheetsPlugin)
  // univer.registerPlugin(DrawingPlugin)
  univer.registerPlugin(SheetsUIPlugin, { container })

  univer.createUnit('sheet', {
    sheets: {
      sheet1: {
        name: 'Sheet1',
        cellData: {}
      }
    }
  })

  univerInstance = univer
  return univer
}

export function getUniver() {
  return univerInstance
}
