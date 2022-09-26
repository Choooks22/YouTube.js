import { Text } from './misc/Text.ts';
import { YTNode } from '../helpers.ts';

export class Message extends YTNode {
  static type = 'Message';

  text: string;

  constructor(data: any) {
    super();
    this.text = new Text(data.text).toString();
  }
}
