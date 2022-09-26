import { Parser } from '../index.ts';
import { Text } from '../misc/Text.ts';
import { NavigationEndpoint } from './NavigationEndpoint.ts';
import { YTNode } from '../helpers.ts';

export class SearchBox extends YTNode {
  static type = 'SearchBox';

  endpoint: NavigationEndpoint;
  search_button;
  clear_button;
  placeholder_text: Text;

  constructor(data: any) {
    super();
    this.endpoint = new NavigationEndpoint(data.endpoint);
    this.search_button = Parser.parse(data.searchButton);
    this.clear_button = Parser.parse(data.clearButton);
    this.placeholder_text = new Text(data.placeholderText);
  }
}
