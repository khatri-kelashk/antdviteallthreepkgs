import { getUniver } from '../UniverProvider'
import { ICommandService } from '@univerjs/core'
import {
  SetBoldCommand,
  SetItalicCommand,
  SetUnderlineCommand,
  MergeCellsCommand
} from '@univerjs/sheets'

const exec = (cmd) =>
  getUniver().get(ICommandService).executeCommand(cmd)

export const formatCommands = {
  bold: () => exec(SetBoldCommand.id),
  italic: () => exec(SetItalicCommand.id),
  underline: () => exec(SetUnderlineCommand.id),
  merge: () => exec(MergeCellsCommand.id)
}
