import { Parser } from '../index.ts';
import { Text } from '../misc/Text.ts';
import { Author } from '../misc/Author.ts';
import { timeToSeconds } from '../../utils/Utils.ts';
import { Thumbnail } from '../misc/Thumbnail.ts';
import { NavigationEndpoint } from './NavigationEndpoint.ts';
import { YTNode } from '../helpers.ts';

export class CompactVideo extends YTNode {
  static type = 'CompactVideo';

  id: string;
  thumbnails: Thumbnail[];
  rich_thumbnail;
  title: Text;
  author: Author;
  view_count: Text;
  short_view_count: Text;
  published: Text;

  duration: {
    text: string;
    seconds: number;
  };

  thumbnail_overlays;
  endpoint: NavigationEndpoint;
  menu;

  constructor(data: any) {
    super();
    this.id = data.videoId;
    this.thumbnails = Thumbnail.fromResponse(data.thumbnail) || null;
    this.rich_thumbnail = data.richThumbnail &&
      Parser.parse(data.richThumbnail);
    this.title = new Text(data.title);
    this.author = new Author(
      data.longBylineText,
      data.ownerBadges,
      data.channelThumbnail,
    );
    this.view_count = new Text(data.viewCountText);
    this.short_view_count = new Text(data.shortViewCountText);
    this.published = new Text(data.publishedTimeText);

    this.duration = {
      text: new Text(data.lengthText).toString(),
      seconds: timeToSeconds(new Text(data.lengthText).toString()),
    };

    this.thumbnail_overlays = Parser.parse(data.thumbnailOverlays);
    this.endpoint = new NavigationEndpoint(data.navigationEndpoint);
    this.menu = Parser.parse(data.menu);
  }

  get best_thumbnail() {
    return this.thumbnails[0];
  }
}
