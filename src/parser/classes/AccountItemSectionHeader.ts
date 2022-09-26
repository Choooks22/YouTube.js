import { Text } from '../misc/Text.ts';
import { YTNode } from '../helpers.ts';

export class AccountItemSectionHeader extends YTNode {
  static type = 'AccountItemSectionHeader';

  title: Text;

  constructor(data: any) {
    super();
    this.title = new Text(data.title);
  }
}
