import Parser from '../index.ts';
import { YTNode } from '../helpers.ts';

class FeedFilterChipBar extends YTNode {
  static type = 'FeedFilterChipBar';

  contents;

  constructor(data: any) {
    super();
    this.contents = Parser.parse(data.contents);
  }
}

export default FeedFilterChipBar;
