import { Author } from '../misc/Author.ts';
import { NavigationEndpoint } from './NavigationEndpoint.ts';
import { Text } from '../misc/Text.ts';
import { YTNode } from '../helpers.ts';

export class Channel extends YTNode {
  static type = 'Channel';

  id: string;
  author: Author;
  subscribers: Text;
  videos: Text;
  endpoint: NavigationEndpoint;
  description_snippet: Text;

  constructor(data: any) {
    super();
    this.id = data.channelId;

    this.author = new Author(
      {
        ...data.title,
        navigationEndpoint: data.navigationEndpoint,
      },
      data.ownerBadges,
      data.thumbnail,
    );

    this.subscribers = new Text(data.subscriberCountText);
    this.videos = new Text(data.videoCountText);
    this.endpoint = new NavigationEndpoint(data.navigationEndpoint);
    this.description_snippet = new Text(data.descriptionSnippet);
  }
}
