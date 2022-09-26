import { Text } from '../misc/Text.ts';
import { YTNode } from '../../helpers.ts';

export class UpdateDescriptionAction extends YTNode {
  static type = 'UpdateDescriptionAction';

  description: Text;

  constructor(data: any) {
    super();
    this.description = new Text(data.description);
  }
}
