import { Parser } from '../index.ts';
import { Text } from './misc/Text.ts';
import { NavigationEndpoint } from './NavigationEndpoint.ts';
import { YTNode } from '../helpers.ts';

export class VerticalWatchCardList extends YTNode {
  static type = 'VerticalWatchCardList';

  items;
  contents;
  view_all_text: Text;
  view_all_endpoint: NavigationEndpoint;

  constructor(data: any) {
    super();
    this.items = Parser.parse(data.items);
    this.contents = this.items; // XXX: alias for consistency
    this.view_all_text = new Text(data.viewAllText);
    this.view_all_endpoint = new NavigationEndpoint(data.viewAllEndpoint);
  }
}
