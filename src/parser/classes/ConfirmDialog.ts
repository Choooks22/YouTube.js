import { Parser } from '../index.ts';
import { Text } from './misc/Text.ts';
import { Button } from './Button.ts';

import { YTNode } from '../helpers.ts';

export class ConfirmDialog extends YTNode {
  static type = 'ConfirmDialog';

  title: Text;
  confirm_button: Button | null;
  cancel_button: Button | null;
  dialog_messages: Text[];

  constructor(data: any) {
    super();
    this.title = new Text(data.title);
    this.confirm_button = Parser.parseItem<Button>(data.confirmButton, Button);
    this.cancel_button = Parser.parseItem<Button>(data.cancelButton, Button);
    this.dialog_messages = data.dialogMessages.map((txt: any) => new Text(txt));
  }
}
