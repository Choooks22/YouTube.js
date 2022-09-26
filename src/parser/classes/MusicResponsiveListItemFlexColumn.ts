import { Text } from './misc/Text.ts';
import { YTNode } from '../helpers.ts';

export class MusicResponsiveListItemFlexColumn extends YTNode {
  static type = 'musicResponsiveListItemFlexColumnRenderer';

  title: Text;
  display_priority: string;

  constructor(data: any) {
    super();
    this.title = new Text(data.text);
    this.display_priority = data.displayPriority;
  }
}
