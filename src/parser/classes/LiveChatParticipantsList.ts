import { Parser } from '../index.ts';
import { Text } from './misc/Text.ts';
import { YTNode } from '../helpers.ts';

export class LiveChatParticipantsList extends YTNode {
  static type = 'LiveChatParticipantsList';

  title: Text;
  participants;

  constructor(data: any) {
    super();
    this.title = new Text(data.title);
    this.participants = Parser.parse(data.participants);
  }
}
