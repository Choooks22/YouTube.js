import { Parser } from '../index.ts';
import { YTNode } from '../helpers.ts';

export class SecondarySearchContainer extends YTNode {
  static type = 'SecondarySearchContainer';

  contents;

  constructor(data: any) {
    super();
    this.contents = Parser.parse(data.contents);
  }
}
