import Parser from '../index.ts';
import { YTNode } from '../helpers.ts';

class RichSection extends YTNode {
  static type = 'RichSection';

  contents;

  constructor(data: any) {
    super();
    this.contents = Parser.parse(data.content);
  }
}

export default RichSection;
