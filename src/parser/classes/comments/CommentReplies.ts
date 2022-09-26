import { Parser } from '../../index.ts';
import { YTNode } from '../../helpers.ts';

export class CommentReplies extends YTNode {
  static type = 'CommentReplies';

  contents;
  view_replies;
  hide_replies;

  constructor(data: any) {
    super();
    this.contents = Parser.parse(data.contents);
    this.view_replies = Parser.parse(data.viewReplies);
    this.hide_replies = Parser.parse(data.hideReplies);
  }
}
