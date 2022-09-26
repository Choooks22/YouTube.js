import { Text } from '../misc/Text.ts';

import { YTNode } from '../../helpers.ts';

export class StatRow extends YTNode {
  static type = 'StatRow';

  title: Text;
  contents: Text;

  constructor(data: any) {
    super();
    this.title = new Text(data.title);
    this.contents = new Text(data.contents);
  }
}
