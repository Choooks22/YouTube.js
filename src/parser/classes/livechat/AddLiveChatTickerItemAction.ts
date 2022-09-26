import { Parser } from '../../index.ts';
import { YTNode } from '../../helpers.ts';

export class AddLiveChatTickerItemAction extends YTNode {
  static type = 'AddLiveChatTickerItemAction';

  item;
  duration_sec;

  constructor(data: any) {
    super();
    this.item = Parser.parseItem(data.item);
    this.duration_sec = data.durationSec;
  }
}
