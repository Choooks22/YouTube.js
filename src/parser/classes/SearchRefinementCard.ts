import { NavigationEndpoint } from './NavigationEndpoint.ts';
import { Thumbnail } from './misc/Thumbnail.ts';
import { Text } from './misc/Text.ts';
import { YTNode } from '../helpers.ts';

export class SearchRefinementCard extends YTNode {
  static type = 'SearchRefinementCard';

  thumbnails: Thumbnail[];
  endpoint: NavigationEndpoint;
  query: string;

  constructor(data: any) {
    super();
    this.thumbnails = Thumbnail.fromResponse(data.thumbnail);
    this.endpoint = new NavigationEndpoint(data.searchEndpoint);
    this.query = new Text(data.query).toString();
  }
}
