import { Parser } from '../index.ts';
import { YTNode } from '../helpers.ts';

export class HorizontalList extends YTNode {
  static type = 'HorizontalList';

  visible_item_count: string;
  items;

  constructor(data: any) {
    super();
    this.visible_item_count = data.visibleItemCount;
    this.items = Parser.parse(data.items);
  }

  // XXX: alias for consistency
  get contents() {
    return this.items;
  }
}
