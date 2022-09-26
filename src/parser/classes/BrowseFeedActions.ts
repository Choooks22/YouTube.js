import { Parser } from '../index.ts';
import { YTNode } from '../helpers.ts';

export class BrowseFeedActions extends YTNode {
  static type = 'BrowseFeedActions';

  contents;

  constructor(data: any) {
    super();
    this.contents = Parser.parseArray(data.contents);
  }
}
