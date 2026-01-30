import { getUniver } from '../UniverProvider'
import { ICommandService } from '@univerjs/core'
import { AddDrawingCommand } from '@univerjs/drawing'

export function insertShape(shape) {
  const commandService = getUniver().get(ICommandService)

  commandService.executeCommand(AddDrawingCommand.id, {
    type: 'shape',
    shapeType: shape, // rect | ellipse
    width: 120,
    height: 80,
    fill: '#E6F4FF',
    stroke: '#1677ff',
    draggable: true
  })
}
