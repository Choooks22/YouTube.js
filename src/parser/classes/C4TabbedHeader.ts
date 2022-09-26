import { Parser } from '../index.ts';
import { Author } from '../misc/Author.ts';
import { Thumbnail } from '../misc/Thumbnail.ts';
import { Text } from '../misc/Text.ts';
import { YTNode } from '../helpers.ts';

export class C4TabbedHeader extends YTNode {
  static type = 'C4TabbedHeader';

  author;
  banner;
  tv_banner;
  mobile_banner;
  subscribers;
  sponsor_button;
  subscribe_button;
  header_links;

  constructor(data: any) {
    super();
    this.author = new Author(
      {
        simpleText: data.title,
        navigationEndpoint: data.navigationEndpoint,
      },
      data.badges,
      data.avatar,
    );

    this.banner = data.banner ? Thumbnail.fromResponse(data.banner) : [];
    this.tv_banner = data.tvBanner ? Thumbnail.fromResponse(data.tvBanner) : [];
    this.mobile_banner = data.mobileBanner
      ? Thumbnail.fromResponse(data.mobileBanner)
      : [];
    this.subscribers = new Text(data.subscriberCountText);
    this.sponsor_button = data.sponsorButton
      ? Parser.parseItem(data.sponsorButton)
      : undefined;
    this.subscribe_button = data.subscribeButton
      ? Parser.parseItem(data.subscribeButton)
      : undefined;
    this.header_links = data.headerLinks
      ? Parser.parse(data.headerLinks)
      : undefined;
  }
}
