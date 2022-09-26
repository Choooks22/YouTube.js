import { Parser } from '../index.ts';
import { YTNode } from '../helpers.ts';

export class FeedFilterChipBar extends YTNode {
  static type = 'FeedFilterChipBar';

  contents;

  constructor(data: any) {
    super();
    this.contents = Parser.parse(data.contents);
  }
}
