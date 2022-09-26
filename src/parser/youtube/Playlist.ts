import Actions from '../../core/Actions.ts';
import Feed from '../../core/Feed.ts';

import Thumbnail from '../classes/misc/Thumbnail.ts';
import VideoOwner from '../classes/VideoOwner.ts';

import PlaylistSidebar from '../classes/PlaylistSidebar.ts';
import PlaylistMetadata from '../classes/PlaylistMetadata.ts';
import PlaylistSidebarPrimaryInfo from '../classes/PlaylistSidebarPrimaryInfo.ts';
import PlaylistSidebarSecondaryInfo from '../classes/PlaylistSidebarSecondaryInfo.ts';
import PlaylistVideoThumbnail from '../classes/PlaylistVideoThumbnail.ts';
import PlaylistHeader from '../classes/PlaylistHeader.ts';

class Playlist extends Feed {
  info;
  menu;
  endpoint;

  constructor(actions: Actions, data: any, already_parsed = false) {
    super(actions, data, already_parsed);

    const header = this.page.header.item().as(PlaylistHeader);
    const primary_info = this.page.sidebar?.as(PlaylistSidebar).contents.array()
      .firstOfType(PlaylistSidebarPrimaryInfo);
    const secondary_info = this.page.sidebar?.as(PlaylistSidebar).contents
      .array().firstOfType(PlaylistSidebarSecondaryInfo);

    this.info = {
      ...this.page.metadata.item().as(PlaylistMetadata),
      ...{
        author: secondary_info?.owner.item().as(VideoOwner).author,
        thumbnails: primary_info?.thumbnail_renderer.item().as(
          PlaylistVideoThumbnail,
        ).thumbnail as Thumbnail[],
        total_items: this.#getStat(0, primary_info),
        views: this.#getStat(1, primary_info),
        last_updated: this.#getStat(2, primary_info),
        can_share: header.can_share,
        can_delete: header.can_delete,
        is_editable: header.is_editable,
        privacy: header.privacy,
      },
    };

    this.menu = primary_info?.menu;
    this.endpoint = primary_info?.endpoint;
  }

  #getStat(index: number, primary_info?: PlaylistSidebarPrimaryInfo): string {
    if (!primary_info || !primary_info.stats) return 'N/A';
    return primary_info.stats[index]?.toString() || 'N/A';
  }

  get items() {
    return this.videos;
  }
}

export default Playlist;
