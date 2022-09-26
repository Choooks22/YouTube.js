import { Parser } from '../index.ts';
import { YTNode } from '../helpers.ts';

export class Tabbed extends YTNode {
  static type = 'Tabbed';

  contents;

  constructor(data: any) {
    super();
    // TODO: use parseArray instead
    this.contents = Parser.parse(data);
  }
}
