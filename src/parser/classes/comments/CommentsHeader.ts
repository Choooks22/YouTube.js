import { Parser } from '../../index.ts';
import { Text } from '../misc/Text.ts';
import { Thumbnail } from '../misc/Thumbnail.ts';
import { YTNode } from '../../helpers.ts';

export class CommentsHeader extends YTNode {
  static type = 'CommentsHeader';

  title: Text;
  count: Text;
  comments_count: Text;
  create_renderer;
  sort_menu;

  custom_emojis: {
    emoji_id: string;
    shortcuts: string[];
    search_terms: string[];
    image: Thumbnail[];
    is_custom_emoji: boolean;
  }[] | null;

  constructor(data: any) {
    super();
    this.title = new Text(data.titleText);
    this.count = new Text(data.countText);
    this.comments_count = new Text(data.commentsCount);
    this.create_renderer = Parser.parseItem(data.createRenderer);
    this.sort_menu = Parser.parse(data.sortMenu);

    this.custom_emojis = data.customEmojis?.map((emoji: any) => ({
      emoji_id: emoji.emojiId,
      shortcuts: emoji.shortcuts,
      search_terms: emoji.searchTerms,
      image: Thumbnail.fromResponse(emoji.image),
      is_custom_emoji: emoji.isCustomEmoji,
    })) || null;
  }
}
