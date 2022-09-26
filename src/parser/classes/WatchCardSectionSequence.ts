import Parser from '../index.ts';
import { YTNode } from '../helpers.ts';

class WatchCardSectionSequence extends YTNode {
  static type = 'WatchCardSectionSequence';

  lists;

  constructor(data: any) {
    super();
    this.lists = Parser.parse(data.lists);
  }
}

export default WatchCardSectionSequence;
