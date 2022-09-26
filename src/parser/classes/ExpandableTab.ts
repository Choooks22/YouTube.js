import Parser from '../index.ts';
import NavigationEndpoint from './NavigationEndpoint.ts';
import { YTNode } from '../helpers.ts';

class ExpandableTab extends YTNode {
  static type = 'ExpandableTab';

  title: string;
  endpoint: NavigationEndpoint;
  selected: boolean;
  content;

  constructor(data: any) {
    super();
    this.title = data.title;
    this.endpoint = new NavigationEndpoint(data.endpoint);
    this.selected = data.selected; // If this.selected then we may have content else we do not
    this.content = data.content ? Parser.parse(data.content) : null;
  }
}

export default ExpandableTab;
