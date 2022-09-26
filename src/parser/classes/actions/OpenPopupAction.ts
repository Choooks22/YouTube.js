import { Parser } from '../../index.ts';
import { YTNode } from '../../helpers.ts';

export class OpenPopupAction extends YTNode {
  static type = 'OpenPopupAction';

  popup;
  popup_type;

  constructor(data: any) {
    super();
    this.popup = Parser.parse(data.popup);
    this.popup_type = data.popupType;
  }
}
