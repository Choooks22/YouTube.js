import { Text } from '../misc/Text.ts';
import { Parser } from '../index.ts';
import { Thumbnail } from '../misc/Thumbnail.ts';
import { PlaylistAuthor } from '../misc/PlaylistAuthor.ts';
import { NavigationEndpoint } from './NavigationEndpoint.ts';
import { YTNode } from '../helpers.ts';

export class PlaylistVideo extends YTNode {
  static type = 'PlaylistVideo';

  id: string;
  index: Text;
  title: Text;
  author: PlaylistAuthor;
  thumbnails: Thumbnail[];
  thumbnail_overlays;
  set_video_id: string | undefined;
  endpoint: NavigationEndpoint;
  is_playable: boolean;
  menu;

  duration: {
    text: string;
    seconds: number;
  };

  constructor(data: any) {
    super();
    this.id = data.videoId;
    this.index = new Text(data.index);
    this.title = new Text(data.title);
    this.author = new PlaylistAuthor(data.shortBylineText);
    this.thumbnails = Thumbnail.fromResponse(data.thumbnail);
    this.thumbnail_overlays = Parser.parse(data.thumbnailOverlays);
    this.set_video_id = data?.setVideoId;
    this.endpoint = new NavigationEndpoint(data.navigationEndpoint);
    this.is_playable = data.isPlayable;
    this.menu = Parser.parse(data.menu);
    this.duration = {
      text: new Text(data.lengthText).text,
      seconds: parseInt(data.lengthSeconds),
    };
  }
}
