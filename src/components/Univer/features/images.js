import { getUniver } from '../UniverProvider'
import { ICommandService } from '@univerjs/core'
import { AddDrawingCommand } from '@univerjs/drawing'

export function insertImage(src) {
  const commandService = getUniver().get(ICommandService)

  commandService.executeCommand(AddDrawingCommand.id, {
    type: 'image',
    source: src,
    width: 200,
    height: 150,
    draggable: true
  })
}
