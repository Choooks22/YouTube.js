import { Parser } from '../index.ts';
import { Text } from '../misc/Text.ts';
import { NavigationEndpoint } from './NavigationEndpoint.ts';

import { YTNode } from '../helpers.ts';

export class PlaylistSidebarPrimaryInfo extends YTNode {
  static type = 'PlaylistSidebarPrimaryInfo';

  stats: Text[];
  thumbnail_renderer;
  title: Text;
  menu;
  endpoint: NavigationEndpoint;
  description: Text;

  constructor(data: any) {
    super();
    this.stats = data.stats.map((stat: any) => new Text(stat));
    this.thumbnail_renderer = Parser.parse(data.thumbnailRenderer);
    this.title = new Text(data.title);
    this.menu = data.menu && Parser.parse(data.menu);
    this.endpoint = new NavigationEndpoint(data.navigationEndpoint);
    this.description = new Text(data.description);
  }
}
