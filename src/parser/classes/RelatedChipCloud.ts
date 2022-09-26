import { Parser } from '../index.ts';
import { YTNode } from '../helpers.ts';

export class RelatedChipCloud extends YTNode {
  static type = 'RelatedChipCloud';

  content;

  constructor(data: any) {
    super();
    this.content = Parser.parse(data.content);
  }
}
