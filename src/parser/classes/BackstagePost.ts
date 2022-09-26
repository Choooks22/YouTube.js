import Parser from '../index.ts';
import Author from './misc/Author.ts';
import Text from './misc/Text.ts';
import NavigationEndpoint from './NavigationEndpoint.ts';

import { YTNode } from '../helpers.ts';

class BackstagePost extends YTNode {
  static type = 'BackstagePost';

  id: string;
  author: Author;
  content: Text;
  published: Text;
  poll_status: string;
  vote_status: string;
  likes: Text;
  menu;
  actions;
  vote_button;
  surface: string;
  endpoint: NavigationEndpoint;
  attachment;

  constructor(data: any) {
    super();

    this.id = data.postId;

    this.author = new Author(
      {
        ...data.authorText,
        navigationEndpoint: data.authorEndpoint,
      },
      null,
      data.authorThumbnail,
    );

    this.content = new Text(data.contentText);
    this.published = new Text(data.publishedTimeText);
    this.poll_status = data.pollStatus;
    this.vote_status = data.voteStatus;
    this.likes = new Text(data.voteCount);
    this.menu = Parser.parse(data.actionMenu) || null;
    this.actions = Parser.parse(data.actionButtons);
    this.vote_button = Parser.parse(data.voteButton);
    this.surface = data.surface;
    this.endpoint = new NavigationEndpoint(data.navigationEndpoint);
    this.attachment = Parser.parse(data.backstageAttachment) || null;
  }
}

export default BackstagePost;
