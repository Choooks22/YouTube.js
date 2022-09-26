import { Parser } from '../index.ts';
import { YTNode } from '../helpers.ts';

export class SingleColumnMusicWatchNextResults extends YTNode {
  static type = 'SingleColumnMusicWatchNextResults';

  contents;

  constructor(data: any) {
    super();
    this.contents = Parser.parse(data);
  }
}
