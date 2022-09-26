import { Parser } from '../index.ts';
import { YTNode } from '../helpers.ts';

export class BackstagePostThread extends YTNode {
  static type = 'BackstagePostThread';

  post;

  constructor(data: any) {
    super();
    this.post = Parser.parse(data.post);
  }
}
