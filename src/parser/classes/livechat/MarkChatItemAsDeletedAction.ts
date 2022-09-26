import { Text } from '../misc/Text.ts';
import { YTNode } from '../../helpers.ts';

export class MarkChatItemAsDeletedAction extends YTNode {
  static type = 'MarkChatItemAsDeletedAction';

  deleted_state_message: Text;
  target_item_id: string;

  constructor(data: any) {
    super();
    this.deleted_state_message = new Text(data.deletedStateMessage);
    this.target_item_id = data.targetItemId;
  }
}
