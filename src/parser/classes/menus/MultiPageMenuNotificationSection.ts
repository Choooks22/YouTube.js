import { Parser } from '../../index.ts';
import { YTNode } from '../../helpers.ts';

export class MultiPageMenuNotificationSection extends YTNode {
  static type = 'MultiPageMenuNotificationSection';

  items;

  constructor(data: any) {
    super();
    this.items = Parser.parse(data.items);
  }

  get contents() {
    return this.items;
  }
}
