import { Text } from '../../misc/Text.ts';
import { Thumbnail } from '../../misc/Thumbnail.ts';
import { NavigationEndpoint } from '../../NavigationEndpoint.ts';
import { MetadataBadge } from '../../MetadataBadge.ts';
import { LiveChatAuthorBadge } from '../../LiveChatAuthorBadge.ts';
import { Parser } from '../../../index.ts';

import { YTNode } from '../../../helpers.ts';

export class LiveChatTickerPaidMessageItem extends YTNode {
  static type = 'LiveChatTickerPaidMessageItem';

  author: {
    id: string;
    thumbnails: Thumbnail[];
    badges: LiveChatAuthorBadge[] | MetadataBadge[];
    is_moderator: boolean | null;
    is_verified: boolean | null;
    is_verified_artist: boolean | null;
  };

  amount: Text;
  duration_sec: string; // Or number?
  full_duration_sec: string;
  show_item;
  show_item_endpoint: NavigationEndpoint;
  id: string;

  constructor(data: any) {
    super();

    this.author = {
      id: data.authorExternalChannelId,
      thumbnails: Thumbnail.fromResponse(data.authorPhoto),
      badges: Parser.parseArray<LiveChatAuthorBadge | MetadataBadge>(
        data.authorBadges,
        [MetadataBadge, LiveChatAuthorBadge],
      ),
      is_moderator: null,
      is_verified: null,
      is_verified_artist: null,
    };

    const badges = Parser.parseArray<LiveChatAuthorBadge | MetadataBadge>(
      data.authorBadges,
      [MetadataBadge, LiveChatAuthorBadge],
    );

    this.author.badges = badges;
    this.author.is_moderator =
      badges?.some((badge) => badge.icon_type == 'MODERATOR') || null;
    this.author.is_verified =
      badges?.some((badge) => badge.style == 'BADGE_STYLE_TYPE_VERIFIED') ||
      null;
    this.author.is_verified_artist =
      badges?.some((badge) =>
        badge.style == 'BADGE_STYLE_TYPE_VERIFIED_ARTIST'
      ) || null;
    this.amount = new Text(data.amount);
    this.duration_sec = data.durationSec;
    this.full_duration_sec = data.fullDurationSec;
    this.show_item = Parser.parse(
      data.showItemEndpoint.showLiveChatItemEndpoint.renderer,
    );
    this.show_item_endpoint = new NavigationEndpoint(data.showItemEndpoint);
    this.id = data.id;
  }
}
