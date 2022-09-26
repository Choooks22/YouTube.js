import { Parser } from '../index.ts';
import { YTNode } from '../helpers.ts';

export class RichSection extends YTNode {
  static type = 'RichSection';

  contents;

  constructor(data: any) {
    super();
    this.contents = Parser.parse(data.content);
  }
}
