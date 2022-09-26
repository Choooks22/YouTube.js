import { Parser } from '../../index.ts';
import { YTNode } from '../../helpers.ts';

export class AppendContinuationItemsAction extends YTNode {
  static type = 'AppendContinuationItemsAction';

  items;
  target: string;

  constructor(data: any) {
    super();
    this.items = Parser.parse(data.continuationItems);
    this.target = data.target;
  }
}
