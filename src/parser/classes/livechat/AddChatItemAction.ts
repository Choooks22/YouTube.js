import { Parser } from '../../index.ts';
import { YTNode } from '../../helpers.ts';

export class AddChatItemAction extends YTNode {
  static type = 'AddChatItemAction';

  item;
  client_id: string | null;

  constructor(data: any) {
    super();
    this.item = Parser.parseItem(data.item);
    this.client_id = data.clientId || null;
  }
}
