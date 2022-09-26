import { Text } from './misc/Text.ts';
import { YTNode } from '../helpers.ts';

export class GridHeader extends YTNode {
  static type = 'GridHeader';

  title: Text;

  constructor(data: any) {
    super();
    this.title = new Text(data.title);
  }
}
