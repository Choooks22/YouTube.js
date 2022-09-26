import { Parser } from '../index.ts';
import { YTNode } from '../helpers.ts';

export class RichItem extends YTNode {
  static type = 'RichItem';

  content;

  constructor(data: any) {
    super();
    // TODO: check this
    this.content = Parser.parse(data.content);
  }
}
