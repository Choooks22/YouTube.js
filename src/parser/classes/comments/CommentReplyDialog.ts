import { Parser } from '../../index.ts';
import { Thumbnail } from '../misc/Thumbnail.ts';
import { Text } from '../misc/Text.ts';
import { YTNode } from '../../helpers.ts';

export class CommentReplyDialog extends YTNode {
  static type = 'CommentReplyDialog';

  reply_button;
  cancel_button;
  author_thumbnail;
  placeholder;
  error_message;

  constructor(data: any) {
    super();
    this.reply_button = Parser.parse(data.replyButton);
    this.cancel_button = Parser.parse(data.cancelButton);
    this.author_thumbnail = Thumbnail.fromResponse(data.authorThumbnail);
    this.placeholder = new Text(data.placeholderText);
    this.error_message = new Text(data.errorMessage);
  }
}
