import { Parser } from '../index.ts';
import { Text } from '../misc/Text.ts';
import { TextRun } from '../misc/TextRun.ts';
import { Thumbnail } from '../misc/Thumbnail.ts';
import { NavigationEndpoint } from './NavigationEndpoint.ts';
import { timeToSeconds } from '../../utils/Utils.ts';

import { YTNode } from '../helpers.ts';

export class PlaylistPanelVideo extends YTNode {
  static type = 'PlaylistPanelVideo';

  title: Text;
  thumbnail: Thumbnail[];
  endpoint: NavigationEndpoint;
  selected: boolean;
  video_id: string;

  duration: {
    text: string;
    seconds: number;
  };

  author: string;

  album?: {
    id: string | undefined;
    name: string;
    year: string | undefined;
    endpoint: NavigationEndpoint | undefined;
  };

  artists?: {
    name: string;
    channel_id: string | undefined;
    endpoint: NavigationEndpoint | undefined;
  }[];

  badges;
  menu;
  set_video_id: string | undefined;

  constructor(data: any) {
    super();

    this.title = new Text(data.title);
    this.thumbnail = Thumbnail.fromResponse(data.thumbnail);
    this.endpoint = new NavigationEndpoint(data.navigationEndpoint);
    this.selected = data.selected;
    this.video_id = data.videoId;

    this.duration = {
      text: new Text(data.lengthText).toString(),
      seconds: timeToSeconds(new Text(data.lengthText).toString()),
    };

    const album = new Text(data.longBylineText).runs?.find((run: any) =>
      run.endpoint?.browse?.id.startsWith('MPR')
    );
    const artists = new Text(data.longBylineText).runs?.filter((run: any) =>
      run.endpoint?.browse?.id.startsWith('UC')
    );

    this.author = new Text(data.shortBylineText).toString();

    if (album) {
      this.album = {
        id: (album as TextRun).endpoint?.browse?.id,
        name: (album as TextRun).text,
        year: new Text(data.longBylineText).runs?.slice(-1)[0].text,
        endpoint: (album as TextRun).endpoint,
      };
    }

    if (artists) {
      this.artists = artists.map((artist) => ({
        name: (artist as TextRun).text,
        channel_id: (artist as TextRun).endpoint?.browse?.id,
        endpoint: (artist as TextRun).endpoint,
      }));
    }

    this.badges = Parser.parse(data.badges);
    this.menu = Parser.parse(data.menu);
    this.set_video_id = data.playlistSetVideoId;
  }
}
