import { Parser } from '../index.ts';
import { YTNode } from '../helpers.ts';

export class ExpandedShelfContents extends YTNode {
  static type = 'ExpandedShelfContents';

  items;

  constructor(data: any) {
    super();
    this.items = Parser.parse(data.items);
  }

  // XXX: alias for consistency
  get contents() {
    return this.items;
  }
}
